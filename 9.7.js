//Accessing Object Methods

var orang = {
    namaDpn: "Andi",
    namaBlk: "Susilo",
    usia: 50,
    namaFull: function(){
        return this.namaDpn+ " "+ this.namaBlk;} 
};
console.log(orang.namaFull)
console.log(orang.namaFull())

//methods yg ad parameternya

function person(x, y, z){
    this.namaDpn = x,
    this.namaBlk= y,
    this.usia= z,
    this.gantiNama= function(a){
        this.namaBlk = a}
    }
let Andi = new person ("Andi","Susilo",24)
console.log(Andi.namaBlk)

Andi.gantiNama("Darmawan")
console.log(Andi.namaBlk)