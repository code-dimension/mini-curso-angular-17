import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from '../../shared/services/products.service';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { Product } from '../../shared/interfaces/product.interface';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  onSubmit(product: Product) {
    this.productsService.post(product).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
