//objetos 

//propriedades  - caracteristicas
//methodos - funçoes 

// objetos literais = objetos individuais 

// {} OBJETO
// []ARRAY 


let tempUser ={
    nome:'joao',
    idade:'32',
    nacionalidade:'brasileiro',
    pecados: ['gula','avareza','mentira'],
    loguin: function(){
        console.log('usuario logado')   // metodo
    },
    logout:function (){
        console.log('o usuario saiu')
    },
}

console.log(tempUser)

tempUser.loguin()   //metodo == função como propriedade de um objeto 
tempUser.logout()

//escopo de bloco area onde esta variavel e valida
//escopo global qualquer lugar 
// var ignora o escopo de bloco 


  // this serve para referenciar o que esta sendo dito 
  // this carro this moto this obj this array    ---> objeto de contexto 

  // function declaration para usar this e nao arow function 

  //objeto Math - matematica 

  //Math.round - arredonda 
  //Math.floor - sempre arredonda para baixo 
  //Math.ceil - arredonda para cima 
  //math.trunc - remove o decimal 


  //numer aleatorio decimal 

  const randomNumber = Math.random();
  console.log(randomNumber)