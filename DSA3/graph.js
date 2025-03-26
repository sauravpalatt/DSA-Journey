class Graph {
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]) this.adjecencyList[vertex] = new Set();
    }
    addEdge(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]) this.addVertex(vertex1)
        if(!this.adjecencyList[vertex2]) this.addVertex(vertex2)
        
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]) return ;
        for(let neighbour of this.adjecencyList[vertex]){
            this.removeEdge(vertex,neighbour)
        }
        delete this.adjecencyList[vertex]
    }
    removeEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
        this.adjecencyList[vertex2].delete(vertex1)
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + ' -> '+ [...this.adjecencyList[vertex]])
        }
    }
    
    DFS(start, visited = new Set()){
        if(visited.has(start)) return null;
        visited.add(start);
        console.log(start);
        for(let neighbour of this.adjecencyList[start]){
            if(!visited.has(neighbour)) this.DFS(neighbour,visited)
        }
    }
    
    longestPath(start,end){
        let resArr = []
        let queue = [[start]]
        while(queue.length){
            let path = queue.shift()  //[A]
            let node = path[path.length-1]
            if(node===end)resArr.push(path)
            for(let neighbour of this.adjecencyList[node]){
                if(!path.includes(neighbour)){
            
                    queue.push([...path,neighbour])
                }
            }
        }
        let output = resArr.pop()
        return output
    }
    
    shortestPath(start,end){
        let included = new Set()
        
        included.add(start)
        let queue = [[start]]
        
        while(queue.length){
            let path = queue.pop()
            let node = path[path.length-1]
            if(node===end) return path

            for(let neighbour of this.adjecencyList[node]){
                if(!included.has(neighbour)){
                    queue.push([...path,neighbour])
                }
            }
        }
    }
}

const graph = new Graph();

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','E')
graph.addEdge('B','G')
graph.addEdge('C','D')
graph.addEdge('C','E')
graph.addEdge('C','F')
graph.addEdge('D','F')
graph.addEdge('D','G')
graph.addEdge('F','H')

console.log(graph.longestPath("A","H"))
console.log(graph.shortestPath("A","H"))
graph.display()

