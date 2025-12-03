import java.util.Scanner;

public class sandy {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        helper(n);
    }
    public static void helper(int n){
        if(n==1){
            System.out.print(n);
            return;
        }
        helper(n-1);
        System.out.print(" "+n);
       
    }
}
