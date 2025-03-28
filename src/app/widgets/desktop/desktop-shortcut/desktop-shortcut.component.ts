import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-desktop-shortcut',
  standalone: true,
  templateUrl: './desktop-shortcut.component.html',
  styleUrl: './desktop-shortcut.component.scss',
  imports: [NgOptimizedImage],
})
export class DesktopShortcutComponent {
  @Input({ required: true }) icon: string;

  @Input({ required: true }) name: string;

  @Input({ required: true }) location: string;

  constructor(private readonly router: Router) {}

  protected async open() {
    await this.router.navigate([this.location]);
  }
}
