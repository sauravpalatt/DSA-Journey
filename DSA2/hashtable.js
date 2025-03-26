

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let hashedVal = 0
//         for(let i=0;i<key.length;i++){
//             hashedVal += key.charCodeAt(i)
//         }
//         return hashedVal % this.size
//     }

//     set(key,val){
//         let index = this.hash(key)

//         if(!this.table[index]){
//             this.table[index] = [[key,val]]
//         }else{
//             let bucket = this.table[index]
//             let found = false
    
//             for(let char of bucket){
//                 if(char[0]===key){
//                     char[1] = val
//                     found = true
//                     break
//                 }
//             }
//             if(!found){
//                 bucket.push([key,val])
//             }
//         }
//     }

//     get(key){
//         let index = this.hash(key)
//         let bucket = this.table[index]
//         for(let char of bucket){
//             if(char[0]===key){
//               return char[1]
//             }
//         }
//         return "key not found"
//     }

//     remove(key){
//         let index = this.hash(key)
        
//         let bucket = this.table[index]
//         for(let char of bucket){
//             if(char[0]===key){
//             bucket.splice(bucket.indexOf(char),1)
//             break
//             }
//         }
//     }

//     print(){
//         for(let i=0;i<this.size;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let hash = new Hashtable(5)

// hash.set("theertha",19)
// hash.set("saurav",24)
// hash.set("mammootty",73)
// hash.set("mohanlal",69)

// console.log(hash.remove("saurav"))

// hash.print()


// const Hashtable = function(size){
//     this.table = new Array(size)
//     this.size = size
// }

// Hashtable.prototype.hash = function(key){
//     let hashedVal = 0

//     for(let i=0;i<key.length;i++){
//         hashedVal += key.charCodeAt(i)
//     }
//     return hashedVal % this.size
// }

// Hashtable.prototype.set = function(key,val){
//     let index = this.hash(key)
//     if(! this.table[index]){
//         this.table[index] = [[key,val]] // setting occurs over this line...
//     }
//         let bucket = this.table[index]
//         let found = false

//         for(let item of bucket){
//             if(item[0]===key){
//                 item[1] = val
//                 found = true
//                 break
//             }
//         }
//         if(!found){
//             bucket.push([key,val])
//         }
    
// }

// Hashtable.prototype.get = function(key){
//     let index = this.hash(key)
//     let bucket = this.table[index]

//     for(let char of bucket){
//         if(char[0]==key){
//           return char[1]
//         }
//     }
//     return "KEY NOT FOUND!!!"
// }

// Hashtable.prototype.print = function(){
//    for(let i=0;i<this.table.length;i++){
//     if(this.table[i]){
//         console.log(i,this.table[i])
//     }
//    }
// }

// let hash = new Hashtable(5)

// hash.set("SAURAV",24)
// hash.set("MAMMOOTTY",72)
// hash.set("MOHANLAL",61)
// console.log(hash.get("MAMMOOTTY"))

// hash.print()


// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let hashedVal = ""

//         for(let i=0;i<key.length;i++){
//             hashedVal += key.charCodeAt(i)
//         }
//         return hashedVal % this.size
//     }

//     set(key,val){
//         let index = this.hash(key)
//         this.table[index] = val
//     }

//     get(key){
//         let index = this.hash(key)
//         return this.table[index]
//     }
// }

// function twoSum(arr,tgt){
//     let hashTable = new Map()

//     for(let i=0;i<arr.length;i++){
//         let compliment = tgt - arr[i]
//         if(hashTable.has(compliment)){
//             return [hashTable.get(compliment),i]
//         }else{
//             hashTable.set(arr[i],i)
//         }
//     }
//     return "Compliment Not Found!!!"
// }

// console.log(twoSum([1,3,5,4,7],10))





// let str1 = "listten"
// let str2 = "silent"

// function isAnagram(str1,str2){
//     if(str1.length !== str2.length) return false

//     let ht = new Hashtable(20)

//     let count;

//     for(let char of str1){
//      count = (ht.get(char) || 0)+1  
//      ht.set(char,count)
//     }

//     for(let char of str2){
//         count = (ht.get(char) || 0)
//         console.log(count)
//         if(count === 0) return false
//         else ht.set(char,count-1)
//     }

//     return true
// }

// console.log(isAnagram(str1,str2))
