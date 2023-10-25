let numeroParaEncontrar= 0;
let tentativas= 0;

function NumeroAleatorio(){
    tentativas= 0;
    numeroParaEncontrar= parseInt(Math.random() * 20);

    console.log(numeroParaEncontrar)
}

function VerificarNumero(){
    var NumeroDigitado= document.getElementById('NumeroDigitado').value;

    if(NumeroDigitado < 1 || NumeroDigitado > 20){
        alert('Digite um número válido (de 0 a 20)!');
        document.getElementById('NumeroDigitado').value = '';
        return;
    }

    if(NumeroDigitado > numeroParaEncontrar){
        tentativas++;
        alert('O número para ser encontrado é Menor!')
        document.getElementById('NumeroDigitado').value = '';
    }

    else if(NumeroDigitado < numeroParaEncontrar){
        tentativas++;
        alert('O número para ser encontrado é Maior!')
        document.getElementById('NumeroDigitado').value = '';
    }

    else{
        alert('Parabéns, você acertou! A quantidade de tentativas foi '+tentativas+'!');
        document.getElementById('NumeroDigitado').value = '';
        NumeroAleatorio();
    }
}



NumeroAleatorio();