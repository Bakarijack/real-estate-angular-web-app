import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent],
  template: `<main>
    <header class="header">
      <nav class="header-container">
        <img src="/assets/logo.svg" alt="logo" class="brand-logo" aria-hidden="true">
      </nav>
    </header>
    <section>
      <main class="content">
        <app-home></app-home>
      </main>
    </section>
  </main>` ,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Homes';
}
