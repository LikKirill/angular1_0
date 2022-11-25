import { EventsService } from './../../services/events.service';
import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { EventI } from 'src/app/models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public toggleClass = true  

  constructor(private router: Router, private eventsService: EventsService ) { }

  ngOnInit(){
    this.eventsService.isLoading = true

    this.eventsService.getEvents()
    .pipe(finalize(() => this.eventsService.isLoading = false))
    .subscribe({
      next:(data: EventI[]) => this.eventsService.events = data,
      error:(e) => console.error(e.message)
    })  
  }

  public get events(){
    return this.eventsService.events
  }

  public get isLoading(){
    return this.eventsService.isLoading
  }

  get getClasses(): string{
    return 'colored'
  }

  public routeToItemPage(): void{
    this.router.navigate(['/item'])
  }

  public changeBlock(): void {
    this.toggleClass = !this.toggleClass;
  }

  public logger(event: string): void {
    console.log(event);
  }
}
