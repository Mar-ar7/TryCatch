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

//EJERCICIO 6
function operacionMatematicaCompleja(numero1: number, numero2: number): number {
    if (numero2 === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return numero1 / numero2;
}

function funcionPrincipal(): void {
    try {
        const resultado = operacionMatematicaCompleja(10, 0);
        console.log("El resultado de la operación es:", resultado);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error durante la operación matemática:", error.message);
        } else {
            console.error("Error en la operacion: ", error);
        }
    }
}
funcionPrincipal();
