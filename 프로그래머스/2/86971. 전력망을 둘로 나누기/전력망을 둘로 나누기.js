function solution(n, wires) {
    let answer = n;
    const graph = Array.from(Array(n+1), () => []);
    
    // 그래프 생성
    wires.forEach(([v1,v2])=>{
        graph[v1].push(v2);
        graph[v2].push(v1);
    });

    // 방문기록
    let visited = Array(n+1).fill(false);
    let cnt = 0;

    const dfs = (cur) => {
        if(visited[cur]) return false;
        visited[cur] = true;
        cnt++;
        // 인접한 네트워크 처리
        graph[cur].forEach(val => {
            if(!visited[val]) dfs(val);
        });
    }

    for(let i = 1 ; i <= n; i++){
        graph[i].forEach(el => {
            visited[i] = true;
            dfs(el);
            // 그래프 차이 계산
            answer = Math.min(answer, Math.abs(n-2 * cnt));
            visited.fill(false);
            cnt = 0;
        });
    }
    
  return answer;
}
