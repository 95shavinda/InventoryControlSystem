import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductCategoryDetails } from '../shared/product-category-details.model';
import { ProductCategoryDetailsService } from '../shared/product-category-details.service';

@Component({
  selector: 'app-product-category-details-form',
  templateUrl: './product-category-details-form.component.html',
  styles: [
  ]
})
export class ProductCategoryDetailsFormComponent implements OnInit {

  constructor(public service:ProductCategoryDetailsService,
    private toastr:ToastrService) {}


  ngOnInit(): void {
  }

  
  onSubmit(form: NgForm){
    if(this.service.formData.categoryID == 0){
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }

  insertRecord(form:NgForm){
    this.service.addProductCategoryDetails().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted Successfully','Category Detail Added');
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.updateCategoryDetaild().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated Successfully','Category Detail Updated')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData = new ProductCategoryDetails();
  }

}
