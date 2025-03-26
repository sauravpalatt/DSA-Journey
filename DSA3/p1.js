// class TrieNode{
//     constructor(){
//         this.children = {}
//         this.isWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let current = this.root

//         for(let i=0;i<word.length;i++){
//             let letter = word[i]

//             if(!current.children[letter]){
//                 current.children[letter] = new TrieNode()
//             }

//             current = current.children[letter]
//         }
//         current.isWord = true
//     }

//     search(word){
//         let current = this.root

//         for(let i=0;i<word.length;i++){
//             let letter = word[i]

//             if(!current.children[letter]) return false
//             else{
//                 current = current.children[letter]
//             }
//         }
//         return current.isWord  
//     }
// }

// let t = new Trie()

// t.insert("SAURAV")
// t.insert("THEERTHA")

// console.log(t.search("THEERTHA"))

// class MinHeap{
//     constructor(){
//         this.heap = []
//     }

//     insert(value){
//         this.heap.push(value)
//         this.heapifyUp()
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
//         return [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
//     }

//     heapifyUp(){
//         let index = this.heap.length-1
//         while(index){
//             let parentIdx = this.parentIndex(index)

//             if(this.heap[parentIdx] > this.heap[index]){
//                 this.swap(parentIdx,index)
//             }
//             index = parentIdx
//         }
//     }

//     delete(){
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown()
//     }

//     heapifyDown(){
//         let index = 0
//         while(true){
//             if(this.heap.length === 0) return
//             if(this.heap.length === 1) return this.heap.pop()

//             let smallest = this.leftIndex(index)
//             let right = this.rightIndex(index)

//             if(this.heap[right] < this.heap[smallest]){
//                 smallest = right
//             }

//             if(this.heap[index] > this.heap[smallest]){
//                 this.swap(index,smallest)
//                 index = smallest
//             }else break   
//         }
//     }
// }

// let m = new MinHeap()

// m.insert(4)
// m.insert(1)
// m.insert(2)
// m.insert(3)
// m.insert(5)

// m.delete()

// console.log(m.heap)

// let arr = [4,1,3,2,5]

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

//     if(i !== largest){
//         [arr[largest],arr[i]] = [arr[i],arr[largest]]
//     }
// }

// console.log(heapSort(arr))


