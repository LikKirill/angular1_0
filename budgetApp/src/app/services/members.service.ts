import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberI } from '../models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  public httpUrl = 'http://localhost:3200/members';
  public members: MemberI[] = [];

  constructor(private http: HttpClient) { }

  public getMembers(): Observable<MemberI[]> {
    return this.http.get<MemberI[]>(this.httpUrl);
  }
}