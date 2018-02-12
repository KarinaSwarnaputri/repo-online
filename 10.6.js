// Array Mapping
//item sm index bs d ganti x ato y

var orang = [
    {nama: "Andi", marga: "Hasibuan"},
    {nama: "Budi", marga: "Sinaga"},
    {nama: "Caca", marga: "Pasaribu"}
];
function namaLengkap(item,index){
    var fullname = [item.nama,item.marga].join(" ");
    return fullname;
}
function tesMap(){
    console.log(orang.map(namaLengkap)); //mengakses smua element orang dgn nama lengkap
    console.log(orang.map(namaLengkap)[0]);
    console.log(orang.map(namaLengkap)[1]);
    console.log(orang.map(namaLengkap)[2]);
}
tesMap()