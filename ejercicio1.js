/*const num1 = 6, num2=  10
let suma = num1 + num2; 
console.log(`La suma  ${num1} y ${num2} es ${suma}`);*/



const sumar= (num1, num2) =>{
    let suma= num1+num2
    console.log(`La suma ${num1} y ${num2} es ${suma}`);
}


 //Funcion restar ( funcion por declaracion )
 function restar (num1, num2) {
let resta  = num1 - num2;
console.log(`La resta entre ${num1} y ${num2} es ${resta}`);
 }


 // Funcion de multiplicar 
 function multiplicar(num1, num2){
    let multiplicacion = num1 * num2;
    console.log(`La multiplicacion entre ${num1} y${num2} es ${multiplicacion}`)
 }

 // Funcion de dividir

 function dividir(num1, num2){
    let division  = num1 / num2;
    console.log(`La division entre ${num1} y ${num2} es ${division}`)
 }



 //Funcion para la potencia
function potencia(num1,num2){
    let pot=Math.pow(num1,num2)
    console.log(`La potencia de ${num1} elevado a la ${num2} es ${pot}`);
}


//Funcion para la radicacion 
function radicacion(num1){
    let rad=Math.sqrt(num1)
    console.log(`La raiz de ${num1} es ${rad}`);


}

/*exports.suma= sumar 
exports.resta= restar
exports.multiplicacion = multiplicar
exports.division = dividir
exports.pot = potencia 
exports.rad = radicacion*/

const operaciones = {}
operaciones.suma = sumar
operaciones.resta = restar
operaciones.multiplicacion = multiplicar 
operaciones.division = dividir
operaciones.rad = radicacion 
operaciones.pot = potencia