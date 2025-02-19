// function countdown(num){
//     if(num === 0){
//         return console.log("Go...")
//     } 
//     console.log(num)
    
//      countdown(num-1)
// }

// countdown(10)


//1. MULTIPLY WITHOUT USING RECURSION:

// function multiply(arr){
//     let product = 1
//     for(let i=0;i<arr.length;i++){
//         console.log(`Product Of ${product} x ${arr[i]} is ${product *= arr[i]}`)
//     }
//     return product
// }
// console.log(multiply([1,2,3,4,5]))


//2. MULTIPLY WITH RECURSION:

// let arr = [1,2,3,4,5]

// function multiply(arr){
// let result = 0
//     if(arr.length === 0){
//         return 1
//     }else{
//         result += arr[0] * multiply(arr.splice(1))
//         return result
//     }   
// }
// console.log(multiply(arr))


//3. FACTORIAL

// function factorial(n){
//     if(n < 0) throw new Error ("Please Provide Non Negetive Numbers")
//     if(n === 0) return 1
//     return n * factorial(n-1)
// }

// console.log(factorial(5))


//4. GENERATE CUSTOM ARRAY RANGE:



// function customRange(stnum,endnum){
   
    
//     if(stnum > endnum){
//         return []
//     } else {
//         let value = customRange(stnum + 1,endnum)
//         value.unshift(stnum)
//         return value
//     }
// }

// console.log(customRange(10,7))

//recursion works based on LiFo method >>>>> call stack il pooyi pending kidakkum until basecase is touched then its 
//return in initiated in reverse for 7,6,5,4


//PALINDROME CHECK WITHOUT RECURSION:

// function isPalindrome(str){
//     let string = str.length-1

//     if (str.length === 0) return console.log("STRING IS IN PALINDROME...")
//     else {
//         for(let i=0; i<=string; i++){
//             if(str[i]!==str[string-i]){
//                 return console.log("STRING IS NOT IN PALINDROME...")
//             }
//         } 

//         return console.log("STRING IS IN PALINDROME")
//     }
// }
// let str = "MALAYAKAM"

// isPalindrome(str)


//PALINDROME CHECK WITH RECURSION:

// function isPalindrome(str){
//     let string = str.length-1
//     if(str.length === 0){
//         return true
//     }else if(str[0] !== str[string]){
//         return false
//     }else{
//         let result = str.slice(1,string)
//         return isPalindrome(result)
//     }
// }

// console.log(isPalindrome("SAMSASMAS"))

//FIBONACCI NOS WITH RECURSION:

// function fibonacci(n) {
//     if (n <= 1) return n;
//     else {
//         return fibonacci(n-1) + fibonacci(n - 2);
//     }
// }
// console.log(fibonacci(8))

// const reverseString = ((str)=>{
//     if (str === "") return "" // this and str.length === 0 is same
//     else return reverseString(str.slice(1))+str.charAt(0) 
// })
// console.log(reverseString("KANNAN"))


// function arraySet(arr){
//     let temp = []
//     let result = []

//     function arraySubSet(arr,x){
//         if(x == arr.length) return result.push([...temp])
        
//         arraySubSet(arr,x+1)
//         temp.push(arr[x])
//         arraySubSet(arr,x+1)
//         temp.pop()

//     }

//     arraySubSet(arr,0)
//     return result
// }

// console.log(arraySet([1,2,3,4,5]))



