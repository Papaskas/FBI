import { Component, input, model } from '@angular/core';
import { MenuItem } from '@entities/MenuItem';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss',
  standalone: true,
  imports: [MatList, MatListItem],
})
export class ContextMenuComponent {
  items = input.required<MenuItem[]>();

  // trigger = output();
}
