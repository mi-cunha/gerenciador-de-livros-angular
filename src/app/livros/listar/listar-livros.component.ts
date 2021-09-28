import { Component, OnInit } from '@angular/core';
import { LivroService, Livro } from '../shared';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
  livros: Livro[];

  constructor(private LivroService : LivroService) { }

  ngOnInit(){
    this.livros = this.listarTodos();
    this.livros = [new Livro (1, 'Livro 01', 'Autor 1', 2, true)]
  }
  listarTodos(): Livro[]{
    return this.LivroService.listarTodos();
  }

}
