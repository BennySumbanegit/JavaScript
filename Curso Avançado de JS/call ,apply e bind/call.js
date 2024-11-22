// Metodos call ,apply e bind

const obj1 = { exemplo: `exemplo1` , mostraThis: function logar() {
    console.log(this)
}}

obj1.mostraThis()                // chamada da const obj1

const obj2 = {exemplo : `exemplo2`}

obj1.mostraThis.call(obj2)