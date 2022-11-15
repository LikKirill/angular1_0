import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

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
      name: 'х/ф "В бой идут одни старики"', 
      date: '06.12.1973', 
      repeat: false,
      members:[],
      questions: [{header: 'Вопрос 1', answer: ''}],
      responsible: null
    }

  constructor() { }

  ngOnInit(): void {
  }

  public logger(){
    console.log(this.formModel);
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
    return this.formModel.questions.length >= 5;
  }
}
