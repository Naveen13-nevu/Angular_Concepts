public class Anagram {

    public static boolean Anag(String str1, String str2){

        if(str1.length() != str2.length()){
            return false;
        }

        char c1 [] = str1.toCharArray();
        char c2 [] = str2.toCharArray();

        bubbleSort(c1);
        bubbleSort(c2);

        for(int i=0;i<c1.length;i++){
            if(c1[i] != c2[i]){
                return false;
            }
        }


        return true;
    }

    public static void bubbleSort(char ch []){

        int n = ch.length;

        for(int i=0;i<n-1;i++){
            for(int j=0;j<n-i-1;j++){
                if(ch[j] > ch[j+1]){
                    char temp = ch[j];
                    ch[j] = ch[j+1];
                    ch[j+1] = temp;
                }
            }
        }

    }
    
    public static void main(String[] args) {
        
        String str1 = "silent";
        String str2 = "listen";

        System.out.println(Anag(str1, str2));
        

    }
}
