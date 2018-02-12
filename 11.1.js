//Promise
let janji = new Promise(function(tepati,ingkari){
    let dipenuhi = true;
    if(dipenuhi){
        tepati('Janji Kutepati.');
    }else {
        ingkar('Janji Kuingkari.');
    }
});
janji.then(function(janjiDitepati){
    console.log(janjiDitepati);
}).catch(function(janjiDiingkari){
    console.log(janjiDiingkari);
})

//Object Literal
let merk = 'Yamaha';
let tahun = 2015;

let mio = {
    merk: merk,
    prod: tahun
}
let vixion = {
    merk, tahun
}
console.log(mio);
console.log(vixion);
 
//Object Literal Method
let mio1 ={
    kualitas: function(x){
        return `Mutu ${x}`;
    }}
    let vixion1 = {
        kualitas(x){
            return `Performa ${x}`;
        }
    }
    console.log(mio1.kualitas('Oke banget!'));
    console.log(vixion1.kualitas('Juara!'));