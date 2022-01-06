import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginNavComponent } from './components/login-nav/login-nav.component';
import { LoginSlideshowComponent } from './components/login-slideshow/login-slideshow.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { MypicsComponent } from './pages/mypics/mypics.component';
//import { ViewPicturesComponent } from './components/view-pictures/view-pictures.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainPageComponent,
    LoginPageComponent,
    LoginNavComponent,
    LoginSlideshowComponent,
    CreateAccountComponent,
    LoginComponent,
    PostComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    UploadImageComponent,
    MypicsComponent,
    //ViewPicturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
