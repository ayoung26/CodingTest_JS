function solution(N, stages) {
    
    // 각 스테이지 도전자 수
    const stagePlayers = Array(N + 1).fill(0); // 첫번째 인덱스는 사용하지않으므로 N +1 만큼 생성하고 초기화
    
    // N 만큼 각 스테이지 도전자 카운트
    for(let stage of stages) {
        if (stage <= N) stagePlayers[stage]++;
    }
    
    // 총 도전자 수
    let totalPlayers = stages.length;
    
    // 스테이지 번호를 최종적으로 반환하기때문에
    // 스테이지와 실패율을 함께 저장하는 객체 생성
    const failPlayers = {};
    
    // 스테이지 별 실패율 계산
    for(let i = 1; i <= N; i++) {
        // 실패율 : 스테이지를 넘지 못한 도전자의 수 / 총 도전자의 수
        failPlayers[i] = stagePlayers[i] / totalPlayers;
        
        // 다음 스테이지의 총 도전자는 현재 스테이지 도전자를 제외해야함
        totalPlayers = totalPlayers - stagePlayers[i];
    }
    
    // 객체를 배열로 변환
    const failSort = Object.entries(failPlayers);
    
    // 내림차순 정렬하려면 b - a
    // 오름차순 정렬하려면 a - b
    failSort.sort((a, b) => b[1] - a[1]);
    
    return failSort.map(item => Number(item[0]));
}