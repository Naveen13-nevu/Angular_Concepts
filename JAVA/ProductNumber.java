public class ProductNumber {
    
    public static void main(String[] args) {
        
        int n = 12;

        int pro = 1;

        while(n>0){
            int d = n%10;
            pro = pro*d;
            n = n/10;
        }
        System.out.println(pro+" ");

    }
}
