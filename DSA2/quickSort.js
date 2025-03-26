let arr = [4,1,6,5,3,2,7]

function quickSort(arr){
if(arr.length <= 1) return arr

let pointer = arr[0]
let right = []
let left = []

for(let i=1;i<arr.length;i++){
    if(arr[i]>pointer){
        right.push(arr[i])
    }else{
        left.push(arr[i])
    }
}
return [...quickSort(left),pointer,...quickSort(right)]
}

console.log(quickSort(arr))

// let arr = [1,5,7,2,4,3,6]

// function quickSort(arr){

//     if(arr.length<=1) return arr

//     let pointer = arr[0]
//     let left = [], right=[]

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>pointer){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }

//     return [...quickSort(left),pointer,...quickSort(right)]
// }

// console.log(quickSort(arr))