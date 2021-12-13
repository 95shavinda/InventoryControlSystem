import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductCategoryDetails } from './shared/product-category-details.model';
import { ProductCategoryDetailsService } from './shared/product-category-details.service';

@Component({
  selector: 'app-product-category-details',
  templateUrl: './product-category-details.component.html',
  styles: [
  ]
})
export class ProductCategoryDetailsComponent implements OnInit {

  constructor(public service:ProductCategoryDetailsService,
    private toast:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:ProductCategoryDetails){
    this.service.formData = Object.assign({},selectedRecord);
  }

  onDelete(id:number){
    if(confirm("Are you sure to delete this record?")){
      this.service.deleteCategoryDetails(id)
      .subscribe(
        res => {
          this.service.refreshList();
          this.toast.error("Deleted Successfuly","Category Detail Deleted");
        },
        err => {console.log(err)}
      )
    }
  }

}
