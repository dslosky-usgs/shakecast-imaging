import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { MapComponent } from './map/map.component';
import { ImpactOverlaysPipe } from './impact-overlays.pipe';


@NgModule({
  declarations: [MapComponent, ImpactOverlaysPipe],
  exports: [
    MapComponent,
    ImpactOverlaysPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
