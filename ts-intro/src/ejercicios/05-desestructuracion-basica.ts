/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number
    segundo: number
    cancion: string
    detalles: Detalles
}

interface Detalles {
    autor: string
    anio: number
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}
// Se destructura el objeto para guardarlo en una variable
//const {volumen, segundo, cancion, detalles} = reproductor
//const {autor} = detalles

const autor = 'Fulano'

//Destructuracion en una sola linea, pero no es recomendable porque se confunde con un objeto
//Si necesito cambiar el nombre lo pongo despues de 2 puntos
const {volumen, segundo, cancion, detalles:{ autor: autorDetalle } } = reproductor

// console.log('El volumen actual es de: ', volumen)
// console.log('El segundo actual es de: ', segundo)
// console.log('La cancion actual es de: ', cancion)
// console.log('El Autor actual es: ', autorDetalle)

//Destructuracion de arreglos
// En la desestructuracion de arreglos la posicion es importante
const dbz: string[] = ['Goku', 'Vegetta', 'Trunks']
// const [goku, veggeta, trunks] = dbz
const [, , trunks] = dbz

// console.log('Personaje 1: ', goku)
// console.log('Personaje 2: ', veggeta)
console.log('Personaje 3: ', trunks)

