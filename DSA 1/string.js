
// let str = "MALAYALAM"

// function isPalindrome(str){
//     let length = str.length-1

//     for(let i=0;i<length;i++){
//         if(str[i] !== str[length - i]) return console.log("is not palndrome")
//     }
//     return console.log("is palindrome...")
// }

// isPalindrome(str)

// let str1 = "MALAYALAM"
// let str2 = "MALAYALAM"

// function hammingTest(x,y){
//     if(x.length !== y.length) throw new Error ("STRING COUNT HAS MISMATCH...")
    
//         let distance = 0

//         for(let i=0;i<x.length;i++){
//             if(x[i] !== y[i]){
//                 distance++
//             }
//         }

//         return distance === 0 ? console.log("perfect string") : console.log("hamming distance:",distance)

// }

// hammingTest(str1,str2)

// const arr= newArr.filter((item)=>{
//     if(newArr.indexOf(item)===newArr.lastIndexOf(item)) return item
// })

// console.log(arr[0])

// const arr = [0, "", null, undefined, NaN, 5, "hello"]

// const item=arr.filter((val)=>{
//     if(Boolean) return val
// })

// console.log(item)

// const arr = [1, 2, 2, 3, 3, 3, 4, 4]

// const set = new Set()

// arr.forEach((val)=>{
//     if(!set.has(val)) set.add(val)
// })

// let countMap = new Map()
// let maxVal = null
// let maxCount = 0

// set.forEach((val)=>{
//     let count = arr.filter((item)=> item === val).length
//     countMap.set(val,count)

//     if(count > maxCount){
//         maxCount = count
//         maxVal = val
//     }
// })

// console.log(`maxVal : ${maxVal}`)


// const str = "hello world"

// const newStr = str.split(" ")

// const result =newStr.map((item)=>{
//    return item[0].toUpperCase()+item.split(item[0]).join("")
// })

// console.log(result.join(" "))

// const newStr = "I am learning to codevdvd in JavaScript."

// let newArr=newStr.split(" ")

// let maxLength = 0
// let maxVal = ""

// newArr.forEach((val)=>{
//     if(val.length > maxLength) {
//       maxLength = val.length
//       maxVal = val
//     }
// })

