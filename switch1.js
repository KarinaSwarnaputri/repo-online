// switch 3 variabel
var alaskaki  ='sepatu';
let warna ='merah';
let harga ='mahal';

switch(true){
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'murah'):
          console.log('saya suka sepatu merah yang murah.');
          break;
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'mahal'):
          console.log('saya suka sepatu merah yang mahal.');
          break;
    case (alaskaki == 'sepatu' && warna == 'biru' && harga == 'murah'):
          console.log('saya suka sepatu biru yang murah.');
          break;
    case (alaskaki == 'sepatu' && warna == 'biru' && harga == 'mahal'):
          console.log('saya suka sepatu biru yang mahal.');
          break;
    case (alaskaki == 'sandal' && warna == 'merah' && harga == 'murah'):
          console.log('saya suka sandal merah yang murah.');
          break;
    case (alaskaki == 'sandal' && warna == 'merah' && harga == 'mahal'):
          console.log('saya suka sandal merah yang murah.');
          break;
    case (alaskaki == 'sandal' && warna == 'biru' && harga == 'murah'):
          console.log('saya suka sandal biru yang murah.');
          break;
    case (alaskaki == 'sandal' && warna == 'biru' && harga == 'mahal'):
          console.log('saya suka sandal biru yang mahal.');
          break;
    default:
          console.log('Tak suka alas kaki merah/biru mau mahal/murah');
}
angka =3;
var hsb = angka%2;
console.log(hsb);