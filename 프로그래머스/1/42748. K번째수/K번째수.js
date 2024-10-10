function solution(array, commands) {
    var answer = [];
    
    for(let command of commands) {
        const [i, j, k] = command;
        let num = array.slice(i - 1, j).sort((a,b) => a - b);
        let findNum = num[k - 1];
        answer.push(findNum);
    }
    
    return answer;
}