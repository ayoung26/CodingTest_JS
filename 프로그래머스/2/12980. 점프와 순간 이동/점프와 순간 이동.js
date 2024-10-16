function solution(n){
    let used = 0;
    
    while(n > 0) {
        // 홀수인 경우 건전지 사용량 증가
        if(n % 2 === 1) {
            n -= 1;
            used += 1;
        } else {
            n /= 2;
        }
    }

    return used;
}