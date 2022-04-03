let arr=[];

function countdown(n){
  if (n<1){
     return arr
  }
  else {
    arr.push(n)
    return countdown(n-1)}
  
}

console.log((countdown(50)));