class Node  {
    constructor(data ,next=null){
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    // Insert first node
    insertHead(data){
        this.head = new Node(data, this.head)
        this.size++;
    }
    // print data of list
    printListData(){
        let current = this.head;
        while(current){
            // console.log(current, "current")
            // console.log(current.data)
            current = current.next
        }
    }
    // Insert last node
    insertLast(data){
        let node = new Node(data);
        let current;
        if(!this.head){
            this.head = node;
        }else{
            current = this.head
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAtIndex(data, index){
        if(index > 0 && index > this.size){
            return
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }
        const node = new Node(data);
        let current, previous;
        current = this.head;
        let count = 0;
        while(count < index){
            previous = current; //Node before the index
            count++;
            current = current.next; //Node after the index
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    getAtIndex(index){
        let current = this.head;
        let count = 0
        while(current){
            if(count === index){
                console.log(current.data)
            }
            current = current.next;
            count++
        }
        return null
    }
    removeAtIndex(index){
        if(index > 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
            // Remove first
        } else{
            while(count < index){
                count++;
                previous = current;
                current = current.next
            }
            previous.next = current.next
        }
    }
}

// const n1 = new Node(100);
const ll = new LinkedList();
// ll.insertHead(100)
ll.insertHead(200)
ll.insertHead(300)
ll.insertLast(500)
// ll.insertAtIndex(400,1)
// ll.printListData()
console.log(ll)
