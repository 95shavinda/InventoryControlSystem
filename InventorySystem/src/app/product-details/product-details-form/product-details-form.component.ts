import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductDetails } from '../shared/product-details.model';
import { ProductDetailsService } from '../shared/product-details.service';

@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
  styles: [
  ]
})
export class ProductDetailsFormComponent implements OnInit {

  constructor(public service:ProductDetailsService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  productSubmit(form:NgForm){
    if(this.service.formData.productId == 0){
      this.insertProductRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  insertProductRecord(form:NgForm){
    this.service.postProductDetails()
    .subscribe(
      res => {
        this.resetProductForm(form);
        this.service.refreshProductList();
        this.toastr.success("Product Details Succeccfully Added","Product Details Save");

      },
      err => {console.log(err); }
    )
  }

  updateRecord(form:NgForm){
    this.service.updateProductDetails().subscribe(
      res => {
        this.resetProductForm(form);
        this.service.refreshProductList();
        this.toastr.info('Updated Successfully','Product Details Updated')
      },
      err => { console.log(err); }
    );
  }

  resetProductForm(form:NgForm){
    form.form.reset();
    this.service.formData = new ProductDetails();
  }

}
