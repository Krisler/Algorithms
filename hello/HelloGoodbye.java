/* *****************************************************************************
 *  Name:              Ada Lovelace
 *  Coursera User ID:  123456
 *  Last modified:     October 16, 1842
 **************************************************************************** */

public class HelloGoodbye {
    public static void main(String[] args) {
        if (args.length > 0 || args.length <= 1) {
            System.out.println("Hello " + args[0] + " " + args[1]);
            System.out.println("Goodbye " + args[1] + " " + args[0]);
        }
        else {
            System.out.println("Please enter two arguements");
        }

    }
}
