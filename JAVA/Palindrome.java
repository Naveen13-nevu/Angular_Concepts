public class Palindrome {

    public static void main(String[] args) {
        
        String s = "naon";
        int left = 0;
        int right = s.length()-1;
        boolean isPalindrome = true;
        while(left<right){
            if(s.charAt(left) != s.charAt(right) ){
                isPalindrome = false;
            }
            left++;
            right--;
        }

        if(isPalindrome){
            System.out.println("Palindrome");
        }
        else{
            System.out.println("not a palindrome ");
        }
    }
}
