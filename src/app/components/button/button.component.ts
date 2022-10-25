import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input() text: string = ''
  @Input() customClasses: string = ''

  @Output() mouseEnter = new  EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  public get getCustomClasses(): string{
    return this.customClasses
  }

  public onMouseEnter(): void{
    this.mouseEnter.emit('Enter')
  } 
}
