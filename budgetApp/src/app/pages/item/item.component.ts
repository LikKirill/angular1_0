import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

  private maxQuestion = 5;
  public selectItems = [{
          id: 0, 
          label: 'Маестро'
      }, 
      {
          id: 1, 
          label: 'Смуглянка'
      }, 
      {
          id: 2, 
          label: 'Кузнечик'
      }, 
      {
          id: 3, 
          label: 'Макарыч'
      }
    ]

    public formModel = { 
      name: '', 
      date: '', 
      repeat: false,
      members:[],
      questions: [{header: 'Вопрос 1', answer: ''}],
      responsible: null
    }

  constructor() { }

  ngOnInit(): void {
  }

  public changeMembers(elements: any): void {
    this.formModel.members = elements.map((item: any) => {return item.id});
    console.log(this.formModel);
  }

  public addQuestion(): void{
    if(this.stopAddQuestion()){
      return;
    }
    this.formModel.questions.push(
      { 
        header: 'Вопрос ' + (this.formModel.questions.length + 1), 
        answer: '' 
      });
    console.log(this.formModel.questions);
  }

  public stopAddQuestion(): boolean{
    return this.formModel.questions.length >= this.maxQuestion;
  }

  public moveItem(i: number, direction: string): void{
    let element = this.formModel.questions[i];
    let newIndex = direction === "up" ? (i-1) : (i+1);
    this.deleteItem(i);
    this.formModel.questions.splice(newIndex, 0, element);
    console.log(this.formModel.questions);
  }

  public deleteItem(i: number): void{
    this.formModel.questions.splice(i, 1);
    console.log(this.formModel.questions);
  }

  public save(): void{
    let fields = this.fieldСheck();
    if(fields.length != 0){
      alert('Не заполнены поля: ' + fields.toString().replace(',', ', '));
    }else{
      fetch('http://localhost:4100/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formModel)
      }).then(() => {
        this.formModel = { 
          name: '', 
          date: '', 
          repeat: false,
          members:[],
          questions: [{header: '', answer: ''}],
          responsible: null
        }
      })
    }
  }

  public fieldСheck(): string[] {
    let array = [];
    if(!this.formModel.name){
      array.push('Наименование');
    }
    if(!this.formModel.date){
      array.push('Время');
    }
    return array;
  }
}
