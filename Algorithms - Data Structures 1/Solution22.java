import java.util.*;
public class Solution22 {

    public static void main(String args[] ){

        Scanner myScanner = new Scanner(System.in);
        int num = myScanner.nextInt();
        int[] arr = new int[num];
        double sum=0;
        
        for(int x = 0; x < arr.length; x++){
            arr[x] = myScanner.nextInt();
            sum = arr[x] + sum;
        }

        double average = (sum/arr.length);
        double closest= Math.abs(arr[0]-average);
        int index =0 ;
        
        for (int j=0; j<arr.length; j++){
            if (Math.abs(arr[j]-average)< closest){
                closest = Math.abs(arr[j]-average);
                index = j;
            }
        }
        System.out.println(arr[index]);
    }
}