import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  public text: string = 'test text';
  public btn: string = 'Старт';

  public clickBtn(): void {
    this.text = 'second text';
    this.btn = this.btn === 'Старт' ? 'Стоп' : 'Старт';
  }
}
