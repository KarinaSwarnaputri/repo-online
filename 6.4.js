//shift & unshift

let buah = ['Jeruk', 'Nanas','Apel'];
buah.shift();
console.log(buah)

buah.unshift('Lemon');
console.log(buah)

//delete & splice
let buah1 = ['Jeruk', 'Nanas', 'Apel'];
buah1.splice(2,0, 'Lemon', 'Kiwi'); //buah.splice(index yg mau disisipin, index yg mau d buang, apa yang mau disisipin)
console.log(buah1)

buah1.splice(2,1, 'Lemon', 'Kiwi');
console.log(buah1)

buah1.splice(0,1);
console.log(buah1)

delete buah1[0];
console.log(buah1)

