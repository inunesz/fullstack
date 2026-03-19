function Daralerta(){
    var texticulo= document.getElementById("texticulo").value 
    window.alert("seu amigo é o mais " +  texticulo);
}


Daralerta("conteudo");





//window.alert ("ESTE É UM ALERTA");
console.log("esta msg esta escondida");
document.getElementById("testeID").innerHTML= "voce é de maior";
document.getElementById("Bodinho").style.setProperty("background-color","red");

var entrada= prompt( "entre com a sua idade");

console.log(entrada);

entrada = parseInt(entrada);

if(entrada > 18){
    console.log("voce é de maior");
}else if(entrada < 18){
    console.log("voce é de menor");
}else{
    console.log ("invalido");
}

