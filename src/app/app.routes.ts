import { Routes } from '@angular/router';
import { MostWantedComponent } from '@app/pages/most-wanted/most-wanted.component';
import { DoomComponent } from '@app/pages/doom/doom.component';

export enum URL {
  mostWanted = 'application/most-wanted',
  doom = 'application/doom',
}

export const routes: Routes = [
  { path: URL.mostWanted, component: MostWantedComponent },
  { path: URL.doom, component: DoomComponent },
];
