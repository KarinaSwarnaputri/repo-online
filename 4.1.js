//Dengan object Date() dan If, tentukan nama Bulan saat ini!

var dt = new Date();
var mt =dt.getMonth();
var dy = dt.getDay();

if(mt==0){
    console.log('saat ini bulan '+(mt+1)+' : '+'januari');
}
if(dy==4){
    console.log('saat ini hari '+dy+' : '+'Kamis')
}