//Entendendo Sobre Arrays

var amigos = ['Letícia', 'joao', 'carlos']
amigos[2] = 'jose'

//LOCALIZANDO ITENS EM UMA ARRAY;

var num = [9, 7, 3 , 2]

console.log(num.indexOf(3))
//verifica se existe e retorna a posição no array.

console.log(num.includes(9))
//retorna com verdadeiro ou falso se há ou não o número.

//DESCOBRINDO COMO RETORNAR ALGUNS ITENS DO ARRAY;

var filmes = [
    {id: 1, nomeFilme:'Madagascar'},
    {id: 2, nomeFilme:'Ta chovendo hamburguer'},
    {id: 3, nomeFilme:'Caroline'}
]

console.log( filmes.find(function(filme){

        return filme.nomeFilme == 'Madagascar'
}) )
// --> pra poder encontrar/chamar mais de um item, deve-se criar uma função (filme) e a partir dela especificar o que quer

        //outra forma: ARROW FUNCTION

console.log( filmes.find( filme =>  filme.nomeFilme == 'Madagascar') )
    // => é uma function e returns
    //filme está dentro de nomeFilme  e verifica se existe

//REMOVENDO UM NÚMERO DE UMA ARRAY

const numero = [ 5, 8, 3, 4];

//const final = numero.pop();
//retira o número final do array

//const final = numero.shift();
//retira o número do início

const final = numero.splice(2, 1);
//retira elementos do meio. A partir do index 2 quero que tire 1 elemento.

console.log(final);
console.log(numero);

//RETIRAR TODOS ELEMENTOS DO ARRAY

var array = [2, 8, 4, 5];
array.splice(0, array.length);
console.log(array);
//--> retorna um array vazio

//JUNTANDO ARRAYS

var arrayOne = [ 2, 4, 7, 8];
var arrayDois = [ 'Rayane', 'Saúde', 'Oi'];

todosJuntos = arrayOne.concat(arrayDois);
//aqui junta 

//CRIANDO OUTRO ARRAYS 

var outroArray = todosJuntos.slice( 2, 6)
//vai pegar do index 2 até o 6 e criar um array novo em outroArray
console.log(todosJuntos);
console.log(outroArray);

//Adicionando ENTRE ARRAYS

var estudante = ['ANA CLARA', 'LUCAS', 'MARIO'];

var adicionaJoin = estudante.join(',')
console.log(adicionaJoin);

//ORGANIZANDO CRESCENTE E DECRESCENTE string e números

var estudante = ['ANA CLARA', 'LUCAS', 'MARIO', 'BRUNO'];
estudante.sort(); //de cima p baixo
//estudante.reverse() //de baixo p cima

console.log(estudante);

//Verificando CADA ELEMENTO DO ARRAY

var temperatura = [34, 12, 5, 0];

var checaTemp = temperatura.every(function(temp){
     return  temp >= 0;
})
//every verifica cada elemento do array, por isso não foi preciso declarar ele em temp
console.log(checaTemp);

//BUSCANDO ELEMENTOS DE ACORDO COM A CONDIÇÃO DA FUNÇÃO EM ARRAY

var osNum = [-12, 19, 52, -78];

var checaOsNum =  osNum.filter(checa => checa >= 0)
//Função escrita em Arrow
//every verifica cada elemento do array, por isso não foi preciso declarar ele em temp
console.log(checaOsNum);
