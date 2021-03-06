import { Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  styleUrls: ['./component.css'],
  templateUrl: './visuals.html'
})
export class VisualsComponent {
  n: number = 1;

  increment() {
    this.n++;
  }

  classFor(x: number): string {
    if (x > 7) {
      return 'extra-class';
    }
  }
}
