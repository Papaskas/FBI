import { Component, HostListener } from '@angular/core';
import { DockBarComponent } from './dock-bar/dock-bar.component';
import { DesktopShortcutComponent } from '@widgets/desktop/desktop-shortcut/desktop-shortcut.component';
import { URL } from '@app/app.routes';
import { DesktopBackgroundComponent } from '@widgets/desktop/desktop-background/desktop-background.component';

@Component({
  selector: 'app-desktop',
  imports: [DesktopShortcutComponent, DockBarComponent, DesktopBackgroundComponent],
  templateUrl: './desktop.component.html',
  standalone: true,
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {
  protected readonly URL = URL;

  @HostListener('document:contextmenu', ['$event'])
  protected openContextMenu(event: Event) {
    event.preventDefault();
  }
}
