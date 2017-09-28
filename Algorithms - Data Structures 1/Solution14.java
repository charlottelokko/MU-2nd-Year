import java.util.Scanner;
public class Solution14 {
     public static void main(String args[] ) throws Exception {
        Scanner myscanner = new Scanner(System.in);
        Stack mystack = new Stack(10);
         int num = Integer.parseInt(myscanner.nextLine());
         for(int i=0;i<num;i++){
             String command = myscanner.nextLine();
             if(command.equals("POP")){
                 if(!mystack.isEmpty()){
                     mystack.pop();
                 }
             }
            else{                            
                mystack.push(Integer.parseInt(command.substring(5,command.length())));
             }
         }
        if(!mystack.isEmpty()){
             int record = mystack.pop();
            while(!mystack.isEmpty()){
                 if(mystack.peek()>record){
                     record=mystack.peek();
                 }
                 mystack.pop();
             }
             System.out.println(record);
         }
         else{
             System.out.println("empty");
        }
    }
}
class Stack{
     private int maxSize; // size of stack array
     private int[] stackArray;
     private int top; // top of stack
     public Stack(int s) { // constructor 
         maxSize = s; // set array size
         stackArray = new int[maxSize]; // create array
         top = -1; // no items yet
     }
     public void push(int j) { // put item on top of stack
         top++;
         stackArray[top] = j; // increment top, insert item
     }
     public int pop() { // take item from top of stack
         return stackArray[top--]; //access item, decrement top
     }
    public int peek() { // peek at top of stack
         return stackArray[top];
     }
     public boolean isEmpty() { // true if stack is empty
         return (top == -1);
    }
     public boolean isFull() { // true if stack is full
         return (top == maxSize-1);
    }
     public void makeEmpty() { // empty stack
         top=-1;
     }
}
