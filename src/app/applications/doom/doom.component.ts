import { Component } from '@angular/core';
import { ApplicationContainerComponent } from '@components/application-container/application-container.component';

@Component({
  selector: 'app-doom',
  standalone: true,
  templateUrl: './doom.component.html',
  styleUrl: './doom.component.scss',
  imports: [ApplicationContainerComponent],
})
export class DoomComponent {}
