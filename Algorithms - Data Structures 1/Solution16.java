import java.util.*;
public class Solution16{
    public static void main(String args[]){
        Scanner myS = new Scanner(System.in);
        int a = myS.nextInt();
        double nums [] = new double[a];
        
        for(int i=0; i<a; i++){
            nums[i] = myS.nextDouble();
        }
        double temp=0;
        for(int j=1;j<a;j++){
            for(int k=0;k<a-1;k++){
                if(nums[k]>nums[k+1]){
                    temp=nums[k];
                    nums[k]= nums[k+1];
                    nums[k+1]=temp;
                }
            }
        }
        double median; 
        if(a==2){
             median = (nums[0]+nums[1])/2;

        }
        else if(a%2==1){
             median = nums[a/2];
        }
        else{
            median = (nums[a/2]+nums[(a/2)+1])/2;
        }
        System.out.println(median);

    }
}