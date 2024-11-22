const amiga ={nome :'Laura',
     sexo :'F',
     peso :60.5,
     engordar(p=0){            // Funçao dentro de uma variavel
        console.log('Engordou')
        this.peso += p          // o this é uma referencia em objectos.

     }
}
amiga.engordar(2)           // aumentar mais 2 kg

console.log(`${amiga.nome} pesa ${amiga.peso} kg`) 