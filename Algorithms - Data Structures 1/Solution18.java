import java.util.*;

public class Solution18 {
 public static void main(String args[] ) {
     Scanner scan = new Scanner(System.in);
     int n = scan.nextInt();
     int nth = 0;
     
     boolean sieve[] = new boolean[100000000];
     for(int i=2; i<100000000; i++){
         sieve[i]=true;
     }
     for(int j=2; j<10000; j++){
        for(int k=2; k<10000;k++){
            sieve[j*k]=false;
         }  
       }
     int count = 0;
     for(int c=0;c<10000;c++){
         if(sieve[c] == true){
             count++;
             if(count==n){
                 nth = c;
                 break;
             }
                 
                
         }
       
     }
     System.out.println(nth);
    
 }
}