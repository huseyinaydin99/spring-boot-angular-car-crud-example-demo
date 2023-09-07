import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { CarService } from './shared/car/car.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarListComponent } from './car-list/car-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GiphyService } from './shared/giphy/giphy.service';
import { CarEditComponent } from './car-edit/car-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-add',
    component: CarEditComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  }
];

const config = {
  issuer: 'https://dev-158606.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oae8qa23sL5AmNXq0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarEditComponent,
    CarListComponent,
    HomeComponent
  ],
  imports: [
    OktaCallbackComponent,
    NgModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    RouterTestingModule,
    RouterModule.forRoot(appRoutes),
    OktaAuthModule.initAuth(config)
  ],
  exports: [
    AppComponent,
    SidebarComponent,
    CarEditComponent,
    CarListComponent,
    HomeComponent,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [CarService, GiphyService, AuthInterceptor,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
