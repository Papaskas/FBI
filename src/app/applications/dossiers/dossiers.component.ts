import { Component } from '@angular/core';
import { ApplicationContainerComponent } from '@components/application-container/application-container.component';
import { DossierTitleCardComponent } from '@dossiers/components/dossier-title-card/dossier-title-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dossiers',
  standalone: true,
  templateUrl: './dossiers.component.html',
  styleUrl: './dossiers.component.scss',
  imports: [ApplicationContainerComponent, DossierTitleCardComponent, RouterOutlet],
})
export class DossiersComponent {}
