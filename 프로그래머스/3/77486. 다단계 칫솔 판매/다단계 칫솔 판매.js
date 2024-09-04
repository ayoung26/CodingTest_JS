// 판매원과 추천인 정보
let recomMap = new Map();
// 판매원과 총 수익 정보
let profitMap = new Map();

// 수익계산 func
function profitProgress(person, amount) {
    if(person === '-' || amount < 1) return;
    
    // 수익 계산 (본인 90%, 추천인 10%)
    let profit = amount - Math.floor(amount * 0.1);
    // 아래 코드로 하면 미세한 차이로 에러발생
    // let profit = Math.floor(amount * 0.9);
    let recomProfit = Math.floor(amount * 0.1);
    
    // 본인 수익 입력
    profitMap.set(person, (profitMap.get(person) || 0) + profit);
    
    // 추천인에게 수익 전달
    let recomPerson = recomMap.get(person);
    if(recomPerson) {
        profitProgress(recomPerson, recomProfit); // 재귀 호출
    }
}

function solution(enroll, referral, seller, amount) {
    
    // 추천인 정보 입력
    enroll.forEach((person, idx) => {
      recomMap.set(person, referral[idx]);
    });
    
    // 수익 정보 입력
    seller.forEach((person, idx) => {
        profitProgress(person, amount[idx] * 100);
    });
    
    // 결과 배열로 반환
    let answer = enroll.map(person => (profitMap.get(person) || 0))
    
    return answer;
}