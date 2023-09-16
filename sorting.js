//bubble sort

const bubbleSort = (arr) => {
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
    return arr;
}

const selectionSort = (arr) => {
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
    return arr;
}

const insertionSort = (arr) => {
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
    return arr;
}