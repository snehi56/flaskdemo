import { Component, OnInit } from '@angular/core';
import { FlaskdemoService } from '../../flaskdemo.service';
import { StoreData } from '../store/storedata' ; 

import {animate, state, style, transition, trigger} from '@angular/animations';

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
  
  storedata : StoreData[] ;
  columnsToDisplay =['id', 'name'];
 // expandedElement: PeriodicElement | null;

  constructor(private __flaskdemoservice : FlaskdemoService) { }

  ngOnInit(): void {
    
    /*this.storedata =  this.__flaskdemoservice.getAllStores();
    console.log("component after service");
    console.log( this.storedata);
*/

    this.__flaskdemoservice.getAllStores()
    .subscribe(storedata => this.storedata = storedata);
    console.log("component after service");
    console.log( this.storedata);

  }

}