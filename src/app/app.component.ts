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

    <main class="main centralize-content">
      <div class="content-container centralize-title">
        <router-outlet />
      </div>
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
