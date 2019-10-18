import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'test/:id', component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
