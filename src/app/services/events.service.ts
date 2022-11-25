import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventI } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public events: EventI[] = []
  public isLoading: boolean = false

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<EventI[]>{
    return this.http.get<EventI[]>('http://localhost:3000/events')
  }

  public setEvent(event: EventI){
    return this.http.post('http://localhost:3000/events', event)
  }
}
