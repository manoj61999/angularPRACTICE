import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PracticeComponent } from './practice/practice.component';
import { SampleComponent } from './sample/sample.component';
import { ExcerComponent } from './excer/excer.component';
import { RegistrationComponent } from './registration/registration.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'practice',component:PracticeComponent},
  {path:'',component:SampleComponent},
  {path:'excer',component:ExcerComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'wishlist',component:WishlistComponent},
  {path: 'customer',component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
