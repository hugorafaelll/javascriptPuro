// escutar eventos no formulario 

//prevent defalt evitar que a pagina fique recarregando toda vez q for enviado formulario 


const form = document.querySelector('.classe do formulario')

form.addEventListener('submit', event =>{
    event.preventDefault() //evitar que a pagina fique atualizando
    console.log(event.target.username.value) // como conseguir o valor do usuario
})

//regex - padrao de texto esperado pelo sistema 
//site regex101.com 

//colocar em ecmascript - javascript

// regular expressao de regex 

//    /^[a-zA-Z0-9]{6,10}$/   aceita qualquer letra minuscula maiuscula de 6 a 10 letras para dar match 

//    /^.{6-10}$  o ponto representa qualquer letra ou numero ou caractere especial