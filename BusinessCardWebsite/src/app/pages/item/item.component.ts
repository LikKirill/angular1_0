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
}
