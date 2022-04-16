function solution(n) {
    
    if (n==1){
        let area = 1;
        return area
    }
    
    else {
        return (solution(n-1)+((n-1)*4))
    }
}

console.log(solution(4))