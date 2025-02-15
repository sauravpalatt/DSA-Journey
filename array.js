
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

let arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]

if(!Array.prototype.addArr){
    Array.prototype.addArr = function(...val){
        return [...this,...val]
    }
}

console.log(arr1.addArr(5,6,7))













