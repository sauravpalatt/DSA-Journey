
// let arr = [4,2,9,8,5,6,7,3,1]

// function mergeSort(arr){
//     if(arr.length === 1) return arr

//     let middle = Math.floor(arr.length / 2)

//     let leftSort = mergeSort(arr.slice(0,middle))
//     let rightSort = mergeSort(arr.slice(middle))

//     return merge(leftSort,rightSort)
// }

// function merge(leftSort,rightSort){
//     let sortedArr = []
//     let i=0,j=0

//     while(i<leftSort.length && j<rightSort.length){
//         if(leftSort[i] < rightSort[j]) sortedArr.push(leftSort[i++])
//         else sortedArr.push(rightSort[j++])
//     }
//     return [...sortedArr,...leftSort.slice(i),...rightSort.slice(j)]
// }

// console.log(mergeSort(arr))

// let arr = [8,20,-2,4,-6]

// function mergeSort(arr){

//     if(arr.length<=1) return arr

//     let middle = Math.floor((arr.length)/2)
    
//     let left = mergeSort(arr.slice(0,middle))
//     let right = mergeSort(arr.slice(middle))

//     return merge(left,right)
// }

// function merge(left,right){
//     let resArr = []
//     let i=0,j=0

//     while(i<left.length && j<right.length){
//         if(left[i]<right[j]) resArr.push(left[i++])
//         else resArr.push(right[j++])
//     }

//     return [...resArr,...left.slice(i),...right.slice(j)]
// }

// console.log(mergeSort(arr))

// let strArr = ["e","c","a","d","b"]

// function mergeSort(arr){

// if(arr.length <= 1) return arr

// let middle = Math.floor(arr.length/2)

// let left = mergeSort(arr.slice(0,middle))
// let right = mergeSort(arr.slice(middle))

// return sort(left,right)
// }

// function sort(left,right){

//     let resArr = []
//     let i=0,j=0

//     while(j<left.length && i<right.length){
//         if(left[j]<right[i]) resArr.push(left[j++])
//         else resArr.push(right[i++])
//     }

//     return [...resArr,...left.slice(j),...right.slice(i)]
// }


// console.log(mergeSort(strArr))


let arr = [1,3,5,7,4,2,0]
function mergeSort(arr){
    if(arr.length <=1) return arr
    let middle = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,middle))
    let right = mergeSort(arr.slice(middle))
    return sort(left,right)
}

function sort(left,right){
    let sortedArr = []
    let i=0,j=0
    while(i<left.length && j<right.length){
        if(left[i]<right[j]) sortedArr.push(left[i++])
        else sortedArr.push(right[j++])
    }
    return [...sortedArr,...left.slice(i),...right.slice(j)]
}
console.log(mergeSort(arr))






