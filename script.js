function encriptar(){
    if(document.getElementById("input_mensaje").value.trim().length==0){
    document.getElementById("impresion").style.display = "none";
    document.getElementById("copiar").style.display = "none";  
    }else{
    var texto = document.getElementById("input_mensaje").value.toLowerCase();
    var mensaje = texto.replace(/e/igm,"enter");
    var mensaje = mensaje.replace(/o/igm,"ober");
    var mensaje = mensaje.replace(/i/igm,"imes");
    var mensaje = mensaje.replace(/a/igm,"ai");
    var mensaje = mensaje.replace(/u/igm,"ufat");
    document.getElementById("impresion").style.display = "inline-block";
    document.getElementById("copiar").style.display = "inline-block";
    document.getElementById("impresion").innerHTML = mensaje;
    console.log(mensaje)
    }
    document.getElementById("input_mensaje").value = null;
}
function desencriptar(){
    if(document.getElementById("input_mensaje").value.trim().length==0){
    document.getElementById("impresion").style.display = "none";
    document.getElementById("copiar").style.display = "none";
    }else{
    var texto = document.getElementById("input_mensaje").value.toLowerCase();
    var mensaje = texto.replace(/enter/igm,"e");
    var mensaje = mensaje.replace(/ober/igm,"o");
    var mensaje = mensaje.replace(/imes/igm,"i");
    var mensaje = mensaje.replace(/ai/igm,"a");
    var mensaje = mensaje.replace(/ufat/igm,"u");
    document.getElementById("impresion").style.display = "inline-block";
    document.getElementById("copiar").style.display = "inline-block";
    document.getElementById("impresion").innerHTML = mensaje;
    console.log(mensaje)
    }
    document.getElementById("input_mensaje").value = null;
}
function copiar(){
    var contenido = document.querySelector("#impresion");
    contenido.select();
    document.execCommand("copy");
}