
public class Avg {
	public static void main(String[] args) {
		int[] arr = {1,2,3,4};
		System.out.println(solution(arr));
	}
	
	public static double solution(int[] arr) {
        
        double sum = 0;
        
        for (int i : arr) {
        	sum += i;
		}
        
        return sum / arr.length;
    }
}
