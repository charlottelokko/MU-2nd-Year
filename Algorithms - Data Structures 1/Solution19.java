import java.util.*;
public class Solution19 {
    public static void main(String args[] ){
         Scanner myscanner = new Scanner(System.in);
         int num = Integer.parseInt(myscanner.nextLine());
         String[] array = new String[num];
        
         for(int i=0;i<num;i++){
             array[i]=myscanner.nextLine();
         }
        
         for(int i=num-1;i>0;i--){
             for(int j=0;j<i;j++){
                if(check(array[j],array[j+1])){
                     String temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
        }
        
        for(int i=0;i<num;i++){
             System.out.print(array[i]);
             System.out.print(" ");
         }
     }

     public static boolean check(String one, String two){
         if(one.length()>two.length()){
             return true;
        }else if(one.length()<two.length()){
            return false;
         }else if(one.compareTo(two)>0){
             return true;
         }else{
             return false;
         }
    }
}