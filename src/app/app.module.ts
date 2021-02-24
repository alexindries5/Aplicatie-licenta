import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAgUUqyPwpc2hO1hS1XLGD23eANIIS9zAY",
      authDomain: "aplicatie-licenta-b317e.firebaseapp.com",
      projectId: "aplicatie-licenta-b317e",
      storageBucket: "aplicatie-licenta-b317e.appspot.com",
      messagingSenderId: "818223960350",
      appId: "1:818223960350:web:20048f4929be7702f1f90f"
    }
    ),
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
