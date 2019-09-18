import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GestionClientComponent } from './gestion-client/gestion-client.component';
import { GestionProjetComponent } from './gestion-projet/gestion-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    GestionClientComponent,
    GestionProjetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
