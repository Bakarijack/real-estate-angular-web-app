import { HouseLocation } from './../house-location';
import { Component } from '@angular/core';
import { HouseLocationComponent } from '../house-location/house-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HouseLocationComponent],
  template: `
    <section class="search-section">
      <form>
        <input type="text"  placeholder="Filter by city">
        <button type="button" class="primary">Search</button>
      </form>
      <section>
        <section class="results">
          <app-house-location [housingLocation]="housingLocation1"></app-house-location>
        </section>
      </section>
    </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  housingLocation1: HouseLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
