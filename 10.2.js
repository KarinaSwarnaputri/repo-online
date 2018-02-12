//lanjutan 10.1 ttg template string
function halo(nama){
    console.log('Halo, aku '+nama);}

function hai(nama){
    console.log(`Hai, aku ${nama}`);
    console.log(`Usiaku ${7*3}`)}

halo('Andi')
halo('Arif')

//default parameter - 

function kuadrat(x=5){
    console.log(x*x);
}
kuadrat();
kuadrat(10);