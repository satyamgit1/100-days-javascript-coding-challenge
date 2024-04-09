public class MergeSort {
    public void mergeSort(int[] a, int l, int r) {
        if (l < r) {
            int mid = (l + r) / 2;
            mergeSort(a, l, mid);
            mergeSort(a, mid + 1, r);
            merge(a, l, mid, r);
        }
    }

    public void merge(int[] a, int l, int mid, int r) {
        int n1 = mid - l + 1;
        int n2 = r - mid;

        int[] leftArray = new int[n1];
        int[] rightArray = new int[n2];

        for (int i = 0; i < n1; i++) {
            leftArray[i] = a[l + i];
        }
        for (int j = 0; j < n2; j++) {
            rightArray[j] = a[mid + 1 + j];
        }

        int i = 0, j = 0;
        int k = l;

        while (i < n1 && j < n2) {
            if (leftArray[i] <= rightArray[j]) {
                a[k] = leftArray[i];
                i++;
            } else {
                a[k] = rightArray[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            a[k] = leftArray[i];
            i++;
            k++;
        }

        while (j < n2) {
            a[k] = rightArray[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        MergeSort mergeSort = new MergeSort();
        int[] array = {12, 11, 13, 5, 6, 7};
        int length = array.length;

        System.out.println("Given array:");
        for (int num : array) {
            System.out.print(num + " ");
        }

        mergeSort.mergeSort(array, 0, length - 1);

        System.out.println("\nSorted array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
