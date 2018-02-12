//slice
let buah = ['Banana', 'Orange','Lemon','Apple', 'Mango' ]
let buah2= buah.slice(1);
console.log(buah2)

let buah4 = buah.slice(1,4)
console.log(buah4)

//Adding Array Elements
let buah1 =['Jeruk', 'Nanas', 'Apel'];
buah1.push('Duku');
console.log(buah)

buah1[buah1.length]= 'Pisang',
console.log(buah1)

buah1 [6] = 'Mangga';
console.log(buah1)

//Merging(concatenating) 2 Arrays
let nama1 = ['Andi', 'Budi'];
let nama2 = ['Caca','Dede','Euis'];
let nama3 = nama1.concat(nama2);
let nama4 = nama2.concat(nama1);

console.log(nama3)
console.log(nama4)

//Merging(Concatenating) 3 Arrays
let nama5 = ['Andi', 'Budi'];
let nama6 = ['Caca', 'Dede', 'Euis'];
let nama7 = ['Faza', 'Gilang'];
let x = nama5.concat(nama6, nama7);
console.log(nama5)
console.log(nama6)
console.log(nama7)
console.log(x)
console.log(x[5])