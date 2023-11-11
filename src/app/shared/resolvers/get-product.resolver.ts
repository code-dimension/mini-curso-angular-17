import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Product } from "../interfaces/product.interface";
import { inject } from "@angular/core";
import { ProductsService } from "../services/product.service";
import { of } from "rxjs";

export const getProductResolverFn: ResolveFn<Product> = (route: ActivatedRouteSnapshot) => {
    const productsService = inject(ProductsService);
    const id = route.queryParamMap.get("id");

    if (id) {
      return productsService.getById(Number(id));
    } else {
      return of(null);
    }
  }