function solution(A) {
    const arrLength = A.length;

    // 빈 배열일 경우 1 리턴
    if (arrLength === 0) {
        return 1;
    } else {
        // 연속된 수의 합 공식 이용
        const realSum = ((arrLength+1) * (arrLength+2)) / 2;
        const missingSum = A.reduce((sum, e) => sum + e, 0);

        return realSum - missingSum;
    }
}