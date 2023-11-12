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
import { CreateProduct } from "../../shared/interfaces/create-product.interface";
import { Product } from "../../shared/interfaces/product.interface";
import { ActivatedRoute, Router } from "@angular/router";

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
    if (this.hasProduct()) {
      const payload = this.form.value;
      this.productsService.patch(this.product().id, payload);
    } else {
      const payload = this.form.value as CreateProduct;
      this.productsService.post(payload);
    }
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
