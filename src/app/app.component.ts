import { MatpopoupComponent } from './matpopup/matpopup.component';
import { TouristService } from './tourist.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
// import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tourists';
  displayedColumns: string[] = ['tourist_name', 'tourist_email', 'tourist_location', 'update']
  // dataSource : any[] = [];

  @ViewChild('paginator') private paginator!: MatPaginator;
  // dataSource: any;
  dataSource = new MatTableDataSource<any>([])
  constructor(public toursvc: TouristService,
    private dialog:MatDialog
    ) { }
  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
     this.getall();


    this.toursvc.getRefreshrequired().subscribe(response =>{
    this.getall()
    
  })
    
  }

  getall(){
    this.toursvc.getTourist().subscribe(
      response => {
        this.dataSource.data= response.response.data;
        console.log(this.dataSource);
        console.log(response);
        

      }
    )
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  opendialog(){

    const popup =  this.dialog.open(MatpopoupComponent);
     popup.afterClosed().subscribe(data=>
      {
        console.log(data,'fyfyf')
      })
  }




}
