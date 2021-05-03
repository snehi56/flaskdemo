import { Component, OnInit } from '@angular/core';
import { FlaskdemoService } from '../../flaskdemo.service';
import { StoreData } from '../store/storedata' ; 
import {animate, state, style, transition, trigger} from '@angular/animations';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class StoreComponent implements OnInit {
  
  //storedata! : StoreData[] ;
  storedata:any[]=[];
  storeId!: number;
  storeName!: String;

  columnsToDisplay =['id', 'name'];
  //addStore = false;
 // expandedElement: PeriodicElement | null;

  constructor(private __flaskdemoservice : FlaskdemoService) { }

  onTabClick(){
   // this.addStore = !this.addStore;  
  }

  ngOnInit(): void {
    
    this.__flaskdemoservice.getAllStores()
    .subscribe(
        response => {
          
          this.storedata = JSON.parse(JSON.stringify(response));
         // this.storedata = Array.of(response);
        });
    console.log("component after service");
    console.log( this.storedata);
  }

  deleteStore(storeName :String){
    this.__flaskdemoservice.deleteStore(storeName);
    console.log("deleted storeId");
  
  }

  addStore(storeName :String){
    this.__flaskdemoservice.addStore(storeName);
  }

  

}