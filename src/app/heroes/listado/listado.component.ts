import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Capitan America', 'Thor'];
  heroesBorrados: string[] = [];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('Borrando...');
    if(this.heroes.length > 0){
      this.heroeBorrado = this.heroes.shift() || '';
      this.heroesBorrados.push(this.heroeBorrado);
    }
  }

}
