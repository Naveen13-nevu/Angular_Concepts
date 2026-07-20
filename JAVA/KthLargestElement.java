
import java.util.PriorityQueue;

public class KthLargestElement {

    public static int large(int arr[] , int target){

        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for(int n: arr){
            pq.offer(n);

            if(pq.size() > target){
                pq.poll();
            }
        }
        return pq.peek();


    }
    
    public static void main(String[] args) {
        
        int arr[] = {1,2,3,4,5,6};
        int k =3;
        int result = large(arr,k);
        System.out.println(result);
        

    }
}
