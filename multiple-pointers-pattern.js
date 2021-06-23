function countUniqueValues(arr){
  
    if(arr.length === 0){
        return 0;
    }
    
    let refPoint = 0;
    let refValue = arr[refPoint];
    
    for(let i = 1; i < arr.length; i++){
        if(refValue !== arr[i]){
            refPoint++;
            refValue = arr[i];
        }
    }
    
    return refPoint + 1;
}