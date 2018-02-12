// Fn inside Fn
function kali (x){
    if (x<2){ return 1;}
    else {return (x* tiga());}
}
function tiga (){
    return 3;
}
console.log(kali(5))

//setTimeout
setTimeout(waktu,3000);
function waktu(){
    console.log('Halo');
}
console.log('Yuk');
//3000ms(3detik) stlh program running, Halo br muncul stlh yuk

//clearTimeout
var x = setTimeout(waktu, 3000);
function waktu(){
    console.log('Halo');
}
clearTimeout(x)
console.log('Yuk');
//Baris setTimeout tdk diproses, lantaran dibatalkan seketika oleh clearTimeout

//setInterval
setInterval(waktu,1500);
function waktu(){
    console.log('Halo');
}