
const ul = document.querySelector('ul')


/// event bubling event delegation


 const botaoCriar = document.querySelector('#botao')
 botaoCriar.addEventListener('click', () =>{   //função de callback sem parametro pois nao precisamos saber o que aconteceu 
    const li = document.createElement('li');
    li.textContent = 'novo item'
    ul.prepend(li)
})


ul.addEventListener('click',event=>{
    const target = event.target
    if(target.tagName === "LI"){
        target.remove()
    }
    
})