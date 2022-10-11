import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  clickButton: string = "Start";
  titleComponent: string = "Коннектор";
  
  constructor(private title: Title){
    title.setTitle(this.titleComponent);
  }

  public changeButtonName(): void {
    this.clickButton = this.clickButton === "Start" ? "Stop" : "Start";
  }
}
