const toyota = {carro1: `auris` , caracteristicas : function detalhe (peneu, luz ,espelho){

    console.log(this)
}}

toyota.caracteristicas()           //chamada da funçao obj1 

const mercedes = {carro2: `actros`}

toyota.caracteristicas.apply(mercedes , [1,2,3])   // 1,2,3 sao parametros