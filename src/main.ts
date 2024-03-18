import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@app/app.config';
import { DesktopComponent } from '@components/desktop/desktop.component';

bootstrapApplication(DesktopComponent, appConfig).catch((err) => console.error(err));
