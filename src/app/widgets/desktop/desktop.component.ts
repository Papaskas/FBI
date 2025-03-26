import { Component } from '@angular/core';
import { DockBarComponent } from './dock-bar/dock-bar.component';
import { DesktopShortcutComponent } from '@widgets/desktop/desktop-shortcut/desktop-shortcut.component';
import { WindowManagerComponent } from '../../../applications/window-manager/window-manager.component';
import { URL } from '@app/app.routes';
import { DesktopBackgroundComponent } from '@widgets/desktop/desktop-background/desktop-background.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [
    DesktopShortcutComponent,
    DockBarComponent,
    WindowManagerComponent,
    DesktopBackgroundComponent,
  ],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {
  protected readonly URL = URL;
}
