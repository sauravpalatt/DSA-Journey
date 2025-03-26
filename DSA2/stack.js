// class Stack{
//     constructor(){
//         this.stack = []
//     }

//     push(data){
//         return this.stack.push(data)
//     }

//     pop(){
//         if(this.isEmpty()){
//             return "SORRY, STACK IS EMPTY SO CAN'T DO POP!!!"
//         }else{
//             return this.stack.pop()
//         }
//     }

//     peep(){
//         if(this.isEmpty()){
//             return "STACK IS EMPTY,SO NOTHING TO PEEP..."
//         }
//         return this.stack[this.length()-1]
//     }

//     isEmpty(){
//         return this.length() === 0    
//     }

//     print(){
//         console.log(this.stack)
//     }

//     length(){
//         return this.stack.length
//     }
// }

// const stack = new Stack()

// stack.push(5)
// stack.push(4)
// stack.push(3)
// stack.push(2)
// stack.push(1)

// stack.print()

// let str = "THE SKY IS BLUE"
// let strArr = str.split(" ")
// let stack = []

// function reverseWords(strArr){

//     for(let i of strArr){
//         stack.unshift(i)
//     }
//     return stack.join(" ")
// }

// console.log(reverseWords(strArr))

// function reverse(str){
// let strArr = str.split(" ")
// let stack = []

// for(let word of strArr){
//     stack.push(word)
// }

// let revString = ""

// while(stack.length){
//     let current = stack.pop()

//     if(current){
//         revString += current + " "
//     }
// }

// return revString.trim()

// }

// console.log(reverse("THE SKY   BLUE"))

let a1 = "[]{]"
let a2 = "{([])}"
let a3 = "["

function isValidParenthesis(str){
    let stack = []
    for(let char of str){
        if(char === "[" ||char === "{" ||char === "("){
            stack.push(char)
            
        }else if(char === "]" ||char === "}" ||char === ")"){
            
            if(stack.length === 0) {
                return false
            }   
            let value = stack.pop()
    
            if(char === "]" && value !== "["||char === ")" && value !== "("||char === "}" && value !== "{"){
                return false
            }
        }
    }
    return stack.length === 0
}

console.log(isValidParenthesis(a3))

// class Stack{
//     constructor(){
//         this.stack = []
//     }

//     push(data){
//       return this.stack.push(data)
//     }

//     pop(){
//         if(this.stack.length == 0) return "Array is empty"
//         else
//         return this.stack.pop()
//     }

//     peek(){
//         if(this.stack.length === 0) return "Underflow in stack!!! Can't perform peek"
//         else return this.stack[this.stack.length-1]
//     }

//     size(){
//         return this.stack.length
//     }

//     print(){
//        console.log(this.stack)
//     }
// }

// let s = new Stack()

// s.push(5)
// s.push(4)
// s.push(3)
// s.push(2)

// console.log(s.pop())
// console.log(s.peek())

// s.print()

                                //REVERSE A STRING USING STACK:

// let str = "THE SKY IS BLUE"

// function reverse(str){
//     let stack = str.split(" ")

//     let newStr = ""
//     let length = stack.length

//     for(let i=0;i<length;i++){
//         let word = stack.pop()
//         newStr += " "+word
//     }
//     return newStr.trim()
// }

// console.log(reverse(str))

                                    //CIRCULAR QUEUE:-




                                    //QUEUE USING STACK :-

// class Queue{
//     constructor(){
//         this.s1=[]
//         this.s2=[]
//     }

//     enqueue(data){
//         return this.s1.push(data)
//     }

//     dequeue(){
//         while(this.s1.length!==1){
//             this.s2.push(this.s1.pop())
//         }

//         let poppedElem = this.s1.pop()

//         while(this.s2.length!==0){
//             this.s1.push(this.s2.pop())
//         }
//         return poppedElem
//     }

//     print(){
//         return console.log(this.s1)
//     }
// }

// let q = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.dequeue()
// q.print()

// let str = "SAURAV"

// function strReverse(str){
//     let stack = str.split("")
//     let maxString = ""

//     for(let i=0;i<str.length;i++){
//         maxString += stack.pop()
//     }

//     return maxString
// }

// console.log(strReverse(str))

// let p1 = "[{]"
// let p2 = "[{()}]"
// let p3 = "((("
// let p4 = ""

// function validParenthesis(symbol){
//     let stack = []
//     let top
//     if(symbol.length===0) return false
//     else{
//         for(let val of symbol){
//             if(val==="(" || val ==="{" || val ==="["){
//                 stack.push(val)
//             }else{
//                 top = stack[stack.length-1]
//                 if((val===")" && top !== "(")||(val==="}" && top !== "{")||(val ==="]" && top !=="[")){
//                     return false
//                 }
//                 stack.pop()
//             }
//         }
//     }
//     return stack.length===0
// }

// console.log(validParenthesis(p4))













