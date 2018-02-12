var y= '';
var z='';

for (let i=5; i>1; i--){
    for(let j=0; j<i; j++){
        y += ' * ';
    }
    if(i==2){y+=''}
    else{y +='\n';} 
}
for(let a=1; a<6; a++){
    for(let s=0; s<a; s++){
        z+=' * '
}
     z+='\n'
}
console.log(y);
console.log(z);