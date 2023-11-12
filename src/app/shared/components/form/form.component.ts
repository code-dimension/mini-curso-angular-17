import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatInputModule } from "@angular/material/input";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { ProductWithoutId } from "../../interfaces/product-without-id.interface";

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
  @Input()
  product: ProductWithoutId | null = null;

  @Output("save")
  saveEmitter = new EventEmitter<ProductWithoutId>();

  form!: FormGroup<{ title: FormControl<string> }>;

  ngOnInit(): void {
    this.form = this.createForm();
  }

  onSave() {
    this.saveEmitter.emit(this.form.value as ProductWithoutId);
  }

  private createForm() {
    return new FormGroup({
      title: new FormControl(this.product?.title || "", {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }
}
