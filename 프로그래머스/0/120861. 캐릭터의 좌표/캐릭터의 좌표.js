function solution(keyinput, board) {
    
    let location = [0, 0];
    let direction = {
        up : [0, 1],
        down : [0, -1],
        left : [-1, 0],
        right : [1, 0]
    };
    
    // 이동할수있는 최대거리 계산
    let maxX = Math.floor(board[0] / 2);
    let maxY = Math.floor(board[1] / 2);
    
    for(let input of keyinput) {
        
        let newX = location[0] + direction[input][0];
        let newY = location[1] + direction[input][1];
        
        // X축 제한 범위 확인
        if(newX <= maxX && newX >= -maxX) {
            location[0] = newX;
        }
        // Y축 제한 범위 확인
        if(newY <= maxY && newY >= -maxY) {
            location[1] = newY;
        }
    }
    
    return location;
}