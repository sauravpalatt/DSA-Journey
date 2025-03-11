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

//     search(root,value){
//         if(root === null) return false
//         else{
//             if(root.value===value) return true
//             else if(root.value > value){
//                 return this.search(root.left,value)
//             }else{
//                 return this.search(root.right,value)
//             }
//         }
//     }

//     preOrder(root){
//         if(root){
//             console.log(root.value)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
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

//     min(root){
//         if(!root.left){
//             return root.value
//         }else{
//             return this.min(root.left)
//         }
//     }

//     max(root){
//         if(!root.right){
//             return root.value
//         }else{
//             return this.max(root.right)
//         }
//     }

//     delete(root,target){
//         if(root===null){
//             return root
//         }else{
//             if(root.value > target){
//                 root.left = this.delete(root.left,target)
//             }else if(root.value < target){
//                 root.right = this.delete(root.right,target)
//             }else{

//                 if(!root.right && !root.left){
//                     return null
//                 }else if(!root.right){
//                     return root.left
//                 }else if(!root.left){
//                     return root.right
//                 }else{
//                     root.value = this.min(root.right)
//                     root.right = this.delete(root.right,root.value)
//                 }
//             }
//         }
//         return root
//     }

//     closestTgt(target){
//         let curr = this.root
//         let closest = this.root.value
//         while(curr){
//             if(Math.abs(target-curr.value) < Math.abs(target-closest)){
//                 closest = curr.value
//             }
//             if(target>curr.value){
//                 curr = curr.right
//             }else if(target<curr.value){
//                 curr = curr.left
//             }else{
//                 return
//             }
//         }
//         return closest
//     }
// }

// let bst = new binarySearchTree()
// bst.insert(5)
// bst.insert(3)
// bst.insert(8)
// bst.insert(1)
// bst.insert(6)

// bst.delete(bst.root,5)
// bst.levelOrder()
// console.log(bst.closestTgt(0))
// console.log(bst.preOrder(bst.root))