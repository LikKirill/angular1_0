import { Component, ContentChild, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input()
  public customClasses: string = '';

  @ContentChild('icon')
  public iconTemplate!: TemplateRef<any>;

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
