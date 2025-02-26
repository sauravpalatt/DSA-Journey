//REVERSE AN ARRAY:
// let arr = [1, 2, 3, 4, 5]

// for(let i=0;i<Math.round(arr.length/2);i++){
//     [arr[i],arr[arr.length-1-i]] = [arr[arr.length-1-i],arr[i]]
// }

// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// let temp;

// let newArr=arr.map((val,idx)=>{
//     if(idx < Math.floor(arr.length/2)){
//         temp = arr[idx]
//         arr[idx] = arr[arr.length-1-idx]
//         arr[arr.length-1-idx] = temp
//     } 
//     return arr[idx] 
// })

// console.log(newArr)

//FIND 3RD MAX ELEMENT:

// let arr = [9,6,5,8,4,3]
// let max = 0
// let secMax = 0
// let thirdMax = 0

// arr.forEach((item)=>{
//     if(item>max){
//         thirdMax = secMax
//         secMax = max
//         max = item
//     }else if(item > secMax && item < max){
//         thirdMax = secMax
//         secMax = item
//     }else if(item > thirdMax && item < secMax){
//         thirdMax = item
//     }
// })

// console.log(`THIRD MAX: ${thirdMax}`)

//FIND DUPLICATES:

// let arr = [1, 2, 3, 4, 2]

// arr.forEach((item,idx)=>{
//     if(arr.indexOf(item)!==arr.lastIndexOf(item)){
//         arr.splice(arr.lastIndexOf(item),1)
//     }
// })

// console.log(arr)

//REMOVE ARRAY DUPLICATES AND PUSH IT TO NEW ARRAY:

// let arr = [1, 2, 3, 4, 2]

// let newArr=arr.filter((item)=>{
//     if(arr.indexOf(item)!==arr.lastIndexOf(item)){
//         arr.splice(arr.lastIndexOf(item),1)
//     }
//      return arr
// })

// console.log(newArr)

// let arr = [1, 2, 3, 4, 5]
// let steps = 2

// let newArr = []

// function rotateArr(arr,steps){
// let n = arr.length

//     for(let i=0;i<n;i++){
//         let rotatedVal = (i + steps) % n
//         newArr[rotatedVal] = arr[i]
//     }

//     for(let i=0;i<n;i++){
//         arr[i] = newArr[i]
//     }
//     return arr
// }

// console.log(rotateArr(arr,steps))


//Move Zeros to End:

// let arr = [0, 1, 0, 3, 12]

// arr.forEach((item,idx)=>{
//     if(item===0){
//         arr.splice(idx,1)
//         arr.push(0)
//     }
// })

// console.log(arr)


// Two Sum Problem:

// let arr = [2, 7, 11, 15]
// let target = 13

// function isTarget(arr,target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===target){
//               return [i,j]
//             }   
//         }
//    }
// }

// console.log(isTarget(arr,target))


// let arr = [1,2,3,4,5]


// function deleteElem(array,tgt){
//     for(let i=0;i<array.length;i++){
//         if(array[i]==tgt){
//             array.splice(i,1)
//             break
//         }
//     }
//     return array
// }

// console.log(deleteElem(arr,4))

// let arr = [1,2,3,4,5]
// let tgt = 6

// function twoSum(arr,tgt){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let twoVal = arr[i]+arr[j]
//             if(twoVal == tgt){
//                 return [i,j]
//             }
//         }
//     }
// }

// console.log(twoSum(arr,tgt))


// let arr = [1,2,3,4,5]
// let newArr = []
// let n = arr.length
// let posn = 1

// for(let i=0;i<arr.length;i++){
//     let posnVal = (i+posn)%n
//     newArr[posnVal] = arr[i]
// }

// for(let i=0;i<n;i++){
//     arr[i] = newArr[i]
// }

// console.log(arr)

