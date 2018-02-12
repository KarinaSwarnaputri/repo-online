//constant

const pi = 3.14;
function luasLingkaran(r){
    const pi = 10;
    console.log('Luas ='+pi*r*r);
}

console.log(pi);
luasLingkaran(5);

//template String - use tick (`) kalo pake tick kluarnya bakal sama smua di console log
let halo =`Halo 
        Dunia!`

console.log(halo);

//string methods (repeat & includes)

let x = 'halo';
console.log(x.repeat(5));
console.log(x.includes('ha'));

//string methods (startsWith & endsWith)
let y = 'halo';

console.log(y.startsWith('ha'));
console.log(y.startsWith('lo'));
console.log(y.startsWith('lo',2)); //index nomor 2 dimulai dgn lo, l jg bs

console.log(y.endsWith('lo'));
console.log(y.endsWith('ha'));
console.log(y.endsWith('ha',y.length-2)); // apakah string x d akhiri dgn ha pd 2 karakter dr blkg

//spread operator
let buah = ['apel','duku','pir'];
console.log(buah)
console.log(...buah);

let no1 = [1,2,3];
let no2 = [no1, 4, 5, 6];
let no3 = [...no1, 7, 8, 9]; // menggabungkan array
console.log(no2);
console.log(no3);

let a = ['apel','duku','pir'];
var b = [...a,'nanas',...a] // mempermudah penggabungan
console.log(b)

let angka = [1,2,3];
function jumlah(x,y,z){
    console.log(x+y+z);}
jumlah (angka);
jumlah (...angka);
