import { Component } from '@angular/core';
import { ApplicationComponent } from '@components/application/application.component';
import { DockBarComponent } from '@components/dock-bar/dock-bar.component';

@Component({
  selector: 'app-desktop',
  standalone: true,
  imports: [ApplicationComponent, DockBarComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss',
})
export class DesktopComponent {}
