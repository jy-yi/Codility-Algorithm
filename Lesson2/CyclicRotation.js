/**
 * Rotate an array to the right by a given number of steps.
 * @param {*} A : 순환할 배열
 * @param {*} K : 순환 횟수
 */
function solution(A, K) {
    let arr = A.length == 0 ? [] : A; // empty array check

    for(let i = 0; i < K; i++) {
        let last = arr.pop(); // 배열의 마지막 요소 제거
        arr.unshift(last);    // 배열의 처음에 요소 추가
    }

    return A;
}