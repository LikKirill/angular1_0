import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public toggleClass = true  

  public events = []

  constructor(private router: Router) { }

  ngOnInit(){
    fetch('http://localhost:4100/events').
    then((res) => {
      return res.json()
    })
    .then((data) => {
      this.events = data
    })
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
