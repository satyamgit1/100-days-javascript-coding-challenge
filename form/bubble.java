


// <**************************** Bubble Sort **************************>

//  Example 1:
// Input: N = 6, array[] = {13,46,24,52,20,9}
// Output: 9,13,20,24,46,52
// Explanation: After sorting we get 9,13,20,24,46,52


// Input: N = 5, array[] = {5,4,3,2,1}
// Output: 1,2,3,4,5
// Explanation: After sorting we get 1,2,3,4,5


// Bubble Sort:

// Best Case: O(n) (when the list is already sorted)
// Worst Case: O(n^2)

class practice {
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

//     Array after the first iteration: {34, 25, 12, 22, 11, 64, 90}
//     Array after the second iteration: {25, 12, 22, 11, 34, 64, 90}
// After the third iteration: {12, 22, 11, 25, 34, 64, 90}
// After the fourth iteration: {12, 11, 22, 25, 34, 64, 90}
// After the fifth iteration: {11, 12, 22, 25, 34, 64, 90}
// After the sixth iteration: {11, 12, 22, 25, 34, 64, 90}



    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        System.out.println("Before Sorting ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        bubbleSort(arr);
        System.out.println("\nAfter Sorting array: ");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}





