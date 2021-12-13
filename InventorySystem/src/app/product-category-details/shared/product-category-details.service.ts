import { Injectable } from "@angular/core";
import { ProductCategoryDetails } from "./product-category-details.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ProductCategoryDetailsService{
    
    constructor(private http:HttpClient) {}

    formData:ProductCategoryDetails = new ProductCategoryDetails();
    readonly baseURL = "https://localhost:44357/api/InventroyControllSystem";

    list:ProductCategoryDetails[];

    addProductCategoryDetails(){
        return this.http.post(this.baseURL,this.formData);
    }

    updateCategoryDetaild(){
        return this.http.put(`${this.baseURL}/${this.formData.categoryID}`,this.formData);
    }

    deleteCategoryDetails(id:number){
        return this.http.delete(`${this.baseURL}/${id}`);
    }

    refreshList(){
        this.http.get(this.baseURL)
        .toPromise()
        .then(res => this.list = res as ProductCategoryDetails[]);
    }
}