import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  clickButton: string = "Start";

  public changeButtonName(): void {
    this.clickButton = this.clickButton === "Start" ? "Stop" : "Start";
  }
}
