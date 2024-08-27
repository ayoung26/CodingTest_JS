function solution(numbers) {
    var answer = [];
    
    numbers.forEach((num1, idx1) => {
        numbers.forEach((num2, idx2) => {
            if(idx1 === idx2) return;
            answer.push(num1 + num2);
        });
    });
    
    return [...new Set(answer)].sort((a,b) => a-b);
}