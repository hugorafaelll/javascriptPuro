// construtores sao objetos que criam novos objetos
// NEW - novo objeto daquele tipo seja criado  

// spredOperator ... 

exemplo :

      const user ={
        name: 'roger',
        email:'hugorafael2@gmail.com',
        loguin: () => "logou"
        logout: () => 'deslogou'
      }

      const user2 = {
        ... user, 
        name: 'hugo',
        email: 'teste@gmail.com'
      }

    //   exemplo de construtor :

    //   const user3 = new user('carlos','carlos@gmail.com') 

    //   construtor ou clase sempre com a primeira letra maiuscula 

    //   objeto criado dentro da classe 
    //   usando parametros para referenciar as informações 

    //   exemplo :

      class user { 
        constructor (name,email){
          this.name 
          this.email
        } // metodos sao criados fora do constructor porem dentro da classe 
        loguin () { 
            return `${this.name} deslogou da aplicação`
        }
      }


 // adicionar mais propriedades para uma classe  coloque extend na frente da classe 

 class mamifero {
    constructor (specie, name, age){
        this.specie = species 
        this.name = name
        this.age = age
        this.mammaryGland = true
    }
 }

    
 class lion extends Mamifero {   // adiciona mais propriedades no constructor mamifero 
     constructor (species, name, age, manEarter){
        super(species, name, age)  // este super precisa ser invocado para criar outros atributos para so assim no final criar a classe manEater
        this.manEarter = manEarter
    
     }
 }


 // this precisa ser usado em um objeto constructor para conseguirmos referenciar os parametros (nome, idade, score etc)
 // Classe construtora com letras maiusculas para diferenciar functions declaration  de functions constructor


//  prototype onde ficao as espeficiaçoes de um objeto/ array 

// evitar criar objetos  com funçoes colocar as funçoes no prototype e chamalas no objeto 