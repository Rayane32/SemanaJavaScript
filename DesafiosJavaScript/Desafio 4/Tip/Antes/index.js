function fomataDinheiro(valor){
    valor = Math.ceil(valor * 100) / 100 //arredonda pra cima
    valor = valor.toFixed(2);
    return valor + '$'
}


function formatSplit(value) {
    if (value == 1) return value + ' pessoa'
    return value + ' pessoas'
}

function update(){
    //Aqui foi declara as variáveis que vão pegar informações do HTML
    let bill = Number(document.getElementById('yourBill').value);
    let tipPercent = document.getElementById('tipInput').value;
    let split = document.getElementById('splitInput').value;

    let tipValue = bill * (tipPercent / 100);
    let billtotal = tipValue + bill;
    let billeach =  billtotal / split;
    console.log()

    document.getElementById('tipPercent').innerHTML =  tipPercent + '%'
    document.getElementById('tipValue').innerHTML= fomataDinheiro(tipValue)
    document.getElementById('totalWithTip').innerHTML= fomataDinheiro(billtotal)  
    document.getElementById('splitValue').innerHTML =  formatSplit(split) 
    document.getElementById('billEach').innerHTML =  fomataDinheiro(billeach / split)
}