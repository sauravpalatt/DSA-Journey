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

    insAtEnd(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode

        }

        this.size ++
    }

    printList(){
        let arr = []
        let current = this.head

        while(current){
           arr.push(current.data)
           current = current.next
        }
        console.log(arr.join("-->"))
    }

    isCyclic(){
        let fast = this.head
        let slow = this.head

        while(fast != null && fast.next != null){

            fast = fast.next.next
            slow = slow.next

            if(fast === slow) {
              console.log("Is Cyclic")
              return true
            } 

            console.log("Not Cyclic")
            return false
        }
    }

    insAt(idx,data){
        const newNode = new Node(data)

        if(idx<0 || idx>this.size) throw new Error("Invalid Index")
        if(idx === 0){
           newNode.next = this.head
           newNode = this.head
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

    //DELETE FROM BEG:

    delFromBeg(){
        if(!this.head) throw new Error ("NO ITEMS ON LIST FOUND !!!")
        if(this.head === this.tail) {
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
    }

    //DELETE AT:
    delAt(val){
        let idx = val-1
        if(idx < 0 || idx > this.size) throw new Error("Index not found")
        if (idx === 0) return this.head = null
        else{
           let current = this.head
          for(let i=0;i<idx-1;i++){
            current = current.next
          }  
          current.next = current.next.next
        }
        this.size--
    }

    //REVERSE:

  reverse(){
    let current = this.head
    let prev = null

    while(current){
        let nextNode = current.next
        current.next = prev
        prev = current
        current = nextNode
    }
    this.head = prev
  }
}

const ll = new linkedList()

ll.insAtEnd(1)
ll.insAtEnd(2)
ll.insAtEnd(3)
ll.insAtEnd(4)
ll.insAtEnd(5)
ll.insAtEnd(6)

ll.reverse()

ll.printList()
// console.log(ll)

// ll.insAt(2,10)


//FABINOCCI CHECK:
// function fabinocci(num){
//     if(num <=1){
//         return num
//     }else{
//         let result = fabinocci(num-1)+fabinocci(num-2)
//         return result
//     }
// }
// console.log(fabinocci(10))

