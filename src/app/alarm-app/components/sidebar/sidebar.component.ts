import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedItem: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verificar la URL actual cuando el componente se inicializa
    this.updateSelectedItem(this.router.url);

    // Escuchar los eventos de navegación
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Actualiza el elemento seleccionado según la URL
        this.updateSelectedItem(event.url);
      }
    });
  }

  // Actualiza el valor de selectedItem basado en la URL
  updateSelectedItem(url: string): void {
    if (url.includes('users')) {
      this.selectedItem = 'usuarios';
    } else if (url.includes('rewards')) {
      this.selectedItem = 'recompensas';
    } else if (url.includes('apagar')) {
      this.selectedItem = 'apagar';
    } else if (url.includes('seguridad')) {
      this.selectedItem = 'seguridad';
    }
  }

  // Selecciona un ítem manualmente
  selectItem(item: string) {
    this.selectedItem = item;
  }
}
