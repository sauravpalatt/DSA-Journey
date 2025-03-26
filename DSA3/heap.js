// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapfyUp()
//     }

//     parentIndex(index){
//         return Math.floor((index-1)/2)
//     }

//     leftIndex(index){
//         return 2*index+1
//     }

//     rightIndex(index){
//         return 2*index+2
//     }

//     swap(idx1,idx2){
//         [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
//     }

//     heapfyUp(){
//         let index = this.heap.length-1
//         while(index){
//             let parentIndex = this.parentIndex(index)
//             if(this.heap[index] < this.heap[parentIndex]){
//                 this.swap(index,parentIndex)
//             }
//             index = parentIndex
//         }
//         //...
//     }

//     deleteMin(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop()
        
//         let deletedValue = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapfyDown()
        
//         return deletedValue
//     }

//     heapfyDown(){
//         let index = 0
//         while(true){
//             let smaller = this.leftIndex(index)
//             let right = this.rightIndex(index)

//             if(this.heap[right]<this.heap[smaller]){
//                 smaller = right
//             }

//             if(this.heap[index]>this.heap[smaller]){
//                 this.swap(index,smaller)
//                 index = smaller
//             }else{
//                 break
//             }
//         }
//     }
// }

// let minheap = new MinHeap()

// minheap.insert(1)
// minheap.insert(6)
// minheap.insert(5)
// minheap.insert(4)
// minheap.insert(2)

// minheap.deleteMin()

// console.log(minheap.heap)

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }
    
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }
    
//     parentIdx(idx){
//         return Math.floor((idx-1)/2)
//     }
    
//     leftIndex(idx){
//         return 2*idx+1
//     }
    
//     rightIndex(idx){
//         return 2*idx+2
//     }
    
//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index){
//             let parentIdx = this.parentIdx(index)
//             if(this.heap[index] > this.heap[parentIdx])
//             index = parentIdx
//             else [this.heap[index],this.heap[parentIdx]] = [this.heap[parentIdx],this.heap[index]]
//         }
//     }
    
//     deleteMin(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop()
        
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown()
//     }
    
//     heapifyDown(){
//         let index = 0
//         while(true){
//             let small = this.leftIndex(index)
//             let right = this.rightIndex(index)
            
//             if(this.heap[small] > this.heap[right]){
//                 small = right
//             }
            
//             if(this.heap[index] > this.heap[small]){
//             [this.heap[index],this.heap[small]] = [this.heap[small],this.heap[index]]
//             index = small
//             }
//             else break
//         }
//     }
// }

// let mh = new MinHeap()

// mh.insert(2)
// mh.insert(1)
// mh.insert(3)
// mh.insert(4)
// mh.insert(0)

// mh.deleteMin()

// console.log(mh.heap)

                                        //FIND KTH LARGEST ELEMENT:-
// class MaxHeap{
//     constructor(){
//         this.heap = []
//     }
    
//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }
    
//     parentIndex(idx){
//         return Math.floor((idx-1)/2)
//     }
    
//     swap(idx1,idx2){
//        return [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
//     }
    
//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index){
//             let parentIndex = this.parentIndex(index)
            
//             if(this.heap[index] > this.heap[parentIndex]){
//                 this.swap(index,parentIndex)
//             }
//             index = parentIndex
//         }
//     }
    
//     deleteMax(){
//         let kthValue = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown()
//         return kthValue
//     }
    
//     kthLargest(k){
//         let result;
//         for(let i=0;i<k;i++){
//             result = this.deleteMax()
//         }
//         return result
//     }
    
//     heapifyDown(){
//         let index = 0
//         while(true){
//             let largest = 2*index+1
//             let right = largest+1
            
//             if(this.heap[right] > this.heap[largest]){
//                 largest = right
//             }
            
//             if(this.heap[index] < this.heap[largest]){
//                 this.swap(index,largest)
//             }else break
//         }
//     }
// }

// let mh = new MaxHeap()

// mh.insert(1)
// mh.insert(3)
// mh.insert(4)
// mh.insert(0)
// mh.insert(2)

// console.log("THE FIRST MAX VALUE IS: ",mh.kthLargest(1))

// console.log(mh.heap)


