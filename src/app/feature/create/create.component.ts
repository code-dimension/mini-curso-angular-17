import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductWithoutId } from "../../shared/interfaces/product-without-id.interface";
import { Router } from "@angular/router";
import { ProductsService } from "../../shared/services/product.service";
import FormComponent from "../../shared/components/form/form.component";

@Component({
  selector: "app-create",
  standalone: true,
  imports: [FormComponent],
  templateUrl: "./create.component.html",
  styleUrl: "./create.component.scss",
})
export default class CreateComponent {
  private productsService = inject(ProductsService);
  private router = inject(Router);

  onSave(data: ProductWithoutId) {
    this.createProduct(data).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  private createProduct(payload: ProductWithoutId) {
    return this.productsService.post(payload);
  }
}
