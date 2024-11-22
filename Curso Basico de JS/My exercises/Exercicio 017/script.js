let num = document.getElementById('txtn')
let adic = document.getElementById('selnum')
let res = document.getElementById('res')
let valores = []                                                //vector

function nalista(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function outlista(n,l){                                            // n= numero
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){

    if( nalista (num.value) && !outlista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement(`option`)
        item.text =`valor ${num.value} adicionado`
        adic.appendChild(item)
        res.innerHTML = ``                          // As `` significam que esta vazio
        
    }else{
        window.alert('valor invalido ou ja na lista')
    }
    num.value =``
    num.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert(`adicione valores antes de finalizar`)
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot                                                  //para calcular a media

        res.innerHTML = ''                                                       // as `` significam que estao vazias
        res.innerHTML += `<p> Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p> o maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p> o menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p> a soma dos valores é de ${soma} .</p>`
        res.innerHTML += `<p> A media dos valores digitados é ${media}❤</p>`
    }
}