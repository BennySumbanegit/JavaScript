var agora = new Date()        //new date -ė um comando para pegar horas
var hora = agora.getHours()  //gethours -ė um comando para pegar horas
console.log(`Agora sao exatamente ${hora} horas.`)


if(hora < 12) {
    console.log('Bom dia , a manha esta linda para amar.')
}else if(hora <= 18) {
    console.log('Boa tarde , a tarde esta optima para passear.')
}else {
    console.log('Boa moite,hoje a noite esta optima para curtir.')
}