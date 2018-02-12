// solve it #5
//usia Andi tmbh Budi adalah 49, perbandingan A dan B adalah 0.4. Berapa umur A dan B 2 tahun kedepan

let total = 49
let ratio = 0.4

let Budi = total/(ratio+1)
let Andi = total - Budi
let Budi2 = Budi + 2
let Andi2 = Andi + 2

console.log('Usia Budi Saat Ini = '+Budi)
console.log('Usia Andi Saat Ini = '+Andi)
console.log('Usia Budi 2 Tahun Lagi = '+Budi2)
console.log('Usia Andi 2 Tahun Lagi = '+Andi2)

//solve it #6
let a = new Date ()
console.log(' ')
console.log('Hari ini tanggal '+(a.getDate()+'-'+(a.getMonth()+1))+'-'+a.getFullYear())
console.log(' ')
console.log('Kemarin tanggal '+(a.getDate()-1+'-'+(a.getMonth()+1))+'-'+a.getFullYear())
console.log(' ')
console.log('Besok tanggal '+(a.getDate()+1+'-'+(a.getMonth()+1))+'-'+a.getFullYear())

//solve it #7
let kata1 = 'Halo Dunia'
let kata2 = kata1.replace(/a/g, ' ')
let jumlah = kata1.length-kata2.length
console.log(jumlah)

//solve it #8
// Jarak mobil A & B = 120km, 
//A berjalan 60km/h dari timur 
//B berjalan 40km/h dari barat 
//A & B start pukul 9 WIB. Jam brp A & B tabrakan?

let kecepatanA = 60
let kecepatanB = 40
let jarak = 120
let jamStart = 9

let waktuTabrakanMenit = (jarak/(kecepatanA+kecepatanB))*60
let tabrakanJam = Math.round(waktuTabrakanMenit/60)
let tabrakanMenit = waktuTabrakanMenit%60
let jamTabrakan = tabrakanJam + jamStart

console.log('Mobil A '+kecepatanA+'km/h dari Timur!')
console.log('Mobil B '+kecepatanB+ 'km/h dari Barat!')
console.log('Tabrakan akan terjadi '+waktuTabrakanMenit+ 'menit lagi!')
console.log('Sekarang jam ' +jamStart+',tabrakan jam '+jamTabrakan+':'+tabrakanMenit)