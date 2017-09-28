import java.util.*;
public class Solution20 {

    public static void main(String args[] ) throws Exception {
         Scanner myscanner = new Scanner(System.in);
         int num = myscanner.nextInt();
         int i=2;
         int answer=0;
         int record=num;
         
        while(i<2*num){
            boolean prime = true;
            for(int j=2;j<i;j++){
                if(i%j==0){
                    prime=false;
                 }
            }
             if(prime){
                 if(Math.abs(num-i)<record){
                     record=Math.abs(num-i);
                    answer=i;
                 }
             }
             i++;
         }
        System.out.println(answer);
    }
}