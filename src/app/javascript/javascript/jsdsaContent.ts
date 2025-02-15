import { JsContent } from "./jscontents";


export class JsDsaContent{
    dsaContents: JsContent[] = [
        {
            articleTitle: "Arrays",
            content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Arrays in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Arrays in JavaScript are used to store multiple values in a single variable. They are dynamic, can hold different data types, and provide various built-in methods for manipulation.
  </p>

  <h3 style="color: #16a085;">Types of Arrays in JavaScript</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Number Array</li>
    <li>String Array</li>
    <li>Boolean Array</li>
    <li>Mixed Type Array</li>
    <li>Array of Objects</li>
  </ul>

  <h3 style="color: #e67e22;">Number Array</h3>
  <pre">
    <code class="language-javascript">
      let numbers = [10, 20, 30, 40, 50];
      console.log(numbers[0]); // Output: 10
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">String Array</h3>
  <pre>
    <code class="language-javascript">
      let fruits = ["Apple", "Banana", "Cherry"];
      console.log(fruits[1]); // Output: Banana
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Boolean Array</h3>
  <pre >
    <code class="language-javascript">
      let statusArray = [true, false, true, false];
      console.log(statusArray[2]); // Output: true
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Mixed Type Array</h3>
  <pre >
    <code class="language-javascript">
      let mixedArray = ["Hello", 100, true, { name: "John" }];
      console.log(mixedArray[3].name); // Output: John
    </code>
  </pre>

  <h3 style="color: #27ae60;">Array of Objects</h3>
  <pre >
    <code class="language-javascript">
      let users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
      ];
      console.log(users[1].name); // Output: Bob
    </code>
  </pre>
</div>`
        },
        {
            articleTitle: `Objects`,
            content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Objects in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Objects in JavaScript are collections of key-value pairs, allowing you to store and manipulate structured data efficiently.
  </p>

  <h3 style="color: #16a085;">Creating an Object</h3>
  <pre >
    <code class="language-javascript">
      let person = {
        name: "Alice",
        age: 25,
        city: "New York"
      };
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Accessing Property Values</h3>
  <pre >
    <code class="language-javascript">
      console.log(person.name); // Output: Alice
      console.log(person["age"]); // Output: 25
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Adding New Key-Value Pairs</h3>
  <pre >
    <code class="language-javascript">
      person.country = "USA";
      console.log(person);
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Removing a Property</h3>
  <pre >
    <code class="language-javascript">
      delete person.city;
      console.log(person);
    </code>
  </pre>

  <h3 style="color: #27ae60;">Freezing an Object</h3>
  <pre >
    <code class="language-javascript">
      Object.freeze(person);
      person.age = 30; // This will not change the age property
      console.log(person);
    </code>
  </pre>

  <h3 style="color: #f39c12;">Copying an Object</h3>
  <pre >
    <code class="language-javascript">
      let copiedPerson = { ...person };
      console.log(copiedPerson);
    </code>
  </pre>

  <h3 style="color: #d35400;">Destructuring an Object</h3>
  <pre >
    <code class="language-javascript">
      let { name, age } = person;
      console.log(name); // Output: Alice
      console.log(age); // Output: 25
    </code>
  </pre>
</div>
`
        },
        {
            articleTitle: "Linked Lists",
            content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Linked Lists in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A Linked List is a data structure in which elements (nodes) are linked using pointers. Each node contains two parts: data and a reference (pointer) to the next node in the sequence.
  </p>

  <h3 style="color: #16a085;">Creating a Node</h3>
  <pre >
    <code class="language-javascript">
      class Node {
        constructor(value) {
          this.value = value;
          this.next = null;
        }
      }
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Creating a Linked List</h3>
  <pre >
    <code class="language-javascript">
      class LinkedList {
        constructor() {
          this.head = null;
        }
      }
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Adding a Node to the End</h3>
  <pre >
    <code class="language-javascript">
      add(value) {
        let newNode = new Node(value);
        if (!this.head) {
          this.head = newNode;
          return;
        }
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Removing a Node</h3>
  <pre >
    <code class="language-javascript">
      remove(value) {
        if (!this.head) return;
        if (this.head.value === value) {
          this.head = this.head.next;
          return;
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
          current = current.next;
        }
        if (current.next) {
          current.next = current.next.next;
        }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Searching for a Node</h3>
  <pre >
    <code class="language-javascript">
      find(value) {
        let current = this.head;
        while (current) {
          if (current.value === value) return current;
          current = current.next;
        }
        return null;
      }
    </code>
  </pre>

  <h3 style="color: #f39c12;">Printing the Linked List</h3>
  <pre >
    <code class="language-javascript">
      print() {
        let current = this.head;
        let result = "";
        while (current) {
          result += current.value + " -> ";
          current = current.next;
        }
        console.log(result + "null");
      }
    </code>
  </pre>
</div>
`
        },
        {
            articleTitle: "Stacks",
            content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Stacks in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A Stack is a linear data structure that follows the Last In, First Out (LIFO) principle. Elements can only be added or removed from the top of the stack.
  </p>

  <h3 style="color: #16a085;">Creating a Stack</h3>
  <pre >
    <code class="language-javascript">
      class Stack {
        constructor() {
          this.items = [];
        }
      }
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Adding (Pushing) an Element</h3>
  <pre >
    <code class="language-javascript">
      push(element) {
        this.items.push(element);
      }
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Removing (Popping) an Element</h3>
  <pre >
    <code class="language-javascript">
      pop() {
        if (this.items.length === 0) return "Underflow";
        return this.items.pop();
      }
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Peeking at the Top Element</h3>
  <pre >
    <code class="language-javascript">
      peek() {
        return this.items[this.items.length - 1];
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Checking if Stack is Empty</h3>
  <pre >
    <code class="language-javascript">
      isEmpty() {
        return this.items.length === 0;
      }
    </code>
  </pre>

  <h3 style="color: #f39c12;">Printing the Stack</h3>
  <pre >
    <code class="language-javascript">
      printStack() {
        console.log(this.items.join(" -> "));
      }
    </code>
  </pre>
   <h3 style="color: #16a085;">Example 1: Stack with Object</h3>
    <pre >
    <code class="language-javascript">
    class ObjectStack {
  constructor() {
    this.items = {};
    this.topIndex = 0;
  }

  // Push (Add element to the top of the stack)
  push(element) {
    this.items[this.topIndex] = element;
    this.topIndex++;
  }

  // Pop (Remove element from the top of the stack)
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    this.topIndex--;
    const topItem = this.items[this.topIndex];
    delete this.items[this.topIndex];
    return topItem;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.topIndex === 0;
  }

  // Get the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.topIndex - 1];
  }
}

// Example usage:
let objectStack = new ObjectStack();
objectStack.push({ id: 1, name: "Alice" });
objectStack.push({ id: 2, name: "Bob" });
objectStack.push({ id: 3, name: "Charlie" });
console.log(objectStack.pop());  // Outputs { id: 3, name: "Charlie" }
console.log(objectStack.peek()); // Outputs { id: 2, name: "Bob" }
   </code>
  </pre>
</div>
`
        },
        {
          articleTitle: `Queues`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Queues in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A Queue is a linear data structure that follows the First In, First Out (FIFO) principle. Elements are added at the rear and removed from the front of the queue.
  </p>

  <h3 style="color: #16a085;">Creating a Queue</h3>
  <pre >
    <code class="language-javascript">
      class Queue {
        constructor() {
          this.items = [];
        }
      }
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Enqueue (Adding an Element)</h3>
  <pre >
    <code class="language-javascript">
      enqueue(element) {
        this.items.push(element);
      }
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Dequeue (Removing an Element)</h3>
  <pre >
    <code class="language-javascript">
      dequeue() {
        if (this.items.length === 0) return "Underflow";
        return this.items.shift();
      }
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Front (Peeking at the First Element)</h3>
  <pre >
    <code class="language-javascript">
      front() {
        return this.items[0];
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Checking if Queue is Empty</h3>
  <pre >
    <code class="language-javascript">
      isEmpty() {
        return this.items.length === 0;
      }
    </code>
  </pre>

  <h3 style="color: #f39c12;">Printing the Queue</h3>
  <pre >
    <code class="language-javascript">
      printQueue() {
        console.log(this.items.join(" <- "));
      }
    </code>
  </pre>
   
<h3 style="color:rgb(109, 70, 7);"> Example 1 :- queue with number or string or boolean </h3>
  <pre>
  <code class = "language-javascript">
  class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue (Add element to the end of the queue)
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue (Remove element from the front of the queue)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the front element of the queue
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }
}

// Example usage:
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Outputs 1
console.log(queue.front());   // Outputs 2
</code>
</pre>

<br>
<h3 style="color:rgb(61, 40, 5);">Example 2 :-  queue with objects </h3>
<pre>
<code class="language-javascript">
class ObjectQueue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  // Enqueue (Add element to the end of the queue)
  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }

  // Dequeue (Remove element from the front of the queue)
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    const frontItem = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return frontItem;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.frontIndex === this.backIndex;
  }

  // Get the front element of the queue
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.frontIndex];
  }
}

// Example usage:
let objectQueue = new ObjectQueue();
objectQueue.enqueue({ id: 1, name: "Alice" });
objectQueue.enqueue({ id: 2, name: "Bob" });
objectQueue.enqueue({ id: 3, name: "Charlie" });
console.log(objectQueue.dequeue()); // Outputs { id: 1, name: "Alice" }
console.log(objectQueue.front());   // Outputs { id: 2, name: "Bob" }
</code>
</pre>

</div>`

        }
    ];
}