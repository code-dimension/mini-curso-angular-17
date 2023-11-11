import { inject } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Routes } from "@angular/router";
import { ProductsService } from "./shared/services/product.service";
import { getProductResolverFn } from "./shared/resolvers/get-product.resolver";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./feature/list/list.component"),
  },
  {
    path: "form",
    resolve: {
      product: getProductResolverFn,
    },
    loadComponent: () => import("./feature/form/form.component"),
  },
];
