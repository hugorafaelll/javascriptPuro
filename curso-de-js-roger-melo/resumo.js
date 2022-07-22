// template string ou templates literals 
  
// inserir funçoes dentro de strings utilizando acento ``

// template strings serve para salvar documentos no html utilizando o js e inserindo funçoes dentro de um array 





const cachorroMagro = "Joao"
const autor = "pedro"
const itens = "setenta"



const postMessage = `o post ${cachorroMagro}, do autor ${autor}, tem varios livros ${itens} a serem lidos`

console.log(postMessage)

// indexOf primeira ocorrencia do indice 
// lestIndexoFF  o ultimo caractere 
// length-1 o ultimo valor 


// replace subistitui uma parte da stringo por outra coisa 



// array lista de valores []
// sobreescrever [2 , 'cavalo']  sobreescreve o valor do indice selecionado exemplo
// brazilianFoods[1] = "pao de queijo "


// array propriedades e metodos 

// methodo .join() concatena todos os itens do array com um separados .join(|)
// methodo .concat concatena mais valores  ao array original sem modificaro valor dele
// methodo .push() adicionamais itens dentro do array
// methodo .pop() remover o item do array original 


// `` template string interpolação de valores transformando string em função ou constante

//templatestring para acessar o primeiro caractere d string const inicials = `${dogNames[0][0]}`

// .slice(0,3)  pega os caracteres d uma string 
//replace (n , V ) substitui uma letra por outra na string 


// .includes (@) verifica se tem o item pesquisado em algum lugar retornando bolean  usado em arrays e string 

//  !== nao e igual 



//controle de fluxo

// foor loop ITERAÇÂO 

// for loop   executar um pedaço de codigo repetidas vezes 
//  for (repetição) {bloco do que deve ser executado naquele loop}

// loop infinito no while pois ele nao tem incremento incialmente 
// precisa ser adicionado inicalmente para nao entrar em loop infinito i++

// while (condição) {bloco de codigo }

const names = ['hugo' , 'joao', 'samara']
let i =0

while(i<=5){
    console.log(i)
    i++
}

for (let i = 0; i < 6; i++) {
    console.log(i);
    
}

while (i<11){
    console.log(`esta e a ${[i]} vez que esta frase é exibida`)
     i++
}


const arrays = [
    [4,32,8],
    [64,8,32],
    [8, 32 ,16],
    [2,8,4]
]

let arraysSum = 0 ;



for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays.length; j++) {
        arraysSum = arraysSum + arrays[i][j] 
    }
}
console.log(arraysSum)


//oque foi feito : dentro de cada array I incremente um intem J ate houver i 


