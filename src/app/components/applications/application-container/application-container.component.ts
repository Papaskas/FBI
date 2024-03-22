import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-application-container',
  standalone: true,
  templateUrl: './application-container.component.html',
  styleUrl: './application-container.component.scss',
  imports: [NgIf],
})
export class ApplicationContainerComponent {
  @Input({ required: true }) showApplication = false;

  protected close() {
    this.showApplication = false;
  }
}
