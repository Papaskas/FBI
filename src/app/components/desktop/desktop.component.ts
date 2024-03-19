import { Component } from '@angular/core';
import { DockBarComponent } from '@components/dock-bar/dock-bar.component';
import { DesktopShortcutComponent } from '@components/desktop-shortcut/desktop-shortcut.component';
import { ApplicationComponent } from '@components/application/application.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [DesktopShortcutComponent, DockBarComponent, ApplicationComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {}
