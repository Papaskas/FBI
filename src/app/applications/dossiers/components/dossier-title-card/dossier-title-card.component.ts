import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dossier-title-card',
  standalone: true,
  templateUrl: './dossier-title-card.component.html',
  styleUrl: './dossier-title-card.component.scss',
  imports: [NgOptimizedImage],
})
export class DossierTitleCardComponent {
  @Input({ required: true }) img: string;

  @Input({ required: true }) fullName: string;

  @Input({ required: true }) crime: string;

  @Input({ required: true }) NCIC: string;

  constructor(private readonly router: Router) {}

  protected async openDossier() {
    await this.router.navigate(['dossiers', this.NCIC]);
  }
}
