
// class Queue{
//     constructor(){
//         this.queue = []
//     }

//     enqueue(element){
//         this.queue.push(element)
//     }

//     dequeue(){
//         if(this.isEmpty()){
//             return 'UNDERFLOW!!!'
//         }else{
//             return this.queue.shift()
//         }
//     }

//     front(){
//         if(this.isEmpty()){
//             return 'VALUE IS EMPTY!!!'
//         }else{
//             return this.queue[0]
//         }
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }

//     print(){
//         console.log(this.queue)
//     }
// }


// let q = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)

// q.dequeue()
// console.log(q.front())

// // console.log(q.isEmpty())
// q.print()

                                            // CIRCULAR QUEUE:
let circularQueue = function (k){
    this.queue = []
    this.size = k
}

circularQueue.prototype.enqueue = function(data){
    if(this.queue.length===this.size) return 'Overflow Warning!!!'
    else {
    return this.queue.push(data)
    }
}

circularQueue.prototype.dequeue = function(){
    if(this.queue.length === 0) return false
    else{
    return this.queue.shift()
    }
}

circularQueue.prototype.front = function(){
    if(this.queue.length === 0) return false
    else{
        return this.queue[0]
    }
}

circularQueue.prototype.rear = function(){
    if(this.queue.length === 0) return false
    else{
        return this.queue[this.queue.length-1]
    }
}

let q = new circularQueue(3)

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.enqueue(4)
console.log(q.front(),q.rear())


                                            //STACK USING QUEUE:-
// var stack = function(){
//     this.q1 = []
//     this.q2 = []
// }
// //[1,2,3]

// stack.prototype.push = function(data){
//     this.q1.push(data)
// }
// stack.prototype.pop = function(){
//     while(this.q1.length!==1){
//         this.q2.push(this.q1.shift())
//     }
//     let poppedElem=this.q1.shift()

//     while(this.q2.length!==0){
//         this.q1.push(this.q2.shift())
//     }
//     return poppedElem
// }

// stack.prototype.peek = function(){
//     return console.log(this.q1[this.q1.length-1])
// }

// stack.prototype.print = function(){
//     return console.log(this.q1)
// }

// let s = new stack()

// s.push(1)
// s.push(2)
// s.push(3)
// s.pop()

// s.peek()

// s.print()



                                            //QUEUE:

            
//[5,4,3,2,1]

// class Queue{
//     constructor(size){
//         this.queue = []
//         this.size = size
//     }

//     enqueue(elem){
//         if(this.queue.length === this.size) return "OVERFLOW !!!"
//         else{
//             this.queue.push(elem)
//         }
//     }

//     dequeue(){
//         if(this.queue.length === 0) return "UNDERFLOW !!!"
//         else{
//             this.queue.shift()
//         }
//     }

//     front(){
//         if(this.queue.length === 0) return "UNDERFLOW !!!"
//         else{
//            return this.queue[0]
//         }
//     }

//     rear(){
//         if(this.queue.length === 0) return "UNDERFLOW !!!"
//         else{
//            return this.queue[this.queue.length-1]
//         }
//     }

//     printList(){
//         console.log(this.queue)
//     }
// }

// let q = new Queue(5)

// q.enqueue(4)
// q.enqueue(3)
// q.enqueue(2)
// q.enqueue(1)

// q.dequeue()

// console.log(`front:${q.front()} back:${q.rear()}`)



// function quickSort(arr,low=0,high=arr.length-1){
//     if(low<high){
//       let pivotIndex = pivotHelper(arr,low,high);
//       quickSort(arr,low,pivotIndex-1);
//       quickSort(arr,pivotIndex+1,high);
//     }
//     return arr;
//   }
  
// function pivotHelper(arr,low,high){
//   let pivot = arr[high];
//   let i = low-1;
//   for(let j=low;j<high;j++){
//     if(arr[j]<pivot){
//       i++;
//       [arr[i],arr[j]] = [arr[j],arr[i]];
//     }
//   }
//   [arr[i+1],arr[high]] = [arr[high],arr[i+1]];
//   return i+1;
// }

// const Stack = function () {
//     this.stack = [];
// };

// Stack.prototype.push = function (data) {
//     this.stack.push(data);
// };

// Stack.prototype.pop = function () {
//     return this.stack.pop(); 
// };

// Stack.prototype.print = function () {
//     console.log(this.stack);
// };


// Stack.prototype.toArray = function () {
//     return [...this.stack]; 
// };

// let st = new Stack();
// st.push(1);
// st.push(2);
// st.push(3);

// let arr = st.toArray();
// function reverseStack(arr) {
   
//     if (arr.length <= 1) return arr;

//     let res = arr[0];
//     return [...reverseStack(arr.slice(1)), res]; 
// }

// console.log(reverseStack(st));



