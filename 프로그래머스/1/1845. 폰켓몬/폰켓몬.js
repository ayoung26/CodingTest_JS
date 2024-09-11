function solution(nums) {
    var answer = 0;
    
    const uniqueNum = new Set(nums).size;
    const selected = nums.length / 2;
    
    return Math.min(uniqueNum, selected);
}