let arr = [4,10,3,5,1]

function buildHeap(arr){
    let n = arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }

     console.log(...arr)
}

function heapify(arr,n,i){
    let largest = i   // 1 idx
    let left = 2*i+1  // 3 idx
    let right = left+1 // 4 idx

    if(arr[left] > arr[largest])
        largest = left

    if(arr[right] > arr[largest])
        largest = right

    if(largest != i){
        [arr[largest],arr[i]] = [arr[i],arr[largest]]
        heapify(arr,n,largest)
    }
    return 
}

buildHeap(arr)


