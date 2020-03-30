import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import {GestionProjetComponent} from './components/gestion-projet/gestion-projet.component';
import {GestionClientComponent} from './components/gestion-client/gestion-client.component';
import {GestionPlanComponent} from './components/gestion-plan/gestion-plan.component';
import {PlanComponent} from './components/plan/plan.component';
import {ConfigurationComponent} from './components/configuration/configuration.component';
import {DevisComponent} from './components/devis/devis.component';



const routes: Routes = [
  { path: '', redirectTo:  'connection', pathMatch:  'full' },
  { path: 'connection', component: ConnexionComponent },
  { path: 'projet', component: GestionProjetComponent },
  { path: 'client', component: GestionClientComponent },
  { path: 'projet/:projetId', component: GestionPlanComponent },
  { path: 'plan/:planId', component: PlanComponent },
  { path: 'configuration', component: ConfigurationComponent },
  { path: 'devis/:projetId', component: DevisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
