import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input() customClasses: string ='';

  @Output() mouseEnter = new EventEmitter<string>();
  @ContentChild('icon') iconTemplate!: TemplateRef<any>
  
  constructor() { }

  ngOnInit(): void {
  }

  public get getCustomClasses(): string{
    return this.customClasses;
  }

  public onMouseEnter(): void{
    this.mouseEnter.emit('Enter');
  }
}
