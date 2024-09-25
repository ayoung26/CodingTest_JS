// 재귀함수
function dfs(node, computers, visited) {
    visited[node] = true;
    // 연결된 모든 컴퓨터 순회하여 방문처리
    computers[node].forEach((connect, n) => {
        if (connect && !visited[n]) {
            dfs(n, computers, visited);
        }
    })
}

function solution(n, computers) {
    let count = 0;
    const visited = new Array(n);

    for (let i = 0 ; i < n ; i++) {
        if (!visited[i]) {
            dfs(i, computers, visited);
            count++;
        }
    }

    return count;
}