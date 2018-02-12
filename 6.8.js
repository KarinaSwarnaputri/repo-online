let x =[40, 100, 1, 5, 25, 10];
function nilaiMin(a){
    return Math.min.apply(null, a);
}
function nilaiMax(a){
    return Math.max.apply(null, a);
}
console.log(nilaiMin(x))
console.log(nilaiMax(x))

//Array of Arrays
var arrayKu = [
    ['Andi', 24, 'PNS'],
    ['Budi', 28, 'Pengacara'],
    ['Caca', 21, 'Siswa'],
]
console.log(arrayKu[0])
console.log(arrayKu[0][0])
console.log(arrayKu[1][1])
console.log(arrayKu[2][2])
console.log(arrayKu[2][0])