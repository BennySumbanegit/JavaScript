function Contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if( ini.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        window.alert('[ERRO] impossivel contar!')
    } else {
        res.innerHTML = 'Contando: </br>'  // </br> informaçao abaixo da palavra contando
        var i =Number(ini.value)
        var f =Number(fim.value)
        var p =Number(passo.value)
        
        // Contagem crescente
        if(p <= 0){
            window.alert('Passo invalido! considerando passo 1')
            p = 1
        }
        if( i < f ) {
              for( var c = i ; c <= f ; c += p){         // c = contador
                res.innerHTML += `${c}\u{1F603}`        // codigo de emoje
        }
       
        //Contagem regressiva
    }else{
        for (var c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F603}`
        }
    }
    res.innerHTML += `\u{1F3C1}`
        } 

      
}