
class Stack{
    constructor(){
        this.stack = []
        this.stack2 = []
    }

    push(data){
        return this.stack.push(data)
    }

    pop(){
        if(this.isEmpty()) return "UNDERFLOW!!!"
        else return this.stack.pop()
    }

    peek(){
        return this.stack[0]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    print(){
        console.log(this.stack)
    }

    remove(idx){
        while(this.stack.length > idx){
            this.stack2.push(this.stack.pop())
        }

        this.stack.pop()

        while(this.stack2.length !==0){
            this.stack.push(this.stack2.pop())
        }
    }

    sortStack(){
        for(let i=0;i<this.stack.length;i++){
            let minVal = i
            for(let j=i+1;j<this.stack.length;j++){
                if(this.stack[minVal]>this.stack[j]){
                    minVal = j
                }
            }
            if(minVal !== i){
                this.stack2.push(minVal)
                [this.stack[minVal],this.stack[i]] = [this.stack[i],this.stack[minVal]]
            }  
        }
        return this.stack2
    }


}

let st = new Stack()

st.push(2)
st.push(1)
st.push(3)
st.push(5)
st.push(4)

console.log(st.sortStack())

// st.remove(3)

// st.print()


