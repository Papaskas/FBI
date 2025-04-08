import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@app/app.config';
import { OSComponent } from '@widgets/OS/OS.component';

bootstrapApplication(OSComponent, appConfig).catch((err) => console.error(err));
