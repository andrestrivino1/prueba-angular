import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListRestaurantComponent } from './page/list-restaurant/list-restaurant.component';
const routes: Routes = [

    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'list', component: ListRestaurantComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
