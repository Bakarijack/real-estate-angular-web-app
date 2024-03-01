import { Component, Input } from '@angular/core';
import { HouseLocation } from '../house-location';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [],
  template: `
    <p>
      house-location works!
    </p>
  `,
  styleUrl: './house-location.component.css'
})
export class HouseLocationComponent {
  @Input() housingLocation!: HouseLocation
}
