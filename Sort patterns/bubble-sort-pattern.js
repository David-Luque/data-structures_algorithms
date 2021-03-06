//naive versions

function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    return arr;
}

//optimized with "noSwap" variable
function bubbleSort2(arr){
    
    const swap = (arr, idx1, idx2)=>{
        [arr[idx1], arr[idx2]] = [arr[idx1], arr[idx2]]
    }

    let noSwap;
    
    for(let i = arr.length; i > 0; i--){
        noSwap = true;
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j + 1);
                noSwap = false;
            }
        }
        
        if(noSwap) break;
    }
    return arr;
}