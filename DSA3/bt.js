
class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      const queue = [this.root];
      while (queue.length) {
        let current = queue.shift();
        
        if (!current.left) {
          current.left = newNode;
          return;
        } else {
          queue.push(current.left);
        }
  
        if (!current.right) {
          current.right = newNode;
          return;
        } else {
          queue.push(current.right);
        }
      }
    }
  
    inorderTraversal(node = this.root, result = []) {
      if (!node) return;  // base case
      this.inorderTraversal(node.left, result);
      result.push(node.value);
      this.inorderTraversal(node.right, result);
      return result; // either console.log or return the output of the function
    }
  }
  
  const tree = new BinaryTree();
  tree.insert(1);
  tree.insert(2);
  tree.insert(3);
  tree.insert(4);
  tree.insert(5);
  
  console.log(tree.inorderTraversal()); 