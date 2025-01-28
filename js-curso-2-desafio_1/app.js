let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Hora do desafio';

function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

function exibirAlerta() {
    alert('Eu amo JS!!')
}

function exibirPrompt(){
    let nomeDaCidade = prompt ('Digite o nome de uma cidade do Brasil que você gostaria de conhecer:')
    alert(`Gostaria de conhecer ${nomeDaCidade} o quanto antes`)
}

function exibirSoma(){
    let primeironumero = parseInt(prompt('Digite o primeiro valor'));
    let segundonumero = parseInt(prompt('Digite o segundo valor'));
    let resultado = primeironumero + segundonumero;
    alert(`${primeironumero}+ ${segundonumero} = ${resultado}`)
}