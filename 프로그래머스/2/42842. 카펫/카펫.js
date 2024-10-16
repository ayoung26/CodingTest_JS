function solution(brown, yellow) {
    // 최소한의 높이 설정
    let height = 3;

    while (true) {
        // 가로세로 길이의 합에서 세로길이를 빼면 가로길이가 나옴
        let width = (brown + 4) / 2 - height;

        // 반복종료 (가로는 세로보다 크거나 같아야함)
        if (width < height) break;

        // 테두리 2칸 제외한 길이가 yellow 길이
        if ((width - 2) * (height - 2) === yellow) {
            return [width, height];
        }

        height++;
    }
}