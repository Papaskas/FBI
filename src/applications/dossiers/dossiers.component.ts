import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

@Component({
  selector: 'app-dossiers',
  templateUrl: './dossiers.component.html',
  styleUrl: './dossiers.component.scss',
  imports: [WindowManagerComponent, RouterOutlet],
  standalone: true,
})
export class DossiersComponent {}
