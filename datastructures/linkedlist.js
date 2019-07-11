
//Linked List

class Node {
	constructor(element) {
		this.element=element;
		this.next=null;
	}
}

class LinkedList {
	constructor() {
		this.head=null;
		this.size = 0;
	}

	//functions to be implemented

	
	//removeElement(element)

	//Helper methods
	//isEmpty
	//size_of_list
	//Printlist

	add(element) 
{ 
    // creates a new node 
    var node = new Node(element); 
  
    // to store current node 
    var current; 
  
    // if list is Empty add the 
    // element and make it head 
    if (this.head == null) 
        this.head = node; 
    else { 
        current = this.head; 
  
        // iterate to the end of the 
        // list 
        while (current.next) { 
            current = current.next; 
        } 
  
        // add node 
        current.next = node; 
    } 
    this.size++; 
} 

	insertAt(element,index) {
		if (index > 0 && index > this.size)
			return false;
		else {
			//creates a new node
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			//add the element to this
			//first index

			if (index = 0) {
				node.next = head;
				this.head =  node;
			} else {
				curr = this.head;
				var it = 0;
			}

			//iterate over the list ot find the 
			//position of the insert

			while(it < index) {
				it++
				prev = curr;
				curr = curr.next;
			}
			this.size++;
		}
	}
		//removes and elemnt from the
		//specific location

		removeFrom(index) {
			if(index > 0 && index > this.size)
				return -1;
			else {
				var curr, prev, it =0;
				curr = this.head;
				prev = curr;

				//deleting the 1st element
				if (index == 0) {
					this.head = curr.next;
				}
				else {
					//iterate over the list to
					//the position to remove an element

					while (it < index) {
						it++;
						prev = curr;
						curr = curr.next();
					}
					this.size --;

					//return the remove element
					return curr.element;
				}
			}

		}

		printList() {
			var curr = this.head;
			var str = "";
			while (curr) {
				str += curr.element + " ";
				curr = curr.next;
			}
			console.log(str);
		}
	
}

//Implementation

var ll = new LinkedList();

ll.add(10);
ll.add(11);
ll.add(12);

ll.printList();