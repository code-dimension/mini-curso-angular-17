import { Component, Input, computed, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ProductsService } from "../../shared/services/product.service";
import { ProductWithoutId } from "../../shared/interfaces/create-product.interface";
import { Product } from "../../shared/interfaces/product.interface";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, defer, iif, pipe } from "rxjs";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export default class FormComponent {
  private productsService = inject(ProductsService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  private product = signal<Product>(
    this.activatedRoute.snapshot.data["product"]
  );

  private hasProduct = computed(() => Boolean(this.product()));

  form!: FormGroup<{ title: FormControl<string> }>;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  onSave() {
    const payload = this.form.value as ProductWithoutId;

    iif(
      () => this.hasProduct(),
      defer(() => this.saveProduct(payload)),
      defer(() => this.createProduct(payload))
    ).subscribe(() => {
      this.router.navigate(["/"]);
    });
  }

  private saveProduct(payload: ProductWithoutId) {
    return this.productsService.patch(this.product().id, payload);
  }

  private createProduct(payload: ProductWithoutId) {
    return this.productsService.post(payload as ProductWithoutId);
  }

  private createForm() {
    return new FormGroup({
      title: new FormControl(this.product()?.title || "", {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
