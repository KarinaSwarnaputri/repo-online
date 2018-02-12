//solve it #3
var a = Math.pow(8,1/3)
console.log(a)

//solve it #4 485 hari nyatakan dlm tahun, bulan, minggu, dan hari
let total=485
var tahun=Math.floor(total/360)
var bulan=Math.floor((total%360)/30)
var pekan=Math.floor(((total%360)%30)/7)
var hari=Math.floor(((total%360)%30)%7)

console.log(' '+total+' hari artinya:')
console.log(' '+tahun+' tahun')
console.log(' '+bulan+' bulan')
console.log(' '+pekan+' pekan')
console.log(' '+hari+' hari')
