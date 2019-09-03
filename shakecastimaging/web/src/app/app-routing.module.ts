import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImpactComponent } from './impact/impact.component';

const routes: Routes = [
  { path: 'impact', component: ImpactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
