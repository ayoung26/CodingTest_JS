function solution(prices) {
    var answer = [];

    prices.forEach((currPrice, i) => {
        // 가격이 떨어지지 않은 시간을 담는 변수
        let notDropTime = 0;
        
        for (let j = i + 1; j < prices.length; j++) {
            notDropTime++;
            // 현재 가격이 더 크면 루프 종료
            if (currPrice > prices[j]) {
                break;
            }
            
        }
        answer.push(notDropTime);
    });

    return answer;
}