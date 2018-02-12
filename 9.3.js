// javascript object using object builder

var orang = function(nama, usia, job){
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
}
var Andi = new orang ('Andi', 30, 'PNS');
console.log(Andi.umur)

function orang(nama, usia, job){
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
}
var Budi = new orang('Budi', 30, 'PNS')
console.log(Budi.umur)

//using class

class x{
    constructor(nama, usia, job){
        this.namaDpn = nama;
        this.umur = usia;
        this.pekerjaan = job;
    }
}
var Didi = new x('Didi', 30,'PNS')
console.log(Didi.umur)