const form = document.getElementById('Depositos')
function validaValores(valorA , valorB){
    return valorA < valorB
}

form.addEventListener('submit',function(e){
    e.preventDefault()


    const valorDoA = document.getElementById("valor_a")
    const valorDoB = document.getElementById("valor_b")

    const msgSucesso = `O Segundo valor ${valorDoB.value}, e maior que o primeiro ${valorDoA.value}!`
    const msgErro = 'O segundo valor precisa ser maior que o primeiro.'
    
    if (!validaValores(valorDoA.value , valorDoB.value)){
        const conteinerMsgErro = document.querySelector('.msg_sucesso')
        conteinerMsgErro.style.display = "block"
        conteinerMsgErro.style.background = '#990702'
        conteinerMsgErro.innerHTML = msgErro
    } else {
        const conteinerMsgSucesso = document.querySelector('.msg_sucesso')
        conteinerMsgSucesso.innerHTML = msgSucesso
        conteinerMsgSucesso.style.display = 'block'
        valorDoA.value = ' '
        valorDoB.value = ' '
    }
} )