/*
    ===== Código de TypeScript =====
*/
//Tipo funcion
function sumar(a: number, b: number): number {
    return (a + b);
}
//Tipo funcion en flecha
const sumarFlecha = (a: number ,b: number):number => {
    return a + b;
}
//En funciones con valores opcionales primero va el numero opcional y despues con valor por default.
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base
}

//const resultado = multiplicar(5, 0, 10)

//console.log(resultado);

interface PersonajeLOR {
    nombre: String
    pv: number
    mostrarHP: () => void // De forma rapida
}

// El void del final es para declarar que no regresa resultado
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX
    console.log(personaje)
}
// Los constantes son mas ligeros que los let ---- es un ejemplo de un objeto
const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHP() {
        console.log('Puntos de vidda:',this.pv)
    }
}

curar(nuevoPersonaje, 20)

nuevoPersonaje.mostrarHP()