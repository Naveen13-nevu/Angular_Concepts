public class Fibonnaci {
    
    // public static int fib (int n){

    //     if(n<=1){
    //         return n;
    //     }
    //     return  fib(n-1) + fib(n-2);

    // }

    public static void main(String[] args) {
        
        int n = 10;

        int first = 0;
        int second = 1;
        System.out.print( first + " " + second+" ");

        for(int i=0; i<=n;i++){
            int next = first + second;
            System.out.print(next+" ");
            first = second;
            second = next;
        }


        // for(int i=0;i<n;i++){
        //     System.out.print(fib(i));
        // }

    }
}
