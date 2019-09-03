import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [MapComponent],
  exports: [
    MapComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
