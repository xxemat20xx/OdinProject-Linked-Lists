class Node{
    constructor(value=null, nextNode=null){
        this.value = value;
        this.nextNode = nextNode;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    prepend(value){
        this.head = new Node(value, this.head);
        this.size++;
    }
    append(value){ 
        const newNode = new Node(value);
        
        if(!this.head){
            this.head = newNode;
            this.size++;
            return;
        }
        // traverse to the end of the list
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        // append the new node
        current.nextNode = newNode; 
        this.size++;
    }
    at(index){// get the value at a specific index in a list
        let current = this.head;
        let count = 0;
        while(current){
            if(count === index){
                console.log(current.value);
            }
            count++;
            current = current.nextNode;
        }
        return null;
    }
    remove(index){
        if(index === 0){
            this.head = this.head.nextNode;
            this.size--;
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        while(count < index){
            count++;
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = current.nextNode;
        this.size--;
    }
    print(){
        let current = this.head;
        while(current){
            console.log(current.value);
            current = current.nextNode;
        }
    }
    tail(){
        let current = this.head;
        while(current.nextNode){
            current = current.nextNode;
        }
        console.log(current.value);
    }
    length(){
        console.log(this.size); 
    }
    pop(){
        let current = this.head;
        let previous;
        while(current.nextNode){
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
        this.size--;
    }
    contains(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                console.log(true);
                return;
            }
            current = current.nextNode;
        }
        console.log(false);
    }
    find(value){
        let current = this.head;
        let count = 0;
        while(current){
            if(current.value === value){
                console.log(count);
                return;
            }
            count++;
            current = current.nextNode;
        }
        console.log(null);
    }
    toString(){
        let current = this.head;
        let str = '';
        while(current){
            str += `(${current.value}) -> `;
            current = current.nextNode;
        }
        
        str += 'null';
        return str;
     
    }
}

const linkli = new LinkedList();

// linkli.append(1);
// linkli.append(2);
// linkli.append(3);   
// linkli.append(4);
// linkli.append(5);

linkli.append("dog");
linkli.append("cat");
linkli.append("parrot");
linkli.append("hamster");
linkli.append("snake");
linkli  .append("turtle");

console.log(linkli.toString());


