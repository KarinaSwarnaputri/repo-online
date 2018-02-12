var y = '';
for (let i= 0; i<6; i++){
    for (let j=0; j<i; j++){
        y += ' * ';
    }
    y += '\n';
}
console.log(y);

var a= '';

for (let i=5; i>0; i--){
    for(let j=0; j<i; j++){
        a += ' * '
    }
    a += '\n'
}
console.log(a)