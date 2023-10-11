package com.Project17;

import java.util.Random;

public class ArrayShuffle {
    public static void main(String[] args) {
        //Create an array with the values (1, 2, 3, 4, 5, 6, 7)
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};

        //Shuffle the array using the Fisher-Yates shuffle
        shuffleArray(originalArray);

        //Print the shuffled array
        System.out.println("Shuffled Array: ");
        for (int i = 0; i < originalArray.length; i++) {
            System.out.print(originalArray[i] + " ");
        }
    }

    //Fisher-Yates shuffle algorithm
    public static void shuffleArray(int[] arr) {
        int n = arr.length;
        Random rand = new Random();

        for (int i = n - 1; i > 0; i--) {
            //Generate a random index between 0 and i
            int j = rand.nextInt(i + 1);

            //Swap the array i and j
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
