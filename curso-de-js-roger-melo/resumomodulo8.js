///formas de iterar sobre array   


// loops 
// while e for 

// methodos :
//forEach , find e some 
// methodos que executam uma função de call back para cada item do array 




// 3 METHODOS DE ARRAYS MAIS  IMPORTANTES 

// MAP

//methodod de array para gerar um novo array com cada item transformado 

const number = [1,2,3] // percorre cada item do array e executa uma transformação e gera um novo array com o item transformado 

//number.map((item,index,array))   // esta função pode receber 3 parametros item index array  

// dos 3 parametros so um e obrigatorio o ITEM 
counter = 0
const dobleNumber = number.map(item => item*23)

console.log(dobleNumber)

// exemplo : MODIFICAR UM ARRAY CASO OS PRODUTOS FOREM MAIS CAROS QUE 30

const products =[
    {naome:'cachorro magro', price:30},
    {name:'cavalo manco', price:28},
    {name:'lanche de cachorro gordo', price :16},
    {name:'casa da praia', price:175}
]

const vendaProdutos = products.map(produto =>{
    if(produto.price >=30){
        return{name:produto.name,price:produto.price /2}
    }
     return produto
})

console.log(vendaProdutos)
console.log(products)


// FILTER 
// diferente do map ele gera um novo array APENAS aguns itens do array original 
// quais itens atendem a especificação da função
// sempre retornando um bolean 

const randomNumbers = [ 36,55,47,52,62,22,18,32]

const maiorque37 = randomNumbers.filter(item =>item>22)

console.log(maiorque37)


//REDUCE 
//BASEADO NO ARRAY ORIGINAL EXECUTA UMA FUNÇÃO PARA CADA ARGUMENTO REDUZUZINDO ELE EM ALGUM TIPO DE DADO OU NOVO ARRAY 
// GERA OUTPUT Q PODE NAO SER UM ARRAY  EX: OBJETO LITERAL STRING NUMERO OU ATE UM NOVO ARRAY 
// REDUZIR ESTE ARRAY A UM UNICO VALOR POR EXEMPLO 
// SEMPRE RETORNA UM VALOR E CADA VEZ Q ELE E RETORNADO O ACUMULATOR SOMA 

const lista = [5,3,4,7,8,5,6,2,3]

const sumResults = lista.reduce((acumulator,item)=> acumulator+item, 0 ) // zero parametro inicial 
console.log(sumResults)

const resultadoTaxas = [
    {nome:'hugo', taxa:7},
    {nome:'luis', taxa:11},
    {nome:'hugo', taxa:3},
    {nome:'hugo', taxa:7},
    {nome:'lucas', taxa:5},
    {nome:'hugo', taxa:7},
    {nome:'hugo', taxa:4},
    {nome:'pedro', taxa:3},
    {nome:'hugo', taxa:7},
    {nome:'hugo', taxa:9}
]

const nomeMotoboy = 'hugo'

const taxasHugo = resultadoTaxas.reduce((accumulator ,resultadoTaxas) =>{
    if(resultadoTaxas.nome === nomeMotoboy){
        accumulator+=resultadoTaxas.taxa
    }
    return accumulator
},0)

    console.log(taxasHugo)

    // resumo :
    // reduce se passar pela condição ele  transforma um array em um resultado pode ser string bolean numero

    //methodo sort 
    //ordenar os itens de um array 
    // modifica o array original  


    const ponto = [10,5,3,2,55,44,25,22,2,1,33,47]

ponto.sort((score1,score2) => score2-score1) // ordenando do maior para o menor

console.log(ponto)

// exemplo 02 

const gameResult = [
    {nome:'luis',pontuação:23},
    {nome:'lucas',pontuação:27},
    {nome:'joao',pontuação:33},
    {nome:'andre',pontuação:120},
    {nome:'pedro',pontuação:57},
    {nome:'paulo',pontuação:51},
    {nome:'felipe',pontuação:50},
    {nome:'jose',pontuação:83},
    {nome:'joel',pontuação:0},
    {nome:'jonas',pontuação:157},
]

gameResult.sort((item1, item2) => item1.pontuação-item2.pontuação)
console.log(gameResult)


debugger

// ENCADEAMENTO DE METODOS DE ARRAY 

const bestResults = gameResult
.filter(pontos => pontos.pontuação >50)
.map(pontos => `a pontuação do jogador${pontos.nome} e de ${pontos.pontuação} pontos`)


console.log(bestResults)