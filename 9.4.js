//accessing obj properties
var orang ={
    namaDpn: "Andi",
    usia: 50,
    job: "Politisi"
};

console.log(orang.namaDpn+' usianya '+orang.usia+' tahun.')
console.log(orang["namaDpn"]+ ' seorang '+orang["job"]+'.')

// adding/deleting properties
function orang(nama, usia, job){
    this.namaDpn = nama;
    this.umur = usia;
    this.pekerjaan = job;
}

var Dodo = {
   nama: ['Dodo', 'Susilo'],
   usia: 50,
   job: "Politisi"
};
console.log(Dodo)
console.log(Dodo.nama[0])
console.log(Dodo.nama[1])
