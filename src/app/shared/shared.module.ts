import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoFound404Component } from './pages/no-found404/no-found404.component';



@NgModule({
  declarations: [
    NoFound404Component
  ],
  exports: [
    NoFound404Component
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
