/**
 * Find the smallest positive integer that does not occur in a given sequence.
 * @param {*} A
 */
function solution(A) {
    //배열 오름차순 정렬
    A.sort((a, b) => {
        return a-b;
    });

    let min = 1;

    for(let i in A) {
        if(A[i] === min) {
            min++;
        }
    };

    return min;

}