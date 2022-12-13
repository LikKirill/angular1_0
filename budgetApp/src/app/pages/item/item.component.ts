import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { EventI } from 'src/app/models/event.model';
import { MembersService } from 'src/app/services/members.service';
import { MemberI } from 'src/app/models/member.model';

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

    public formModel: EventI = { 
      name: '', 
      date: '', 
      repeat: false,
      members:[],
      questions: [{header: 'Вопрос 1', answer: ''}],
      portalManager: null
    }

  constructor(private eventService: EventsService, private memberService: MembersService) { }

  ngOnInit(): void {
    this.getMembers();
  }

  public get members(){
    return this.memberService.members;
  }

  private getMembers(){
    this.memberService.getMembers()
    .subscribe({
      next: (data: MemberI[]) => {
        this.memberService.members = data;
      },
      error: (e) => console.error('e', e.message),
      complete: () => console.log('complete'),
    });
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
      return;
    }

    this.eventService.setEvent(this.formModel)
    .subscribe((data) => { //next
        console.log('d', data);
        this.formModel = { 
                name: '', 
                date: '', 
                repeat: false,
                members:[],
                questions: [{header: '', answer: ''}],
                portalManager: null
              }
      }, 
      (e) => console.error(e.message),  //error
      () => console.log('complete')); //complete
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
