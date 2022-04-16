const fib = (n) => {
  if (n <= 2) return 1;
  return (fib(n-1) + fib(n-2));
}
 

console.log(fib(9));
console.log(fib(19));
