xlet nama = new Set();

nama.add('Adi').add('Budi').add('Adi'); // nama Adi ada 2 cmn bt test doang, soalnya in the end cmn satu yg bkal muncul
console.log(nama);
console.log(nama.size);

nama.delete('Adi');
console.log(nama);
console.log(nama.size);

nama.clear();
console.log(nama);
console.log(nama.size);

//Array to Set
let id = ['Ali', 'Bona', 'Ali'];
let nama1 = new Set(id);

console.log(nama1);
console.log(nama1.size);
console.log(id.length); //biar tau ad brp element

//Array to Set then Set to Array

let angka = [1,2,3,4,5,6];
let nomor = new Set(angka);

console.log(nomor);

let arrayAngka= [...nomor]
console.log(arrayAngka);

//Destructuring Array
let buah = [
    'Apel',
    'Duku',
    'Leci',
]
var [x,y,z]= buah;

console.log(x);
console.log(y);
console.log(z);

//Destructuring Object
let andi = {
    nama2:'Andi',
    usia: 24,
    job: 'PNS'
}
var{nama2, usia, job}= andi; //yg ini boleh d acak ga mesti urut
console.log(nama2);
console.log(usia);
console.log(job);


