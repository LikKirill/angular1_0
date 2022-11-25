import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberI } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public data: MemberI[] = []
  public isLoading: boolean = false

  constructor(private http: HttpClient) { }

  public getData(): Observable<MemberI[]>{
    return this.http.get<MemberI[]>('http://localhost:3000/members')
  }
}
