import { Component } from '@angular/core';
import { WindowManagerComponent } from '@applications/window-manager/window-manager.component';
import { Application } from '@entities/Application';

@Component({
    selector: 'app-doom',
    templateUrl: './doom.component.html',
    styleUrl: './doom.component.scss',
    imports: [WindowManagerComponent]
})
export class DoomComponent implements Application {
  name = 'DOOM';
}
