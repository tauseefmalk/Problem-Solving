//-------------------------- stack implementation -------------------
class Stack{
    constructor(){
        this.items=[]
    }
    push(e){
        this.items.push(e)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
       return this.items[0]
    }
    clear(){
        return this.items=[]
    }
    isEmpty(){
        return this.items.length === 0
    }
    size(){
        return this.items.length
    }
}
let stack = new Stack()
stack.push(21)
stack.push(21)
stack.push(21)
// stack.pop()
// stack.peek()
// stack.clear
// stack.isEmpty()
// console.log(stack.pop());

//------------------------- QUEUE -------------------------

class Queue{
    constructor(){
        this.item=[]
    }
    enqueue(e){
        this.item.push(e)
    }
    dequeue(){
        return this.item.shift()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    size(){
        return this.item.length
    }
    isEmpty(){
        return this.item.length ===0
    }
}
let queue= new Queue()
queue.enqueue(24)
queue.enqueue(25)
queue.enqueue(27)
console.log(queue.isEmpty());


