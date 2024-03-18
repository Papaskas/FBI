import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-application',
  standalone: true,
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
  imports: [NgOptimizedImage],
})
export class ApplicationComponent {
  @Input({ required: true }) icon!: string;

  @Input({ required: true }) shortName!: string;

  @Input({ required: true }) url!: string; /* TODO: rename to ?app name? */
}
