                                                //BINARY SEARCH TREE:
// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binarySearchTree{
//     constructor(){
//         this.root = null
//         this.result = []
//     }

//     isEmpty(){
//         return this.root === null
//     }

//     insert(value){
//         const newNode = new Node(value)  //11
//         if(this.isEmpty()){
//             this.root = newNode
//         }else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){   
//         if(newNode.value<root.value){  
//             if(root.left===null){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(root.right === null){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     levelOrder(){
//         let queue = []
//         queue.push(this.root)

//         while(queue.length){
//             let temp = queue.shift()
//             console.log(`VAL: ${temp.value}`)

//             if(temp.left){
//                 queue.push(temp.left)
//             }if(temp.right){
//                 queue.push(temp.right)
//             }  
//         }
//     }

//     inOrderTraversal(root){
//         if(root){
//             this.inOrderTraversal(root.left)
//             this.result.push(root.value)
//             this.inOrderTraversal(root.right)
//         }
//         return this.result
//     }

//     kthLargest(k){
//         let arr = this.result.reverse()
//         if(k <= arr.length){
//             for(let i=0;i<arr.length;i++){
//                 if(i==k-1) return arr[i]
//             }
//         }else return "NO VALUE FOUND!!!"
//     }

//     nearestElement(target){
//         let current = this.root
//         let nearestElem = this.root.value

//         while(current){
//             if(Math.abs(target - current.value) < Math.abs(target - nearestElem)) 
//                 nearestElem = current.value

//             if(current.value > target)
//                 current = current.left

//             else if(current.value < target)
//                 current = current.right

//             else return nearestElem
//         }
//         return nearestElem
//     }
// }

// let bst = new binarySearchTree()

// bst.insert(10)
// bst.insert(22)
// bst.insert(7)
// bst.insert(14)
// bst.insert(31)
// bst.inOrderTraversal(bst.root)
// console.log(bst.kthLargest(10))


                                                //HEAP:
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
//         [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
//     }

//     heapifyUp(){
//         let index = this.heap.length-1

//         while(index){
//             let parentIndex = this.parentIndex(index)

//             if(this.heap[parentIndex] < this.heap[index]){
//                 this.swap(parentIndex,index)
//             }
//             index = parentIndex
//         }
//     } 
    
//     kthLargest(k){
//         let result;
//         for(let i=0;i<k;i++){
//             result = this.delete()
//         }
//         return result
//     }
    
//     delete(){
//         let deletedValue = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown()  
//         return deletedValue
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
//             }
//             else break
//         }
//     }
// } 

// let max = new MaxHeap()

// max.insert(4)
// max.insert(3)
// max.insert(5)
// max.insert(1)
// max.insert(2)
// console.log(max.kthLargest(1))

// max.delete()

// console.log(max.heap)

// let arr = [4,6,9,12,2]

// function heapSort(arr){
//     for(let i=Math.floor(arr.length/2)-1;i>=0;i--){
//         heapify(arr,i)
//     }
//     return arr
// }

// function heapify(arr,i){

//     let largest = i
//     let left = 2*i+1
//     let right = 2*i+2

//     if(arr[left] > arr[largest])
//         largest = left

//     if(arr[right] > arr[largest])
//         largest = right

//     if(largest !== i)
//         [arr[largest],arr[i]] = [arr[i],arr[largest]]

//     return arr
// }

// console.log(heapSort(arr))




