import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-window-manager',
  standalone: true,
  templateUrl: './window-manager.component.html',
  styleUrl: './window-manager.component.scss',
})
export class WindowManagerComponent {
  @Input({ required: true }) name: string;

  constructor(private readonly router: Router) {}

  @HostListener('document:keyup.escape')
  protected async closeApp() {
    await this.router.navigate(['']);
  }
}
