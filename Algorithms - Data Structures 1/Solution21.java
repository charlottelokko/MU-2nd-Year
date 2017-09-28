import java.util.*;
public class Solution21 {
     public static void main(String args[] ){
         Scanner myscanner = new Scanner(System.in);
         int number = myscanner.nextInt();
         int[] data = new int[number];
         
         for(int i=0;i<number;i++){
             data[i]=myscanner.nextInt();
         }
         
         int record=0;
         int recordnumber=0;
         
         for(int i=0;i<number;i++){
             int count=0;
             for(int j=0;j<number;j++){
                 if(data[i]==data[j])
                    count++;
             }

            if(count>record){
                record=count;
                recordnumber=data[i];
             }
         }
         System.out.println(recordnumber);
     }
}