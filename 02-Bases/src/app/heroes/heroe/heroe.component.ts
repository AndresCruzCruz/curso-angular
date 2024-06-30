import { Component } from '@angular/core';
@Component ({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent {
    public nombre: string = 'ironman';
    public edad:   number = 45;

    get nombreCapitalizado(): string  {
        return this.nombre.toUpperCase();
    }

    obtenerNombre() : string { // Losbackstick permiten crear templates de 1 linea
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 23;
    }

    resetForm():void {
        this.nombre = 'ironman';
        this.edad = 45;
    }
}
