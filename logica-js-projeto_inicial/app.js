//1.Criar uma função que exibe "Olá, mundo!" no console.

function exibeMensagem(){
    console.log('Olá mundo!');
}
exibeMensagem();    

//2.Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function mensagemComNome(nome){
    console.log(`Olá ${nome}, bem vindo!`)
}
mensagemComNome('Maykon')

//3.Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
//3.1 Do jeito que resolvi:

function dobroNumero(numero){
    let numerodobro = numero * 2 
    console.log (`O dobro de ${numero} é ${numerodobro}`);
}
dobroNumero('8');
//3.2 Fórum
function dobro(n) {
    return n * 2;
}
console.log(dobro('60'));

//4.Criar uma função que recebe três números como parâmetros e retorna a média deles.

function mediaNoConsole(numero1,numero2,numero3){
    return (numero1 + numero2 + numero3)/3
}
console.log(mediaNoConsole(6,5,5));

//5.Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNumeroConsole(n1,n2){
    return Math.max(n1,n2)
}
console.log(maiorNumeroConsole(99,200));

//6.Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroMultiplicadoPorSi(number){
    return number * number
}
console.log(numeroMultiplicadoPorSi(7))

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, 
// e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularImc(altura,peso){
    let resultadoImc =peso/(altura*altura);
    return resultadoImc;
}
console.log(calcularImc(1.75,70))    

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function valorFatorial(n){
    let fatorial = 1
    for(let i = n; i > 1; i--){
        fatorial*= i;
    }
    return fatorial;
}
   

let n = 9
let resultado = valorFatorial(n)
console.log(`O fatorial de ${n} é ${resultado} `)

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. 
// Para isso, considere a cotação do dólar igual a R$4,80.
function dolarParaReal(dolar){
    const cotacaoDolar = 4.80
    return dolar*cotacaoDolar;

}
console.log(dolarParaReal(5))

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function dadosRetangulo(altura,largura){
    let area = altura*largura;
    let perimetro = 2*(altura+largura);
    return (`A área do retângulo é ${area}. Já o seu perímetro resulta em ${perimetro}`);
}
alert(dadosRetangulo(4,9))

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro.
// Considere Pi = 3,14.
function dadosCirculo(raio){
    const pi = 3.14
    let area = pi*(raio*raio)*2
    let perimetro = (pi*2)*raio
    return (`A área do círculo é ${area}. O seu perímetro é ${perimetro}`)
}
alert(dadosCirculo(5))

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero){
    for(let i = 0; i<=10; i++){
        console.log(`${numero}*${i} é igual a ${numero*i}`)
    }
}tabuada(5)

//LISTAS (ARRAYS)

var listaGenerica = []
var linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
linguagensDeProgramacao.push('Java','Ruby','GoLang')

var nomes = ['emide xota', 'ciro gay', 'marquinhus']
console.log(nomes[0])//para ver emide xota
console.log(nomes[1])//para ver ciro gay
console.log(nomes[2])//para ver marquinhus