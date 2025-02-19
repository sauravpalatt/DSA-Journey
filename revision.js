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
      let current = this.head,
      prev = null

      while(current){
        let newNode = current.next
        current.next = prev
        prev = current
        current = newNode
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

// ll.reverse()

// ll.printList()

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


//SUB-ARRAY QN:

// function arraySet(arr){
//     let temp =[]
//     let result = []

//     function subArraySet(nums,i){
//         if(i === nums.length) return result.push([...temp])
            
//             temp.push(nums[i])
//             subArraySet(nums,i+1)
//             temp.pop()
//             subArraySet(nums,i+1)
//     }

//     subArraySet(arr,0)
//     return result
// }

// console.log(arraySet([1,2,3]))


//LINEAR SEARCH:

// const arr = [2,1,4,3,8,6,5,9]

// function linearSearch(arr,target){
//     let result = []
    
//     for(let i=0;i<arr.length;i++){
//         if(target === arr[i]) result.push(i)
//     }
//     return result.length === 0 ? -1 : result ;
// }



// console.log(linearSearch(arr,6))

// //BINARY SEARCH:

// let arr = [1,2,3,4,5,6,7,8,9,10,11]


// function binarySearch(nums,target){
//     let start = 0
//     let end = nums.length-1

//     while(start<=end){

//     let middle = (start+end)/2
    
//     if(nums[middle] === target) return console.log(`Middle is in position: ${middle}`)
//     if(middle < target) start = middle + 1
//     if(middle > target) end = middle - 1

//     }
// }

// binarySearch(arr,9)



//REVISION PART 2:

//Multiply

// const arr = [1,2,3,4,5]

// function multiply(arr){
//     if(arr.length <= 0) return 1
//     return arr[arr.length-1] * multiply(arr.splice(0,arr.length-1))
// }
// console.log(multiply(arr))


// remove duplicates in a sorted singly linked list:
// add element at beginning
// array to ll & ll to array

const arr1 = [1,2,4]
const arr2 = [1,3,4]

const combArr = [...arr1,...arr2]

const newArr=combArr.sort((a,b)=>a-b)

function arrToLL(newArr){
    
}







