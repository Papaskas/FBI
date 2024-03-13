import { Routes } from '@angular/router';
import { DesktopComponent } from '@app/core/desktop/desktop.component';
import { AppComponent } from '@app/app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'desktop', component: DesktopComponent },
];
