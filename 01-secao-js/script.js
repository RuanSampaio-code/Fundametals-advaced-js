/* Calucaldora de IMC */

var peso ;
var altura ;
var imc;
var resultado ;
var btnCalcular ;

function calcular(event) {
    event.preventDefault();

    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);

    resultado = document.getElementById("resultado");


    console.log(imc);
    //console.log(altura);

    if (imc < 18.5) {
        
        resultado.innerHTML = "<p> Seu imc é de " + imc.toFixed(2) + "<br>" + ". Você está abaixo do peso.</p>";
    }
    else if (imc >= 18.5 && imc < 24.9) {
       // resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>Seu imc é de " + imc.toFixed(2) + ". Você está com o peso normal.</p>";
       
    }
    else if (imc >= 25 && imc < 29.9) {
        //resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>Seu imc é de " + imc.toFixed(2) + ". Você está com sobrepeso.</p>";
        
    }
    else {
        //resultado = document.getElementById("resultado");
        resultado.innerHTML = "<p>Seu imc é de " + imc.toFixed(2) + ". Você está com obesidade.</p>";
        
    }

    inputPeso.value = "";
    inputAltura.value = "";  

    

   //alert("Calculando IMC...");
}