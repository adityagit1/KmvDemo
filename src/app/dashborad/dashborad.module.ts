import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './dashborad.component';

const routes: Routes = [
  {path: '', component: DashboradComponent, pathMatch: 'full'}
];
@NgModule({
  declarations: [
    DashboradComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DashboradModule { }
