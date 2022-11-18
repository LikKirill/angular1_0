import { Component, OnInit } from '@angular/core';

const MAX_QUESTIONS_SIZE = 5;
type Movement = 'up' | 'down';
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
    if (this.formModel.questions.length < MAX_QUESTIONS_SIZE) {
      this.formModel.questions.push('');
    }
  }

  public deleteQuestion(index: number): void {
    this.formModel.questions.splice(index, 1);
  }

  public moveQuestion(index: number, type: Movement): void {
    const question = this.formModel.questions[index];
    if (type === 'up') {
      if (index > 0) {
        this.formModel.questions.splice(index, 1);
        this.formModel.questions.splice(index - 1, 0, question);
      }
    } else {
      if (index < MAX_QUESTIONS_SIZE - 1) {
        this.formModel.questions.splice(index, 1);
        this.formModel.questions.splice(index + 1, 0, question);
      }
    }
  }

  public get isQuestionsCompleted(): boolean {
    return this.formModel.questions.length >= MAX_QUESTIONS_SIZE;
  }

  public trackByFn(index: number) {
    return index;
  }

  public validate() {
    if (!this.formModel.name || !this.formModel.date) {
      return false;
    }
    return true;
  }
  public save(): void {
    if (this.validate()) {
      fetch('http://localhost:4100/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.formModel),
      }).then(() => {
        this.formModel = {
          name: '',
          date: '',
          repeat: false,
          members: [],
          questions: [''],
          portalManager: null,
        };
      });
    }else{
      alert("Заполните обязательный поля");
    }
  }
}
