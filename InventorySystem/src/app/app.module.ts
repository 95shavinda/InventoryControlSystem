import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProductCategoryDetailsComponent } from './product-category-details/product-category-details.component';
import { ProductCategoryDetailsFormComponent } from './product-category-details/product-category-details-form/product-category-details-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsFormComponent } from './product-details/product-details-form/product-details-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryDetailsComponent,
    ProductCategoryDetailsFormComponent,
    ProductDetailsComponent,
    ProductDetailsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: ProductCategoryDetailsFormComponent},
      {path:'', component: ProductDetailsFormComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
