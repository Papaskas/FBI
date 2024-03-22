import { Component } from '@angular/core';
import { DesktopComponent } from '@components/desktop/desktop.component';

@Component({
  selector: 'app-os',
  standalone: true,
  templateUrl: './OS.component.html',
  styleUrl: './OS.component.scss',
  imports: [DesktopComponent],
})
export class OSComponent {}
