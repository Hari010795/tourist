import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(public http: HttpClient) {

  }
  private refreshrequired= new Subject<void>()

  getRefreshrequired(){

    return this.refreshrequired;
    
  } 


  getTourist(): Observable<any> {
    return this.http.get('http://restapi.adequateshop.com/api/Tourist')
    .pipe(map(response => ({
      response
    })
    )
    )
  }


  saveuser(data:any): Observable<any> {
  return this.http.post('http://restapi.adequateshop.com/api/Tourist',data) // 'data' parameter stores the value given by user 
  .pipe(
    tap(()=>{
      this.getRefreshrequired().next(); // pipe.tap is used to update the value by auto refreshing
    })
    );
    }


}
