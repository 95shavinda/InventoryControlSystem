import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http:HttpClient) { }

  formData:ProductDetails = new ProductDetails();
  readonly baseURL = "https://localhost:44357/api/InventoryProduct";

  list:ProductDetails[];

  postProductDetails(){
    return this.http.post(this.baseURL,this.formData);
  }

  updateProductDetails(){
    return this.http.put(`${this.baseURL}/${this.formData.productId}`,this.formData);
  }

  deleteProductDetails(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }


  refreshProductList(){
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as ProductDetails[]);
  }
}
