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

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    MustMatchDirective,
    UserLoginComponent
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
    StoreModule.forRoot({ cart: CartReducer }),
    EffectsModule.forRoot([ CartEffects ]),
  ],
  providers: [Cart, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
