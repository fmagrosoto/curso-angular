import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  titulo: string = 'Fichas de héroes';
  nombre: string = 'Iron Man';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  algunMetodo(): string {
    return `${this.nombre} - ${this.edad}`
  }

  /**
   * ESTE ES UN MÉTODO PARA CAMBIAR DE NOMBRE
   *
   * @author Fernando Magrosoto V.
   */
  cambiarNombre() {
    this.nombre = 'Supermán';
  }

  cambiarEdad() {
    this.edad = 55;
  }
}
