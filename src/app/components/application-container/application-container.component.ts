import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-container',
  standalone: true,
  templateUrl: './application-container.component.html',
  styleUrl: './application-container.component.scss',
  imports: [NgIf],
})
export class ApplicationContainerComponent {
  @Input({ required: true }) appName: string;

  constructor(private router: Router) {}

  protected async closeApp() {
    await this.router.navigate(['']);
  }
}
