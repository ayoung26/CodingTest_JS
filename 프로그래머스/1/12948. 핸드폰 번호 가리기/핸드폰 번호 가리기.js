function solution(phone_number) {    
    let num = phone_number.slice(phone_number.length-4)
    return num.padStart(phone_number.length, '*');
}