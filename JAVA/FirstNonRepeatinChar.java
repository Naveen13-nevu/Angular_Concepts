public class FirstNonRepeatinChar {
    public static void main(String[] args) {
        
        String str = "aabbccddeef";

        for(int i=0;i<str.length();i++){
            boolean isRepeating = false;
            for(int j=0;j<str.length();j++){
                if(i != j && str.charAt(i) == str.charAt(j)){
                    isRepeating = true;
                }
            }
            if(!isRepeating){
                System.out.println(str.charAt(i));
            }
        }

    }
}
