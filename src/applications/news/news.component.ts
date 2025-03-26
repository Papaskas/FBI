import { Component } from '@angular/core';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  imports: [WindowManagerComponent],
})
export class NewsComponent {}
