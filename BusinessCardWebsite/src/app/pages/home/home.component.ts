import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private _showRedSquare = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get showRedSquare(): boolean {
    return this._showRedSquare;
  }

  get shapeClass(): string {
    return this.showRedSquare ? 'red-square' : 'green-circle';
  }

  public routToItemPage(): void {
    this.router.navigate(['/item']);
  }

  public changeShape(): void {
    this._showRedSquare = !this._showRedSquare;
  }
}
