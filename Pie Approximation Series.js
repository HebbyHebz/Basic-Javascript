const pie = 3.14159;
const pieString = pie.toString();

function infinitePi (oddNumber){
  console.log("I don start.")
  console.log("First denominator is " + oddNumber)
  let check = 4-(4/oddNumber);
   for (let numOfTerms=1; numOfTerms<200000; numOfTerms++) {
    if (check.toString().substring(0,7) != pieString){
    oddNumber  +=  2;
    check += (4/oddNumber);
    console.log(numOfTerms.toString() +"-"+check.toString().substring(0,7));
  
      if (check.toString().substring(0,7) != pieString){
    oddNumber  +=  2;
    numOfTerms++;
    check -= (4/oddNumber);
    console.log(numOfTerms.toString() +"-"+ check.toString().substring(0,7));
  }

  if (check.toString().substring(0,7) == pieString){}
    }
    
}
}

infinitePi(3);