let arr=[];

function countdown(n){
  if (n==1){
    arr.unshift(n)
    return arr
  }
  else {
    arr.unshift(n)
    return countdown(n-1)}
  
}

console.log((countdown(50)));