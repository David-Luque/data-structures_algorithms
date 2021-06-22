function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((end + start) / 2);

    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;

        middle = Math.floor((end + start) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}