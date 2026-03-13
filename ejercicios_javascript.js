/* 
functionName  = camelCase
FunctionName = PascalCase
function_name = snake_case
*/


// Obtener el numero mayor

let numeros = [3, 7, 4, 9, 5]
function numeroMayor(numeros){
    let mayor = 0 // variable que guardara el valor mayor
    for(let valor of numeros){
        if(valor > mayor){ // comparamos el valor actual contra el valor mayor del momento
            mayor = valor
        }
    }
    return mayor
}
console.log(numeroMayor(numeros)) // 9

// invertir un string
//let palabra = "capa"
let palabra = "javascript"

function invertirPalabra(palabra){
    let palabraInvertida = ""

    for(let i = palabra.length - 1; i >= 0; i--){
        palabraInvertida+=palabra[i]
    }
    return palabraInvertida
}

console.log(invertirPalabra(palabra)) // apac

// contador vocales
let frase = "Esto es una prActica"

function contadorDeVocales(frase){
    let vocales = "AEIOUaeiou"
    let totalVocales = 0
    for(let i = 0; i < frase.length; i++){
        /* let letra = frase[i].toLowerCase()
        if(letra==="a" || letra==="e" || letra==="i" || letra==="o" || letra==="u"){
            totalVocales+=1
        } */
        if(vocales.includes(frase[i])){
            totalVocales+=1
        }
    }
    return totalVocales
}

console.log(contadorDeVocales(frase)) // 8