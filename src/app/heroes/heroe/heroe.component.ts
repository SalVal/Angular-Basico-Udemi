import { Component } from "@angular/core";
  

@Component({
selector: 'app-heroe',
templateUrl: 'heroe.component.html'
})  


export class HeroeComponent{

    public Nombre:string='Lacides';
    public Edad:number=10;

    get HeroeCapitalizado(): string{
        return this.Nombre.toLocaleUpperCase();
    }

    
    ObtenerNombre():string {
        return this.Nombre;
    }

    CambiarNombre():void{
        this.Nombre ='Nelys B.';
    };

    CambiarEdad():void{
         this.Edad=12;
    }


}