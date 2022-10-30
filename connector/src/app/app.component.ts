import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.text = this.label1;
  }

  public text: string;
  private readonly label1: string = 'Start';
  private readonly label2: string = 'Stop';

  public clickBtn(): void {
    if (this.text == this.label1)
      this.text = this.label2;
    else
      this.text = this.label1;
  }
}
