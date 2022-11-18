import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public isRedSquare: boolean = false;
  public events =[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    fetch('http://localhost:4100/events')
      .then((res) => {return res.json()})
      .then((data) => {
        this.events = data;
      })
  }

  public goToItem(): void{
    this.router.navigate(["/item"]);
  }

  public logger(event: string): void{
    console.log(event);
  }
}
