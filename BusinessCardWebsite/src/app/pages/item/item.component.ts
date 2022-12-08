import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  public selectItems = [
    {
        id: 0,
        label: 'Игорь Люлюкин'
    },
    {
        id: 1,
        label: 'Любовь Скоробач'
    },
    {
        id: 2,
        label: 'Ксения Евстифеева'
    },
    {
        id: 3,
        label: 'Марина Блинова'
    }
  ];

  public formModel = {
    name: '',
    date: '',
    repeat: false,
    members: [],
    questions: [''],
    responsible: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  public get canAddQuestion(): boolean {
    return this.formModel.questions.length < 5;
  }

  public logger(): void {
    console.log(this.formModel);
  }

  public changeMembers(elements: any): void {
    this.formModel.members = elements.map((e: any) => e.label);
  }

  public addQuestion(): void {
    if (!this.canAddQuestion) {
      return;
    }

    this.formModel.questions.push('')
  }

  public trackByFn(index: number): number {
    return index;
  }

  public deleteQuestion(questionIndex: number): void {
    this.formModel.questions.splice(questionIndex, 1);
  }

  public moveUpQuestion(questionIndex: number): void {
    if (!this.canMoveUpQuestion(questionIndex)) {
      return;
    }

    this.replaceQuestions(questionIndex, questionIndex + 1);
  }

  public moveDownQuestion(questionIndex: number): void {
    if (!this.canMoveDownQuestion(questionIndex)) {
      return;
    }

    this.replaceQuestions(questionIndex, questionIndex - 1);
  }

  public replaceQuestions(index: number, replacementIndex: number): void {
    [this.formModel.questions[index], this.formModel.questions[replacementIndex]] =
    [this.formModel.questions[replacementIndex], this.formModel.questions[index]];
  }

  public canMoveUpQuestion(index: number) {
    return !(this.formModel.questions.length - 1 === index ||
      this.formModel.questions.length === 1);
  }

  public canMoveDownQuestion(index: number) {
    return !(index === 0);
  }
}
