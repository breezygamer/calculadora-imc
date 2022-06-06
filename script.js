let btnCalcular = document.querySelector('.btn-calcular');


function imc(){
    let nome = document.querySelector('#nome').value;
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;
    let resultado = document.querySelector('#resultado');
    
    if(nome !== "" && altura !== "" && peso !== ""){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal, Parabens !!!';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }else if(valorIMC <35){
            classificacao = 'com obesidade grau 1.';
        }else if(valorIMC < 40){
            classificacao = 'com obesidade grau 2';
        }else{
            classificacao = 'com obesidade grau 3. Cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificacao}`;
    }else{
        resultado.textContent = 'Preencha todos os campos'
    }

}

btnCalcular.addEventListener('click', imc, false);