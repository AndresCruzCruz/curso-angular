/*
    ===== Código de TypeScript =====
*/

class PersonaNomal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNomal {
    // private solo es visible dentro de la clase
    // public se puede acceder fuera de la clase
    // static se puede acceder sin crear una instalacia
    // cuando no colocas explicitamente todas son publicas

    // Esta en la forma larga y tardada
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    // constructor(alterEgo: string, edad: number, nombreReal: string) {
    //     this.alterEgo = alterEgo;
    //     this.edad = edad;
    //     this.nombreReal = nombreReal;
    // }

    // LA forma corta
    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){
        super( nombreReal, 'NY');
    }
}

const ironman = new Heroe('Ironman', 25, 'Tony');
console.log(ironman);