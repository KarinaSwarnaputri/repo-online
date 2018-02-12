// persegi
function persegi(sisi){
    this.sisi = sisi;
    this.luas = function(){
        return Math.pow(this.sisi,2);
    };
    this.kll = function(){
        return 4*this.sisi;
    };
};
var x = new persegi (8);
console.log('Luas = '+x.luas());
console.log('Keliling = '+x.kll())

//Objects Assign
var jomblo = true
var Andi = {usia:27, job:'Polisi'};
var Budi = Object.assign({},{usia:32, job:'Pilot'});
var Caca = Object.assign({},{Budi, job:'Akuntan'});
var Dedi = Object.assign({},{job:'Guru'}, {jomblo});

console.log(Budi);
console.log(Caca);
console.log(Dedi)