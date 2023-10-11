package com.Project17;

import java.util.Scanner;

public class RomanToInteger {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Roman numeral: ");

        //Convert input to uppercase
        String romanNumeral = sc.nextLine().toUpperCase();

        int result = romanToInteger(romanNumeral);
        if (result != -1) {
            System.out.println("Integer equivalent: " + result);
        } else {
            System.out.println("Invalid Roman numeral.");
        }
    }

    public static int romanToInteger(String romanNumeral) {
        int result = 0;
        int prevValue = 0;

        //Create a mapping of Roman numeral symbols to their integer values
        //For example, IV represents 4, not IIII.
        //This is used to handle cases like IV, IX, XL.
        int[] romanValues = {1000, 500, 100, 50, 10, 5, 1};
        char[] romanSymbols = {'M', 'D', 'C', 'L', 'X', 'V', 'I'};

        for (int i = 0; i < romanNumeral.length(); i++) {
            char currentSymbol = romanNumeral.charAt(i);
            int currentValue = 0;

            //Find the integer value corresponding to the current Roman numeral symbol
            for (int j = 0; j < romanSymbols.length; j++) {
                if (currentSymbol == romanSymbols[j]) {
                    currentValue = romanValues[j];
                    break;
                }
            }

            //If the current symbol is greater than the previous one, subtract the previous value
            //Example: IV for 4 (5 - 1)
            if (currentValue > prevValue) {
                result += (currentValue - 2 * prevValue); // Subtract twice the previous value
            } else {
                result += currentValue;
            }

            prevValue = currentValue;
        }
        return result;
    }
}

