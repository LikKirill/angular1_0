import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public isRedSquare: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToItem(){
    this.router.navigate(["/item"]);
  }
}
