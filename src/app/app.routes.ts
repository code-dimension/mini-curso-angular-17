import { inject } from "@angular/core";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Routes,
} from "@angular/router";
import { ProductsService } from "./shared/services/product.service";
import { getProductResolverFn } from "./shared/resolvers/get-product.resolver";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./feature/list/list.component"),
  },
  {
    path: "edit/:id",
    resolve: {
      product: getProductResolverFn,
    },
    loadComponent: () => import("./feature/edit/edit.component"),
  },
  {
    path: "create",
    loadComponent: () => import("./feature/create/create.component"),
  },
];
