/*
    ===== Código de TypeScript =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    nombre:string
    hp: number
    habilidades: string[]
    puebloNatal?: String
}

const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'Pueblo paleta'

// Imprime en forma de tabla
console.table(personaje)