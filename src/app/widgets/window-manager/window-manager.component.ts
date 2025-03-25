import { Component, HostListener, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-window-manager',
  standalone: true,
  templateUrl: './window-manager.component.html',
  styleUrl: './window-manager.component.scss',
  imports: [NgIf],
})
export class WindowManagerComponent {
  @Input({ required: true }) appName: string;

  constructor(private router: Router) {}

  @HostListener('document:keyup.escape')
  protected async closeApp() {
    await this.router.navigate(['']);
  }
}
