//Entendendo as Funções
 
//Declaração de Função
 function filme(){
    console.log('Caroline');
 }

 filme()

// Função Expressa
//--> usa uma variável

var carro = function nomeCarro (){
    console.log('Tesla');
}

carro()
//chamdo a variável que chama a função.

//TESTANDO ARGUMENTOS

function valores ( a, b){
    return a + b
}
 console.log(valores( 13, 23))
 //assim para funcionar

 function valor (a, b, c) {
    var contagem = 0
    for(var qnt of arguments);
    //vai pegar os valores do argumento
    contagem += qnt
    return contagem
 }
 console.log(valor(70, 90, 34)) 
 //não está funcionando. era para somar!

 //CRIANDO FUNÇÃO DE FINANCIAMENTO COM DEFAULT

 function financia ( investido, porcentaAnual = 1.2, ano = 8){
    return (investido * porcentaAnual /100 * ano) + investido
}
 console.log(financia ( 20000 ))
 //default é o que já foi definido dentro da função
