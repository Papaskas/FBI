import { Component } from '@angular/core';
import { StartMenuComponent } from './start-menu/start-menu.component';

@Component({
  selector: 'app-dock-bar',
  imports: [StartMenuComponent],
  templateUrl: './dock-bar.component.html',
  standalone: true,
  styleUrl: './dock-bar.component.scss',
})
export class DockBarComponent {}
