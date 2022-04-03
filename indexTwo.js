const pie = 3.14159;
let numOfTerms;

function infintePi (param1){
let check = 4-(4/param1);

if (check != pie){
for (let numOfTerms=0; numOfTerms<200000; numOfTerms++)
  param1 += 2;
  check -= (4/(4/param1));
    if (check != pie){
    param1 += 2;
    check += (4/(4/param1));
    }
}

console.log(check);
console.log(numOfTerms);
}

infintePi (3);

