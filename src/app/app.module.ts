import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './interceptoprs/http-headers.interceptor';
import { HttpErrorInterceptor } from './interceptoprs/http.erros.interceptor';
import { ToastrModule } from 'ngx-toastr';
import {Routes, RouterModule } from '@angular/router';
import { SetupComponent } from './components/setup/setup.component';

const routes : Routes = [
  {
    path:"",
    component: SetupComponent
  },
  {
  path: "home",
  component: HomeComponent,
  }
];
@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    HomeComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ToastrModule.forRoot(),
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpHeadersInterceptor,
    multi: true
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
