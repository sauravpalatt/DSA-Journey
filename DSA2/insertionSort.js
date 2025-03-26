// let arr = [4,1,6,5,3,2,7]

// for(let i=0;i<arr.length;i++){
//    const key = arr[i]
//    let j = i-1
//    while(j>=0 && key < arr[j]){
//     arr[j+1] = arr[j]
//     j--
//    }
//    arr[j+1] = key
// }

// console.log(arr)

// let arr = [64, 34, 25, 12, 22, 11, 12, 90]

// function insertionSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let key = arr[i]
//         let j = i-1

//         while(j>=0 && key<arr[j]){
//             arr[j+1] = arr[j]
//             j--
//         }
//         arr[j+1] = key
//     }
//     return arr
// }

// console.log(insertionSort(arr))


let arr = [4,1,6,5,3,2,7]
let n = arr.length-1

for(let i=1;i<=n;i++){
    let key = arr[i]  
    let j = i-1 

    while(j>=0 && key<arr[j]){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1] = key
}

console.log(arr)