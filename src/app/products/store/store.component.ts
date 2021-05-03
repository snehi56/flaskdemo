import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlaskdemoService } from '../../flaskdemo.service';
import { StoreData } from '../store/storedata' ; 

import { ConfirmationDialogueComponent } from '../confirmation-dialogue/confirmation-dialogue.component';

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

  constructor(private __flaskdemoservice : FlaskdemoService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }

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

  openDialog(){
   // this.__flaskdemoservice.deleteStore(storeName);
    console.log("deleted storeId");
  
  }

  addStore(storeName :String){
    this.__flaskdemoservice.addStore(storeName);
  }

  deleteStore( storeName :String) {
    const dialogRef = this.dialog.open(ConfirmationDialogueComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    const snack = this.snackBar.open('Deleting selected store : '+storeName);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.__flaskdemoservice.deleteStore(storeName);
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open(storeName+' Store Deleted Successfully !!', 'Fechar', {
          duration: 2000,
        });
      }else{
        const snack = this.snackBar.open('Cancelled Deleting selected store : '+storeName);
      }
    });
    this.__flaskdemoservice.getAllStores()
    .subscribe(
        response => {
           this.storedata = JSON.parse(JSON.stringify(response));
         // this.storedata = Array.of(response);
        });
  }


  

}