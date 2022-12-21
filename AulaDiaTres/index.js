//criando o Objeto

function modeloLivro  ( title, author, pages) {
    const livro = {
        corLivro: title,
        autorLivro: author,
        paginasLivro: pages,
        //escrita da função dessa forma dentro do objeto
        livroImpresso: function () {
            console.log('Imprimindo...')
        }
    }
     return livro;
}

const livro1 = modeloLivro( 'Lenda Urbana', 'Layane', 100);
console.log(livro1);

//---------------------------------------OUTRA FACTORY--------------------------
function bonecas( pele, cabelo, pulseiras ) {
    const modeloBonecas = {
        corBoneca: pele,
        corCabelo:  cabelo,
        qntdPulseira: pulseiras,
    } 
    return modeloBonecas;
}

const boneca1 = bonecas ( 'morena', 'azul', 5);
console.log(boneca1);
//propriedades, adicionando algo que não está no objeto
boneca1.corOlhos = 'Verde';

//------------------------------------------------------------------------------
//ENTENDENDO O CONSTRUCTOR
class Bonecaas {
    constructor(pele, cabelo, pulseiras) {

        this.corBoneca = pele;
        this.corCabelo = cabelo;
        this.qntdPulseira = pulseiras;
    }
}

const boneca2 = new Bonecaas ( 'verde', 'rosa', 9);
console.log(boneca2);
//tem que usar o new!!!



//----------------------------------------------------------------------------------
//const livro = {
    //corLivro: 'Branco',
    //paginasLivro: 300,
    //capitulosLivro: {
        //capituloUm: 'A vida',
        //capituloDois: 'A criança',
    //},

    //escrita da função dessa forma dentro do objeto
    //livroImpresso: function () {
        //console.log('Imprimindo...')
    //}
//}

//livro.livroImpresso()
//chama a função dentro do livro

//for (let a in livro)
//console.log(a, livro[a])


//--------------------------------------------------------------------------------
//fora do objeto a função é escrita assim

//function livroImpresso(){
 //   console.log('Impimindo..')
//}
//livroImpresso() //chama função.

//--------------------------------------------------------------------------------
//CRIANDO UM FACTORY

//passa um parâmetro dentro da função factory (modeloCarro)

//Pesquisar em javascript built in o bjects
var numero = [];
console.log(Math.max(1,9,0,56));

//testando coisas novas

var nomePessoa = 'Letícia';
console.log(
 `Olá, ${nomePessoa} ! 
    bem vinda, querida.`
    //quebra de linha ocorre porque em vez de aspas está usando a acentuação da crase.
    //${} chama variável
);