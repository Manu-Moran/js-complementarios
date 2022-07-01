let persona = prompt("buen dia, es usted un cliente o un empleado?");
let i = 0

while (persona != "cliente"){
switch (persona) {
    case "cliente":
        break;

    case "empleado":
        alert("mentira, no tenemos empleados");
        break;

    default:
        alert("prueba otra vez");
        break;
}
i = i + 1
persona = prompt("buen dia, es usted un cliente o un empleado?");
}

let saludo = "te costo " + i + " intentos"
alert (saludo)
let compra1 = prompt("Buen dia cliente, desea comprar patos?")
switch (compra1) {
    case "si":
        let pato = prompt("perfecto, cuantos?");
        break;
    
    default:
    case "no":
        alert("ok usted se lo pierde");
        break;
}