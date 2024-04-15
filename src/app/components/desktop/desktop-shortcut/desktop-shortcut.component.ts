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

  @Input({ required: true }) shortName: string;

  @Input({ required: true }) url: string;

  constructor(private router: Router) {}

  protected async dblclick() {
    await this.router.navigate([this.url]);
  }
}
