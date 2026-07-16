public class primeNumber {
 
    public static void main(String[] args) {
        
        int n = 14;
        boolean isPrime = true;

        if(n<=1)
        {
            isPrime = false;

        }
        else{
            for(int i=2;i<n;i++){
                if(n%i == 0){
                    isPrime = false;
                }
            }
        }
        if(isPrime){
            System.out.println( n + " is a prime number");
        }
        else{
            System.out.println(n + " is not a prime number");
        }


    }
    
}
