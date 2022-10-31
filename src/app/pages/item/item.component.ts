import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  public selectItems = [
    {
      id: 0,
      label: 'Игорь Люлюкин',
    },
    {
      id: 1,
      label: 'Любовь Скоробач',
    },
    {
      id: 2,
      label: 'Ксения Евстифеева',
    },
    {
      id: 3,
      label: 'Марина Блинова',
    },
  ];

  public formModel = {
    name: '',
    date: '',
    repeat: false,
    members: [],
    questions: [''],
    portalManager: null,
  };

  constructor() {}

  ngOnInit(): void {}

  public logger(): void {
    console.log(this.formModel);
  }

  public changeMembers(elements: any): void {
    this.formModel.members = elements.map((item: any) => {
      return item.label;
    });
  }

  public addQuestion(): void {
    if (this.formModel.questions.length < 5) {
      this.formModel.questions.push('');
    }
  }

  public get isQuestionsCompleted(): boolean {
    return this.formModel.questions.length >= 5;
  }

  public trackByFn(index: number) {
    return index;
  }
}
