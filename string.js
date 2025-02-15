
// let str = "MALAYALAM"

// function isPalindrome(str){
//     let length = str.length-1

//     for(let i=0;i<length;i++){
//         if(str[i] !== str[length - i]) return console.log("is not palndrome")
//     }
//     return console.log("is palindrome...")
// }

// isPalindrome(str)

let str1 = "MALAYALAM"
let str2 = "MALAYALAM"

function hammingTest(x,y){
    if(x.length !== y.length) throw new Error ("STRING COUNT HAS MISMATCH...")
    
        let distance = 0

        for(let i=0;i<x.length;i++){
            if(x[i] !== y[i]){
                distance++
            }
        }

        return distance === 0 ? console.log("perfect string") : console.log("hamming distance:",distance)

}

hammingTest(str1,str2)