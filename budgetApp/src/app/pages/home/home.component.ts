import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { finalize } from 'rxjs/operators';
import { EventI } from 'src/app/models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public isRedSquare: boolean = false;

  constructor(private router: Router, private eventService: EventsService) { }

  ngOnInit(): void {
    this.getEvent();
  }

  public get events(){
    return this.eventService.events;
  }

  public get isLoading(){
    return this.eventService.isLoading;
  }

  private getEvent(){    
    this.eventService.isLoading = true;
    this.eventService.getEvents()
    .pipe(finalize(() => this.eventService.isLoading = false))
    .subscribe({
      next: (data: EventI[]) => {
        this.eventService.events = data;
        console.log('ev', this.events);
      },
      error: (e) => console.error('e', e.message),
      complete: () => console.log('complete'),
    });
  }

  public goToItem(): void{
    this.router.navigate(["/item"]);
  }

  public logger(event: string): void{
    console.log(event);
  }
}
