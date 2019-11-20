import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { GestionClientComponent } from './components/gestion-client/gestion-client.component';
import { GestionProjetComponent } from './components/gestion-projet/gestion-projet.component';
import { FormsModule } from '@angular/forms';
import { GestionPlanComponent } from './components/gestion-plan/gestion-plan.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from './components/plan/plan.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    GestionClientComponent,
    GestionProjetComponent,
    GestionPlanComponent,
    PlanComponent,
    ConfigurationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
