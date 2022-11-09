import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleSetter: Title) {
    titleSetter.setTitle(this.title);
    this.text = this.label1;
  }

  // constructor(titleSetter: Title) {
  //   this.titleSetter = titleSetter;
  //   this.titleSetter.setTitle(this.title);
  //   this.text = this.label1;
  // }
//  private titleSetter: Title;

  public text: string;
  private readonly label1: string = 'Start';
  private readonly label2: string = 'Stop';

  private readonly title: string = 'Коннектор';

  public clickBtn(): void {
    if (this.text == this.label1)
      this.text = this.label2;
    else
      this.text = this.label1;
  }
}
