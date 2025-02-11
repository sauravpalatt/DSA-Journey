class Node{
    constructor(data,next=null,prev=null){
       this.data = data
       this.prev = prev
       this.next = next
    }
}

class dLinkedList{
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

    //ADDING DATA:

    //add first:
    insertAtBeg(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size ++
    }

    //add at end
    insertAtEnd(data){
        const newNode = new Node(data)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail.prev = this.tail
            this.tail = newNode
        }
        this.size ++
    }

    //add anywhere
    insertAt(idx,data){   

        let newNode = new Node(data),
        size = this.size

        if(idx < 0 || idx > size) throw new Error("Invalid index")

        if(idx === 0){
          newNode.next = this.head
          this.head.prev = newNode
          this.head = newNode
        }else{
            let current = this.head
            for(let i=0;i<idx-1;i++){
            current = current.next
            }
                newNode.prev = current
                newNode.next = current.next
                current.next = newNode
            }
            this.size ++
        }

    removeAt(idx){
        if(idx < 0 ||idx > this.size) throw new Error("Invalid Index")

        if(idx === 0){
            this.head.next = this.head
        }else{
            let current = this.head
            for(let i=0;i<idx-1;i++){
                current = current.next
            }
            current.next = current.next.next
            current.next.prev = current
        }   
        this.size ++
    }    
}

const ll = new dLinkedList()

ll.insertAtEnd(10)
ll.insertAtEnd(20)
ll.insertAtEnd(30)
ll.insertAtEnd(40)

ll.removeAt(2)

ll.printList()


