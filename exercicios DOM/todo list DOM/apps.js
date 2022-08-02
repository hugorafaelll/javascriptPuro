const botao = document.querySelector('#botao')

const callBack = () =>{
    console.log('clicou no submit')
}

botao.addEventListener('click', callBack) 

 const lista = document.querySelectorAll('li') 

 lista.forEach(li =>{
    li.addEventListener('click', event => {    // função de call back 
        const elementoClicado = event.target  ;    //event.target referencia do elemento em que o evento ocorreu
        elementoClicado.style.textDecoration = 'line-through'
    })
 })