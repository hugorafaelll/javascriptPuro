// escopo visibilidade de uma vaiavel 

function getMessage () {
 let message ='oi !'     // declarada dentro do scopo 

 message // 'oi!
}

message // not defined

// var existe fora do escopo 
  


// .innertext receber so o texto dentro do que foi selecionado   
// .textcontent recebe todo o texto visivel e invisivel que o item tem 
// .innerHtml modifica o conteudo HTMl do item selecionado 
//.getttribute('href')  pega o atributo
// setattribute ( 'href', novo conteudo)  muda o conteudo sobreescreve atributos html


// title.style.color - STYLE adiciona mais propriedades css no item

// importante 
//getAtribute ('class') pega o valor da classe 
//.setAtribut ('class', 'nova clasese para o item')

// title.classList.toggle('teste')   significa se tiver remove se nao tiver adiciona ]]]]]]

paragrafo.classList.add('adiciona uma classe ao item selecionado')
paragrafo.classList.remove('remove a classe q voce gostaria ')


paragrafo.setAttribute('style','color:green;')  // cria um style e da o nome para ele cria o atributo e a "função dele"

const paragrafo = document.querySelector('p')  // vai selecionar o primeiro paragrafo

 paragrafo.innerText = 'novo texto no item selecionado'  // alterando o texto no paragrafo <p>   


 // nao e possivel selecionar um array em um documento html 
 // mas e possivel transformar em array e passar o foreach no array 

 // array from 

 console.log(array.from('item.children')) // selecionando assim todos os filhos do item selecionado  

 //queryselector   OK 
//document.querySelectorAll   ok
//  eventos de click   ok
//document.createElement('li')  on
// ul.append(li)   cria um item no final da lista do UL
// ul.prepend(li) cria um item no inicio da lista do UL 
//event.stopPropagation evitar que o evento se propague para o elemento pai  nao e uma boa pratica 

//

