
const ul = document.querySelector('ul')

// ul.remove()




 const lista = document.querySelectorAll('li') 

 lista.forEach(li =>{
    li.addEventListener('click', event => {    // função de call back 
        const elementoClicado = event.target  ;    //event.target referencia do elemento em que o evento ocorreu
        elementoClicado.remove()
    })
 })

 const botaoCriar = document.querySelector('#botao')
 botaoCriar.addEventListener('click', () =>{   //função de callback sem parametro pois nao precisamos saber o que aconteceu 
    const li = document.createElement('li');
    li.textContent = 'novo item'
    ul.prepend(li)
})