import { Routes } from '@angular/router';
import { DossierComponent } from '@app/applications/dossiers/components/dossier/dossier.component';
import { DossierListComponent } from '@dossiers/components/dossier-list/dossier-list.component';

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
