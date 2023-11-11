import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Routes } from "@angular/router";
import { ProductsService } from "./shared/services/product.service";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./feature/list/list.component"),
  },
  {
    path: "form",
    resolve: {
      product: (route: ActivatedRouteSnapshot) => {
        const productsService = inject(ProductsService);
        const id = route.queryParamMap.get("id");

        if (id) {
          return productsService.getById(Number(id));
        } else {
          return null;
        }
      },
    },
    loadComponent: () => import("./feature/form/form.component"),
  },
];
