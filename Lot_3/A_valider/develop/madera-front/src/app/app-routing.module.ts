import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import {GestionProjetComponent} from './components/gestion-projet/gestion-projet.component';
import {GestionClientComponent} from './components/gestion-client/gestion-client.component';



const routes: Routes = [
  { path: '', redirectTo:  'connection', pathMatch:  'full' },
  { path: 'connection', component: ConnexionComponent },
  { path: 'projet', component: GestionProjetComponent },
  { path: 'client', component: GestionClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
