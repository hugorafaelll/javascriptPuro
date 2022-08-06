// escutar eventos no formulario 

//prevent defalt evitar que a pagina fique recarregando toda vez q for enviado formulario 


// const form = document.querySelector('.classe do formulario')

// form.addEventListener('submit', event =>{
//     event.preventDefault() //evitar que a pagina fique atualizando
//     console.log(event.target.username.value) // como conseguir o valor do usuario
// })

//regex - padrao de texto esperado pelo sistema 
//site regex101.com 

//colocar em ecmascript - javascript

// regular expressao de regex 

//    /^[a-zA-Z0-9]{6,10}$/   aceita qualquer letra minuscula maiuscula de 6 a 10 letras para dar match 

//    /^.{6-10}$  o ponto representa qualquer letra ou numero ou caractere especial


const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

form.addEventListener('submit', event =>{
    event.preventDefault()

    const username = event.target.username.value // cosneguir o valor do usuario
    const usernameRegex = /^[a-zA-Z0-9]{6,10}$/
    const isValidFild = usernameRegex.test(username) //verifica se atende as especificações


    if(isValidFild){
        feedback.textContent = 'o usuario foi validado'
        return
    } feedback.textContent ='os dados estao errados '
})

  //validação de formulario em tempo real 

    //keyupevent   evento depois de clicar em alguma tecla 


    form.username.addEventListener('keyup', event => {
    
    })