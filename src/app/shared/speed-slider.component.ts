import {Component, Input} from '@angular/core';

@Component({
  selector: 'speed-slider',
  template: `
    <div>Speed:{{speed}} <input [value]="speed" type="range" min="0" [max]="max" (input)="speed = $event.target.value"/></div>`
})
export class SpeedSliderComponent {
  @Input() max: number;
  public speed = 0;
}
