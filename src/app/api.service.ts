import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = "https://cryptic-harbor-83412.herokuapp.com/";



  constructor(private http: HttpClient) {
  }

  getProduct() {
    return this.http.get(this.baseUrl + "products", { responseType: 'text' })
  }

  createProduct(product: ProductPayload) {
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    const body = JSON.stringify(product);

    return this.http.post(this.baseUrl + 'product', body, { headers: headers });
  }

  deleteProduct(id: String) {
    const headers = {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    return this.http.delete(this.baseUrl + 'product/' + id, { headers: headers });
  }

  getProductById(id: string) {
    return this.http.get(this.baseUrl + "product/" + id, { responseType: 'text' })

  }
}


interface Product {
  _id: string
  nume: string
  pret: number
  img: string
  descriere: string
}

interface ProductPayload {
  produs: Product
}
