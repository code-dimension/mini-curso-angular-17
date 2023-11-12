import { Component, inject, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { ProductsService } from "../../shared/services/product.service";
import { AsyncPipe } from "@angular/common";
import { CardComponent } from "./components/card/card.component";
import { Product } from "../../shared/interfaces/product.interface";
import { NoTemsComponent } from "./components/no-tems/no-tems.component";
import { Router, RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-list",
  standalone: true,
  imports: [
    CardComponent,
    NoTemsComponent,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: "./list.component.html",
  styleUrl: "./list.component.scss",
})
export default class ListComponent {
  productsService = inject(ProductsService);
  router = inject(Router);

  products = signal<Product[]>([]);

  ngOnInit(): void {
    this.getProducts().subscribe((products) => {
      this.products.set(products);
    });
  }

  onDelete(product: Product) {
    this.productsService.delete(product.id).subscribe(() => {
      this.products.update((produts) =>
        produts.filter(({ id }) => id !== product.id)
      );
    });
  }

  onChange(product: Product) {
    this.router.navigate(["/edit", product.id], { queryParams: { id: product.id } });
  }

  private getProducts() {
    return this.productsService.getAll();
  }
}
