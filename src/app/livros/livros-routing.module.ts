import { Routes } from "@angular/router";
import { ListarLivrosComponent } from "./listar";

export const LivroRoute: Routes = [
    {
        path: 'livros',
        redirectTo: 'livros/listar'
    },
    {
        path: 'livros/listar',
        component: ListarLivrosComponent
    }
];