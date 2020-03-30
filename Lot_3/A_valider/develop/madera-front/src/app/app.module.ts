import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
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
import { DevisComponent } from './components/devis/devis.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    GestionClientComponent,
    GestionProjetComponent,
    GestionPlanComponent,
    PlanComponent,
    ConfigurationComponent,
    DevisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
