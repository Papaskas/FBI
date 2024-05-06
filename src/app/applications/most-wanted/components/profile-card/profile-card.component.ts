import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
  imports: [NgOptimizedImage],
})
export class ProfileCardComponent {
  @Input({ required: true }) img: string;

  @Input({ required: true }) fullName: string;

  @Input({ required: true }) crime: string;

  @Input({ required: true }) NCIC: string;

  constructor(private readonly router: Router) {}

  protected async openDossier() {
    await this.router.navigate([this.NCIC]);
  }

  protected setDefaultPic(event: Event) {
    (event.target as HTMLImageElement).src = 'https://placehold.co/600x400/EEE/31343C';
  }
}
