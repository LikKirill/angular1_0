import { Component } from '@angular/core';

type ButtonTextType = 'Старт' | 'Стоп';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public buttonText: ButtonTextType = 'Старт';

  public changeButtonText() {
    this.buttonText = this.buttonText === 'Старт' ? 'Стоп' : 'Старт';
  }
}
