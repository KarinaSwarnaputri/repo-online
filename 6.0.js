// FUNCTION STATEMENT (INTINYA UTK MEMBUNGKUS)
function a(){
    console.log('Halo Dunia');
}
a();


function contoh(){
    var a = 20
    var b = 7
    console.log(a*b);
}
contoh();

let x = 10
let y = 50
function contoh1 (){
    console.log(x+y)
}
contoh1();

//FUNCTION EXPRESSION
var contoh = function (){
    console.log('Halo Dunia!');
}
contoh();
// var namafunc=function(param){pro}

console.log(typeof(contoh));

//FUNCTION W/ A PARAMETER
function namaku(nama){
    console.log(nama+ ' Susilo');
}
namaku('Adi');
namaku('Budi');
namaku('Caca');
namaku('Dedi');
// kalo namanya dijadiin function bs lgsung mskin tanpa tanda kutip, contoh
function namaku(c){
    console.log(c+ ' Susilo');
}
var c = 'Adi'
namaku(c);


//FUNCTION W/ 2 PARAMETERS
function data (x,y){
    console.log(x+ ' Lahir th '+y);
}
data ('Adi', '1990');
data ('Budi', '1991');
data ('Caca', '1992');
data ('Dedi', '1993');

function angka (s,d,f,g){
console.log(s*d*f*g);
}
angka(2,4,8,7)


//FUNCTION RETURN
function total (e,f){
    z=e+f
    return z
}
console.log(total(4,5))
console.log (z)
//*z adalah local variable dlm function total, tdk dpt dipanggil di luar fuc tsb
//*jika z tdk di return maka total(4,5)=undefined

function aku(){
    return 'Karin';
}
console.log(aku())

function saya(){
    x = x + 'Swarna'
    return x
}
console.log(saya())

function luas(sisi){
    luas2 = sisi*sisi
    return luas2
}
console.log(luas(6))
console.log(luas(4))
console.log(luas(12))

//RECURSIVE FUNCTION
function Pangkat (x,y){
    if (y==1){
        return x;
    }
    else {
        return x = x*Pangkat(x,y-1);
    }
}
console.log(Pangkat (7,2))

function faktorial (x){
    if(x<2){return 1;}
    else {return (x *faktorial(x-1));}
}
var a = 5
console.log( 'Faktorial '+a+'! = '+faktorial(a))
