function solution(inputArray) {
    let arrayLength = inputArray.length;
    let products = [];
    
    for(i = arrayLength - 1 ; i >= 1; i-- ) {
        let multiple = inputArray[i]*inputArray[i-1];
        products.push(multiple);
      }

     console.log('solution(inputArray) = '+ Math.max(...products));
    return Math.max(products);
    

}



solution([3, 6, -2, -5, 7, 3]);