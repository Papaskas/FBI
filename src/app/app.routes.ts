import { Routes } from '@angular/router';
import { MostWantedComponent } from '@app/applications/most-wanted/most-wanted.component';
import { DoomComponent } from '@app/applications/doom/doom.component';
import { NewsComponent } from '@app/applications/news/news.component';
import { routes as routesMostWanted } from '@app/applications/most-wanted/most-wanted.routes';

export enum URL {
  mostWanted = 'most-wanted',
  doom = 'doom',
  news = 'news',
}

export const routes: Routes = [
  { path: URL.mostWanted, component: MostWantedComponent, children: routesMostWanted },
  { path: URL.doom, component: DoomComponent },
  { path: URL.news, component: NewsComponent },
];
