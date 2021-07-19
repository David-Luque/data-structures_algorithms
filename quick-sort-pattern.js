// pivot helper
function pivot(arr, start=0, end=arr.length-1) {
    const swap = (array, idx1, idx2)=>{
        [array[idx1], array[idx2]] = [array[idx1], array[idx2]];
    }
    let pivot = arr[start];
    let swapInx = start;
    for(let i = start + 1; i < end; i++) {
        if(pivot > arr[i]) {
            swapInx++;
            swap(arr, swapInx, i)
        }
    }
    swap(arr, start, swapInx);
    return swapInx;
}


function quickSort(arr, left=0, right=arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr;
};