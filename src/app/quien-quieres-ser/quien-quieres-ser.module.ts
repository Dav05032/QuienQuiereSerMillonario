import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienQuiereSerComponent } from './quien-quiere-ser/quien-quiere-ser.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuienQuiereSerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    QuienQuiereSerComponent
  ]
})
export class QuienQuieresSerModule { }
