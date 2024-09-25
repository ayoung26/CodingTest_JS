function solution(maps) {
    
    /*
        maps = [
            [1, 0, 1, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 1],
            [1, 1, 1, 0, 1],
            [0, 0, 0, 0, 1]
        ];  
    */
    
    let n = maps[0].length; // 맵의 가로길이
    let m = maps.length; // 맵의 세로길이
    let directions = [[0,1], [1,0], [0,-1], [-1,0]]; // 방향
    
    let queue = [[0, 0, 1]]; // x좌표, y좌표, 이동거리
    
    // 방문한 좌표 체크용
    let visited = new Array(m).fill(null).map(() => new Array(n).fill(false));
    
    while(queue.length) {
        let [x, y, distance] = queue.shift();
        // 도착하면 반환
        if(x == n-1 && y == m-1) return distance;
        
        for(const [direcX, direcY] of directions) {
            let nx = x + direcX;
            let ny = y + direcY;
            
            // 맵을 벗어나는지 체크
            // if(nx >= 0 && ny >= 0 && nx < n && ny < m) {
            //     // 벽인지 체크하고, 방문했던 경로인지 체크
            //     if(maps[ny][nx] === 1 && visited[ny][nx] === false) {
            //         visited[ny][nx] = true;
            //         // 새로운 이동경로를 큐에 추가
            //         queue.push([nx, ny, distance + 1]);
            //     }
            // }
            
            // 맵을 벗어나는지 체크
            if(nx < 0 || ny < 0 || nx >= n || ny >= m || 
               maps[ny][nx] == 0 || visited[ny][nx]) {
                continue;
            }
            
            visited[ny][nx] = true;
            // 새로운 이동경로를 큐에 추가
            queue.push([nx, ny, distance + 1]);
        }
    }
    
    return -1;
}