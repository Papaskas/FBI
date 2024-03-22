import { Component } from '@angular/core';
import { DockBarComponent } from './dock-bar/dock-bar.component';
import { DesktopShortcutComponent } from '@components/desktop/desktop-shortcut/desktop-shortcut.component';
import { ApplicationContainerComponent } from '@components/applications/application-container/application-container.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [DesktopShortcutComponent, DockBarComponent, ApplicationContainerComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {}
