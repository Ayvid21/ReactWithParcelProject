let arr = [4, 5, 9, 1, 0, 2, 7, 11];
let target = 4;

const linearSearch = (arr, target) => {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) return i;
    }
    return -1;
}

const bubbleSort = (arr) => {
    let n = arr.length-1;
    let isSwapped = false;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}

const swap = (x, y) => {
    let temp = x;
    x = y;
    y = temp;
    return x, y;
}

const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let prev = i - 1;
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev];
            prev--;
        }
        arr[prev + 1] = curr
    }
    return arr;
}

const merge = (left, right) => {
    let newArr = []
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }
    // return newArr.concat(left.slice(i)).concat(right.slice(j));
    return [...newArr, ...left.slice(i), ...right.slice(j)];
}

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = arr.length / 2;
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
 
console.log(mergeSort(arr));