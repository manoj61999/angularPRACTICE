import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';                 //Reactive form method
import { PracticeComponent } from './practice/practice.component';
import { SampleComponent } from './sample/sample.component';
import { ExcerComponent } from './excer/excer.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClient,HttpClientModule } from '@angular/common/http';   //HTTP Service
import { WishlistComponent } from './wishlist/wishlist.component';
import { CustomerComponent } from './customer/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PracticeComponent,
    SampleComponent,
    ExcerComponent,
    RegistrationComponent,
    WishlistComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,               
    ReactiveFormsModule,      //formGroup formControl
    HttpClientModule         //HTTP Service
  ],
  providers: [HttpClient],    //HTTP Service
  bootstrap: [AppComponent]
})
export class AppModule { }
