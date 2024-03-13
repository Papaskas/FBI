import { Routes } from '@angular/router';
import { DesktopComponent } from '@components/desktop/desktop.component';
import { AppComponent } from '@app/app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'desktop', component: DesktopComponent },
];
