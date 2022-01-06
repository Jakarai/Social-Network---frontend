import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MypicsComponent } from './pages/mypics/mypics.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {path: 'mainpage', component: MainPageComponent},
  {path: '', component: LoginPageComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'mypics',component:MypicsComponent},
  /* no valid path, redirect to landing page */
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
