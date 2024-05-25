//EJERCICIO 1
function convertirNumeroACadena(numero: any): string {
    try {
        if (numero === null || numero === undefined || isNaN(Number(numero))) {
            throw new Error("El dato proporcionado no es válido");
        }
        return numero.toString();
    } catch (error) {
        if (error instanceof Error)console.log("Error:", error.message);
            return "Error: No es un número";
    }
}
console.log(convertirNumeroACadena(123))
console.log(convertirNumeroACadena("abc"))
console.log(convertirNumeroACadena("Programacion"))
console.log(convertirNumeroACadena(2907))
console.log(convertirNumeroACadena(45.67))
console.log(convertirNumeroACadena(null))
console.log(convertirNumeroACadena(undefined))

//EJERCICIO 2
function obtenerPosicion<T>(arreglo: T[], indice: number): T | string {
    try {
        if (indice < 0 || indice >= arreglo.length) {
            throw new Error("El índice está fuera del rango del arreglo");
        }
        return arreglo[indice];
    } catch (error) {
        if (error instanceof Error)console.log("Error:", error.message);
            return "Error: El índice está fuera del rango del arreglo";
        }
    }
const numeros = [10, 20, 30, 40, 50];
console.log(obtenerPosicion(numeros, 2))
console.log(obtenerPosicion(numeros, 6))
console.log(obtenerPosicion(numeros, -1))

const frutas = ["sandia", "naranja", "banano", "manzana"];
console.log(obtenerPosicion(frutas, 1))
console.log(obtenerPosicion(frutas, 4))
console.log(obtenerPosicion(frutas, 0))

//EJERCICIO 4
function calcularAreaTriangulo(base: number, altura: number): string {
    try {
        if (base <= 0 || altura <= 0) {
            throw new Error("Los numeros no deben ser negativos");
        }
        const area = (base * altura) / 2;
        return `El área del triángulo es ${area}`;
    } catch (error) {
        if (error instanceof Error)console.log("Error:", error.message);
            return "Error: La base y la altura deben ser numeros positivos";
        }
    }
console.log(calcularAreaTriangulo(5, 10))
console.log(calcularAreaTriangulo(-5, 10))
console.log(calcularAreaTriangulo(5, -10))
console.log(calcularAreaTriangulo(0, 10))
console.log(calcularAreaTriangulo(5, 0))

//EJERCICIO 5
function leerArchivo() {
    let archivo = abrirArchivo("ejemplo.txt");
    try {
        console.log("Realizando operaciones con el archivo:", archivo.nombre)
        if (Math.random() < 0.5) {
            throw new Error("Error durante la operación")
        }
        console.log("Operación completada exitosamente")
    } catch (error) {
        console.error("Ocurrió un error durante la operación:", error)
    } finally {
        cerrarArchivo(archivo);
    }
}
function abrirArchivo(nombre: string) {
    console.log(`Abriendo archivo: ${nombre}`)
    return { nombre: nombre }
}

function cerrarArchivo(archivo: any) {
    console.log(`Cerrando archivo: ${archivo.nombre}`)
}

leerArchivo()

//EJERCICIO 6
function operacionCompleja(x: number, y: number): number {
    if (y === 0) {
        throw new Error("División por cero no permitida")
    }
    return x / y
}
function ejecutarOperacion(x: number, y: number) {
    try {
        const resultado = operacionCompleja(x, y)
        console.log("El resultado de la operación compleja es:", resultado)
    } catch (error) {
        console.error("Error durante la ejecución de la operación:", error instanceof Error ? error.message : error)
    }
}
ejecutarOperacion(2, 0)

