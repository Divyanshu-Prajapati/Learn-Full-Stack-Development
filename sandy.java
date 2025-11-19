public class sandy {
    public static void main(String[] args) {
        int n=8;
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
