import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoFound404Component } from "./pages/no-found404/no-found404.component";

const routes: Routes = [
  {
    path: 'no-encontrado',
    component: NoFound404Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule{}
