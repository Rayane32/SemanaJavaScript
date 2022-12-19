
var valor = Number(prompt('Escreva o valor doado:'))
console.log(valor);

if (valor < 20) {
    document.getElementById('result').innerHTML = 'Negado'
} 
else{
    document.getElementById('result').innerHTML = 'Aprovado'
}