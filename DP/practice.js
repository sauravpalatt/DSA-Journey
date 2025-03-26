                                                                    //TREE:-    

// class Node{
//     constructor(value){
//         this.value = value
//         this.children = []
//     }

//     addChild(child){
//         this.children.push(child)
//     }
// }

// class Tree{
//     constructor(){
//         this.root = new Node()
//     }

//     DFS(root){
//         if(!root) return  // always put base case

//         root.children.forEach(child => {
//             console.log(child.value)
//             this.DFS(child)
//         });
//     } 
// }

// let tree = new Tree("ROOT")
// let nodeA = new Node("A")
// let nodeB = new Node("B")
// let nodeAA= new Node("AA")

// tree.root.addChild(nodeA)
// tree.root.addChild(nodeB)
// nodeA.addChild(nodeAA)

// tree.DFS(tree.root)

                                                                //BINARY TREE:-

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binaryTree{
//     constructor(){
//        this.root = null 
//     }

//     insert(value){
//         let newNode = new Node(value)

//         if(!this.root) this.root = newNode
//         else{
//             return this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         let queue = [root]
//         while(queue.length){
//             let current = queue.shift()

//             if(current.left === null){
//                 current.left = newNode
//                 return
//             }else{
//                 queue.push(current.left)
//             }

//             if(current.right === null){
//                 current.right = newNode
//                 return
//             }else{
//                 queue.push(current.right)
//             }
//         }
//     }

//     kthElement(k){
//         let node = this.root
//         let resArr = []
        

//         function inOrder(node){
//             if(!node) return

//             inOrder(node.left)
//             resArr.push(node.value)
//             inOrder(node.right)
//         }

//         inOrder(node)

//         let newArr = resArr.sort((a,b)=>b-a)

//         for(let i=0;i<newArr.length;i++){
//             if(i === k-1){
//              return newArr[i]
//             } 
//         }
//     }
// }

// let bt = new binaryTree()

// bt.insert(1)
// bt.insert(2)
// bt.insert(3)
// bt.insert(4)
// bt.insert(5)

// console.log(bt.kthElement(3))

                                                        //GRAPH:
// class Graph{
//     constructor(){
//         this.adjList = {}
//     }

//     addVertex(vertex){
//         return this.adjList[vertex] = new Set()
//     }                                                          

//     addEdge(vertex1,vertex2){
//         if(!this.adjList[vertex1]) this.addVertex(vertex1)
//         if(!this.adjList[vertex2]) this.addVertex(vertex2)
        
//             this.adjList[vertex1].add(vertex2)
//             this.adjList[vertex2].add(vertex1)
//     }

//     print(){
//         for(let v in this.adjList){
//             console.log(v + "=>" + [...this.adjList[v]])
//         }
//     }

//     bfs(start,included = new Set()){

//         included.add(start)
//         let queue = [start]

//         while(queue.length){
//             let node = queue.shift()
//             console.log(node)

//             for(let neighbour of this.adjList[node]){
//                 if(!included.has(neighbour)){
//                     included.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             }
//         }
//     }

//     dfs(start,included = new Set()){
//         if(included.has(start)) return

//         included.add(start)
//         console.log(start)

//         for(let neighbour of this.adjList[start]){
//             this.dfs(neighbour,included)
//         }
//     }

//     shortestPath(start,end,include = new Set()){

//         let queue = [[start]]
//         include.add(start)

//         while(queue.length){
//             let path = queue.shift()
//             let node = path[path.length-1]

//             if(node === end) return path
//             else{
//                 for(let neighbour of this.adjList[node]){
                    
//                     if(!include.has(neighbour)){
//                         include.add(neighbour)
//                         queue.push([...path,neighbour])
//                     }
//                 }
//             }
//         }
//     }

//     longestPath(start,end){
//         let Arr = []
//         let queue = [[start]]

//         while(queue.length){
//             let path = queue.shift()
//             let node = path[path.length-1]

//             if(node === end) Arr.push(path)

//             for(let neighbour of this.adjList[node]){
//                 if(!path.includes(neighbour)){
//                     queue.push([...path,neighbour])
//                 }
//             }
//         }
//         return Arr.pop()
//     }
// }

// let gr = new Graph()

// gr.addVertex("A")
// gr.addVertex("B")
// gr.addVertex("C")
// gr.addVertex("D")
// gr.addVertex("E")

// gr.addEdge("A", "B")
// gr.addEdge("A", "C")
// gr.addEdge("B", "D")
// gr.addEdge("C", "D")
// gr.addEdge("C", "E")

// gr.print()
// // gr.dfs("A")
// console.log(gr.longestPath("A","E"))

                                                            //TRIE :

// class TrieNode{
//     constructor(){
//         this.children = []
//         this.isWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let current = this.root

//         for(let char of word){
//             if(!current.children[char]){
//                 current.children[char] = new TrieNode()
//             }
//             current = current.children[char]
//         }
//         current.isWord = true
//     }

//     search(word){
//         let current = this.root

//         for(let char of word){
//             if(!current.children[char]) return false
//             else{
//                 current = current.children[char]
//             }
//         }
//         return current.isWord
//     }

//     isPrefix(word){
//         let current = this.root

//         for(let char of word){
//             if(!current.children[char]) return false
//             else{
//                 current = current.children[char]
//             }
//         }
//         return true
//     }

//     suffixSet(word){
//         let reverseWord = word.split("").reverse().join("")
//         let current = this.root

//         for(let char of reverseWord){
//             if(!current.children[char]){
//                 current.children[char] = new TrieNode()
//             }
//             current = current.children[char]
//         }
//             current.isWord = true
//     }

//     isSuffix(word){
//         let reverseWord = word.split("").reverse().join("")

//         let current = this.root

//         for(let char of reverseWord){
//             if(!current.children[char]) return false
//             else{
//                 current = current.children[char]
//             }
//         }
//         return true
//     }

//     autoCompletion(word){
//         let current = this.root
//         for(let char of word){
//             if(!current.children[char]) return []
//             else{
//                 current = current.children[char]
//             }
//         }

//         return this.collectWords(current,word)
//     }

//     collectWords(current,word){
//         let resArr = []

//         if(current.isWord) resArr.push(word)
        
//         for(let char in current.children){
//             resArr.push(...this.collectWords(current.children[char],word+char))
//         }
//         return resArr
//     }
// }

// let t = new Trie()

// t.insert("APPLE")
// t.insert("APPLICATION")

// console.log(t.autoCompletion("APP"))

// t.suffixSet("APPLE")
// console.log(t.isSuffix("LEP"))

                                                        //BT:-

// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class binaryTree{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(!this.root) this.root = newNode
//         else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){

//         let queue = [root]

//         while(queue.length){
//             let node = queue.shift()

//             if(!node.left){
//                 node.left = newNode
//                 return
//             }else{
//                 queue.push(node.left)
//             }

//             if(!node.right){
//                 node.right = newNode
//                 return
//             }else{
//                 queue.push(node.right)
//             } 
//         }
//     }

//     height(node){
//         if(!node) return -1

//         let left = this.height(node.left)
//         let right = this.height(node.right)

//         return Math.max(left,right)+1
//     }
// }

// let bt = new binaryTree()
// bt.insert(2)
// bt.insert(1)
// bt.insert(3)
// bt.insert(4)
// bt.insert(0)
// bt.insert(5)
        
// console.log(bt.height(bt.root))

                                                                //BST :-
// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BST{
//     constructor(){
//         this.root = null
//     }

//     insert(node){
//         let newNode = new Node(node)

//         if(!this.root) this.root = newNode
//         else{
//             this.insertNode(this.root,newNode)
//         }
//     }

//     insertNode(root,newNode){
//         if(root.value > newNode.value){
//             if(!root.left){
//                 root.left = newNode
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(!root.right){
//                 root.right = newNode
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     min(root){
//         if(!root.left) return root.value
//         else{
//             root.value = this.min(root.left)
//         }
//     }

//     delete(root,target){
//         if(!root) return null
        
//         if(root.value > target){
//             root.left = this.delete(root.left,target)
//         }else if(root.value < target){
//             root.right = this.delete(root.right,target)
//         }else{
//             if(!root.left && !root.right) return null

//             else if(!root.left){
//                 return root.right
//             }
            
//             else if(!root.right){
//                 return root.left

//             }else{
//                 root.value = this.min(root.right)
//                 root.right = this.delete(root.right,root.value)
//             }
//         }
//         return root
//     }

//     levelOrder(root){
        
//         let queue = [root]

//         while(queue.length){
//             let node = queue.shift()
//             console.log(node.value)

//             if(node.left){
//                 queue.push(node.left)
//             }

//             if(node.right){
//                 queue.push(node.right)
//             }
//         }
//     }

//     inOrder(root){
//         if(!root) return

//         this.inOrder(root.left)
//         console.log(root.value)
//         this.inOrder(root.right)
//     }

//     closestTarget(target){

//         let current = this.root
//         let closest = this.root.value

//         while(current){
//             if(Math.abs(target-current.value) < Math.abs(target-closest)){
//                 closest = current.value
//             }
    
//             if(current.value < target){
//                 current = current.right
//             }else if(current.value > target){
//                 current = current.left
//             }else break
//         }
//         return closest
//     }

//     isBST(root,max=Infinity,min=-Infinity){
//         if(!root) return true
//         if(root.value>max || root.value<min) return false
//         else{
//             return this.isBST(root.right,max,root.value) && this.isBST(root.left,root.value,min)
//         }
//     }
// }

// let bst = new BST()

// bst.insert(2)
// bst.insert(1)
// bst.insert(4)
// bst.insert(5)
// bst.insert(0)

// bst.levelOrder(bst.root)
// bst.inOrder(bst.root)

// console.log(bst.closestTarget(6))
// bst.delete(bst.root,10)

// console.log(bst.isBST(bst.root))

                                                                //TRIE:-
// class TrieNode{
//     constructor(){
//         this.children = []
//         this.isWord = false
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }

//     insert(word){
//         let current = this.root

//        for(let char of word){
//         if(!current.children[char]){
//             current.children[char] = new TrieNode()
//         }
//         current = current.children[char]
//        }
//        current.isWord = true
//     }

//     autoCompletion(prefix){
//         let current = this.root

//         for(let char of prefix){
//             if(!current.children[char]) return "WORD NOT FOUND!!"
//             else{
//                 current = current.children[char]
//             }
//         }
//         return this.getWords(current,prefix)
//     }

//     getWords(node,prefix){
//         let resArr = []

//         if(node.isWord) resArr.push(prefix)

//         for(let char in node.children){
//             resArr.push(...this.getWords(node.children[char],prefix+char))
//         }
//         return resArr
//     }
// }

                                                                //GRAPH:-
// class Graph{
//     constructor(){
//         this.adjList = {}
//     }

//     addVertex(vertex){
//        return this.adjList[vertex] = new Set()
//     }

//     addEdge(vertex1,vertex2){
//         if(!this.adjList[vertex1]) this.addVertex(vertex1)
//         if(!this.adjList[vertex2]) this.addVertex(vertex2)

//         this.adjList[vertex1].add(vertex2)
//         this.adjList[vertex2].add(vertex1)
//     }

//     print(){
//         for(let k in this.adjList){
//             console.log(k + "==>" + [...this.adjList[k]])
//         }
//     }

//     bfs(start,included = new Set()){
        
//         included.add(start)
//         let queue = [start]

//         while(queue.length){
//             let node = queue.shift()
//             console.log(node)

//             for(let neighbour of this.adjList[node]){
//                 if(!included.has(neighbour)){
//                     included.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             }
//         }
//     }

//     dfs(start,included = new Set()){
//         if(included.has(start)) return

//         included.add(start)
//         console.log(start)

//         for(let neighbour of this.adjList[start]){
//             if(!included.has(neighbour)){
//                 this.dfs(neighbour,included)
//             }
//         }
//     }

//     shortestPath(start,end,included = new Set()){

//         let queue = [[start]]
//         included.add(start)

//         while(queue.length){
//             let path = queue.shift()
//             let node = path[path.length-1]

//             if(node === end) return path

//             for(let neighbour of this.adjList[node]){
//                 if(!included.has(neighbour)){
//                     included.add(neighbour)
//                     queue.push([...path,neighbour])
//                 }
//             }
//         }
//     }

//     longestPath(start,end){

//         let resArr = []
//         let queue = [[start]]

//         while(queue.length){
//             let path = queue.shift()
//             let node = path[path.length-1]

//             if(node === end) resArr.push(path)

//             for(let neighbour of this.adjList[node]){
//                 if(!path.includes(neighbour)){
//                     queue.push([...path,neighbour])
//                 }
//             }
//         }
//         return resArr.pop()
//     }
// }

// let graph = new Graph()

// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// graph.addVertex('D')
// graph.addVertex('E')
// graph.addVertex('F')
// graph.addVertex('G')

// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','E')
// graph.addEdge('B','G')
// graph.addEdge('C','D')
// graph.addEdge('C','E')
// graph.addEdge('C','F')
// graph.addEdge('D','F')
// graph.addEdge('D','G')
// graph.addEdge('F','H')

// graph.bfs("A")
// graph.dfs("A")

// console.log(graph.longestPath("A","H"))

// gr.print()

// console.log(gr)

                                                                //HEAP:-
// class minHeap{
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
//         return 2*(index+1)
//     }

//     rightIndex(index){
//         return 2*(index+2)
//     }

//     swap(idx1,idx2){
//         return [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
//     }

//     heapifyUp(){
//         let index = this.heap.length-1

//         while(index){
//             let parentIndex = this.parentIndex(index)

//             if(this.heap[index] < this.heap[parentIndex]){
//                 this.swap(index,parentIndex)
//             }
//             index = parentIndex
//         }
//     }

//     delete(){
//         let deletedVal = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapfyDown()

//         return deletedVal
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
//                 this.swap(index,small)
//                 index = small
//             }else break
//         }
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

//     deleteMax(){ 
//         let deletedVal = this.heap[this.heap.length-1]
//         this.heap[0] = this.heap.pop()
//         this.heapfyDown()
//         return deletedVal
//     }

//     kthLargest(k){
//         let result;
//         for(let i=0;i<k;i++){
//         result = this.deleteMax()
//         }
//         return result
//     }

// }

// let mh = new minHeap()

// mh.insert(2)
// mh.insert(1)
// mh.insert(3)
// mh.insert(4)
// mh.insert(0)
// mh.delete()

// console.log(mh.heap)
// console.log(mh.kthLargest(2))

// function heapSort(arr){

//     for(let i = Math.floor((arr.length-1)/2);i>=0;i--){
//         heapify(arr,i)
//     }

//     return [...arr]
// }

// function heapify(arr,i){
//     let largest = i
//     let left = 2*i+1
//     let right = 2*i+2

//     if(arr[left] > arr[largest]){
//         largest = left
//     }

//     if(arr[right] > arr[largest]){
//         largest = right
//     }

//     if(i !== largest){
//         [arr[i],arr[largest]] = [arr[largest],arr[i]]
//     }
// }

// let arr = [2,1,3,0,4]

// console.log(heapSort(arr))