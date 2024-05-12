import { Routes } from '@angular/router';
import { DossiersComponent } from '@dossiers/dossiers.component';
import { DoomComponent } from '@app/applications/doom/doom.component';
import { NewsComponent } from '@app/applications/news/news.component';
import { routes as routesMostWanted } from '@dossiers/dossiers.routes';

export enum URL {
  DOSSIERS = 'dossiers',
  DOOM = 'doom',
  NEWS = 'news',
}

export const routes: Routes = [
  { path: URL.DOSSIERS, component: DossiersComponent, children: routesMostWanted },
  { path: URL.DOOM, component: DoomComponent },
  { path: URL.NEWS, component: NewsComponent },
];
