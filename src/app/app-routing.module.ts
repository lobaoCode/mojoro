
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { BancoCrudComponent } from './views/banco-crud/banco-crud.component';
import { BancoCreateComponent } from './components/banco/banco-create/banco-create.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "banco",
    component: BancoCrudComponent
  },
  {
    path: "banco/movimentacao",
    component: BancoCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
