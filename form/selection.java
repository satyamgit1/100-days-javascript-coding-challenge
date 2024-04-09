

// <**************************** Selection Sort **************************>

// Selection Sort:

// Best Case: O(n^2)
// Worst Case: O(n^2)

import java.util.Arrays;

public class selection {

    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Before Sorting ");
        System.out.println(Arrays.toString(arr));

        selectionSort(arr);

        System.out.println("After Sorting ");
        System.out.println(Arrays.toString(arr));
    }

    private static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            int min = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
}