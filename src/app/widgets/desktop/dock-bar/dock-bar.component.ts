import { Component } from '@angular/core';
import { StartMenuComponent } from './start-menu/start-menu.component';

@Component({
  selector: 'app-dock-bar',
  standalone: true,
  imports: [StartMenuComponent],
  templateUrl: './dock-bar.component.html',
  styleUrl: './dock-bar.component.scss',
})
export class DockBarComponent {}
