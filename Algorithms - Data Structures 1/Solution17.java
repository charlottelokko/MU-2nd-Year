import java.util.*;
public class Solution17{
    public static void main(String args[]){
        Scanner myS = new Scanner(System.in);
        int num = myS.nextInt();
        int [] list = new int[num];
        int x;
        
        for(int i = 0; i<num; i++){
            list[i] = myS.nextInt();
        }
        
        int temp = 0;
        for(int p = num-1; p>0; p--){
            for(int k =0; k<p;k++){
                if(list[k]>list[k+1]){
                    temp = list[k];
                    list[k]=list[k+1];
                    list[k+1]=temp;
                }
            }
        }
        x = myS.nextInt();
        x= num - x;
        System.out.println(list[x]);
        
    }
}