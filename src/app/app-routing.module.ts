import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'cart', component: CartDetailsComponent },
  { path: "**", redirectTo: "/dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
