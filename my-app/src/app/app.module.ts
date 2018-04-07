import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SandboxComponent } from './component/sandbox/sandbox.component';

import { RouterModule, Routes } from '@angular/router'; 

import { DataService} from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const appRoute: Routes = [
  {path:'', component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'user/:id', component:UserDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
