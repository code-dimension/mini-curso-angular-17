import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar>
      <div class="centralize-content">
        <div class="content-container centralize-title">
          <span class="">Gerenciador de Produtos em Angular v17!</span>
        </div>
      </div>
    </mat-toolbar>
  `,
  styles: `
    .centralize-title {
      text-align: center
    }
  `,
})
export class HeaderComponent {}
