function solution(progresses, speeds) {
    var answer = [];
    
    // 배포날짜 계산
    // (100 - 현재진도율) / 개발속도
    let countDay = progresses.map((num, i) => Math.ceil((100 - num) / speeds[i]));
    
    // 함께 배포할 기능의 갯수 (첫번째 기능을 기준으로 1부터 시작)
    let cnt = 1;
    // 배포 날짜 비교를 위한 변수 (첫번째 기능의 배포일을 기준)
    let maxDay = countDay[0];
    
    countDay.forEach((v, i) => {
        if (i === 0) return;
        // 현재 기능의 배포일이 이전 기능의 배포일보다 작으면 함께 배포
        if(countDay[i] <= maxDay) {
            return cnt++;
        } else {
            // 함께 배포되지 못하는 경우
            answer.push(cnt);
            // 새로운 배포 기준일을 현재 기능의 배포일로 갱신
            maxDay = countDay[i];
            // 새로운 배포가 시작되므로 초기화
            cnt = 1;
        }
    });
    
    // 마지막 배포그룹의 cnt값을 추가
    answer.push(cnt);
    
    return answer;
}