import { Component, inject } from "@angular/core";
import FormComponent from "../../shared/components/form/form.component";
import { ProductsService } from "../../shared/services/product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductWithoutId } from "../../shared/interfaces/product-without-id.interface";
import { Product } from "../../shared/interfaces/product.interface";

@Component({
  selector: "app-edit",
  standalone: true,
  imports: [FormComponent],
  templateUrl: "./edit.component.html",
  styleUrl: "./edit.component.scss",
})
export default class EditComponent {
  private productsService = inject(ProductsService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  
  product: Product = this.activatedRoute.snapshot.data["product"];
  
  onSave(data: ProductWithoutId) {
    this.save(data).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  private save(payload: ProductWithoutId) {
    return this.productsService.patch(this.product.id, payload);
  }
}
