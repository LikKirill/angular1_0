import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventI } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  public httpUrl = 'http://localhost:3200/events';
  public events: EventI[] = [];
  public isLoading: boolean = false;
  constructor(private http: HttpClient) { }

  public getEvents(): Observable<EventI[]> {
    return this.http.get<EventI[]>(this.httpUrl);
  }

  public setEvent(event: EventI){
    return this.http.post(this.httpUrl, event);
  }
}