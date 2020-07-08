
var getData = function(){
    // me recupera los datos del html con el id que está entre parentesis
    var decimal = document.getElementById("Decimal").value;
    var binario = document.getElementById("Binario").value;
    var entero =  document.getElementById("Entero").value;
    var hexadecimal = document.getElementById("Hexadecimal").value;
    var octal = document.getElementById("Octal").value;
    console.log(decimal+" "+binario+" "+entero+" "+hexadecimal+" "+octal);
}
