
//SUBARRAY:
// const arr = [10,20,30,40,50,70,60,70,80]

// const uniqueArr = Array.from(new Set(arr))

// function subArray(array,st,en){

//     const result = []

//     for(val of array){
//         if(array.indexOf(val) >= st && array.indexOf(val) <= en){
//             result.push(val)
//         }
//     }

//     return result
// }

// console.log(subArray(arr,4,5))

//MAP VS FILTER:

// const arr = [10,20,30,40,50,70,60,70,80]

// let newArr = arr.filter((val)=>{
//     return val > 50                //map returns boolean while filter filters the value and store in newArr
// })

// console.log(newArr)

// let arr1 = [1,2,3,4]
// // const arr2 = [5,6,7,8]

// if(!Array.prototype.addArr){
//     Array.prototype.addArr = function(...val){
//         return [...this,...val]
//     }
// }

// console.log(arr1.addArr(5,6,7))


//ARRAY BASED QUESTIONS:

// Find the maximum and minimum elements in an array:

    // let arr = [3,1,4,2,5,8,6]
    // let max = 0
    // let min = 20

    // FOR EACH:
    // arr.forEach((item)=>{
    //     if(item > max) max = item
    //     if(item < min) min = item
    // })
    // console.log(`max: ${max} & min: ${min}`)

    //FOR:
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] > max) max = arr[i]
    //     if(arr[i] < min) min = arr[i]
    // }
    // console.log(`max: ${max} & min: ${min}`)


// Remove duplicates from an array:


//SPLICE METHOD:

// const arr = [1,2,3,4,3,5,2]
//     let newArr=arr.filter((val)=>{
//         if(arr.indexOf(val) !== arr.lastIndexOf(val)) return arr.splice(arr.lastIndexOf(val),1)
//     })
//     console.log(arr)

//FOR LOOP:
// const arr = [1,2,3,4,3,5,2]

// for(let i=0;i<arr.length;i++){
//     if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
//         arr.splice(arr.lastIndexOf(arr[i]),1)
//     }
// }

// console.log(arr)

// Reverse an array without using reverse()

// const arr = [1,2,3,4,5,6,7,8]   console.log(arr.reverse())

// let temp;
// let length = arr.length-1

// for(let i=0;i<Math.floor(arr.length/2);i++){
    
//     temp = arr[i]
//     arr[i] = arr[length-i]
//     arr[length-i] = temp
// }

// console.log(arr)

// Check if an array is sorted.
    // const arr = [5,7,7,8]

    //     for(let idx=0;idx<arr.length;idx++){
    //         if(arr[idx+1]){
    //             if(arr[idx] > arr[idx+1]){
    //                 console.log("ARRAY IS NOT SORTED")
    //                 break
    //             } 
    //         }else{
    //             console.log("arr is sorted:",arr)
    //         }
    //     }
        
// Find the index of the first occurrence of an element in an array:
// const arr = ["a","k","z","a","l","z"]

//         let newArr = arr.map((str)=>{
//             return arr.indexOf(str)
//         })

//         console.log(newArr)

//SORT ARRAY USING FOR LOOP:
// const arr = [30,20,10,15,5]
// let temp
// arr.sort((a,b)=>a-b)
// console.log(arr)

// for(let j=0;j<arr.length;j++){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             temp = arr[i]
//             arr[i] = arr[i+1]
//             arr[i+1] = temp
//         }
//     }
// }

// console.log(arr)

// Find the second-largest element in an array:

// const arr = [20,30,10,15,5]

// let max = 0
// let secMax = 0

// arr.forEach((val)=>{
//     if(val > max){
//         secMax = max
//         max = val
//     } 
//     else if(max > val > secMax){
//         secMax = val
//     }
// })

// console.log(`MAX: ${max} & SEC-MAX: ${secMax}`)



// Rotate an array by n positions:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let n = 5

// // function arrayByN(arr,n){

// //     let splicedArr=arr.splice(0,n)
// //     let resArr = [...arr,...splicedArr]

// //     return resArr
// // }

// // console.log(arrayByN(arr,n))

// const arr = [1,3,-1,-3,5,3,6,7,-4,3,2]
// let slicedArr = []

// for(let i=0;i<arr.length-2;i++){
//     slicedArr[i]=Math.max(...arr.slice(i,i+3))
// }

// console.log(slicedArr)




// Sum and Count of Even Numbers
// Write a function that returns both the sum and count of even numbers in an array using reduce() with two accumulators.

// Flatten an Array of Arrays and Count Total Elements
// Write a function that flattens an array of arrays into a single array and also counts the total number of elements in all the arrays.

// Find the Longest Word and Its Length
// Write a function that uses reduce() to find the longest word in an array and returns both the word and its length.

// Group by Length of Words
// Write a function that groups words from an array by their lengths. Return an object where keys are word lengths and values are arrays of words of that length.

// Running Product and Sum
// Write a function that returns both the running product and the sum of elements in an array using reduce() with two accumulators.












