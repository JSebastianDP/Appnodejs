/*const op = require(`./ejercicio1`)
op.suma(5,10)
op.resta(20,15)
op.multiplicacion(5,5)
op.division(20,10)
console.log(op)

console.log(`1. Sumar \n2.Restar \n3.Multiplicar \n4.dividir`);
console.log(`Digite la operacion que desea realizar`);

const ope = process.openStdnin();
ope.add
console.log(`La opcion elegida es ${dato.toString()} y `)

const stdin = process.openStdnin();
*/
// 1. Requerir el modulo http
const http = require(`http`)

//Funcion callback para manejar el servidor 
function handleServer(req, res){
    res.writeHead(404,{"Content-type": 'text-html'})
    res.write(`<h1>Esta es la respuesta del servidor</h1>`)
    res.end()
}

//2. Crear el server 
const server = http.createServer(handleServer).listen(5000)





