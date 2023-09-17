
    const { performance } = require('perf_hooks');
    

    const generateRandomArray = (length, min, max) => {
        const arr = [];
        for (let i =0; i<length; i++) {
            arr.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        return arr;
    }
    const sortAll = (arr) => {
        bubbleSort(arr);
       selectionSort(arr);
       insertionSort(arr);
       quickSort(arr);
    }
const bubbleSort = (arr) => {
    var start = performance.now();
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    var end = performance.now();
    console.log("Time taken by bubble sort: " + (end - start) + " milliseconds");
}

const selectionSort = (arr) => {
    var start = performance.now();
    let n = arr.length;

    for(let i=0; i<n; i++ ) {
        let min =1;
        for(let j=i+1; j<n; j++) {
            if(arr[j] < arr[min] ){
                min = j;
            }
        }
        if (min !=1){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    var end = performance.now();
    console.log("Time taken by selection sort: " + (end - start) + " milliseconds");
}

const insertionSort = (arr) => {
    var start = performance.now();
    let n = arr.length;
    for(let i=1; i<n; i++) {
        let curr = arr[i];
        let j = i-1;
        while((j > -1) && (curr < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
    var end = performance.now();
}

const quickSort = (arr) => {
    var start = performance.now();
    let n = arr.length;
    if (n <=1){
        return arr;
    }

    let pivot = arr[0];
    let left = [];
    let right = [];

    for (let i =1; i<n; i++) {
        if (arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    var end = performance.now();
    console.log("Time taken by quick sort: " + (end - start) + " milliseconds");
}

arr = generateRandomArray(10, 1, 100);
sortAll(arr);