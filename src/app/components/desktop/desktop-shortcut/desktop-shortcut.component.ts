import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ApplicationContainerComponent } from '@components/applications/application-container/application-container.component';
import { MostWantedComponent } from '@components/applications/most-wanted/most-wanted.component';

@Component({
  selector: 'app-desktop-shortcut',
  standalone: true,
  templateUrl: './desktop-shortcut.component.html',
  styleUrl: './desktop-shortcut.component.scss',
  imports: [NgOptimizedImage, ApplicationContainerComponent, MostWantedComponent],
})
export class DesktopShortcutComponent {
  @Input({ required: true }) icon: string;

  @Input({ required: true }) shortName: string;

  protected showApplication = false;

  protected dblclick() {
    this.showApplication = !this.showApplication;
  }
}
