import {Component} from '@angular/core';

@Component({
  selector: 'speed-slider',
  template: `<div>Speed:{{speed}} <input [value]="speed" type="range" min="0" max="200" (input)="speed = $event.target.value"/></div>`
})
export class SpeedSliderComponent {
  speed = 0
}
