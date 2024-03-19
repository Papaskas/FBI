import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-desktop-shortcut',
  standalone: true,
  templateUrl: './desktop-shortcut.component.html',
  styleUrl: './desktop-shortcut.component.scss',
  imports: [NgOptimizedImage],
})
export class DesktopShortcutComponent {
  @Input({ required: true }) icon!: string;

  @Input({ required: true }) shortName!: string;

  @Input({ required: true }) url!: string; /* TODO: rename to ?app name? */

  protected dblClick() {
    alert('ads');
  }
}
