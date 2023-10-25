package com.Project17;

import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");

        //Convert input to lowercase
        String input = scanner.nextLine().toLowerCase();

        boolean isPangram = checkPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkPangram(String input) {
        //Create an array to keep track of the presence of each alphabet letter (a-z)
        boolean[] alphabetPresent = new boolean[26];

        //Iterate through the input and mark each alphabet letter as present
        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (ch >= 'a' && ch <= 'z') {
                int index = ch - 'a';
                alphabetPresent[index] = true;
            }
        }

        // Check if all alphabet letters are present
        for (boolean present : alphabetPresent) {
            if (!present) {
                return false;
            }
        }
        return true;
    }
}
