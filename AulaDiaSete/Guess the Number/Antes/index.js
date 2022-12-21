var numeroCompt
var numUsuario = []
var tentativas = 0
var maxtenta = 10
const cores = ['Blue', 'Red']

function novoJogo(){
    window.location.reload()
}

function inicial() {
   numeroCompt = Math.floor(Math.random() * 100 + 1) 
    // Expressão  Math.random() * 100 + 1 é para gerar um número aleatório, essa multiplicação por 100 é para ter um random de 1 a 100 e tem o + 1 pois vai ficar até 101, porque só com 100 iria de 1 a 99.
    // Math.floor serve para retirar a forma de fração que o math.random
    console.log(numeroCompt)
}
 
function retornaNum() {
    const numusuario =  Number(document.getElementById('inputBox').value);
    numUsuario.push( ' ' + numusuario);//esse código armazena todos os números digitados dentro do array
    //numUsuario = numusuario; //só armazena um número
    document.getElementById('guesses').innerHTML = numUsuario;
    console.log(numUsuario)

    if (tentativas < maxtenta ){
        if(numusuario > numeroCompt) {
            document.getElementById('textOutput').innerHTML = 'Número muito acima'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
        }
        else if( numusuario < numeroCompt){
            document.getElementById('textOutput').innerHTML = 'Número muito abaixo'
            document.getElementById('inputBox').value = ''
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
        }
        else {
            document.getElementById('textOutput').innerHTML = 'Parabéns! Você acertou o número!'
            document.getElementById('textOutput').style.color = cores[0]
            
            tentativas++
            document.getElementById('attempts').innerHTML = tentativas
            document.getElementById('inputBox').setAttribute('Readonly','Readonly')
        }
        //if e elses para comparar os números acima ou abaixo    
    } 
    else {
        document.getElementById('textOutput').innerHTML = 'Você perdeu o Jogo! o número era: ' + numeroCompt;
        document.getElementById('textOutput').style.color = cores[1]
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        //tentativas = 0;
        //window.location.reload()
    }
   
}




