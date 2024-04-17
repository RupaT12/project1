import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/FooterComponent';
import { ContactComponent } from './components/contact/contact.component';
// import { AboutModule } from './about/about.module';
// import { footerModule } from './footer/footerModule';
const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'contact', component: ContactComponent}
  // {path: '', component: HomeComponent}
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
