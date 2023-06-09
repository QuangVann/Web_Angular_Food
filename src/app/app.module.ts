import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminPagesComponent } from './admin/admin-pages/admin-pages.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
<<<<<<< HEAD
import { SignupComponent } from './admin/signup/signup.component';
import { SigninComponent } from './admin/signin/signin.component';


=======
import { HelloComponent } from './pages/hello/hello/hello.component';
>>>>>>> 5274893 (them hello)

@NgModule({
  declarations: [
    AppComponent,
    AdminPagesComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductListComponent,
    DashboardComponent,
    HomePageComponent,
<<<<<<< HEAD
    SignupComponent,
    SigninComponent,


=======
    HelloComponent
>>>>>>> 5274893 (them hello)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
