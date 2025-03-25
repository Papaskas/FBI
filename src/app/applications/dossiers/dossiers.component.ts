import { Component } from '@angular/core';
import { WindowManagerComponent } from '@components/window-manager/window-manager.component';
import { DossierTitleCardComponent } from '@dossiers/components/dossier-title-card/dossier-title-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dossiers',
  standalone: true,
  templateUrl: './dossiers.component.html',
  styleUrl: './dossiers.component.scss',
  imports: [WindowManagerComponent, DossierTitleCardComponent, RouterOutlet],
})
export class DossiersComponent {}
