import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [],
  providers: [],
  exports: [],
})
export class AppModule {}
