// //-------------------------- stack implementation -------------------
//// 1. stack emplementation

class Stack {
    constructor (item) {
        this.item = [];
    }
    push(element){
        this.item.push(element)
    }
    pop(){
        this.item.pop()
    }
    peek(){
        return this.item[this.item.length-1]
    }
    clear(){
        return this.item=[]
    }
    isEmpty(){
        return this.item===0
    }
    size(){
        return this.item.length
    }
    print(){
        return console.log(this.item.join("->")
        )
    }
}
const newStack = new Stack();
newStack.push(2);
newStack.push(2);
newStack.push(2);
// newStack.pop()
newStack.peek()
newStack.print()

// console.log(newStack.size());

// 2. Queue implementation

class Queue{
    constructor(){
        this.item = [];
    }
    enqueue(element){
        this.item.push(element)
    }
    //first item will be deducted from array
    dequeue(){
        this.item.shift()
    }
    front(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        return this.item[0]
    }
    isEmpty(){
        return this.item.length === 0;
    }
    size(){
        return this.item.length
    }
    print(){
        return console.log(this.item.join("<-"))
    }
}
const queue = new Queue();
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.dequeue()
queue.print()
console.log(queue)
// console.log(queue.front());
console.log(queue.size());


// ------------------LinkList-----------------

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null
    }
    addToFirst(data) {
        const node = new Node(data)
        if (this.head) {
            node.next = this.head
            this.head = node
        } else {
            this.head = node;
        }
    }
    addToLast(data) {
        const node = new Node(data);
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node
    }
    removeFromFirst() {
        let current = this.head;
        if (current) {
            this.head = current.next;
        } else {
            return console.log("linklist is already empty");
        }
    }
    removeFromLast() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
    addAt(index, data) {
        const node = new Node(data)
        let current = this.head;
        if (index === 0) {
            node.next = this.head
            this.head = node;
        } else {
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            node.next = current.next;
            current.next = node;
        }
    }
    removeAt(index){
        let current= this.head;
        if(index === 0){
            this.head = current.next
        }else{
            for(let i=0; i<index-1; i++){
                current= current.next
            }
            current.next= current.next.next
        }
    }
    middleNode(){
        let slow=this.head;
        let fast = this.head
        while(fast.next){
            fast=fast.next.next
            slow=slow.next
        }
        return slow;
    }
    thirdLast(){
        let current= this.head;
        while(current.next.next.next){
            current=current.next
        }
        return current;
    }
    firstRepeating(){
        let current = this.head
        let set = new Set()
        while(current){
            if(set.has(current.data)){ return current.data}
            set.add(current.data)
            current= current.next;
        }
        console.log(current.data);
        
    }
    print() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + "->"
            current = current.next
        }
        result += "null"
        return result
    }
}
const linklist = new LinkList();
linklist.addToFirst(2)
linklist.addToFirst(3)
linklist.addToFirst(2)
linklist.addToFirst(1)
// linklist.removeFromFirst()
linklist.addToLast(5)
// linklist.removeFromLast()
linklist.addAt(0, 0)
linklist.removeAt(0)
// linklist.firstRepeating()
// linklist.print()
// console.log(linklist.middleNode());
console.log(linklist.firstRepeating());
console.log(linklist.print());


