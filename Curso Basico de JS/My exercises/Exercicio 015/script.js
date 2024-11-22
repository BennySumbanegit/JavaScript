function verificar () {
      var data = new Date()
      var ano = data.getFullYear()
      var fano = window.document.getElementById('txtano')
      var res = window.document.querySelector('div#res')

      if (fano.value.length == 0 || Number(fano.value) > ano) {
       window.alert('[ERRO] verifique os dadoos e tente novamente!')

      } else {
       var fsex= window.document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ``

       var img = document.createElement('img')
       img.setAttribute('id' , 'foto')
       
       if (fsex[0] . checked) {
              gênero = 'Homen'

              if (idade >=0 && idade <10) {
                     //criança
                     img.setAttribute('src', 'criança-homen.png')

              } else if ( idade < 21) {
                     //jovem
                     img.setAttribute('src', 'jovem-homen.png')

              } else if (idade < 50) {
                     //Adulto
                     img.setAttribute('src', 'adulto.png')

              }else{
                     //idoso
                     img.setAttribute('src', 'idoso.png')
              }
              
       } else if (fsex [1] . checked) {
              gênero = 'Mulher'

              if (idade >=0 && idade <10) {
                     //criança
                     img.setAttribute('src', 'criança-menina.png')

              } else if ( idade < 21) {
                     //jovem
                     img.setAttribute('src', 'jovem-mulher.png')

              } else if (idade < 50) {
                     //Adulta
                     img.setAttribute('src', 'adulta.png')

              }else{
                     //idosa
                     img.setAttribute('src', 'idosa.png')
              }
       }
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)                                             // permisao para aparecer a imagen

      }
      
}