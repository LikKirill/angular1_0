import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input()
  public text: string = '';

  @Input()
  public customClasses: string = '';

  @Output()
  mouseEnter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public get getCustomClasses(): string {
    return this.customClasses;
  }

  public onMouseEnter(): void {
    this.mouseEnter.emit('Enter');
  }
}
