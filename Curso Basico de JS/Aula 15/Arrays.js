let num = [5, 4, 6, 8, 7]

num.push(9)                                             //aumenta o elemento (9) no vector        
console.log(`Nosso elemento é: ${num}`)                 //mostra os elementos
console.log(`o vector tem ${num.length} elementos`)     //diz quantos elementos tem no vector
console.log(`a organizaçao é ${num.sort()}`)            //organiza os vectores de forma crescente
console.log(num[1])                                     //mostra oq esta no elemento 1
console.log(num[5])                                     //mostra oq esta no elemento 5

let pos =num.indexOf(10)
if(pos == -1){
    console.log(`[ERRO] posiçao nao encontrada`)
}else{
    console.log(`O elemento 9 esta na posiçao ${pos} `)     //mostra a posiçao do elemento 7
}
