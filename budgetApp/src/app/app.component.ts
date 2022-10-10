import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  clickButton: string = "Start";
  title: string = "Коннектор";
  
  constructor(private titleService: Title){
    titleService.setTitle(this.title);
  }

  public changeButtonName(): void {
    this.clickButton = this.clickButton === "Start" ? "Stop" : "Start";
  }
}
