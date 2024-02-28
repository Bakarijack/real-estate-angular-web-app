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
          <app-house-location></app-house-location>
        </section>
      </section>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
