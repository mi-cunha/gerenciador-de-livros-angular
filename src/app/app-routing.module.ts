import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroRoute } from './livros';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'livros/listar',
    pathMatch: 'full'
  },
  ...LivroRoute
];

@NgModule({
  imports: [RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
