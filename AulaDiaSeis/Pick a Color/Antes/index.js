const cores = ['green', 'yellow', 'purple', 'blue', 'red']
const btn = document.getElementById('btn')

btn.addEventListener( 'click', function(){
    document.body.style.background = cores[3]
    var coresAleatorias = getRandomColor();
    console.log(coresAleatorias)
})

function coresAleatorias (){
    return Math.random() 
}

//código pessal incompleto, pois não soube entender explicação