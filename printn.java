public class printn {
    public static void main(String[] args) {
        int n=9;
        printnn(9);
        // for(int i=1;i<=9;i++){
        //     System.out.println(i);
        //     if(i<9){
        //         System.out.println(" ");
        //     }
        // }
    }
    public static void printnn(int n){
        if(n==1){
            System.out.print(n);
            return;
        }
        printnn(n-1);
        System.out.print(" "+n);
    }
    
}
