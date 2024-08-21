function solution(dirs) {
    
    // 현재 위치
    let currLocation = {x : 0, y : 0};
    
    // 좌표 이동 방향
    let direction = {
        'U' : {x: 0, y: 1},
        'D' : {x: 0, y: -1},
        'R' : {x: 1, y: 0},
        'L' : {x: -1, y: 0}
    }
    
    // 이동한 경로를 중복없이 저장
    let track = new Set();
    
    for(let dir of dirs) {
        let moveX = currLocation.x + direction[dir].x;
        let moveY = currLocation.y + direction[dir].y;
    
        // 경계를 넘어가는 명령어 건너뜀
        if(moveX > 5 || moveX < -5 || moveY > 5 || moveY < -5) {
            continue;
        }
        
        // 경로 저장 (*양방향 체크)
        let path = `${currLocation.x},${currLocation.y},${moveX},${moveY}`;
        let reversePath = `${moveX},${moveY},${currLocation.x},${currLocation.y}`
        
        if(!track.has(path) && !track.has(reversePath)) {
            track.add(path);
        }
   
        // 현재 위치 변경
        currLocation.x = moveX;
        currLocation.y = moveY;
    }
    
    return track.size;
}