import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution15 {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int s = sc.nextInt();
        Stack sta = new Stack(s);
    
        for(int i = 0;i<s;i++){
            String com = new String(sc.next());
            if(com.equals("PUSH")){
                int x = sc.nextInt();
                sta.push(x);
            }
           else if(sta.isEmpty()){
               
           }
            else
                sta.pop();
              
        }
       if(sta.isEmpty()){
            System.out.println("empty");
        }
               
        else{
            System.out.println(sta.peek());
        }
    }
}

class Stack{
    private int maxSize; //size of stack array
    private int[] stackArray;
    private int top;    //top of stack
    
    public Stack(int s){ //constructor
        maxSize = s;       //set array size
        stackArray = new int[maxSize]; //create array
        top = -1;       //no items yet   
    }
    public void push(int j){ 
        top++;
        stackArray[top]=j;
    }
    public int pop(){
        return stackArray[top--];
    }
    public int peek(){ //peek top of stack
        return stackArray[top];
    }
    public boolean isEmpty(){ 
        return(top==-1);
    }
    public boolean isFull(){
        return(top == maxSize-1);
    }
    public void makeEmpty(){
        top=-1;   
    }
    
}