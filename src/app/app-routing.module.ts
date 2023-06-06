import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminPagesComponent } from './admin/admin-pages/admin-pages.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SignupComponent } from './admin/signup/signup.component';


const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  {path:'signin', component: SigninComponent},
  {path: 'signup', component :SignupComponent},
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'admin', component: AdminPagesComponent },
  { path: 'admin/product', component: AdminPagesComponent },
  { path: 'admin/add', component: ProductAddComponent },
  { path: 'admin/product/edit/:id', component: ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
