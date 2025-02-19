
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

    let arr = [3,1,4,2,5,8,6]
    let max = 0
    let min = 20

    // FOR EACH:
    // arr.forEach((item)=>{
    //     if(item > max) max = item
    //     if(item < min) min = item
    // })
    // console.log(`max: ${max} & min: ${min}`)

    //FOR:
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max) max = arr[i]
        if(arr[i] < min) min = arr[i]
    }
    console.log(`max: ${max} & min: ${min}`)

// Remove duplicates from an array.
// Reverse an array without using reverse().
// Check if an array is sorted.
// Find the index of the first occurrence of an element in an array.
// Merge two sorted arrays into one sorted array.
// Find the second-largest element in an array.
// Flatten an array of arrays into a single array.
// Sum all the even numbers in an array.
// Rotate an array by n positions.


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












