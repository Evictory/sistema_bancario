import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { Error404Component } from './error404/error404.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { ExtratoComponent } from './auth/extrato/extrato.component';
import { TransactionComponent } from './auth/transaction/transaction.component';
import { AccountPlanComponent } from './auth/account-plan/account-plan.component';

registerLocaleData(localePtBr, 'pt-br')

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ForgotpassComponent,
    ChangepassComponent,
    Error404Component,
    AuthComponent,
    DashboardComponent,
    ExtratoComponent,
    TransactionComponent,
    AccountPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue:'pt-br'
  },{
    provide:DEFAULT_CURRENCY_CODE,
    useValue:'BRL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }