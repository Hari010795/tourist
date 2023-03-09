import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TouristService } from '../tourist.service';
@Component({
  selector: 'app-matpopoup',
  templateUrl: './matpopup.component.html',
  styleUrls: ['./matpopup.component.css']
})
export class MatpopoupComponent implements OnInit {

  constructor(private Ref:MatDialogRef<MatpopoupComponent>,
    private http:HttpClient,public toursvc: TouristService) { }

  ngOnInit(): void {
    
  }
  closepopup(){
    this.Ref.close()
  }
  
  getUserFormData(data:any){
    this.toursvc.saveuser(data).subscribe((result)=>{
      console.log(result)
      // window.location.reload()

    }
    
    )
    console.log(data)
  }

  




}
