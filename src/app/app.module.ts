import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { MustMatchDirective } from './_helpers/must-match.directive';

import { AppComponent } from './app.component';
import { Cart } from './model/cart';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserService } from './_services/user.service';
import { UserLoginComponent } from './user-login/user-login.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CartReducer } from './store/cart.reducer';
import { CartEffects } from './store/cart.effects';
import { ProductReducer } from './store/product.reducer';
import { ProductEffects } from './store/product.effects';
import { LoginFormComponent } from './user-login/login-form/login-form.component';
import { RegisterFormComponent } from './user-register/register-form/register-form.component';
import { UserReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    MustMatchDirective,
    UserLoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    StoreModule.forRoot({ cart: CartReducer, products: ProductReducer, user: UserReducer }),
    EffectsModule.forRoot([CartEffects, ProductEffects, UserEffects]),
  ],
  providers: [Cart, UserService, MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule { }
