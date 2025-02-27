// let str1 =  "malayali" 
// let str2 =  "malayali"

//IS ANAGRAM:

// function isAnagram(str1,str2){
//     let count = {}
    
//     for(let val of str1){
//     count[val] = (count[val] || 0) + 1
//     }
    
//     for(let val of str2){
//     if(!count[val]) return false
//     else count[val]--
//     }
//     return true
// }
// console.log(isAnagram(str1,str2))


//FREQUENCY OF STRING VALUES:

// let string = "MALAYALAM"
// let newStr = string.split("")
// let resArr = []

// for(let i=0;i<newStr.length;i++){
//     let count = 1
//     for(let j=0;j<newStr.length;j++){
//         if(newStr[i]==newStr[j] && i!=j){
//             count++
//         }
//     }
//     resArr.push(count)
// }

// console.log(resArr)


//GROUP ANAGRAMS:

// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]
// let map = new Map()

// let obj= {name:"Saurav",age:24}

// arr.forEach((val)=>{
// let sortedVal = val.split("").sort().join("")

// if(!map.has(sortedVal)){
//     map.set(sortedVal,[])
// }else{
//     map.get(sortedVal).push(val)
// }
// })

// for(let [key,val] of map){
//     console.log(`key: ${key} & Value: ${val}`)
// }

// let str = "programming"
// let n = str.length
// let strArr=[];

// for(let i=0;i<n-1;i++){
// strArr[i]=str[i]
// }

// let res = strArr.join("")

// console.log(res)


                                                // EPIC 10 QNS                                          

//1. EASY REVERSE METHOD:

// let str1 = "silent"
// let str2 = "listen"

// if(str1.split("").sort().join("")==str1.split("").sort().join("")){
//     console.log("true")
// }
// else console.log("false") 


//2.REVERSE METHOD:

// let str1 = "silent"
// let str2 = "listen"

// function isAnagram(str1,str2){

//     if(str1.length !== str2.length) return false

//     let obj = {}
    
//     for(let char of str1){
//     obj[char] = (obj[char] || 0)+1
//     }
    
//     for(let chr of str2){
//         if(!obj[chr]) return false
//         else obj[chr]--
//     }  
//     return true  
    
// }

// console.log(isAnagram(str1,str2))


// let arr = ["eat", "tea", "tan", "ate", "nat", "bat"]

// let map = new Map()

// arr.forEach((item)=>{
//     let sortedVal = item.split("").sort().join("")

//     if(map.has(sortedVal)){
//         map.get(sortedVal).push(item)
//     }else{
//         map.set(sortedVal,[])
//     }
// })

// for(let [key,val] of map){
//     if(val.length === 0){
//         map.set(key,["thalapathy"])
//     }
// }

// console.log(map)

//LONGEST COMMON SUBSTRING:

// let str1 = "abcdeeyffg"
// let str2 = "jgcdeehfg"
// let longest = ""

// for(let i=0;i<str1.length;i++){
//     for(let j=i+1;j<=str1.length;j++){
//         let substring = str1.slice(i,j)
//         console.log(substring)
//         if(str2.includes(substring) && substring.length > longest.length){
//         longest = substring
//         }
//     }
// }


                                            //2 LOOPS 2 STRINGS:
// let str = "HELLO WORLD"
// let strArr1 = str.slice(0,5).split("")
// let strArr2 = str.slice(6,11).split("")

// let s1=0,s2=0,e1=strArr1.length-1,e2=strArr2.length-1

// while(s1<e1){
//     [strArr1[s1],strArr1[e1]] = [strArr1[e1],strArr1[s1]]
//     s1++
//     e1--
// }

// while(s2<e2){
//     [strArr2[s2],strArr2[e2]] = [strArr2[e2],strArr2[s2]]
//     s2++
//     e2--
// }

// let resStr = strArr1.concat(" ",strArr2).join("")
// console.log(resStr)

                                            //1 LOOP 1 ARRAY:

// let str = "HELLO WORLD"
// let strArr= str.split("")

// let s1=0,e1=4,s2=6,e2=10

// while(s1<e1||s2<e2){

//     if(s1<e1){
//         [strArr[s1],strArr[e1]]=[strArr[e1],strArr[s1]]
//         s1++
//         e1--
//     }

//     if(s2<e2){
//         [strArr[s2],strArr[e2]]=[strArr[e2],strArr[s2]]
//         s2++
//         e2--
//     }
// }

// console.log(strArr.join(""))

                                                //FULL STRING REVERSE:
// let str = "RAMAYANA"
// let strArr = str.split("")

// strArr.forEach((item,idx)=>{
//     if(idx<(strArr.length-1)/2)
//     [strArr[idx],strArr[strArr.length-1-idx]] = [strArr[strArr.length-1-idx],strArr[idx]]
// })

// console.log(strArr.join(""))

// let str1 = "listen"
// let str2 = "siient"
// let output=true

// let map = new Map()

// for(let char of str1){
//     map.set(char,(map.get(char)||0)+1)
// }

// for(let char of str2){
//     console.log(map)
//     if(map.get(char) === 0){
//     output = false
//     break
//     }else{
//         // console.log(map)
//        map.set(char, map.get(char) - 1);
//     }
// }

// if(output==true){
//     console.log("is anagram")
// }else{
//     console.log("is not anagram")
// }


// let str1 = "listenn"
// let str2 = "silent"
// let output = true

// let obj = {}

// for(let char of str1){
//     obj[char] = (obj[char] || 0)+1
// }

// for(let char of str2){
//     if(!obj[char] || str1.length!==str2.length) output = false
//     else{
//         obj[char]--
//     }
// }

// output ? console.log("Is Anagram"):console.log("Is Not Anagram")

                                            //SUBSTRING:

// let str1 = "abcdefgh"
// let str2 = "ddbcdegf"
// let maxStr = ""

// for(let i=0;i<str1.length;i++){
//     for(let j=i+1;j<=str1.length;j++){
//         let resString = str1.slice(i,j)
//         if(str2.includes(resString) && resString.length > maxStr.length){
//             maxStr = resString
//         }
//     }
// }

// console.log(maxStr)

// let str1 = "abcabdefggh"
// let set = new Set()
// let maxStr = ""


// for(let i=0;i<str1.length;i++){
//     set.clear()
//     let totalStr = ""
//     for(let j=i;j<str1.length;j++){
//         if(!set.has(str1[j])){
//             set.add(str1[j])
//             totalStr += str1[j]
//         }else break
//     }
//     if(totalStr.length > maxStr.length){
//         maxStr = totalStr
//     }
// }

// console.log(maxStr)


// let str = "abk14cd1h3"
// let strArr = str.split("")


// strArr.forEach((item,idx)=>{
//     if(item === "1"){
//         strArr.splice(idx,1)
//     }
// })

// console.log(strArr.join(""))


// let arr = [1,2,2,3,4,4,5,1]
// let resArr = []

// let obj = {}

// for(let i=0;i<arr.length;i++){
//     let count = 1
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]==arr[j] && i!=j){
//             count++
//         }
//     }
//     obj[arr[i]]=count++
// }

// console.log(obj)

// let arr = [1,2,3,4,5]

// function set(arr){
//     let temp = []
//     let result = []

//     function subSet(arr,i){
//     if(i == arr.length) return result.push([...temp])

//        temp.push(arr[i])
//        subSet(arr,i+1)
//        temp.pop()
//        subSet(arr,i+1)
//     }
//     subSet(arr,0)
//     return result
// }

// console.log(set(arr))

















