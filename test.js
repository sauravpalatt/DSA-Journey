class Node{
    constructor(data,next=null){
        this.data = data
        this.next = next
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

    printList(){
        let arr = []
        let current = this.head

        while(current){
            arr.push(current.data)
            current = current.next
        }

        return console.log(arr.join("-->"))
    }


    insertNodeBeg(data){
        let newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
    }

    insertNodeAt(idx,data){
        let newNode = new Node(data)

        if(idx === 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            let current = this.head

            for(let i=0;i<idx-1;i++){
                current = current.next
            }

            let temp = current.next
            current.next = newNode
            newNode.next = temp
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

    midOf(){
        let slow = this.head
        let fast = this.head

        while(fast!=null && fast.next != null){
            fast = fast.next.next
            slow = slow.next
        }
        return slow
    }
}

const ll = new linkedList()

ll.insertNodeBeg(9)
ll.insertNodeBeg(8)
ll.insertNodeBeg(7)
ll.insertNodeBeg(6)
ll.insertNodeBeg(5)
ll.insertNodeBeg(4)
ll.insertNodeBeg(3)
ll.insertNodeBeg(2)
ll.insertNodeBeg(1)

// ll.insertNodeAt(0,0)

// ll.reverse()

console.log(ll.midOf().data)

ll.printList()

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

//Hamming Distance:




