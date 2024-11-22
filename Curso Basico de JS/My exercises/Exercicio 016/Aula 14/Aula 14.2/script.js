function tabuada() {
    var num =document.getElementById('txtn')
    var tab =document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('[ERRO] faltam dados')
    }else{
        var n = Number(num.value)
        var c = 1                   
        tab.innerHTML = ``          //limpar tabuada apor calcular outro numero

        while(c <= 12){
            var item =document.createElement('option')
            item.text =`${n} × ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}