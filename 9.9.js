function orang(nama, usia, job){
    this.namaDpn= nama;
    this.usia= usia;
    this.pekerjaan= job;
}
function atlit(nama, usia, job, cab, pres){
    orang.call(this, nama, usia, job)
    this.cabor = cab;
    this.prestasi = pres;
}
var Andi = new atlit('Andi',20,'PNS','Kuda','0');
console.log(Andi)