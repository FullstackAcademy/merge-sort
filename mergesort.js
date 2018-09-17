function split(wholeArray){
    const result = [];
    const midPoint = Math.floor(wholeArray.length / 2);
    if (wholeArray.length === 0){
        return undefined;
    }
    else if (wholeArray.length === 1){
        return wholeArray;
    }
    else {
        result.push(wholeArray.slice(0,midPoint))
        result.push(wholeArray.slice(midPoint))
    }
    return result;
}

function merge(arr1, arr2){
    const result = [];
    let leftPointer = 0;
    let rightPointer = 0;
    while (leftPointer < arr1.length && rightPointer < arr2.length){
        if (arr1[leftPointer] < arr2[rightPointer]){
            result.push(arr1[leftPointer])
            leftPointer++;
        }
        else {
            result.push(arr2[rightPointer])
            rightPointer++;
        }
    }
    if (leftPointer === arr1.length){
        for (let i = rightPointer; i<arr2.length; i++){
            result.push(arr2[i])
        }
    }
    else {
        for (let i = leftPointer; i<arr1.length; i++){
            result.push(arr1[i])
        }
    }
    return result;
}

function mergeSort(wholeArray) {
    if (wholeArray.length === 0 || wholeArray.length === 1) {
        return wholeArray;
    }
    else {
        return merge(
            mergeSort(split(wholeArray)[0]),
            mergeSort(split(wholeArray)[1])
        )
    }
}