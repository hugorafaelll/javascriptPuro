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