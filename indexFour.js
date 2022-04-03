function trueOrFalse(wasThatTrue) {
  // Only change code below this line
  if (wasThatTrue){
    return console.log("Yes, that was true") ;
  }
  return console.log("No that was false") ;

//If I don't add return, the program will print Line 4 and Line 7.
//I experienced this several times and was wondering why.
//Turns out return ends the function and sends ()returns the final value to the function.

  // Only change code above this line

}

trueOrFalse(false);