import { Component } from '@angular/core';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

@Component({
  selector: 'app-doom',
  standalone: true,
  templateUrl: './doom.component.html',
  styleUrl: './doom.component.scss',
  imports: [WindowManagerComponent],
})
export class DoomComponent {}
