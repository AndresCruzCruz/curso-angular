/*
    ===== Código de TypeScript =====
*/


export interface Producto {
    desc: string
    precio: number
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
} 

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
} 

export function calcularISV( productos: Producto[] ): [number, number] {
    let total = 0
    // productos.forEach((producto) => {
    //     total += producto.precio
    // }) 
    // Aqui podemos ver la destructuacion de arreglos, poniendo entre llaves el valor que me interesa
    productos.forEach(({ precio }) => {
        total += precio
    })
    return [total, total * 0.15]
}

const articulos = [telefono,tableta]
// const totalISV = calculaISV(articulos)
// Aqui vemos que podemos destructurar desde la creacion de la constante porque le asignamos una variable a los dos posibles valores dela funcion.
const [total, isv] = calcularISV(articulos)
console.log('Total: ' + total)
console.log('ISV: ' + isv)