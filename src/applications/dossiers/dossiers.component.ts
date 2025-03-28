import { Component } from '@angular/core';
import { DossierTitleCardComponent } from '@dossiers/components/dossier-title-card/dossier-title-card.component';
import { RouterOutlet } from '@angular/router';
import { WindowManagerComponent } from '../window-manager/window-manager.component';

@Component({
    selector: 'app-dossiers',
    templateUrl: './dossiers.component.html',
    styleUrl: './dossiers.component.scss',
    imports: [WindowManagerComponent, DossierTitleCardComponent, RouterOutlet]
})
export class DossiersComponent {}
