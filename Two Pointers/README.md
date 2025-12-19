# Sorting Algorithms Explained (सॉर्टिंग एल्गोरिदम समझाया गया)

This document explains various sorting algorithms with examples, focusing on their implementation in JavaScript.

## In-place vs. Out-of-place Sorting

-   **In-place Sorting (O(1) Space):** ये एल्गोरिदम ऐरे को सॉर्ट करने के लिए कोई अतिरिक्त मेमोरी (extra space) का उपयोग नहीं करते हैं। सॉर्टिंग मौजूदा ऐरे के अंदर ही एलिमेंट्स को स्वैप (interchange) करके की जाती है।
-   **Out-of-place Sorting (O(n) Space):** ये एल्गोरिदम रिजल्ट को स्टोर करने के लिए एक नया ऐरे बनाते हैं, इसलिए इन्हें इनपुट ऐरे के आकार के बराबर अतिरिक्त मेमोरी की आवश्यकता होती है।

---

## 1. Bubble Sort

यह सबसे सरल सॉर्टिंग एल्गोरिदम है। इसमें, हम बार-बार आसन्न (adjacent) एलिमेंट्स की तुलना करते हैं और अगर वे गलत क्रम में हैं तो उन्हें स्वैप कर देते हैं। यह प्रक्रिया तब तक दोहराई जाती है जब तक कि पूरा ऐरे सॉर्ट न हो जाए।

-   **Time Complexity:** O(n²)
-   **Space Complexity:** O(1)

**Example:**

```javascript
function bubbleSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				// swap
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
			}
		}
	}
	return arr;
}

let arr = [5, 3, 8, 4, 2];
console.log("Bubble Sort:", bubbleSort(arr)); // Output: [2, 3, 4, 5, 8]
```

---

## 2. Selection Sort

इस एल्गोरिदम में, हम ऐरे के अनसॉर्टेड हिस्से से सबसे छोटे एलिमेंट को ढूंढते हैं और उसे सॉर्टेड हिस्से के अंत में रख देते हैं।

-   **Time Complexity:** O(n²)
-   **Space Complexity:** O(1)

**Example:**

```javascript
function selectionSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		// swap
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
	}
	return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log("Selection Sort:", selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
```

---

## 3. Insertion Sort

यह एल्गोरिदम एक वर्चुअल सॉर्टेड सब-ऐरे बनाता है। यह अनसॉर्टेड हिस्से से एक-एक करके एलिमेंट लेता है और उसे सॉर्टेड सब-ऐरे में उसकी सही जगह पर इन्सर्ट करता है।

-   **Time Complexity:** O(n²)
-   **Space Complexity:** O(1)

**Example:**

```javascript
function insertionSort(arr) {
	let n = arr.length;
	for (let i = 1; i < n; i++) {
		let current = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current;
	}
	return arr;
}

let arr = [12, 11, 13, 5, 6];
console.log("Insertion Sort:", insertionSort(arr)); // Output: [5, 6, 11, 12, 13]
```

---

## 4. Heap Sort

Heap Sort एक तुलना-आधारित सॉर्टिंग तकनीक है जो बाइनरी हीप (Binary Heap) डेटा स्ट्रक्चर पर आधारित है। यह पहले पूरे ऐरे से एक मैक्स-हीप (max-heap) बनाता है और फिर रूट एलिमेंट (जो सबसे बड़ा होता है) को ऐरे के अंत में रखता है और बचे हुए एलिमेंट्स पर हीप बनाने की प्रक्रिया को दोहराता है।

-   **Time Complexity:** O(n log n)
-   **Space Complexity:** O(1)

**Example:**