// console.log(maxVal)

    // const output = newArr.reduce((acc,item)=>{
    //     if(item.length > acc.length) {
    //      acc = item
    //     } 
    //     return acc

    // },null)


    // let str1 = "mala"
    // let str2 = "malayalam*"

    // let set = new Set(str2)

    // let arr=str1.split("")

    // function isAnagram(str1,str2){

    //     let output = true

    //     if(str1.length != str2.length) return output = false
    //     arr.forEach((val)=>{
    //         if(!set.has(val)){
    //             return output = false
    //         }
    //     })

    //     return output

    // }

    // console.log(isAnagram(str1,str2))


    // const arr = [1, 2, 2, 3, 4, 4, 5]
    // let newArr = []
    // const set = new Set()
    

    // for(let i=0;i<arr.length;i++){
    //     if(!set.has(arr[i])) set.add(arr[i])
    // }

    // newArr = Array.from(set)
    // console.log(newArr)


    // let str = "hello"
    // let arr = Array.from(str)
    // let count = 0
    // let value = []
    // let result = new Map()

    // arr.forEach((item)=>{
    //    if(result.has(item))
    // })

    // let str = "I am learning code in JavaScript."
    // let str2 = str.replace(".","")
    // let newStr = str2.split(" ")

    // let longestWord = ""
    // let count = 0

    // newStr.forEach((val)=>{
    //     if(val.length > count){
    //         count = val.length
    //         longestWord = val
    //     }
    // })

    // console.log(`the longestword is: ${longestWord} with count: ${count}`)



    // let str = "I am learning to code in JavaScript JavaScript.";

    // // Step 1: Remove punctuation and split words
    // let words = str.split(" ").map(word => word.replace(/[^a-zA-Z]/g, ""));
    
    // // Step 2: Store words and their lengths in a Map
    // let wordMap = new Map();
    // words.forEach(word => wordMap.set(word, word.length));
    
    // // Step 3: Find the maximum length
    // let maxLength = Math.max(...wordMap.values());
    
    // // Step 4: Find words matching the max length and get the count
    // let longestWords = [];
    // wordMap.forEach((length, word) => {
    //   if (length === maxLength) longestWords.push(word);
    // });
    
    // let count = words.filter(word => longestWords.includes(word)).length;
    
    // // Step 5: Print the longest word and its count
    // console.log(`Longest Word: ${longestWords[0]}, Count: ${count}`);


    
    
    // const obj = {name: "Rajappan"}
    // const res = JSON.stringify(obj)
    // console.log(res)
    
    // let str = "Hello everyone, I am Saurav Palatt"
    // let maxLength = 13
    
    // function truncate(str,maxLength){
        
    //     if(str.length > maxLength){
        //         return str.slice(0,maxLength+1) + "..."
        //     }
        //     else return str
        // }
        // console.log(truncate(str,9))
        

        //STRING BASED QUESTIONS:

        // Hamming Distance

        //    let x = "malayalam" 
        //    let y = "malayalam"
        //    let count = 0

        //    for(let i=0;i<x.length;i++){
        //     if(i === x.length-1) return console.log (`string is in perfect distance`)
        //     if(x[i] === y[i]) count++
        //     else break
        //    }

        //    console.log(`distance is up until: ${count}th value`)
       


        // Check if a given string is a palindrome:

        // let str1= "MALAYALAM"
        // if(str1 ===str1.split("").reverse().join("")) return console.log `is palindrome`
        // else console.log `not in palindrome`

        // Count the number of vowels in a string.
            // const str = "saurav palatt"
            // let vow = ["a","e","i","o","u"]
            // let strArr = Array.from(str)
            // let count = 0

            // strArr.forEach((val)=>{
            //     vow.forEach((vowel)=>{
            //         if(val.includes(vowel)) count++
            //     })
            // })

            // console.log(count)
        
        // Find the first non-repeating character in a string:
            // let string = "SWISS"
            // let newArr = string.split("")

            // let result=newArr.filter((val)=>{
            //     if(string.indexOf(val) === string.lastIndexOf(val)) return val
            // })

            // console.log(result[0])

        // Remove all duplicate characters from a string:
            // let string = "SAURAV PALATT"

            // let set = Array.from(new Set(string))

            // console.log(set.join(""))

        // Replace all spaces in a string with "%20".
            // const str = "SAURAV IS A GOOD BOY"
            // console.log(str.replaceAll(" "," %20 "))

        // Count the occurrences of each character in a string:
        // const str = "MALAYALAM"
        // const strArr = [...str]
        // const map = new Map()

        // strArr.forEach((val)=>{
        //     map.set(val,(map.get(val) || 0)+1)
        // })

        // console.log(map)
        //    let charObj = {1:"14",2:"13"}
        //    console.log(charObj[2] = String(Number(charObj[2])+1))

        // Check if two strings are anagrams of each other:
        // let str1 = "silent"
        // let str2 = "listen"
        // let result;

        // for(let i=0;i<str1.length;i++){
        //     if(str1.includes(str2[i]) && str2.includes(str1[i])){
        //         result = true
        //     }else{
        //         result = false
        //         break
        //     }
        // }
        // console.log(result)


        // Convert the first letter of each word in a string to uppercase:
        // const string = "all hail the king"
        // let newArr = string.split(" ")

        // let newArr2=newArr.map((val)=>{
        // return val.replace(val[0],val[0].toUpperCase())
        // })

        // console.log(newArr2.join(" "))


        // Find the longest word in a given string:
        // let str = "I AM INVIETABLE RIGHT"
        // let newArr = str.split(" ")
        // let maxLength = 0
        // let val = ""

        // for(let i=0;i<newArr.length;i++){
        //     if((newArr[i].length) > maxLength){
        //         maxLength = newArr[i].length
        //         val = newArr[i]
        //     }
        // }
        // console.log(`Word is ${val}, Length is ${maxLength}`)


        // Write a function to check if a string contains only digits:

    //     let string = "01234"
    //     let str = "0s0ff"

    //     function isDigit(string){
            
    //         if(!Number(string)) return console.log `The String contains non-numeric characters`
    //         else return console.log `The string contains only digits`
    //     }

    //    isDigit(string)

        // Find the most frequent character in a string:
    //     let str = "mmmllllkkkkkkkjjj"
    //     let countMap = new Map()
    //     let strArr = [...str]
    //     let maxVal = 0
    //     let maxKey = ""

    //     strArr.forEach((item)=>{
    //         countMap.set(item,Number((countMap.get(item) || 0)+1))
    //     })

    //    for(let [key,value] of countMap){
    //         if(value>maxVal){
    //             maxVal = value
    //             maxKey = key
    //         }    
    //    }

    //    console.log(`Max Key: ${maxKey} & Max Value: ${maxVal}`)

        
        // Remove all non-alphanumeric characters from a string:
        // let str = "a5d%@bc89.4"
        // let newStr = str.replace(/[^a-zA-Z0-9]/g,"")
        // console.log(newStr)
        
        // Find the length of the longest substring without repeating characters:
        // let str = "ababsdffg"
        


        // Reverse the words in a sentence while keeping their order:
        

        //HERE ARE FIVE PRACTICAL QUESTIONS FOR SET IN JAVASCRIPT:

        // Add and Check Uniqueness:
        // Create a Set and add the numbers 1, 2, 3, 4, 3, 2, 1.
        // Print the Set and check how many unique values it has.

        // Check Value Presence:
        // Add five city names to a Set.
        // Check if "Delhi" exists in the Set.

        // Remove Duplicates from an Array:
        // Given an array const nums = [5, 10, 15, 10, 5, 20];,
        // Use a Set to remove duplicates and return a new array.

        // Find Common Elements Between Two Arrays:
        // Given arr1 = [1, 2, 3, 4] and arr2 = [3, 4, 5, 6],
        // Use a Set to find and print common elements.

        // Iterate Over a Set:
        // Create a Set of five random words.
        // Iterate over the Set and print each word in uppercase.
        