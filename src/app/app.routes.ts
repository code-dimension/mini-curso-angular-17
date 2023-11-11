import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./feature/list/list.component"),
  },
  {
    path: "form",
    loadComponent: () => import("./feature/form/form.component"),
  },
];
