function solution(topping) {
    let waysCnt = 0;
    
    let leftMap = new Map();
    let rightMap = new Map();
    
    // 오른쪽에 전체 토핑을 기록
    for(let elem of topping) {
        rightMap.set(elem, (rightMap.get(elem) || 0) + 1);
    }
    
    // 배열 순회하며 왼쪽으로 토핑이동
    for(let idx = 0; idx < topping.length-1; idx++) {
        const elem = topping[idx];
        
        leftMap.set(elem, (leftMap.get(elem) || 0) + 1);
        
        if(rightMap.get(elem) === 1) {
            rightMap.delete(elem);
        } else {
            rightMap.set(elem, rightMap.get(elem) - 1);
        }
        
        if(leftMap.size === rightMap.size) waysCnt++;
    }
    
    return waysCnt;
}