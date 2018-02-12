function orang (awal, akhir, usia){
    this.nama = [awal, akhir];
    this.usia = usia;
}
var Andi = new orang
('Andi', 'Susilo',20);

console.log(Andi)
console.log(Andi.nama[0])
console.log(Andi.nama[1])

function x (awal, akhir, usia){
    this.nama = {awal, akhir};
    this.usia = usia;
}
var Ali= new x
('Ali', 'Susilo',20);

console.log(Ali)
console.log(Ali.nama.awal)
console.log(Ali.nama.akhir)

var Budi = {
    nama:'Budi',
    usia: 50,
    job: {
        nama:'PNS',
        tingkat:'ES5',
        lokasi:'Bali'
    }
};
console.log(Budi.job.nama)
console.log(Budi.job.lokasi)