
const arr = [17,24,36,54,55,63,77]

let binarySearch = ((arr,target)=>{
    let left = 0
    let right = arr.length-1

    while(left<=right){

        let middle = Math.floor((left+right)/2)

        if(arr[middle] === target) return middle
        else if(arr[middle] < target) left = middle + 1
        else right = middle - 1
    }

    return -1

})

// console.log(binarySearch(arr,63))


let nums = [2,3,4,7,11];

function findKthMissing(arr, k){
    let count = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i] <= k + count) count++
    }
    return k + count;
}

// console.log(findKthMissing(nums,11))    
// ie; it counts the 14th missing number : here(1,5,6,8,9,10,12,13,14,15,16), k=11





