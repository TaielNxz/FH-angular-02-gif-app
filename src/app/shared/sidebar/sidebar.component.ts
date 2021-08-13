import { GifsService } from './../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
  
  constructor( private gifsService: GifsService ) {}

  get historial() {
    return this.gifsService.historial;
  }

  buscar( termino: string ) {
    this.gifsService.buscarGifs( termino )
  }

}
