import { Component, Input, inject } from "@angular/core";
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
  productsService = inject(ProductsService);

  @Input()
  id: number | undefined;

  form = new FormGroup({
    title: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  onSave() {
    const payload = this.form.value as CreateProduct;

    this.productsService.post(payload);
  }
}
