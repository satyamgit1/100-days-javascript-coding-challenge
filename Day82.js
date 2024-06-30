//* The main focus of this lab is to evaluate your understanding of hash table concepts and problem-solving skills.

//* A HashSet is a collection of unique elements. It supports add, remove, and contains operations. Your task is to implement the MyHashSet class with the following methods:

// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
// Example 1
// Input
// ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
// [[], [1], [2], [1], [3], [2], [2], [2], [2]]

class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({ length: this.size }, () => []);
    }
    
    // Hash function to compute the index for a given key
    _hash(key) {
        return key % this.size;
    }

    // Adds a key to the HashSet
    add(key) {
        const index = this._hash(key);
        if (!this.buckets[index].includes(key)) {
            this.buckets[index].push(key);
        }
    }

    // Checks if the HashSet contains the specified key
    contains(key) {
        const index = this._hash(key);
        return this.buckets[index].includes(key);
    }

    // Removes the specified key from the HashSet
    remove(key) {
        const index = this._hash(key);
        const bucket = this.buckets[index];
        const keyIndex = bucket.indexOf(key);
        if (keyIndex !== -1) {
            bucket.splice(keyIndex, 1); // Remove the key from the bucket
        }
    }
}

// Example usage
const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1)); // Output: true
console.log(hashSet.contains(3)); // Output: false
hashSet.add(2);
console.log(hashSet.contains(2)); // Output: true
hashSet.remove(2);
console.log(hashSet.contains(2)); // Output: false
