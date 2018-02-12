//Array Filtering

var w = [0,1,2,3,4,5]

var x = w.filter((val)=> val !==2);  //parameter di dalam hrs function // menampilkan angka yg tdk sm dgn 2
var y = w.filter((val)=> val % 2== 0); //memfilter array dan mau menampikan bil genap
var z = w.filter((val)=> val % 2 !==0); //ganjil
var q = w.filter((val)=> Math.pow(val,2)==0);// pangkat 2 yg genap <masih salah>
console.log(x);
console.log(y);
console.log(z);
console.log(q);
//((val)=> val % 2 !==0) artinya ((val) =>{return val % 2 !==0})

//Array Mapping
var w = [1,4,9,16,25]
var x = w.map(Math.sqrt);
var y = w.map((val)=>val*2);//tiap elemen kali 2
var z = w.map((val)=>val!==9);//val tdk sm dgn 9

console.log(x);
console.log(y);
console.log(z);
