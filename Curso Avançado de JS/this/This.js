 //ex:      this em javascript


const o = {
    prop : 100 ,
    f: function(){
        return this.prop;
    }
}
console.log(o.f())


//ex:       this com as arrow functions

const tpc = {
    exemplo1:'exemplo1',
    mostraThis: function(){
        const f = (() => this)()
        console.log(f)
    }
}