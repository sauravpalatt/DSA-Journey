// let arr = [4,1,6,5,3,2,7]

// for(let i=0;i<arr.length;i++){
//     let minIdx = i
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[minIdx] > arr[j] ){
//         minIdx = j
//         }
//     }
//     if(minIdx !== i){
//         [arr[minIdx],arr[i]] = [arr[i],arr[minIdx]]
//     }
// }

// console.log(arr)


let arr = [4,1,6,5,3,2,7]

let n = arr.length-1

for(let i=0;i<n;i++){
    let minIdx = i
    for(let j=i+1;j<n;j++){
        if(arr[minIdx]>arr[j]){
            minIdx = j
        }
    }
    if(minIdx!==i){
        [arr[i],arr[minIdx]] = [arr[minIdx],arr[i]]
    }
}

console.log(arr)

