// //-------------------------- stack implementation -------------------
// class Stack{
//     constructor(){
//         this.items=[]
//     }
//     push(e){
//         this.items.push(e)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//        return this.items[0]
//     }
//     clear(){
//         return this.items=[]
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     size(){
//         return this.items.length
//     }
// }
// let stack = new Stack()
// stack.push(21)
// stack.push(21)
// stack.push(21)
// // stack.pop()
// // stack.peek()
// // stack.clear
// // stack.isEmpty()
// // console.log(stack.pop());

// //------------------------- QUEUE -------------------------

// class Queue{
//     constructor(){
//         this.item=[]
//     }
//     enqueue(e){
//         this.item.push(e)
//     }
//     dequeue(){
//         return this.item.shift()
//     }
//     peek(){
//         return this.item[this.item.length-1]
//     }
//     size(){
//         return this.item.length
//     }
//     isEmpty(){
//         return this.item.length ===0
//     }
// }
// let queue= new Queue()
// queue.enqueue(24)
// queue.enqueue(25)
// queue.enqueue(27)
// console.log(queue.isEmpty());

// ------------------LinkList-----------------

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkList {
    constructor() {
        this.head = null;
    }
    addToFirst(value) {
        let newNode = new Node(value)
        if (this.head) {
            newNode.next = this.head
            this.head = newNode

        } else {
            this.head = newNode
        }
    }
    addToLast(value){
        let newNode= new Node(value)
        if(this.head){
            let current = this.head
            while(current.next !== null){
                current= current.next
            }
            current.next= newNode
        }else{
            this.head = value
        }
    }
    size(){
        let count=0
        let current = this.head;
        while(current){
            current=current.next
            count++
        }
        return count
    }
    addAt(index,value){
        if(index>this.size() || index<0){
            console.log("invalid index");
        }
        let current = this.head;
        for(let i=0; i<index-1; i++){
            current= current.next 
        }
        let newNode = new Node(value)
        newNode.next =current.next;
        current.next = newNode;
    }
    removeAt(index){
        if(index>this.size() || index<0){
            console.error("invalid index");
        }
        let current= this.head
        for(let i=0; i<index-1; i++){
            current= current.next
        }
        current.next = current.next.next
    }
    removeFirst(){
        this.head= this.head.next
    }
    removeLast(){
        let current = this.head;
        while(current.next.next){
            current= current.next
        }
        current.next = null
    }
    print(){
        let current = this.head
        let result = ""
        while(current){
            result += current.data + "=>"
            current= current.next
        }
        result+= "null"
        console.log(result);
        
    }
}
let linkList = new LinkList()
linkList.addToFirst(1)
linkList.addToLast(2)
linkList.addToLast(3)
linkList.addToLast(4)
linkList.addAt(2,7)
linkList.removeAt(2)
linkList.removeFirst()
linkList.removeLast()


console.log(linkList.print());

