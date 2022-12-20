
function outcome () {

    var num1 = parseInt(document.getElementById('num-one').value);
    var num2 = parseInt(document.getElementById('num-two').value);
    var total = 0;
     
    if( document.getElementById('box1').checked) 
            total = num1 + num2;
    else if( document.getElementById('box2').checked) 
        total = num1 - num2;
    else if( document.getElementById('box3').checked) 
        total = num1 * num2;
    else
        total = num1 / num2;
document.getElementById('resultArea').innerHTML = 'Resultado: ' + String(total);
}
          