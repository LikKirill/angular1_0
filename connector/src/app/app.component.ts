import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public text: string = 'Test text';
  public text1: string = 'Test text1';

  public clickBtn(): void {
    this.text = this.text;
  }
}
