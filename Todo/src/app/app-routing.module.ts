import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemComponent} from './item/item.component';

const routes: Routes = [
  {path:'',redirectTo:'/item', pathMatch:'full'},
  {path:'item',component:ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
