public class compression {
    public static void main(String[] args) {
        
        String str = "aabbbcccdd";

        for(int i=0;i<str.length();i++){
            int count =1;
            while(i<str.length()-1 && str.charAt(i) == str.charAt(i +1)){
                i++;
                count++;
            }
            System.out.println(str.charAt(i)+ "" + count);
        }

    }
}
