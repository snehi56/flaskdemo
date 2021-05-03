import { NgModule } from  '@angular/core';
//import { MatNativeDateModule } from  '@angular/material/date';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {  MatRadioModule} from  '@angular/material/radio';
import {  MatListModule} from  '@angular/material/list';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
imports: [MatSnackBarModule,MatDialogModule,MatDatepickerModule,MatIconModule,MatButtonModule, MatToolbarModule,FormsModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
 
exports: [MatSnackBarModule,MatDialogModule,FormsModule,
MatDatepickerModule,MatIconModule,MatButtonModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,],
 
})
 
export  class  MyMaterialModule { }