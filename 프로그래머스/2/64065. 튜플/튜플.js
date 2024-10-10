function solution(s) {
    var answer = [];
    
    const numsArr = s.slice(2, -2).split("},{");
    
    // 길이대로 정렬
    numsArr.sort((a,b) => a.length - b.length);
    numsArr.forEach(nums => {
        // 숫자로 변환
        const set = nums.split(",").map(Number);
        set.forEach(num => {
            if(!answer.includes(num)) {
                answer.push(num);
            }
        })
    })
    
    
    return answer;
}