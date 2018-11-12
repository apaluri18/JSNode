function linkedList(){
this.head =null;
this.tail =null;
}

function node(value,previous,next)  {
    this.value =value;
    this.previous=previous;
    this.next=next;
}

function makenodeHead(value,previous,next)  {
    this.value =value;
    this.previous=previous;
    this.next=next;
}

linkedList.prototype.makenodeHead = function(value){
    const newNode = new node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode; 
    this.head = newNode;
}

const linkedList1 = new linkedList();
linkedList1.makenodeHead(1);
linkedList1.makenodeHead(2);
linkedList1.makenodeHead(3);
console.log(linkedList1);