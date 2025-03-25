import { Routes } from '@angular/router';
import { DossierListComponent } from '@dossiers/components/dossier-list/dossier-list.component';
import { DossierComponent } from '@dossiers/components/dossier/dossier.component';

export enum URL {
  DOSSIERS = 'dossiers',
}

export const routes: Routes = [
  {
    path: '',
    component: DossierListComponent,
  },
  {
    path: ':id',
    component: DossierComponent,
  },
];
