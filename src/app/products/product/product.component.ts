import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FlaskdemoService } from '../../flaskdemo.service';
import { ConfirmationDialogueComponent } from '../confirmation-dialogue/confirmation-dialogue.component';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductComponent implements OnInit {

  productsdata :any[]=[];
  
  
  constructor(
    private __flaskdemoservice : FlaskdemoService,
    private router : Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if (localStorage.getItem("currentUser") == null) {
      this.router.navigate(['users/login']);
    }
    this.__flaskdemoservice.getAllProducts()
    .subscribe(
        response => {
           this.productsdata = JSON.parse(JSON.stringify(response));
           console.log(response);
        },
        (error) => {
           //Handle the error here
           //If not handled, then throw it
           throw error; 
        }
        
        );
   }

  addProduct(productName:String){
    console.log(this.productsdata);
    this.__flaskdemoservice.addProducts(productName,11,33);
    this.snackBar.open(productName+' product Added Successfully !!', 'Fechar', {
      duration: 2000,
    });
   
  }

  deleteProduct( productName :String) {
    
    const dialogRef = this.dialog.open(ConfirmationDialogueComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No'
        }
      }
    });
    const snack = this.snackBar.open('Deleting selected product : '+productName);
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
      console.log('delete in component confirmed var-->');
      console.log(confirmed);

        this.productsdata = this.productsdata.filter((value,key)=>{
          return value.name != productName;
        }); 
        this.__flaskdemoservice.deleteProduct(productName);
        snack.dismiss();
        const a = document.createElement('a');
        a.click();
        a.remove();
        snack.dismiss();
        this.snackBar.open(productName+' Login as admin !!', 'Fechar', {
          
        //this.snackBar.open(productName+' Product Deleted Successfully !!', 'Fechar', {
          duration: 2000,
        });
      }else{
        const snack = this.snackBar.open('Cancelled Deleting selected store : '+productName);
      }
    });
    
    
    console.log(this.productsdata);
 
  }

}
