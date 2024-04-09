// Insertion Sort:

// Best Case: O(n) (when the list is nearly sorted)
// Worst Case: O(n^2)

import java.util.Arrays;

public class insertion {

    public static void main(String[] args) {
        int[] arr = { 64, 34, 25, 12, 22, 11, 90 };
        System.out.println("Before Sorting ");
        System.out.println(Arrays.toString(arr));

        insertionSort(arr);

        System.out.println("After Sorting ");
        System.out.println(Arrays.toString(arr));
    }

    private static void insertionSort(int[] arr) {
        for (int j = 1; j < arr.length; j++) {
            int key = arr[j];
            int i = j - 1;
            while (i >= 0 && arr[i] > key) {
                arr[i + 1] = arr[i];
                i--;
            }
            arr[i + 1] = key;
        }
    }
}

// Sure,let's

// walk through
// the steps
// of the
// Insertion Sort algorithm for
// a hypothetical
// list. Insertion Sort
// builds the
// final sorted array
// one item
// at a
// time.It is
// much less
// efficient on
// large lists
// than more
// advanced algorithms
// such as quicksort,heapsort,
// or merge
// sort.

//         Consider the
// following unsorted list:

// 12,11,13,5,6 12,11,13,5,6

// Now,let's
// go through
// each iteration
// of the
// Insertion Sort:

// Iteration 1:

// Start with
// the second

// element (11) and compare it with the first element (12).
// Swap 11 and 12, resulting in: 
// 11
// ,
// 12
// ,
// 13
// ,
// 5
// ,
// 6
// 11,12,13,5,6
// Iteration 2:

// Move to the third element (13).
// Compare it with the

// second element (12) and swap if necessary.
// No swap needed in this case: 
// 11
// ,
// 12
// ,
// 13
// ,
// 5
// ,
// 6
// 11,12,13,5,6
// Iteration 3:

// Move to the fourth element (5).
// Compare it with the

// third element (13) and swap if necessary.
// Compare it with the second element (12) and swap if necessary.
// Compare it with the first element (11) and swap if necessary.
// Swap 5, 11, 12, and 13, resulting in: 
// 5
// ,
// 11
// ,
// 12
// ,
// 13
// ,
// 6
// 5,11,12,13,6
// Iteration 4:

// Move to the fifth element (6).
// Compare it with the

// fourth element (13) and swap if necessary.
// Compare it with the third element (12) and swap if necessary.
// Compare it with the second element (11) and swap if necessary.
// No swap needed with the

// first element (5).
// Swap 6, 11, 12, and 13, resulting in the final sorted array: 
// 5
// ,
// 6
// ,
// 11
// ,
// 12
// ,
// 13
// 5,6,11,12,13
// After each iteration, the left portion of the array becomes sorted, and the algorithm proceeds to the next unsorted element until the entire array is sorted.