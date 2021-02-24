import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.scss']
})
export class ProfessoresComponent implements OnInit {

  public profForm!: FormGroup;
  public title = 'Professores';
  public textSimple!: string;
  public professorSelecionado!: Professor;

  public professores = [
    {id: 1, nome: 'Lauro', disciplina: 'Matemática'},
    {id: 2, nome: 'Roberto', disciplina: 'Física'},
    {id: 3, nome: 'Ronaldo', disciplina: 'Português'},
    {id: 4, nome: 'Rodrigo', disciplina: 'Inglês'},
    {id: 5, nome: 'Alexandr', disciplina: 'Quimica'},
  ];

  constructor(private fb: FormBuilder)
  {
    this.criarForm();
  }

  ngOnInit() {}

  criarForm()
  {
    this.profForm = this.fb.group({
      nome: [''],
      disciplina: [''],
    });
  }

  alunoSubmit(){
    console.log(this.profForm.value);
  }

  professorSelect(professor: Professor)
  {
    this.professorSelecionado = professor;
  }

  voltar(professor: Professor)
  {
     this.professorSelecionado = professor;
     professor == null;
  }


}
