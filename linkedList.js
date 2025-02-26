
// class Node{
//     constructor(data,next=null){
//         this.data = data
//         this.next = next
//     }
// }

// class linkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }


//     printList(){
//         let arr = [],
//         current = this.head

//         while(current){
//             arr.push(current.data)
//             current = current.next
//         }

//         return console.log(arr.join(' --> '))

//     }

//     //Insert node at the beginning:

//     insNodeBeg(data){
//      const newNode = new Node(data) //{10,next=null}
      
//      if(!this.head){
//         this.head=newNode
//         this.tail=newNode
//      }else{
//         newNode.next = this.head //old head moves to pointer
//         this.head = newNode //newNode becomes the new head
//      }

//      this.size ++
//     }

//     //Insert node at the end:

//     insNodeEnd(data){
//         const newNode = new Node(data)

//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }

//         this.size ++
//     }


//     //deleteLastNode:
//     lastNodeDel(){

//         if(!this.head) return undefined
//         if(this.head === this.tail){
//             this.head = null
//             this.tail = null
//         }else{
//             let current = this.head
//             let temp 

//             while(current.next){
//                 temp = current
//                 current = current.next
//             }
//             temp.next = null
//             this.tail = temp
//         }
       
//         this.size --
//     }

//     //deleteFirstNode:
//     firstNodeDel(){
//         if(!this.head) return undefined
//         if(this.head === this.tail){
//             this.head = null
//             this.tail = null
//         }else{
//             this.head =this.head.next
//         }

//         this.size --
//     }

//     //insertAt:

//     insertAt(idx,data){
//         const newNode = new Node(data)
//         console.log(`this.size: ${this.size}`)
//         if(idx<0 || idx>this.size) throw new Error ("Index Is Invalid")

//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode
//         }else if(idx === 0){
//             newNode.next = this.head
//             this.head = newNode
//             return
//         }else{
//             let current = this.head
//             for(let i=0;i<idx-1;i++){
//                 current = current.next
//             }
//             newNode.next = current.next
//             current.next = newNode

//         }
//     } 
    
//     deleteAt(idx){

//         if(idx<0 || idx>this.size) throw new Error("Size Is Invalid...")

//         if(idx === 0){
//             this.head = this.head.next
//             return
//         }else{
//             let current = this.head
//             for(let i=0;i<idx-1;i++){
//                 current = current.next
//             }
//             current.next = current.next.next
//         }
//         this.size--
//     }

//     //reverse:
//     reverse(){
//         let current = this.head
//         let prev = null,
//         next
        
//         while(current){
//             next = current.next
//             current.next = prev
//             prev = current
//             current = next
//         }

//         this.tail = this.head
//         this.head = prev
//     }

//     isCyclic(){
//         let fast = this.head,
//         slow = this.head

//         while(fast!=null && fast.next != null){
//             fast = fast.next.next
//             console.log("a",fast)
//             slow = slow.next
//             console.log("b",slow)
//             if(fast === slow) return true
//         }

//         return false
//     }

//     isDuplicate(){
//         let current = this.head

//         while (current && current.next){
//             if(current.data === current.next.data){
//                 current.next = current.next.next
//             }else{
//                 current = current.next
//             }
//         }
//     }
// }

// let ll = new linkedList()

// ll.insNodeBeg(4);
// ll.insNodeBeg(5);
// ll.insNodeBeg(5);
// ll.insNodeBeg(6);
// ll.insNodeBeg(7);

// ll.isDuplicate();

// const arr = [1,2,3,4,5]

// function arrToLL(arr){
//     let newll = new linkedList()
   
//     for (const element of arr) {
//         newll.insNodeEnd(element)
//     } 
//     newll.printList()
// }

// arrToLL(arr)


// function llToArr(list){
//     let arr = []
//     let current = list.head

//     while(current){
//         arr.push(current.data)
//         current = current.next
//     }
//     return arr
// }

// console.log(llToArr(ll))


//ARRAY TO LINKEDLIST:
// let array = [1,2,3]

// function arrToLL(arr){
//     let ldList = new linkedList()
//     for(let data of arr){
//         ldList.insNodeEnd(data)
//     }
//     ldList.printList()
// }

// arrToLL(array)

//LINKEDLIST TO ARRAY

// function llToArr(list){
//     const arr = []
//     let current = list.head

//     while(current){
//         arr.push(current.data)
//         current = current.next
//     }
//     return arr
// }

// console.log(llToArr(ll))

// console.log("List after removing duplicates:");
// ll.printList();

//console.log(ll)
// console.log(ll.isCyclic())
// ll.reverse()

// ll.deleteAt(2)

// ll.insNodeEnd(20)
// ll.lastNodeDel()


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
        return console.log(arr.join("==>"))
    }

    insNodeBeg(data){
        let newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }

    deleteAt(idx){
        let current = this.head
        if(idx==0){
            this.head=current.next
        }else{
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

ll.insNodeBeg(3)
ll.insNodeBeg(2)
ll.insNodeBeg(1)

ll.reverse()

ll.printList()





