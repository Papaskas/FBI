import { Routes } from '@angular/router';
import { DossiersComponent } from '@dossiers/dossiers.component';
import { routes as routesMostWanted } from '@dossiers/dossiers.routes';
import { DoomComponent } from '@doom/doom.component';
import { NewsComponent } from '@news/news.component';

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
