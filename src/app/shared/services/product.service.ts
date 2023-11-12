import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../interfaces/product.interface";
import { ProductWithoutId } from "../interfaces/create-product.interface";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Product[]>("/api/products");
  }

  getById(id: number) {
    return this.httpClient.get<any>(`/api/products/${id}`);
  }

  post(payload: ProductWithoutId) {
    return this.httpClient.post<any>(`/api/products/`, payload);
  }

  patch(id: number, payload: Partial<Product>) {
    return this.httpClient.patch<any>(`/api/products/${id}`, payload);
  }

  delete(id: number) {
    return this.httpClient.delete<any>(`/api/products/${id}`);
  }
}
