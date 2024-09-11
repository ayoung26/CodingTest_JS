function solution(n, words) {
    // 단어 저장
    const wordData = new Set();
    // 마지막 글자 저장
    let lastText = '';
    
    for (let i = 0 ; i < words.length ; i++) {
        const currWord = words[i];
        const playerNum = (i % n) + 1;
        const turn = Math.floor(i / n) + 1;
        
        // 규칙 체크하여 해당되면 탈락자 return
        if (currWord.length < 2 || wordData.has(currWord) || (i > 0 && lastText !== currWord[0])) {
            return [playerNum, turn];
        }
        
        // 정상적으로 단어를 말한 경우, 단어를 추가
        wordData.add(currWord);
        lastText = currWord[currWord.length - 1];
    }
    
    // 탈락자가 없는 경우
    return [0, 0];
}
