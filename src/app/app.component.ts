import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  template: `
    <app-header />

    <main class="main">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      .main {
        padding: 16px;
      }
    `,
  ],
})
export class AppComponent {}
