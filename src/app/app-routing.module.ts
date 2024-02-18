import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoFound404Component } from './shared/pages/no-found404/no-found404.component';

const routes: Routes = [
  {
    path: 'frases',
    loadChildren: () => import('./frases/frases.module').then(m => m.FrasesModule)
  },
  {
    path: '404',
    component: NoFound404Component
  },
  {
    path: '',
    redirectTo: 'frases',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
