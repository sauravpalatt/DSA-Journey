class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    getSize() {
        return this.size;
    }
    printList() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return console.log(result.join(' -> '));

    }
    addLast(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
    }
    addFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    removeLast() {
        if (!this.head) return undefined;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            let prev;
            while (current.next) {    // {6:{5:{4:{3:,next = null}}}}
                prev = current;
                current = current.next;
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--
    }
    removeFirst() {
        if (!this.head) return undefined;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.size--;
    }
    addAt(index, data) {
        const newNode = new Node(data);
        if (index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;                                  //0   1  2   3   4
        }                                           //{6: {5: 4: {3: {2:next = null}}}}
        let current = this.head;                   //             >>>>
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }
        newNode.next = current.next;    //current node gives its power to new node like 3 -> 2 now 10-> 2
        current.next = newNode;         //3.next = 10
        this.size++;
    }
    removeAt(index) {
        if (index < 0 && index > this.getSize) throw new Error('Invalid Index !!');
        if (index === 0) {
            this.head = this.head.next;
            return;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            current.next = current.next.next;
        }
        this.size--;
    }

    reverse(){
        let prev = null,
            current = this.head;    //  {6: -> null {4: {3: {2: next = null }}}
        while(current){             
            let next = current.next;  
            current.next = prev;  
            prev = current;
            current = next;
        }
        this.tail = this.head;
        this.head = prev;
    }

    isCyclic(){
        let slow = this.head;
        let fast = this.head;

        while(fast!==null && fast.next!==null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow === fast) return true;
        }
        return false;
    }
    
    midOf(){
        let slow = this.head;
        let fast = this.head;

        while(fast!==null && fast.next!==null){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }
}

const neoList = new LinkedList();

function arrayToLinkedList(arr){
    const list = new LinkedList()
    for(let data of arr){
        push(list,data);
    }
}

function linkedListToArray(list){
    let arr = [];
    let current = list.head;

    while(current.next){
        arr.push(current.data)
        current = current.next;
    }
    return arr;
}