import { Component } from '@angular/core';

@Component({
  selector: 'app-application',
  standalone: true,
  templateUrl: './application.component.html',
  styleUrl: './application.component.scss',
})
export class ApplicationComponent {
  // @Output() openApplication = new EventEmitter<string>();

  protected open() {
    alert('aas');
  }
}
