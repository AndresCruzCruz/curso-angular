/*
    ===== Código de TypeScript =====
*/

// Los decoradores sirven para cambiar las clases en el momento de ser definidas 
// Sirven para identificar el tipo de las clases

function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty= "newProperty";
        hello = "override";
    };
}


@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase)

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);