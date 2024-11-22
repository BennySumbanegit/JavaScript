function ligaçao (){
    console.log(this)                              // o console.log vai chamar a const atender
}

const atender = {pessoa: `namorada`}

ligaçao = ligaçao.bind(atender)

ligaçao()               // chamar a const atender