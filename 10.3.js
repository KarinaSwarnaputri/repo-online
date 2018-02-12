//Arrow Function

let halo = function(){
    console.log('Halo Dunia!')
}
let hai = () =>{
    console.log('Hai Hacker!')
}
let alo = ()=> console.log('Aloha!')

halo(); hai(); alo();

//kalo mau bkin return function ga usah pake kurung kurawal
let pi = () => {
    return 3.14}
let g = ()=>9.8 //(langsung d return ga usah pake kurung kurawal)
console.log(pi());
console.log(g());

//Arrow function with a parameter
let salam = (nama)=>{
    console.log(`Halo ${nama}`)
}
salam('Andi');
let pagi = nama=>console.log(`Hai ${nama}`)
salam('Budi');

//Arrow function w 2 parameters
let x= (x,y)=>{
    console.log(`Halo ${x} ${y}`)
}
x('Andi',21);