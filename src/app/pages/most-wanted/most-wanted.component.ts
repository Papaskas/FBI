import { Component } from '@angular/core';
import { ApplicationContainerComponent } from '@components/application-container/application-container.component';

@Component({
  selector: 'app-most-wanted',
  standalone: true,
  templateUrl: './most-wanted.component.html',
  styleUrl: './most-wanted.component.scss',
  imports: [ApplicationContainerComponent],
})
export class MostWantedComponent {}
