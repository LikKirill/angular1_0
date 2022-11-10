import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  
  @Input() customClasses: string = ''
  @ContentChild('icon') iconTemplate!: TemplateRef<any>

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
