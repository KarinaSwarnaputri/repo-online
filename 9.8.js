//creating prototype

function Orang(nama, lahir, job){
    this.nama = nama;
    this.lahir = lahir;
    this.job = job;
}
Orang.prototype.marga= 'Hasibuan';
Orang.prototype.usia= function(){
    return 2017 - this.lahir;
}

var budi = new Orang('Budi', 1992,'PNS');
console.log(budi.marga);
console.log(budi.usia())