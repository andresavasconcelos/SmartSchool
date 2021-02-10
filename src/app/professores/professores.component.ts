import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  title = 'Professores';
  public professorSelecionado!: string;

  public professores = [
    {id: 1, nome: 'Lauro', disciplina: 'Matemática'},
    {id: 2, nome: 'Roberto', disciplina: 'Física'},
    {id: 3, nome: 'Ronaldo', disciplina: 'Português'},
    {id: 4, nome: 'Rodrigo', disciplina: 'Inglês'},
    {id: 5, nome: 'Alexandr', disciplina: 'Quimica'},
  ];

  professorSelect(aluno: any)
  {
    this.professorSelecionado = aluno.nome;
  }

  voltar()
  {
     this.professorSelecionado = '';
  }
  constructor() {}

  ngOnInit() {}

}
