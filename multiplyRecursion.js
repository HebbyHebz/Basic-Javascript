
function multiply_recursion(x,y){
  
  if (y==1){
    return x;
  }
  else { 
  return (x + multiply_recursion(x,y-1));
  }
} 


console.log(multiply_recursion(100,50));