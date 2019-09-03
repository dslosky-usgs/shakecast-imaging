import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImpactComponent } from './impact.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ImpactComponent
  ],
  exports: [
    ImpactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ImpactModule { }
