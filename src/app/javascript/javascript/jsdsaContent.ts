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

        },
        {
          articleTitle:`Trees`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Trees in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Trees are a fundamental data structure in computer science used to represent hierarchical data. In JavaScript, trees can be implemented using objects and arrays, allowing for efficient data organization and manipulation.
  </p>

  <h3 style="color: #16a085;">Types of Trees in JavaScript</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Binary Tree</li>
    <li>Binary Search Tree</li>
    <li>AVL Tree</li>
    <li>Red-Black Tree</li>
    <li>N-ary Tree</li>
  </ul>

  <h3 style="color: #e67e22;">Binary Tree</h3>
  <pre>
    <code class="language-javascript">
      class Node {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
        }
      }

      let root = new Node(10);
      root.left = new Node(5);
      root.right = new Node(15);
      console.log(root.value); // Output: 10
      console.log(root.left.value); // Output: 5
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Binary Search Tree</h3>
  <pre>
    <code class="language-javascript">
      class BSTNode {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
        }
      }

      class BinarySearchTree {
        constructor() {
          this.root = null;
        }

        insert(value) {
          const newNode = new BSTNode(value);
          if (this.root === null) {
            this.root = newNode;
          } else {
            this.insertNode(this.root, newNode);
          }
        }

        insertNode(node, newNode) {
          if (newNode.value < node.value) {
            if (node.left === null) {
              node.left = newNode;
            } else {
              this.insertNode(node.left, newNode);
            }
          } else {
            if (node.right === null) {
              node.right = newNode;
            } else {
              this.insertNode(node.right, newNode);
            }
          }
        }
      }

      let bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      console.log(bst.root.value); // Output: 10
      console.log(bst.root.left.value); // Output: 5
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">AVL Tree</h3>
  <pre>
    <code class="language-javascript">
      class AVLNode {
        constructor(value) {
          this.value = value;
          this.left = null;
          this.right = null;
          this.height = 1;
        }
      }

      class AVLTree {
        constructor() {
          this.root = null;
        }

        getHeight(node) {
          return node ? node.height : 0;
        }

        getBalanceFactor(node) {
          return this.getHeight(node.left) - this.getHeight(node.right);
        }

        rotateRight(y) {
          let x = y.left;
          let T2 = x.right;

          x.right = y;
          y.left = T2;

          y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
          x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

          return x;
        }

        insert(value) {
          this.root = this.insertNode(this.root, value);
        }

        insertNode(node, value) {
          if (node === null) {
            return new AVLNode(value);
          }

          if (value < node.value) {
            node.left = this.insertNode(node.left, value);
          } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
          } else {
            return node;
          }

          node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

          let balanceFactor = this.getBalanceFactor(node);

          if (balanceFactor > 1 && value < node.left.value) {
            return this.rotateRight(node);
          }

          return node;
        }
      }

      let avlTree = new AVLTree();
      avlTree.insert(10);
      avlTree.insert(5);
      avlTree.insert(15);
      console.log(avlTree.root.value); // Output: 10
      console.log(avlTree.root.left.value); // Output: 5
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Red-Black Tree</h3>
  <pre>
    <code class="language-javascript">
      class RBNode {
        constructor(value, color) {
          this.value = value;
          this.color = color;
          this.left = null;
          this.right = null;
          this.parent = null;
        }
      }

      class RedBlackTree {
        constructor() {
          this.root = null;
        }

        insert(value) {
          let node = new RBNode(value, 'RED');
          if (this.root === null) {
            this.root = node;
            node.color = 'BLACK';
          } else {
            this.insertNode(this.root, node);
          }
        }

        insertNode(root, node) {
          if (node.value < root.value) {
            if (root.left === null) {
              root.left = node;
              node.parent = root;
            } else {
              this.insertNode(root.left, node);
            }
          } else {
            if (root.right === null) {
              root.right = node;
              node.parent = root;
            } else {
              this.insertNode(root.right, node);
            }
          }
        }
      }

      let rbTree = new RedBlackTree();
      rbTree.insert(10);
      rbTree.insert(5);
      rbTree.insert(15);
      console.log(rbTree.root.value); // Output: 10
      console.log(rbTree.root.left.value); // Output: 5
    </code>
  </pre>

  <h3 style="color: #27ae60;">N-ary Tree</h3>
  <pre>
    <code class="language-javascript">
      class NaryNode {
        constructor(value) {
          this.value = value;
          this.children = [];
        }

        addChild(child) {
          this.children.push(child);
        }
      }

      let root = new NaryNode(10);
      let child1 = new NaryNode(5);
      let child2 = new NaryNode(15);
      root.addChild(child1);
      root.addChild(child2);
      console.log(root.value); // Output: 10
      console.log(root.children[0].value); // Output: 5
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Graphs`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Graphs in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Graphs are a non-linear data structure consisting of nodes (vertices) and edges that connect these nodes. They are widely used to represent networks, such as social networks, transportation systems, and more. In JavaScript, graphs can be implemented using adjacency lists or adjacency matrices.
  </p>

  <h3 style="color: #16a085;">Types of Graphs in JavaScript</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Undirected Graph</li>
    <li>Directed Graph (Digraph)</li>
    <li>Weighted Graph</li>
    <li>Cyclic Graph</li>
    <li>Acyclic Graph</li>
  </ul>

  <h3 style="color: #e67e22;">Undirected Graph</h3>
  <pre>
    <code class="language-javascript">
      class Graph {
        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(vertex1, vertex2) {
          this.adjacencyList.get(vertex1).push(vertex2);
          this.adjacencyList.get(vertex2).push(vertex1);
        }

        printGraph() {
          for (let [vertex, edges] of this.adjacencyList) {
            console.log(\`\${vertex} -> \${edges.join(', ')}\`);
          }
        }
      }

      let graph = new Graph();
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.printGraph();
      // Output:
      // A -> B, C
      // B -> A
      // C -> A
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Directed Graph (Digraph)</h3>
  <pre>
    <code class="language-javascript">
      class DirectedGraph {
        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(fromVertex, toVertex) {
          this.adjacencyList.get(fromVertex).push(toVertex);
        }

        printGraph() {
          for (let [vertex, edges] of this.adjacencyList) {
            console.log(\`\${vertex} -> \${edges.join(', ')}\`);
          }
        }
      }

      let digraph = new DirectedGraph();
      digraph.addVertex('A');
      digraph.addVertex('B');
      digraph.addVertex('C');
      digraph.addEdge('A', 'B');
      digraph.addEdge('A', 'C');
      digraph.printGraph();
      // Output:
      // A -> B, C
      // B -> 
      // C -> 
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Weighted Graph</h3>
  <pre>
    <code class="language-javascript">
      class WeightedGraph {
        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(vertex1, vertex2, weight) {
          this.adjacencyList.get(vertex1).push({ node: vertex2, weight });
          this.adjacencyList.get(vertex2).push({ node: vertex1, weight });
        }

        printGraph() {
          for (let [vertex, edges] of this.adjacencyList) {
            let edgeList = edges.map(edge => \`\${edge.node}(\${edge.weight})\`);
            console.log(\`\${vertex} -> \${edgeList.join(', ')}\`);
          }
        }
      }

      let weightedGraph = new WeightedGraph();
      weightedGraph.addVertex('A');
      weightedGraph.addVertex('B');
      weightedGraph.addVertex('C');
      weightedGraph.addEdge('A', 'B', 3);
      weightedGraph.addEdge('A', 'C', 5);
      weightedGraph.printGraph();
      // Output:
      // A -> B(3), C(5)
      // B -> A(3)
      // C -> A(5)
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Cyclic Graph</h3>
  <pre>
    <code class="language-javascript">
      class CyclicGraph {
        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(vertex1, vertex2) {
          this.adjacencyList.get(vertex1).push(vertex2);
          this.adjacencyList.get(vertex2).push(vertex1);
        }

        hasCycle() {
          const visited = new Set();
          for (let vertex of this.adjacencyList.keys()) {
            if (!visited.has(vertex) && this.detectCycle(vertex, visited, null)) {
              return true;
            }
          }
          return false;
        }

        detectCycle(vertex, visited, parent) {
          visited.add(vertex);
          for (let neighbor of this.adjacencyList.get(vertex)) {
            if (!visited.has(neighbor)) {
              if (this.detectCycle(neighbor, visited, vertex)) {
                return true;
              }
            } else if (neighbor !== parent) {
              return true;
            }
          }
          return false;
        }
      }

      let cyclicGraph = new CyclicGraph();
      cyclicGraph.addVertex('A');
      cyclicGraph.addVertex('B');
      cyclicGraph.addVertex('C');
      cyclicGraph.addEdge('A', 'B');
      cyclicGraph.addEdge('B', 'C');
      cyclicGraph.addEdge('C', 'A');
      console.log(cyclicGraph.hasCycle()); // Output: true
    </code>
  </pre>

  <h3 style="color: #27ae60;">Acyclic Graph</h3>
  <pre>
    <code class="language-javascript">
      class AcyclicGraph {
        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(vertex1, vertex2) {
          this.adjacencyList.get(vertex1).push(vertex2);
        }

        isAcyclic() {
          const visited = new Set();
          const recStack = new Set();

          for (let vertex of this.adjacencyList.keys()) {
            if (this.detectCycle(vertex, visited, recStack)) {
              return false;
            }
          }
          return true;
        }

        detectCycle(vertex, visited, recStack) {
          if (recStack.has(vertex)) return true;
          if (visited.has(vertex)) return false;

          visited.add(vertex);
          recStack.add(vertex);

          for (let neighbor of this.adjacencyList.get(vertex)) {
            if (this.detectCycle(neighbor, visited, recStack)) {
              return true;
            }
          }

          recStack.delete(vertex);
          return false;
        }
      }

      let acyclicGraph = new AcyclicGraph();
      acyclicGraph.addVertex('A');
      acyclicGraph.addVertex('B');
      acyclicGraph.addVertex('C');
      acyclicGraph.addEdge('A', 'B');
      acyclicGraph.addEdge('B', 'C');
      console.log(acyclicGraph.isAcyclic()); // Output: true
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Heaps`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Heaps in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A heap is a specialized tree-based data structure that satisfies the heap property. It is commonly used to implement priority queues and is efficient for operations like finding the maximum or minimum element in a dataset. In JavaScript, heaps can be implemented using arrays.
  </p>

  <h3 style="color: #16a085;">Types of Heaps in JavaScript</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Min-Heap</li>
    <li>Max-Heap</li>
    <li>Binary Heap</li>
    <li>Priority Queue (using Heap)</li>
  </ul>

  <h3 style="color: #e67e22;">Min-Heap</h3>
  <pre>
    <code class="language-javascript">
      class MinHeap {
        constructor() {
          this.heap = [];
        }

        // Helper methods
        getParentIndex(index) {
          return Math.floor((index - 1) / 2);
        }

        getLeftChildIndex(index) {
          return 2 * index + 1;
        }

        getRightChildIndex(index) {
          return 2 * index + 2;
        }

        swap(index1, index2) {
          [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
        }

        // Insert a new element into the heap
        insert(value) {
          this.heap.push(value);
          this.heapifyUp();
        }

        heapifyUp() {
          let index = this.heap.length - 1;
          while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
          }
        }

        // Remove and return the minimum element
        extractMin() {
          if (this.heap.length === 0) return null;
          const min = this.heap[0];
          this.heap[0] = this.heap.pop();
          this.heapifyDown();
          return min;
        }

        heapifyDown() {
          let index = 0;
          const length = this.heap.length;
          while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
              smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
              smallest = rightChildIndex;
            }

            if (smallest === index) break;
            this.swap(index, smallest);
            index = smallest;
          }
        }
      }

      let minHeap = new MinHeap();
      minHeap.insert(10);
      minHeap.insert(5);
      minHeap.insert(15);
      console.log(minHeap.extractMin()); // Output: 5
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Max-Heap</h3>
  <pre>
    <code class="language-javascript">
      class MaxHeap {
        constructor() {
          this.heap = [];
        }

        // Helper methods
        getParentIndex(index) {
          return Math.floor((index - 1) / 2);
        }

        getLeftChildIndex(index) {
          return 2 * index + 1;
        }

        getRightChildIndex(index) {
          return 2 * index + 2;
        }

        swap(index1, index2) {
          [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
        }

        // Insert a new element into the heap
        insert(value) {
          this.heap.push(value);
          this.heapifyUp();
        }

        heapifyUp() {
          let index = this.heap.length - 1;
          while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            this.swap(parentIndex, index);
            index = parentIndex;
          }
        }

        // Remove and return the maximum element
        extractMax() {
          if (this.heap.length === 0) return null;
          const max = this.heap[0];
          this.heap[0] = this.heap.pop();
          this.heapifyDown();
          return max;
        }

        heapifyDown() {
          let index = 0;
          const length = this.heap.length;
          while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let largest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] > this.heap[largest]) {
              largest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] > this.heap[largest]) {
              largest = rightChildIndex;
            }

            if (largest === index) break;
            this.swap(index, largest);
            index = largest;
          }
        }
      }

      let maxHeap = new MaxHeap();
      maxHeap.insert(10);
      maxHeap.insert(5);
      maxHeap.insert(15);
      console.log(maxHeap.extractMax()); // Output: 15
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Binary Heap</h3>
  <pre>
    <code class="language-javascript">
      class BinaryHeap {
        constructor(compareFn) {
          this.heap = [];
          this.compare = compareFn;
        }

        // Helper methods
        getParentIndex(index) {
          return Math.floor((index - 1) / 2);
        }

        getLeftChildIndex(index) {
          return 2 * index + 1;
        }

        getRightChildIndex(index) {
          return 2 * index + 2;
        }

        swap(index1, index2) {
          [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
        }

        // Insert a new element into the heap
        insert(value) {
          this.heap.push(value);
          this.heapifyUp();
        }

        heapifyUp() {
          let index = this.heap.length - 1;
          while (index > 0) {
            const parentIndex = this.getParentIndex(index);
            if (this.compare(this.heap[parentIndex], this.heap[index]) <= 0) break;
            this.swap(parentIndex, index);
            index = parentIndex;
          }
        }

        // Remove and return the root element
        extractRoot() {
          if (this.heap.length === 0) return null;
          const root = this.heap[0];
          this.heap[0] = this.heap.pop();
          this.heapifyDown();
          return root;
        }

        heapifyDown() {
          let index = 0;
          const length = this.heap.length;
          while (true) {
            const leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let target = index;

            if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[target]) < 0) {
              target = leftChildIndex;
            }

            if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[target]) < 0) {
              target = rightChildIndex;
            }

            if (target === index) break;
            this.swap(index, target);
            index = target;
          }
        }
      }

      // Example: Min-Heap using BinaryHeap
      let minHeap = new BinaryHeap((a, b) => a - b);
      minHeap.insert(10);
      minHeap.insert(5);
      minHeap.insert(15);
      console.log(minHeap.extractRoot()); // Output: 5
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Priority Queue (using Heap)</h3>
  <pre>
    <code class="language-javascript">
      class PriorityQueue {
        constructor() {
          this.heap = [];
        this.compare = (a, b) => a.priority - b.priority;
        }

        enqueue(value, priority) {
          this.heap.push({ value, priority });
          this.heapifyUp();
        }

        dequeue() {
          if (this.heap.length === 0) return null;
          const root = this.heap[0];
          this.heap[0] = this.heap.pop();
          this.heapifyDown();
          return root.value;
        }

        heapifyUp() {
          let index = this.heap.length - 1;
          while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[parentIndex], this.heap[index]) <= 0) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
          }
        }

        heapifyDown() {
          let index = 0;
          const length = this.heap.length;
          while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let target = index;

            if (leftChildIndex < length && this.compare(this.heap[leftChildIndex], this.heap[target]) < 0) {
              target = leftChildIndex;
            }

            if (rightChildIndex < length && this.compare(this.heap[rightChildIndex], this.heap[target]) < 0) {
              target = rightChildIndex;
            }

            if (target === index) break;
            [this.heap[index], this.heap[target]] = [this.heap[target], this.heap[index]];
            index = target;
          }
        }
      }

      let pq = new PriorityQueue();
      pq.enqueue('Task 1', 3);
      pq.enqueue('Task 2', 1);
      pq.enqueue('Task 3', 2);
      console.log(pq.dequeue()); // Output: Task 2 (highest priority)
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Hash Tables`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Hash Tables in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hash tables, also known as hash maps, are a data structure that stores key-value pairs. They use a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. Hash tables are highly efficient for lookups, insertions, and deletions, with an average time complexity of O(1).
  </p>

  <h3 style="color: #16a085;">Key Concepts of Hash Tables</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Hash Function</li>
    <li>Collision Handling</li>
    <li>Load Factor</li>
    <li>Resizing</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Hash Table Implementation</h3>
  <pre>
    <code class="language-javascript">
      class HashTable {
        constructor(size = 10) {
          this.size = size;
          this.buckets = new Array(size).fill(null).map(() => []);
        }

        // Hash function
        hash(key) {
          let hashValue = 0;
          for (let char of key) {
            hashValue += char.charCodeAt(0);
          }
          return hashValue % this.size;
        }

        // Insert a key-value pair
        set(key, value) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket[i][1] = value; // Update existing key
              return;
            }
          }
          bucket.push([key, value]); // Add new key-value pair
        }

        // Get the value by key
        get(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let [k, v] of bucket) {
            if (k === key) return v;
          }
          return undefined; // Key not found
        }

        // Delete a key-value pair
        delete(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket.splice(i, 1); // Remove key-value pair
              return true;
            }
          }
          return false; // Key not found
        }
      }

      let hashTable = new HashTable();
      hashTable.set('name', 'Alice');
      hashTable.set('age', 25);
      console.log(hashTable.get('name')); // Output: Alice
      console.log(hashTable.delete('age')); // Output: true
      console.log(hashTable.get('age')); // Output: undefined
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Handling Collisions with Chaining</h3>
  <pre>
    <code class="language-javascript">
      class HashTableWithChaining {
        constructor(size = 10) {
          this.size = size;
          this.buckets = new Array(size).fill(null).map(() => []);
        }

        hash(key) {
          let hashValue = 0;
          for (let char of key) {
            hashValue += char.charCodeAt(0);
          }
          return hashValue % this.size;
        }

        set(key, value) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket[i][1] = value;
              return;
            }
          }
          bucket.push([key, value]);
        }

        get(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let [k, v] of bucket) {
            if (k === key) return v;
          }
          return undefined;
        }

        delete(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket.splice(i, 1);
              return true;
            }
          }
          return false;
        }
      }

      let hashTableWithChaining = new HashTableWithChaining();
      hashTableWithChaining.set('name', 'Bob');
      hashTableWithChaining.set('age', 30);
      console.log(hashTableWithChaining.get('name')); // Output: Bob
      console.log(hashTableWithChaining.delete('age')); // Output: true
      console.log(hashTableWithChaining.get('age')); // Output: undefined
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Handling Collisions with Open Addressing</h3>
  <pre>
    <code class="language-javascript">
      class HashTableWithOpenAddressing {
        constructor(size = 10) {
          this.size = size;
          this.buckets = new Array(size).fill(null);
        }

        hash(key) {
          let hashValue = 0;
          for (let char of key) {
            hashValue += char.charCodeAt(0);
          }
          return hashValue % this.size;
        }

        set(key, value) {
          let index = this.hash(key);
          while (this.buckets[index] !== null && this.buckets[index][0] !== key) {
            index = (index + 1) % this.size; // Linear probing
          }
          this.buckets[index] = [key, value];
        }

        get(key) {
          let index = this.hash(key);
          while (this.buckets[index] !== null) {
            if (this.buckets[index][0] === key) {
              return this.buckets[index][1];
            }
            index = (index + 1) % this.size; // Linear probing
          }
          return undefined;
        }

        delete(key) {
          let index = this.hash(key);
          while (this.buckets[index] !== null) {
            if (this.buckets[index][0] === key) {
              this.buckets[index] = null;
              return true;
            }
            index = (index + 1) % this.size; // Linear probing
          }
          return false;
        }
      }

      let hashTableWithOpenAddressing = new HashTableWithOpenAddressing();
      hashTableWithOpenAddressing.set('name', 'Charlie');
      hashTableWithOpenAddressing.set('age', 35);
      console.log(hashTableWithOpenAddressing.get('name')); // Output: Charlie
      console.log(hashTableWithOpenAddressing.delete('age')); // Output: true
      console.log(hashTableWithOpenAddressing.get('age')); // Output: undefined
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Dynamic Resizing</h3>
  <pre>
    <code class="language-javascript">
      class DynamicHashTable {
        constructor(initialSize = 10, loadFactor = 0.75) {
          this.size = initialSize;
          this.loadFactor = loadFactor;
          this.count = 0;
          this.buckets = new Array(initialSize).fill(null).map(() => []);
        }

        hash(key) {
          let hashValue = 0;
          for (let char of key) {
            hashValue += char.charCodeAt(0);
          }
          return hashValue % this.size;
        }

        set(key, value) {
          if (this.count / this.size >= this.loadFactor) {
            this.resize();
          }
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket[i][1] = value;
              return;
            }
          }
          bucket.push([key, value]);
          this.count++;
        }

        get(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let [k, v] of bucket) {
            if (k === key) return v;
          }
          return undefined;
        }

        delete(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket.splice(i, 1);
              this.count--;
              return true;
            }
          }
          return false;
        }

        resize() {
          const newSize = this.size * 2;
          const newBuckets = new Array(newSize).fill(null).map(() => []);
          for (let bucket of this.buckets) {
            for (let [key, value] of bucket) {
              const newIndex = this.hash(key);
              newBuckets[newIndex].push([key, value]);
            }
          }
          this.size = newSize;
          this.buckets = newBuckets;
        }
      }

      let dynamicHashTable = new DynamicHashTable();
      dynamicHashTable.set('name', 'David');
      dynamicHashTable.set('age', 40);
      console.log(dynamicHashTable.get('name')); // Output: David
      console.log(dynamicHashTable.delete('age')); // Output: true
      console.log(dynamicHashTable.get('age')); // Output: undefined
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Tries`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Tries in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A Trie, also known as a prefix tree, is a tree-like data structure used to store a dynamic set of strings. It is particularly useful for tasks like autocomplete, spell checking, and IP routing. Each node in a Trie represents a character of a string, and the path from the root to a node represents a prefix of one or more strings.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Tries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Node Structure</li>
    <li>Insertion</li>
    <li>Search</li>
    <li>Prefix Search</li>
    <li>Deletion</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Trie Implementation</h3>
  <pre>
    <code class="language-javascript">
      class TrieNode {
        constructor() {
          this.children = new Map();
          this.isEndOfWord = false;
        }
      }

      class Trie {
        constructor() {
          this.root = new TrieNode();
        }

        // Insert a word into the Trie
        insert(word) {
          let currentNode = this.root;
          for (let char of word) {
            if (!currentNode.children.has(char)) {
              currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
          }
          currentNode.isEndOfWord = true;
        }

        // Search for a word in the Trie
        search(word) {
          let currentNode = this.root;
          for (let char of word) {
            if (!currentNode.children.has(char)) {
              return false;
            }
            currentNode = currentNode.children.get(char);
          }
          return currentNode.isEndOfWord;
        }

        // Check if a prefix exists in the Trie
        startsWith(prefix) {
          let currentNode = this.root;
          for (let char of prefix) {
            if (!currentNode.children.has(char)) {
              return false;
            }
            currentNode = currentNode.children.get(char);
          }
          return true;
        }
      }

      let trie = new Trie();
      trie.insert('apple');
      trie.insert('app');
      console.log(trie.search('apple')); // Output: true
      console.log(trie.search('app')); // Output: true
      console.log(trie.startsWith('ap')); // Output: true
      console.log(trie.search('ap')); // Output: false
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Prefix Search (Autocomplete)</h3>
  <pre>
    <code class="language-javascript">
      class TrieWithAutocomplete extends Trie {
        // Find all words with a given prefix
        findAllWords(prefix) {
          let currentNode = this.root;
          for (let char of prefix) {
            if (!currentNode.children.has(char)) {
              return [];
            }
            currentNode = currentNode.children.get(char);
          }
          return this._findWordsFromNode(currentNode, prefix);
        }

        _findWordsFromNode(node, prefix) {
          let words = [];
          if (node.isEndOfWord) {
            words.push(prefix);
          }
          for (let [char, childNode] of node.children) {
            words.push(...this._findWordsFromNode(childNode, prefix + char));
          }
          return words;
        }
      }

      let trieWithAutocomplete = new TrieWithAutocomplete();
      trieWithAutocomplete.insert('apple');
      trieWithAutocomplete.insert('app');
      trieWithAutocomplete.insert('application');
      console.log(trieWithAutocomplete.findAllWords('app'));
      // Output: ['app', 'apple', 'application']
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Deletion in Trie</h3>
  <pre>
    <code class="language-javascript">
      class TrieWithDeletion extends Trie {
        // Delete a word from the Trie
        delete(word) {
          this._delete(this.root, word, 0);
        }

        _delete(node, word, index) {
          if (index === word.length) {
            if (!node.isEndOfWord) {
              return false; // Word not found
            }
            node.isEndOfWord = false;
            return node.children.size === 0;
          }

          const char = word[index];
          if (!node.children.has(char)) {
            return false; // Word not found
          }

          const shouldDeleteCurrentNode = this._delete(node.children.get(char), word, index + 1);

          if (shouldDeleteCurrentNode) {
            node.children.delete(char);
            return node.children.size === 0 && !node.isEndOfWord;
          }

          return false;
        }
      }

      let trieWithDeletion = new TrieWithDeletion();
      trieWithDeletion.insert('apple');
      trieWithDeletion.insert('app');
      console.log(trieWithDeletion.search('apple')); // Output: true
      trieWithDeletion.delete('apple');
      console.log(trieWithDeletion.search('apple')); // Output: false
      console.log(trieWithDeletion.search('app')); // Output: true
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Counting Words with a Given Prefix</h3>
  <pre>
    <code class="language-javascript">
      class TrieWithCount extends Trie {
        // Count the number of words with a given prefix
        countWordsWithPrefix(prefix) {
          let currentNode = this.root;
          for (let char of prefix) {
            if (!currentNode.children.has(char)) {
              return 0;
            }
            currentNode = currentNode.children.get(char);
          }
          return this._countWordsFromNode(currentNode);
        }

        _countWordsFromNode(node) {
          let count = 0;
          if (node.isEndOfWord) {
            count++;
          }
          for (let [char, childNode] of node.children) {
            count += this._countWordsFromNode(childNode);
          }
          return count;
        }
      }

      let trieWithCount = new TrieWithCount();
      trieWithCount.insert('apple');
      trieWithCount.insert('app');
      trieWithCount.insert('application');
      console.log(trieWithCount.countWordsWithPrefix('app')); // Output: 3
    </code>
  </pre>

  <h3 style="color: #27ae60;">Case-Insensitive Trie</h3>
  <pre>
    <code class="language-javascript">
      class CaseInsensitiveTrie extends Trie {
        insert(word) {
          super.insert(word.toLowerCase());
        }

        search(word) {
          return super.search(word.toLowerCase());
        }

        startsWith(prefix) {
          return super.startsWith(prefix.toLowerCase());
        }
      }

      let caseInsensitiveTrie = new CaseInsensitiveTrie();
      caseInsensitiveTrie.insert('Apple');
      console.log(caseInsensitiveTrie.search('apple')); // Output: true
      console.log(caseInsensitiveTrie.startsWith('APP')); // Output: true
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Sorting`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Sorting Algorithms in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Sorting algorithms are fundamental in computer science and are used to arrange elements in a specific order (ascending or descending). JavaScript provides built-in sorting methods, but understanding how different sorting algorithms work is essential for optimizing performance and solving complex problems.
  </p>

  <h3 style="color: #16a085;">Common Sorting Algorithms</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Bubble Sort</li>
    <li>Selection Sort</li>
    <li>Insertion Sort</li>
    <li>Merge Sort</li>
    <li>Quick Sort</li>
  </ul>

  <h3 style="color: #e67e22;">Bubble Sort</h3>
  <p style="font-size: 16px; color: #34495e;">
    Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the list is sorted.
  </p>
  <pre>
    <code class="language-javascript">
      function bubbleSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              // Swap elements
              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
          }
        }
        return arr;
      }

      let arr = [64, 34, 25, 12, 22, 11, 90];
      console.log(bubbleSort(arr)); // Output: [11, 12, 22, 25, 34, 64, 90]
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Selection Sort</h3>
  <p style="font-size: 16px; color: #34495e;">
    Selection Sort works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and swapping it with the first unsorted element.
  </p>
  <pre>
    <code class="language-javascript">
      function selectionSort(arr) {
        let n = arr.length;
        for (let i = 0; i < n - 1; i++) {
          let minIndex = i;
          for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
              minIndex = j;
            }
          }
          // Swap elements
          [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
        return arr;
      }

      let arr = [64, 25, 12, 22, 11];
      console.log(selectionSort(arr)); // Output: [11, 12, 22, 25, 64]
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Insertion Sort</h3>
  <p style="font-size: 16px; color: #34495e;">
    Insertion Sort builds the final sorted array one element at a time. It takes each element from the input and inserts it into its correct position in the sorted array.
  </p>
  <pre>
    <code class="language-javascript">
      function insertionSort(arr) {
        let n = arr.length;
        for (let i = 1; i < n; i++) {
          let key = arr[i];
          let j = i - 1;
          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
          }
          arr[j + 1] = key;
        }
        return arr;
      }

      let arr = [12, 11, 13, 5, 6];
      console.log(insertionSort(arr)); // Output: [5, 6, 11, 12, 13]
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Merge Sort</h3>
  <p style="font-size: 16px; color: #34495e;">
    Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the two sorted halves.
  </p>
  <pre>
    <code class="language-javascript">
      function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        return merge(left, right);
      }

      function merge(left, right) {
        let result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
          if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
          } else {
            result.push(right[j]);
            j++;
          }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
      }

      let arr = [38, 27, 43, 3, 9, 82, 10];
      console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
    </code>
  </pre>

  <h3 style="color: #27ae60;">Quick Sort</h3>
  <p style="font-size: 16px; color: #34495e;">
    Quick Sort is another divide-and-conquer algorithm. It selects a 'pivot' element and partitions the array into two halves, one with elements less than the pivot and the other with elements greater than the pivot. It then recursively sorts the two halves.
  </p>
  <pre>
    <code class="language-javascript">
      function quickSort(arr) {
        if (arr.length <= 1) return arr;

        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] < pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
      }

      let arr = [10, 7, 8, 9, 1, 5];
      console.log(quickSort(arr)); // Output: [1, 5, 7, 8, 9, 10]
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Searching`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Searching Algorithms in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Searching algorithms are used to find a specific element or value within a collection of data. They are fundamental in computer science and are widely used in applications like databases, search engines, and more. JavaScript provides built-in methods for searching, but understanding how different searching algorithms work is essential for optimizing performance and solving complex problems.
  </p>

  <h3 style="color: #16a085;">Common Searching Algorithms</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Linear Search</li>
    <li>Binary Search</li>
    <li>Depth-First Search (DFS)</li>
    <li>Breadth-First Search (BFS)</li>
  </ul>

  <h3 style="color: #e67e22;">Linear Search</h3>
  <p style="font-size: 16px; color: #34495e;">
    Linear Search is the simplest searching algorithm. It checks each element in the list sequentially until the desired element is found or the end of the list is reached.
  </p>
  <pre>
    <code class="language-javascript">
      function linearSearch(arr, target) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === target) {
            return i; // Return the index of the target element
          }
        }
        return -1; // Return -1 if the target is not found
      }

      let arr = [10, 20, 30, 40, 50];
      console.log(linearSearch(arr, 30)); // Output: 2
      console.log(linearSearch(arr, 60)); // Output: -1
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Binary Search</h3>
  <p style="font-size: 16px; color: #34495e;">
    Binary Search is an efficient algorithm for finding an element in a sorted list. It works by repeatedly dividing the search interval in half. If the target value is less than the middle element, the search continues in the left half; otherwise, it continues in the right half.
  </p>
  <pre>
    <code class="language-javascript">
      function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) {
            return mid; // Return the index of the target element
          } else if (arr[mid] < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return -1; // Return -1 if the target is not found
      }

      let arr = [10, 20, 30, 40, 50];
      console.log(binarySearch(arr, 30)); // Output: 2
      console.log(binarySearch(arr, 60)); // Output: -1
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Depth-First Search (DFS)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Depth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node) and explores as far as possible along each branch before backtracking.
  </p>
  <pre>
    <code class="language-javascript">
      class Graph {
        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(vertex1, vertex2) {
          this.adjacencyList.get(vertex1).push(vertex2);
          this.adjacencyList.get(vertex2).push(vertex1);
        }

        dfs(startVertex) {
          const visited = new Set();
          const result = [];

          const dfsHelper = (vertex) => {
            if (!vertex) return;
            visited.add(vertex);
            result.push(vertex);
            for (let neighbor of this.adjacencyList.get(vertex)) {
              if (!visited.has(neighbor)) {
                dfsHelper(neighbor);
              }
            }
          };

          dfsHelper(startVertex);
          return result;
        }
      }

      let graph = new Graph();
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      console.log(graph.dfs('A')); // Output: ['A', 'B', 'D', 'C']
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Breadth-First Search (BFS)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Breadth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root (or an arbitrary node) and explores all the neighboring nodes at the present depth before moving on to nodes at the next depth level.
  </p>
  <pre>
    <code class="language-javascript">
      class Graph {
        constructor() {
          this.adjacencyList = new Map();
        }

        addVertex(vertex) {
          if (!this.adjacencyList.has(vertex)) {
            this.adjacencyList.set(vertex, []);
          }
        }

        addEdge(vertex1, vertex2) {
          this.adjacencyList.get(vertex1).push(vertex2);
          this.adjacencyList.get(vertex2).push(vertex1);
        }

        bfs(startVertex) {
          const visited = new Set();
          const queue = [startVertex];
          const result = [];

          while (queue.length > 0) {
            const vertex = queue.shift();
            if (!visited.has(vertex)) {
              visited.add(vertex);
              result.push(vertex);
              for (let neighbor of this.adjacencyList.get(vertex)) {
                if (!visited.has(neighbor)) {
                  queue.push(neighbor);
                }
              }
            }
          }
          return result;
        }
      }

      let graph = new Graph();
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      console.log(graph.bfs('A')); // Output: ['A', 'B', 'C', 'D']
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Graph`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Graph Algorithms in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Graph algorithms are used to solve problems related to graphs, such as finding the shortest path, detecting cycles, or determining connectivity. Graphs are a collection of nodes (vertices) connected by edges, and they are widely used in applications like social networks, maps, and recommendation systems.
  </p>

  <h3 style="color: #16a085;">Common Graph Algorithms</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Dijkstra's Algorithm (Shortest Path)</li>
    <li>Kruskal's Algorithm (Minimum Spanning Tree)</li>
    <li>Topological Sorting</li>
    <li>Detecting Cycles in a Graph</li>
  </ul>

  <h3 style="color: #e67e22;">Dijkstra's Algorithm (Shortest Path)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Dijkstra's Algorithm is used to find the shortest path from a source node to all other nodes in a weighted graph. It works by iteratively selecting the node with the smallest tentative distance and updating the distances of its neighbors.
  </p>
  <pre>
    <code class="language-javascript">
      class PriorityQueue {
        constructor() {
          this.values = [];
        }

        enqueue(val, priority) {
          this.values.push({ val, priority });
          this.sort();
        }

        dequeue() {
          return this.values.shift();
        }

        sort() {
          this.values.sort((a, b) => a.priority - b.priority);
        }

        isEmpty() {
          return this.values.length === 0;
        }
      }

      function dijkstra(graph, start) {
        const distances = {};
        const previous = {};
        const pq = new PriorityQueue();

        // Initialize distances and priority queue
        for (let vertex in graph) {
          distances[vertex] = Infinity;
          previous[vertex] = null;
        }
        distances[start] = 0;
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
          const { val: currentVertex } = pq.dequeue();

          for (let neighbor in graph[currentVertex]) {
            const weight = graph[currentVertex][neighbor];
            const totalDistance = distances[currentVertex] + weight;

            if (totalDistance < distances[neighbor]) {
              distances[neighbor] = totalDistance;
              previous[neighbor] = currentVertex;
              pq.enqueue(neighbor, totalDistance);
            }
          }
        }

        return { distances, previous };
      }

      const graph = {
        A: { B: 4, C: 2 },
        B: { A: 4, C: 5, D: 10 },
        C: { A: 2, B: 5, D: 3 },
        D: { B: 10, C: 3 }
      };

      console.log(dijkstra(graph, 'A'));
      // Output: { distances: { A: 0, B: 4, C: 2, D: 5 }, previous: { A: null, B: 'A', C: 'A', D: 'C' } }
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Kruskal's Algorithm (Minimum Spanning Tree)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Kruskal's Algorithm is used to find the minimum spanning tree (MST) of a connected, undirected graph. It works by sorting all the edges in ascending order of weight and adding them to the MST if they do not form a cycle.
  </p>
  <pre>
    <code class="language-javascript">
      class DisjointSet {
        constructor() {
          this.parent = {};
        }

        makeSet(vertex) {
          this.parent[vertex] = vertex;
        }

        find(vertex) {
          if (this.parent[vertex] === vertex) {
            return vertex;
          }
          return this.find(this.parent[vertex]);
        }

        union(vertex1, vertex2) {
          const root1 = this.find(vertex1);
          const root2 = this.find(vertex2);
          if (root1 !== root2) {
            this.parent[root2] = root1;
          }
        }
      }

      function kruskal(graph) {
        const edges = [];
        for (let vertex in graph) {
          for (let neighbor in graph[vertex]) {
            edges.push({ from: vertex, to: neighbor, weight: graph[vertex][neighbor] });
          }
        }

        edges.sort((a, b) => a.weight - b.weight);

        const ds = new DisjointSet();
        const mst = [];
        for (let vertex in graph) {
          ds.makeSet(vertex);
        }

        for (let edge of edges) {
          const root1 = ds.find(edge.from);
          const root2 = ds.find(edge.to);
          if (root1 !== root2) {
            mst.push(edge);
            ds.union(edge.from, edge.to);
          }
        }

        return mst;
      }

      const graph = {
        A: { B: 4, C: 2 },
        B: { A: 4, C: 5, D: 10 },
        C: { A: 2, B: 5, D: 3 },
        D: { B: 10, C: 3 }
      };

      console.log(kruskal(graph));
      // Output: [ { from: 'A', to: 'C', weight: 2 }, { from: 'C', to: 'D', weight: 3 }, { from: 'A', to: 'B', weight: 4 } ]
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Topological Sorting</h3>
  <p style="font-size: 16px; color: #34495e;">
    Topological Sorting is used to order the vertices of a directed acyclic graph (DAG) such that for every directed edge (u, v), vertex u comes before vertex v in the ordering.
  </p>
  <pre>
    <code class="language-javascript">
      function topologicalSort(graph) {
        const visited = new Set();
        const stack = [];

        const dfs = (vertex) => {
          visited.add(vertex);
          for (let neighbor of graph[vertex]) {
            if (!visited.has(neighbor)) {
              dfs(neighbor);
            }
          }
          stack.push(vertex);
        };

        for (let vertex in graph) {
          if (!visited.has(vertex)) {
            dfs(vertex);
          }
        }

        return stack.reverse();
      }

      const graph = {
        A: ['C'],
        B: ['C', 'D'],
        C: ['E'],
        D: ['F'],
        E: ['F'],
        F: []
      };

      console.log(topologicalSort(graph)); // Output: ['B', 'D', 'A', 'C', 'E', 'F']
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Detecting Cycles in a Graph</h3>
  <p style="font-size: 16px; color: #34495e;">
    Detecting cycles in a graph is essential to ensure that the graph is acyclic, which is required for algorithms like Topological Sorting. This can be done using Depth-First Search (DFS).
  </p>
  <pre>
    <code class="language-javascript">
      function hasCycle(graph) {
        const visited = new Set();
        const recStack = new Set();

        const dfs = (vertex) => {
          if (recStack.has(vertex)) return true;
          if (visited.has(vertex)) return false;

          visited.add(vertex);
          recStack.add(vertex);

          for (let neighbor of graph[vertex]) {
            if (dfs(neighbor)) {
              return true;
            }
          }

          recStack.delete(vertex);
          return false;
        };

        for (let vertex in graph) {
          if (dfs(vertex)) {
            return true;
          }
        }
        return false;
      }

      const graph = {
        A: ['B'],
        B: ['C'],
        C: ['A']
      };

      console.log(hasCycle(graph)); // Output: true
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Dynamic Programming`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Dynamic Programming in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Dynamic Programming (DP) is a technique used to solve complex problems by breaking them down into simpler subproblems. It is particularly useful for optimization problems where the solution can be built from solutions to overlapping subproblems. DP avoids redundant computations by storing the results of subproblems, making it highly efficient.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Dynamic Programming</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Memoization</li>
    <li>Tabulation</li>
    <li>Overlapping Subproblems</li>
    <li>Optimal Substructure</li>
  </ul>

  <h3 style="color: #e67e22;">Fibonacci Sequence (Memoization)</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Fibonacci sequence is a classic example of a problem that can be optimized using dynamic programming. Memoization stores the results of expensive function calls and reuses them when the same inputs occur again.
  </p>
  <pre>
    <code class="language-javascript">
      function fibonacciMemo(n, memo = {}) {
        if (n in memo) return memo[n];
        if (n <= 2) return 1;

        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
        return memo[n];
      }

      console.log(fibonacciMemo(10)); // Output: 55
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Fibonacci Sequence (Tabulation)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Tabulation is another approach to dynamic programming where results are stored in a table (array) and filled iteratively. This avoids the overhead of recursion.
  </p>
  <pre>
    <code class="language-javascript">
      function fibonacciTab(n) {
        const table = new Array(n + 1).fill(0);
        table[1] = 1;

        for (let i = 2; i <= n; i++) {
          table[i] = table[i - 1] + table[i - 2];
        }

        return table[n];
      }

      console.log(fibonacciTab(10)); // Output: 55
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Knapsack Problem</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Knapsack Problem is a classic optimization problem where the goal is to maximize the value of items in a knapsack without exceeding its weight capacity. Dynamic Programming is used to solve this problem efficiently.
  </p>
  <pre>
    <code class="language-javascript">
      function knapsack(weights, values, capacity) {
        const n = weights.length;
        const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

        for (let i = 1; i <= n; i++) {
          for (let j = 0; j <= capacity; j++) {
            if (weights[i - 1] <= j) {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1]);
            } else {
              dp[i][j] = dp[i - 1][j];
            }
          }
        }

        return dp[n][capacity];
      }

      const weights = [2, 3, 4, 5];
      const values = [3, 4, 5, 6];
      const capacity = 5;
      console.log(knapsack(weights, values, capacity)); // Output: 7
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Longest Common Subsequence (LCS)</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Longest Common Subsequence problem involves finding the longest subsequence present in two sequences in the same order. Dynamic Programming is used to solve this problem efficiently.
  </p>
  <pre>
    <code class="language-javascript">
      function longestCommonSubsequence(text1, text2) {
        const m = text1.length;
        const n = text2.length;
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 1; i <= m; i++) {
          for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
              dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
          }
        }

        return dp[m][n];
      }

      const text1 = "abcde";
      const text2 = "ace";
      console.log(longestCommonSubsequence(text1, text2)); // Output: 3
    </code>
  </pre>

  <h3 style="color: #27ae60;">Coin Change Problem</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Coin Change Problem involves finding the minimum number of coins required to make a certain amount of money. Dynamic Programming is used to solve this problem efficiently.
  </p>
  <pre>
    <code class="language-javascript">
      function coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for (let coin of coins) {
          for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
          }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
      }

      const coins = [1, 2, 5];
      const amount = 11;
      console.log(coinChange(coins, amount)); // Output: 3
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Greedy`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Greedy Algorithms in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum. They are simple, efficient, and often used for optimization problems. However, they do not always guarantee the best solution, as they may get stuck in local optima.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Greedy Algorithms</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Local Optimal Choices</li>
    <li>Greedy Choice Property</li>
    <li>Optimal Substructure</li>
  </ul>

  <h3 style="color: #e67e22;">Coin Change Problem (Greedy Approach)</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Coin Change Problem involves finding the minimum number of coins required to make a certain amount of money. A greedy approach works for some coin systems but not all.
  </p>
  <pre>
    <code class="language-javascript">
      function coinChangeGreedy(coins, amount) {
        coins.sort((a, b) => b - a); // Sort coins in descending order
        let count = 0;

        for (let coin of coins) {
          while (amount >= coin) {
            amount -= coin;
            count++;
          }
        }

        return amount === 0 ? count : -1;
      }

      const coins = [1, 2, 5];
      const amount = 11;
      console.log(coinChangeGreedy(coins, amount)); // Output: 3
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Fractional Knapsack Problem</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Fractional Knapsack Problem involves selecting items with given weights and values to maximize the total value without exceeding the knapsack's capacity. A greedy approach works well for this problem.
  </p>
  <pre>
    <code class="language-javascript">
      function fractionalKnapsack(items, capacity) {
        items.sort((a, b) => (b.value / b.weight) - (a.value / a.weight)); // Sort by value per unit weight
        let totalValue = 0;

        for (let item of items) {
          if (capacity >= item.weight) {
            capacity -= item.weight;
            totalValue += item.value;
          } else {
            totalValue += (capacity / item.weight) * item.value;
            break;
          }
        }

        return totalValue;
      }

      const items = [
        { weight: 10, value: 60 },
        { weight: 20, value: 100 },
        { weight: 30, value: 120 }
      ];
      const capacity = 50;
      console.log(fractionalKnapsack(items, capacity)); // Output: 240
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Activity Selection Problem</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Activity Selection Problem involves selecting the maximum number of activities that do not overlap. A greedy approach works by always selecting the activity with the earliest finish time.
  </p>
  <pre>
    <code class="language-javascript">
      function activitySelection(activities) {
        activities.sort((a, b) => a.end - b.end); // Sort by finish time
        const selected = [activities[0]];
        let lastEnd = activities[0].end;

        for (let i = 1; i < activities.length; i++) {
          if (activities[i].start >= lastEnd) {
            selected.push(activities[i]);
            lastEnd = activities[i].end;
          }
        }

        return selected;
      }

      const activities = [
        { start: 1, end: 4 },
        { start: 3, end: 5 },
        { start: 0, end: 6 },
        { start: 5, end: 7 },
        { start: 8, end: 9 }
      ];
      console.log(activitySelection(activities));
      // Output: [ { start: 1, end: 4 }, { start: 5, end: 7 }, { start: 8, end: 9 } ]
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Huffman Coding (Greedy Approach)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Huffman Coding is a lossless data compression algorithm. It uses a greedy approach to build an optimal prefix code by repeatedly combining the two least frequent characters.
  </p>
  <pre>
    <code class="language-javascript">
      class HuffmanNode {
        constructor(char, freq, left = null, right = null) {
          this.char = char;
          this.freq = freq;
          this.left = left;
          this.right = right;
        }
      }

      function buildHuffmanTree(freqMap) {
        const nodes = Object.entries(freqMap).map(([char, freq]) => new HuffmanNode(char, freq));
        while (nodes.length > 1) {
          nodes.sort((a, b) => a.freq - b.freq);
          const left = nodes.shift();
          const right = nodes.shift();
          const parent = new HuffmanNode(null, left.freq + right.freq, left, right);
          nodes.push(parent);
        }
        return nodes[0];
      }

      function buildHuffmanCodes(node, prefix = '', codeMap = {}) {
        if (node.char !== null) {
          codeMap[node.char] = prefix;
        } else {
          buildHuffmanCodes(node.left, prefix + '0', codeMap);
          buildHuffmanCodes(node.right, prefix + '1', codeMap);
        }
        return codeMap;
      }

      const freqMap = { A: 5, B: 9, C: 12, D: 13, E: 16, F: 45 };
      const huffmanTree = buildHuffmanTree(freqMap);
      const huffmanCodes = buildHuffmanCodes(huffmanTree);
      console.log(huffmanCodes);
      // Output: { A: '1100', B: '1101', C: '100', D: '101', E: '111', F: '0' }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Dijkstra's Algorithm (Greedy Approach)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Dijkstra's Algorithm is a greedy algorithm used to find the shortest path from a source node to all other nodes in a weighted graph. It always selects the node with the smallest tentative distance.
  </p>
  <pre>
    <code class="language-javascript">
      class PriorityQueue {
        constructor() {
          this.values = [];
        }

        enqueue(val, priority) {
          this.values.push({ val, priority });
          this.sort();
        }

        dequeue() {
          return this.values.shift();
        }

        sort() {
          this.values.sort((a, b) => a.priority - b.priority);
        }

        isEmpty() {
          return this.values.length === 0;
        }
      }

      function dijkstra(graph, start) {
        const distances = {};
        const previous = {};
        const pq = new PriorityQueue();

        for (let vertex in graph) {
          distances[vertex] = Infinity;
          previous[vertex] = null;
        }
        distances[start] = 0;
        pq.enqueue(start, 0);

        while (!pq.isEmpty()) {
          const { val: currentVertex } = pq.dequeue();

          for (let neighbor in graph[currentVertex]) {
            const weight = graph[currentVertex][neighbor];
            const totalDistance = distances[currentVertex] + weight;

            if (totalDistance < distances[neighbor]) {
              distances[neighbor] = totalDistance;
              previous[neighbor] = currentVertex;
              pq.enqueue(neighbor, totalDistance);
            }
          }
        }

        return { distances, previous };
      }

      const graph = {
        A: { B: 4, C: 2 },
        B: { A: 4, C: 5, D: 10 },
        C: { A: 2, B: 5, D: 3 },
        D: { B: 10, C: 3 }
      };

      console.log(dijkstra(graph, 'A'));
      // Output: { distances: { A: 0, B: 4, C: 2, D: 5 }, previous: { A: null, B: 'A', C: 'A', D: 'C' } }
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Backtracking`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Backtracking in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Backtracking is a systematic way to iterate through all possible configurations of a problem. It is often used to solve problems where you need to explore all possible solutions, such as puzzles, combinatorial problems, and constraint satisfaction problems. Backtracking builds candidates incrementally and abandons a candidate ("backtracks") as soon as it determines that it cannot lead to a valid solution.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Backtracking</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Recursion</li>
    <li>Pruning</li>
    <li>State Space Tree</li>
    <li>Base Case and Recursive Case</li>
  </ul>

  <h3 style="color: #e67e22;">N-Queens Problem</h3>
  <p style="font-size: 16px; color: #34495e;">
    The N-Queens Problem involves placing N queens on an N×N chessboard such that no two queens threaten each other. Backtracking is used to explore all possible placements and eliminate invalid configurations.
  </p>
  <pre>
    <code class="language-javascript">
      function solveNQueens(n) {
        const board = Array.from({ length: n }, () => Array(n).fill('.'));
        const result = [];

        const isSafe = (row, col) => {
          // Check column
          for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
          }

          // Check upper left diagonal
          for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
          }

          // Check upper right diagonal
          for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
          }

          return true;
        };

        const backtrack = (row) => {
          if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
          }

          for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
              board[row][col] = 'Q';
              backtrack(row + 1);
              board[row][col] = '.'; // Backtrack
            }
          }
        };

        backtrack(0);
        return result;
      }

      console.log(solveNQueens(4));
      // Output: [ '.Q..', '...Q', 'Q...', '..Q.' ], [ '..Q.', 'Q...', '...Q', '.Q..' ]
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Subset Sum Problem</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Subset Sum Problem involves finding a subset of numbers that add up to a given target sum. Backtracking is used to explore all possible subsets and eliminate invalid ones.
  </p>
  <pre>
    <code class="language-javascript">
      function subsetSum(nums, target) {
        const result = [];

        const backtrack = (start, path, remaining) => {
          if (remaining === 0) {
            result.push([...path]);
            return;
          }

          for (let i = start; i < nums.length; i++) {
            if (nums[i] > remaining) continue; // Pruning
            path.push(nums[i]);
            backtrack(i + 1, path, remaining - nums[i]);
            path.pop(); // Backtrack
          }
        };

        backtrack(0, [], target);
        return result;
      }

      const nums = [3, 1, 4, 2];
      const target = 5;
      console.log(subsetSum(nums, target)); // Output: [ [ 3, 2 ], [ 1, 4 ], [ 1, 2, 2 ] ]
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Permutations</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Permutations Problem involves generating all possible arrangements of a set of elements. Backtracking is used to explore all possible arrangements.
  </p>
  <pre>
    <code class="language-javascript">
      function permutations(nums) {
        const result = [];

        const backtrack = (path, used) => {
          if (path.length === nums.length) {
            result.push([...path]);
            return;
          }

          for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // Skip used elements
            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop(); // Backtrack
            used[i] = false;
          }
        };

        backtrack([], Array(nums.length).fill(false));
        return result;
      }

      const nums = [1, 2, 3];
      console.log(permutations(nums));
      // Output: [ [1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1] ]
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Sudoku Solver</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Sudoku Solver problem involves filling a 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids contain all of the digits from 1 to 9. Backtracking is used to explore all possible configurations.
  </p>
  <pre>
    <code class="language-javascript">
      function solveSudoku(board) {
        const isValid = (row, col, num) => {
          for (let i = 0; i < 9; i++) {
            if (board[row][i] === num || board[i][col] === num) return false;
          }

          const startRow = Math.floor(row / 3) * 3;
          const startCol = Math.floor(col / 3) * 3;
          for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
              if (board[startRow + i][startCol + j] === num) return false;
            }
          }

          return true;
        };

        const solve = () => {
          for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
              if (board[row][col] === '.') {
                for (let num = 1; num <= 9; num++) {
                  if (isValid(row, col, num.toString())) {
                    board[row][col] = num.toString();
                    if (solve()) return true;
                    board[row][col] = '.'; // Backtrack
                  }
                }
                return false;
              }
            }
          }
          return true;
        };

        solve();
        return board;
      }

      const board = [
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9']
      ];

      console.log(solveSudoku(board));
      // Output: Solved Sudoku board
    </code>
  </pre>

  <h3 style="color: #27ae60;">Combination Sum</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Combination Sum problem involves finding all unique combinations of numbers that add up to a given target. Backtracking is used to explore all possible combinations.
  </p>
  <pre>
    <code class="language-javascript">
      function combinationSum(candidates, target) {
        const result = [];

        const backtrack = (start, path, remaining) => {
          if (remaining === 0) {
            result.push([...path]);
            return;
          }

          for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) continue; // Pruning
            path.push(candidates[i]);
            backtrack(i, path, remaining - candidates[i]); // Allow reuse of elements
            path.pop(); // Backtrack
          }
        };

        backtrack(0, [], target);
        return result;
      }

      const candidates = [2, 3, 6, 7];
      const target = 7;
      console.log(combinationSum(candidates, target)); // Output: [ [2, 2, 3], [7] ]
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Divide and Conquer`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Divide and Conquer in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Divide and Conquer is a problem-solving paradigm that breaks a problem into smaller subproblems, solves each subproblem recursively, and then combines the results to solve the original problem. It is widely used in algorithms like Merge Sort, Quick Sort, and Binary Search.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Divide and Conquer</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Divide: Break the problem into smaller subproblems.</li>
    <li>Conquer: Solve the subproblems recursively.</li>
    <li>Combine: Merge the results of the subproblems to solve the original problem.</li>
  </ul>

  <h3 style="color: #e67e22;">Merge Sort</h3>
  <p style="font-size: 16px; color: #34495e;">
    Merge Sort is a classic example of Divide and Conquer. It divides the array into two halves, recursively sorts them, and then merges the two sorted halves.
  </p>
  <pre>
    <code class="language-javascript">
      function mergeSort(arr) {
        if (arr.length <= 1) return arr;

        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        return merge(left, right);
      }

      function merge(left, right) {
        let result = [];
        let i = 0, j = 0;

        while (i < left.length && j < right.length) {
          if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
          } else {
            result.push(right[j]);
            j++;
          }
        }

        return result.concat(left.slice(i)).concat(right.slice(j));
      }

      const arr = [38, 27, 43, 3, 9, 82, 10];
      console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Quick Sort</h3>
  <p style="font-size: 16px; color: #34495e;">
    Quick Sort is another Divide and Conquer algorithm. It selects a pivot element, partitions the array into two halves (elements less than the pivot and elements greater than the pivot), and recursively sorts the two halves.
  </p>
  <pre>
    <code class="language-javascript">
      function quickSort(arr) {
        if (arr.length <= 1) return arr;

        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] < pivot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }

        return [...quickSort(left), pivot, ...quickSort(right)];
      }

      const arr = [10, 7, 8, 9, 1, 5];
      console.log(quickSort(arr)); // Output: [1, 5, 7, 8, 9, 10]
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Binary Search</h3>
  <p style="font-size: 16px; color: #34495e;">
    Binary Search is a Divide and Conquer algorithm used to search for an element in a sorted array. It repeatedly divides the search interval in half and eliminates half of the elements based on the comparison with the target.
  </p>
  <pre>
    <code class="language-javascript">
      function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {
          const mid = Math.floor((left + right) / 2);
          if (arr[mid] === target) {
            return mid; // Return the index of the target element
          } else if (arr[mid] < target) {
            left = mid + 1;
          } else {
            right = mid - 1;
          }
        }
        return -1; // Return -1 if the target is not found
      }

      const arr = [1, 3, 5, 7, 9, 11];
      console.log(binarySearch(arr, 7)); // Output: 3
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Closest Pair of Points</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Closest Pair of Points problem involves finding the two points in a set that are closest to each other. A Divide and Conquer approach is used to solve this problem efficiently.
  </p>
  <pre>
    <code class="language-javascript">
      function closestPair(points) {
        points.sort((a, b) => a[0] - b[0]); // Sort by x-coordinate

        const closestUtil = (points) => {
          if (points.length <= 3) {
            return bruteForce(points);
          }

          const mid = Math.floor(points.length / 2);
          const midPoint = points[mid];

          const leftClosest = closestUtil(points.slice(0, mid));
          const rightClosest = closestUtil(points.slice(mid));

          let minDist = Math.min(leftClosest.distance, rightClosest.distance);
          const strip = points.filter(point => Math.abs(point[0] - midPoint[0]) < minDist);

          const stripClosest = closestStrip(strip, minDist);
          return stripClosest.distance < minDist ? stripClosest : (leftClosest.distance < rightClosest.distance ? leftClosest : rightClosest);
        };

        const bruteForce = (points) => {
          let minDist = Infinity;
          let pair = null;

          for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
              const dist = distance(points[i], points[j]);
              if (dist < minDist) {
                minDist = dist;
                pair = { pair: [points[i], points[j]], distance: dist };
              }
            }
          }
          return pair;
        };

        const closestStrip = (strip, minDist) => {
          let min = minDist;
          let pair = null;

          strip.sort((a, b) => a[1] - b[1]); // Sort by y-coordinate

          for (let i = 0; i < strip.length; i++) {
            for (let j = i + 1; j < strip.length && (strip[j][1] - strip[i][1]) < min; j++) {
              const dist = distance(strip[i], strip[j]);
              if (dist < min) {
                min = dist;
                pair = { pair: [strip[i], strip[j]], distance: dist };
              }
            }
          }
          return pair || { distance: minDist };
        };

        const distance = (p1, p2) => {
          return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
        };

        return closestUtil(points);
      }

      const points = [[2, 3], [12, 30], [40, 50], [5, 1], [12, 10], [3, 4]];
      console.log(closestPair(points)); // Output: { pair: [[2, 3], [3, 4]], distance: 1.4142135623730951 }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Maximum Subarray Sum</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Maximum Subarray Sum problem involves finding the contiguous subarray within a one-dimensional array of numbers that has the largest sum. A Divide and Conquer approach can be used to solve this problem.
  </p>
  <pre>
    <code class="language-javascript">
      function maxSubarraySum(arr) {
        const maxCrossingSum = (arr, low, mid, high) => {
          let leftSum = -Infinity;
          let sum = 0;
          for (let i = mid; i >= low; i--) {
            sum += arr[i];
            if (sum > leftSum) leftSum = sum;
          }

          let rightSum = -Infinity;
          sum = 0;
          for (let i = mid + 1; i <= high; i++) {
            sum += arr[i];
            if (sum > rightSum) rightSum = sum;
          }

          return leftSum + rightSum;
        };

        const maxSubarrayUtil = (arr, low, high) => {
          if (low === high) return arr[low];

          const mid = Math.floor((low + high) / 2);
          return Math.max(
            maxSubarrayUtil(arr, low, mid),
            maxSubarrayUtil(arr, mid + 1, high),
            maxCrossingSum(arr, low, mid, high)
          );
        };

        return maxSubarrayUtil(arr, 0, arr.length - 1);
      }

      const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
      console.log(maxSubarraySum(arr)); // Output: 6
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Recursion`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Recursion in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Recursion is a programming technique where a function calls itself to solve a problem. It is particularly useful for problems that can be broken down into smaller, similar subproblems. Recursion involves two key components: a <strong>base case</strong> (to stop the recursion) and a <strong>recursive case</strong> (to break the problem into smaller parts).
  </p>

  <h3 style="color: #16a085;">Key Concepts of Recursion</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Base Case: The condition under which the recursion stops.</li>
    <li>Recursive Case: The part of the function where it calls itself with a smaller or simpler input.</li>
    <li>Call Stack: The mechanism that keeps track of function calls in recursion.</li>
  </ul>

  <h3 style="color: #e67e22;">Factorial of a Number</h3>
  <p style="font-size: 16px; color: #34495e;">
    The factorial of a number <code>n</code> (denoted as <code>n!</code>) is the product of all positive integers less than or equal to <code>n</code>. It can be computed using recursion.
  </p>
  <pre>
    <code class="language-javascript">
      function factorial(n) {
        if (n === 0 || n === 1) { // Base case
          return 1;
        }
        return n * factorial(n - 1); // Recursive case
      }

      console.log(factorial(5)); // Output: 120
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Fibonacci Sequence</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1. It can be computed using recursion.
  </p>
  <pre>
    <code class="language-javascript">
      function fibonacci(n) {
        if (n <= 1) { // Base case
          return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
      }

      console.log(fibonacci(6)); // Output: 8
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Sum of Digits</h3>
  <p style="font-size: 16px; color: #34495e;">
    The sum of digits of a number can be computed using recursion by repeatedly adding the last digit and reducing the number.
  </p>
  <pre>
    <code class="language-javascript">
      function sumOfDigits(n) {
        if (n < 10) { // Base case
          return n;
        }
        return (n % 10) + sumOfDigits(Math.floor(n / 10)); // Recursive case
      }

      console.log(sumOfDigits(1234)); // Output: 10
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Power of a Number</h3>
  <p style="font-size: 16px; color: #34495e;">
    The power of a number <code>x</code> raised to <code>n</code> can be computed using recursion.
  </p>
  <pre>
    <code class="language-javascript">
      function power(x, n) {
        if (n === 0) { // Base case
          return 1;
        }
        return x * power(x, n - 1); // Recursive case
      }

      console.log(power(2, 5)); // Output: 32
    </code>
  </pre>

  <h3 style="color: #27ae60;">Reverse a String</h3>
  <p style="font-size: 16px; color: #34495e;">
    A string can be reversed using recursion by repeatedly moving the first character to the end of the string.
  </p>
  <pre>
    <code class="language-javascript">
      function reverseString(str) {
        if (str === "") { // Base case
          return "";
        }
        return reverseString(str.slice(1)) + str[0]; // Recursive case
      }

      console.log(reverseString("hello")); // Output: "olleh"
    </code>
  </pre>

  <h3 style="color: #e67e22;">Tower of Hanoi</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Tower of Hanoi is a classic problem that can be solved using recursion. The goal is to move a stack of disks from one rod to another, following specific rules.
  </p>
  <pre>
    <code class="language-javascript">
      function towerOfHanoi(n, source, destination, auxiliary) {
        if (n === 1) { // Base case
          console.log(\`Move disk 1 from \${source} to \${destination}\`);
          return;
        }
        towerOfHanoi(n - 1, source, auxiliary, destination); // Move n-1 disks to auxiliary
        console.log(\`Move disk \${n} from \${source} to \${destination}\`);
        towerOfHanoi(n - 1, auxiliary, destination, source); // Move n-1 disks to destination
      }

      towerOfHanoi(3, 'A', 'C', 'B');
      // Output:
      // Move disk 1 from A to C
      // Move disk 2 from A to B
      // Move disk 1 from C to B
      // Move disk 3 from A to C
      // Move disk 1 from B to A
      // Move disk 2 from B to C
      // Move disk 1 from A to C
    </code>
  </pre>

  <h3 style="color: #2980b9;">Binary Search (Recursive)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Binary Search can also be implemented using recursion. It works by repeatedly dividing the search interval in half.
  </p>
  <pre>
    <code class="language-javascript">
      function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
        if (left > right) { // Base case: target not found
          return -1;
        }

        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) { // Base case: target found
          return mid;
        } else if (arr[mid] < target) {
          return binarySearchRecursive(arr, target, mid + 1, right); // Recursive case: search right half
        } else {
          return binarySearchRecursive(arr, target, left, mid - 1); // Recursive case: search left half
        }
      }

      const arr = [1, 3, 5, 7, 9, 11];
      console.log(binarySearchRecursive(arr, 7)); // Output: 3
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Hashing`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Hashing in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hashing is a technique used to map data of arbitrary size to fixed-size values, typically for fast data retrieval. It is widely used in data structures like hash tables, caches, and cryptographic applications. A good hash function minimizes collisions (where two different inputs produce the same hash value) and distributes values uniformly across the hash table.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Hashing</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Hash Function: A function that maps data to a fixed-size value.</li>
    <li>Collision: When two different inputs produce the same hash value.</li>
    <li>Collision Resolution: Techniques to handle collisions (e.g., chaining, open addressing).</li>
    <li>Load Factor: The ratio of the number of elements to the size of the hash table.</li>
  </ul>

  <h3 style="color: #e67e22;">Simple Hash Function</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple hash function can be implemented by summing the character codes of a string and taking the modulo with the size of the hash table.
  </p>
  <pre>
    <code class="language-javascript">
      function simpleHash(key, size) {
        let hash = 0;
        for (let char of key) {
          hash += char.charCodeAt(0);
        }
        return hash % size;
      }

      const key = "hello";
      const size = 10;
      console.log(simpleHash(key, size)); // Output: 2
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Hash Table Implementation</h3>
  <p style="font-size: 16px; color: #34495e;">
    A hash table is a data structure that uses a hash function to map keys to values. Collisions can be resolved using chaining (storing multiple values in the same bucket using a linked list or array).
  </p>
  <pre>
    <code class="language-javascript">
      class HashTable {
        constructor(size = 10) {
          this.size = size;
          this.buckets = new Array(size).fill(null).map(() => []);
        }

        hash(key) {
          let hash = 0;
          for (let char of key) {
            hash += char.charCodeAt(0);
          }
          return hash % this.size;
        }

        set(key, value) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket[i][1] = value; // Update existing key
              return;
            }
          }
          bucket.push([key, value]); // Add new key-value pair
        }

        get(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let [k, v] of bucket) {
            if (k === key) return v;
          }
          return undefined; // Key not found
        }

        delete(key) {
          const index = this.hash(key);
          const bucket = this.buckets[index];
          for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
              bucket.splice(i, 1); // Remove key-value pair
              return true;
            }
          }
          return false; // Key not found
        }
      }

      const hashTable = new HashTable();
      hashTable.set("name", "Alice");
      hashTable.set("age", 25);
      console.log(hashTable.get("name")); // Output: Alice
      console.log(hashTable.delete("age")); // Output: true
      console.log(hashTable.get("age")); // Output: undefined
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Collision Resolution: Open Addressing</h3>
  <p style="font-size: 16px; color: #34495e;">
    Open Addressing is a collision resolution technique where collisions are resolved by probing (searching for the next available slot in the hash table).
  </p>
  <pre>
    <code class="language-javascript">
      class HashTableOpenAddressing {
        constructor(size = 10) {
          this.size = size;
          this.buckets = new Array(size).fill(null);
        }

        hash(key) {
          let hash = 0;
          for (let char of key) {
            hash += char.charCodeAt(0);
          }
          return hash % this.size;
        }

        set(key, value) {
          let index = this.hash(key);
          while (this.buckets[index] !== null && this.buckets[index][0] !== key) {
            index = (index + 1) % this.size; // Linear probing
          }
          this.buckets[index] = [key, value];
        }

        get(key) {
          let index = this.hash(key);
          while (this.buckets[index] !== null) {
            if (this.buckets[index][0] === key) {
              return this.buckets[index][1];
            }
            index = (index + 1) % this.size; // Linear probing
          }
          return undefined; // Key not found
        }

        delete(key) {
          let index = this.hash(key);
          while (this.buckets[index] !== null) {
            if (this.buckets[index][0] === key) {
              this.buckets[index] = null;
              return true;
            }
            index = (index + 1) % this.size; // Linear probing
          }
          return false; // Key not found
        }
      }

      const hashTable = new HashTableOpenAddressing();
      hashTable.set("name", "Bob");
      hashTable.set("age", 30);
      console.log(hashTable.get("name")); // Output: Bob
      console.log(hashTable.delete("age")); // Output: true
      console.log(hashTable.get("age")); // Output: undefined
    </code>
  </pre>

  <h3 style="color: #8e44ad;">String Hashing (Polynomial Rolling Hash)</h3>
  <p style="font-size: 16px; color: #34495e;">
    A polynomial rolling hash function is commonly used for hashing strings. It reduces the likelihood of collisions by using a polynomial function.
  </p>
  <pre>
    <code class="language-javascript">
      function polynomialRollingHash(str, base = 31, mod = 1e9 + 7) {
        let hash = 0;
        let power = 1;

        for (let char of str) {
          hash = (hash + char.charCodeAt(0) * power) % mod;
          power = (power * base) % mod;
        }

        return hash;
      }

      const str = "hello";
      console.log(polynomialRollingHash(str)); // Output: 99162322
    </code>
  </pre>

  <h3 style="color: #27ae60;">Consistent Hashing</h3>
  <p style="font-size: 16px; color: #34495e;">
    Consistent Hashing is a technique used in distributed systems to distribute data evenly across multiple nodes. It minimizes the need for rehashing when nodes are added or removed.
  </p>
  <pre>
    <code class="language-javascript">
      class ConsistentHashing {
        constructor(nodes = [], replicas = 3) {
          this.replicas = replicas;
          this.circle = new Map();

          for (let node of nodes) {
            this.addNode(node);
          }
        }

        hash(key) {
          return polynomialRollingHash(key);
        }

        addNode(node) {
          for (let i = 0; i < this.replicas; i++) {
            const hashValue = this.hash(\`\${node}-\${i}\`);
            this.circle.set(hashValue, node);
          }
        }

        removeNode(node) {
          for (let i = 0; i < this.replicas; i++) {
            const hashValue = this.hash(\`\${node}-\${i}\`);
            this.circle.delete(hashValue);
          }
        }

        getNode(key) {
          if (this.circle.size === 0) return null;

          const hashValue = this.hash(key);
          for (let [hash, node] of this.circle) {
            if (hash >= hashValue) {
              return node;
            }
          }
          return this.circle.values().next().value; // Wrap around to the first node
        }
      }

      const nodes = ["Node1", "Node2", "Node3"];
      const consistentHashing = new ConsistentHashing(nodes);
      console.log(consistentHashing.getNode("key1")); // Output: Node2
    </code>
  </pre>
</div>`
        },
        {
          articleTitle:`Bit Manipulation`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Bit Manipulation in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Bit manipulation involves directly manipulating bits (binary digits) to perform operations efficiently. It is commonly used in low-level programming, cryptography, and optimization problems. JavaScript supports bitwise operators that allow you to work with numbers at the bit level.
  </p>

  <h3 style="color: #16a085;">Key Bitwise Operators in JavaScript</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>&</code> (AND): Sets each bit to 1 if both bits are 1.</li>
    <li><code>|</code> (OR): Sets each bit to 1 if at least one of the bits is 1.</li>
    <li><code>^</code> (XOR): Sets each bit to 1 if only one of the bits is 1.</li>
    <li><code>~</code> (NOT): Inverts all the bits.</li>
    <li><code><<</code> (Left Shift): Shifts bits to the left and fills with 0.</li>
    <li><code>>></code> (Right Shift): Shifts bits to the right and fills with the sign bit.</li>
    <li><code>>>></code> (Unsigned Right Shift): Shifts bits to the right and fills with 0.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Bitwise Operations</h3>
  <p style="font-size: 16px; color: #34495e;">
    Here are some examples of basic bitwise operations in JavaScript:
  </p>
  <pre>
    <code class="language-javascript">
      const a = 5; // Binary: 0101
      const b = 3; // Binary: 0011

      console.log(a & b); // AND: 0001 (1)
      console.log(a | b); // OR: 0111 (7)
      console.log(a ^ b); // XOR: 0110 (6)
      console.log(~a); // NOT: 11111111111111111111111111111010 (-6 in 32-bit signed integer)
      console.log(a << 1); // Left Shift: 1010 (10)
      console.log(a >> 1); // Right Shift: 0010 (2)
      console.log(a >>> 1); // Unsigned Right Shift: 0010 (2)
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Check if a Number is Even or Odd</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use the <code>&</code> operator to check if a number is even or odd by examining the least significant bit (LSB).
  </p>
  <pre>
    <code class="language-javascript">
      function isEven(n) {
        return (n & 1) === 0;
      }

      console.log(isEven(4)); // Output: true
      console.log(isEven(5)); // Output: false
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Swap Two Numbers Without a Temporary Variable</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use the XOR operator to swap two numbers without using a temporary variable.
  </p>
  <pre>
    <code class="language-javascript">
      function swap(a, b) {
        a = a ^ b;
        b = a ^ b;
        a = a ^ b;
        return [a, b];
      }

      let x = 5, y = 10;
      [x, y] = swap(x, y);
      console.log(x, y); // Output: 10, 5
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Count the Number of Set Bits (1s)</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can count the number of set bits (1s) in a number using a loop and the <code>&</code> operator.
  </p>
  <pre>
    <code class="language-javascript">
      function countSetBits(n) {
        let count = 0;
        while (n > 0) {
          count += n & 1;
          n = n >>> 1;
        }
        return count;
      }

      console.log(countSetBits(29)); // Output: 4 (29 in binary: 11101)
    </code>
  </pre>

  <h3 style="color: #27ae60;">Check if a Number is a Power of Two</h3>
  <p style="font-size: 16px; color: #34495e;">
    A number is a power of two if it has exactly one set bit. You can use the <code>&</code> operator to check this.
  </p>
  <pre>
    <code class="language-javascript">
      function isPowerOfTwo(n) {
        return n > 0 && (n & (n - 1)) === 0;
      }

      console.log(isPowerOfTwo(16)); // Output: true
      console.log(isPowerOfTwo(15)); // Output: false
    </code>
  </pre>

  <h3 style="color: #e67e22;">Find the Missing Number in an Array</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use the XOR operator to find the missing number in an array of numbers from 0 to n.
  </p>
  <pre>
    <code class="language-javascript">
      function findMissingNumber(nums) {
        let missing = nums.length;
        for (let i = 0; i < nums.length; i++) {
          missing ^= i ^ nums[i];
        }
        return missing;
      }

      const nums = [0, 1, 3];
      console.log(findMissingNumber(nums)); // Output: 2
    </code>
  </pre>

  <h3 style="color: #2980b9;">Reverse Bits of a Number</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can reverse the bits of a number using bitwise operations.
  </p>
  <pre>
    <code class="language-javascript">
      function reverseBits(n) {
        let result = 0;
        for (let i = 0; i < 32; i++) {
          result = (result << 1) | (n & 1);
          n = n >>> 1;
        }
        return result >>> 0; // Convert to unsigned 32-bit integer
      }

      console.log(reverseBits(43261596)); // Output: 964176192
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: `Mathematical`,
          content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Mathematical Algorithms in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Mathematical algorithms are essential for solving problems related to numbers, geometry, and other mathematical concepts. JavaScript provides built-in mathematical functions, but understanding how to implement algorithms for tasks like prime checking, GCD calculation, and factorial computation is crucial for solving complex problems.
  </p>

  <h3 style="color: #16a085;">Key Mathematical Algorithms</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prime Number Checking</li>
    <li>Greatest Common Divisor (GCD)</li>
    <li>Least Common Multiple (LCM)</li>
    <li>Factorial Computation</li>
    <li>Fibonacci Sequence</li>
    <li>Exponentiation</li>
  </ul>

  <h3 style="color: #e67e22;">Prime Number Checking</h3>
  <p style="font-size: 16px; color: #34495e;">
    A prime number is a number greater than 1 that has no divisors other than 1 and itself. The Sieve of Eratosthenes is an efficient algorithm to find all primes up to a given number.
  </p>
  <pre>
    <code class="language-javascript">
      function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;

        for (let i = 5; i * i <= n; i += 6) {
          if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        return true;
      }

      console.log(isPrime(29)); // Output: true
      console.log(isPrime(30)); // Output: false
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Greatest Common Divisor (GCD)</h3>
  <p style="font-size: 16px; color: #34495e;">
    The GCD of two numbers is the largest number that divides both of them. The Euclidean algorithm is a popular method to compute the GCD.
  </p>
  <pre>
    <code class="language-javascript">
      function gcd(a, b) {
        while (b !== 0) {
          const temp = b;
          b = a % b;
          a = temp;
        }
        return a;
      }

      console.log(gcd(48, 18)); // Output: 6
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Least Common Multiple (LCM)</h3>
  <p style="font-size: 16px; color: #34495e;">
    The LCM of two numbers is the smallest number that is a multiple of both. It can be computed using the GCD.
  </p>
  <pre>
    <code class="language-javascript">
      function lcm(a, b) {
        return (a * b) / gcd(a, b);
      }

      console.log(lcm(12, 18)); // Output: 36
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Factorial Computation</h3>
  <p style="font-size: 16px; color: #34495e;">
    The factorial of a number <code>n</code> (denoted as <code>n!</code>) is the product of all positive integers less than or equal to <code>n</code>.
  </p>
  <pre>
    <code class="language-javascript">
      function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
      }

      console.log(factorial(5)); // Output: 120
    </code>
  </pre>

  <h3 style="color: #27ae60;">Fibonacci Sequence</h3>
  <p style="font-size: 16px; color: #34495e;">
    The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.
  </p>
  <pre>
    <code class="language-javascript">
      function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
      }

      console.log(fibonacci(6)); // Output: 8
    </code>
  </pre>

  <h3 style="color: #e67e22;">Exponentiation</h3>
  <p style="font-size: 16px; color: #34495e;">
    Exponentiation is the process of raising a number to the power of another number. A fast exponentiation algorithm can compute this efficiently.
  </p>
  <pre>
    <code class="language-javascript">
      function fastExponentiation(base, exponent) {
        if (exponent === 0) return 1;
        if (exponent === 1) return base;

        const half = fastExponentiation(base, Math.floor(exponent / 2));
        return exponent % 2 === 0 ? half * half : half * half * base;
      }

      console.log(fastExponentiation(2, 10)); // Output: 1024
    </code>
  </pre>

  <h3 style="color: #2980b9;">Matrix Multiplication</h3>
  <p style="font-size: 16px; color: #34495e;">
    Matrix multiplication is a fundamental operation in linear algebra. It involves multiplying two matrices to produce a third matrix.
  </p>
  <pre>
    <code class="language-javascript">
      function matrixMultiplication(A, B) {
        const rowsA = A.length;
        const colsA = A[0].length;
        const rowsB = B.length;
        const colsB = B[0].length;

        if (colsA !== rowsB) throw new Error("Matrices cannot be multiplied");

        const result = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

        for (let i = 0; i < rowsA; i++) {
          for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
              result[i][j] += A[i][k] * B[k][j];
            }
          }
        }

        return result;
      }

      const A = [
        [1, 2],
        [3, 4]
      ];
      const B = [
        [5, 6],
        [7, 8]
      ];
      console.log(matrixMultiplication(A, B));
      // Output: [ [19, 22], [43, 50] ]
    </code>
  </pre>
</div>`
        },
        {
          articleTitle: ``,
          content: ``
        }
    ];
}