// Forma tradicional de importar un elemento, primero en la interfse se coloca el "export"
// Al realizar el inport vuelve a ejecutar todo el archivo, si tenemos alguna funcion la vuelve a ejecutar con el export
import { calcularISV, Producto } from "./06-desestructuracion-funcion"
/*
    ===== Código de TypeScript =====
*/

const carritoCompras: Producto[]= [{
    desc: 'Telefono 1',
    precio: 100
}, {
    desc: 'Telefono 2',
    precio: 150}]

const [total, isv] = calcularISV( carritoCompras)

console.log('Total: ', total)
console.log('ISV: ', isv)

