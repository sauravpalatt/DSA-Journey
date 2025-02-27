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

//RECURSION QUESTIONS (SIMPLE)

// 1. Factorial: Write a recursive function to find the factorial of a given number n:

// function factorial(n){
//     if(n == 0) return 1
//     else return n*factorial(n-1)
// }

// console.log(factorial(5))


// 2. Fibonacci: Print the first n terms of the Fibonacci series using recursion.

// function fibonacci(n){
//     if(n<=1) return n
//     else{
//     let result = fibonacci(n-1)+fibonacci(n-2)
//     return result
//     } 
// }

// console.log(fibonacci(20))

// 3. Sum of Natural Numbers: Find the sum of the first n natural numbers using recursion.


//4. Write a recursive function to print numbers from 1 to n:
        // function isSum(num,tgt){
        //     if(num === tgt) console.log(tgt)
        //     else{
        //     console.log(num)
        //     num += isSum(num+1,tgt)
        //     }
        // }

        // isSum(1,5)

//5. Write a recursive function to print numbers from n to 1:

        // function isSum(num){
        //     if(num === 1) console.log(num)
        //     else{
        //         console.log(num)
        //         num += isSum(num-1)
        //     }
        // }

        // isSum(5)



                                                        //RECURSION:
                                                        
//1. recursion function to remove duplicates:-

// function call(arr){
//         if(arr.length === 0) return []

//         let first = arr[0]
//         let modifiedArr = call(arr.slice(1))

//         if(arr.indexOf(first) === arr.lastIndexOf(first)){
//                 console.log(`if: ${modifiedArr}`)
//                 return [first,...modifiedArr]
//         }else{
//                 console.log(`else: ${modifiedArr}`)
//                 return modifiedArr
//         }
// }

// console.log(call([1,2,3,4,4,5]))

// let str = "HELLO"
// let strArr = str.split("")


// function removeL(strArr){
//     if(strArr.length === 0) return ""
    
//     let first = strArr[0]
//     let restVal = removeL(strArr.slice(1))
    
//     if(first !== "L"){
//         return [first,...restVal].join("")
//     }else{
//         return restVal
//     }
// }

// console.log(removeL(strArr))

// function fibonacci(n){
//         if(n<=1){
//          return n
//         } 
//         else{
//         return n= fibonacci(n-1)+fibonacci(n-2)
//         } 
// }

// console.log(fibonacci(10))

// function reverseString(str){
//         if(str.length === 0) return ""
//         else{
//         return reverseString(str.slice(1))+str.charAt(0)
//         }

// }

// console.log(reverseString("HELLO"))

// function power(num,n){
//         if(n===1)return num
//         else{
//           return num * power(num,n-1)
//         }
// }

// console.log(power(4,4))

// function sum(arr){
//         if(arr.length === 0) return 0
//         else{
//          return arr[0]+sum(arr.slice(1))
//         }
// }

// console.log(sum([1,2,3,4,5]))



