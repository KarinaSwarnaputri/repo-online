//FIZZBUZZ

const fizzBuzz = (num) =>{
    for(let i = 1; i<= num; i++){
        if(i%15===0){
            console.log('FizzBuzz');
        }else if (i%3===0){
            console.log('Fizz');
        }else if (i%5===0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
};
fizzBuzz(20)

//FIBONACCI
const fibo = (urut)=> {
    if (urut<3){
        return 1;
    }
    else{
        return fibo(urut-1)+ fibo(urut-2);
    }
}
console.log(fibo(6))