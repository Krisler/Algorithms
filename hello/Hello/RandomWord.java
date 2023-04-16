/* *****************************************************************************
 *  Name:              Ada Lovelace
 *  Coursera User ID:  123456
 *  Last modified:     October 16, 1842
 **************************************************************************** */

import edu.princeton.cs.algs4.StdIn;
import edu.princeton.cs.algs4.StdOut;
import edu.princeton.cs.algs4.StdRandom;

public class RandomWord {
    public static void main(String[] args) {
        String champion_word = "";
        String current_word = "";
        boolean current_result;
        int i = 1;

        // Read series of standard inputs
        while (!StdIn.isEmpty()) {
            current_word = StdIn.readString();

            // select probability
            current_result = StdRandom.bernoulli((double) 1 / i);
            // if true set as champion
            if (current_result) {
                champion_word = current_word;

            }
            i++;
        }

        StdOut.printf(champion_word);
    }
}
