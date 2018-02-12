//Callback Function

let x = function(){
    console.log('Hai ini X!');
};
let y = function(callback){ //ga harus callback bs parameter apapun
    console.log('Halo ini Y!');
    callback();
};
y(x);

//application w/o callback function
let hitung = (no1, no2, op)=> {
    if(op=='kali'){
        return no1*no2
    };
    if(op=='bagi'){
        return no1/no2
    };
};
console.log(hitung(2, 3, 'kali'));

//application w callback function
let kali = (x,y)=>{
    return x*y;
}
let bagi = (x,y)=> {
    return x/y;
}
let hitung1 = (no1, no2, op)=>{
    return op(no1, no1);
};
console.log(hitung1(2,3, kali));
//ato lgsung tanpa return(ga ush pake return sm kurung kurawal)
let kali1 = (x,y)=>{
    return x*y;
}
let bagi1 = (x,y)=> {
    return x/y;
}
let hitung2 = (no1, no2, op)=>
    op(no1, no1);
console.log(hitung1(2,3, kali1));

//insert anonymous function
let hitung3 = (no1, no2, op)=> {
    return op(no1, no2);
};
console.log(hitung3(2,3, function(x,y){
    return x+y;
}));
console.log(hitung3(2,3, (x,y)=>x+y))//tanpa function