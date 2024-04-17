import { Routes } from '@angular/router';
import { MostWantedComponent } from '@app/applications/most-wanted/most-wanted.component';
import { DoomComponent } from '@app/applications/doom/doom.component';
import { NewsComponent } from '@app/applications/news/news.component';

export enum URL {
  mostWanted = 'most-wanted',
  doom = 'doom',
  news = 'news',
}

export const routes: Routes = [
  { path: URL.mostWanted, component: MostWantedComponent },
  { path: URL.doom, component: DoomComponent },
  { path: URL.news, component: NewsComponent },
];
