function solution(participant, completion) {
    var answer = '';
    
    // 참여자 수
    let participantCnt = {};
    for(let name of participant) {
        // 이미 존재하는 경우 증가
        if(participantCnt[name]) {
            participantCnt[name]++;
        } else {
            participantCnt[name] = 1;
        }
    }
    
    for(let name of completion) {
        // 완주자 수 만큼 감소
        if(participantCnt[name]) {
            participantCnt[name]--;
        }
    }
    
    // 남은 참가자의 이름을 추출
    answer = Object.keys(participantCnt).filter(name => participantCnt[name] > 0).toString();

    return answer;
}