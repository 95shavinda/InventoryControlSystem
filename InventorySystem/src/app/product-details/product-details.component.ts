import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductCategoryDetails } from '../product-category-details/shared/product-category-details.model';
import { ProductDetails } from './shared/product-details.model';
import { ProductDetailsService } from './shared/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {

  constructor(public service:ProductDetailsService,
    private toast:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshProductList();
  }

  populateProductDetails(selectedRecord:ProductDetails){
    this.service.formData = Object.assign({},selectedRecord);
  }

  productDetailsDelete(id:number){
    if(confirm("Are you sure to delete this record?")){
      this.service.deleteProductDetails(id)
      .subscribe(
        res => {
          this.service.refreshProductList();
          this.toast.error("Deleted Successfuly","Product Detail Deleted");
        },
        err => {console.log(err)}
      )
    }
  }

}
