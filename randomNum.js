//This is a function to get a random number between two numbers.

function randomNum(nmin, nmax){
  console.log(
    Math.floor(Math.random()*(nmax-nmin)+nmin
  )
}

randomNum(30,100)