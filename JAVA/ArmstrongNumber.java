public class ArmstrongNumber {
    
    public static void main(String[] args) {
        
        int n = 15;
        int orginal = n;
        int sum =0;

        while(n!=0){
            int d = n%10;
            sum = sum + (d*d*d);
            n = n/10;
        }
        if(sum == orginal){
            System.out.println(orginal + " is a armstron number");
        }
        else{
            System.out.println( orginal + " is not a armstrong number");
        }

    }
}
