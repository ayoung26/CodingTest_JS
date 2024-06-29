function solution(n) {
    let answer = 0;
    let idx = 1;
    
    while(idx <= n) {
        if(n%idx === 0) answer += idx;
        idx++;
    }
    
    return answer;
}