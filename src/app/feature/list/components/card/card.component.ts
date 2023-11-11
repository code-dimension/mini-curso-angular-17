import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Product } from "../../../../shared/interfaces/product.interface";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input({ required: true })
  product!: Product;

  @Output("change")
  onChange = new EventEmitter();

  @Output("delete")
  onDelete = new EventEmitter();
}