```javascript
function heapSort(arr) {
	let n = arr.length;

	// Build max heap
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i);
	}

	// Extract elements from heap one by one
	for (let i = n - 1; i > 0; i--) {
		// Move current root to end
		[arr[0], arr[i]] = [arr[i], arr[0]];

		// call max heapify on the reduced heap
		heapify(arr, i, 0);
	}
	return arr;
}

function heapify(arr, n, i) {
	let largest = i;
	let left = 2 * i + 1;
	let right = 2 * i + 2;

	if (left < n && arr[left] > arr[largest]) {
		largest = left;
	}

	if (right < n && arr[right] > arr[largest]) {
		largest = right;
	}

	if (largest != i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		heapify(arr, n, largest);
	}
}

let arr = [12, 11, 13, 5, 6, 7];
console.log("Heap Sort:", heapSort(arr)); // Output: [5, 6, 7, 11, 12, 13]
```

---

## 5. Quick Sort

यह एक "डिवाइड एंड कॉन्कर" (Divide and Conquer) एल्गोरिदम है। इसमें एक एलिमेंट को 'पिवट' (pivot) चुना जाता है और ऐरे को इस तरह से विभाजित किया जाता है कि पिवट से छोटे सभी एलिमेंट्स उसके बाईं ओर और बड़े एलिमेंट्स दाईं ओर आ जाते हैं। फिर यह प्रक्रिया बाईं और दाईं ओर के सब-ऐरे पर रिकर्सिव रूप से लागू होती है।

-   **Time Complexity:** Average: O(n log n), Worst: O(n²)
-   **Space Complexity:** O(log n) (रिकर्सन स्टैक के लिए)

**Example:**

```javascript
function quickSort(arr, low, high) {
	if (low < high) {
		let pi = partition(arr, low, high);

		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
	return arr;
}

function partition(arr, low, high) {
	let pivot = arr[high];
	let i = low - 1;
	for (let j = low; j <= high - 1; j++) {
		if (arr[j] < pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1;
}

let arr = [10, 7, 8, 9, 1, 5];
console.log("Quick Sort:", quickSort(arr, 0, arr.length - 1)); // Output: [1, 5, 7, 8, 9, 10]
```

---

## Special Cases using Two-Pointers (from `index.js`)

ये मेथड्स विशिष्ट समस्याओं के लिए टू-पॉइंटर तकनीक का उपयोग करते हैं और बहुत कुशल होते हैं।

### Sort an array of 0s and 1s

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

```javascript
function sortZerosAndOnes(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		if (arr[left] == 1 && arr[right] == 0) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
		}
		if (arr[left] == 0) {
			left++;
		}
		if (arr[right] == 1) {
			right--;
		}
	}
	return arr;
}
let arr1 = [1, 0, 1, 0, 0, 1, 1, 0, 1];
console.log("Sort 0s and 1s:", sortZerosAndOnes(arr1)); // Output: [0, 0, 0, 0, 1, 1, 1, 1, 1]
```

### Sort array by parity (Even/Odd numbers)

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(1)

```javascript
function sortArrayByParity(arr) {
	let left = 0;
	let right = arr.length - 1;
	while (left < right) {
		if (arr[left] % 2 == 1 && arr[right] % 2 == 0) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
		}
		if (arr[left] % 2 == 0) {
			left++;
		}
		if (arr[right] % 2 == 1) {
			right--;
		}
	}
	return arr;
}
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Output can vary as relative order is not maintained. e.g., [8, 2, 6, 4, 5, 3, 7, 1, 9]
console.log("Sort by Parity:", sortArrayByParity(arr2));
```

### Sorted squares of a sorted array

-   **Time Complexity:** O(n)
-   **Space Complexity:** O(n)

```javascript
function sortedSquares(arr) {
	let n = arr.length;
	let left = 0;
	let right = n - 1;
	let ans = new Array(n);
	let k = n - 1;
	while (left <= right) {
		if (Math.abs(arr[left]) > Math.abs(arr[right])) {
			ans[k--] = arr[left] * arr[left];
			left++;
		} else {
			ans[k--] = arr[right] * arr[right];
			right--;
		}
	}
	return ans;
}
let arr3 = [-10, -3, -2, 1, 4, 5];
console.log("Sorted Squares:", sortedSquares(arr3)); // Output: [1, 4, 9, 16, 25, 100]
```
