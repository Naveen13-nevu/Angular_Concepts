
import java.util.HashMap;

public class FreqCharHashMap {
    public static void freq(int []arr){
        
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int n: arr){
          map.put(n, map.getOrDefault(n, 0)+1);
        }

        System.out.println(map);
    }

    public static void main(String[] args) {

        int arr [] = {1,2,2,3,4,5};
        freq(arr);
    }
}
