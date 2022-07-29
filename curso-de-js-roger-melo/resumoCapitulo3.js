//hoisting puchar declaração pro topo do arquivo


//declarar sempre as funções no topo do codigo 


//function declaration
function sayHi () {
    console.log("ola")
}

//function expression nao sao issadas "hoisting"
const showFood = function () {
    console.log("pizza")
}


//parametro e argumento defalt parameters 

const myfunc = function (name , lastName) {  //parametro    ordem dos argumentos deve seguir ordem dos parametros 
    console.log(`Oi, ${name} ${lastName} !`)
}

myfunc('Roger','melo') // argumentos 


// retorno de valores 

const double = function(number){  // parametro number
    const dobleResult = number*2     // doble function escope so funciona ai dentro 
    console.log(dobleResult)
}

double(3) // argumento do parametro 


// return consegue ultilizar valores armazenados dentros de scoop 




// função tradicional 

const dobro = function (number){
    return number *2
}

const result = dobro(3)  // recebe o valor que foi armazenado dentro do scoop mas como esta em return este valor pode ser utilizado se for declarado novamente 

console.log(result)


// arow function função de maneira mais resumida 
// arow function nao precisa declarar a palavra function 
 
const mutiply = (numero) => {
    return numero*2 }

    // se a arow function tem apenas um paramentro os parenteses () sao opicionais 

    const resultado = mutiply(23)

    console.log(`o resultado e ${resultado}`)

    // se a arow function  no bloco de codigo so tem uma linha pode-se remover o return e as chaves e manter tudo em uma linha 

    // function e metodo e a mesma coisa depende apenas onde ele e declarado

    //função  =     estaFunção()
    //methodo =    .esteMetodo

    // quando transformamos um argumento em uma função chamamos esta função de callback 
    
    const socialNetworks = ['youtube', 'facebook', 'instagram', 'tiktok', '9gag']

    //forEach e um foor mais otimizado significa para cada 
    // para cada item do array vamos executar uma função de call back
    //pode receber 3 parametro [index,array,item atual iterado
    // pode ser desacoplada 

    const logArrayInfo = (socialNetworks, index , array) => {
        console.log(index, socialNetworks,array)
    }

    socialNetworks.forEach(logArrayInfo); // forEach desacoplado da função