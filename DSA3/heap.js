class MinHeap{
    constructor(){
        this.heap = []
    }

    insert(value){
        this.heap.push(value)
        this.heapfyUp()
    }

    parentIndex(index){
        return Math.floor((index-1)/2)
    }

    leftIndex(index){
        return 2*index+1
    }

    rightIndex(index){
        return 2*index+2
    }

    swap(idx1,idx2){
        [this.heap[idx1],this.heap[idx2]] = [this.heap[idx2],this.heap[idx1]]
    }

    heapfyUp(){
        let index = this.heap.length-1
        while(index){
            let parentIndex = this.parentIndex(index)
            if(this.heap[index] < this.heap[parentIndex]){
                this.swap(index,parentIndex)
            }
            index = parentIndex
        }
    }

    deleteMin(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()
        
        let deletedValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapfyDown()
        
        return deletedValue
    }

    heapfyDown(){
        let index = 0
        while(true){
            let smaller = this.leftIndex(index)
            let right = this.rightIndex(index)

            if(this.heap[right]<this.heap[smaller]){
                smaller = right
            }

            if(this.heap[index]>this.heap[smaller]){
                this.swap(index,smaller)
                index = smaller
            }else{
                break
            }
        }
    }

    


}

let minheap = new MinHeap()

minheap.insert(1)
minheap.insert(6)
minheap.insert(5)
minheap.insert(4)
minheap.insert(2)

minheap.deleteMin()

console.log(minheap.heap)