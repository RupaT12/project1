import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/FooterComponent';
import { ContactComponent } from './components/contact/contact.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
// import { AboutModule } from './about/about.module';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    // AboutModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
