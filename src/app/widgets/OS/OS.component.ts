import { Component } from '@angular/core';
import { DesktopComponent } from '@widgets/desktop/desktop.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-os',
  templateUrl: './OS.component.html',
  styleUrl: './OS.component.scss',
  imports: [DesktopComponent, RouterOutlet],
})
export class OSComponent {}
