import { Component } from '@angular/core';
import { DossierTitleCardComponent } from '@dossiers/components/dossier-title-card/dossier-title-card.component';
import DB from '@dossiers/data';

@Component({
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrl: './dossier-list.component.scss',
  imports: [DossierTitleCardComponent],
})
export class DossierListComponent {
  protected readonly dossiers = DB.getDossiers();
}
