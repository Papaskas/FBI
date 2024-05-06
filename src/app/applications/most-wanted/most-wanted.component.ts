import { Component } from '@angular/core';
import { ApplicationContainerComponent } from '@components/application-container/application-container.component';
import { ProfileCardComponent } from '@app/applications/most-wanted/components/profile-card/profile-card.component';

@Component({
  selector: 'app-most-wanted',
  standalone: true,
  templateUrl: './most-wanted.component.html',
  styleUrl: './most-wanted.component.scss',
  imports: [ApplicationContainerComponent, ProfileCardComponent],
})
export class MostWantedComponent {}
