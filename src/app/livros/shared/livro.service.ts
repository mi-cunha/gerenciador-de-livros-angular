import { Injectable } from '@angular/core';
import { Livro } from './livro.model';

@Injectable()
export class LivroService {

  constructor() { }

  listarTodos(): Livro[]{
    const livros = localStorage['livros'];
    // ? é um operador ternario, como um if.
    // Se a condição é verdadeira, executa o que está antes dos :, se não, executa o que está depois
    return livros ? JSON.parse(livros): [];
  }
}
