public class ReverseWords {

    public static String word(String str){

        String words[] = str.split(" ");
        String rev = "";
        for(int i=words.length-1;i>=0;i--){
            rev = rev + words[i];
            if(i != 0){
                rev = rev+" ";
            }
        }

        return rev;
    }

    public static void main(String[] args) {
        
        String str = "Java is a easy programing language";
        String result = word(str);
        System.out.println(result);
        

    }
}
 