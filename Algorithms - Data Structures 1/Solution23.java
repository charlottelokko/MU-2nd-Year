import java.util.*;

public class Solution23 {
    
    public static void main(String args[] ){
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        String Names[][]= new String[a][2];
        
        for(int i=0; i<a ; i++){
            Names[i][0]= s.next();
            Names[i][1]= s.next();
           }
        
        int nums[] = new int[a];
        for(int j=0; j<a; j++){
            nums[j]= Integer.parseInt(Names[j][1]);
        }
 
        int temp=0;
		for(int p=1; p<a; p++)
		{
			for(int m=0;m<a-1;m++)
			{
				if(nums[m]>nums[m+1])
				{
					temp=nums[m];
					nums[m]=nums[m+1];
					nums[m+1]=temp;
				}
			}
		}
        int median = nums[a/2];
        
        for(int k =0; k<a; k++){
            if(median == Integer.parseInt(Names[k][1]))
                System.out.println(Names[k][0]);
        }
        
        }
            
    }