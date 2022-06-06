

let nome = document.getElementById('nome');
let altura = document.getElementById('altura');
let peso = document.getElementById('peso');

function calcular(){
    let pesoValue = peso.value;
    let alturaValue = altura.value/100;

    let imc = pesoValue/(alturaValue*alturaValue);

    if(imc <= 18.5){
        mensagem = "<p>voce esta abaixo do peso</p>";
    }else if(imc >= 18.6 && imc <=24.9){
        mensagem = "<p>e voce esta com o peso ideal</p>";
    }else if(imc >= 25 && imc <=29.9){
        mensagem = "<p>voce esta levemente acima do peso</p>"
    }else if(imc >=30 && imc <=34.9){
        mensagem = "<p>voce esta com obesidade grau 1</p>"
    }else if(imc <= 35 && imc <=39.9){
        mensagem = "<p>voce esta Obesidade grau 2</p>"
    }else if(imc > 40){
        mensagem = "<p>voce esta perto da morte kkkkkk</p>"
    }else if(imc = 0){
        mensagem = "<p>digite algum numero</p>"
    }
    
    document.getElementById('resultado').innerHTML = "<p>Seu imc é: <p/>"+imc.toFixed(1)+mensagem;
    

    //vou fazer um merge para a main
    
}