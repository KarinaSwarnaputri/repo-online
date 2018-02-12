//inheritance w/o argument

function pizza(){
    this.diameter = 30;
}
function pizzaKeju(){
    pizza.call(this)
    this.topping = 'Keju';
    this.harga = '50k'
}
var satu = new pizzaKeju();
console.log(satu)

function pizza1(){
    this.diameter = 30;
}
function pizKeju(){
    pizza.call(this)
    this.topping = 'Keju';
    this.harga = '50k'
}

function pizJamur(){
    pizza.call(this)
    this.topping = 'Jamur';
    this.harga = '65';
}
var satu1 = new pizKeju();
var dua2 = new pizJamur();
console.log(satu1)
console.log(dua2)