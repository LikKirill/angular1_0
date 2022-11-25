import { EventsService } from './../../services/events.service';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { EventI } from 'src/app/models/event.model';
import { MembersService } from 'src/app/services/members.service';
import { MemberI } from 'src/app/models/member.model';

const MAX_QUESTIONS_SIZE = 5;
type Movement = 'up' | 'down';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit {
  public formModel: EventI= {
    name: '',
    date: '',
    repeat: false,
    members: [],
    questions: [''],
    portalManager: null,
  };

  constructor(private eventsService: EventsService, private membersService: MembersService) {}

  ngOnInit(): void {
    this.membersService.isLoading = true;
    this.membersService.getData()
    .pipe(finalize(() => this.membersService.isLoading = false))
    .subscribe({
      next:(data: MemberI[]) => {
        this.membersService.data = data
      },
      error:(e) => console.error(e.message)
    })  
  }

  public get getMembers(){
    return this.membersService.data
  }

  public get events(){
    return this.eventsService.events
  }

  public logger(): void {
    console.log(this.formModel);
  }

  public changeMembers(elements: MemberI[]): void {
    this.formModel.members = elements.map((item) => {
      return item.name;
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
    this.eventsService.setEvent(this.formModel)
    .subscribe({
      next: (data) => {
        this.formModel = {
          name: '',
          date: '',
          repeat: false,
          members: [],
          questions: [''],
          portalManager: null,
        };
      },
      error:(e) => {
        console.error(e.message);
      }
    })    
  }
}
