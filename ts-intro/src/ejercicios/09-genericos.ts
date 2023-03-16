/*
    ===== Código de TypeScript =====
*/

// Los genericos convierten la salida al tipo del valor de entrada.
function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5]);

// Podriamos decir o especificar el valor de un valor.
let soyExplicito = queTipoSoy<number>(100);