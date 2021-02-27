/**
 * Count minimal number of jumps from position X to Y.
 * @param {*} X : 출발 지점
 * @param {*} Y : 도착 지점
 * @param {*} D : 점프 거리
 */
function solution(X, Y, D) {
    let answer = Math.floor((Y-X)/D); // X와 Y 사이의 거리를 D로 나눈만큼 점프

    // 아직 Y에 도착 못했다면 한 번 더 점프
    if ((Y-X) % D !== 0) {
        answer++;
    }

    return answer;
}