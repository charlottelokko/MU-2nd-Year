import java.util.*;
public class Solution13 {
	public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    Queue myQ = new Queue(20);
        
    while(sc.hasNext())
    {
        String com = sc.next();
        if(com.equals("REMOVE")){
            if(!myQ.isEmpty()){
                myQ.remove();
            }  
        }   
        else if(com.equals("INSERT")){
            myQ.insert(sc.next());
        }
    }
    
    if(!myQ.isEmpty()){
        int mid;
        int size = myQ.size();
        if(size%2==0){
            mid = (size/2)-1;
        }
        else{
           mid = size/2;
        }
        
        for(int i=0; i<mid;i++){
            myQ.remove();
        }
        System.out.println(myQ.remove());
    
    }
    else
        System.out.print("empty");
   
//System.out.println(myQ.size());

    
   
  }
}

class Queue{
    
    private int maxSize;
    private String[] queArray;
    private int front;
    private int rear;
    private int nItems;
    
    public Queue(int s){
        maxSize = s;
        queArray = new String[maxSize];
        front = 0;
        rear = -1;
        nItems = 0;
    }
    
    public boolean insert(String item){ 
    //fill this in
        if(isFull()) return false; 
        if(rear == maxSize-1)
            rear = -1;
        rear++;
        queArray[rear] = item; 
        nItems++;
        return true;
    }
      
    public String remove(){
    //fill this in
        if(isEmpty()) return null; 
        String temp = queArray[front];
        front++;
        if(front == maxSize) 
            front = 0;
        nItems--; 
        return temp;
    } 

    public boolean isEmpty(){ 
        return (nItems==0);
    }
        
    public boolean isFull(){
        return (nItems==maxSize);
    }
        
    public int size(){ 
        return nItems;
    } 
}

}
