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

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const newNode = new Node(value)  //11
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){   
        if(newNode.value<root.value){  
            if(root.left===null){
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

    search(root,value){
        if(root === null) return false
        else{
            if(root.value===value) return true
            else if(root.value > value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)

        while(queue.length){
            let temp = queue.shift()
            console.log(`VAL: ${temp.value}`)

            if(temp.left){
                queue.push(temp.left)
            }if(temp.right){
                queue.push(temp.right)
            }  
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(root,target){
        if(root===null){
            return root
        }else{
            if(root.value > target){
                root.left = this.delete(root.left,target)
            }else if(root.value < target){
                root.right = this.delete(root.right,target)
            }else{

                if(!root.right && !root.left){
                    return null
                }else if(!root.right){
                    return root.left
                }else if(!root.left){
                    return root.right
                }else{
                    root.value = this.min(root.right)
                    root.right = this.delete(root.right,root.value)
                }
            }
        }
        return root
    }

    closestTgt(target){
        let curr = this.root
        let closest = this.root.value
        while(curr){
            if(Math.abs(target-curr.value) < Math.abs(target-closest)){
                closest = curr.value
            }
            if(target>curr.value){
                curr = curr.right
            }else if(target<curr.value){
                curr = curr.left
            }else{
                return
            }
        }
        return closest
    }
}

let bst = new binarySearchTree()
bst.insert(5)
bst.insert(3)
bst.insert(8)
bst.insert(1)
bst.insert(6)

bst.delete(bst.root,5)
bst.levelOrder()
console.log(bst.closestTgt(0))
console.log(bst.preOrder(bst.root))


// class Node{
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }

//     insert(value){
//         let newNode = new Node(value)
//         if(this.root===null) return this.root = newNode
//         else return this.insertNode(this.root,newNode)
//     }

//     insertNode(root,newNode){
//         if(root.value > newNode.value){
//             if(root.left === null){
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

//     delete(root,target){
//         if(!root) return "VALUE NOT FOUND!!!"
//         else{
//             if(root.value > target){
//                 this.delete(root.left,target)
//             }else if(root.value < target){
//                 this.delete(root.right,target)
//             }else{

//                 if(!root.left && !root.right) return null
//                 else if(!root.left) return root.right
//                 else if(!root.right) return root.left
//                 else{
//                     root.value = this.min(root.right)
//                     root.right = this.delete(root.right,root.value)
//                 }
//             }
//         }
//         return root
//     }

//     preOrderTraversal(root){
//         if(root){
//             console.log(root.value)
//             this.preOrderTraversal(root.left)
//             this.preOrderTraversal(root.right)
//         }
//     }

//     levelOrder(){
//         let queue = [this.root]
//         while(queue.length){
//             let current = queue.shift()
//             console.log(current.value)

//             if(current.left) queue.push(current.left)
//             if(current.right) queue.push(current.right)

//         }
//     }

//     nearestElement(root,target){
//         let current = root
//         let nearest = root.value
//         while(current!==null){
//             if(Math.abs(target-current.value)<Math.abs(target-nearest)){
//                 nearest = current.value
//             }
//             if(target > current.value){
//                 current = current.right
//             }else{
//                 current = current.left
//             }
//         }
//         return nearest
//     }

//     isBST(root,max,min){
//         if(!root) return true
//         if(root.value>=max || root.value<=min) return false

//         return (this.isBST(root.left,root.value,min) && this.isBST(root.right,max,root.value))
//     }

//     kthSmallest(root,k){
//         let result = []

//         function inOrder(root){
//             if(root){
//                 inOrder(root.left)
//                 result.push(root.value)
//                 inOrder(root.right) 
//             }
//         }

//         inOrder(root)
//         let resArr = result.reverse((a,b)=>a-b)

//        for(let item of resArr){
//         if(item === resArr[k-1]) return item
//        }
//     }
// }

// let bst = new BinarySearchTree()
// bst.insert(14)
// bst.insert(21)
// bst.insert(11)
// bst.insert(32)
// bst.insert(15)

// console.log(bst.kthSmallest(bst.root,1))

// console.log(bst.isBST(bst.root,Infinity,-Infinity))
// bst.preOrderTraversal(bst.root)
// bst.levelOrder()
// console.log("NEAREST NODE:",bst.nearestElement(bst.root,6))

// console.log(bst)

