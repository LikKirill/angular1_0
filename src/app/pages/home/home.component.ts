import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public toggleClass = true  

  constructor(private router: Router) { }

  ngOnInit(): void {
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
}
