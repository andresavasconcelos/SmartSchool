import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css'],
})
export class AlunosComponent implements OnInit {

    title = 'Alunos';
    public alunoSelecionado!: Aluno;

    public alunos = [
     {id: 1, nome: 'Marta', sobrenome:'Kent', telefone: 1145 },
     {id: 2, nome: 'Paula', sobrenome:'Isabela', telefone: 11253 },
     {id: 3, nome: 'Laura', sobrenome:'Antonia', telefone: 1244 },
     {id: 4, nome: 'Luiza', sobrenome:'Maria', telefone: 1158 },
     {id: 5, nome: 'Lucas', sobrenome:'Machado', telefone: 1145 },
     {id: 6, nome: 'Pedro', sobrenome:'Alves', telefone: 1145 },
     {id: 7, nome: 'Paulo', sobrenome:'José', telefone: 1145 },
    ];

    alunoSelect(aluno: Aluno)
    {
      this.alunoSelecionado = aluno;
    }

    voltar()
    {
      this.alunoSelecionado = 0;
    }

  constructor() { }

  ngOnInit(){ }

}
