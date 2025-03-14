// class Node{
//     constructor(value){
//         this.value = value
//         this.children = []
//     }
    
//     addChild(node){
//         this.children.push(node)
//     }
// }

// class Tree{
//     constructor(value){
//         this.root = new Node(value)
//     }
    
//     isEmpty(){
//         return !this.root
//     }
    
//     traverseDFS(root){
//         if(!root) return
//         console.log(root.value)
//         root.children.forEach((child)=>{
//             this.traverseDFS(child)
//         })
//     }
// }

// let tree = new Tree("Root")
// let nodeA = new Node("A")
// let nodeB = new Node("B")
// let nodeC = new Node("C")

// tree.root.addChild(nodeA)
// tree.root.addChild(nodeB)
// tree.root.addChild(nodeC)

// nodeA.addChild(new Node("A1"))
// nodeA.addChild(new Node("A2"))

// nodeB.addChild(new Node("B1"))

// nodeC.addChild(new Node("C1"))

// tree.traverseDFS(tree.root)

// console.log("==========")




// class Node{
//     constructor(value){
//         this.value = value
//         this.children = []
//     }

//     addChild(node){
//         this.children.push(node)
//     }
// }

// class Tree{
//     constructor(value){
//         this.root = new Node(value)
//     }

//     DFSTraversal(root){
//         if(!root) return
//         else{
//             root.children.forEach((child)=>{
//                 console.log(child.value)
//                 this.DFSTraversal(child)
//             })
//         }
//     }
// }

// let tree = new Tree("ACHACHAN")

// tree.root.addChild(new Node("AMMA"))
// tree.root.addChild(new Node("VILLAMMA"))
// let valarthuMakal= new Node("SAVITHRI ECHI")
// tree.root.addChild(valarthuMakal)

// let amma = tree.root.children.find((item)=>{
//     if(item.value==="AMMA") return item
// })

// if(amma){
//     amma.addChild(new Node("KANNAN"))
// }

// tree.DFSTraversal(tree.root)


