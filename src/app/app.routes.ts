import { Routes } from '@angular/router';
import { DossiersComponent } from '@dossiers/dossiers.component';
import { routes as routesMostWanted } from '@dossiers/dossiers.routes';
import { DoomComponent } from '@doom/doom.component';
import { NewsComponent } from '@news/news.component';

export enum Destinations {
  DOSSIERS = 'dossiers',
  DOOM = 'doom',
  NEWS = 'news',
}

export const routes: Routes = [
  { path: Destinations.DOSSIERS, component: DossiersComponent, children: routesMostWanted },
  { path: Destinations.DOOM, component: DoomComponent },
  { path: Destinations.NEWS, component: NewsComponent },
];
