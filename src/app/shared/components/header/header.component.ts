import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar>
      <span>Gerenciador de Produtos em Angular v17!</span>
    </mat-toolbar>
  `,
  styles: ``,
})
export class HeaderComponent {}
