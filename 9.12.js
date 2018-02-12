//Array of Objects

var arrayku = [
    {nama: 'andi', usia: 27},
    {nama: 'budi', usia: 25},
    {nama: 'caca', usia: 23},
]
console.log(arrayku[0].nama)
console.log(arrayku[0].usia)
console.log(arrayku[1].nama)
console.log(arrayku[2].usia)

//sorting array of objects
//number rendah ke tinggi
var arrayku = [
    {nama: 'andi', usia: 27},
    {nama: 'budi', usia: 25},
    {nama: 'caca', usia: 23},
]
arrayku.sort(function(x,y){
    return x.usia - y.usia
})
console.log(arrayku)

//number tinggi ke rendah
var arrayku1 = [
    {nama: 'andi', usia: 27},
    {nama: 'budi', usia: 25},
    {nama: 'caca', usia: 23},
]
arrayku1.sort(function(x,y){
    return y.usia-x.usia})

    console.log(arrayku1)
