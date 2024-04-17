import { Component } from '@angular/core';
import { ApplicationContainerComponent } from '@components/application-container/application-container.component';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  imports: [ApplicationContainerComponent],
})
export class NewsComponent {}
