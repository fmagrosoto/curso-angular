import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroeBorrado: string = ''

  heroes: string[] = [
    'spiderman', 'ironman', 'hulk', 'thor', 'capitán américa'
  ];

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
