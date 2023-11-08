import { Component } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule],
  template: `
    <mat-toolbar>
      <span>Task Manager Written in Angular v17!</span>
    </mat-toolbar>
  `,
  styles: ``,
})
export class HeaderComponent {}
