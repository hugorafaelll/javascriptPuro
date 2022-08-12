
const exercicioFakeApi = callback => {
    const request = new XMLHttpRequest() // requisisção para um servidor 


    request.addEventListener('readystatechange', () =>{    // saber o status da solicitação 
        // console.log(request, request.readyState)  // retorna o estado atual da solicitação 
    
            const isRequestOk = request.readyState ===  4 && request.status === 200 
                const isRequestNOTok = request.readyState === 4
    
                    if (isRequestOk){  // so podemos fazer algo quando esta no estagio 4 e status 200 
                        const data = JSON.parse( request.responseText)
                        callback(null, data) // resposta da requisição
                       
                        return 
                    }
                        
                                if (isRequestNOTok){
                                    callback('nao foi possivel obter dados desta API', null)
                                    
                                }
                
    })
    request.open('GET','./todos.json')  // methodo : pegar e onde quer pegar 
    request.send() //deixa em branco 
    console.log(request)


}



//  CALLBACK E UM PARAMETRO DE FUNÇÃO ASSINCRONO QUE PODE SER INVOCADO AGORA E LIDO DEPOIS

exercicioFakeApi((error,data) =>{
    console.log('callback executado')
    
    if (error){
        console.log(error)
        return
    }
    console.log(data)
})