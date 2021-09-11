import { Component } from '@angular/core'

@Component({
    selector:'app-contador',
    template:`

    <h1> angular.JS {{titulo}}</h1>
    <button  (click)="acumular(Base)">+{{Base}}</button>
    <span>{{Numero}}</span>
    <button (click)="acumular(-Base)">-{{Base}}</button>
        
    `
})

export class ContadorComponent{
    public titulo:string = 'Contador App';
    public Numero: number=10;
    public Base: number=5;
  
    acumular(valor:number){
    this.Numero+=valor; 
    }
}