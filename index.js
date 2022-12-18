//console log padrão.
console.log('Olá Rayane');

// Objeto com os tipos de variáveis e seus valores.
var itens = {
    colorCamisa: 'azul',
    dinheiro: 25,
    passagemOnibus: true,
    paciencia: null

}

itens.colorCamisa = 'amarela';
console.log(itens);

//Array
var amigos = ['lucas', 'allysson', 'marvin', 'mario'];

amigos[1] = 'leticia';
console.log(amigos[1]);

//Função
function statusVenda(status, valor){
    console.log('A venda foi: ' + status + '! O seu valor é: ' + valor);
}
//apens com o código abaixo já é chamada a função no console
statusVenda('Aprovada', 100);
//Necessário saber 1) Parâmetro, 2)Argumento;
//Parâmetro é passado dentro da function statusVenda()
//Argumento é o que vai ser o valor do parâmetro, passado na chamada do statusVenda();

//função de cálculo
function desconto10(valor){
    return valor - (valor * 10/100)
}

console.log(desconto10(30)); 
//:D

//Operadores Ternários;
var velocidade = 150;
var kmPista = velocidade >= 90 ? 'Motorista acima da velocidade' : 'Motorista abaixo da velociade';

console.log(kmPista);

//operadores lógicos
 var idadeVotar = true;
 var tituloEleitor = false;

 var podeVotar = idadeVotar && tituloEleitor;
 console.log(podeVotar);
            //condição --> só pode viajar se não votar;
var podeViajar = !podeVotar;
console.log(podeViajar);

//Usando o || OU
//O cliente vai escolher a cor de um carro, mas caso ele não escolha nenhuma no site o próprio site vai enviar a cor de estoque;

var corCliente = undefined;
var corEstoque = 'vermelho';
var corVendida = corCliente || corEstoque;
//o OU vai checar se o primeiro passado tem valor, se sim, vai retornar
//se o primeiro passado não tiver valor, retorna o segundo.
console.log(corVendida);

//Usando o if e else e else if
//Quero verificar a velocidade do carro.

var veloCarro = 30;

if( veloCarro > 110){
    console.log("Ops, seu carro está em alta velocidade");
}

else if (veloCarro > 90 && veloCarro <= 110){
    //lembrar de colocar esse && para comparar certo
    console.log("Eba, seu carro está na faixa média")
}

else{
    console.log('Seu carro está abaixo da velocidade');
}
 
//Usando o Switch
//quero pesquisar as abreviações dos estados no Brasil e mostrar o nome completo.

var nomeEstadoAbreviado = 'AL';

switch (nomeEstadoAbreviado){
    case 'BA':
        console.log('Bahia');
        break //sempre colocar, pois se não vai inspecionar tudo.

    case 'PE':
        console.log('Pernambuco');
        break

    case 'MA':
        console.log('Maranhão');
        break

    //usado para quando não é em nenhum dos casos!!
    default:
        console.log('Abreviação não identificada');


}

//Aprendendo o For
for ( i = 0; i <= 10; i++) {
	console.log('Contagem: ', i);

}

//=-------------------------------------------------------
//var i = 1;
//while( 1 <= 10) {
    //console.log('Está somando: ', i++);  
//}

//---------------------------------------------------------
//var i = 1;
//do {
       // console.log( 'Somando :) ' , i)
//} while (i <= 10);

//ENTENDENDO O FOR IN LOOP
const meuCarro = {
    modelo: ': Tesla',
    ano: 2003,
    nome: ': Ray a mais de mil bala'
}

for (var i in meuCarro)
//o i vai ser o loop.
    console.log(i, meuCarro[i])
    // apenas console.log com i mosta só os atributos sem valores (modelo, ano, nome)
    //meuCarr[i] mosta informações/atributos e argumentos (tesla, 2003, ray a mais de mil bala)

const amigoos = [ 'lucas', 'marcio', 'leticia'];
for (let a of amigoos)
console.log(a)
//só com isso mostrará os valores dentro do array.


