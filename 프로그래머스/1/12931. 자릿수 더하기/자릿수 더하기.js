function solution(n){
    let answer = 0;
    let arr = [...String(n)];
    
    for(let i in arr) {
        answer += Number(arr[i]);
    }
    
    return answer;
}