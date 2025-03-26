class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        let newNode = new Node(value)
        if(!this.root) this.root = newNode
        else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(root.value > newNode.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    inOrder(root){
        if(!root) return
        else{
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
}

let bst = new binarySearchTree()
bst.insert(1)
bst.insert(2)
bst.insert(0)

// console.log(bst)


                                                            //TRIE:-

class TrieNode{
    constructor(){
        this.children = {}
        this.isWord = false
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){

        let current = this.root

        for(let char of word){
            if(!current.children[char]){
                current.children[char] = new TrieNode()
            }
            current = current.children[char]
        }
        current.isWord = true
    }
}

let t = new Trie()

class Graph{
    constructor(){
        this.adjList = {}
    }

    addVertex(vertex){
        this.adjList[vertex] = new Set()
    }

    addEdge(vertex1,vertex2){

        if(!this.adjList[vertex1]) this.addVertex(vertex1)
        if(!this.adjList[vertex2]) this.addVertex(vertex2)

        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }

    bfs(start,included = new Set()){

        let queue = [start]
        included.add(start)

        while(queue.length){
         let node = queue.shift()

            for(let neighbour of this.adjList[node]){
                if(!included.has(neighbour)){
                    included.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }
}

let graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("A","C")

console.log(graph.bfs("A"))

// console.log(graph)