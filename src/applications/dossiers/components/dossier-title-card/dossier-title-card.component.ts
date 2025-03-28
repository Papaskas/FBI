import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossier-title-card',
  templateUrl: './dossier-title-card.component.html',
  styleUrl: './dossier-title-card.component.scss',
  standalone: true,
  imports: [NgOptimizedImage],
})
export class DossierTitleCardComponent {
  img = input.required<string>();

  fullName = input.required<string>();

  crime = input.required<string>();

  NCIC = input.required<string>();

  constructor(private readonly router: Router) {}

  protected async openDossier() {
    await this.router.navigate(['dossiers', this.NCIC]);
  }
}
