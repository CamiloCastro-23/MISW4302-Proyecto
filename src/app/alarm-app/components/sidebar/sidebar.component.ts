import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  selectedItem: string = 'usuarios'; // Valor inicial seleccionado

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
