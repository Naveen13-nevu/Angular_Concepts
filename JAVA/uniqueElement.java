
import java.util.HashMap;
import java.util.Map;


public class uniqueElement{
    public static void main(String[] args) {
        
        int arr[] = {1,2,2,3,3,4,4,5};

        Map<Integer, Integer> unique = new HashMap<>();

        for(int num : arr){
            unique.put(num, unique.getOrDefault(num, 0) + 1);
        }
        
        for(int key : unique.keySet()){
            if(unique.get(key) == 1){
                System.out.print(key);
            }
         }

    }
}