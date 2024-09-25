function solution(n, computers) {
    let visited = new Array(n).fill(false);
    let networkCount = 0;

    function dfs(node) {
        visited[node] = true; // 현재 노드 방문 처리
        for (let i = 0; i < n; i++) {
            if (computers[node][i] === 1 && !visited[i]) {
                dfs(i); // 연결된 노드 재귀적으로 방문
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i); // 아직 방문하지 않은 노드가 있으면 DFS 시작
            networkCount++; // 새로운 네트워크 발견
        }
    }

    return networkCount; // 네트워크의 개수 반환
}