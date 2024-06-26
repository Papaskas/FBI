import { Component } from '@angular/core';
import { DockBarComponent } from './dock-bar/dock-bar.component';
import { DesktopShortcutComponent } from '@components/desktop/desktop-shortcut/desktop-shortcut.component';
import { ApplicationContainerComponent } from '@components/application-container/application-container.component';
import { URL } from '@app/app.routes';
import { DesktopBackgroundComponent } from '@components/desktop/desktop-background/desktop-background.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    DesktopShortcutComponent,
    DockBarComponent,
    ApplicationContainerComponent,
    DesktopBackgroundComponent,
  ],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {
  protected readonly URL = URL;
}
