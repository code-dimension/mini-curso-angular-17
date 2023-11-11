import { Component, inject } from "@angular/core";
import { ProductsService } from "../../shared/services/product.service";
import { AsyncPipe } from "@angular/common";
import { CardComponent } from "./components/card/card.component";
import { Product } from "../../shared/interfaces/product.interface";
import { NoTemsComponent } from "./components/no-tems/no-tems.component";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [AsyncPipe, CardComponent, NoTemsComponent, RouterLink, MatButtonModule],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
})
export default class ListComponent {
  productsService = inject(ProductsService);

  products$ = this.productsService.getAll();

  onDelete(taskId: number) {
    this.productsService.delete(taskId);
  }

  onChange(product: Product) {
    throw new Error("Method not implemented.");
  }
}
