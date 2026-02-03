// Print only first 3 odd numbers from 1 to 20. Use loop. Stop with break after 3 odd prints
let odd = 0;

for(let i = 1; i <= 20; i++){
    if(odd === 3) break;
    if(i%2 === 1){
        console.log(i);
        odd++;
    }
}




