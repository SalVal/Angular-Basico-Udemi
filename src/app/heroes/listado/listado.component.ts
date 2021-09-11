import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {
  ListHeroes: string[]=['lacides','nelys','Padre','Madre'];
  ListHeroesDelete: string[]=[];

  BorrarHeroe(){
    this.ListHeroesDelete.push(this.ListHeroes.shift() || '');
  }
}
