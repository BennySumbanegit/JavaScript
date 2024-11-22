function carregar(){

   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   msg.innerHTML = ` Agora são ${hora} horas.`

   if (hora >= 0  && hora < 12) {
    img.src = 'foto-da-manha.png'          //bom dia

   }else if (hora >= 12 && hora < 18) {
    img.src = 'foto-da-tarde.png'                //boa tarde

   }else {
    img.src = 'foto-da-noite.png'                 //boa noite

   }
}
