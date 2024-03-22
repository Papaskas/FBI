import { Component, Input } from '@angular/core';
import { ApplicationContainerComponent } from '@components/applications/application-container/application-container.component';
import { ApplicationAbstract } from '@components/applications/application.abstract';

@Component({
  selector: 'app-most-wanted',
  standalone: true,
  templateUrl: './most-wanted.component.html',
  styleUrl: './most-wanted.component.scss',
  imports: [ApplicationContainerComponent],
})
export class MostWantedComponent implements ApplicationAbstract {
  @Input({ required: true }) showApplication = false;
}
