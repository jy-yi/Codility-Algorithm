/**
 * Lesson 1 / BinaryGap
 * Find longest sequence of zeros in binary representation of an integer.
 * @param {*} N
 */
function solution(N) {
    let binaryArray = toBinary(N);
    let oneArray = [];
    let max = 0;

    for(let i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] === 1) {
            oneArray.push(i); // 1의 위치 인덱스 담기
        }
    }

    if (binaryArray.length < 2) {
        max = 0;
    } else {
        for(let i = 0; i < oneArray.length-1; i++) {
            let count = oneArray[i+1] - oneArray[i] - 1;
            max = count > max ? count : max;
        }
    }

    return max;

}

/**
 * 이진수 만들기
 * @param {*} N : 변환할 십진수
 */
function toBinary(N) {
    let array = [];

    while (N > 0) {
        array.push(N % 2);
        N = Math.floor(N / 2);
    }

    return array.reverse();
}