import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { FormComponent } from '../../shared/components/form/form.component';
import { BackToListComponent } from '../../shared/components/back-to-list/back-to-list.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Product) {
    this.productsService.put(this.product.id, product).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso!', 'Ok');

      this.router.navigateByUrl('/');
    });
  }
}
