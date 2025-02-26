// class Node{
//     constructor(data,next=null){
//         this.data = data
//         this.next = next
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }

//     printList(){
//         let arr = []
//         let current = this.head

//         while(current){
//             arr.push(current.data)
//             current = current.next
//         }

//         return console.log(arr.join("-->"))
//     }


//     insertNodeBeg(data){
//         let newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             newNode.next = this.head
//             this.head = newNode
//         }
//     }

//     insertNodeAt(idx,data){
//         let newNode = new Node(data)

//         if(idx === 0){
//             newNode.next = this.head
//             this.head = newNode
//         }else{
//             let current = this.head

//             for(let i=0;i<idx-1;i++){
//                 current = current.next
//             }

//             let temp = current.next
//             current.next = newNode
//             newNode.next = temp
//         }

//     }

//     reverse(){
//         let current = this.head
//         let prev = null

//         while(current){
//             let nextNode = current.next
//             current.next = prev
//             prev = current
//             current = nextNode
//         }
//         return this.head = prev
//     }

//     midOf(){
//         let slow = this.head
//         let fast = this.head

//         while(fast!=null && fast.next != null){
//             fast = fast.next.next
//             slow = slow.next
//         }
//         return slow
//     }
// }

// const ll = new linkedList()

// ll.insertNodeBeg(9)
// ll.insertNodeBeg(8)
// ll.insertNodeBeg(7)
// ll.insertNodeBeg(6)
// ll.insertNodeBeg(5)
// ll.insertNodeBeg(4)
// ll.insertNodeBeg(3)
// ll.insertNodeBeg(2)
// ll.insertNodeBeg(1)

// ll.insertNodeAt(0,0)

// ll.reverse()

// console.log(ll.midOf().data)

// ll.printList()

// class Node {
//     constructor(data,next,prev){
//         this.data = data
//         this.next = next
//         this.prev = prev
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     printList(){
//         let current = this.head
//         let arr = []

//             while(current){
//                arr.push(current.data) 
//                current= current.next
//             }

//             return console.log(arr.join("-->"))
        
//     }

//     insertNodeAtBeg(data){
//         const newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             newNode.next = this.head
//             this.head.prev = newNode
//             this.head = newNode
//         }
//         this.size ++
//     }
   
//     insertNodeAt(idx,data){
//         const newNode = new Node(data)
        
//         if(idx === 0){
//             newNode.next = this.head
//             this.head = newNode
//         }else{
//             let current = this.head
//             for(let i=0;i<idx-1;i++){
//                 current = current.next
//             }
//             let temp = current.next
//             current.next = newNode
//             newNode.next = temp
//         }
//     }
// }

// const ll = new linkedList()


// ll.insertNodeAtBeg(23)
// ll.insertNodeAtBeg(45)
// ll.insertNodeAtBeg(36)

// ll.insertNodeAt(3,5)

// ll.printList()

// ll.printList()

// // console.log(ll)

// const str = "management"
// const newArr = Array.from(str)


//Palindrome:-

// let str = "MANAANAM"
// let result;

// function isPalindrome(str){
    //     let length = str.length-1
    
    //     if(str.length === 0) return true
    //     if(str[0]!==str[length]) return false
    //     else {
        //         result = str.slice(1,length)
        //         return isPalindrome(result)
        //     }
        // }
        
        // console.log(isPalindrome(str))
        
//Fabinocci:-
        
        // function Fabinocci(num){
            //     if(num <= 1) return num
            //     else{
                //         return Fabinocci(num-1) + Fabinocci(num-2)
                //     }
                // }
                
                // console.log(Fabinocci(4))
                
//Hamming Distance:-
// let str1 = "listen"
// let str2 = "silrnt"

//Binary Search:
// const arr = [17,24,36,54,55,63,77]

// function binarySearch(arr,target){
//     let start = 0
//     let end = arr.length-1

//     while(start<end){
//         let middle = (start+end)/2

//         if(arr[middle] === target) return console.log(`value found at index: ${middle}`)
//         if(arr[middle] < target) start = middle+1
//         if(arr[middle] > target) end = middle-1
//     }
// }
// // binarySearch(arr,24)


//Custom Array Range:-

// function arrayRange(stNum,enNum){
//     if(stNum > enNum) return []
//     else{
//         let result=arrayRange(stNum+1,enNum)
//         result.unshift(stNum)
//         return result  
//     }
// }

// console.log(arrayRange(0,9))


//Deletion in ll:-

class Node{
    constructor(data,next=null,prev=null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    printList(){
        let current = this.head
        let arr = []

        while(current){
            arr.push(current.data)
            current = current.next
        }
        return console.log(arr.join("-->"))
    }

    insNodeBeg(data){
        let newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
    }

    insertNodeAt(idx,data){
        let newNode = new Node(data)

        if(idx == 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            let current = this.head
            let temp;

            for(let i=0;i<idx-1;i++){
                current = current.next
            }
            temp = current.next
            current.next = newNode
            newNode.prev = current
            newNode.next = temp 
        }
    }

    delNodeBeg(){
        if(!this.head) throw new Error("No List Found...")
        if(this.head===this.tail){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next 
        }
    }

    delNodeEnd(){
    if(!this.head) throw new Error("No List Found...")
        if(this.head===this.tail){
            this.head = null
            this.tail = null
        }else{
            let current = this.head
            let temp;
           while(current.next){
            temp = current
            current= current.next
           }
           temp.next = null
           this.tail = temp
        }
    }

    deleteAt(idx){
        if(!this.head) throw new Error("no list found!!!")
        if(idx==0){
            this.head = this.head.next
        }else{
            let current = this.head
            for(let i=0;i<idx-1;i++){
                current = current.next
            }
            current.next = current.next.next
        }
    }

    reverse(){
        let current = this.head
        let prev = null
        
        while(current){
            let nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode
        }
        return this.head = prev
    }
}

const ll = new linkedList()
const lk = new linkedList()

ll.insNodeBeg(3)
ll.insNodeBeg(2)
ll.insNodeBeg(1)

ll.insertNodeAt(0,0)
ll.insertNodeAt(4,4)
ll.insertNodeAt(3,2.5)

// ll.delNodeEnd()

// ll.deleteAt(3)

ll.reverse()




// lk.delNodeBeg()


ll.printList()



//DLL:-

// let arr = [1,4,3,5]
// let max = 0
// let secMax = 0

// arr.forEach((item)=>{

//     if(item > max){
//         secMax = max
//         max= item
//     }else if(max>item>secMax)

// })

let x =8
r=7
t=6
if(x>=r>=t){
    console.log('hello')
}





