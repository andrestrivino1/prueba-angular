import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Modulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from "@agm/core";

// Componentes
import { AppComponent } from './app.component';
import { environment } from 'environments/environment';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListRestaurantComponent } from './page/list-restaurant/list-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ListRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyByvRAITkgfPrYUziEH9B9--XZ-yLWlHL8',
      libraries : ['places']
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
