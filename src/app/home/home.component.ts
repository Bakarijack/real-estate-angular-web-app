import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <section class="search-section">
      <form>
        <input type="text"  placeholder="Filter by city">
        <button type="button" class="primary">Search</button>
      </form>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}