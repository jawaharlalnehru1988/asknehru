export interface JsContent{
    articleTitle: string;
    content: string;
}
export class JsContents {

    topicContents: JsContent[] = [
        {
         
            articleTitle: "Introduction to JavaScript",
            content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Introduction to JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        JavaScript is a versatile and widely-used programming language that enables dynamic content on web pages. It is a core technology of the web, alongside HTML and CSS.
    </p>
    
    <h2 style="color: #2980b9;">What is JavaScript?</h2>
    <p>JavaScript is a high-level, interpreted scripting language that allows you to implement complex features on web pages.</p>
    <code class="language-javascript" codeHighlight>console.log("Hello, World!");</code>
    
    <h2 style="color: #2980b9;">Key Features of JavaScript</h2>
    <ul>
        <li>Dynamically typed</li>
        <li>Event-driven</li>
        <li>Supports object-oriented and functional programming paradigms</li>
        <li>Runs in the browser and on servers using Node.js</li>
    </ul>
    
    <h2 style="color: #2980b9;">How JavaScript Works</h2>
    <p>JavaScript runs in a browser environment using the JavaScript Engine, which interprets and executes the code.</p>
    <pre>
    <code class="language-javascript" codeHighlight>
    let name = "Nehru";
    console.log(\`Welcome, \${name}!\`);</code>
    </pre>
    
    <h2 style="color: #2980b9;">Why Learn JavaScript?</h2>
    <p>JavaScript is essential for web development and is widely used in front-end frameworks like Angular, React, and Vue.</p>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Learning JavaScript is crucial for anyone looking to develop modern web applications. Start exploring its features and capabilities today!</p>
</div>
`
        },
        {
            
            articleTitle: "Primitive Data Types",
            content: `
            <div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Primitive Data Types in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, primitive data types are the most basic types of data. These types are immutable and stored directly in memory.
        JavaScript provides <strong>seven</strong> primitive data types:
    </p>
    
    <h2 style="color: #2980b9;">1. Number</h2>
    <p>Represents both integer and floating-point numbers.</p>
    <code class="language-javascript" codeHighlight>let num = 42;</code>
    
    <h2 style="color: #2980b9;">2. String</h2>
    <p>Represents textual data enclosed in quotes.</p>
    <code class="language-javascript" codeHighlight>let str = "Hello, World!";</code>
    
    <h2 style="color: #2980b9;">3. Boolean</h2>
    <p>Can only hold <strong>true</strong> or <strong>false</strong> values.</p>
    <code class="language-javascript" codeHighlight>let isValid = true;</code>
    
    <h2 style="color: #2980b9;">4. Undefined</h2>
    <p>A variable that has been declared but has not been assigned a value.</p>
    <code class="language-javascript" codeHighlight>let x;</code>
    
    <h2 style="color: #2980b9;">5. Null</h2>
    <p>Represents an intentional absence of value.</p>
    <code class="language-javascript" codeHighlight>let y = null;</code>
    
    <h2 style="color: #2980b9;">6. Symbol (ES6)</h2>
    <p>Represents a unique and immutable value.</p>
    <code class="language-javascript" codeHighlight>let sym = Symbol("unique");</code>
    
    <h2 style="color: #2980b9;">7. BigInt (ES11)</h2>
    <p>Used for large integers beyond the safe limit of Number.</p>
    <code class="language-javascript" codeHighlight>let bigIntNum = 12345678901234567890n;</code>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Primitive data types in JavaScript are simple and immutable. Understanding these helps in writing efficient and bug-free code.</p>
</div>
`
        },
        {
            
            articleTitle: "Non-Primitive Data Types",
            content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Reference Data Types in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, reference data types are objects that are stored in memory and referenced by memory addresses. Unlike primitive data types, these are mutable and dynamically allocated.
    </p>
    
    <h2 style="color: #2980b9;">1. Objects</h2>
    <p>Objects are collections of key-value pairs that store data and functions.</p>
    <code class="language-javascript" codeHighlight>let person = { name: "John", age: 30 };</code>
    
    <h2 style="color: #2980b9;">2. Arrays</h2>
    <p>Arrays are ordered collections of values.</p>
    <code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];</code>
    
    <h2 style="color: #2980b9;">3. Functions</h2>
    <p>Functions in JavaScript are first-class objects, meaning they can be assigned to variables and passed as arguments.</p>
    <pre>
    <code class="language-javascript" codeHighlight>
    function greet() { 
    console.log("Hello!"); 
    }</code>
    </pre>
    <h2 style="color: #2980b9;">4. Dates</h2>
    <p>The Date object is used to handle dates and times.</p>
    <code class="language-javascript" codeHighlight>let today = new Date();</code>
    
    <h2 style="color: #2980b9;">5. Maps</h2>
    <p>Maps store key-value pairs where keys can be of any type.</p>
    <pre>
    <code class="language-javascript" codeHighlight>
    let map = new Map(); 
    map.set("name", "Alice");
    map.set("age", 25);
    </code>
    </pre>
    <h2 style="color: #2980b9;">6. Sets</h2>
    <p>Sets store unique values of any type.</p>
    <pre> <code class="language-javascript" codeHighlight>let set = new Set([1, 2, 3, 3]);</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Reference data types in JavaScript allow for complex data structures and dynamic memory allocation, making them essential for modern web development.</p>
</div>`
         },
         {
            
            articleTitle: "Variable Declaration",
            content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Variable Declaration in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, variables are used to store data values. There are three ways to declare a variable: <code>var</code>, <code>let</code>, and <code>const</code>.
    </p>
    
    <h2 style="color: #2980b9;">1. Using <code>var</code></h2>
    <p>Variables declared with <code>var</code> have function scope and can be re-declared.</p>
    <pre><code class="language-javascript" codeHighlight>var x = 10;
x = 20; // Allowed</code></pre>
    
    <h2 style="color: #2980b9;">2. Using <code>let</code></h2>
    <p>Variables declared with <code>let</code> have block scope and cannot be re-declared in the same scope.</p>
    <pre><code class="language-javascript" codeHighlight>let y = 30;
y = 40; // Allowed</code></pre>
    
    <h2 style="color: #2980b9;">3. Using <code>const</code></h2>
    <p>Variables declared with <code>const</code> are block-scoped and cannot be reassigned.</p>
    <pre><code class="language-javascript" codeHighlight>const z = 50;
z = 60; // Error</code></pre>
    
    <h2 style="color: #2980b9;">Scope and Hoisting</h2>
    <p>JavaScript variables have different scope rules depending on how they are declared. Variables declared with <code>var</code> are hoisted but not initialized, while <code>let</code> and <code>const</code> are hoisted but not accessible before declaration.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(a); // Undefined
var a = 10;

// console.log(b); // Error
let b = 20;</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Choosing the right variable declaration method in JavaScript ensures better code structure and prevents errors related to scope and reassignments.</p>
</div>
`
         },
        {
            articleTitle: "Variable Initialization",
            content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Variable Initialization in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Variable initialization in JavaScript refers to the process of assigning a value to a declared variable. This can be done during declaration or later in the code.
    </p>
    
    <h2 style="color: #2980b9;">1. Initializing with <code>var</code></h2>
    <p>Variables declared with <code>var</code> are initialized with <code>undefined</code> if not explicitly assigned a value.</p>
    <pre><code class="language-javascript" codeHighlight>var x;
console.log(x); // Undefined
x = 10; // Initialized later</code></pre>
    
    <h2 style="color: #2980b9;">2. Initializing with <code>let</code></h2>
    <p>Variables declared with <code>let</code> are not initialized until a value is explicitly assigned.</p>
    <pre><code class="language-javascript" codeHighlight>let y;
console.log(y); // Undefined
y = 20; // Assigned a value</code></pre>
    
    <h2 style="color: #2980b9;">3. Initializing with <code>const</code></h2>
    <p>Variables declared with <code>const</code> must be initialized at the time of declaration.</p>
    <pre><code class="language-javascript" codeHighlight>const z = 30;
console.log(z); // 30

// const a; // Error: Missing initializer</code></pre>
    
    <h2 style="color: #2980b9;">4. Default Initialization</h2>
    <p>JavaScript automatically assigns <code>undefined</code> to variables declared with <code>var</code> and <code>let</code> if not explicitly initialized.</p>
    <pre><code class="language-javascript" codeHighlight>var a;
let b;
console.log(a, b); // Undefined, Undefined</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Proper initialization of variables helps prevent unexpected behavior and improves code reliability.</p>
</div>
`
        },
        {
            articleTitle: "Variable Scope",
            content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Variable Scope in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Variable scope in JavaScript determines the accessibility of a variable within different parts of the code. There are three main types of scope: Global Scope, Function Scope, and Block Scope.
    </p>
    
    <h2 style="color: #2980b9;">1. Global Scope</h2>
    <p>Variables declared outside any function have global scope and can be accessed anywhere in the script.</p>
    <pre><code class="language-javascript" codeHighlight>var globalVar = "I am global";
function test() {
    console.log(globalVar); // Accessible
}
test();</code></pre>
    
    <h2 style="color: #2980b9;">2. Function Scope</h2>
    <p>Variables declared with <code>var</code> inside a function are function-scoped and cannot be accessed outside the function.</p>
    <pre><code class="language-javascript" codeHighlight>function example() {
    var functionVar = "I am inside a function";
    console.log(functionVar); // Accessible within function
}
example();
// console.log(functionVar); // Error: functionVar is not defined</code></pre>
    
    <h2 style="color: #2980b9;">3. Block Scope</h2>
    <p>Variables declared with <code>let</code> and <code>const</code> are block-scoped and only accessible within the block they are defined in.</p>
    <pre><code class="language-javascript" codeHighlight>{
    let blockVar = "I am block scoped";
    console.log(blockVar); // Accessible inside block
}
// console.log(blockVar); // Error: blockVar is not defined</code></pre>
    
    <h2 style="color: #2980b9;">4. Lexical Scope</h2>
    <p>Inner functions have access to variables from their outer functions due to lexical scoping.</p>
    <pre><code class="language-javascript" codeHighlight>function outer() {
    let outerVar = "I am from outer function";
    function inner() {
        console.log(outerVar); // Accessible due to lexical scope
    }
    inner();
}
outer();</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Understanding variable scope helps in writing better structured and error-free JavaScript code.</p>
</div>
`},
{
    articleTitle: "Variable Re-Assignment",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Variable Re-Assignment in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Variable re-assignment in JavaScript refers to updating the value of an already declared variable. The behavior depends on whether the variable is declared with <code>var</code>, <code>let</code>, or <code>const</code>.
    </p>
    
    <h2 style="color: #2980b9;">1. Re-assigning Variables Declared with <code>var</code></h2>
    <p>Variables declared with <code>var</code> can be re-assigned freely.</p>
    <pre><code class="language-javascript" codeHighlight>var x = 10;
x = 20;
console.log(x); // 20</code></pre>
    
    <h2 style="color: #2980b9;">2. Re-assigning Variables Declared with <code>let</code></h2>
    <p>Variables declared with <code>let</code> can also be re-assigned.</p>
    <pre><code class="language-javascript" codeHighlight>let y = 30;
y = 40;
console.log(y); // 40</code></pre>
    
    <h2 style="color: #2980b9;">3. Re-assigning Variables Declared with <code>const</code></h2>
    <p>Variables declared with <code>const</code> cannot be re-assigned after initialization.</p>
    <pre><code class="language-javascript" codeHighlight>const z = 50;
z = 60; // Error: Assignment to constant variable.</code></pre>
    
    <h2 style="color: #2980b9;">4. Re-assigning Object Properties</h2>
    <p>While <code>const</code> variables cannot be re-assigned, object properties can be modified.</p>
    <pre><code class="language-javascript" codeHighlight>const obj = { name: "Alice" };
obj.name = "Bob"; // Allowed
console.log(obj.name); // Bob</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Understanding variable re-assignment is crucial for avoiding unexpected errors and ensuring code reliability.</p>
</div>
`
},
{
    articleTitle: "Arithmetic Operators",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Arithmetic Operators in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Arithmetic operators in JavaScript are used to perform mathematical calculations. These include addition, subtraction, multiplication, division, and more.
    </p>
    
    <h2 style="color: #2980b9;">1. Addition (+)</h2>
    <p>Adds two numbers together.</p>
    <pre><code class="language-javascript" codeHighlight>let sum = 10 + 5;
console.log(sum); // 15</code></pre>
    
    <h2 style="color: #2980b9;">2. Subtraction (-)</h2>
    <p>Subtracts the right operand from the left operand.</p>
    <pre><code class="language-javascript" codeHighlight>let difference = 10 - 5;
console.log(difference); // 5</code></pre>
    
    <h2 style="color: #2980b9;">3. Multiplication (*)</h2>
    <p>Multiplies two numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let product = 10 * 5;
console.log(product); // 50</code></pre>
    
    <h2 style="color: #2980b9;">4. Division (/)</h2>
    <p>Divides the left operand by the right operand.</p>
    <pre><code class="language-javascript" codeHighlight>let quotient = 10 / 5;
console.log(quotient); // 2</code></pre>
    
    <h2 style="color: #2980b9;">5. Modulus (%)</h2>
    <p>Returns the remainder of division.</p>
    <pre><code class="language-javascript" codeHighlight>let remainder = 10 % 3;
console.log(remainder); // 1</code></pre>
    
    <h2 style="color: #2980b9;">6. Exponentiation (**)</h2>
    <p>Raises the left operand to the power of the right operand.</p>
    <pre><code class="language-javascript" codeHighlight>let power = 2 ** 3;
console.log(power); // 8</code></pre>
    
    <h2 style="color: #2980b9;">7. Increment (++):</h2>
    <p>Increases a number by one.</p>
    <pre><code class="language-javascript" codeHighlight>let num = 5;
num++;
console.log(num); // 6</code></pre>
    
    <h2 style="color: #2980b9;">8. Decrement (--):</h2>
    <p>Decreases a number by one.</p>
    <pre><code class="language-javascript" codeHighlight>let count = 5;
count--;
console.log(count); // 4</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Arithmetic operators are fundamental in JavaScript for performing calculations. Understanding them is key to writing effective programs.</p>
</div>`
},
{
    articleTitle: "Comparison Operators",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Comparison Operators in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Comparison operators in JavaScript are used to compare two values and return a boolean result: <code>true</code> or <code>false</code>. These operators are essential for decision-making in programs.
    </p>
    
    <h2 style="color: #2980b9;">1. Equal (==)</h2>
    <p>Checks if two values are equal, performing type coercion if necessary.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 == '5'); // true</code></pre>
    
    <h2 style="color: #2980b9;">2. Strict Equal (===)</h2>
    <p>Checks if two values are equal and of the same type.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 === '5'); // false</code></pre>
    
    <h2 style="color: #2980b9;">3. Not Equal (!=)</h2>
    <p>Checks if two values are not equal, performing type coercion if necessary.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 != '5'); // false</code></pre>
    
    <h2 style="color: #2980b9;">4. Strict Not Equal (!==)</h2>
    <p>Checks if two values are not equal or not of the same type.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 !== '5'); // true</code></pre>
    
    <h2 style="color: #2980b9;">5. Greater Than (>)</h2>
    <p>Checks if the left operand is greater than the right operand.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(10 > 5); // true</code></pre>
    
    <h2 style="color: #2980b9;">6. Greater Than or Equal (>=)</h2>
    <p>Checks if the left operand is greater than or equal to the right operand.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(10 >= 10); // true</code></pre>
    
    <h2 style="color: #2980b9;">7. Less Than (<)</h2>
    <p>Checks if the left operand is less than the right operand.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 < 10); // true</code></pre>
    
    <h2 style="color: #2980b9;">8. Less Than or Equal (<=)</h2>
    <p>Checks if the left operand is less than or equal to the right operand.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 <= 5); // true</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Comparison operators are crucial for making logical decisions in JavaScript. Using strict comparison (<code>===</code> and <code>!==</code>) is recommended to avoid unexpected type coercion.</p>
</div>`
},
{
    articleTitle: "Logical Operators",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Logical Operators in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Logical operators in JavaScript are used to perform logical operations on boolean values. They are commonly used in conditional statements and expressions.
    </p>
    
    <h2 style="color: #2980b9;">1. Logical AND (&&)</h2>
    <p>Returns <code>true</code> if both operands are <code>true</code>, otherwise returns <code>false</code>.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(true && false); // false
console.log(true && true);  // true</code></pre>
    
    <h2 style="color: #2980b9;">2. Logical OR (||)</h2>
    <p>Returns <code>true</code> if at least one of the operands is <code>true</code>, otherwise returns <code>false</code>.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(true || false); // true
console.log(false || false); // false</code></pre>
    
    <h2 style="color: #2980b9;">3. Logical NOT (!)</h2>
    <p>Returns the opposite boolean value of the operand.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(!true); // false
console.log(!false); // true</code></pre>
    
    <h2 style="color: #2980b9;">4. Short-circuit Evaluation</h2>
    <p>Logical operators in JavaScript use short-circuit evaluation, meaning they stop evaluating as soon as the result is determined.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(false && someFunction()); // false (someFunction() is never called)
console.log(true || someFunction()); // true (someFunction() is never called)</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Logical operators are fundamental for writing conditions in JavaScript. Understanding their behavior and short-circuit evaluation helps in optimizing code efficiency.</p>
</div>
`
},
{
    articleTitle: "Bitwise Operators",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Bitwise Operators in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Bitwise operators in JavaScript perform operations at the binary level. These operators treat numbers as 32-bit signed integers and manipulate their individual bits.
    </p>
    
    <h2 style="color: #2980b9;">1. Bitwise AND (&)</h2>
    <p>Performs a bitwise AND operation on the corresponding bits of two numbers.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 & 1); // 1 (0101 & 0001 = 0001)</code></pre>
    
    <h2 style="color: #2980b9;">2. Bitwise OR (|)</h2>
    <p>Performs a bitwise OR operation on the corresponding bits of two numbers.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 | 1); // 5 (0101 | 0001 = 0101)</code></pre>
    
    <h2 style="color: #2980b9;">3. Bitwise XOR (^)</h2>
    <p>Performs a bitwise XOR operation where bits are set to 1 if they are different.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 ^ 1); // 4 (0101 ^ 0001 = 0100)</code></pre>
    
    <h2 style="color: #2980b9;">4. Bitwise NOT (~)</h2>
    <p>Inverts all bits of a number.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(~5); // -6 (~0101 = 1010 in two's complement)</code></pre>
    
    <h2 style="color: #2980b9;">5. Left Shift (<<)</h2>
    <p>Shifts bits to the left, filling with zeros.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 << 1); // 10 (0101 << 1 = 1010)</code></pre>
    
    <h2 style="color: #2980b9;">6. Right Shift (>>)</h2>
    <p>Shifts bits to the right, maintaining the sign bit.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 >> 1); // 2 (0101 >> 1 = 0010)</code></pre>
    
    <h2 style="color: #2980b9;">7. Zero-fill Right Shift (>>>)</h2>
    <p>Shifts bits to the right, filling with zeros.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(-5 >>> 1); // 2147483645</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Bitwise operators are useful for low-level tasks such as working with binary data, encryption, and performance optimizations in JavaScript.</p>
</div>
`
},
{
    articleTitle: "Assignment Operators",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Assignment Operators in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Assignment operators in JavaScript are used to assign values to variables. They can also perform operations before assigning values.
    </p>
    
    <h2 style="color: #2980b9;">1. Simple Assignment (=)</h2>
    <p>Assigns the value of the right operand to the left operand.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 10;
console.log(x); // 10</code></pre>
    
    <h2 style="color: #2980b9;">2. Addition Assignment (+=)</h2>
    <p>Adds the right operand to the left operand and assigns the result.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 5;
x += 3; // Equivalent to x = x + 3;
console.log(x); // 8</code></pre>
    
    <h2 style="color: #2980b9;">3. Subtraction Assignment (-=)</h2>
    <p>Subtracts the right operand from the left operand and assigns the result.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 10;
x -= 4; // Equivalent to x = x - 4;
console.log(x); // 6</code></pre>
    
    <h2 style="color: #2980b9;">4. Multiplication Assignment (*=)</h2>
    <p>Multiplies the left operand by the right operand and assigns the result.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 4;
x *= 2; // Equivalent to x = x * 2;
console.log(x); // 8</code></pre>
    
    <h2 style="color: #2980b9;">5. Division Assignment (/=)</h2>
    <p>Divides the left operand by the right operand and assigns the result.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 20;
x /= 5; // Equivalent to x = x / 5;
console.log(x); // 4</code></pre>
    
    <h2 style="color: #2980b9;">6. Modulus Assignment (%=)</h2>
    <p>Computes the remainder of division and assigns the result.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 10;
x %= 3; // Equivalent to x = x % 3;
console.log(x); // 1</code></pre>
    
    <h2 style="color: #2980b9;">7. Exponentiation Assignment (**=)</h2>
    <p>Raises the left operand to the power of the right operand and assigns the result.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 2;
x **= 3; // Equivalent to x = x ** 3;
console.log(x); // 8</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Assignment operators simplify writing expressions and make code more concise. They are essential in performing arithmetic and logical assignments in JavaScript.</p>
</div>`
},
{
    articleTitle: "Unary Operators",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Unary Operators in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Unary operators are operators that operate on a single operand. JavaScript provides several unary operators for different purposes.
    </p>
    
    <h2 style="color: #2980b9;">1. Unary Plus (+)</h2>
    <p>Converts its operand into a number.</p>
    <pre><code class="language-javascript" codeHighlight>let x = "5";
console.log(+x); // 5</code></pre>
    
    <h2 style="color: #2980b9;">2. Unary Negation (-)</h2>
    <p>Negates the value of its operand.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 5;
console.log(-x); // -5</code></pre>
    
    <h2 style="color: #2980b9;">3. Increment (++): Pre & Post</h2>
    <p>Increases the value of a variable by 1.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 5;
console.log(++x); // 6 (Pre-increment)
console.log(x++); // 6 (Post-increment, value updated after execution)</code></pre>
    
    <h2 style="color: #2980b9;">4. Decrement (--): Pre & Post</h2>
    <p>Decreases the value of a variable by 1.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 5;
console.log(--x); // 4 (Pre-decrement)
console.log(x--); // 4 (Post-decrement, value updated after execution)</code></pre>
    
    <h2 style="color: #2980b9;">5. Logical NOT (!)</h2>
    <p>Negates a boolean value.</p>
    <pre><code class="language-javascript" codeHighlight>let isTrue = true;
console.log(!isTrue); // false</code></pre>
    
    <h2 style="color: #2980b9;">6. Typeof Operator (typeof)</h2>
    <p>Returns the type of a given variable.</p>
    <pre><code class="language-javascript" codeHighlight>let x = "Hello";
console.log(typeof x); // "string"</code></pre>
    
    <h2 style="color: #2980b9;">7. Delete Operator (delete)</h2>
    <p>Removes a property from an object.</p>
    <pre><code class="language-javascript" codeHighlight>let obj = { name: "John", age: 30 };
delete obj.age;
console.log(obj); // { name: "John" }</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Unary operators are useful for simple operations like type checking, negation, and modifying variable values.</p>
</div>
`
},
{
    articleTitle: "Ternary Operator",
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Ternary Operator in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The ternary operator in JavaScript is a shorthand for the <code>if-else</code> statement. It is a concise way to perform conditional checks and assign values based on a condition.
    </p>
    
    <h2 style="color: #2980b9;">Syntax</h2>
    <pre><code class="language-javascript" codeHighlight>condition ? expression_if_true : expression_if_false;</code></pre>
    
    <h2 style="color: #2980b9;">Example 1: Basic Usage</h2>
    <p>Using the ternary operator to determine if a number is even or odd.</p>
    <pre><code class="language-javascript" codeHighlight>let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // "Even"</code></pre>
    
    <h2 style="color: #2980b9;">Example 2: Assigning Values Conditionally</h2>
    <p>Using the ternary operator to assign a value based on a condition.</p>
    <pre><code class="language-javascript" codeHighlight>let age = 18;
let access = (age >= 18) ? "Allowed" : "Denied";
console.log(access); // "Allowed"</code></pre>
    
    <h2 style="color: #2980b9;">Example 3: Nested Ternary Operator</h2>
    <p>Using multiple ternary operators for complex conditions.</p>
    <pre><code class="language-javascript" codeHighlight>let score = 85;
let grade = (score >= 90) ? "A" : (score >= 80) ? "B" : "C";
console.log(grade); // "B"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The ternary operator is useful for writing concise conditional statements. However, it should be used carefully to maintain code readability.</p>
</div>
`
},
{
    articleTitle: "Type Conversion",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Type Conversion in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Type conversion in JavaScript refers to changing a value from one data type to another. JavaScript provides two types of conversions: implicit (type coercion) and explicit (manual conversion).
    </p>
    
    <h2 style="color: #2980b9;">1. Implicit Type Conversion (Type Coercion)</h2>
    <p>JavaScript automatically converts data types when needed.</p>
    <pre><code class="language-javascript" codeHighlight>console.log("5" - 2); // 3 (string converted to number)
console.log("5" + 2); // "52" (number converted to string)
console.log(true + 1); // 2 (true converted to 1)
console.log(false + "test"); // "falsetest" (boolean converted to string)</code></pre>
    
    <h2 style="color: #2980b9;">2. Explicit Type Conversion</h2>
    <p>Manual conversion using built-in JavaScript methods.</p>
    
    <h3 style="color: #8e44ad;">String Conversion</h3>
    <pre><code class="language-javascript" codeHighlight>let num = 42;
console.log(String(num)); // "42"
console.log((42).toString()); // "42"</code></pre>
    
    <h3 style="color: #8e44ad;">Number Conversion</h3>
    <pre><code class="language-javascript" codeHighlight>let str = "123";
console.log(Number(str)); // 123
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14</code></pre>
    
    <h3 style="color: #8e44ad;">Boolean Conversion</h3>
    <pre><code class="language-javascript" codeHighlight>console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Understanding type conversion helps prevent unexpected results in JavaScript. Implicit conversions happen automatically, while explicit conversions require the use of built-in methods.</p>
</div>
`
},
{
    articleTitle: "Type Coercion",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Type Coercion in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Type coercion is the automatic or implicit conversion of values from one data type to another in JavaScript. This happens when operations involve different types, and JavaScript converts one type to another to make the operation possible.
    </p>
    
    <h2 style="color: #2980b9;">1. Implicit Type Coercion</h2>
    <p>JavaScript automatically converts data types when necessary.</p>
    <pre><code class="language-javascript" codeHighlight>console.log("5" - 2); // 3 (string converted to number)
console.log("5" + 2); // "52" (number converted to string)
console.log(true + 1); // 2 (boolean converted to number)
console.log(false + "test"); // "falsetest" (boolean converted to string)</code></pre>
    
    <h2 style="color: #2980b9;">2. Explicit Type Coercion</h2>
    <p>Explicit conversion, also known as type casting, requires the use of JavaScript functions.</p>
    
    <h3 style="color: #8e44ad;">String Conversion</h3>
    <pre><code class="language-javascript" codeHighlight>let num = 42;
console.log(String(num)); // "42"
console.log((42).toString()); // "42"</code></pre>
    
    <h3 style="color: #8e44ad;">Number Conversion</h3>
    <pre><code class="language-javascript" codeHighlight>let str = "123";
console.log(Number(str)); // 123
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14</code></pre>
    
    <h3 style="color: #8e44ad;">Boolean Conversion</h3>
    <pre><code class="language-javascript" codeHighlight>console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("hello")); // true
console.log(Boolean("")); // false</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Type coercion in JavaScript can be useful but sometimes leads to unexpected results. Understanding implicit and explicit type conversions helps write better and more predictable code.</p>
</div>
`
},
{
    articleTitle: "Operator Precedence",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Operator Precedence in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Operator precedence determines the order in which operations are performed in JavaScript. Operators with higher precedence execute before those with lower precedence.
    </p>
    
    <h2 style="color: #2980b9;">1. Operator Precedence Order</h2>
    <p>JavaScript follows a predefined precedence order when evaluating expressions.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(3 + 4 * 5); // 3 + (4 * 5) = 23
console.log((3 + 4) * 5); // (3 + 4) * 5 = 35
console.log(10 / 2 * 5); // (10 / 2) * 5 = 25</code></pre>
    
    <h2 style="color: #2980b9;">2. Operator Precedence Table</h2>
    <p>Some common operators and their precedence (higher value means higher precedence):</p>
    <ul>
        <li><strong>Grouping ( )</strong> - Highest precedence</li>
        <li><strong>Member Access (.)</strong>, <strong>Function Call ()</strong> - 18</li>
        <li><strong>Negation (-), Increment (++), Decrement (--)</strong> - 17</li>
        <li><strong>Multiplication (*), Division (/), Modulus (%)</strong> - 15</li>
        <li><strong>Addition (+), Subtraction (-)</strong> - 14</li>
        <li><strong>Comparison (>, <, >=, <=)</strong> - 12</li>
        <li><strong>Equality (==, ===, !=, !==)</strong> - 11</li>
        <li><strong>Logical AND (&&)</strong> - 6</li>
        <li><strong>Logical OR (||)</strong> - 5</li>
        <li><strong>Assignment (=, +=, -=, *=, /=)</strong> - 3</li>
    </ul>
    
    <h2 style="color: #2980b9;">3. Using Parentheses to Control Precedence</h2>
    <p>Using parentheses can change the evaluation order:</p>
    <pre><code class="language-javascript" codeHighlight>console.log(5 + 10 * 2); // 5 + (10 * 2) = 25
console.log((5 + 10) * 2); // (5 + 10) * 2 = 30</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Understanding operator precedence is essential to avoid unexpected results in JavaScript expressions. Use parentheses to ensure clarity and control execution order.</p>
</div>
`
},
{
    articleTitle: "Operator Chaining",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Operator Chaining in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Operator chaining in JavaScript refers to combining multiple operators in a single expression. Understanding operator precedence is crucial to avoid unexpected results.
    </p>
    
    <h2 style="color: #2980b9;">1. Examples of Operator Chaining</h2>
    <p>When multiple operators are used in one expression, JavaScript follows precedence rules.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(10 > 5 > 2); // false, because (10 > 5) is true (1), and 1 > 2 is false
console.log(5 + 3 * 2); // 5 + (3 * 2) = 11</code></pre>
    
    <h2 style="color: #2980b9;">2. Logical Operator Chaining</h2>
    <p>Logical operators such as <code>&&</code> and <code>||</code> can be chained to form complex conditions.</p>
    <pre><code class="language-javascript" codeHighlight>let a = true, b = false, c = true;
console.log(a && b && c); // false (evaluates left to right)
console.log(a || b || c); // true (evaluates left to right)</code></pre>
    
    <h2 style="color: #2980b9;">3. Combining Different Operators</h2>
    <p>Chaining different operators in one expression follows JavaScript's precedence rules.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(10 + 5 > 12 && 8 - 2 < 10); // true</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Operator chaining can simplify expressions but can also lead to confusion if precedence is not understood. Using parentheses can help clarify the intended evaluation order.</p>
</div>
`
},
{
    articleTitle: "Nullish Coalescing Operator",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Nullish Coalescing Operator (??) in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The Nullish Coalescing Operator (<code>??</code>) in JavaScript is used to provide a default value when dealing with <code>null</code> or <code>undefined</code>. It helps in preventing unintended falsy value evaluations like <code>0</code> or an empty string.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage</h2>
    <p>The <code>??</code> operator returns the right-hand operand only if the left-hand operand is <code>null</code> or <code>undefined</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let name = null;
let defaultName = "Guest";
console.log(name ?? defaultName); // Output: "Guest"</code></pre>
    
    <h2 style="color: #2980b9;">2. Difference from OR (||) Operator</h2>
    <p>Unlike the logical OR <code>||</code> operator, <code>??</code> does not treat <code>0</code>, <code>false</code>, or an empty string as falsy.</p>
    <pre><code class="language-javascript" codeHighlight>let count = 0;
console.log(count || 10); // Output: 10 (because 0 is falsy)
console.log(count ?? 10); // Output: 0 (because 0 is not null or undefined)</code></pre>
    
    <h2 style="color: #2980b9;">3. Practical Use Cases</h2>
    <p>Useful when assigning default values for user inputs or API responses.</p>
    <pre><code class="language-javascript" codeHighlight>let userSettings = { theme: null };
let theme = userSettings.theme ?? "light";
console.log(theme); // Output: "light"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The Nullish Coalescing Operator <code>??</code> is a powerful tool for handling default values without misinterpreting valid falsy values.</p>
</div>
`
},
{
    articleTitle: "Spread Operator",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Spread Operator (...) in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The Spread Operator (<code>...</code>) in JavaScript is used to expand iterable elements like arrays, objects, and function arguments. It simplifies working with data structures by making copying and merging easier.
    </p>
    
    <h2 style="color: #2980b9;">1. Expanding Arrays</h2>
    <p>The spread operator can be used to expand elements of an array into individual elements.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3</code></pre>
    
    <h2 style="color: #2980b9;">2. Copying and Merging Arrays</h2>
    <p>It allows creating a shallow copy of an array and merging multiple arrays.</p>
    <pre><code class="language-javascript" codeHighlight>let arr1 = [1, 2, 3];
let arr2 = [...arr1]; // Copying
let arr3 = [...arr1, 4, 5]; // Merging
console.log(arr2); // Output: [1, 2, 3]
console.log(arr3); // Output: [1, 2, 3, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">3. Spreading Objects</h2>
    <p>It can be used to copy and merge objects as well.</p>
    <pre><code class="language-javascript" codeHighlight>let obj1 = { name: "John", age: 25 };
let obj2 = { ...obj1, city: "New York" };
console.log(obj2); // Output: { name: "John", age: 25, city: "New York" }</code></pre>
    
    <h2 style="color: #2980b9;">4. Using Spread in Function Arguments</h2>
    <p>It allows passing elements of an array as individual arguments to a function.</p>
    <pre><code class="language-javascript" codeHighlight>function sum(a, b, c) {
    return a + b + c;
}
let nums = [1, 2, 3];
console.log(sum(...nums)); // Output: 6</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The spread operator (<code>...</code>) is a versatile tool that makes handling arrays and objects more convenient and efficient.</p>
</div>
`
},
{
    articleTitle: "Rest Operator",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Rest Operator (...) in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The Rest Operator (<code>...</code>) in JavaScript is used to collect multiple elements into an array. It is primarily used in function parameters and array/object destructuring.
    </p>
    
    <h2 style="color: #2980b9;">1. Using Rest Operator in Function Parameters</h2>
    <p>The rest operator allows functions to accept an indefinite number of arguments as an array.</p>
    <pre><code class="language-javascript" codeHighlight>function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10</code></pre>
    
    <h2 style="color: #2980b9;">2. Rest Operator in Array Destructuring</h2>
    <p>It can be used to gather the remaining elements of an array.</p>
    <pre><code class="language-javascript" codeHighlight>let [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">3. Rest Operator in Object Destructuring</h2>
    <p>It can also be used to extract specific properties while gathering the remaining properties into another object.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John", age: 30, city: "New York" };
let { name, ...details } = person;
console.log(name); // Output: "John"
console.log(details); // Output: { age: 30, city: "New York" }</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The rest operator (<code>...</code>) is a powerful tool for handling multiple function arguments and simplifying array/object destructuring.</p>
</div>
`
},
{
    articleTitle: "If-Else Statements",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">If-Else Statements in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>if-else</code> statement in JavaScript is used to execute a block of code based on a condition. It allows you to control the flow of your program by making decisions.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic If-Else Statement</h2>
    <p>The simplest form of an <code>if-else</code> statement checks a condition and executes a block of code if the condition is true. If the condition is false, the <code>else</code> block is executed.</p>
    <pre><code class="language-javascript" codeHighlight>let age = 18;

if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
// Output: "You are eligible to vote."</code></pre>
    
    <h2 style="color: #2980b9;">2. Else-If Ladder</h2>
    <p>When you have multiple conditions to check, you can use the <code>else-if</code> ladder. This allows you to chain multiple conditions together.</p>
    <pre><code class="language-javascript" codeHighlight>let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
// Output: "Grade: B"</code></pre>
    
    <h2 style="color: #2980b9;">3. Nested If-Else Statements</h2>
    <p>You can nest <code>if-else</code> statements inside other <code>if-else</code> statements to handle more complex conditions.</p>
    <pre><code class="language-javascript" codeHighlight>let num = 10;

if (num > 0) {
    if (num % 2 === 0) {
        console.log("The number is positive and even.");
    } else {
        console.log("The number is positive and odd.");
    }
} else {
    console.log("The number is not positive.");
}
// Output: "The number is positive and even."</code></pre>
    
    <h2 style="color: #2980b9;">4. Ternary Operator as a Shortcut</h2>
    <p>The ternary operator (<code>? :</code>) is a shorthand for the <code>if-else</code> statement. It is useful for simple conditions.</p>
    <pre><code class="language-javascript" codeHighlight>let isRaining = true;
let action = isRaining ? "Take an umbrella" : "Enjoy the weather";
console.log(action); // Output: "Take an umbrella"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>if-else</code> statement is a fundamental control structure in JavaScript that allows you to make decisions in your code. It can be extended with <code>else-if</code> ladders, nested conditions, and even replaced with the ternary operator for simpler cases.</p>
</div>`
},
{
    articleTitle: "Switch Statements",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Switch Statements in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>switch</code> statement in JavaScript is used to perform different actions based on different conditions. It is a cleaner and more efficient alternative to using multiple <code>if-else</code> statements when dealing with multiple possible values of a single variable.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Switch Statement</h2>
    <p>The <code>switch</code> statement evaluates an expression and executes the code block that matches the case with the evaluated value. If no case matches, the <code>default</code> block is executed.</p>
    <pre><code class="language-javascript" codeHighlight>let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the workweek.");
        break;
    case "Friday":
        console.log("Last day of the workweek.");
        break;
    default:
        console.log("It's a regular workday.");
}
// Output: "Start of the workweek."</code></pre>
    
    <h2 style="color: #2980b9;">2. Multiple Cases with the Same Code Block</h2>
    <p>You can group multiple cases together if they should execute the same code block.</p>
    <pre><code class="language-javascript" codeHighlight>let fruit = "Apple";

switch (fruit) {
    case "Apple":
    case "Banana":
    case "Mango":
        console.log("This is a fruit.");
        break;
    case "Carrot":
    case "Potato":
        console.log("This is a vegetable.");
        break;
    default:
        console.log("Unknown food item.");
}
// Output: "This is a fruit."</code></pre>
    
    <h2 style="color: #2980b9;">3. The Importance of the <code>break</code> Statement</h2>
    <p>Without the <code>break</code> statement, the code will "fall through" and execute all subsequent cases until it encounters a <code>break</code> or reaches the end of the <code>switch</code> block.</p>
    <pre><code class="language-javascript" codeHighlight>let number = 2;

switch (number) {
    case 1:
        console.log("One");
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
    default:
        console.log("Number not found.");
}
// Output: 
// "Two"
// "Three"
// "Number not found."</code></pre>
    
    <h2 style="color: #2980b9;">4. Using Switch with Expressions</h2>
    <p>The <code>switch</code> statement can also evaluate expressions in its cases.</p>
    <pre><code class="language-javascript" codeHighlight>let score = 85;

switch (true) {
    case (score >= 90):
        console.log("Grade: A");
        break;
    case (score >= 80):
        console.log("Grade: B");
        break;
    case (score >= 70):
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: D");
}
// Output: "Grade: B"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>switch</code> statement is a powerful tool for handling multiple conditions in a clean and readable way. It is especially useful when comparing a single variable against multiple possible values. Remember to use <code>break</code> to avoid unintended fall-through behavior.</p>
</div>`
},
{
    articleTitle: "While Loops",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">While Loops in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>while</code> loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition is true. It is ideal for situations where the number of iterations is not known in advance.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic While Loop</h2>
    <p>The <code>while</code> loop checks the condition before executing the block of code. If the condition is true, the code block is executed. This process repeats until the condition becomes false.</p>
    <pre><code class="language-javascript" codeHighlight>let count = 1;

while (count <= 5) {
    console.log("Count: " + count);
    count++;
}
// Output:
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5</code></pre>
    
    <h2 style="color: #2980b9;">2. Infinite Loops</h2>
    <p>If the condition in a <code>while</code> loop never becomes false, the loop will run indefinitely, causing an infinite loop. This can crash your program or browser.</p>
    <pre><code class="language-javascript" codeHighlight>// WARNING: This is an example of an infinite loop.
// Do not run this code as it will crash your browser.

// let num = 1;
// while (num > 0) {
//     console.log("This will run forever.");
// }</code></pre>
    
    <h2 style="color: #2980b9;">3. Using Break to Exit a Loop</h2>
    <p>The <code>break</code> statement can be used to exit a <code>while</code> loop prematurely, even if the condition is still true.</p>
    <pre><code class="language-javascript" codeHighlight>let i = 0;

while (i < 10) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    console.log("i: " + i);
    i++;
}
// Output:
// i: 0
// i: 1
// i: 2
// i: 3
// i: 4</code></pre>
    
    <h2 style="color: #2980b9;">4. Do-While Loop</h2>
    <p>The <code>do-while</code> loop is a variant of the <code>while</code> loop. It executes the code block once before checking the condition, ensuring that the block runs at least once.</p>
    <pre><code class="language-javascript" codeHighlight>let x = 10;

do {
    console.log("x: " + x);
    x++;
} while (x < 5);
// Output: "x: 10" (even though the condition is false initially)</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>while</code> loop is a fundamental control structure in JavaScript for executing code repeatedly based on a condition. It is useful when the number of iterations is unknown. Be cautious of infinite loops, and use <code>break</code> when necessary to exit the loop early. The <code>do-while</code> loop ensures that the code block runs at least once, even if the condition is false initially.</p>
</div>`
},
{
    articleTitle: "For Loops",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">For Loops in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>for</code> loop in JavaScript is used to repeatedly execute a block of code a specific number of times. It is ideal for situations where you know the number of iterations in advance.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic For Loop</h2>
    <p>The <code>for</code> loop consists of three parts: initialization, condition, and iteration. The loop continues to execute as long as the condition is true.</p>
    <pre><code class="language-javascript" codeHighlight>for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}
// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4</code></pre>
    
    <h2 style="color: #2980b9;">2. Looping Through Arrays</h2>
    <p>The <code>for</code> loop is commonly used to iterate over arrays, accessing each element by its index.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit: " + fruits[i]);
}
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Mango</code></pre>
    
    <h2 style="color: #2980b9;">3. Nested For Loops</h2>
    <p>You can nest <code>for</code> loops inside each other to handle multi-dimensional data structures, such as matrices or grids.</p>
    <pre><code class="language-javascript" codeHighlight>for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`i: \${i}, j: \${j}\`);
    }
}
// Output:
// i: 1, j: 1
// i: 1, j: 2
// i: 1, j: 3
// i: 2, j: 1
// i: 2, j: 2
// i: 2, j: 3
// i: 3, j: 1
// i: 3, j: 2
// i: 3, j: 3</code></pre>
    
    <h2 style="color: #2980b9;">4. Using Break and Continue</h2>
    <p>The <code>break</code> statement exits the loop prematurely, while the <code>continue</code> statement skips the current iteration and moves to the next one.</p>
    <pre><code class="language-javascript" codeHighlight>for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i equals 5
    }
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log("Odd Number: " + i);
}
// Output:
// Odd Number: 1
// Odd Number: 3</code></pre>
    
    <h2 style="color: #2980b9;">5. For-Of Loop (Modern JavaScript)</h2>
    <p>The <code>for-of</code> loop is a modern alternative for iterating over iterable objects like arrays, strings, and maps. It simplifies the syntax by directly accessing the values.</p>
    <pre><code class="language-javascript" codeHighlight>let colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log("Color: " + color);
}
// Output:
// Color: Red
// Color: Green
// Color: Blue</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>for</code> loop is a versatile and powerful tool in JavaScript for executing code repeatedly. It is especially useful when the number of iterations is known in advance. With features like nested loops, <code>break</code>, and <code>continue</code>, you can handle complex logic efficiently. For modern use cases, the <code>for-of</code> loop provides a cleaner and more readable way to iterate over iterable objects.</p>
</div>`
},
{
    articleTitle: "For-In Loop",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">For-In Loops in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>for-in</code> loop in JavaScript is used to iterate over the <strong>enumerable properties</strong> of an object. It is particularly useful for looping through the keys of an object or the indices of an array.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic For-In Loop</h2>
    <p>The <code>for-in</code> loop iterates over the keys of an object. For each iteration, the loop assigns the current key to the specified variable.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}
// Output:
// name: John
// age: 30
// city: New York</code></pre>
    
    <h2 style="color: #2980b9;">2. For-In Loop with Arrays</h2>
    <p>When used with arrays, the <code>for-in</code> loop iterates over the <strong>indices</strong> of the array, not the values. This can be useful for accessing array indices, but it is generally better to use <code>for-of</code> or <code>forEach</code> for arrays.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Mango"];

for (let index in fruits) {
    console.log(\`Index: \${index}, Value: \${fruits[index]}\`);
}
// Output:
// Index: 0, Value: Apple
// Index: 1, Value: Banana
// Index: 2, Value: Mango</code></pre>
    
    <h2 style="color: #2980b9;">3. Iterating Over Inherited Properties</h2>
    <p>The <code>for-in</code> loop also iterates over properties inherited from the object's prototype chain. To avoid this, you can use <code>hasOwnProperty</code> to check if the property belongs directly to the object.</p>
    <pre><code class="language-javascript" codeHighlight>let car = { make: "Toyota", model: "Camry" };
car.__proto__.year = 2020; // Adding a property to the prototype

for (let key in car) {
    if (car.hasOwnProperty(key)) {
        console.log(\`\${key}: \${car[key]}\`);
    }
}
// Output:
// make: Toyota
// model: Camry</code></pre>
    
    <h2 style="color: #2980b9;">4. For-In Loop with Strings</h2>
    <p>The <code>for-in</code> loop can also be used to iterate over the indices of a string.</p>
    <pre><code class="language-javascript" codeHighlight>let message = "Hello";

for (let index in message) {
    console.log(\`Index: \${index}, Character: \${message[index]}\`);
}
// Output:
// Index: 0, Character: H
// Index: 1, Character: e
// Index: 2, Character: l
// Index: 3, Character: l
// Index: 4, Character: o</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of For-In Loops</h2>
    <p>The <code>for-in</code> loop is not recommended for iterating over arrays because it iterates over all enumerable properties, including non-index properties and inherited properties. For arrays, use <code>for-of</code>, <code>forEach</code>, or a traditional <code>for</code> loop.</p>
    <pre><code class="language-javascript" codeHighlight>let arr = [1, 2, 3];
arr.customProperty = "Test"; // Adding a non-index property

for (let index in arr) {
    console.log(index); // Outputs: 0, 1, 2, customProperty
}</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>for-in</code> loop is a powerful tool for iterating over the enumerable properties of an object. It is particularly useful for objects but should be used with caution for arrays due to its behavior with non-index and inherited properties. For arrays, consider using <code>for-of</code>, <code>forEach</code>, or a traditional <code>for</code> loop for better clarity and performance.</p>
</div>`
},
{
    articleTitle: "For-Of Loop",
    content: `<div style="font-family: Arial, sans-serif;  margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">For-Of Loops in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>for-of</code> loop in JavaScript is used to iterate over <strong>iterable objects</strong> such as arrays, strings, maps, sets, and more. It provides a clean and concise way to access the values of an iterable directly, without needing to deal with indices or keys.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic For-Of Loop</h2>
    <p>The <code>for-of</code> loop iterates over the values of an iterable object. It is simpler and more readable compared to traditional <code>for</code> or <code>for-in</code> loops.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log("Fruit: " + fruit);
}
// Output:
// Fruit: Apple
// Fruit: Banana
// Fruit: Mango</code></pre>
    
    <h2 style="color: #2980b9;">2. For-Of Loop with Strings</h2>
    <p>The <code>for-of</code> loop can also iterate over the characters of a string, making it easy to process each character individually.</p>
    <pre><code class="language-javascript" codeHighlight>let message = "Hello";

for (let char of message) {
    console.log("Character: " + char);
}
// Output:
// Character: H
// Character: e
// Character: l
// Character: l
// Character: o</code></pre>
    
    <h2 style="color: #2980b9;">3. For-Of Loop with Maps</h2>
    <p>The <code>for-of</code> loop is particularly useful for iterating over <code>Map</code> objects, as it directly provides access to the key-value pairs.</p>
    <pre><code class="language-javascript" codeHighlight>let map = new Map();
map.set("name", "John");
map.set("age", 30);

for (let [key, value] of map) {
    console.log(\`\${key}: \${value}\`);
}
// Output:
// name: John
// age: 30</code></pre>
    
    <h2 style="color: #2980b9;">4. For-Of Loop with Sets</h2>
    <p>When used with <code>Set</code> objects, the <code>for-of</code> loop iterates over the unique values in the set.</p>
    <pre><code class="language-javascript" codeHighlight>let set = new Set([1, 2, 3, 3, 4]); // Duplicates are ignored

for (let value of set) {
    console.log("Value: " + value);
}
// Output:
// Value: 1
// Value: 2
// Value: 3
// Value: 4</code></pre>
    
    <h2 style="color: #2980b9;">5. For-Of Loop with NodeLists</h2>
    <p>The <code>for-of</code> loop can also iterate over <code>NodeList</code> objects returned by DOM methods like <code>querySelectorAll</code>, making it easier to work with DOM elements.</p>
    <pre><code class="language-javascript" codeHighlight>let elements = document.querySelectorAll("div");

for (let element of elements) {
    console.log(element); // Logs each div element
}</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of For-Of Loops</h2>
    <p>The <code>for-of</code> loop only works with iterable objects. It cannot be used to iterate over plain objects. For objects, use <code>for-in</code> or <code>Object.keys()</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let obj = { a: 1, b: 2, c: 3 };

// This will throw an error because objects are not iterable by default.
// for (let value of obj) {
//     console.log(value);
// }</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>for-of</code> loop is a modern and powerful feature in JavaScript for iterating over iterable objects like arrays, strings, maps, sets, and NodeLists. It provides a clean and readable syntax for accessing values directly, making it a preferred choice for many use cases. However, it is not suitable for plain objects, where <code>for-in</code> or other methods should be used instead.</p>
</div>`
},
{
    articleTitle: `Function Declaration`,
    content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Declarations in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Functions are one of the fundamental building blocks in JavaScript. They allow you to encapsulate reusable code and execute it whenever needed. JavaScript provides several ways to declare functions, each with its own use cases and behavior.
  </p>

  <h3 style="color: #16a085;">Types of Function Declarations</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Function Declaration</li>
    <li>Function Expression</li>
    <li>Arrow Function</li>
    <li>Immediately Invoked Function Expression (IIFE)</li>
    <li>Generator Function</li>
  </ul>

  <h3 style="color: #e67e22;">Function Declaration</h3>
  <p style="font-size: 16px; color: #34495e;">
    A function declaration defines a named function using the <code>function</code> keyword. It is hoisted, meaning it can be called before it is defined in the code.
  </p>
  <pre>
    <code class="language-javascript">
      function greet(name) {
        return \`Hello, \${name}!\`;
      }

      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Function Expression</h3>
  <p style="font-size: 16px; color: #34495e;">
    A function expression assigns a function to a variable. It is not hoisted, so it cannot be called before it is defined.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = function(name) {
        return \`Hello, \${name}!\`;
      };

      console.log(greet("Bob")); // Output: Hello, Bob!
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Arrow Function</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions provide a concise syntax for writing functions. They do not have their own <code>this</code> context and are often used for short, single-expression functions.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = (name) => \`Hello, \${name}!\`;

      console.log(greet("Charlie")); // Output: Hello, Charlie!
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Immediately Invoked Function Expression (IIFE)</h3>
  <p style="font-size: 16px; color: #34495e;">
    An IIFE is a function that is executed immediately after it is defined. It is often used to create a private scope and avoid polluting the global namespace.
  </p>
  <pre>
    <code class="language-javascript">
      (function() {
        const message = "Hello, World!";
        console.log(message); // Output: Hello, World!
      })();
    </code>
  </pre>

  <h3 style="color: #27ae60;">Generator Function</h3>
  <p style="font-size: 16px; color: #34495e;">
    A generator function allows you to define an iterative algorithm by using the <code>function*</code> syntax. It can be paused and resumed using the <code>yield</code> keyword.
  </p>
  <pre>
    <code class="language-javascript">
      function* idGenerator() {
        let id = 1;
        while (true) {
          yield id++;
        }
      }

      const gen = idGenerator();
      console.log(gen.next().value); // Output: 1
      console.log(gen.next().value); // Output: 2
      console.log(gen.next().value); // Output: 3
    </code>
  </pre>

  <h3 style="color: #e67e22;">Function Parameters and Arguments</h3>
  <p style="font-size: 16px; color: #34495e;">
    Functions can accept parameters, which are variables listed in the function definition. Arguments are the actual values passed to the function when it is called.
  </p>
  <pre>
    <code class="language-javascript">
      function add(a, b) {
        return a + b;
      }

      console.log(add(2, 3)); // Output: 5
    </code>
  </pre>

  <h3 style="color: #2980b9;">Default Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters allow you to initialize function parameters with default values if no argument is passed or if <code>undefined</code> is passed.
  </p>
  <pre>
    <code class="language-javascript">
      function greet(name = "Guest") {
        return \`Hello, \${name}!\`;
      }

      console.log(greet()); // Output: Hello, Guest!
      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>

  <h3 style="color: #c0392b;">Rest Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    Rest parameters allow you to represent an indefinite number of arguments as an array. They are denoted by three dots (<code>...</code>) before the parameter name.
  </p>
  <pre>
    <code class="language-javascript">
      function sum(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
      }

      console.log(sum(1, 2, 3, 4)); // Output: 10
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Higher-Order Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    A higher-order function is a function that takes one or more functions as arguments or returns a function as its result.
  </p>
  <pre>
    <code class="language-javascript">
      function multiplyBy(factor) {
        return function(number) {
          return number * factor;
        };
      }

      const double = multiplyBy(2);
      console.log(double(5)); // Output: 10
    </code>
  </pre>
</div>`
},
{
    articleTitle: `Function Expression`,
    content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Expressions in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A <strong>function expression</strong> in JavaScript is a way to define a function by assigning it to a variable. Unlike function declarations, function expressions are not hoisted, meaning they cannot be called before they are defined in the code. Function expressions are often used for anonymous functions or when passing functions as arguments to other functions.
  </p>

  <h3 style="color: #16a085;">Key Features of Function Expressions</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Assigned to a variable.</li>
    <li>Not hoisted (cannot be called before definition).</li>
    <li>Can be anonymous (no name) or named.</li>
    <li>Often used in callbacks and higher-order functions.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Function Expression</h3>
  <p style="font-size: 16px; color: #34495e;">
    A basic function expression assigns an anonymous function to a variable. The function can then be called using the variable name.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = function(name) {
        return \`Hello, \${name}!\`;
      };

      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Named Function Expression</h3>
  <p style="font-size: 16px; color: #34495e;">
    A named function expression includes a name for the function, which can be useful for debugging or recursion. However, the name is only accessible within the function itself.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = function sayHello(name) {
        return \`Hello, \${name}!\`;
      };

      console.log(greet("Bob")); // Output: Hello, Bob!
      // console.log(sayHello("Bob")); // Error: sayHello is not defined
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Function Expression as a Callback</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function expressions are often used as callbacks, which are functions passed as arguments to other functions.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [1, 2, 3, 4, 5];
      const doubled = numbers.map(function(num) {
        return num * 2;
      });

      console.log(doubled); // Output: [2, 4, 6, 8, 10]
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Immediately Invoked Function Expression (IIFE)</h3>
  <p style="font-size: 16px; color: #34495e;">
    An IIFE is a function expression that is executed immediately after it is defined. It is often used to create a private scope and avoid polluting the global namespace.
  </p>
  <pre>
    <code class="language-javascript">
      const message = (function() {
        const secret = "This is a secret message!";
        return secret;
      })();

      console.log(message); // Output: This is a secret message!
    </code>
  </pre>

  <h3 style="color: #27ae60;">Arrow Function as a Function Expression</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions provide a concise syntax for writing function expressions. They are often used for short, single-expression functions.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = (name) => \`Hello, \${name}!\`;

      console.log(greet("Charlie")); // Output: Hello, Charlie!
    </code>
  </pre>

  <h3 style="color: #e67e22;">Function Expression with Default Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function expressions can also use default parameters, which allow you to initialize parameters with default values if no argument is passed.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = function(name = "Guest") {
        return \`Hello, \${name}!\`;
      };

      console.log(greet()); // Output: Hello, Guest!
      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>

  <h3 style="color: #2980b9;">Function Expression with Rest Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    Rest parameters allow you to represent an indefinite number of arguments as an array. They are denoted by three dots (<code>...</code>) before the parameter name.
  </p>
  <pre>
    <code class="language-javascript">
      const sum = function(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
      };

      console.log(sum(1, 2, 3, 4)); // Output: 10
    </code>
  </pre>

  <h3 style="color: #c0392b;">Function Expression in Higher-Order Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function expressions are often used in higher-order functions, which are functions that take other functions as arguments or return functions.
  </p>
  <pre>
    <code class="language-javascript">
      const multiplyBy = function(factor) {
        return function(number) {
          return number * factor;
        };
      };

      const double = multiplyBy(2);
      console.log(double(5)); // Output: 10
    </code>
  </pre>
</div>`
},
{
    articleTitle: `Arrow Functions`,
    content: `
    <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Arrow Functions in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions, introduced in ES6 (ECMAScript 2015), provide a concise syntax for writing functions in JavaScript. They are particularly useful for short, single-expression functions and have some unique characteristics, such as not having their own <code>this</code> context.
  </p>

  <h3 style="color: #16a085;">Key Features of Arrow Functions</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Concise syntax for writing functions.</li>
    <li>No binding of <code>this</code> (lexical <code>this</code>).</li>
    <li>Cannot be used as constructors (no <code>new</code> keyword).</li>
    <li>No <code>arguments</code> object (use rest parameters instead).</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Arrow Function</h3>
  <p style="font-size: 16px; color: #34495e;">
    A basic arrow function has a concise syntax, especially for single-expression functions. If the function body consists of a single expression, the <code>return</code> keyword is implicit.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = (name) => \`Hello, \${name}!\`;

      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Arrow Function with Multiple Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    If an arrow function has multiple parameters, they must be enclosed in parentheses.
  </p>
  <pre>
    <code class="language-javascript">
      const add = (a, b) => a + b;

      console.log(add(2, 3)); // Output: 5
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Arrow Function with No Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    If an arrow function has no parameters, you must use empty parentheses.
  </p>
  <pre>
    <code class="language-javascript">
      const sayHello = () => "Hello, World!";

      console.log(sayHello()); // Output: Hello, World!
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Arrow Function with Multiple Statements</h3>
  <p style="font-size: 16px; color: #34495e;">
    If an arrow function has multiple statements, you must use curly braces <code>{}</code> and explicitly use the <code>return</code> keyword (if returning a value).
  </p>
  <pre>
    <code class="language-javascript">
      const greet = (name) => {
        const message = \`Hello, \${name}!\`;
        return message;
      };

      console.log(greet("Bob")); // Output: Hello, Bob!
    </code>
  </pre>

  <h3 style="color: #27ae60;">Lexical <code>this</code> in Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions do not have their own <code>this</code> context. Instead, they inherit <code>this</code> from the surrounding lexical scope. This makes them ideal for use in callbacks and event handlers.
  </p>
  <pre>
    <code class="language-javascript">
      const person = {
        name: "Alice",
        greet: function() {
          setTimeout(() => {
            console.log(\`Hello, \${this.name}!\`);
          }, 1000);
        }
      };

      person.greet(); // Output (after 1 second): Hello, Alice!
    </code>
  </pre>

  <h3 style="color: #e67e22;">Arrow Functions in Array Methods</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions are often used in array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code> due to their concise syntax.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [1, 2, 3, 4, 5];
      const doubled = numbers.map(num => num * 2);

      console.log(doubled); // Output: [2, 4, 6, 8, 10]
    </code>
  </pre>

  <h3 style="color: #2980b9;">Arrow Functions and Object Literals</h3>
  <p style="font-size: 16px; color: #34495e;">
    When returning an object literal from an arrow function, you must wrap the object in parentheses to avoid confusion with the function body.
  </p>
  <pre>
    <code class="language-javascript">
      const createUser = (name, age) => ({ name, age });

      const user = createUser("Charlie", 30);
      console.log(user); // Output: { name: 'Charlie', age: 30 }
    </code>
  </pre>

  <h3 style="color: #c0392b;">Arrow Functions as Callbacks</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions are commonly used as callbacks in asynchronous code, such as promises or event listeners.
  </p>
  <pre>
    <code class="language-javascript">
      const fetchData = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve("Data fetched!"), 1000);
        });
      };

      fetchData().then(data => console.log(data)); // Output (after 1 second): Data fetched!
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Arrow Functions and Rest Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions can use rest parameters to accept an indefinite number of arguments as an array.
  </p>
  <pre>
    <code class="language-javascript">
      const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

      console.log(sum(1, 2, 3, 4)); // Output: 10
    </code>
  </pre>
</div>
    `
},
{
    articleTitle: `Default Parameters`,
    content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Default Parameters in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters in JavaScript allow you to initialize function parameters with default values if no argument is passed or if <code>undefined</code> is passed. This feature, introduced in ES6 (ECMAScript 2015), makes functions more flexible and reduces the need for additional checks within the function body.
  </p>

  <h3 style="color: #16a085;">Key Features of Default Parameters</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Initialize parameters with default values.</li>
    <li>Default values are used when the argument is <code>undefined</code>.</li>
    <li>Can be used with any function (declarations, expressions, arrow functions).</li>
    <li>Default values can be expressions or function calls.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Default Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can assign default values directly in the function parameter list.
  </p>
  <pre>
    <code class="language-javascript">
      function greet(name = "Guest") {
        return \`Hello, \${name}!\`;
      }

      console.log(greet()); // Output: Hello, Guest!
      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Default Parameters with Multiple Arguments</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use default parameters for multiple arguments in a function.
  </p>
  <pre>
    <code class="language-javascript">
      function createUser(name = "Anonymous", age = 18) {
        return { name, age };
      }

      console.log(createUser()); // Output: { name: 'Anonymous', age: 18 }
      console.log(createUser("Bob", 25)); // Output: { name: 'Bob', age: 25 }
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Default Parameters with Expressions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters can be expressions or function calls, which are evaluated at runtime.
  </p>
  <pre>
    <code class="language-javascript">
      function calculateTotal(price, tax = price * 0.1, discount = 0) {
        return price + tax - discount;
      }

      console.log(calculateTotal(100)); // Output: 110
      console.log(calculateTotal(100, 15, 10)); // Output: 105
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Default Parameters with Function Calls</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use the result of a function call as a default parameter.
  </p>
  <pre>
    <code class="language-javascript">
      function getDefaultAge() {
        return 18;
      }

      function createUser(name = "Anonymous", age = getDefaultAge()) {
        return { name, age };
      }

      console.log(createUser()); // Output: { name: 'Anonymous', age: 18 }
      console.log(createUser("Charlie", 30)); // Output: { name: 'Charlie', age: 30 }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Default Parameters and <code>undefined</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters are only used when the argument is <code>undefined</code>. Other falsy values like <code>null</code>, <code>0</code>, or an empty string do not trigger the default value.
  </p>
  <pre>
    <code class="language-javascript">
      function greet(name = "Guest") {
        return \`Hello, \${name}!\`;
      }

      console.log(greet(undefined)); // Output: Hello, Guest!
      console.log(greet(null)); // Output: Hello, null!
      console.log(greet("")); // Output: Hello, !
      console.log(greet(0)); // Output: Hello, 0!
    </code>
  </pre>

  <h3 style="color: #e67e22;">Default Parameters in Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters can also be used in arrow functions.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = (name = "Guest") => \`Hello, \${name}!\`;

      console.log(greet()); // Output: Hello, Guest!
      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>

  <h3 style="color: #2980b9;">Default Parameters with Destructuring</h3>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters can be combined with object or array destructuring to provide default values for nested properties.
  </p>
  <pre>
    <code class="language-javascript">
      function createUser({ name = "Anonymous", age = 18 } = {}) {
        return { name, age };
      }

      console.log(createUser()); // Output: { name: 'Anonymous', age: 18 }
      console.log(createUser({ name: "Bob", age: 25 })); // Output: { name: 'Bob', age: 25 }
    </code>
  </pre>

  <h3 style="color: #c0392b;">Default Parameters in Function Expressions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters can also be used in function expressions.
  </p>
  <pre>
    <code class="language-javascript">
      const greet = function(name = "Guest") {
        return \`Hello, \${name}!\`;
      };

      console.log(greet()); // Output: Hello, Guest!
      console.log(greet("Alice")); // Output: Hello, Alice!
    </code>
  </pre>
</div>`
},
{
    articleTitle: `Function Overloading`,
    content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Overloading in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Function overloading is a feature in some programming languages that allows multiple functions to have the same name but different parameters. JavaScript does not natively support function overloading, but you can simulate it by checking the number, type, or value of arguments passed to a function.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Simulating Function Overloading</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Check the number of arguments using <code>arguments.length</code>.</li>
    <li>Check the type of arguments using <code>typeof</code> or <code>instanceof</code>.</li>
    <li>Use default parameters or rest parameters for flexibility.</li>
    <li>Combine multiple checks to handle different cases.</li>
  </ul>

  <h3 style="color: #e67e22;">Simulating Function Overloading Based on Argument Count</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can simulate function overloading by checking the number of arguments passed to the function.
  </p>
  <pre>
    <code class="language-javascript">
      function greet() {
        if (arguments.length === 0) {
          return "Hello, Guest!";
        } else if (arguments.length === 1) {
          return \`Hello, \${arguments[0]}!\`;
        } else if (arguments.length === 2) {
          return \`Hello, \${arguments[0]} and \${arguments[1]}!\`;
        }
      }

      console.log(greet()); // Output: Hello, Guest!
      console.log(greet("Alice")); // Output: Hello, Alice!
      console.log(greet("Alice", "Bob")); // Output: Hello, Alice and Bob!
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Simulating Function Overloading Based on Argument Types</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can simulate function overloading by checking the type of arguments passed to the function.
  </p>
  <pre>
    <code class="language-javascript">
      function processInput(input) {
        if (typeof input === "string") {
          return \`You entered a string: \${input}\`;
        } else if (typeof input === "number") {
          return \`You entered a number: \${input}\`;
        } else if (Array.isArray(input)) {
          return \`You entered an array: \${input.join(", ")}\`;
        }
      }

      console.log(processInput("Hello")); // Output: You entered a string: Hello
      console.log(processInput(42)); // Output: You entered a number: 42
      console.log(processInput([1, 2, 3])); // Output: You entered an array: 1, 2, 3
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Simulating Function Overloading with Default Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use default parameters to simulate function overloading by providing different behaviors based on whether arguments are passed or not.
  </p>
  <pre>
    <code class="language-javascript">
      function createUser(name = "Anonymous", age = 18) {
        if (name === "Anonymous" && age === 18) {
          return "Creating a default user.";
        } else {
          return \`Creating user: \${name}, \${age} years old.\`;
        }
      }

      console.log(createUser()); // Output: Creating a default user.
      console.log(createUser("Alice", 25)); // Output: Creating user: Alice, 25 years old.
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Simulating Function Overloading with Rest Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use rest parameters to handle a variable number of arguments and simulate function overloading.
  </p>
  <pre>
    <code class="language-javascript">
      function sum(...numbers) {
        if (numbers.length === 0) {
          return "No numbers provided.";
        } else {
          return numbers.reduce((acc, num) => acc + num, 0);
        }
      }

      console.log(sum()); // Output: No numbers provided.
      console.log(sum(1, 2, 3)); // Output: 6
    </code>
  </pre>

  <h3 style="color: #27ae60;">Simulating Function Overloading with Object Arguments</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use an object as a single argument to simulate function overloading by checking the properties of the object.
  </p>
  <pre>
    <code class="language-javascript">
      function createUser({ name = "Anonymous", age = 18 } = {}) {
        return \`Creating user: \${name}, \${age} years old.\`;
      }

      console.log(createUser()); // Output: Creating user: Anonymous, 18 years old.
      console.log(createUser({ name: "Alice", age: 25 })); // Output: Creating user: Alice, 25 years old.
    </code>
  </pre>

  <h3 style="color: #e67e22;">Simulating Function Overloading with Multiple Checks</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can combine multiple checks (e.g., argument count, type, and value) to simulate more complex function overloading.
  </p>
  <pre>
    <code class="language-javascript">
      function process(input1, input2) {
        if (typeof input1 === "string" && typeof input2 === "string") {
          return \`Concatenating strings: \${input1} \${input2}\`;
        } else if (typeof input1 === "number" && typeof input2 === "number") {
          return \`Adding numbers: \${input1 + input2}\`;
        } else {
          return "Invalid input types.";
        }
      }

      console.log(process("Hello", "World")); // Output: Concatenating strings: Hello World
      console.log(process(5, 10)); // Output: Adding numbers: 15
      console.log(process("Hello", 10)); // Output: Invalid input types.
    </code>
  </pre>
</div>`
},
{
    articleTitle: `Function Binding`,
    content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Binding in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Function binding in JavaScript refers to explicitly setting the <code>this</code> context for a function. This is particularly useful when working with object methods, event handlers, or callbacks where the value of <code>this</code> might change unexpectedly. JavaScript provides several ways to bind functions, including <code>bind()</code>, <code>call()</code>, and <code>apply()</code>.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Function Binding</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>bind()</code>: Creates a new function with a fixed <code>this</code> value.</li>
    <li><code>call()</code>: Calls a function with a specific <code>this</code> value and arguments passed individually.</li>
    <li><code>apply()</code>: Calls a function with a specific <code>this</code> value and arguments passed as an array.</li>
    <li>Arrow functions: Inherit <code>this</code> from the surrounding lexical scope.</li>
  </ul>

  <h3 style="color: #e67e22;">Using <code>bind()</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    The <code>bind()</code> method creates a new function with a fixed <code>this</code> value. It does not immediately invoke the function but returns a new function with the bound context.
  </p>
  <pre>
    <code class="language-javascript">
      const person = {
        name: "Alice",
        greet: function() {
          console.log(\`Hello, \${this.name}!\`);
        }
      };

      const greet = person.greet.bind(person);
      greet(); // Output: Hello, Alice!
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Using <code>call()</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    The <code>call()</code> method calls a function with a specific <code>this</code> value and arguments passed individually.
  </p>
  <pre>
    <code class="language-javascript">
      const person = {
        name: "Alice"
      };

      function greet(greeting) {
        console.log(\`\${greeting}, \${this.name}!\`);
      }

      greet.call(person, "Hello"); // Output: Hello, Alice!
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Using <code>apply()</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    The <code>apply()</code> method is similar to <code>call()</code>, but it accepts arguments as an array.
  </p>
  <pre>
    <code class="language-javascript">
      const person = {
        name: "Alice"
      };

      function greet(greeting, punctuation) {
        console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
      }

      greet.apply(person, ["Hello", "!"]); // Output: Hello, Alice!
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Arrow Functions and Lexical <code>this</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions do not have their own <code>this</code> context. Instead, they inherit <code>this</code> from the surrounding lexical scope, making them ideal for use in callbacks and event handlers.
  </p>
  <pre>
    <code class="language-javascript">
      const person = {
        name: "Alice",
        greet: function() {
          setTimeout(() => {
            console.log(\`Hello, \${this.name}!\`);
          }, 1000);
        }
      };

      person.greet(); // Output (after 1 second): Hello, Alice!
    </code>
  </pre>

  <h3 style="color: #27ae60;">Binding in Event Handlers</h3>
  <p style="font-size: 16px; color: #34495e;">
    Event handlers often lose their <code>this</code> context. You can use <code>bind()</code> to ensure the correct context.
  </p>
  <pre>
    <code class="language-javascript">
      const button = document.createElement("button");
      button.textContent = "Click Me";

      const handler = {
        message: "Button clicked!",
        handleClick: function() {
          console.log(this.message);
        }
      };

      button.addEventListener("click", handler.handleClick.bind(handler));
      document.body.appendChild(button);
      // When the button is clicked: Output: Button clicked!
    </code>
  </pre>

  <h3 style="color: #e67e22;">Partial Function Application with <code>bind()</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use <code>bind()</code> to create a new function with some arguments pre-filled (partial application).
  </p>
  <pre>
    <code class="language-javascript">
      function multiply(a, b) {
        return a * b;
      }

      const double = multiply.bind(null, 2);
      console.log(double(5)); // Output: 10
    </code>
  </pre>

  <h3 style="color: #2980b9;">Binding in Class Methods</h3>
  <p style="font-size: 16px; color: #34495e;">
    In class methods, you may need to bind <code>this</code> to ensure it refers to the class instance.
  </p>
  <pre>
    <code class="language-javascript">
      class Person {
        constructor(name) {
          this.name = name;
          this.greet = this.greet.bind(this); // Bind \`this\` to the instance
        }

        greet() {
          console.log(\`Hello, \${this.name}!\`);
        }
      }

      const person = new Person("Alice");
      const greet = person.greet;
      greet(); // Output: Hello, Alice!
    </code>
  </pre>

  <h3 style="color: #c0392b;">Binding with Arrow Functions in Classes</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use arrow functions in class methods to automatically bind <code>this</code> to the class instance.
  </p>
  <pre>
    <code class="language-javascript">
      class Person {
        constructor(name) {
          this.name = name;
        }

        greet = () => {
          console.log(\`Hello, \${this.name}!\`);
        }
      }

      const person = new Person("Alice");
      const greet = person.greet;
      greet(); // Output: Hello, Alice!
    </code>
  </pre>
</div>`
},
{
    articleTitle: `Function Closures`,
    content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Closures in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope. In JavaScript, closures are created every time a function is created, at function creation time. Closures are powerful because they allow functions to "remember" the environment in which they were created.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Closures</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Lexical Scope: The scope defined at the time of function creation.</li>
    <li>Access to Outer Variables: Closures can access variables from their outer function even after the outer function has returned.</li>
    <li>Data Encapsulation: Closures can be used to create private variables and methods.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Closure Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of a closure is a function that returns another function, which retains access to the outer function's variables.
  </p>
  <pre>
    <code class="language-javascript">
      function outerFunction() {
        const outerVariable = "I'm from outer scope!";

        function innerFunction() {
          console.log(outerVariable);
        }

        return innerFunction;
      }

      const closure = outerFunction();
      closure(); // Output: I'm from outer scope!
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Closures in Callbacks</h3>
  <p style="font-size: 16px; color: #34495e;">
    Closures are often used in callbacks to retain access to variables from the outer scope.
  </p>
  <pre>
    <code class="language-javascript">
      function delayedGreeting(name) {
        setTimeout(function() {
          console.log(\`Hello, \${name}!\`);
        }, 1000);
      }

      delayedGreeting("Alice"); // Output (after 1 second): Hello, Alice!
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Data Encapsulation with Closures</h3>
  <p style="font-size: 16px; color: #34495e;">
    Closures can be used to create private variables and methods, encapsulating data within a function.
  </p>
  <pre>
    <code class="language-javascript">
      function createCounter() {
        let count = 0;

        return {
          increment: function() {
            count++;
            console.log(count);
          },
          decrement: function() {
            count--;
            console.log(count);
          }
        };
      }

      const counter = createCounter();
      counter.increment(); // Output: 1
      counter.increment(); // Output: 2
      counter.decrement(); // Output: 1
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Closures in Loops</h3>
  <p style="font-size: 16px; color: #34495e;">
    Closures are often used to capture the state of a variable in a loop. Without closures, the variable might not behave as expected.
  </p>
  <pre>
    <code class="language-javascript">
      for (var i = 1; i <= 3; i++) {
        setTimeout(function() {
          console.log(i); // Output: 4, 4, 4 (due to var's function scope)
        }, 1000);
      }

      // Fix using closures
      for (var i = 1; i <= 3; i++) {
        (function(i) {
          setTimeout(function() {
            console.log(i); // Output: 1, 2, 3
          }, 1000);
        })(i);
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Closures with Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions can also create closures, capturing the surrounding lexical scope.
  </p>
  <pre>
    <code class="language-javascript">
      function outerFunction() {
        const outerVariable = "I'm from outer scope!";

        const innerFunction = () => {
          console.log(outerVariable);
        };

        return innerFunction;
      }

      const closure = outerFunction();
      closure(); // Output: I'm from outer scope!
    </code>
  </pre>

  <h3 style="color: #e67e22;">Closures in Event Handlers</h3>
  <p style="font-size: 16px; color: #34495e;">
    Closures are commonly used in event handlers to retain access to variables from the outer scope.
  </p>
  <pre>
    <code class="language-javascript">
      const buttons = document.querySelectorAll("button");

      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
          console.log(\`Button \${i + 1} clicked!\`);
        });
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Closures in Module Pattern</h3>
  <p style="font-size: 16px; color: #34495e;">
    The module pattern uses closures to create private and public members, encapsulating functionality.
  </p>
  <pre>
    <code class="language-javascript">
      const Module = (function() {
        let privateVariable = "I'm private!";

        function privateMethod() {
          console.log(privateVariable);
        }

        return {
          publicMethod: function() {
            privateMethod();
          }
        };
      })();

      Module.publicMethod(); // Output: I'm private!
    </code>
  </pre>

  <h3 style="color: #c0392b;">Closures in Memoization</h3>
  <p style="font-size: 16px; color: #34495e;">
    Closures can be used to implement memoization, a technique for caching the results of expensive function calls.
  </p>
  <pre>
    <code class="language-javascript">
      function memoize(fn) {
        const cache = {};

        return function(...args) {
          const key = JSON.stringify(args);
          if (cache[key]) {
            return cache[key];
          }
          const result = fn(...args);
          cache[key] = result;
          return result;
        };
      }

      const factorial = memoize(function(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
      });

      console.log(factorial(5)); // Output: 120 (calculated)
      console.log(factorial(5)); // Output: 120 (cached)
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Currying`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Currying in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Currying is a functional programming technique where a function that takes multiple arguments is transformed into a sequence of functions, each taking a single argument. Currying allows for partial application of functions, making them more flexible and reusable.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Currying</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Transforms a multi-argument function into a series of single-argument functions.</li>
    <li>Enables partial application of functions.</li>
    <li>Improves code reusability and composability.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Currying Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of currying is transforming a function that takes two arguments into a sequence of functions, each taking one argument.
  </p>
  <pre>
    <code class="language-javascript">
      function add(a) {
        return function(b) {
          return a + b;
        };
      }

      const add5 = add(5);
      console.log(add5(10)); // Output: 15
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Currying with Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions provide a concise syntax for currying.
  </p>
  <pre>
    <code class="language-javascript">
      const add = (a) => (b) => a + b;

      const add5 = add(5);
      console.log(add5(10)); // Output: 15
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Currying for Reusability</h3>
  <p style="font-size: 16px; color: #34495e;">
    Currying allows you to create reusable functions by partially applying arguments.
  </p>
  <pre>
    <code class="language-javascript">
      function multiply(a) {
        return function(b) {
          return a * b;
        };
      }

      const double = multiply(2);
      const triple = multiply(3);

      console.log(double(5)); // Output: 10
      console.log(triple(5)); // Output: 15
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Currying with Multiple Arguments</h3>
  <p style="font-size: 16px; color: #34495e;">
    Currying can be extended to functions with more than two arguments.
  </p>
  <pre>
    <code class="language-javascript">
      function add(a) {
        return function(b) {
          return function(c) {
            return a + b + c;
          };
        };
      }

      console.log(add(1)(2)(3)); // Output: 6
    </code>
  </pre>

  <h3 style="color: #27ae60;">Currying with a Helper Function</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can create a helper function to automatically curry any function.
  </p>
  <pre>
    <code class="language-javascript">
      function curry(fn) {
        return function curried(...args) {
          if (args.length >= fn.length) {
            return fn(...args);
          } else {
            return function(...moreArgs) {
              return curried(...args, ...moreArgs);
            };
          }
        };
      }

      function sum(a, b, c) {
        return a + b + c;
      }

      const curriedSum = curry(sum);
      console.log(curriedSum(1)(2)(3)); // Output: 6
      console.log(curriedSum(1, 2)(3)); // Output: 6
      console.log(curriedSum(1)(2, 3)); // Output: 6
    </code>
  </pre>

  <h3 style="color: #e67e22;">Currying in Real-World Scenarios</h3>
  <p style="font-size: 16px; color: #34495e;">
    Currying is useful in real-world scenarios like event handling, where you can partially apply arguments to create reusable handlers.
  </p>
  <pre>
    <code class="language-javascript">
      const button = document.createElement("button");
      button.textContent = "Click Me";

      function handleClick(message) {
        return function(event) {
          console.log(message);
        };
      }

      button.addEventListener("click", handleClick("Button clicked!"));
      document.body.appendChild(button);
      // When the button is clicked: Output: Button clicked!
    </code>
  </pre>

  <h3 style="color: #2980b9;">Currying with Libraries</h3>
  <p style="font-size: 16px; color: #34495e;">
    Libraries like Lodash provide built-in support for currying.
  </p>
  <pre>
    <code class="language-javascript">
      const _ = require("lodash");

      function sum(a, b, c) {
        return a + b + c;
      }

      const curriedSum = _.curry(sum);
      console.log(curriedSum(1)(2)(3)); // Output: 6
      console.log(curriedSum(1, 2)(3)); // Output: 6
      console.log(curriedSum(1)(2, 3)); // Output: 6
    </code>
  </pre>

  <h3 style="color: #c0392b;">Currying for Function Composition</h3>
  <p style="font-size: 16px; color: #34495e;">
    Currying is often used in function composition, where multiple functions are combined to create a new function.
  </p>
  <pre>
    <code class="language-javascript">
      const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const add5ThenMultiply2 = compose(multiply2, add5);
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Partial Application`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Partial Application in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Partial application is a functional programming technique where a function is pre-filled with some of its arguments, creating a new function that takes the remaining arguments. Unlike currying, which transforms a function into a sequence of single-argument functions, partial application allows you to fix a subset of arguments and create a new function with the remaining ones.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Partial Application</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Pre-fills some arguments of a function.</li>
    <li>Creates a new function with the remaining arguments.</li>
    <li>Improves code reusability and flexibility.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Partial Application Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of partial application is pre-filling the first argument of a function.
  </p>
  <pre>
    <code class="language-javascript">
      function add(a, b) {
        return a + b;
      }

      function partialApply(fn, fixedArg) {
        return function(remainingArg) {
          return fn(fixedArg, remainingArg);
        };
      }

      const add5 = partialApply(add, 5);
      console.log(add5(10)); // Output: 15
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Partial Application with <code>bind()</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    The <code>bind()</code> method can be used for partial application by fixing the <code>this</code> value and some arguments.
  </p>
  <pre>
    <code class="language-javascript">
      function add(a, b) {
        return a + b;
      }

      const add5 = add.bind(null, 5);
      console.log(add5(10)); // Output: 15
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Partial Application with Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions can be used to create partially applied functions in a concise way.
  </p>
  <pre>
    <code class="language-javascript">
      const add = (a, b) => a + b;
      const add5 = (b) => add(5, b);

      console.log(add5(10)); // Output: 15
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Partial Application with Multiple Arguments</h3>
  <p style="font-size: 16px; color: #34495e;">
    Partial application can be extended to functions with more than two arguments.
  </p>
  <pre>
    <code class="language-javascript">
      function multiply(a, b, c) {
        return a * b * c;
      }

      function partialApply(fn, ...fixedArgs) {
        return function(...remainingArgs) {
          return fn(...fixedArgs, ...remainingArgs);
        };
      }

      const multiplyBy2And3 = partialApply(multiply, 2, 3);
      console.log(multiplyBy2And3(4)); // Output: 24
    </code>
  </pre>

  <h3 style="color: #27ae60;">Partial Application in Real-World Scenarios</h3>
  <p style="font-size: 16px; color: #34495e;">
    Partial application is useful in real-world scenarios like event handling, where you can pre-fill some arguments to create reusable handlers.
  </p>
  <pre>
    <code class="language-javascript">
      const button = document.createElement("button");
      button.textContent = "Click Me";

      function handleClick(message, event) {
        console.log(message);
      }

      const handleClickWithMessage = handleClick.bind(null, "Button clicked!");
      button.addEventListener("click", handleClickWithMessage);
      document.body.appendChild(button);
      // When the button is clicked: Output: Button clicked!
    </code>
  </pre>

  <h3 style="color: #e67e22;">Partial Application with Libraries</h3>
  <p style="font-size: 16px; color: #34495e;">
    Libraries like Lodash provide built-in support for partial application.
  </p>
  <pre>
    <code class="language-javascript">
      const _ = require("lodash");

      function sum(a, b, c) {
        return a + b + c;
      }

      const add5And10 = _.partial(sum, 5, 10);
      console.log(add5And10(15)); // Output: 30
    </code>
  </pre>

  <h3 style="color: #2980b9;">Partial Application for Function Composition</h3>
  <p style="font-size: 16px; color: #34495e;">
    Partial application is often used in function composition, where multiple functions are combined to create a new function.
  </p>
  <pre>
    <code class="language-javascript">
      const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const add5ThenMultiply2 = compose(multiply2, add5);
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>

  <h3 style="color: #c0392b;">Partial Application with Default Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    Default parameters can be used in conjunction with partial application to create flexible functions.
  </p>
  <pre>
    <code class="language-javascript">
      function greet(greeting = "Hello", name = "Guest") {
        return \`\${greeting}, \${name}!\`;
      }

      const greetHello = greet.bind(null, "Hello");
      console.log(greetHello("Alice")); // Output: Hello, Alice!
      console.log(greetHello()); // Output: Hello, Guest!
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Memoization`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Memoization in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Memoization is an optimization technique used to speed up programs by caching the results of expensive function calls and reusing them when the same inputs occur again. It is particularly useful for recursive functions or functions with heavy computations.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Memoization</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Caching: Storing the results of function calls.</li>
    <li>Reuse: Returning cached results for repeated inputs.</li>
    <li>Efficiency: Reducing redundant computations.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Memoization Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of memoization is caching the results of a factorial function.
  </p>
  <pre>
    <code class="language-javascript">
      function memoize(fn) {
        const cache = {};
        return function(...args) {
          const key = JSON.stringify(args);
          if (cache[key]) {
            return cache[key];
          }
          const result = fn(...args);
          cache[key] = result;
          return result;
        };
      }

      function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
      }

      const memoizedFactorial = memoize(factorial);
      console.log(memoizedFactorial(5)); // Output: 120 (calculated)
      console.log(memoizedFactorial(5)); // Output: 120 (cached)
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Memoization with Recursive Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Memoization is particularly useful for optimizing recursive functions, such as the Fibonacci sequence.
  </p>
  <pre>
    <code class="language-javascript">
      function memoize(fn) {
        const cache = {};
        return function(...args) {
          const key = JSON.stringify(args);
          if (cache[key]) {
            return cache[key];
          }
          const result = fn(...args);
          cache[key] = result;
          return result;
        };
      }

      function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
      }

      const memoizedFibonacci = memoize(fibonacci);
      console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
      console.log(memoizedFibonacci(10)); // Output: 55 (cached)
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Memoization with Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions can also be memoized using the same technique.
  </p>
  <pre>
    <code class="language-javascript">
      const memoize = (fn) => {
        const cache = {};
        return (...args) => {
          const key = JSON.stringify(args);
          if (cache[key]) {
            return cache[key];
          }
          const result = fn(...args);
          cache[key] = result;
          return result;
        };
      };

      const add = (a, b) => a + b;
      const memoizedAdd = memoize(add);
      console.log(memoizedAdd(2, 3)); // Output: 5 (calculated)
      console.log(memoizedAdd(2, 3)); // Output: 5 (cached)
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Memoization with Object Arguments</h3>
  <p style="font-size: 16px; color: #34495e;">
    Memoization can handle functions that take objects as arguments by using a unique key for each input.
  </p>
  <pre>
    <code class="language-javascript">
      function memoize(fn) {
        const cache = new Map();
        return function(...args) {
          const key = JSON.stringify(args);
          if (cache.has(key)) {
            return cache.get(key);
          }
          const result = fn(...args);
          cache.set(key, result);
          return result;
        };
      }

      function complexCalculation(obj) {
        return Object.values(obj).reduce((acc, val) => acc + val, 0);
      }

      const memoizedComplexCalculation = memoize(complexCalculation);
      console.log(memoizedComplexCalculation({ a: 1, b: 2 })); // Output: 3 (calculated)
      console.log(memoizedComplexCalculation({ a: 1, b: 2 })); // Output: 3 (cached)
    </code>
  </pre>

  <h3 style="color: #27ae60;">Memoization with Expensive Computations</h3>
  <p style="font-size: 16px; color: #34495e;">
    Memoization is particularly useful for functions with expensive computations, such as prime number checking.
  </p>
  <pre>
    <code class="language-javascript">
      function memoize(fn) {
        const cache = {};
        return function(...args) {
          const key = JSON.stringify(args);
          if (cache[key]) {
            return cache[key];
          }
          const result = fn(...args);
          cache[key] = result;
          return result;
        };
      }

      function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i * i <= n; i++) {
          if (n % i === 0) return false;
        }
        return true;
      }

      const memoizedIsPrime = memoize(isPrime);
      console.log(memoizedIsPrime(29)); // Output: true (calculated)
      console.log(memoizedIsPrime(29)); // Output: true (cached)
    </code>
  </pre>

  <h3 style="color: #e67e22;">Memoization with Libraries</h3>
  <p style="font-size: 16px; color: #34495e;">
    Libraries like Lodash provide built-in support for memoization.
  </p>
  <pre>
    <code class="language-javascript">
      const _ = require("lodash");

      function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
      }

      const memoizedFactorial = _.memoize(factorial);
      console.log(memoizedFactorial(5)); // Output: 120 (calculated)
      console.log(memoizedFactorial(5)); // Output: 120 (cached)
    </code>
  </pre>

  <h3 style="color: #2980b9;">Memoization with Custom Cache Keys</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can customize the cache key generation for more control over memoization.
  </p>
  <pre>
    <code class="language-javascript">
      function memoize(fn, keyGenerator = JSON.stringify) {
        const cache = new Map();
        return function(...args) {
          const key = keyGenerator(args);
          if (cache.has(key)) {
            return cache.get(key);
          }
          const result = fn(...args);
          cache.set(key, result);
          return result;
        };
      }

      function add(a, b) {
        return a + b;
      }

      const memoizedAdd = memoize(add, (args) => args.join("-"));
      console.log(memoizedAdd(2, 3)); // Output: 5 (calculated)
      console.log(memoizedAdd(2, 3)); // Output: 5 (cached)
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Composition`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Composition in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Function composition is a technique in functional programming where multiple functions are combined to create a new function. The output of one function is passed as the input to the next, allowing for the creation of complex operations by chaining simpler functions together.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Function Composition</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Combining Functions: Linking multiple functions together.</li>
    <li>Data Flow: The output of one function becomes the input of the next.</li>
    <li>Reusability: Encourages the creation of small, reusable functions.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Function Composition</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of function composition is combining two functions, where the output of the first function is passed as the input to the second.
  </p>
  <pre>
    <code class="language-javascript">
      function add5(x) {
        return x + 5;
      }

      function multiply2(x) {
        return x * 2;
      }

      function compose(f, g) {
        return function(x) {
          return f(g(x));
        };
      }

      const add5ThenMultiply2 = compose(multiply2, add5);
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Function Composition with Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions provide a concise syntax for function composition.
  </p>
  <pre>
    <code class="language-javascript">
      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const compose = (f, g) => (x) => f(g(x));

      const add5ThenMultiply2 = compose(multiply2, add5);
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Composing Multiple Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can compose more than two functions by chaining them together.
  </p>
  <pre>
    <code class="language-javascript">
      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;
      const subtract3 = (x) => x - 3;

      const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

      const complexOperation = compose(subtract3, multiply2, add5);
      console.log(complexOperation(10)); // Output: 27
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Function Composition with Libraries</h3>
  <p style="font-size: 16px; color: #34495e;">
    Libraries like Lodash and Ramda provide built-in support for function composition.
  </p>
  <pre>
    <code class="language-javascript">
      const _ = require("lodash");

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const complexOperation = _.flow([add5, multiply2]);
      console.log(complexOperation(10)); // Output: 30
    </code>
  </pre>

  <h3 style="color: #27ae60;">Function Composition in Real-World Scenarios</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function composition is useful in real-world scenarios like data transformation pipelines, where multiple operations are applied sequentially.
  </p>
  <pre>
    <code class="language-javascript">
      const data = [1, 2, 3, 4, 5];

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;
      const filterEven = (x) => x % 2 === 0;

      const transformData = (data) =>
        data.map(add5).map(multiply2).filter(filterEven);

      console.log(transformData(data)); // Output: [12, 16, 20]
    </code>
  </pre>

  <h3 style="color: #e67e22;">Function Composition with Promises</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function composition can also be used with asynchronous functions and promises.
  </p>
  <pre>
    <code class="language-javascript">
      const fetchData = () => Promise.resolve([1, 2, 3, 4, 5]);

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const transformData = (data) => data.map(add5).map(multiply2);

      fetchData()
        .then(transformData)
        .then(console.log); // Output: [12, 14, 16, 18, 20]
    </code>
  </pre>

  <h3 style="color: #2980b9;">Function Composition with Currying</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function composition can be combined with currying to create highly reusable and flexible functions.
  </p>
  <pre>
    <code class="language-javascript">
      const add = (a) => (b) => a + b;
      const multiply = (a) => (b) => a * b;

      const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);

      const add5ThenMultiply2 = compose(multiply(2), add(5));
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>

  <h3 style="color: #c0392b;">Function Composition with Error Handling</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can add error handling to function composition to ensure robustness.
  </p>
  <pre>
    <code class="language-javascript">
      const add5 = (x) => x + 5;
      const multiply2 = (x) => {
        if (typeof x !== "number") throw new Error("Invalid input");
        return x * 2;
      };

      const compose = (...fns) => (x) => {
        try {
          return fns.reduceRight((acc, fn) => fn(acc), x);
        } catch (error) {
          console.error(error.message);
          return null;
        }
      };

      const add5ThenMultiply2 = compose(multiply2, add5);
      console.log(add5ThenMultiply2("10")); // Output: Invalid input, null
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Throttling`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Throttling in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Throttling is a technique used to control the rate at which a function is executed. It ensures that a function is called at most once in a specified time interval, even if it is triggered multiple times. This is particularly useful for optimizing performance in scenarios like event handlers (e.g., scrolling, resizing, or typing).
  </p>

  <h3 style="color: #16a085;">Key Concepts of Throttling</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Rate Limiting: Ensures a function is not called more than once in a specified time interval.</li>
    <li>Performance Optimization: Reduces the frequency of function calls, improving performance.</li>
    <li>Use Cases: Scrolling, resizing, typing, and other high-frequency events.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Throttling Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of throttling is limiting the execution of a function to once every 1000 milliseconds (1 second).
  </p>
  <pre>
    <code class="language-javascript">
      function throttle(fn, delay) {
        let lastCall = 0;
        return function(...args) {
          const now = new Date().getTime();
          if (now - lastCall < delay) return;
          lastCall = now;
          return fn(...args);
        };
      }

      const throttledFunction = throttle(() => {
        console.log("Function executed!");
      }, 1000);

      // Simulate frequent calls
      setInterval(throttledFunction, 100); // Output: "Function executed!" every 1 second
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Throttling with Leading Edge</h3>
  <p style="font-size: 16px; color: #34495e;">
    Throttling can be configured to execute the function immediately on the first call (leading edge) and then throttle subsequent calls.
  </p>
  <pre>
    <code class="language-javascript">
      function throttle(fn, delay) {
        let lastCall = 0;
        let timeoutId;
        return function(...args) {
          const now = new Date().getTime();
          if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
          } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
              lastCall = now;
              fn(...args);
            }, delay - (now - lastCall));
          }
        };
      }

      const throttledFunction = throttle(() => {
        console.log("Function executed!");
      }, 1000);

      // Simulate frequent calls
      setInterval(throttledFunction, 100); // Output: "Function executed!" immediately, then every 1 second
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Throttling with Trailing Edge</h3>
  <p style="font-size: 16px; color: #34495e;">
    Throttling can also be configured to execute the function at the end of the delay period (trailing edge).
  </p>
  <pre>
    <code class="language-javascript">
      function throttle(fn, delay) {
        let timeoutId;
        return function(...args) {
          if (!timeoutId) {
            timeoutId = setTimeout(() => {
              fn(...args);
              timeoutId = null;
            }, delay);
          }
        };
      }

      const throttledFunction = throttle(() => {
        console.log("Function executed!");
      }, 1000);

      // Simulate frequent calls
      setInterval(throttledFunction, 100); // Output: "Function executed!" every 1 second
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Throttling in Event Handlers</h3>
  <p style="font-size: 16px; color: #34495e;">
    Throttling is commonly used in event handlers to optimize performance.
  </p>
  <pre>
    <code class="language-javascript">
      function throttle(fn, delay) {
        let lastCall = 0;
        return function(...args) {
          const now = new Date().getTime();
          if (now - lastCall < delay) return;
          lastCall = now;
          return fn(...args);
        };
      }

      const handleScroll = throttle(() => {
        console.log("Scroll event handled!");
      }, 1000);

      window.addEventListener("scroll", handleScroll);
    </code>
  </pre>

  <h3 style="color: #27ae60;">Throttling with Libraries</h3>
  <p style="font-size: 16px; color: #34495e;">
    Libraries like Lodash provide built-in support for throttling.
  </p>
  <pre>
    <code class="language-javascript">
      const _ = require("lodash");

      const throttledFunction = _.throttle(() => {
        console.log("Function executed!");
      }, 1000);

      // Simulate frequent calls
      setInterval(throttledFunction, 100); // Output: "Function executed!" every 1 second
    </code>
  </pre>

  <h3 style="color: #e67e22;">Throttling with Request Animation Frame</h3>
  <p style="font-size: 16px; color: #34495e;">
    Throttling can be combined with <code>requestAnimationFrame</code> for smooth animations.
  </p>
  <pre>
    <code class="language-javascript">
      function throttle(fn) {
        let isThrottled = false;
        return function(...args) {
          if (!isThrottled) {
            isThrottled = true;
            requestAnimationFrame(() => {
              fn(...args);
              isThrottled = false;
            });
          }
        };
      }

      const animate = throttle(() => {
        console.log("Animation frame executed!");
      });

      // Simulate frequent calls
      setInterval(animate, 10); // Output: "Animation frame executed!" at 60 FPS
    </code>
  </pre>

  <h3 style="color: #2980b9;">Throttling with Debouncing</h3>
  <p style="font-size: 16px; color: #34495e;">
    Throttling and debouncing are often used together to optimize performance in different scenarios.
  </p>
  <pre>
    <code class="language-javascript">
      function throttle(fn, delay) {
        let lastCall = 0;
        return function(...args) {
          const now = new Date().getTime();
          if (now - lastCall < delay) return;
          lastCall = now;
          return fn(...args);
        };
      }

      function debounce(fn, delay) {
        let timeoutId;
        return function(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn(...args), delay);
        };
      }

      const handleResize = throttle(debounce(() => {
        console.log("Resize event handled!");
      }, 100), 1000);

      window.addEventListener("resize", handleResize);
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Debouncing`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Debouncing in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Debouncing is a technique used to ensure that a function is only executed after a specified period of inactivity. It is particularly useful for optimizing performance in scenarios where a function is triggered frequently, such as in event handlers for typing, resizing, or scrolling. Debouncing delays the execution of the function until a certain amount of time has passed since the last call.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Debouncing</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Delay Execution: Ensures a function is executed only after a specified period of inactivity.</li>
    <li>Performance Optimization: Reduces the number of function calls, improving performance.</li>
    <li>Use Cases: Typing, resizing, scrolling, and other high-frequency events.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Debouncing Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of debouncing is delaying the execution of a function until 500 milliseconds have passed since the last call.
  </p>
  <pre>
    <code class="language-javascript">
      function debounce(fn, delay) {
        let timeoutId;
        return function(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn(...args), delay);
        };
      }

      const debouncedFunction = debounce(() => {
        console.log("Function executed!");
      }, 500);

      // Simulate frequent calls
      debouncedFunction();
      debouncedFunction();
      debouncedFunction(); // Output: "Function executed!" after 500ms of inactivity
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Debouncing with Immediate Execution</h3>
  <p style="font-size: 16px; color: #34495e;">
    Debouncing can be configured to execute the function immediately on the first call and then debounce subsequent calls.
  </p>
  <pre>
    <code class="language-javascript">
      function debounce(fn, delay, immediate = false) {
        let timeoutId;
        return function(...args) {
          const callNow = immediate && !timeoutId;
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            if (!immediate) fn(...args);
            timeoutId = null;
          }, delay);
          if (callNow) fn(...args);
        };
      }

      const debouncedFunction = debounce(() => {
        console.log("Function executed!");
      }, 500, true);

      // Simulate frequent calls
      debouncedFunction(); // Output: "Function executed!" immediately
      debouncedFunction();
      debouncedFunction(); // Output: "Function executed!" after 500ms of inactivity
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Debouncing in Event Handlers</h3>
  <p style="font-size: 16px; color: #34495e;">
    Debouncing is commonly used in event handlers to optimize performance.
  </p>
  <pre>
    <code class="language-javascript">
      function debounce(fn, delay) {
        let timeoutId;
        return function(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn(...args), delay);
        };
      }

      const handleResize = debounce(() => {
        console.log("Resize event handled!");
      }, 500);

      window.addEventListener("resize", handleResize);
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Debouncing with Libraries</h3>
  <p style="font-size: 16px; color: #34495e;">
    Libraries like Lodash provide built-in support for debouncing.
  </p>
  <pre>
    <code class="language-javascript">
      const _ = require("lodash");

      const debouncedFunction = _.debounce(() => {
        console.log("Function executed!");
      }, 500);

      // Simulate frequent calls
      debouncedFunction();
      debouncedFunction();
      debouncedFunction(); // Output: "Function executed!" after 500ms of inactivity
    </code>
  </pre>

  <h3 style="color: #27ae60;">Debouncing with Request Animation Frame</h3>
  <p style="font-size: 16px; color: #34495e;">
    Debouncing can be combined with <code>requestAnimationFrame</code> for smooth animations.
  </p>
  <pre>
    <code class="language-javascript">
      function debounce(fn) {
        let isDebounced = false;
        return function(...args) {
          if (!isDebounced) {
            isDebounced = true;
            requestAnimationFrame(() => {
              fn(...args);
              isDebounced = false;
            });
          }
        };
      }

      const animate = debounce(() => {
        console.log("Animation frame executed!");
      });

      // Simulate frequent calls
      setInterval(animate, 10); // Output: "Animation frame executed!" at 60 FPS
    </code>
  </pre>

  <h3 style="color: #e67e22;">Debouncing with Throttling</h3>
  <p style="font-size: 16px; color: #34495e;">
    Debouncing and throttling are often used together to optimize performance in different scenarios.
  </p>
  <pre>
    <code class="language-javascript">
      function debounce(fn, delay) {
        let timeoutId;
        return function(...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn(...args), delay);
        };
      }

      function throttle(fn, delay) {
        let lastCall = 0;
        return function(...args) {
          const now = new Date().getTime();
          if (now - lastCall < delay) return;
          lastCall = now;
          return fn(...args);
        };
      }

      const handleResize = debounce(throttle(() => {
        console.log("Resize event handled!");
      }, 100), 500);

      window.addEventListener("resize", handleResize);
    </code>
  </pre>

  <h3 style="color: #2980b9;">Debouncing with Custom Delay</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can customize the delay dynamically based on the input or other conditions.
  </p>
  <pre>
    <code class="language-javascript">
      function debounce(fn, getDelay) {
        let timeoutId;
        return function(...args) {
          const delay = getDelay(...args);
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn(...args), delay);
        };
      }

      const debouncedFunction = debounce(() => {
        console.log("Function executed!");
      }, (input) => input.length * 100);

      // Simulate frequent calls
      debouncedFunction("a"); // Output: "Function executed!" after 100ms
      debouncedFunction("ab"); // Output: "Function executed!" after 200ms
      debouncedFunction("abc"); // Output: "Function executed!" after 300ms
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Pipeline`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Pipeline in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    A function pipeline is a technique in functional programming where multiple functions are chained together, and the output of one function is passed as the input to the next. This allows for the creation of complex operations by combining simpler functions in a readable and maintainable way.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Function Pipeline</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Chaining Functions: Linking multiple functions together.</li>
    <li>Data Flow: The output of one function becomes the input of the next.</li>
    <li>Reusability: Encourages the creation of small, reusable functions.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Function Pipeline</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of a function pipeline is chaining two functions, where the output of the first function is passed as the input to the second.
  </p>
  <pre>
    <code class="language-javascript">
      function add5(x) {
        return x + 5;
      }

      function multiply2(x) {
        return x * 2;
      }

      function pipeline(...fns) {
        return function(x) {
          return fns.reduce((acc, fn) => fn(acc), x);
        };
      }

      const add5ThenMultiply2 = pipeline(add5, multiply2);
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Function Pipeline with Arrow Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrow functions provide a concise syntax for creating function pipelines.
  </p>
  <pre>
    <code class="language-javascript">
      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const pipeline = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

      const add5ThenMultiply2 = pipeline(add5, multiply2);
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Function Pipeline with Multiple Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can chain more than two functions in a pipeline.
  </p>
  <pre>
    <code class="language-javascript">
      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;
      const subtract3 = (x) => x - 3;

      const pipeline = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

      const complexOperation = pipeline(add5, multiply2, subtract3);
      console.log(complexOperation(10)); // Output: 27
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Function Pipeline with Libraries</h3>
  <p style="font-size: 16px; color: #34495e;">
    Libraries like Lodash and Ramda provide built-in support for function pipelines.
  </p>
  <pre>
    <code class="language-javascript">
      const _ = require("lodash");

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const complexOperation = _.flow([add5, multiply2]);
      console.log(complexOperation(10)); // Output: 30
    </code>
  </pre>

  <h3 style="color: #27ae60;">Function Pipeline in Real-World Scenarios</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function pipelines are useful in real-world scenarios like data transformation pipelines, where multiple operations are applied sequentially.
  </p>
  <pre>
    <code class="language-javascript">
      const data = [1, 2, 3, 4, 5];

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;
      const filterEven = (x) => x % 2 === 0;

      const transformData = (data) =>
        data.map(add5).map(multiply2).filter(filterEven);

      console.log(transformData(data)); // Output: [12, 16, 20]
    </code>
  </pre>

  <h3 style="color: #e67e22;">Function Pipeline with Promises</h3>
  <p style="font-size: 16px; color: #34495e;">
    Function pipelines can also be used with asynchronous functions and promises.
  </p>
  <pre>
    <code class="language-javascript">
      const fetchData = () => Promise.resolve([1, 2, 3, 4, 5]);

      const add5 = (x) => x + 5;
      const multiply2 = (x) => x * 2;

      const transformData = (data) => data.map(add5).map(multiply2);

      fetchData()
        .then(transformData)
        .then(console.log); // Output: [12, 14, 16, 18, 20]
    </code>
  </pre>

  <h3 style="color: #2980b9;">Function Pipeline with Error Handling</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can add error handling to function pipelines to ensure robustness.
  </p>
  <pre>
    <code class="language-javascript">
      const add5 = (x) => x + 5;
      const multiply2 = (x) => {
        if (typeof x !== "number") throw new Error("Invalid input");
        return x * 2;
      };

      const pipeline = (...fns) => (x) => {
        try {
          return fns.reduce((acc, fn) => fn(acc), x);
        } catch (error) {
          console.error(error.message);
          return null;
        }
      };

      const add5ThenMultiply2 = pipeline(add5, multiply2);
      console.log(add5ThenMultiply2("10")); // Output: Invalid input, null
    </code>
  </pre>

  <h3 style="color: #c0392b;">Function Pipeline with Custom Functions</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can create custom functions to use in a pipeline, making the pipeline more flexible and reusable.
  </p>
  <pre>
    <code class="language-javascript">
      const add = (a) => (b) => a + b;
      const multiply = (a) => (b) => a * b;

      const pipeline = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);

      const add5ThenMultiply2 = pipeline(add(5), multiply(2));
      console.log(add5ThenMultiply2(10)); // Output: 30
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Recursion`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Recursion in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Recursion is a programming technique where a function calls itself to solve a problem. It is particularly useful for tasks that can be broken down into smaller, similar subproblems. Recursion involves two key components: a <strong>base case</strong> (to stop the recursion) and a <strong>recursive case</strong> (to break the problem into smaller parts).
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
articleTitle: `Function Generators`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Function Generators in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Generators are a special type of function in JavaScript that can be paused and resumed, allowing for the generation of a sequence of values over time. They are defined using the <code>function*</code> syntax and use the <code>yield</code> keyword to produce values. Generators are particularly useful for handling asynchronous operations, iterating over large datasets, and creating custom iterators.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Generators</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>function*</code>: The syntax used to define a generator function.</li>
    <li><code>yield</code>: The keyword used to produce a value and pause the generator.</li>
    <li><code>next()</code>: A method used to resume the generator and retrieve the next value.</li>
    <li>Iterable: Generators are iterable and can be used with <code>for...of</code> loops.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Generator Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of a generator function that yields a sequence of numbers.
  </p>
  <pre>
    <code class="language-javascript">
      function* numberGenerator() {
        yield 1;
        yield 2;
        yield 3;
      }

      const generator = numberGenerator();
      console.log(generator.next().value); // Output: 1
      console.log(generator.next().value); // Output: 2
      console.log(generator.next().value); // Output: 3
      console.log(generator.next().value); // Output: undefined
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Generator with <code>for...of</code> Loop</h3>
  <p style="font-size: 16px; color: #34495e;">
    Generators are iterable, so they can be used with <code>for...of</code> loops.
  </p>
  <pre>
    <code class="language-javascript">
      function* numberGenerator() {
        yield 1;
        yield 2;
        yield 3;
      }

      for (const number of numberGenerator()) {
        console.log(number); // Output: 1, 2, 3
      }
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Infinite Generator</h3>
  <p style="font-size: 16px; color: #34495e;">
    Generators can be used to create infinite sequences.
  </p>
  <pre>
    <code class="language-javascript">
      function* infiniteSequence() {
        let i = 0;
        while (true) {
          yield i++;
        }
      }

      const generator = infiniteSequence();
      console.log(generator.next().value); // Output: 0
      console.log(generator.next().value); // Output: 1
      console.log(generator.next().value); // Output: 2
      // This can continue indefinitely
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Generator with Parameters</h3>
  <p style="font-size: 16px; color: #34495e;">
    Generators can accept parameters, which can be used to control their behavior.
  </p>
  <pre>
    <code class="language-javascript">
      function* rangeGenerator(start, end) {
        for (let i = start; i <= end; i++) {
          yield i;
        }
      }

      for (const number of rangeGenerator(5, 10)) {
        console.log(number); // Output: 5, 6, 7, 8, 9, 10
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Generator with <code>yield*</code></h3>
  <p style="font-size: 16px; color: #34495e;">
    The <code>yield*</code> keyword can be used to delegate to another generator or iterable.
  </p>
  <pre>
    <code class="language-javascript">
      function* generator1() {
        yield 1;
        yield 2;
      }

      function* generator2() {
        yield* generator1();
        yield 3;
        yield 4;
      }

      for (const number of generator2()) {
        console.log(number); // Output: 1, 2, 3, 4
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">Generator for Asynchronous Operations</h3>
  <p style="font-size: 16px; color: #34495e;">
    Generators can be used to handle asynchronous operations in a synchronous-like manner.
  </p>
  <pre>
    <code class="language-javascript">
      function* asyncGenerator() {
        const result1 = yield new Promise((resolve) => setTimeout(() => resolve(1), 1000));
        console.log(result1); // Output: 1 (after 1 second)
        const result2 = yield new Promise((resolve) => setTimeout(() => resolve(2), 1000));
        console.log(result2); // Output: 2 (after 1 second)
      }

      function runGenerator(generator) {
        const iterator = generator();
        function handle(iteratorResult) {
          if (iteratorResult.done) return;
          const iteratorValue = iteratorResult.value;
          if (iteratorValue instanceof Promise) {
            iteratorValue.then((res) => handle(iterator.next(res)));
          }
        }
        handle(iterator.next());
      }

      runGenerator(asyncGenerator);
    </code>
  </pre>

  <h3 style="color: #2980b9;">Generator for Custom Iterators</h3>
  <p style="font-size: 16px; color: #34495e;">
    Generators can be used to create custom iterators for objects.
  </p>
  <pre>
    <code class="language-javascript">
      const myIterable = {
        *[Symbol.iterator]() {
          yield 1;
          yield 2;
          yield 3;
        }
      };

      for (const value of myIterable) {
        console.log(value); // Output: 1, 2, 3
      }
    </code>
  </pre>

  <h3 style="color: #c0392b;">Generator for Lazy Evaluation</h3>
  <p style="font-size: 16px; color: #34495e;">
    Generators can be used for lazy evaluation, where values are computed only when needed.
  </p>
  <pre>
    <code class="language-javascript">
      function* lazyEvaluation() {
        console.log("Starting lazy evaluation");
        yield 1;
        console.log("Yielding second value");
        yield 2;
        console.log("Yielding third value");
        yield 3;
      }

      const generator = lazyEvaluation();
      console.log(generator.next().value); // Output: Starting lazy evaluation, 1
      console.log(generator.next().value); // Output: Yielding second value, 2
      console.log(generator.next().value); // Output: Yielding third value, 3
    </code>
  </pre>
</div>`
},
{
articleTitle: `Function Async`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Async Functions in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Async functions are a modern JavaScript feature that simplifies working with asynchronous code. They are built on top of promises and provide a more readable and concise way to handle asynchronous operations. An async function always returns a promise, and the <code>await</code> keyword is used to pause the execution of the function until the promise is resolved.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Async Functions</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>async</code>: The keyword used to define an async function.</li>
    <li><code>await</code>: The keyword used to pause the execution of an async function until a promise is resolved.</li>
    <li>Promises: Async functions always return a promise.</li>
    <li>Error Handling: Use <code>try...catch</code> to handle errors in async functions.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Async Function Example</h3>
  <p style="font-size: 16px; color: #34495e;">
    A simple example of an async function that uses <code>await</code> to handle a promise.
  </p>
  <pre>
    <code class="language-javascript">
      async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        return data;
      }

      fetchData().then((data) => console.log(data));
      // Output: { userId: 1, id: 1, title: '...', body: '...' }
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Async Function with Error Handling</h3>
  <p style="font-size: 16px; color: #34495e;">
    Use <code>try...catch</code> to handle errors in async functions.
  </p>
  <pre>
    <code class="language-javascript">
      async function fetchData() {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      fetchData(); // Output: Error fetching data: TypeError: Failed to fetch
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Async Function with Multiple Awaits</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use multiple <code>await</code> statements in an async function to handle sequential asynchronous operations.
  </p>
  <pre>
    <code class="language-javascript">
      async function fetchMultipleData() {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data1 = await response1.json();

        const response2 = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        const data2 = await response2.json();

        return [data1, data2];
      }

      fetchMultipleData().then((data) => console.log(data));
      // Output: [{ userId: 1, id: 1, title: '...', body: '...' }, { userId: 1, id: 2, title: '...', body: '...' }]
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Async Function with Parallel Execution</h3>
  <p style="font-size: 16px; color: #34495e;">
    Use <code>Promise.all</code> to execute multiple asynchronous operations in parallel.
  </p>
  <pre>
    <code class="language-javascript">
      async function fetchParallelData() {
        const [response1, response2] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts/1"),
          fetch("https://jsonplaceholder.typicode.com/posts/2"),
        ]);

        const data1 = await response1.json();
        const data2 = await response2.json();

        return [data1, data2];
      }

      fetchParallelData().then((data) => console.log(data));
      // Output: [{ userId: 1, id: 1, title: '...', body: '...' }, { userId: 1, id: 2, title: '...', body: '...' }]
    </code>
  </pre>

  <h3 style="color: #27ae60;">Async Function in Class Methods</h3>
  <p style="font-size: 16px; color: #34495e;">
    Async functions can be used as methods in classes.
  </p>
  <pre>
    <code class="language-javascript">
      class DataFetcher {
        async fetchData(url) {
          const response = await fetch(url);
          const data = await response.json();
          return data;
        }
      }

      const fetcher = new DataFetcher();
      fetcher.fetchData("https://jsonplaceholder.typicode.com/posts/1").then((data) => console.log(data));
      // Output: { userId: 1, id: 1, title: '...', body: '...' }
    </code>
  </pre>

  <h3 style="color: #e67e22;">Async Function with Generators</h3>
  <p style="font-size: 16px; color: #34495e;">
    Async functions can be combined with generators to handle asynchronous operations in a more flexible way.
  </p>
  <pre>
    <code class="language-javascript">
      async function* asyncGenerator() {
        yield await fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json());
        yield await fetch("https://jsonplaceholder.typicode.com/posts/2").then((res) => res.json());
      }

      (async () => {
        for await (const data of asyncGenerator()) {
          console.log(data);
        }
      })();
      // Output: { userId: 1, id: 1, title: '...', body: '...' }, { userId: 1, id: 2, title: '...', body: '...' }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Async Function with Custom Promises</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can use async functions with custom promises for more control over asynchronous operations.
  </p>
  <pre>
    <code class="language-javascript">
      function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      async function delayedGreeting() {
        await delay(1000);
        console.log("Hello, World!");
      }

      delayedGreeting(); // Output: Hello, World! (after 1 second)
    </code>
  </pre>

  <h3 style="color: #c0392b;">Async Function with Error Propagation</h3>
  <p style="font-size: 16px; color: #34495e;">
    Errors in async functions can be propagated and handled using <code>try...catch</code> or by chaining <code>.catch()</code>.
  </p>
  <pre>
    <code class="language-javascript">
      async function fetchData() {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      }

      fetchData()
        .then((data) => console.log(data))
        .catch((error) => console.error(error.message)); // Output: Failed to fetch data
    </code>
  </pre>
</div>`
},
{
articleTitle: `Types of Arrays`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Types of Arrays in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Arrays in JavaScript are versatile data structures that can store multiple values in a single variable. They can hold elements of any data type, including numbers, strings, objects, and even other arrays. JavaScript arrays are dynamic, meaning their size can change at runtime, and they come with a variety of built-in methods for manipulation.
  </p>

  <h3 style="color: #16a085;">Key Types of Arrays in JavaScript</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Number Arrays</li>
    <li>String Arrays</li>
    <li>Boolean Arrays</li>
    <li>Mixed-Type Arrays</li>
    <li>Arrays of Objects</li>
    <li>Multidimensional Arrays</li>
  </ul>

  <h3 style="color: #e67e22;">Number Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Number arrays store numeric values. They are commonly used for mathematical operations and data processing.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [10, 20, 30, 40, 50];
      console.log(numbers[0]); // Output: 10
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">String Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    String arrays store text values. They are often used for handling lists of names, labels, or other text-based data.
  </p>
  <pre>
    <code class="language-javascript">
      const fruits = ["Apple", "Banana", "Cherry"];
      console.log(fruits[1]); // Output: Banana
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Boolean Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Boolean arrays store true/false values. They are useful for representing states or flags.
  </p>
  <pre>
    <code class="language-javascript">
      const statusArray = [true, false, true, false];
      console.log(statusArray[2]); // Output: true
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Mixed-Type Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Mixed-type arrays can store elements of different data types, including numbers, strings, objects, and more.
  </p>
  <pre>
    <code class="language-javascript">
      const mixedArray = ["Hello", 100, true, { name: "John" }];
      console.log(mixedArray[3].name); // Output: John
    </code>
  </pre>

  <h3 style="color: #27ae60;">Arrays of Objects</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrays of objects store multiple objects, making them ideal for handling structured data like user records or product details.
  </p>
  <pre>
    <code class="language-javascript">
      const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
      ];
      console.log(users[1].name); // Output: Bob
    </code>
  </pre>

  <h3 style="color: #e67e22;">Multidimensional Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Multidimensional arrays are arrays of arrays. They are used to represent matrices or tables.
  </p>
  <pre>
    <code class="language-javascript">
      const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      console.log(matrix[1][2]); // Output: 6
    </code>
  </pre>

  <h3 style="color: #2980b9;">Sparse Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Sparse arrays are arrays with "holes" or undefined values. They can be created by leaving gaps in the array indices.
  </p>
  <pre>
    <code class="language-javascript">
      const sparseArray = [1, , 3, , 5];
      console.log(sparseArray[1]); // Output: undefined
    </code>
  </pre>

  <h3 style="color: #c0392b;">Typed Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Typed arrays are array-like objects that provide a mechanism for accessing raw binary data. They are useful for handling binary data like images or audio.
  </p>
  <pre>
    <code class="language-javascript">
      const buffer = new ArrayBuffer(16);
      const int32Array = new Int32Array(buffer);
      int32Array[0] = 42;
      console.log(int32Array[0]); // Output: 42
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Associative Arrays (Objects)</h3>
  <p style="font-size: 16px; color: #34495e;">
    Although JavaScript does not have true associative arrays, objects can be used to achieve similar functionality by using key-value pairs.
  </p>
  <pre>
    <code class="language-javascript">
      const associativeArray = {
        name: "Alice",
        age: 25,
        city: "New York"
      };
      console.log(associativeArray["name"]); // Output: Alice
    </code>
  </pre>
</div>`
},
{
articleTitle: `Manipulating Arrays`,
content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Manipulating Arrays in JavaScript</h2>
  <p style="font-size: 16px; color: #34495e;">
    Arrays in JavaScript are dynamic and versatile, allowing for a wide range of manipulations. JavaScript provides numerous built-in methods to add, remove, modify, and transform array elements. Understanding these methods is essential for effective array manipulation.
  </p>

  <h3 style="color: #16a085;">Key Array Manipulation Methods</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Adding Elements: <code>push()</code>, <code>unshift()</code>, <code>concat()</code></li>
    <li>Removing Elements: <code>pop()</code>, <code>shift()</code>, <code>splice()</code></li>
    <li>Modifying Elements: <code>splice()</code>, direct assignment</li>
    <li>Transforming Arrays: <code>map()</code>, <code>filter()</code>, <code>reduce()</code></li>
    <li>Searching and Sorting: <code>find()</code>, <code>sort()</code>, <code>includes()</code></li>
  </ul>

  <h3 style="color: #e67e22;">Adding Elements to an Array</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can add elements to the end of an array using <code>push()</code> or to the beginning using <code>unshift()</code>. The <code>concat()</code> method can be used to merge arrays.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [1, 2, 3];
      numbers.push(4); // Add to the end
      console.log(numbers); // Output: [1, 2, 3, 4]

      numbers.unshift(0); // Add to the beginning
      console.log(numbers); // Output: [0, 1, 2, 3, 4]

      const moreNumbers = numbers.concat([5, 6]); // Merge arrays
      console.log(moreNumbers); // Output: [0, 1, 2, 3, 4, 5, 6]
    </code>
  </pre>
  
  <h3 style="color: #2980b9;">Removing Elements from an Array</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can remove elements from the end of an array using <code>pop()</code> or from the beginning using <code>shift()</code>. The <code>splice()</code> method can remove elements from any position.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [1, 2, 3, 4, 5];
      numbers.pop(); // Remove from the end
      console.log(numbers); // Output: [1, 2, 3, 4]

      numbers.shift(); // Remove from the beginning
      console.log(numbers); // Output: [2, 3, 4]

      numbers.splice(1, 1); // Remove 1 element at index 1
      console.log(numbers); // Output: [2, 4]
    </code>
  </pre>
  
  <h3 style="color: #c0392b;">Modifying Elements in an Array</h3>
  <p style="font-size: 16px; color: #34495e;">
    You can modify elements in an array using direct assignment or the <code>splice()</code> method.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [1, 2, 3, 4, 5];
      numbers[2] = 10; // Direct assignment
      console.log(numbers); // Output: [1, 2, 10, 4, 5]

      numbers.splice(3, 1, 40); // Replace 1 element at index 3 with 40
      console.log(numbers); // Output: [1, 2, 10, 40, 5]
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Transforming Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrays can be transformed using methods like <code>map()</code>, <code>filter()</code>, and <code>reduce()</code>.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [1, 2, 3, 4, 5];

      const doubled = numbers.map((num) => num * 2); // Map
      console.log(doubled); // Output: [2, 4, 6, 8, 10]

      const evens = numbers.filter((num) => num % 2 === 0); // Filter
      console.log(evens); // Output: [2, 4]

      const sum = numbers.reduce((acc, num) => acc + num, 0); // Reduce
      console.log(sum); // Output: 15
    </code>
  </pre>

  <h3 style="color: #27ae60;">Searching and Sorting Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrays can be searched and sorted using methods like <code>find()</code>, <code>sort()</code>, and <code>includes()</code>.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [5, 3, 8, 1, 2];

      const found = numbers.find((num) => num > 3); // Find
      console.log(found); // Output: 5

      numbers.sort((a, b) => a - b); // Sort
      console.log(numbers); // Output: [1, 2, 3, 5, 8]

      const includesFive = numbers.includes(5); // Includes
      console.log(includesFive); // Output: true
    </code>
  </pre>

  <h3 style="color: #e67e22;">Flattening Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Multidimensional arrays can be flattened using the <code>flat()</code> method.
  </p>
  <pre>
    <code class="language-javascript">
      const matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ];

      const flattened = matrix.flat();
      console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
    </code>
  </pre>

  <h3 style="color: #2980b9;">Copying Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrays can be copied using methods like <code>slice()</code>, the spread operator, or <code>Array.from()</code>.
  </p>
  <pre>
    <code class="language-javascript">
      const numbers = [1, 2, 3, 4, 5];

      const copy1 = numbers.slice(); // Slice
      const copy2 = [...numbers]; // Spread operator
      const copy3 = Array.from(numbers); // Array.from

      console.log(copy1); // Output: [1, 2, 3, 4, 5]
      console.log(copy2); // Output: [1, 2, 3, 4, 5]
      console.log(copy3); // Output: [1, 2, 3, 4, 5]
    </code>
  </pre>

  <h3 style="color: #c0392b;">Combining Arrays</h3>
  <p style="font-size: 16px; color: #34495e;">
    Arrays can be combined using the spread operator or the <code>concat()</code> method.
  </p>
  <pre>
    <code class="language-javascript">
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];

      const combined1 = [...arr1, ...arr2]; // Spread operator
      const combined2 = arr1.concat(arr2); // Concat

      console.log(combined1); // Output: [1, 2, 3, 4, 5, 6]
      console.log(combined2); // Output: [1, 2, 3, 4, 5, 6]
    </code>
  </pre>
</div>`
},
{
    articleTitle: `Iterating Arrays`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Iterating Arrays in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Iterating over arrays is a fundamental operation in JavaScript, allowing you to access and manipulate each element in the array. JavaScript provides multiple methods for iterating through arrays, each with its own use cases and advantages.
    </p>
    
    <h2 style="color: #2980b9;">1. Using the \`for\` Loop</h2>
    <p>The traditional \`for\` loop is one of the most common ways to iterate through an array. It provides full control over the iteration process, including access to the index of each element.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: Apple, Banana, Cherry
}</code></pre>
    
    <h2 style="color: #2980b9;">2. Using the \`forEach\` Method</h2>
    <p>The \`forEach\` method executes a provided function once for each array element. It is more concise and functional than the \`for\` loop but does not allow breaking out of the loop.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit) {
    console.log(fruit); // Output: Apple, Banana, Cherry
});</code></pre>
    
    <h2 style="color: #2980b9;">3. Using the \`for...of\` Loop</h2>
    <p>The \`for...of\` loop is a modern way to iterate over iterable objects like arrays. It provides a cleaner syntax and directly accesses the values of the array elements.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Output: Apple, Banana, Cherry
}</code></pre>
    
    <h2 style="color: #2980b9;">4. Using the \`map\` Method</h2>
    <p>The \`map\` method creates a new array by applying a function to each element of the original array. It is useful for transforming data without modifying the original array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares); // Output: [1, 4, 9]</code></pre>
    
    <h2 style="color: #2980b9;">5. Using the \`filter\` Method</h2>
    <p>The \`filter\` method creates a new array with all elements that pass a test implemented by the provided function. It is useful for selecting specific elements from an array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evens); // Output: [2, 4]</code></pre>
    
    <h2 style="color: #2980b9;">6. Using the \`reduce\` Method</h2>
    <p>The \`reduce\` method executes a reducer function on each element of the array, resulting in a single output value. It is useful for accumulating values, such as summing all elements in an array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 10</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>JavaScript offers a variety of methods for iterating over arrays, each suited to different scenarios. Whether you need simple iteration, transformation, filtering, or accumulation, there is a method that fits your needs.</p>
</div>`
},
{
    articleTitle: `forEach`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`forEach\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`forEach\` method in JavaScript is used to execute a provided function once for each element in an array. It is a simple and concise way to iterate over arrays without the need for manual indexing or loop constructs. Unlike other array methods like \`map\` or \`filter\`, \`forEach\` does not return a new array but is primarily used for its side effects.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`forEach\`</h2>
    <p>The \`forEach\` method takes a callback function as an argument, which is executed for each element in the array. The callback function can accept up to three arguments: the current element, its index, and the array itself.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(fruit, index, array) {  
    console.log(\`Element: \${fruit}, Index: \${index}, Array: \${array}\`);
});
// Output:
// Element: Apple, Index: 0, Array: Apple,Banana,Cherry
// Element: Banana, Index: 1, Array: Apple,Banana,Cherry
// Element: Cherry, Index: 2, Array: Apple,Banana,Cherry</code></pre>
    
    <h2 style="color: #2980b9;">2. Using \`forEach\` for Side Effects</h2>
    <p>\`forEach\` is commonly used to perform side effects, such as logging, updating the DOM, or modifying external variables. It does not return a value, making it ideal for operations where the result is not needed.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let sum = 0;
numbers.forEach(function(number) {
    sum += number;
});
console.log(sum); // Output: 6</code></pre>
    
    <h2 style="color: #2980b9;">3. Modifying Array Elements</h2>
    <p>While \`forEach\` does not return a new array, it can be used to modify the elements of the original array directly. This is useful when you need to update array elements in place.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
numbers.forEach(function(number, index, array) {
    array[index] = number * 2;
});
console.log(numbers); // Output: [2, 4, 6]</code></pre>
    
    <h2 style="color: #2980b9;">4. Iterating Over Objects in an Array</h2>
    <p>\`forEach\` is particularly useful when working with arrays of objects. It allows you to access and manipulate object properties easily.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
users.forEach(function(user) {
    console.log(\`\${user.name} is \${user.age} years old.\`);
});
// Output:
// Alice is 25 years old.
// Bob is 30 years old.
// Charlie is 35 years old.</code></pre>
    
    <h2 style="color: #2980b9;">5. Combining \`forEach\` with Other Methods</h2>
    <p>\`forEach\` can be combined with other array methods like \`filter\` or \`map\` to perform more complex operations. For example, you can filter an array and then use \`forEach\` to log the results.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers
    .filter(function(number) {
        return number % 2 === 0;
    })
    .forEach(function(number) {
        console.log(number); // Output: 2, 4
    });</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`forEach\`</h2>
    <p>While \`forEach\` is powerful, it has some limitations. It cannot be used to break out of the loop early (unlike \`for\` or \`for...of\`), and it does not return a value, making it unsuitable for functional programming patterns that rely on immutability.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    if (number === 3) {
        // Cannot break or return early
    }
    console.log(number); // Output: 1, 2, 3, 4, 5
});</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`forEach\` method is a versatile and easy-to-use tool for iterating over arrays in JavaScript. It is particularly useful for performing side effects, modifying array elements, and working with arrays of objects. However, it is important to understand its limitations, such as the inability to break out of the loop early or return a value.</p>
</div>`
},
{
    articleTitle: `map`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`map\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`map\` method in JavaScript is used to create a new array by applying a function to each element of the original array. Unlike \`forEach\`, which is used for side effects, \`map\` is designed for transforming data and returning a new array. It is a powerful tool for functional programming and data manipulation.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`map\`</h2>
    <p>The \`map\` method takes a callback function as an argument, which is executed for each element in the array. The callback function can accept up to three arguments: the current element, its index, and the array itself. The \`map\` method returns a new array containing the results of applying the callback function to each element.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let squares = numbers.map(function(number) {
    return number * number;
});
console.log(squares); // Output: [1, 4, 9]</code></pre>
    
    <h2 style="color: #2980b9;">2. Transforming Data</h2>
    <p>\`map\` is commonly used to transform data from one form to another. For example, you can convert an array of numbers into an array of strings or extract specific properties from an array of objects.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let strings = numbers.map(function(number) {
    return number.toString();
});
console.log(strings); // Output: ["1", "2", "3"]</code></pre>
    
    <h2 style="color: #2980b9;">3. Extracting Properties from Objects</h2>
    <p>When working with arrays of objects, \`map\` can be used to extract specific properties from each object and create a new array.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let names = users.map(function(user) {
    return user.name;
});
console.log(names); // Output: ["Alice", "Bob", "Charlie"]</code></pre>
    
    <h2 style="color: #2980b9;">4. Combining \`map\` with Other Methods</h2>
    <p>\`map\` can be combined with other array methods like \`filter\` to perform more complex transformations. For example, you can filter an array and then map the remaining elements to a new format.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let evenSquares = numbers
    .filter(function(number) {
        return number % 2 === 0;
    })
    .map(function(number) {
        return number * number;
    });
console.log(evenSquares); // Output: [4, 16]</code></pre>
    
    <h2 style="color: #2980b9;">5. Using Arrow Functions with \`map\`</h2>
    <p>Arrow functions provide a concise syntax for writing the callback function passed to \`map\`. This makes the code more readable and compact.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let squares = numbers.map(number => number * number);
console.log(squares); // Output: [1, 4, 9]</code></pre>
    
    <h2 style="color: #2980b9;">6. Handling Asynchronous Operations</h2>
    <p>While \`map\` is synchronous, it can be used in combination with \`Promise.all\` to handle asynchronous operations. For example, you can map an array of URLs to an array of fetch requests and wait for all promises to resolve.</p>
    <pre><code class="language-javascript" codeHighlight>let urls = ["https://api.example.com/data1", "https://api.example.com/data2"];
let promises = urls.map(url => fetch(url).then(response => response.json()));
Promise.all(promises).then(data => {
    console.log(data); // Output: Array of JSON responses
});</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`map\`</h2>
    <p>While \`map\` is powerful, it has some limitations. It always returns a new array of the same length as the original, which may not be desirable in all cases. Additionally, it cannot be used to filter or skip elements during iteration.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(number) {
    if (number % 2 === 0) {
        return number * 2;
    }
    // Returns \`undefined\` for odd numbers
});
console.log(doubled); // Output: [undefined, 4, undefined, 8, undefined]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`map\` method is a versatile and essential tool for transforming arrays in JavaScript. It is particularly useful for creating new arrays by applying a function to each element of the original array. Whether you're working with numbers, strings, objects, or asynchronous data, \`map\` provides a clean and functional approach to data manipulation.</p>
</div>`
},
{
    articleTitle: `filter`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`filter\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`filter\` method in JavaScript is used to create a new array containing only the elements that pass a specified test (provided as a callback function). It is a powerful tool for selectively extracting elements from an array based on a condition, without modifying the original array.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`filter\`</h2>
    <p>The \`filter\` method takes a callback function as an argument, which is executed for each element in the array. The callback function should return \`true\` to include the element in the new array or \`false\` to exclude it. The \`filter\` method returns a new array containing only the elements that pass the test.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evens); // Output: [2, 4]</code></pre>
    
    <h2 style="color: #2980b9;">2. Filtering Arrays of Objects</h2>
    <p>\`filter\` is particularly useful when working with arrays of objects. You can filter objects based on specific properties or conditions.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let youngUsers = users.filter(function(user) {
    return user.age < 30;
});
console.log(youngUsers); // Output: [{ name: "Alice", age: 25 }]</code></pre>
    
    <h2 style="color: #2980b9;">3. Combining \`filter\` with Other Methods</h2>
    <p>\`filter\` can be combined with other array methods like \`map\` to perform more complex operations. For example, you can filter an array and then transform the remaining elements.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let doubledEvens = numbers
    .filter(function(number) {
        return number % 2 === 0;
    })
    .map(function(number) {
        return number * 2;
    });
console.log(doubledEvens); // Output: [4, 8]</code></pre>
    
    <h2 style="color: #2980b9;">4. Using Arrow Functions with \`filter\`</h2>
    <p>Arrow functions provide a concise syntax for writing the callback function passed to \`filter\`. This makes the code more readable and compact.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(number => number % 2 === 0);
console.log(evens); // Output: [2, 4]</code></pre>
    
    <h2 style="color: #2980b9;">5. Filtering Unique Values</h2>
    <p>\`filter\` can be used in combination with \`indexOf\` or \`Set\` to filter out duplicate values from an array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = numbers.filter((value, index, array) => array.indexOf(value) === index);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">6. Filtering Based on Multiple Conditions</h2>
    <p>You can use logical operators like \`&&\` or \`||\` to filter elements based on multiple conditions.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 30, isActive: false },
    { name: "Charlie", age: 35, isActive: true }
];
let activeYoungUsers = users.filter(function(user) {
    return user.age < 30 && user.isActive;
});
console.log(activeYoungUsers); // Output: [{ name: "Alice", age: 25, isActive: true }]</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`filter\`</h2>
    <p>While \`filter\` is powerful, it has some limitations. It always returns a new array, which may not be desirable if you only need to check if at least one element meets a condition (use \`some\` instead) or if you need to stop iteration early (use a \`for\` loop).</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // Output: true</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`filter\` method is a versatile and essential tool for selectively extracting elements from an array in JavaScript. It is particularly useful for working with arrays of objects, combining with other array methods, and filtering based on multiple conditions. Whether you're filtering numbers, strings, or objects, \`filter\` provides a clean and functional approach to data manipulation.</p>
</div>`
},
{
    articleTitle: `reduce`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`reduce\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`reduce\` method in JavaScript is used to reduce an array to a single value by executing a reducer function on each element of the array. It is a powerful tool for accumulating values, such as summing numbers, flattening arrays, or grouping data. The \`reduce\` method is highly flexible and can handle a wide range of use cases.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`reduce\`</h2>
    <p>The \`reduce\` method takes a callback function (reducer) and an optional initial value as arguments. The reducer function accepts four parameters: the accumulator (which holds the accumulated result), the current element, the current index, and the array itself. The method returns the final accumulated value.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4];
let sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum); // Output: 10</code></pre>
    
    <h2 style="color: #2980b9;">2. Summing Numbers in an Array</h2>
    <p>One of the most common use cases for \`reduce\` is summing all the numbers in an array. The initial value of the accumulator is typically set to \`0\`.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40];
let total = numbers.reduce((acc, num) => acc + num, 0);
console.log(total); // Output: 100</code></pre>
    
    <h2 style="color: #2980b9;">3. Flattening an Array of Arrays</h2>
    <p>\`reduce\` can be used to flatten a multi-dimensional array into a single-dimensional array.</p>
    <pre><code class="language-javascript" codeHighlight>let arrays = [[1, 2], [3, 4], [5, 6]];
let flattened = arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]</code></pre>
    
    <h2 style="color: #2980b9;">4. Grouping Objects by a Property</h2>
    <p>\`reduce\` is useful for grouping objects in an array based on a specific property. For example, you can group users by their age.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];
let groupedByAge = users.reduce((acc, user) => {
    if (!acc[user.age]) {
        acc[user.age] = [];
    }
    acc[user.age].push(user);
    return acc;
}, {});
console.log(groupedByAge);
// Output: { 25: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }], 30: [{ name: "Bob", age: 30 }] }</code></pre>
    
    <h2 style="color: #2980b9;">5. Counting Occurrences of Elements</h2>
    <p>\`reduce\` can be used to count the occurrences of each element in an array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(count); // Output: { apple: 3, banana: 2, orange: 1 }</code></pre>
    
    <h2 style="color: #2980b9;">6. Finding Maximum or Minimum Value</h2>
    <p>\`reduce\` can be used to find the maximum or minimum value in an array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 5, 20, 15, 30];
let max = numbers.reduce((acc, num) => Math.max(acc, num), numbers[0]);
console.log(max); // Output: 30</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`reduce\` with Other Methods</h2>
    <p>\`reduce\` can be combined with other array methods like \`filter\` or \`map\` to perform more complex operations. For example, you can filter an array and then reduce it to a single value.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let sumOfEvens = numbers
    .filter(num => num % 2 === 0)
    .reduce((acc, num) => acc + num, 0);
console.log(sumOfEvens); // Output: 6</code></pre>
    
    <h2 style="color: #2980b9;">8. Limitations of \`reduce\`</h2>
    <p>While \`reduce\` is powerful, it can be less intuitive for beginners and may lead to complex code if overused. It is important to use it only when necessary and ensure the logic inside the reducer function is clear and concise.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4];
let product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product); // Output: 24</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`reduce\` method is a versatile and essential tool for accumulating values in JavaScript. It is particularly useful for summing numbers, flattening arrays, grouping data, and counting occurrences. Whether you're working with numbers, strings, or objects, \`reduce\` provides a clean and functional approach to data manipulation.</p>
</div>`
},
{
    articleTitle: `find`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`find\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`find\` method in JavaScript is used to retrieve the first element in an array that satisfies a specified condition (provided as a callback function). Unlike \`filter\`, which returns all matching elements, \`find\` stops iterating as soon as it finds the first match. This makes it efficient for locating a single element in an array.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`find\`</h2>
    <p>The \`find\` method takes a callback function as an argument, which is executed for each element in the array. The callback function should return \`true\` if the element matches the condition, and \`false\` otherwise. The \`find\` method returns the first matching element or \`undefined\` if no match is found.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(function(number) {
    return number % 2 === 0;
});
console.log(firstEven); // Output: 2</code></pre>
    
    <h2 style="color: #2980b9;">2. Finding Objects in an Array</h2>
    <p>\`find\` is particularly useful when working with arrays of objects. You can search for an object based on a specific property or condition.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let user = users.find(function(user) {
    return user.age > 30;
});
console.log(user); // Output: { name: "Charlie", age: 35 }</code></pre>
    
    <h2 style="color: #2980b9;">3. Using Arrow Functions with \`find\`</h2>
    <p>Arrow functions provide a concise syntax for writing the callback function passed to \`find\`. This makes the code more readable and compact.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // Output: 2</code></pre>
    
    <h2 style="color: #2980b9;">4. Finding by Index</h2>
    <p>The callback function passed to \`find\` can also access the index of the current element. This can be useful if you need to find an element based on its position in the array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40, 50];
let found = numbers.find((number, index) => index === 2);
console.log(found); // Output: 30</code></pre>
    
    <h2 style="color: #2980b9;">5. Handling No Matches</h2>
    <p>If no element satisfies the condition, \`find\` returns \`undefined\`. This behavior can be used to handle cases where no match is found.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 3, 5, 7];
let firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // Output: undefined</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`find\` with Other Methods</h2>
    <p>\`find\` can be combined with other array methods like \`map\` or \`filter\` to perform more complex operations. For example, you can filter an array and then find a specific element in the filtered results.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let user = users
    .filter(user => user.age > 20)
    .find(user => user.name === "Bob");
console.log(user); // Output: { name: "Bob", age: 30 }</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`find\`</h2>
    <p>While \`find\` is efficient for locating a single element, it does not work well if you need to find multiple elements or if the array is very large and the condition is complex. In such cases, \`filter\` or a \`for\` loop may be more appropriate.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let found = numbers.find(number => number > 10);
console.log(found); // Output: undefined</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`find\` method is a powerful and efficient tool for locating the first element in an array that satisfies a condition. It is particularly useful for working with arrays of objects and handling cases where only one match is needed. Whether you're searching for numbers, strings, or objects, \`find\` provides a clean and concise approach to data retrieval.</p>
</div>`
},
{
    articleTitle: `findIndex`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`findIndex\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`findIndex\` method in JavaScript is used to retrieve the index of the first element in an array that satisfies a specified condition (provided as a callback function). Unlike \`find\`, which returns the element itself, \`findIndex\` returns the index of the element. If no element matches the condition, it returns \`-1\`. This method is particularly useful when you need the position of an element rather than the element itself.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`findIndex\`</h2>
    <p>The \`findIndex\` method takes a callback function as an argument, which is executed for each element in the array. The callback function should return \`true\` if the element matches the condition, and \`false\` otherwise. The \`findIndex\` method returns the index of the first matching element or \`-1\` if no match is found.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let firstEvenIndex = numbers.findIndex(function(number) {
    return number % 2 === 0;
});
console.log(firstEvenIndex); // Output: 1</code></pre>
    
    <h2 style="color: #2980b9;">2. Finding the Index of an Object</h2>
    <p>\`findIndex\` is particularly useful when working with arrays of objects. You can search for the index of an object based on a specific property or condition.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let userIndex = users.findIndex(function(user) {
    return user.age > 30;
});
console.log(userIndex); // Output: 2</code></pre>
    
    <h2 style="color: #2980b9;">3. Using Arrow Functions with \`findIndex\`</h2>
    <p>Arrow functions provide a concise syntax for writing the callback function passed to \`findIndex\`. This makes the code more readable and compact.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let firstEvenIndex = numbers.findIndex(number => number % 2 === 0);
console.log(firstEvenIndex); // Output: 1</code></pre>
    
    <h2 style="color: #2980b9;">4. Handling No Matches</h2>
    <p>If no element satisfies the condition, \`findIndex\` returns \`-1\`. This behavior can be used to handle cases where no match is found.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 3, 5, 7];
let firstEvenIndex = numbers.findIndex(number => number % 2 === 0);
console.log(firstEvenIndex); // Output: -1</code></pre>
    
    <h2 style="color: #2980b9;">5. Combining \`findIndex\` with Other Methods</h2>
    <p>\`findIndex\` can be combined with other array methods like \`filter\` or \`map\` to perform more complex operations. For example, you can filter an array and then find the index of a specific element in the filtered results.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
let userIndex = users
    .filter(user => user.age > 20)
    .findIndex(user => user.name === "Bob");
console.log(userIndex); // Output: 1</code></pre>
    
    <h2 style="color: #2980b9;">6. Finding the Index of the First Occurrence</h2>
    <p>\`findIndex\` is particularly useful for finding the index of the first occurrence of an element that meets a condition. This is different from \`indexOf\`, which only checks for strict equality.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40, 50];
let index = numbers.findIndex(number => number > 25);
console.log(index); // Output: 2</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`findIndex\`</h2>
    <p>While \`findIndex\` is efficient for locating the index of a single element, it does not work well if you need to find multiple indices or if the array is very large and the condition is complex. In such cases, \`filter\` or a \`for\` loop may be more appropriate.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let index = numbers.findIndex(number => number > 10);
console.log(index); // Output: -1</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`findIndex\` method is a powerful and efficient tool for locating the index of the first element in an array that satisfies a condition. It is particularly useful for working with arrays of objects and handling cases where the position of an element is needed. Whether you're searching for numbers, strings, or objects, \`findIndex\` provides a clean and concise approach to index retrieval.</p>
</div>`
},
{
    articleTitle: `some`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`some\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`some\` method in JavaScript is used to check if at least one element in an array satisfies a specified condition (provided as a callback function). It returns \`true\` if the condition is met for any element, and \`false\` otherwise. This method is useful for quickly determining if an array contains any elements that meet a specific criterion.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`some\`</h2>
    <p>The \`some\` method takes a callback function as an argument, which is executed for each element in the array. The callback function should return \`true\` if the element matches the condition, and \`false\` otherwise. The \`some\` method returns \`true\` as soon as it finds a matching element, and \`false\` if no elements match.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(function(number) {
    return number % 2 === 0;
});
console.log(hasEven); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">2. Checking for Specific Values</h2>
    <p>\`some\` is particularly useful for checking if an array contains specific values or meets certain conditions. For example, you can check if an array contains any negative numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, -3, 4, 5];
let hasNegative = numbers.some(number => number < 0);
console.log(hasNegative); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`some\` with Arrays of Objects</h2>
    <p>\`some\` can be used with arrays of objects to check if any object meets a specific condition. For example, you can check if any user in an array is an admin.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", role: "user" },
    { name: "Bob", role: "admin" },
    { name: "Charlie", role: "user" }
];
let hasAdmin = users.some(user => user.role === "admin");
console.log(hasAdmin); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">4. Combining \`some\` with Other Methods</h2>
    <p>\`some\` can be combined with other array methods like \`map\` or \`filter\` to perform more complex checks. For example, you can filter an array and then check if any of the filtered elements meet a condition.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasEvenGreaterThanTwo = numbers
    .filter(number => number > 2)
    .some(number => number % 2 === 0);
console.log(hasEvenGreaterThanTwo); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">5. Handling No Matches</h2>
    <p>If no element satisfies the condition, \`some\` returns \`false\`. This behavior can be used to handle cases where no match is found.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 3, 5, 7];
let hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">6. Using Arrow Functions with \`some\`</h2>
    <p>Arrow functions provide a concise syntax for writing the callback function passed to \`some\`. This makes the code more readable and compact.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`some\`</h2>
    <p>While \`some\` is efficient for checking if at least one element meets a condition, it does not provide information about which elements match or how many. For such cases, \`filter\` or a \`for\` loop may be more appropriate.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(number => number > 10);
console.log(hasEven); // Output: false</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`some\` method is a powerful and efficient tool for checking if at least one element in an array satisfies a condition. It is particularly useful for quick checks on arrays of numbers, strings, or objects. Whether you're validating data or searching for specific values, \`some\` provides a clean and concise approach to condition checking.</p>
</div>`
},
{
    articleTitle: `every`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`every\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`every\` method in JavaScript is used to check if **all elements** in an array satisfy a specified condition (provided as a callback function). It returns \`true\` if the condition is met for every element, and \`false\` otherwise. This method is useful for validating that all elements in an array meet a specific criterion.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`every\`</h2>
    <p>The \`every\` method takes a callback function as an argument, which is executed for each element in the array. The callback function should return \`true\` if the element matches the condition, and \`false\` otherwise. The \`every\` method returns \`true\` only if all elements pass the condition; otherwise, it returns \`false\`.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(allEven); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">2. Checking for Specific Conditions</h2>
    <p>\`every\` is particularly useful for checking if all elements in an array meet a specific condition. For example, you can check if all numbers in an array are positive.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let allPositive = numbers.every(number => number > 0);
console.log(allPositive); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`every\` with Arrays of Objects</h2>
    <p>\`every\` can be used with arrays of objects to check if all objects meet a specific condition. For example, you can check if all users in an array are active.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", isActive: true },
    { name: "Bob", isActive: true },
    { name: "Charlie", isActive: false }
];
let allActive = users.every(user => user.isActive);
console.log(allActive); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">4. Combining \`every\` with Other Methods</h2>
    <p>\`every\` can be combined with other array methods like \`map\` or \`filter\` to perform more complex checks. For example, you can filter an array and then check if all filtered elements meet a condition.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let allEvenGreaterThanTwo = numbers
    .filter(number => number > 2)
    .every(number => number % 2 === 0);
console.log(allEvenGreaterThanTwo); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">5. Handling Edge Cases</h2>
    <p>If the array is empty, \`every\` returns \`true\` for any condition because there are no elements to fail the test. This behavior is consistent with mathematical logic (vacuous truth).</p>
    <pre><code class="language-javascript" codeHighlight>let emptyArray = [];
let allEven = emptyArray.every(number => number % 2 === 0);
console.log(allEven); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">6. Using Arrow Functions with \`every\`</h2>
    <p>Arrow functions provide a concise syntax for writing the callback function passed to \`every\`. This makes the code more readable and compact.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [2, 4, 6, 8, 10];
let allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`every\`</h2>
    <p>While \`every\` is efficient for checking if all elements meet a condition, it does not provide information about which elements fail or how many. For such cases, \`filter\` or a \`for\` loop may be more appropriate.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // Output: false</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`every\` method is a powerful and efficient tool for checking if **all elements** in an array satisfy a condition. It is particularly useful for validating data, ensuring consistency, or enforcing rules across arrays of numbers, strings, or objects. Whether you're validating inputs or checking for specific criteria, \`every\` provides a clean and concise approach to condition checking.</p>
</div>`
},
{
    articleTitle: `includes`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`includes\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`includes\` method in JavaScript is used to check if an array contains a specific element. It returns \`true\` if the element is found in the array, and \`false\` otherwise. This method is particularly useful for quickly checking the presence of an element without needing to write additional logic.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`includes\`</h2>
    <p>The \`includes\` method takes a single argument, which is the element to search for in the array. It performs a **strict equality check** (using \`===\`) to determine if the element exists in the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let hasBanana = fruits.includes("banana");
console.log(hasBanana); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">2. Checking for Primitive Values</h2>
    <p>\`includes\` is commonly used to check for primitive values like strings, numbers, or booleans in an array. It is case-sensitive when checking strings.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasThree = numbers.includes(3);
console.log(hasThree); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`includes\` with Objects</h2>
    <p>\`includes\` does not work well with objects because it uses strict equality (\`===\`). Two objects with the same properties are considered different unless they reference the same memory location.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice" },
    { name: "Bob" }
];
let hasAlice = users.includes({ name: "Alice" });
console.log(hasAlice); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">4. Specifying a Starting Index</h2>
    <p>The \`includes\` method accepts an optional second argument, which is the starting index for the search. This allows you to search for an element starting from a specific position in the array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasThreeAfterIndex2 = numbers.includes(3, 3);
console.log(hasThreeAfterIndex2); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">5. Handling Case Sensitivity</h2>
    <p>When working with strings, \`includes\` is case-sensitive. To perform a case-insensitive search, you can convert the array and the search term to the same case (e.g., lowercase).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Cherry"];
let hasApple = fruits.map(fruit => fruit.toLowerCase()).includes("apple");
console.log(hasApple); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`includes\` with Other Methods</h2>
    <p>\`includes\` can be combined with other array methods like \`filter\` or \`map\` to perform more complex operations. For example, you can filter an array to include only elements that are present in another array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let favoriteFruits = ["banana", "cherry"];
let filteredFruits = fruits.filter(fruit => favoriteFruits.includes(fruit));
console.log(filteredFruits); // Output: ["banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`includes\`</h2>
    <p>While \`includes\` is simple and efficient, it has some limitations. It cannot be used to check for complex conditions or partial matches. For such cases, methods like \`some\` or \`find\` may be more appropriate.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // Output: true</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`includes\` method is a simple and efficient tool for checking if an array contains a specific element. It is particularly useful for working with primitive values like strings, numbers, and booleans. Whether you're validating user input or filtering data, \`includes\` provides a clean and concise way to check for the presence of an element in an array.</p>
</div>`
},
{
    articleTitle: `indexOf`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`indexOf\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`indexOf\` method in JavaScript is used to find the **first index** of a specified element in an array. It returns the index of the element if it is found, and \`-1\` if the element is not present. This method is particularly useful for locating the position of an element in an array.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`indexOf\`</h2>
    <p>The \`indexOf\` method takes a single argument, which is the element to search for in the array. It performs a **strict equality check** (using \`===\`) to determine if the element exists in the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let index = fruits.indexOf("banana");
console.log(index); // Output: 1</code></pre>
    
    <h2 style="color: #2980b9;">2. Searching for Primitive Values</h2>
    <p>\`indexOf\` is commonly used to search for primitive values like strings, numbers, or booleans in an array. It is case-sensitive when checking strings.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40, 50];
let index = numbers.indexOf(30);
console.log(index); // Output: 2</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`indexOf\` with Objects</h2>
    <p>\`indexOf\` does not work well with objects because it uses strict equality (\`===\`). Two objects with the same properties are considered different unless they reference the same memory location.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice" },
    { name: "Bob" }
];
let index = users.indexOf({ name: "Alice" });
console.log(index); // Output: -1</code></pre>
    
    <h2 style="color: #2980b9;">4. Specifying a Starting Index</h2>
    <p>The \`indexOf\` method accepts an optional second argument, which is the starting index for the search. This allows you to search for an element starting from a specific position in the array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40, 50];
let index = numbers.indexOf(30, 3); // Start searching from index 3
console.log(index); // Output: -1</code></pre>
    
    <h2 style="color: #2980b9;">5. Handling Case Sensitivity</h2>
    <p>When working with strings, \`indexOf\` is case-sensitive. To perform a case-insensitive search, you can convert the array and the search term to the same case (e.g., lowercase).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Cherry"];
let index = fruits.map(fruit => fruit.toLowerCase()).indexOf("apple");
console.log(index); // Output: 0</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`indexOf\` with Other Methods</h2>
    <p>\`indexOf\` can be combined with other array methods like \`filter\` or \`map\` to perform more complex operations. For example, you can filter an array to exclude elements that are present in another array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let excludeFruits = ["banana"];
let filteredFruits = fruits.filter(fruit => excludeFruits.indexOf(fruit) === -1);
console.log(filteredFruits); // Output: ["apple", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`indexOf\`</h2>
    <p>While \`indexOf\` is simple and efficient, it has some limitations. It cannot be used to check for complex conditions or partial matches. For such cases, methods like \`findIndex\` or \`some\` may be more appropriate.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let index = numbers.findIndex(number => number > 3);
console.log(index); // Output: 3</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`indexOf\` method is a simple and efficient tool for finding the index of a specific element in an array. It is particularly useful for working with primitive values like strings, numbers, and booleans. Whether you're locating an element or filtering data, \`indexOf\` provides a clean and concise way to determine the position of an element in an array.</p>
</div>`
},
{
    articleTitle: `lastIndexOf`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`lastIndexOf\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`lastIndexOf\` method in JavaScript is used to find the **last index** of a specified element in an array. It searches the array from the end to the beginning and returns the index of the last occurrence of the element. If the element is not found, it returns \`-1\`. This method is particularly useful when you need to find the position of the last occurrence of an element in an array.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`lastIndexOf\`</h2>
    <p>The \`lastIndexOf\` method takes a single argument, which is the element to search for in the array. It performs a **strict equality check** (using \`===\`) to determine if the element exists in the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "banana"];
let lastIndex = fruits.lastIndexOf("banana");
console.log(lastIndex); // Output: 3</code></pre>
    
    <h2 style="color: #2980b9;">2. Searching for Primitive Values</h2>
    <p>\`lastIndexOf\` is commonly used to search for primitive values like strings, numbers, or booleans in an array. It is case-sensitive when checking strings.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 20, 50];
let lastIndex = numbers.lastIndexOf(20);
console.log(lastIndex); // Output: 3</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`lastIndexOf\` with Objects</h2>
    <p>\`lastIndexOf\` does not work well with objects because it uses strict equality (\`===\`). Two objects with the same properties are considered different unless they reference the same memory location.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Alice" }
];
let lastIndex = users.lastIndexOf({ name: "Alice" });
console.log(lastIndex); // Output: -1</code></pre>
    
    <h2 style="color: #2980b9;">4. Specifying a Starting Index</h2>
    <p>The \`lastIndexOf\` method accepts an optional second argument, which is the starting index for the search. This allows you to search for an element starting from a specific position in the array, moving backward.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 20, 50];
let lastIndex = numbers.lastIndexOf(20, 2); // Start searching from index 2
console.log(lastIndex); // Output: 1</code></pre>
    
    <h2 style="color: #2980b9;">5. Handling Case Sensitivity</h2>
    <p>When working with strings, \`lastIndexOf\` is case-sensitive. To perform a case-insensitive search, you can convert the array and the search term to the same case (e.g., lowercase).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Apple", "Banana", "Cherry", "banana"];
let lastIndex = fruits.map(fruit => fruit.toLowerCase()).lastIndexOf("banana");
console.log(lastIndex); // Output: 3</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`lastIndexOf\` with Other Methods</h2>
    <p>\`lastIndexOf\` can be combined with other array methods like \`filter\` or \`map\` to perform more complex operations. For example, you can filter an array to exclude elements that are present in another array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "banana"];
let excludeFruits = ["banana"];
let filteredFruits = fruits.filter((fruit, index) => fruits.lastIndexOf(fruit) === index);
console.log(filteredFruits); // Output: ["apple", "cherry", "banana"]</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`lastIndexOf\`</h2>
    <p>While \`lastIndexOf\` is simple and efficient, it has some limitations. It cannot be used to check for complex conditions or partial matches. For such cases, methods like \`findIndex\` or \`some\` may be more appropriate.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let lastIndex = numbers.findIndex(number => number > 3);
console.log(lastIndex); // Output: 3</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`lastIndexOf\` method is a simple and efficient tool for finding the last index of a specific element in an array. It is particularly useful for working with primitive values like strings, numbers, and booleans. Whether you're locating the last occurrence of an element or filtering data, \`lastIndexOf\` provides a clean and concise way to determine the position of an element in an array.</p>
</div>`
},
{
    articleTitle: `slice`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`slice\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`slice\` method in JavaScript is used to extract a portion of an array and return it as a new array. It does not modify the original array. The method takes two arguments: the **start index** (inclusive) and the **end index** (exclusive). If no arguments are provided, it creates a shallow copy of the entire array.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`slice\`</h2>
    <p>The \`slice\` method extracts elements from the start index up to, but not including, the end index. If the end index is omitted, it extracts elements until the end of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits); // Output: ["banana", "cherry", "date"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Copying an Array</h2>
    <p>If no arguments are provided, \`slice\` creates a shallow copy of the entire array. This is useful for creating a new array with the same elements as the original.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let copiedFruits = fruits.slice();
console.log(copiedFruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">3. Using Negative Indices</h2>
    <p>Negative indices can be used to specify positions relative to the end of the array. For example, \`-1\` refers to the last element, \`-2\` refers to the second-to-last element, and so on.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits.slice(-3, -1);
console.log(slicedFruits); // Output: ["cherry", "date"]</code></pre>
    
    <h2 style="color: #2980b9;">4. Extracting from a Start Index to the End</h2>
    <p>If only the start index is provided, \`slice\` extracts elements from the start index to the end of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = fruits.slice(2);
console.log(slicedFruits); // Output: ["cherry", "date", "elderberry"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Shallow Copy vs. Deep Copy</h2>
    <p>\`slice\` creates a **shallow copy** of the array. This means that if the array contains objects or other arrays, the copied array will reference the same objects, not new ones.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [{ name: "Alice" }, { name: "Bob" }];
let copiedUsers = users.slice();
copiedUsers[0].name = "Charlie";
console.log(users[0].name); // Output: "Charlie"</code></pre>
    
    <h2 style="color: #2980b9;">6. Imperative Approach to Achieve \`slice\`</h2>
    <p>The same functionality of \`slice\` can be achieved using a \`for\` loop. This approach manually extracts elements from the original array and adds them to a new array.</p>
    <pre><code class="language-javascript" codeHighlight>function sliceArray(array, start, end) {
    let result = [];
    for (let i = start; i < (end || array.length); i++) {
        result.push(array[i]);
    }
    return result;
}

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
let slicedFruits = sliceArray(fruits, 1, 4);
console.log(slicedFruits); // Output: ["banana", "cherry", "date"]</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`slice\`</h2>
    <p>While \`slice\` is efficient and easy to use, it has some limitations. It cannot be used to modify the original array, and it only creates a shallow copy. For deep copying or more complex operations, other methods like \`JSON.parse(JSON.stringify(array))\` or libraries like Lodash may be required.</p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [[1], [2], [3]];
let shallowCopy = nestedArray.slice();
shallowCopy[0][0] = 100;
console.log(nestedArray[0][0]); // Output: 100</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`slice\` method is a powerful and efficient tool for extracting portions of an array without modifying the original array. It is particularly useful for creating shallow copies, extracting subarrays, and working with negative indices. Whether you're copying arrays or extracting specific elements, \`slice\` provides a clean and concise approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `splice`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`splice\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`splice\` method in JavaScript is used to **add, remove, or replace elements** in an array. Unlike \`slice\`, which does not modify the original array, \`splice\` directly changes the array it is called on. It is a versatile method for modifying arrays in place.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`splice\`</h2>
    <p>The \`splice\` method takes three arguments: the **start index**, the **number of elements to remove**, and the **elements to add** (optional). It returns an array of the removed elements.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2, "grape", "kiwi");
console.log(fruits); // Output: ["apple", "grape", "kiwi", "date"]
console.log(removed); // Output: ["banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Removing Elements</h2>
    <p>To remove elements from an array, you can use \`splice\` with only the start index and the number of elements to remove. If no elements are specified to add, it simply removes the elements.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "date"];
let removed = fruits.splice(1, 2);
console.log(fruits); // Output: ["apple", "date"]
console.log(removed); // Output: ["banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">3. Adding Elements</h2>
    <p>To add elements to an array without removing any, you can set the second argument (number of elements to remove) to \`0\`. The elements to add are specified as additional arguments.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 0, "grape", "kiwi");
console.log(fruits); // Output: ["apple", "grape", "kiwi", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">4. Replacing Elements</h2>
    <p>To replace elements in an array, you can specify the number of elements to remove and provide new elements to add in their place.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "grape");
console.log(fruits); // Output: ["apple", "grape", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Using Negative Indices</h2>
    <p>Negative indices can be used to specify positions relative to the end of the array. For example, \`-1\` refers to the last element, \`-2\` refers to the second-to-last element, and so on.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "date"];
fruits.splice(-2, 1, "kiwi");
console.log(fruits); // Output: ["apple", "banana", "kiwi", "date"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Imperative Approach to Achieve \`splice\`</h2>
    <p>The same functionality of \`splice\` can be achieved using a combination of \`for\` loops and array manipulation. This approach manually removes and adds elements to the array.</p>
    <pre><code class="language-javascript" codeHighlight>function spliceArray(array, start, deleteCount, ...items) {
    let removed = array.slice(start, start + deleteCount);
    let remaining = array.slice(start + deleteCount);
    array.length = start; // Truncate the array
    array.push(...items, ...remaining);
    return removed;
}

let fruits = ["apple", "banana", "cherry", "date"];
let removed = spliceArray(fruits, 1, 2, "grape", "kiwi");
console.log(fruits); // Output: ["apple", "grape", "kiwi", "date"]
console.log(removed); // Output: ["banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`splice\`</h2>
    <p>While \`splice\` is powerful, it directly modifies the original array, which may not always be desirable. If you need to preserve the original array, consider using \`slice\` or other non-destructive methods.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let removed = fruits.splice(1, 1);
console.log(fruits); // Output: ["apple", "cherry"]
console.log(removed); // Output: ["banana"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`splice\` method is a versatile and powerful tool for modifying arrays in place. It is particularly useful for adding, removing, or replacing elements at specific positions. Whether you're manipulating arrays or performing complex modifications, \`splice\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `sort`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`sort\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`sort\` method in JavaScript is used to **sort the elements of an array** in place. By default, it sorts elements as strings in ascending order. However, you can provide a custom comparison function to sort elements in any order or based on specific criteria. The \`sort\` method modifies the original array and returns the sorted array.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`sort\`</h2>
    <p>By default, \`sort\` converts elements to strings and sorts them in ascending order based on their UTF-16 code unit values. This can lead to unexpected results when sorting numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "cherry"]

let numbers = [10, 5, 20, 1];
numbers.sort();
console.log(numbers); // Output: [1, 10, 20, 5] (unexpected for numbers)</code></pre>
    
    <h2 style="color: #2980b9;">2. Sorting Numbers Correctly</h2>
    <p>To sort numbers correctly, you need to provide a comparison function. The comparison function takes two arguments (\`a\` and \`b\`) and returns:
        <ul>
            <li>A **negative number** if \`a\` should come before \`b\`.</li>
            <li>A **positive number** if \`a\` should come after \`b\`.</li>
            <li>\`0\` if \`a\` and \`b\` are equal.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 5, 20, 1];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 5, 10, 20]</code></pre>
    
    <h2 style="color: #2980b9;">3. Sorting Objects</h2>
    <p>You can use \`sort\` to sort arrays of objects based on a specific property. For example, you can sort users by their age.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
users.sort((a, b) => a.age - b.age);
console.log(users);
// Output: [
//   { name: "Charlie", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ]</code></pre>
    
    <h2 style="color: #2980b9;">4. Sorting in Descending Order</h2>
    <p>To sort elements in descending order, you can reverse the logic of the comparison function.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 5, 20, 1];
numbers.sort((a, b) => b - a);
console.log(numbers); // Output: [20, 10, 5, 1]</code></pre>
    
    <h2 style="color: #2980b9;">5. Case-Insensitive Sorting</h2>
    <p>When sorting strings, you may want to perform a case-insensitive sort. This can be achieved by converting strings to lowercase (or uppercase) in the comparison function.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["Banana", "apple", "Cherry"];
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(fruits); // Output: ["apple", "Banana", "Cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Imperative Approach to Achieve \`sort\`</h2>
    <p>The same functionality of \`sort\` can be achieved using sorting algorithms like **Bubble Sort**, **Quick Sort**, or **Merge Sort**. Below is an example of implementing a simple **Bubble Sort** to sort an array of numbers.</p>
    <pre><code class="language-javascript" codeHighlight>function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

let numbers = [10, 5, 20, 1];
let sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [1, 5, 10, 20]</code></pre>
    
    <h2 style="color: #2980b9;">7. Limitations of \`sort\`</h2>
    <p>While \`sort\` is powerful, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>The default sorting behavior (lexicographical order) can lead to unexpected results for numbers.</li>
            <li>Custom comparison functions are required for complex sorting logic.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 5, 20, 1];
numbers.sort(); // Default behavior
console.log(numbers); // Output: [1, 10, 20, 5] (unexpected for numbers)</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`sort\` method is a versatile and powerful tool for sorting arrays in JavaScript. It is particularly useful for sorting numbers, strings, and objects based on specific criteria. Whether you're sorting in ascending or descending order, or implementing custom sorting logic, \`sort\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `reverse`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`reverse\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`reverse\` method in JavaScript is used to **reverse the order of elements** in an array. It modifies the original array in place and returns the reversed array. This method is simple and effective for reversing the sequence of elements.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`reverse\`</h2>
    <p>The \`reverse\` method reverses the order of elements in the array. It does not take any arguments and directly modifies the original array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
fruits.reverse();
console.log(fruits); // Output: ["cherry", "banana", "apple"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Reversing an Array of Numbers</h2>
    <p>The \`reverse\` method works with arrays of any type, including numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]</code></pre>
    
    <h2 style="color: #2980b9;">3. Reversing an Array of Objects</h2>
    <p>The \`reverse\` method can also be used with arrays of objects. It reverses the order of the objects in the array.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
users.reverse();
console.log(users);
// Output: [
//   { name: "Charlie", age: 35 },
//   { name: "Bob", age: 30 },
//   { name: "Alice", age: 25 }
// ]</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`reverse\`</h2>
    <p>The same functionality of \`reverse\` can be achieved using a \`for\` loop. This approach manually swaps elements from the start and end of the array until the middle is reached.</p>
    <pre><code class="language-javascript" codeHighlight>function reverseArray(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        // Swap elements
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
    }
    return array;
}

let fruits = ["apple", "banana", "cherry"];
let reversedFruits = reverseArray(fruits);
console.log(reversedFruits); // Output: ["cherry", "banana", "apple"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`reverse\`</h2>
    <p>While \`reverse\` is simple and effective, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>It does not work well with nested arrays or objects, as it only reverses the top-level elements.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [[1], [2], [3]];
nestedArray.reverse();
console.log(nestedArray); // Output: [[3], [2], [1]]</code></pre>
    
    <h2 style="color: #2980b9;">6. Creating a Reversed Copy</h2>
    <p>If you want to reverse an array without modifying the original, you can create a copy of the array and then reverse it.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let reversedFruits = [...fruits].reverse();
console.log(fruits); // Output: ["apple", "banana", "cherry"]
console.log(reversedFruits); // Output: ["cherry", "banana", "apple"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`reverse\` method is a simple and effective tool for reversing the order of elements in an array. It is particularly useful for quickly reversing arrays of any type. Whether you're working with strings, numbers, or objects, \`reverse\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `join`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`join\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`join\` method in JavaScript is used to **combine all elements of an array into a single string**. You can specify a separator (e.g., a comma, space, or any character) to place between the elements. If no separator is provided, the elements are joined with a comma by default.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`join\`</h2>
    <p>The \`join\` method takes an optional separator as an argument. If no separator is provided, it defaults to a comma.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let result = fruits.join();
console.log(result); // Output: "apple,banana,cherry"</code></pre>
    
    <h2 style="color: #2980b9;">2. Using a Custom Separator</h2>
    <p>You can specify a custom separator to control how the elements are joined. For example, you can use a space, hyphen, or any other character.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let result = fruits.join(" - ");
console.log(result); // Output: "apple - banana - cherry"</code></pre>
    
    <h2 style="color: #2980b9;">3. Joining Without a Separator</h2>
    <p>If you pass an empty string as the separator, the elements are joined without any characters between them.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let result = fruits.join("");
console.log(result); // Output: "applebananacherry"</code></pre>
    
    <h2 style="color: #2980b9;">4. Joining Numbers in an Array</h2>
    <p>The \`join\` method works with arrays of any type, including numbers. The elements are automatically converted to strings before joining.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let result = numbers.join(" + ");
console.log(result); // Output: "1 + 2 + 3 + 4 + 5"</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`join\`</h2>
    <p>The same functionality of \`join\` can be achieved using a \`for\` loop. This approach manually concatenates the elements of the array with the specified separator.</p>
    <pre><code class="language-javascript" codeHighlight>function joinArray(array, separator = ",") {
        let result = "";
        for (let i = 0; i < array.length; i++) {
            result += array[i];
            if (i < array.length - 1) {
                result += separator;
            }
        }
        return result;
    }

    let fruits = ["apple", "banana", "cherry"];
    let result = joinArray(fruits, " - ");
    console.log(result); // Output: "apple - banana - cherry"</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`join\`</h2>
    <p>While \`join\` is simple and effective, it has some limitations:
        <ul>
            <li>It converts all elements to strings, which may not be desirable for certain use cases (e.g., working with objects).</li>
            <li>It does not handle nested arrays or complex data structures.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let mixedArray = [1, { name: "Alice" }, [2, 3]];
let result = mixedArray.join(" | ");
console.log(result); // Output: "1 | [object Object] | 2,3"</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`join\` with Other Methods</h2>
    <p>\`join\` can be combined with other array methods like \`map\` or \`filter\` to create more complex strings. For example, you can filter an array and then join the remaining elements.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let result = numbers
    .filter(number => number % 2 === 0)
    .join(" and ");
console.log(result); // Output: "2 and 4"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`join\` method is a simple and powerful tool for combining array elements into a single string. It is particularly useful for creating formatted strings, such as CSV data or display text. Whether you're working with strings, numbers, or other data types, \`join\` provides a clean and efficient approach to string manipulation.</p>
</div>`
},
{
    articleTitle: `toString`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`toString\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`toString\` method in JavaScript is used to **convert an array into a string**. It returns a comma-separated string of the array elements. This method is automatically called when an array is used in a string context, such as concatenation with a string.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`toString\`</h2>
    <p>The \`toString\` method converts all elements of the array into a single string, with each element separated by a comma. It does not modify the original array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let result = fruits.toString();
console.log(result); // Output: "apple,banana,cherry"</code></pre>
    
    <h2 style="color: #2980b9;">2. Converting Numbers in an Array</h2>
    <p>The \`toString\` method works with arrays of any type, including numbers. The elements are automatically converted to strings.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let result = numbers.toString();
console.log(result); // Output: "1,2,3,4,5"</code></pre>
    
    <h2 style="color: #2980b9;">3. Handling Nested Arrays</h2>
    <p>If the array contains nested arrays, \`toString\` flattens them into a single string. The nested arrays are also converted to comma-separated strings.</p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [1, [2, 3], [4, [5, 6]]];
let result = nestedArray.toString();
console.log(result); // Output: "1,2,3,4,5,6"</code></pre>
    
    <h2 style="color: #2980b9;">4. Automatic Conversion in String Context</h2>
    <p>The \`toString\` method is automatically called when an array is used in a string context, such as concatenation with a string.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let result = "Fruits: " + fruits;
console.log(result); // Output: "Fruits: apple,banana,cherry"</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`toString\`</h2>
    <p>The same functionality of \`toString\` can be achieved using a \`for\` loop. This approach manually concatenates the elements of the array with commas.</p>
    <pre><code class="language-javascript" codeHighlight>function arrayToString(array) {
        let result = "";
        for (let i = 0; i < array.length; i++) {
            result += array[i];
            if (i < array.length - 1) {
                result += ",";
            }
        }
        return result;
    }

    let fruits = ["apple", "banana", "cherry"];
    let result = arrayToString(fruits);
    console.log(result); // Output: "apple,banana,cherry"</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`toString\`</h2>
    <p>While \`toString\` is simple and effective, it has some limitations:
        <ul>
            <li>It always uses a comma as the separator, which cannot be customized.</li>
            <li>It does not handle complex data structures (e.g., objects) in a meaningful way.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let mixedArray = [1, { name: "Alice" }, [2, 3]];
let result = mixedArray.toString();
console.log(result); // Output: "1,[object Object],2,3"</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`toString\` with Other Methods</h2>
    <p>\`toString\` can be combined with other array methods like \`map\` or \`filter\` to create more complex strings. For example, you can filter an array and then convert it to a string.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let result = numbers
    .filter(number => number % 2 === 0)
    .toString();
console.log(result); // Output: "2,4"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`toString\` method is a simple and powerful tool for converting arrays into strings. It is particularly useful for quickly creating comma-separated strings from arrays. Whether you're working with strings, numbers, or nested arrays, \`toString\` provides a clean and efficient approach to string conversion.</p>
</div>`
},
{
    articleTitle: `concat`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`concat\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`concat\` method in JavaScript is used to **merge two or more arrays** into a new array. It does not modify the original arrays but instead returns a new array containing the combined elements. This method is useful for combining arrays without altering the existing ones.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`concat\`</h2>
    <p>The \`concat\` method takes one or more arrays (or values) as arguments and returns a new array containing the elements of the original array followed by the elements of the provided arrays.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "date"];
let combined = fruits.concat(moreFruits);
console.log(combined); // Output: ["apple", "banana", "cherry", "date"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Concatenating Multiple Arrays</h2>
    <p>You can concatenate multiple arrays in a single call by passing them as additional arguments to \`concat\`.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "date"];
let evenMoreFruits = ["elderberry", "fig"];
let combined = fruits.concat(moreFruits, evenMoreFruits);
console.log(combined); // Output: ["apple", "banana", "cherry", "date", "elderberry", "fig"]</code></pre>
    
    <h2 style="color: #2980b9;">3. Concatenating Arrays and Values</h2>
    <p>The \`concat\` method can also be used to add individual values to an array. These values are appended to the new array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let combined = fruits.concat("cherry", "date");
console.log(combined); // Output: ["apple", "banana", "cherry", "date"]</code></pre>
    
    <h2 style="color: #2980b9;">4. Concatenating Nested Arrays</h2>
    <p>If the arrays being concatenated contain nested arrays, \`concat\` does not flatten them. The nested arrays are added as-is to the new array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let moreFruits = ["cherry", ["date", "elderberry"]];
let combined = fruits.concat(moreFruits);
console.log(combined); // Output: ["apple", "banana", "cherry", ["date", "elderberry"]]</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`concat\`</h2>
    <p>The same functionality of \`concat\` can be achieved using a \`for\` loop. This approach manually iterates through the arrays and combines their elements into a new array.</p>
    <pre><code class="language-javascript" codeHighlight>function concatArrays(...arrays) {
        let result = [];
        for (let array of arrays) {
            for (let element of array) {
                result.push(element);
            }
        }
        return result;
    }

    let fruits = ["apple", "banana"];
    let moreFruits = ["cherry", "date"];
    let combined = concatArrays(fruits, moreFruits);
    console.log(combined); // Output: ["apple", "banana", "cherry", "date"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`concat\`</h2>
    <p>While \`concat\` is powerful, it has some limitations:
        <ul>
            <li>It does not modify the original arrays, which may require additional memory for large arrays.</li>
            <li>It does not flatten nested arrays, so nested structures remain intact.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let moreFruits = ["cherry", ["date", "elderberry"]];
let combined = fruits.concat(moreFruits);
console.log(combined); // Output: ["apple", "banana", "cherry", ["date", "elderberry"]]</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`concat\` with Other Methods</h2>
    <p>\`concat\` can be combined with other array methods like \`map\` or \`filter\` to create more complex arrays. For example, you can filter arrays and then concatenate them.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "date"];
let combined = fruits
    .filter(fruit => fruit !== "banana")
    .concat(moreFruits.filter(fruit => fruit !== "date"));
console.log(combined); // Output: ["apple", "cherry"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`concat\` method is a simple and powerful tool for merging arrays in JavaScript. It is particularly useful for combining arrays without modifying the original ones. Whether you're working with strings, numbers, or nested arrays, \`concat\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `shift`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`shift\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`shift\` method in JavaScript is used to **remove the first element** from an array and return that element. This method modifies the original array by removing the first element and shifting all other elements down by one index. It is useful for working with arrays as queues (FIFO - First In, First Out).
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`shift\`</h2>
    <p>The \`shift\` method removes the first element from the array and returns it. If the array is empty, it returns \`undefined\`.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: "apple"
console.log(fruits); // Output: ["banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Removing the First Element from an Array of Numbers</h2>
    <p>The \`shift\` method works with arrays of any type, including numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40];
let firstNumber = numbers.shift();
console.log(firstNumber); // Output: 10
console.log(numbers); // Output: [20, 30, 40]</code></pre>
    
    <h2 style="color: #2980b9;">3. Handling Empty Arrays</h2>
    <p>If the array is empty, \`shift\` returns \`undefined\` and does not modify the array.</p>
    <pre><code class="language-javascript" codeHighlight>let emptyArray = [];
let result = emptyArray.shift();
console.log(result); // Output: undefined
console.log(emptyArray); // Output: []</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`shift\`</h2>
    <p>The same functionality of \`shift\` can be achieved using a \`for\` loop. This approach manually removes the first element and shifts the remaining elements down by one index.</p>
    <pre><code class="language-javascript" codeHighlight>function shiftArray(array) {
        if (array.length === 0) return undefined;
        let firstElement = array[0];
        for (let i = 0; i < array.length - 1; i++) {
            array[i] = array[i + 1];
        }
        array.length = array.length - 1; // Remove the last element
        return firstElement;
    }

    let fruits = ["apple", "banana", "cherry"];
    let firstFruit = shiftArray(fruits);
    console.log(firstFruit); // Output: "apple"
    console.log(fruits); // Output: ["banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`shift\`</h2>
    <p>While \`shift\` is simple and effective, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>It has a time complexity of **O(n)** because it requires shifting all elements down by one index.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.shift();
console.log(fruits); // Output: ["banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`shift\` with Other Methods</h2>
    <p>\`shift\` can be combined with other array methods like \`push\` to implement a queue data structure. For example, you can add elements to the end of the array and remove them from the front.</p>
    <pre><code class="language-javascript" codeHighlight>let queue = [];
queue.push("apple");
queue.push("banana");
queue.push("cherry");
let firstElement = queue.shift();
console.log(firstElement); // Output: "apple"
console.log(queue); // Output: ["banana", "cherry"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`shift\` method is a simple and powerful tool for removing the first element from an array. It is particularly useful for implementing queue-like behavior (FIFO). Whether you're working with strings, numbers, or objects, \`shift\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `unshift`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`unshift\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`unshift\` method in JavaScript is used to **add one or more elements to the beginning of an array**. It modifies the original array by shifting existing elements to higher indices and returns the new length of the array. This method is useful for working with arrays as stacks or queues.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`unshift\`</h2>
    <p>The \`unshift\` method adds one or more elements to the beginning of the array and returns the new length of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["banana", "cherry"];
let newLength = fruits.unshift("apple");
console.log(newLength); // Output: 3
console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Adding Multiple Elements</h2>
    <p>You can add multiple elements to the beginning of the array by passing them as additional arguments to \`unshift\`.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["cherry"];
let newLength = fruits.unshift("apple", "banana");
console.log(newLength); // Output: 3
console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">3. Adding Elements to an Array of Numbers</h2>
    <p>The \`unshift\` method works with arrays of any type, including numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [20, 30];
let newLength = numbers.unshift(10);
console.log(newLength); // Output: 3
console.log(numbers); // Output: [10, 20, 30]</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`unshift\`</h2>
    <p>The same functionality of \`unshift\` can be achieved using a \`for\` loop. This approach manually shifts existing elements to higher indices and adds new elements to the beginning of the array.</p>
    <pre><code class="language-javascript" codeHighlight>function unshiftArray(array, ...elements) {
        for (let i = array.length - 1; i >= 0; i--) {
            array[i + elements.length] = array[i];
        }
        for (let i = 0; i < elements.length; i++) {
            array[i] = elements[i];
        }
        return array.length;
    }

    let fruits = ["banana", "cherry"];
    let newLength = unshiftArray(fruits, "apple");
    console.log(newLength); // Output: 3
    console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`unshift\`</h2>
    <p>While \`unshift\` is simple and effective, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>It has a time complexity of **O(n)** because it requires shifting all existing elements to higher indices.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["banana", "cherry"];
let newLength = fruits.unshift("apple");
console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`unshift\` with Other Methods</h2>
    <p>\`unshift\` can be combined with other array methods like \`pop\` to implement a stack data structure. For example, you can add elements to the beginning of the array and remove them from the end.</p>
    <pre><code class="language-javascript" codeHighlight>let stack = [];
stack.unshift("apple");
stack.unshift("banana");
stack.unshift("cherry");
let lastElement = stack.pop();
console.log(lastElement); // Output: "apple"
console.log(stack); // Output: ["cherry", "banana"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`unshift\` method is a simple and powerful tool for adding elements to the beginning of an array. It is particularly useful for implementing stack-like behavior (LIFO). Whether you're working with strings, numbers, or objects, \`unshift\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `pop`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`pop\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`pop\` method in JavaScript is used to **remove the last element** from an array and return that element. This method modifies the original array by removing the last element and reducing the array's length by one. It is useful for working with arrays as stacks (LIFO - Last In, First Out).
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`pop\`</h2>
    <p>The \`pop\` method removes the last element from the array and returns it. If the array is empty, it returns \`undefined\`.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: "cherry"
console.log(fruits); // Output: ["apple", "banana"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Removing the Last Element from an Array of Numbers</h2>
    <p>The \`pop\` method works with arrays of any type, including numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30];
let lastNumber = numbers.pop();
console.log(lastNumber); // Output: 30
console.log(numbers); // Output: [10, 20]</code></pre>
    
    <h2 style="color: #2980b9;">3. Handling Empty Arrays</h2>
    <p>If the array is empty, \`pop\` returns \`undefined\` and does not modify the array.</p>
    <pre><code class="language-javascript" codeHighlight>let emptyArray = [];
let result = emptyArray.pop();
console.log(result); // Output: undefined
console.log(emptyArray); // Output: []</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`pop\`</h2>
    <p>The same functionality of \`pop\` can be achieved using a \`for\` loop. This approach manually removes the last element and reduces the array's length by one.</p>
    <pre><code class="language-javascript" codeHighlight>function popArray(array) {
        if (array.length === 0) return undefined;
        let lastElement = array[array.length - 1];
        array.length = array.length - 1; // Remove the last element
        return lastElement;
    }

    let fruits = ["apple", "banana", "cherry"];
    let lastFruit = popArray(fruits);
    console.log(lastFruit); // Output: "cherry"
    console.log(fruits); // Output: ["apple", "banana"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`pop\`</h2>
    <p>While \`pop\` is simple and effective, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>It only removes one element at a time, so it is not suitable for bulk operations.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let lastFruit = fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`pop\` with Other Methods</h2>
    <p>\`pop\` can be combined with other array methods like \`push\` to implement a stack data structure. For example, you can add elements to the end of the array and remove them from the end.</p>
    <pre><code class="language-javascript" codeHighlight>let stack = [];
stack.push("apple");
stack.push("banana");
stack.push("cherry");
let lastElement = stack.pop();
console.log(lastElement); // Output: "cherry"
console.log(stack); // Output: ["apple", "banana"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`pop\` method is a simple and powerful tool for removing the last element from an array. It is particularly useful for implementing stack-like behavior (LIFO). Whether you're working with strings, numbers, or objects, \`pop\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `push`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`push\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`push\` method in JavaScript is used to **add one or more elements to the end of an array**. It modifies the original array by appending the new elements and returns the new length of the array. This method is useful for dynamically growing arrays and working with stacks or queues.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`push\`</h2>
    <p>The \`push\` method adds one or more elements to the end of the array and returns the new length of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let newLength = fruits.push("cherry");
console.log(newLength); // Output: 3
console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">2. Adding Multiple Elements</h2>
    <p>You can add multiple elements to the end of the array by passing them as additional arguments to \`push\`.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple"];
let newLength = fruits.push("banana", "cherry");
console.log(newLength); // Output: 3
console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">3. Adding Elements to an Array of Numbers</h2>
    <p>The \`push\` method works with arrays of any type, including numbers.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20];
let newLength = numbers.push(30);
console.log(newLength); // Output: 3
console.log(numbers); // Output: [10, 20, 30]</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`push\`</h2>
    <p>The same functionality of \`push\` can be achieved using a \`for\` loop. This approach manually appends elements to the end of the array.</p>
    <pre><code class="language-javascript" codeHighlight>function pushArray(array, ...elements) {
        for (let element of elements) {
            array[array.length] = element;
        }
        return array.length;
    }

    let fruits = ["apple", "banana"];
    let newLength = pushArray(fruits, "cherry");
    console.log(newLength); // Output: 3
    console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`push\`</h2>
    <p>While \`push\` is simple and effective, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>It only adds elements to the end of the array, so it is not suitable for inserting elements at specific positions.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana"];
let newLength = fruits.push("cherry");
console.log(fruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`push\` with Other Methods</h2>
    <p>\`push\` can be combined with other array methods like \`pop\` to implement a stack data structure. For example, you can add elements to the end of the array and remove them from the end.</p>
    <pre><code class="language-javascript" codeHighlight>let stack = [];
stack.push("apple");
stack.push("banana");
stack.push("cherry");
let lastElement = stack.pop();
console.log(lastElement); // Output: "cherry"
console.log(stack); // Output: ["apple", "banana"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`push\` method is a simple and powerful tool for adding elements to the end of an array. It is particularly useful for dynamically growing arrays and implementing stack-like behavior (LIFO). Whether you're working with strings, numbers, or objects, \`push\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `at`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`at()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`at()\` method in JavaScript is used to **access an element at a specific index** in an array. It allows you to use both positive and negative indices, where negative indices count backward from the end of the array. This method provides a more readable and flexible way to access array elements compared to traditional bracket notation.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`at()\`</h2>
    <p>The \`at()\` method takes an integer index as an argument and returns the element at that index. If the index is negative, it counts backward from the end of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.at(0);
console.log(firstFruit); // Output: "apple"

let lastFruit = fruits.at(-1);
console.log(lastFruit); // Output: "cherry"</code></pre>
    
    <h2 style="color: #2980b9;">2. Accessing Elements with Positive Indices</h2>
    <p>Positive indices work the same way as traditional bracket notation, where \`0\` is the first element, \`1\` is the second, and so on.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40];
let secondNumber = numbers.at(1);
console.log(secondNumber); // Output: 20</code></pre>
    
    <h2 style="color: #2980b9;">3. Accessing Elements with Negative Indices</h2>
    <p>Negative indices count backward from the end of the array. For example, \`-1\` refers to the last element, \`-2\` refers to the second-to-last element, and so on.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "date"];
let secondLastFruit = fruits.at(-2);
console.log(secondLastFruit); // Output: "cherry"</code></pre>
    
    <h2 style="color: #2980b9;">4. Handling Out-of-Bounds Indices</h2>
    <p>If the index is out of bounds (either too large or too small), \`at()\` returns \`undefined\` without throwing an error.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let outOfBounds = fruits.at(5);
console.log(outOfBounds); // Output: undefined</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`at()\`</h2>
    <p>The same functionality of \`at()\` can be achieved using a combination of conditional checks and traditional bracket notation.</p>
    <pre><code class="language-javascript" codeHighlight>function atArray(array, index) {
        if (index < 0) {
            index = array.length + index;
        }
        return array[index];
    }

    let fruits = ["apple", "banana", "cherry"];
    let lastFruit = atArray(fruits, -1);
    console.log(lastFruit); // Output: "cherry"</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`at()\`</h2>
    <p>While \`at()\` is simple and effective, it has some limitations:
        <ul>
            <li>It is not supported in very old browsers (e.g., Internet Explorer).</li>
            <li>It does not modify the array, so it is only useful for accessing elements, not for updating them.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let firstFruit = fruits.at(0);
console.log(firstFruit); // Output: "apple"</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`at()\` with Other Methods</h2>
    <p>\`at()\` can be combined with other array methods like \`map\` or \`filter\` to access specific elements during transformations.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40];
let lastNumberDoubled = numbers.at(-1) * 2;
console.log(lastNumberDoubled); // Output: 80</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`at()\` method is a simple and powerful tool for accessing elements in an array using both positive and negative indices. It is particularly useful for improving code readability and flexibility when working with arrays. Whether you're accessing elements from the start or the end of an array, \`at()\` provides a clean and efficient approach to element retrieval.</p>
</div>`
},
{
    articleTitle: `keys`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`keys()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`keys()\` method in JavaScript is used to **create an iterator** that contains the keys (indices) of an array. It returns an \`Array Iterator\` object that can be used to loop through the array's indices. This method is particularly useful when you need to work with the indices of an array rather than its values.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`keys()\`</h2>
    <p>The \`keys()\` method returns an iterator object containing the keys (indices) of the array. You can use this iterator to loop through the indices using a \`for...of\` loop or convert it to an array using \`Array.from()\` or the spread operator (\`...\`).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let iterator = fruits.keys();

for (let key of iterator) {
    console.log(key); // Output: 0, 1, 2
}</code></pre>
    
    <h2 style="color: #2980b9;">2. Converting Iterator to an Array</h2>
    <p>You can convert the iterator returned by \`keys()\` into an array using \`Array.from()\` or the spread operator (\`...\`).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let keysArray = Array.from(fruits.keys());
console.log(keysArray); // Output: [0, 1, 2]

// Alternatively, using the spread operator
let keysArray2 = [...fruits.keys()];
console.log(keysArray2); // Output: [0, 1, 2]</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`keys()\` with Sparse Arrays</h2>
    <p>The \`keys()\` method works with sparse arrays (arrays with empty slots). It iterates over all indices, including those with \`undefined\` values.</p>
    <pre><code class="language-javascript" codeHighlight>let sparseArray = ["apple", , "cherry"];
let iterator = sparseArray.keys();

for (let key of iterator) {
    console.log(key); // Output: 0, 1, 2
}</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`keys()\`</h2>
    <p>The same functionality of \`keys()\` can be achieved using a \`for\` loop to manually create an array of indices.</p>
    <pre><code class="language-javascript" codeHighlight>function getKeys(array) {
        let keys = [];
        for (let i = 0; i < array.length; i++) {
            keys.push(i);
        }
        return keys;
    }

    let fruits = ["apple", "banana", "cherry"];
    let keysArray = getKeys(fruits);
    console.log(keysArray); // Output: [0, 1, 2]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`keys()\`</h2>
    <p>While \`keys()\` is useful, it has some limitations:
        <ul>
            <li>It only works with arrays and array-like objects (e.g., strings, NodeList).</li>
            <li>It does not provide the values of the array, only the indices.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let iterator = fruits.keys();
console.log([...iterator]); // Output: [0, 1, 2]</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`keys()\` with Other Methods</h2>
    <p>\`keys()\` can be combined with other array methods like \`map\` or \`forEach\` to perform operations based on the indices of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let indexedFruits = [...fruits.keys()].map(key => \`\${key}: \${fruits[key]}\`);
console.log(indexedFruits); // Output: ["0: apple", "1: banana", "2: cherry"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`keys()\` method is a simple and powerful tool for working with the indices of an array. It is particularly useful for iterating over array indices or converting them into an array. Whether you're working with dense or sparse arrays, \`keys()\` provides a clean and efficient approach to index-based operations.</p>
</div>`

},
{
    articleTitle: `values`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`values()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`values()\` method in JavaScript is used to **create an iterator** that contains the values of an array. It returns an \`Array Iterator\` object that can be used to loop through the array's values. This method is particularly useful when you need to work with the values of an array rather than its indices.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`values()\`</h2>
    <p>The \`values()\` method returns an iterator object containing the values of the array. You can use this iterator to loop through the values using a \`for...of\` loop or convert it to an array using \`Array.from()\` or the spread operator (\`...\`).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let iterator = fruits.values();

for (let value of iterator) {
    console.log(value); // Output: "apple", "banana", "cherry"
}</code></pre>
    
    <h2 style="color: #2980b9;">2. Converting Iterator to an Array</h2>
    <p>You can convert the iterator returned by \`values()\` into an array using \`Array.from()\` or the spread operator (\`...\`).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let valuesArray = Array.from(fruits.values());
console.log(valuesArray); // Output: ["apple", "banana", "cherry"]

// Alternatively, using the spread operator
let valuesArray2 = [...fruits.values()];
console.log(valuesArray2); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`values()\` with Sparse Arrays</h2>
    <p>The \`values()\` method works with sparse arrays (arrays with empty slots). It iterates over all values, including \`undefined\` for empty slots.</p>
    <pre><code class="language-javascript" codeHighlight>let sparseArray = ["apple", , "cherry"];
let iterator = sparseArray.values();

for (let value of iterator) {
    console.log(value); // Output: "apple", undefined, "cherry"
}</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`values()\`</h2>
    <p>The same functionality of \`values()\` can be achieved using a \`for\` loop to manually create an array of values.</p>
    <pre><code class="language-javascript" codeHighlight>function getValues(array) {
        let values = [];
        for (let i = 0; i < array.length; i++) {
            values.push(array[i]);
        }
        return values;
    }

    let fruits = ["apple", "banana", "cherry"];
    let valuesArray = getValues(fruits);
    console.log(valuesArray); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`values()\`</h2>
    <p>While \`values()\` is useful, it has some limitations:
        <ul>
            <li>It only works with arrays and array-like objects (e.g., strings, NodeList).</li>
            <li>It does not provide the indices of the array, only the values.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let iterator = fruits.values();
console.log([...iterator]); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`values()\` with Other Methods</h2>
    <p>\`values()\` can be combined with other array methods like \`map\` or \`forEach\` to perform operations based on the values of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let upperCaseFruits = [...fruits.values()].map(value => value.toUpperCase());
console.log(upperCaseFruits); // Output: ["APPLE", "BANANA", "CHERRY"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`values()\` method is a simple and powerful tool for working with the values of an array. It is particularly useful for iterating over array values or converting them into an array. Whether you're working with dense or sparse arrays, \`values()\` provides a clean and efficient approach to value-based operations.</p>
</div>`
},
{
    articleTitle: `entries`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`entries()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`entries()\` method in JavaScript is used to **create an iterator** that contains key-value pairs for each index in an array. Each key-value pair is represented as an array \`[index, value]\`. This method is particularly useful when you need to work with both the indices and values of an array simultaneously.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`entries()\`</h2>
    <p>The \`entries()\` method returns an iterator object containing key-value pairs for each index in the array. You can use this iterator to loop through the pairs using a \`for...of\` loop or convert it to an array using \`Array.from()\` or the spread operator (\`...\`).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let iterator = fruits.entries();

for (let [index, value] of iterator) {
    console.log(\`Index: \${index}, Value: \${value}\`);
}
// Output:
// Index: 0, Value: apple
// Index: 1, Value: banana
// Index: 2, Value: cherry</code></pre>
    
    <h2 style="color: #2980b9;">2. Converting Iterator to an Array</h2>
    <p>You can convert the iterator returned by \`entries()\` into an array using \`Array.from()\` or the spread operator (\`...\`).</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let entriesArray = Array.from(fruits.entries());
console.log(entriesArray);
// Output: [[0, "apple"], [1, "banana"], [2, "cherry"]]

// Alternatively, using the spread operator
let entriesArray2 = [...fruits.entries()];
console.log(entriesArray2);
// Output: [[0, "apple"], [1, "banana"], [2, "cherry"]]</code></pre>
    
    <h2 style="color: #2980b9;">3. Using \`entries()\` with Sparse Arrays</h2>
    <p>The \`entries()\` method works with sparse arrays (arrays with empty slots). It iterates over all indices, including those with \`undefined\` values.</p>
    <pre><code class="language-javascript" codeHighlight>let sparseArray = ["apple", , "cherry"];
let iterator = sparseArray.entries();

for (let [index, value] of iterator) {
    console.log(\`Index: \${index}, Value: \${value}\`);
}
// Output:
// Index: 0, Value: apple
// Index: 1, Value: undefined
// Index: 2, Value: cherry</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`entries()\`</h2>
    <p>The same functionality of \`entries()\` can be achieved using a \`for\` loop to manually create an array of key-value pairs.</p>
    <pre><code class="language-javascript" codeHighlight>function getEntries(array) {
        let entries = [];
        for (let i = 0; i < array.length; i++) {
            entries.push([i, array[i]]);
        }
        return entries;
    }

    let fruits = ["apple", "banana", "cherry"];
    let entriesArray = getEntries(fruits);
    console.log(entriesArray);
    // Output: [[0, "apple"], [1, "banana"], [2, "cherry"]]</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`entries()\`</h2>
    <p>While \`entries()\` is useful, it has some limitations:
        <ul>
            <li>It only works with arrays and array-like objects (e.g., strings, NodeList).</li>
            <li>It does not modify the original array, so it is only useful for accessing key-value pairs.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let iterator = fruits.entries();
console.log([...iterator]);
// Output: [[0, "apple"], [1, "banana"], [2, "cherry"]]</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`entries()\` with Other Methods</h2>
    <p>\`entries()\` can be combined with other array methods like \`map\` or \`forEach\` to perform operations based on the key-value pairs of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
let indexedFruits = [...fruits.entries()].map(([index, value]) => \`\${index}: \${value}\`);
console.log(indexedFruits);
// Output: ["0: apple", "1: banana", "2: cherry"]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`entries()\` method is a simple and powerful tool for working with the key-value pairs of an array. It is particularly useful for iterating over both indices and values simultaneously or converting them into an array. Whether you're working with dense or sparse arrays, \`entries()\` provides a clean and efficient approach to key-value pair operations.</p>
</div>`
},
{
    articleTitle: `fill`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`fill()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`fill()\` method in JavaScript is used to **fill all or part of an array** with a static value. It modifies the original array by replacing elements within a specified range (start and end indices) with the given value. This method is useful for initializing or resetting array elements.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`fill()\`</h2>
    <p>The \`fill()\` method takes a value as its first argument and optionally a start and end index. It fills the array with the specified value from the start index (inclusive) to the end index (exclusive). If no start or end index is provided, it fills the entire array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.fill(0);
console.log(numbers); // Output: [0, 0, 0, 0, 0]</code></pre>
    
    <h2 style="color: #2980b9;">2. Filling Part of an Array</h2>
    <p>You can specify a start and end index to fill only a portion of the array with the given value.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, 1, 3);
console.log(numbers); // Output: [1, 0, 0, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">3. Using Negative Indices</h2>
    <p>Negative indices can be used to specify positions relative to the end of the array. For example, \`-1\` refers to the last element, \`-2\` refers to the second-to-last element, and so on.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.fill(0, -3, -1);
console.log(numbers); // Output: [1, 2, 0, 0, 5]</code></pre>
    
    <h2 style="color: #2980b9;">4. Filling with Different Data Types</h2>
    <p>The \`fill()\` method can be used with any data type, including strings, objects, or even other arrays.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
fruits.fill("grape", 1, 3);
console.log(fruits); // Output: ["apple", "grape", "grape"]

let objects = [{}, {}, {}];
objects.fill({ key: "value" });
console.log(objects); // Output: [{ key: "value" }, { key: "value" }, { key: "value" }]</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`fill()\`</h2>
    <p>The same functionality of \`fill()\` can be achieved using a \`for\` loop to manually replace elements within a specified range.</p>
    <pre><code class="language-javascript" codeHighlight>function fillArray(array, value, start = 0, end = array.length) {
        for (let i = start; i < end; i++) {
            array[i] = value;
        }
        return array;
    }

    let numbers = [1, 2, 3, 4, 5];
    fillArray(numbers, 0, 1, 3);
    console.log(numbers); // Output: [1, 0, 0, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`fill()\`</h2>
    <p>While \`fill()\` is simple and effective, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>It does not work well with nested arrays or objects, as it replaces references rather than creating new objects.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [[1], [2], [3]];
nestedArray.fill([0]);
console.log(nestedArray); // Output: [[0], [0], [0]]</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`fill()\` with Other Methods</h2>
    <p>\`fill()\` can be combined with other array methods like \`map\` or \`filter\` to perform more complex operations. For example, you can fill an array and then map the filled values.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = new Array(5).fill(0).map((value, index) => index + 1);
console.log(numbers); // Output: [1, 2, 3, 4, 5]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`fill()\` method is a simple and powerful tool for initializing or resetting array elements with a static value. It is particularly useful for creating arrays with default values or replacing elements within a specific range. Whether you're working with numbers, strings, or objects, \`fill()\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `copyWithin`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`copyWithin()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`copyWithin()\` method in JavaScript is used to **copy a sequence of elements within the same array**. It copies elements from one part of the array to another, overwriting the existing elements. This method modifies the original array and is useful for rearranging or duplicating elements without changing the array's length.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`copyWithin()\`</h2>
    <p>The \`copyWithin()\` method takes three arguments: the **target index** (where to copy the elements), the **start index** (where to start copying from), and the **end index** (where to stop copying, exclusive). If the end index is omitted, it copies until the end of the array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 3);
console.log(numbers); // Output: [4, 5, 3, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">2. Copying Within a Specific Range</h2>
    <p>You can specify a start and end index to copy only a portion of the array to the target position.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 2, 4);
console.log(numbers); // Output: [3, 4, 3, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">3. Using Negative Indices</h2>
    <p>Negative indices can be used to specify positions relative to the end of the array. For example, \`-1\` refers to the last element, \`-2\` refers to the second-to-last element, and so on.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(-2, 0, 2);
console.log(numbers); // Output: [1, 2, 3, 1, 2]</code></pre>
    
    <h2 style="color: #2980b9;">4. Copying Overlapping Ranges</h2>
    <p>The \`copyWithin()\` method works even if the source and target ranges overlap. It handles the copying in a way that ensures the correct elements are copied.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(1, 0, 3);
console.log(numbers); // Output: [1, 1, 2, 3, 5]</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`copyWithin()\`</h2>
    <p>The same functionality of \`copyWithin()\` can be achieved using a \`for\` loop to manually copy elements within the array.</p>
    <pre><code class="language-javascript" codeHighlight>function copyWithinArray(array, target, start, end = array.length) {
        let copiedElements = array.slice(start, end);
        for (let i = 0; i < copiedElements.length; i++) {
            array[target + i] = copiedElements[i];
        }
        return array;
    }

    let numbers = [1, 2, 3, 4, 5];
    copyWithinArray(numbers, 0, 3);
    console.log(numbers); // Output: [4, 5, 3, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`copyWithin()\`</h2>
    <p>While \`copyWithin()\` is powerful, it has some limitations:
        <ul>
            <li>It modifies the original array, which may not always be desirable.</li>
            <li>It does not work well with nested arrays or objects, as it copies references rather than creating new objects.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [[1], [2], [3], [4], [5]];
nestedArray.copyWithin(0, 3);
console.log(nestedArray); // Output: [[4], [5], [3], [4], [5]]</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`copyWithin()\` with Other Methods</h2>
    <p>\`copyWithin()\` can be combined with other array methods like \`map\` or \`filter\` to perform more complex operations. For example, you can copy elements and then transform them.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(0, 2, 4);
let doubled = numbers.map(value => value * 2);
console.log(doubled); // Output: [6, 8, 6, 8, 10]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`copyWithin()\` method is a simple and powerful tool for copying elements within the same array. It is particularly useful for rearranging or duplicating elements without changing the array's length. Whether you're working with numbers, strings, or objects, \`copyWithin()\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `flat`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`flat()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`flat()\` method in JavaScript is used to **flatten a nested array** by reducing the depth of nesting. It creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. By default, it flattens the array by one level.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`flat()\`</h2>
    <p>The \`flat()\` method flattens the array by one level by default. It removes one level of nesting from the array.</p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]</code></pre>
    
    <h2 style="color: #2980b9;">2. Flattening to a Specific Depth</h2>
    <p>You can specify the depth of flattening by passing an argument to \`flat()\`. For example, passing \`2\` flattens the array up to two levels deep.</p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [1, [2, 3], [4, [5, 6]]];
let fullyFlattenedArray = nestedArray.flat(2);
console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4, 5, 6]</code></pre>
    
    <h2 style="color: #2980b9;">3. Flattening All Levels</h2>
    <p>To flatten an array completely (regardless of its depth), you can pass \`Infinity\` as the depth argument.</p>
    <pre><code class="language-javascript" codeHighlight>let deeplyNestedArray = [1, [2, [3, [4, [5]]]];
let fullyFlattenedArray = deeplyNestedArray.flat(Infinity);
console.log(fullyFlattenedArray); // Output: [1, 2, 3, 4, 5]</code></pre>
    
    <h2 style="color: #2980b9;">4. Handling Sparse Arrays</h2>
    <p>The \`flat()\` method removes empty slots (holes) in the array, effectively compacting the array.</p>
    <pre><code class="language-javascript" codeHighlight>let sparseArray = [1, , 3, [4, , 6]];
let flattenedArray = sparseArray.flat();
console.log(flattenedArray); // Output: [1, 3, 4, 6]</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`flat()\`</h2>
    <p>The same functionality of \`flat()\` can be achieved using a recursive function to manually flatten the array.</p>
    <pre><code class="language-javascript" codeHighlight>function flattenArray(array, depth = 1) {
        let result = [];
        for (let element of array) {
            if (Array.isArray(element) && depth > 0) {
                result.push(...flattenArray(element, depth - 1));
            } else {
                result.push(element);
            }
        }
        return result;
    }

    let nestedArray = [1, [2, 3], [4, [5, 6]]];
    let flattenedArray = flattenArray(nestedArray, 2);
    console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`flat()\`</h2>
    <p>While \`flat()\` is powerful, it has some limitations:
        <ul>
            <li>It does not modify the original array but returns a new flattened array.</li>
            <li>It only works with arrays and does not handle other iterable objects.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat();
console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`flat()\` with Other Methods</h2>
    <p>\`flat()\` can be combined with other array methods like \`map\` or \`filter\` to perform more complex operations. For example, you can flatten an array and then filter the flattened result.</p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedAndFiltered = nestedArray.flat(2).filter(value => value > 3);
console.log(flattenedAndFiltered); // Output: [4, 5, 6]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`flat()\` method is a simple and powerful tool for flattening nested arrays in JavaScript. It is particularly useful for reducing the depth of nested arrays and handling sparse arrays. Whether you're working with shallow or deeply nested arrays, \`flat()\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
    articleTitle: `flatMap`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`flatMap()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`flatMap()\` method in JavaScript is used to **map each element of an array to a new array and then flatten the result by one level**. It is essentially a combination of \`map()\` followed by \`flat()\`. This method is useful for transforming and flattening arrays in a single step.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`flatMap()\`</h2>
    <p>The \`flatMap()\` method takes a callback function as an argument. The callback function is applied to each element of the array, and the returned values are flattened into a new array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let doubledAndFlattened = numbers.flatMap(num => [num * 2]);
console.log(doubledAndFlattened); // Output: [2, 4, 6]</code></pre>
    
    <h2 style="color: #2980b9;">2. Flattening Nested Arrays</h2>
    <p>The \`flatMap()\` method automatically flattens the result by one level. This is useful when the callback function returns arrays.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let mappedAndFlattened = numbers.flatMap(num => [num, num * 2]);
console.log(mappedAndFlattened); // Output: [1, 2, 2, 4, 3, 6]</code></pre>
    
    <h2 style="color: #2980b9;">3. Combining \`flatMap()\` with Other Methods</h2>
    <p>\`flatMap()\` can be combined with other array methods like \`filter\` to perform more complex operations. For example, you can map and flatten an array while filtering out certain values.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4];
let result = numbers.flatMap(num => num % 2 === 0 ? [num * 2] : []);
console.log(result); // Output: [4, 8]</code></pre>
    
    <h2 style="color: #2980b9;">4. Handling Sparse Arrays</h2>
    <p>The \`flatMap()\` method skips empty slots (holes) in the array, effectively compacting the array.</p>
    <pre><code class="language-javascript" codeHighlight>let sparseArray = [1, , 3];
let result = sparseArray.flatMap(num => [num * 2]);
console.log(result); // Output: [2, 6]</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`flatMap()\`</h2>
    <p>The same functionality of \`flatMap()\` can be achieved using a combination of \`map()\` and \`flat()\` or by manually iterating through the array.</p>
    <pre><code class="language-javascript" codeHighlight>function flatMapArray(array, callback) {
        let result = [];
        for (let element of array) {
            let mapped = callback(element);
            if (Array.isArray(mapped)) {
                result.push(...mapped);
            } else {
                result.push(mapped);
            }
        }
        return result;
    }

    let numbers = [1, 2, 3];
    let doubledAndFlattened = flatMapArray(numbers, num => [num * 2]);
    console.log(doubledAndFlattened); // Output: [2, 4, 6]</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`flatMap()\`</h2>
    <p>While \`flatMap()\` is powerful, it has some limitations:
        <ul>
            <li>It only flattens the result by one level. For deeper flattening, you need to use \`flat()\` separately.</li>
            <li>It does not modify the original array but returns a new array.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let result = numbers.flatMap(num => [[num * 2]]);
console.log(result); // Output: [[2], [4], [6]] (only one level flattened)</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`flatMap()\` with Nested Arrays</h2>
    <p>If the callback function returns nested arrays, \`flatMap()\` will only flatten the result by one level. For deeper nesting, you need to use \`flat()\` separately.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3];
let result = numbers.flatMap(num => [[num * 2]]).flat();
console.log(result); // Output: [2, 4, 6]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`flatMap()\` method is a simple and powerful tool for mapping and flattening arrays in a single step. It is particularly useful for transforming arrays and handling sparse arrays. Whether you're working with simple or nested arrays, \`flatMap()\` provides a clean and efficient approach to array manipulation.</p>
</div>`
},
{
   articleTitle: `isArray`,
   content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`Array.isArray()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`Array.isArray()\` method in JavaScript is used to **check if a given value is an array**. It returns \`true\` if the value is an array, and \`false\` otherwise. This method is particularly useful for type-checking and ensuring that a value is an array before performing array-specific operations.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`Array.isArray()\`</h2>
    <p>The \`Array.isArray()\` method takes a single argument and returns \`true\` if the argument is an array, and \`false\` otherwise.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
console.log(Array.isArray(fruits)); // Output: true

let notAnArray = "This is a string";
console.log(Array.isArray(notAnArray)); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">2. Checking Array-Like Objects</h2>
    <p>\`Array.isArray()\` only returns \`true\` for actual arrays, not for array-like objects (e.g., \`arguments\`, NodeList, or objects with numeric keys).</p>
    <pre><code class="language-javascript" codeHighlight>let arrayLike = { 0: "apple", 1: "banana", length: 2 };
console.log(Array.isArray(arrayLike)); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">3. Handling Nested Arrays</h2>
    <p>\`Array.isArray()\` works correctly with nested arrays, returning \`true\` for any array, regardless of its depth.</p>
    <pre><code class="language-javascript" codeHighlight>let nestedArray = [1, [2, 3], [4, [5, 6]]];
console.log(Array.isArray(nestedArray)); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">4. Imperative Approach to Achieve \`Array.isArray()\`</h2>
    <p>The same functionality of \`Array.isArray()\` can be achieved using the \`Object.prototype.toString\` method, which returns a string representation of the object's type.</p>
    <pre><code class="language-javascript" codeHighlight>function isArray(value) {
        return Object.prototype.toString.call(value) === "[object Array]";
    }

    let fruits = ["apple", "banana", "cherry"];
    console.log(isArray(fruits)); // Output: true

    let notAnArray = "This is a string";
    console.log(isArray(notAnArray)); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">5. Limitations of \`Array.isArray()\`</h2>
    <p>While \`Array.isArray()\` is simple and effective, it has some limitations:
        <ul>
            <li>It only works with actual arrays and does not recognize array-like objects as arrays.</li>
            <li>It does not provide information about the contents or structure of the array.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let arrayLike = { 0: "apple", 1: "banana", length: 2 };
console.log(Array.isArray(arrayLike)); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">6. Combining \`Array.isArray()\` with Other Methods</h2>
    <p>\`Array.isArray()\` can be combined with other array methods or logic to ensure that operations are performed only on arrays.</p>
    <pre><code class="language-javascript" codeHighlight>function processArray(value) {
        if (Array.isArray(value)) {
            return value.map(item => item.toUpperCase());
        } else {
            return "Not an array";
        }
    }

    let fruits = ["apple", "banana", "cherry"];
    console.log(processArray(fruits)); // Output: ["APPLE", "BANANA", "CHERRY"]

    let notAnArray = "This is a string";
    console.log(processArray(notAnArray)); // Output: "Not an array"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`Array.isArray()\` method is a simple and powerful tool for checking if a value is an array. It is particularly useful for type-checking and ensuring that array-specific operations are performed safely. Whether you're working with simple or nested arrays, \`Array.isArray()\` provides a clean and efficient approach to array validation.</p>
</div>` 
},
{
    articleTitle: `iterator`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Iterators in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        An **iterator** in JavaScript is an object that provides a way to access elements of a collection (like an array) one at a time. It follows the **iterator protocol**, which requires the object to implement a \`next()\` method. The \`next()\` method returns an object with two properties: \`value\` (the current element) and \`done\` (a boolean indicating whether the iteration is complete).
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of Iterators</h2>
    <p>To create an iterator, you define an object with a \`next()\` method. The \`next()\` method returns an object with \`value\` and \`done\` properties.</p>
    <pre><code class="language-javascript" codeHighlight>let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();

console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
console.log(iterator.next()); // Output: { value: undefined, done: true }</code></pre>
    
    <h2 style="color: #2980b9;">2. Creating a Custom Iterator</h2>
    <p>You can create a custom iterator for any object by defining the \`Symbol.iterator\` method. This method should return an object with a \`next()\` method.</p>
    <pre><code class="language-javascript" codeHighlight>let customIterable = {
        values: [10, 20, 30],
        [Symbol.iterator]() {
            let index = 0;
            return {
                next: () => {
                    if (index < this.values.length) {
                        return { value: this.values[index++], done: false };
                    } else {
                        return { value: undefined, done: true };
                    }
                }
            };
        }
    };

    for (let value of customIterable) {
        console.log(value); // Output: 10, 20, 30
    }</code></pre>
    
    <h2 style="color: #2980b9;">3. Using Iterators with \`for...of\`</h2>
    <p>The \`for...of\` loop automatically uses the iterator of an iterable object (like an array) to loop through its elements.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit); // Output: "apple", "banana", "cherry"
}</code></pre>
    
    <h2 style="color: #2980b9;">4. Iterators with Generators</h2>
    <p>Generators are a special kind of function that can be used to create iterators more easily. They use the \`function*\` syntax and the \`yield\` keyword to produce values.</p>
    <pre><code class="language-javascript" codeHighlight>function* generateNumbers() {
        yield 1;
        yield 2;
        yield 3;
    }

    let iterator = generateNumbers();
    console.log(iterator.next()); // Output: { value: 1, done: false }
    console.log(iterator.next()); // Output: { value: 2, done: false }
    console.log(iterator.next()); // Output: { value: 3, done: false }
    console.log(iterator.next()); // Output: { value: undefined, done: true }</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve Iteration</h2>
    <p>You can manually iterate through an array using a \`for\` loop or the \`next()\` method of an iterator.</p>
    <pre><code class="language-javascript" codeHighlight>let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();

let result = iterator.next();
while (!result.done) {
    console.log(result.value); // Output: 1, 2, 3
    result = iterator.next();
}</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of Iterators</h2>
    <p>While iterators are powerful, they have some limitations:
        <ul>
            <li>They are single-use. Once an iterator is exhausted, it cannot be reused.</li>
            <li>They do not provide random access to elements, so you cannot jump to a specific element directly.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();

while (!iterator.next().done) {
    console.log(iterator.next().value); // Output: 1, 3 (skips 2)
}</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining Iterators with Other Methods</h2>
    <p>Iterators can be combined with other JavaScript features like \`Array.from()\` or the spread operator (\`...\`) to convert them into arrays or perform operations on their values.</p>
    <pre><code class="language-javascript" codeHighlight>let array = [1, 2, 3];
let iterator = array[Symbol.iterator]();

let newArray = Array.from(iterator);
console.log(newArray); // Output: [1, 2, 3]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Iterators are a fundamental concept in JavaScript that provide a way to access elements of a collection one at a time. They are used by built-in constructs like \`for...of\` loops and can be customized for any object. Whether you're working with arrays, custom objects, or generators, iterators provide a clean and efficient approach to iteration.</p>
</div>`
},
{
    articleTitle: `findLastIndex`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`findLastIndex()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`findLastIndex()\` method in JavaScript is used to **find the index of the last element in an array that satisfies a specified condition**. It works similarly to the \`findIndex()\` method but searches the array from the end to the beginning. If no element satisfies the condition, it returns \`-1\`.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`findLastIndex()\`</h2>
    <p>The \`findLastIndex()\` method takes a callback function as an argument. The callback function is applied to each element of the array, starting from the end, and returns \`true\` if the element satisfies the condition.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 20, 50];
let lastIndex = numbers.findLastIndex(num => num === 20);
console.log(lastIndex); // Output: 3</code></pre>
    
    <h2 style="color: #2980b9;">2. Searching for the Last Matching Element</h2>
    <p>The \`findLastIndex()\` method is particularly useful when you need to find the last occurrence of an element that meets a specific condition.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["apple", "banana", "cherry", "banana"];
let lastIndex = fruits.findLastIndex(fruit => fruit === "banana");
console.log(lastIndex); // Output: 3</code></pre>
    
    <h2 style="color: #2980b9;">3. Handling No Matches</h2>
    <p>If no element satisfies the condition, \`findLastIndex()\` returns \`-1\`.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let lastIndex = numbers.findLastIndex(num => num > 10);
console.log(lastIndex); // Output: -1</code></pre>
    
    <h2 style="color: #2980b9;">4. Using Arrow Functions with \`findLastIndex()\`</h2>
    <p>Arrow functions provide a concise syntax for writing the callback function passed to \`findLastIndex()\`.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 20, 50];
let lastIndex = numbers.findLastIndex(num => num % 3 === 0);
console.log(lastIndex); // Output: 2</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`findLastIndex()\`</h2>
    <p>The same functionality of \`findLastIndex()\` can be achieved using a \`for\` loop to manually search the array from the end.</p>
    <pre><code class="language-javascript" codeHighlight>function findLastIndex(array, callback) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (callback(array[i], i, array)) {
                return i;
            }
        }
        return -1;
    }

    let numbers = [10, 20, 30, 20, 50];
    let lastIndex = findLastIndex(numbers, num => num === 20);
    console.log(lastIndex); // Output: 3</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`findLastIndex()\`</h2>
    <p>While \`findLastIndex()\` is powerful, it has some limitations:
        <ul>
            <li>It only works with arrays and does not handle other iterable objects.</li>
            <li>It does not modify the original array, so it is only useful for finding the index of the last matching element.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 20, 50];
let lastIndex = numbers.findLastIndex(num => num === 20);
console.log(lastIndex); // Output: 3</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`findLastIndex()\` with Other Methods</h2>
    <p>\`findLastIndex()\` can be combined with other array methods like \`slice\` or \`filter\` to perform more complex operations. For example, you can find the last index of an element in a filtered array.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 20, 50];
let filteredNumbers = numbers.filter(num => num % 10 === 0);
let lastIndex = filteredNumbers.findLastIndex(num => num === 20);
console.log(lastIndex); // Output: 1</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`findLastIndex()\` method is a simple and powerful tool for finding the index of the last element in an array that satisfies a condition. It is particularly useful for searching arrays from the end and handling cases where the last occurrence of an element is needed. Whether you're working with numbers, strings, or objects, \`findLastIndex()\` provides a clean and efficient approach to array searching.</p>
</div>`
},
{
    articleTitle: `toSorted`,
    content: `<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The \`toSorted()\` Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The \`toSorted()\` method in JavaScript is used to **create a new sorted array** from the elements of an existing array. Unlike the \`sort()\` method, which modifies the original array, \`toSorted()\` returns a new array, leaving the original array unchanged. This method is particularly useful when you need to preserve the original array while working with a sorted version.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of \`toSorted()\`</h2>
    <p>The \`toSorted()\` method sorts the elements of the array in ascending order by default and returns a new array. It does not modify the original array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["banana", "apple", "cherry"];
let sortedFruits = fruits.toSorted();
console.log(sortedFruits); // Output: ["apple", "banana", "cherry"]
console.log(fruits); // Output: ["banana", "apple", "cherry"] (original array remains unchanged)</code></pre>
    
    <h2 style="color: #2980b9;">2. Sorting Numbers</h2>
    <p>By default, \`toSorted()\` sorts elements as strings. To sort numbers correctly, you need to provide a comparison function.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [40, 100, 1, 5, 25, 10];
let sortedNumbers = numbers.toSorted((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 5, 10, 25, 40, 100]</code></pre>
    
    <h2 style="color: #2980b9;">3. Sorting in Descending Order</h2>
    <p>To sort elements in descending order, you can reverse the logic of the comparison function.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [40, 100, 1, 5, 25, 10];
let sortedNumbers = numbers.toSorted((a, b) => b - a);
console.log(sortedNumbers); // Output: [100, 40, 25, 10, 5, 1]</code></pre>
    
    <h2 style="color: #2980b9;">4. Sorting Objects</h2>
    <p>You can use \`toSorted()\` to sort arrays of objects based on a specific property.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
let sortedUsers = users.toSorted((a, b) => a.age - b.age);
console.log(sortedUsers);
// Output: [
//   { name: "Charlie", age: 20 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ]</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve \`toSorted()\`</h2>
    <p>The same functionality of \`toSorted()\` can be achieved by creating a copy of the array and then sorting it using the \`sort()\` method.</p>
    <pre><code class="language-javascript" codeHighlight>function toSorted(array, compareFunction) {
        let copy = [...array];
        return compareFunction ? copy.sort(compareFunction) : copy.sort();
    }

    let fruits = ["banana", "apple", "cherry"];
    let sortedFruits = toSorted(fruits);
    console.log(sortedFruits); // Output: ["apple", "banana", "cherry"]
    console.log(fruits); // Output: ["banana", "apple", "cherry"] (original array remains unchanged)</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of \`toSorted()\`</h2>
    <p>While \`toSorted()\` is powerful, it has some limitations:
        <ul>
            <li>It is not supported in very old browsers (e.g., Internet Explorer).</li>
            <li>It does not modify the original array, which may require additional memory for large arrays.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["banana", "apple", "cherry"];
let sortedFruits = fruits.toSorted();
console.log(sortedFruits); // Output: ["apple", "banana", "cherry"]</code></pre>
    
    <h2 style="color: #2980b9;">7. Combining \`toSorted()\` with Other Methods</h2>
    <p>\`toSorted()\` can be combined with other array methods like \`map\` or \`filter\` to perform more complex operations. For example, you can filter an array and then sort the filtered results.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [40, 100, 1, 5, 25, 10];
let filteredAndSorted = numbers.filter(num => num > 10).toSorted((a, b) => a - b);
console.log(filteredAndSorted); // Output: [25, 40, 100]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The \`toSorted()\` method is a simple and powerful tool for creating a new sorted array without modifying the original array. It is particularly useful for preserving the original data while working with a sorted version. Whether you're working with strings, numbers, or objects, \`toSorted()\` provides a clean and efficient approach to array sorting.</p>
</div>`
},
{
  articleTitle: `toSpliced`,   content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The toSpliced Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The toSpliced method in JavaScript is used to **create a new array with elements removed or replaced**, leaving the original array unchanged. Unlike the splice method, which modifies the original array, toSpliced returns a new array, making it useful for immutable operations.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Usage of toSpliced</h2>
    <p>The toSpliced method allows you to remove or replace elements without modifying the original array.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["banana", "apple", "cherry", "mango"];
let newFruits = fruits.toSpliced(1, 1);
console.log(newFruits); // Output: ["banana", "cherry", "mango"]
console.log(fruits); // Output: ["banana", "apple", "cherry", "mango"] (original array remains unchanged)</code></pre>
    
    <h2 style="color: #2980b9;">2. Removing Elements</h2>
    <p>You can remove elements by specifying the starting index and the number of elements to remove.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40, 50];
let newNumbers = numbers.toSpliced(2, 2);
console.log(newNumbers); // Output: [10, 20, 50]</code></pre>
    
    <h2 style="color: #2980b9;">3. Replacing Elements</h2>
    <p>To replace elements, specify the index, the number of elements to remove, and the new elements.</p>
    <pre><code class="language-javascript" codeHighlight>let colors = ["red", "blue", "green"];
let newColors = colors.toSpliced(1, 1, "yellow");
console.log(newColors); // Output: ["red", "yellow", "green"]</code></pre>
    
    <h2 style="color: #2980b9;">4. Adding Elements Without Removal</h2>
    <p>You can insert elements without removing any by setting the delete count to 0.</p>
    <pre><code class="language-javascript" codeHighlight>let items = ["pen", "notebook", "eraser"];
let newItems = items.toSpliced(1, 0, "pencil");
console.log(newItems); // Output: ["pen", "pencil", "notebook", "eraser"]</code></pre>
    
    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve toSpliced</h2>
    <p>Similar functionality can be achieved using array slicing and spreading.</p>
    <pre><code class="language-javascript" codeHighlight>function toSpliced(array, start, deleteCount, ...items) {
    return [...array.slice(0, start), ...items, ...array.slice(start + deleteCount)];
}

let fruits = ["banana", "apple", "cherry", "mango"];
let newFruits = toSpliced(fruits, 1, 1);
console.log(newFruits); // Output: ["banana", "cherry", "mango"]</code></pre>
    
    <h2 style="color: #2980b9;">6. Limitations of toSpliced</h2>
    <p>While toSpliced is powerful, it has some limitations:
        <ul>
            <li>Not supported in older browsers like Internet Explorer.</li>
            <li>Creates a new array, which may impact performance for very large arrays.</li>
        </ul>
    </p>
    
    <h2 style="color: #2980b9;">7. Combining toSpliced with Other Methods</h2>
    <p>You can combine toSpliced with other array methods like map or filter for advanced operations.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40, 50];
let modifiedNumbers = numbers.filter(num => num !== 30).toSpliced(2, 0, 25);
console.log(modifiedNumbers); // Output: [10, 20, 25, 40, 50]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The toSpliced method is a powerful alternative to splice that enables non-destructive array modifications. Whether you need to remove, replace, or insert elements, toSpliced provides a clean and immutable approach.</p>
</div>
`
},
{
  articleTitle: `toReversed`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">The <code>toReversed()</code> Method in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>toReversed()</code> method in JavaScript creates a **new reversed array** from the elements of an existing array without modifying the original array. Unlike the <code>reverse()</code> method, which alters the original array, <code>toReversed()</code> returns a **new copy** with the elements reversed.
    </p>

    <h2 style="color: #2980b9;">1. Basic Usage of <code>toReversed()</code></h2>
    <p>The <code>toReversed()</code> method reverses the elements of an array and returns a new array, keeping the original array unchanged.</p>
    <pre><code class="language-javascript" codeHighlight>let fruits = ["banana", "apple", "cherry"];
let reversedFruits = fruits.toReversed();
console.log(reversedFruits); // Output: ["cherry", "apple", "banana"]
console.log(fruits); // Output: ["banana", "apple", "cherry"] (original array remains unchanged)</code></pre>

    <h2 style="color: #2980b9;">2. Using <code>toReversed()</code> on Numbers</h2>
    <p>The method also works with numbers, reversing their order.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [10, 20, 30, 40, 50];
let reversedNumbers = numbers.toReversed();
console.log(reversedNumbers); // Output: [50, 40, 30, 20, 10]</code></pre>

    <h2 style="color: #2980b9;">3. Using <code>toReversed()</code> on Strings</h2>
    <p>Since JavaScript strings are immutable, you can use <code>toReversed()</code> by first converting the string into an array of characters.</p>
    <pre><code class="language-javascript" codeHighlight>let text = "hello";
let reversedText = [...text].toReversed().join("");
console.log(reversedText); // Output: "olleh"</code></pre>

    <h2 style="color: #2980b9;">4. Using <code>toReversed()</code> with Objects</h2>
    <p>If you have an array of objects, you can reverse their order without modifying the original array.</p>
    <pre><code class="language-javascript" codeHighlight>let users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 }
];
let reversedUsers = users.toReversed();
console.log(reversedUsers);
/*
Output:
[
  { name: "Charlie", age: 20 },
  { name: "Bob", age: 30 },
  { name: "Alice", age: 25 }
]
*/</code></pre>

    <h2 style="color: #2980b9;">5. Imperative Approach to Achieve <code>toReversed()</code></h2>
    <p>Before <code>toReversed()</code>, achieving the same effect required creating a copy of the array manually.</p>
    <pre><code class="language-javascript" codeHighlight>function toReversed(array) {
    return [...array].reverse();
}

let fruits = ["banana", "apple", "cherry"];
let reversedFruits = toReversed(fruits);
console.log(reversedFruits); // Output: ["cherry", "apple", "banana"]
console.log(fruits); // Output: ["banana", "apple", "cherry"] (original array remains unchanged)</code></pre>

    <h2 style="color: #2980b9;">6. Limitations of <code>toReversed()</code></h2>
    <p>While <code>toReversed()</code> is a powerful method, it has some limitations:</p>
    <ul>
        <li>Not supported in older browsers (e.g., Internet Explorer).</li>
        <li>Requires additional memory, as it creates a new array instead of modifying the original.</li>
    </ul>

    <h2 style="color: #2980b9;">7. Combining <code>toReversed()</code> with Other Methods</h2>
    <p>It can be combined with methods like <code>map()</code> and <code>filter()</code> for more advanced operations.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4, 5];
let reversedDoubledNumbers = numbers.toReversed().map(num => num * 2);
console.log(reversedDoubledNumbers); // Output: [10, 8, 6, 4, 2]</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>toReversed()</code> method is a simple and efficient way to reverse an array without modifying the original. It provides a functional approach to reversing elements, making JavaScript programming cleaner and more maintainable.</p>
</div>
`
},
{
  articleTitle: `Creating Objects`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Creating Objects in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, objects are fundamental building blocks that store key-value pairs. They allow you to model real-world entities and organize data efficiently. There are multiple ways to create objects in JavaScript, each with its own use case.
    </p>
    
    <h2 style="color: #2980b9;">1. Object Literals</h2>
    <p>The simplest way to create an object is by using an object literal.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(person.name); // Output: Alice</code></pre>
    
    <h2 style="color: #2980b9;">2. Using the Object Constructor</h2>
    <p>You can create objects using the built-in <code>Object</code> constructor.</p>
    <pre><code class="language-javascript" codeHighlight>let person = new Object();
person.name = "Alice";
person.age = 25;
person.city = "New York";
console.log(person.city); // Output: New York</code></pre>
    
    <h2 style="color: #2980b9;">3. Using a Constructor Function</h2>
    <p>A constructor function allows you to create multiple instances of an object.</p>
    <pre><code class="language-javascript" codeHighlight>function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

let person1 = new Person("Alice", 25, "New York");
console.log(person1.age); // Output: 25</code></pre>
    
    <h2 style="color: #2980b9;">4. Using the Object.create() Method</h2>
    <p>The <code>Object.create()</code> method allows you to create an object with a specified prototype.</p>
    <pre><code class="language-javascript" codeHighlight>let prototypeObj = {
    greet: function() {
        console.log("Hello!");
    }
};
let newObj = Object.create(prototypeObj);
newObj.greet(); // Output: Hello!</code></pre>
    
    <h2 style="color: #2980b9;">5. Using Classes (ES6+)</h2>
    <p>JavaScript introduced classes in ES6, which provide a cleaner syntax for creating objects.</p>
    <pre><code class="language-javascript" codeHighlight>class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
let person2 = new Person("Bob", 30, "Los Angeles");
console.log(person2.name); // Output: Bob</code></pre>
    
    <h2 style="color: #2980b9;">6. Using JSON</h2>
    <p>You can also create objects using JSON syntax, which is commonly used for data exchange.</p>
    <pre><code class="language-javascript" codeHighlight>let jsonData = '{"name": "Charlie", "age": 28, "city": "Chicago"}';
let person3 = JSON.parse(jsonData);
console.log(person3.city); // Output: Chicago</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>There are multiple ways to create objects in JavaScript, each suited for different scenarios. Object literals are the most straightforward, while constructor functions and classes offer better structure for reusable code. Understanding these techniques will help you write efficient and maintainable JavaScript applications.</p>
</div>
`
},
{
  articleTitle: `Accessing Properties`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Accessing Properties in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, object properties can be accessed using dot notation or bracket notation. Each method has its use cases depending on the property name and context.
    </p>
    
    <h2 style="color: #2980b9;">1. Dot Notation</h2>
    <p>Dot notation is the most common and readable way to access an object's properties.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "Alice", age: 25 };
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25</code></pre>
    
    <h2 style="color: #2980b9;">2. Bracket Notation</h2>
    <p>Bracket notation is useful when property names have spaces or are stored as variables.</p>
    <pre><code class="language-javascript" codeHighlight>let car = { "car brand": "Tesla", model: "Model S" };
console.log(car["car brand"]); // Output: Tesla</code></pre>
    
    <h2 style="color: #2980b9;">3. Accessing Properties with Variables</h2>
    <p>When property names are dynamic, bracket notation must be used.</p>
    <pre><code class="language-javascript" codeHighlight>let key = "model";
console.log(car[key]); // Output: Model S</code></pre>
    
    <h2 style="color: #2980b9;">4. Checking if a Property Exists</h2>
    <p>Use the <code>in</code> operator or <code>hasOwnProperty</code> method to check if a property exists.</p>
    <pre><code class="language-javascript" codeHighlight>console.log("age" in person); // Output: true
console.log(person.hasOwnProperty("name")); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">5. Accessing Nested Properties</h2>
    <p>Objects can contain nested objects, which can be accessed using multiple dot or bracket notations.</p>
    <pre><code class="language-javascript" codeHighlight>let student = { info: { name: "John", grade: "A" } };
console.log(student.info.name); // Output: John</code></pre>
    
    <h2 style="color: #2980b9;">6. Using Optional Chaining</h2>
    <p>Optional chaining <code>?.</code> prevents errors when accessing deep properties in undefined or null objects.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(student.info?.age); // Output: undefined</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Accessing properties in JavaScript can be done using dot or bracket notation, each with its use cases. Checking property existence and using optional chaining can prevent errors when dealing with nested objects.</p>
</div>`
},
{
  articleTitle: `Modifying Properties`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Modifying Properties in JavaScript</h1>
    
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, objects consist of properties that can be added, modified, or deleted dynamically. Understanding how to modify properties is crucial for effective object manipulation in JavaScript.
    </p>
    
    <h2 style="color: #2980b9;">1. Adding Properties to an Object</h2>
    <p>New properties can be added to an object at any time by simply assigning a value to a key.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "Alice", age: 25 };

person.city = "New York";
console.log(person);
// Output: { name: "Alice", age: 25, city: "New York" }</code></pre>
    
    <h2 style="color: #2980b9;">2. Modifying Existing Properties</h2>
    <p>Existing properties can be updated by assigning a new value to them.</p>
    <pre><code class="language-javascript" codeHighlight>let car = { brand: "Toyota", model: "Camry", year: 2020 };

car.year = 2023;
console.log(car);
// Output: { brand: "Toyota", model: "Camry", year: 2023 }</code></pre>
    
    <h2 style="color: #2980b9;">3. Deleting Properties</h2>
    <p>Properties can be removed from an object using the <code>delete</code> operator.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { username: "john_doe", password: "12345", role: "admin" };

delete user.password;
console.log(user);
// Output: { username: "john_doe", role: "admin" }</code></pre>
    
    <h2 style="color: #2980b9;">4. Checking Property Existence</h2>
    <p>Use the <code>in</code> operator or <code>hasOwnProperty()</code> method to check if a property exists in an object.</p>
    <pre><code class="language-javascript" codeHighlight>let book = { title: "JavaScript Guide", author: "MDN" };

console.log("title" in book); // true
console.log(book.hasOwnProperty("author")); // true
console.log("publisher" in book); // false</code></pre>
    
    <h2 style="color: #2980b9;">5. Making Properties Read-Only</h2>
    <p>Use <code>Object.defineProperty()</code> to make a property read-only, preventing modification.</p>
    <pre><code class="language-javascript" codeHighlight>let settings = { theme: "dark" };

Object.defineProperty(settings, "theme", { writable: false });
settings.theme = "light"; // No effect in strict mode
console.log(settings.theme); // Output: "dark"</code></pre>
    
    <h2 style="color: #2980b9;">6. Modifying Property Descriptors</h2>
    <p>JavaScript allows you to change attributes like writable, enumerable, and configurable using <code>Object.defineProperty()</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { name: "David" };

Object.defineProperty(user, "name", { configurable: false });
delete user.name; // Will not work since configurable is false
console.log(user.name); // Output: "David"</code></pre>
    
    <h2 style="color: #2980b9;">7. Using Object.freeze() and Object.seal()</h2>
    <p>
        <ul>
            <li><code>Object.freeze(obj)</code>: Prevents adding, deleting, or modifying properties.</li>
            <li><code>Object.seal(obj)</code>: Allows modification of existing properties but prevents adding or deleting.</li>
        </ul>
    </p>
    <pre><code class="language-javascript" codeHighlight>let config = { mode: "production" };

Object.freeze(config);
config.mode = "development"; // No effect
console.log(config.mode); // Output: "production"

let settings = { theme: "light" };
Object.seal(settings);
delete settings.theme; // Will not work
settings.theme = "dark"; // Works
console.log(settings.theme); // Output: "dark"</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>
        Understanding how to modify properties in JavaScript is essential for effective object manipulation.
        You can add, update, delete, and control property behavior using various methods like <code>Object.defineProperty()</code>, <code>Object.freeze()</code>, and <code>Object.seal()</code>.
        Mastering these techniques allows for better data management and security in JavaScript applications.
    </p>
</div>
`
},
{
  articleTitle: `Deleting Properties`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Deleting Properties in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, object properties can be removed dynamically using the <code>delete</code> operator. This is useful when you need to modify objects by removing unwanted properties without affecting other data.
    </p>
    
    <h2 style="color: #2980b9;">1. Using the <code>delete</code> Operator</h2>
    <p>The <code>delete</code> operator is specifically designed to remove properties from an object.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "Alice", age: 25, city: "London" };

delete person.age;

console.log(person);
// Output:
// { name: "Alice", city: "London" }</code></pre>
    
    <h2 style="color: #2980b9;">2. Deleting Non-Existent Properties</h2>
    <p>If you attempt to delete a property that does not exist, JavaScript does not throw an error; it simply does nothing.</p>
    <pre><code class="language-javascript" codeHighlight>let car = { brand: "Tesla", model: "Model 3" };

delete car.year;

console.log(car);
// Output:
// { brand: "Tesla", model: "Model 3" }</code></pre>
    
    <h2 style="color: #2980b9;">3. Deleting Properties in Nested Objects</h2>
    <p>To delete a nested property, you need to specify the correct property path.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { name: "John", details: { age: 30, city: "New York" } };

delete user.details.city;

console.log(user);
// Output:
// { name: "John", details: { age: 30 } }</code></pre>
    
    <h2 style="color: #2980b9;">4. Deleting Array Elements</h2>
    <p>The <code>delete</code> operator can be used on array elements, but it leaves <code>undefined</code> holes instead of shifting elements.</p>
    <pre><code class="language-javascript" codeHighlight>let numbers = [1, 2, 3, 4];

delete numbers[1];

console.log(numbers);
// Output:
// [1, empty, 3, 4]</code></pre>
    
    <h2 style="color: #2980b9;">5. Checking If a Property Exists After Deletion</h2>
    <p>After deleting a property, you can check if it still exists using the <code>in</code> operator or <code>hasOwnProperty</code> method.</p>
    <pre><code class="language-javascript" codeHighlight>let book = { title: "JavaScript Guide", author: "MDN" };

delete book.author;

console.log("author" in book); // Output: false
console.log(book.hasOwnProperty("author")); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">6. Deleting Properties with <code>Object.freeze()</code> and <code>Object.seal()</code></h2>
    <p>Properties of an object cannot be deleted if the object is frozen or sealed.</p>
    <pre><code class="language-javascript" codeHighlight>let data = { key: "value" };

Object.freeze(data);
delete data.key;

console.log(data);
// Output:
// { key: "value" } (property not deleted because object is frozen)</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Deleting properties in JavaScript is straightforward with the <code>delete</code> operator, but its behavior varies depending on whether the property exists, if it's part of a nested object, or if the object is frozen or sealed. While it works for removing object properties, caution should be taken when using it on arrays, as it leaves gaps instead of shifting elements.</p>
</div>`
},
{
  articleTitle: `Object Methods`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Methods in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, objects can contain functions as properties, which are called <strong>methods</strong>. Object methods allow objects to perform actions and interact with their own data.
    </p>
    
    <h2 style="color: #2980b9;">1. Defining Object Methods</h2>
    <p>Methods are simply functions stored as object properties. They are invoked using the dot notation.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();
// Output: Hello, my name is Alice</code></pre>
    
    <h2 style="color: #2980b9;">2. Shorthand Method Syntax</h2>
    <p>ES6 introduced a shorter way to define methods inside objects.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    name: "Alice",
    greet() {
        console.log("Hello, my name is " + this.name);
    }
};

person.greet();
// Output: Hello, my name is Alice</code></pre>
    
    <h2 style="color: #2980b9;">3. Using <code>this</code> in Methods</h2>
    <p>The <code>this</code> keyword inside a method refers to the object that owns the method.</p>
    <pre><code class="language-javascript" codeHighlight>let car = {
    brand: "Toyota",
    model: "Camry",
    details() {
        console.log(\`Car: \${this.brand}, \${this.model}\`);
    }
};

car.details();
// Output: Car: Toyota Camry</code></pre>
    
    <h2 style="color: #2980b9;">4. Object Methods: <code>Object.keys()</code>, <code>Object.values()</code>, and <code>Object.entries()</code></h2>
    <p>JavaScript provides built-in methods for working with object properties.</p>
    
    <h3 style="color: #16a085;">4.1 Object.keys()</h3>
    <p>Returns an array of an object's property names.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { name: "Bob", age: 25, city: "Paris" };
console.log(Object.keys(user));
// Output: ["name", "age", "city"]</code></pre>
    
    <h3 style="color: #16a085;">4.2 Object.values()</h3>
    <p>Returns an array of an object's property values.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(Object.values(user));
// Output: ["Bob", 25, "Paris"]</code></pre>
    
    <h3 style="color: #16a085;">4.3 Object.entries()</h3>
    <p>Returns an array of key-value pairs.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(Object.entries(user));
// Output: [["name", "Bob"], ["age", 25], ["city", "Paris"]]</code></pre>
    
    <h2 style="color: #2980b9;">5. Defining Methods Dynamically</h2>
    <p>Methods can be added to an object dynamically.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = { species: "Dog" };

animal.speak = function() {
    console.log("Woof!");
};

animal.speak();
// Output: Woof!</code></pre>
    
    <h2 style="color: #2980b9;">6. <code>hasOwnProperty()</code> Method</h2>
    <p>Checks if an object has a particular property.</p>
    <pre><code class="language-javascript" codeHighlight>let book = { title: "1984", author: "George Orwell" };
console.log(book.hasOwnProperty("title")); // Output: true
console.log(book.hasOwnProperty("year")); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">7. Using Methods with <code>call()</code>, <code>apply()</code>, and <code>bind()</code></h2>
    <p>These methods allow controlling the value of <code>this</code> in functions.</p>
    
    <h3 style="color: #16a085;">7.1 call()</h3>
    <p>Invokes a function with a specified <code>this</code> value.</p>
    <pre><code class="language-javascript" codeHighlight>function introduce() 
    console.log(\`Hello, I'm \${this.name}\`);


let user1 = {name: "Alice"};
introduce.call(user1);
// Output: Hello, I'm Alice</code></pre>
    
    <h3 style="color: #16a085;">7.2 apply()</h3>
    <p>Works like <code>call()</code> but takes arguments as an array.</p>
    <pre><code class="language-javascript" codeHighlight>function greet(greeting) 
    console.log(\`\${greeting}, I'm \${this.name}\`);


greet.apply(user1, ["Hi"]);
// Output: Hi, I'm Alice</code></pre>
    
    <h3 style="color: #16a085;">7.3 bind()</h3>
    <p>Creates a new function with a bound <code>this</code> value.</p>
    <pre><code class="language-javascript" codeHighlight>let boundGreet = greet.bind(user1, "Hello");
boundGreet();
// Output: Hello, I'm Alice</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Object methods are essential for making objects functional. Understanding <code>this</code>, shorthand syntax, built-in methods, and method binding helps in writing cleaner and more efficient JavaScript code.</p>
</div>`

},
{
  articleTitle: `Object Destructuring`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Destructuring in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Object destructuring is a powerful feature in JavaScript that allows extracting properties from objects and assigning them to variables in a concise and readable way.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Object Destructuring</h2>
    <p>Using destructuring, we can extract values from objects easily.</p>
    <pre><code class="language-javascript" codeHighlight>const person = { name: "Alice", age: 25, city: "New York" };
const { name, age, city } = person;

console.log(name); // Output: Alice
console.log(age);  // Output: 25
console.log(city); // Output: New York</code></pre>
    
    <h2 style="color: #2980b9;">2. Default Values</h2>
    <p>Default values can be assigned if the property is missing.</p>
    <pre><code class="language-javascript" codeHighlight>const user = { username: "JohnDoe" };
const { username, email = "Not provided" } = user;

console.log(username); // Output: JohnDoe
console.log(email);    // Output: Not provided</code></pre>
    
    <h2 style="color: #2980b9;">3. Renaming Variables</h2>
    <p>We can rename variables while destructuring.</p>
    <pre><code class="language-javascript" codeHighlight>const student = { firstName: "Mike", lastName: "Smith" };
const { firstName: fName, lastName: lName } = student;

console.log(fName); // Output: Mike
console.log(lName); // Output: Smith</code></pre>
    
    <h2 style="color: #2980b9;">4. Nested Object Destructuring</h2>
    <p>Destructuring can be used to extract nested object properties.</p>
    <pre><code class="language-javascript" codeHighlight>const employee = { 
    id: 101, 
    details: { dept: "HR", location: "London" } 
};
const { id, details: { dept, location } } = employee;

console.log(id);      // Output: 101
console.log(dept);    // Output: HR
console.log(location);// Output: London</code></pre>
    
    <h2 style="color: #2980b9;">5. Destructuring in Function Parameters</h2>
    <p>Function parameters can use destructuring directly.</p>
    <pre><code class="language-javascript" codeHighlight>function displayUser({ name, age }) {
    console.log(\`Name: \${name}, Age: \${age}\`);
}
const userInfo = { name: "David", age: 30 };
displayUser(userInfo);
// Output: Name: David, Age: 30</code></pre>
    
    <h2 style="color: #2980b9;">6. Rest Operator in Destructuring</h2>
    <p>The rest operator allows capturing remaining properties.</p>
    <pre><code class="language-javascript" codeHighlight>const car = { brand: "Tesla", model: "Model 3", year: 2022, color: "Red" };
const { brand, model, ...others } = car;

console.log(brand);  // Output: Tesla
console.log(model);  // Output: Model 3
console.log(others); // Output: { year: 2022, color: "Red" }</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Object destructuring simplifies the process of extracting values from objects, making JavaScript code cleaner and more readable. It is a crucial feature for modern JavaScript development.</p>
</div>
`
},
{
  articleTitle: `Object Spread Operator`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Spread Operator in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <strong>spread operator</strong> (<code>...</code>) in JavaScript is a powerful feature introduced in ES6 that allows us to expand elements of an iterable (like an array or object) into individual elements. It is widely used for copying objects, merging objects, and modifying object properties in an immutable way.
    </p>
    
    <h2 style="color: #2980b9;">1. Basic Syntax of Object Spread Operator</h2>
    <p>The object spread operator allows us to copy all properties from one object to another.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { name: "Alice", age: 25 };
let clonedUser = { ...user };

console.log(clonedUser);
// Output: { name: "Alice", age: 25 }</code></pre>
    
    <h2 style="color: #2980b9;">2. Merging Objects</h2>
    <p>We can use the spread operator to merge two or more objects.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { name: "Alice" };
let details = { age: 25, city: "Paris" };

let mergedUser = { ...user, ...details };
console.log(mergedUser);
// Output: { name: "Alice", age: 25, city: "Paris" }</code></pre>
    
    <h2 style="color: #2980b9;">3. Overriding Properties</h2>
    <p>If the same property exists in multiple objects, the last one will override the previous ones.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "Alice", age: 30 };
let updatedPerson = { ...person, age: 35 };

console.log(updatedPerson);
// Output: { name: "Alice", age: 35 }</code></pre>
    
    <h2 style="color: #2980b9;">4. Adding New Properties</h2>
    <p>We can add new properties while copying an object.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { name: "Alice", age: 25 };
let userWithEmail = { ...user, email: "alice@example.com" };

console.log(userWithEmail);
// Output: { name: "Alice", age: 25, email: "alice@example.com" }</code></pre>
    
    <h2 style="color: #2980b9;">5. Removing a Property</h2>
    <p>To remove a property, we can use the spread operator along with destructuring.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { name: "Alice", age: 25, city: "Paris" };
let { city, ...userWithoutCity } = user;

console.log(userWithoutCity);
// Output: { name: "Alice", age: 25 }</code></pre>
    
    <h2 style="color: #2980b9;">6. Nested Objects</h2>
    <p>While copying objects, the spread operator performs a <strong>shallow copy</strong>. It does not deeply copy nested objects.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "Alice", address: { city: "Paris", zip: "75000" } };
let copiedPerson = { ...person };

copiedPerson.address.city = "London";
console.log(person.address.city);
// Output: "London" (because it's a shallow copy)</code></pre>
    
    <h2 style="color: #2980b9;">7. Spread Operator vs Object.assign()</h2>
    <p>The spread operator is a modern alternative to <code>Object.assign()</code> for copying and merging objects.</p>
    <pre><code class="language-javascript" codeHighlight>let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };

// Using Object.assign()
let merged1 = Object.assign({}, obj1, obj2);
console.log(merged1); // Output: { a: 1, b: 3, c: 4 }

// Using spread operator
let merged2 = { ...obj1, ...obj2 };
console.log(merged2); // Output: { a: 1, b: 3, c: 4 }</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The object spread operator provides a clean and efficient way to work with objects in JavaScript. It simplifies cloning, merging, modifying, and destructuring objects while making the code more readable and maintainable.</p>
</div>
`
},
{
  articleTitle:`Object Rest Operator`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Rest Operator in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <strong>Object Rest Operator</strong> is a powerful feature in JavaScript introduced with ES6. It allows you to extract and collect the remaining properties of an object into a new variable. This operator is useful for object destructuring and working with dynamic data structures.
    </p>
    
    <h2 style="color: #2980b9;">1. Understanding the Rest Operator</h2>
    <p>The rest operator is represented by three dots (<code>...</code>) and is used to gather the remaining properties of an object after specific ones have been extracted.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    name: "Alice",
    age: 30,
    city: "New York",
    country: "USA"
};

let { name, ...rest } = person;
console.log(name); // Output: Alice
console.log(rest); // Output: { age: 30, city: "New York", country: "USA" }</code></pre>
    
    <h2 style="color: #2980b9;">2. Using Object Rest in Function Parameters</h2>
    <p>The rest operator is useful when passing objects as function arguments while keeping flexibility in handling additional properties.</p>
    <pre><code class="language-javascript" codeHighlight>function displayDetails({ name, ...info }) {
    console.log("Name:", name);
    console.log("Other Info:", info);
}

displayDetails({ name: "Bob", age: 28, profession: "Engineer" });
// Output:
// Name: Bob
// Other Info: { age: 28, profession: "Engineer" }</code></pre>
    
    <h2 style="color: #2980b9;">3. Filtering Out Specific Properties</h2>
    <p>You can use the rest operator to remove specific properties from an object while keeping the remaining ones.</p>
    <pre><code class="language-javascript" codeHighlight>let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Blue"
};

let { color, ...carDetails } = car;
console.log(carDetails); 
// Output: { brand: "Toyota", model: "Camry", year: 2022 }</code></pre>
    
    <h2 style="color: #2980b9;">4. Cloning Objects with the Rest Operator</h2>
    <p>The rest operator can be combined with the spread operator to create a copy of an object while modifying or excluding properties.</p>
    <pre><code class="language-javascript" codeHighlight>let user = { id: 1, username: "john_doe", password: "1234" };

let { password, ...safeUser } = user;
console.log(safeUser);
// Output: { id: 1, username: "john_doe" } (password excluded)</code></pre>
    
    <h2 style="color: #2980b9;">5. Rest Operator vs Spread Operator</h2>
    <p>The <strong>rest operator</strong> gathers properties into an object, while the <strong>spread operator</strong> expands properties from an object.</p>
    <pre><code class="language-javascript" codeHighlight>// Rest operator example
let { firstName, ...details } = { firstName: "Eve", age: 25, city: "LA" };
console.log(details); // Output: { age: 25, city: "LA" }

// Spread operator example
let newDetails = { ...details, country: "USA" };
console.log(newDetails); // Output: { age: 25, city: "LA", country: "USA" }</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The Object Rest Operator is a convenient way to extract and manage object properties efficiently. It simplifies destructuring, filtering, and working with dynamic objects in JavaScript.</p>
</div>
`
},
{
  articleTitle:`Object Computed Properties`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Computed Properties in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Computed properties in JavaScript allow you to dynamically define property names in objects. This feature is particularly useful when you need to create property names based on variables or expressions. Computed properties are enclosed in square brackets <code>[]</code> within the object literal.
    </p>

    <h2 style="color: #2980b9;">1. Basic Computed Property</h2>
    <p>Computed properties enable you to use an expression as the property name in an object. The expression inside the square brackets is evaluated, and the result is used as the property name.</p>
    <pre><code class="language-javascript" codeHighlight>let propName = "age";
let person = {
    name: "John",
    [propName]: 30 // Computed property
};

console.log(person); 
// Output: { name: "John", age: 30 }</code></pre>

    <h2 style="color: #2980b9;">2. Computed Properties with Dynamic Values</h2>
    <p>You can use computed properties to dynamically assign values based on conditions or calculations. This makes your code more flexible and concise.</p>
    <pre><code class="language-javascript" codeHighlight>let dynamicKey = "status";
let isActive = true;

let user = {
    name: "Alice",
    [dynamicKey]: isActive ? "Active" : "Inactive" // Computed property with dynamic value
};

console.log(user); 
// Output: { name: "Alice", status: "Active" }</code></pre>

    <h2 style="color: #2980b9;">3. Computed Properties in Nested Objects</h2>
    <p>Computed properties can also be used in nested objects, allowing you to dynamically define property names at any level of the object structure.</p>
    <pre><code class="language-javascript" codeHighlight>let key = "address";
let city = "New York";

let employee = {
    name: "Jane",
    [key]: { // Computed property in a nested object
        city: city
    }
};

console.log(employee); 
// Output: { name: "Jane", address: { city: "New York" } }</code></pre>

    <h2 style="color: #2980b9;">4. Computed Properties with Functions</h2>
    <p>You can use functions to generate property names dynamically. This is useful when the property name depends on complex logic or external data.</p>
    <pre><code class="language-javascript" codeHighlight>function getKey() {
    return "dynamicKey";
}

let obj = {
    [getKey()]: "This is a computed property" // Computed property using a function
};

console.log(obj); 
// Output: { dynamicKey: "This is a computed property" }</code></pre>

    <h2 style="color: #2980b9;">5. Computed Properties with Template Literals</h2>
    <p>Template literals can be used inside computed properties to create dynamic property names based on multiple variables or expressions.</p>
    <pre><code class="language-javascript" codeHighlight>let prefix = "user";
let id = 123;

let data = {
    [\`\${prefix}_\${id}\`]: "John Doe" // Computed property with template literal
};

console.log(data); 
// Output: { user_123: "John Doe" }</code></pre>

    <h2 style="color: #2980b9;">6. Computed Properties in ES6 Classes</h2>
    <p>Computed properties can also be used in ES6 classes to dynamically define methods or properties within the class.</p>
    <pre><code class="language-javascript" codeHighlight>let methodName = "greet";

class Person {
    constructor(name) {
        this.name = name;
    }

    [methodName]() { // Computed property as a method
        console.log \`Hello, \${this.name}!\`);
    }
}

let person = new Person("Alice");
person.greet(); 
// Output: Hello, Alice!</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Computed properties in JavaScript provide a powerful way to dynamically define property names in objects. They are particularly useful when working with dynamic data, nested objects, or complex logic. By leveraging computed properties, you can write more flexible and maintainable code. Whether you're working with simple objects, nested structures, or ES6 classes, computed properties are an essential tool in modern JavaScript development.</p>
</div>`
},
{
  articleTitle: `Object Property Shorthand`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Property Shorthand in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Object property shorthand is a feature in JavaScript that allows you to create objects more concisely. When the property name and the variable name are the same, you can omit the value and simply specify the property name. This shorthand syntax makes your code cleaner and easier to read.
    </p>

    <h2 style="color: #2980b9;">1. Basic Property Shorthand</h2>
    <p>When the property name and the variable name are identical, you can use the shorthand syntax to define the object property.</p>
    <pre><code class="language-javascript" codeHighlight>let name = "John";
let age = 30;

// Without shorthand
let person = {
    name: name,
    age: age
};

// With shorthand
let personShorthand = { name, age };

console.log(personShorthand); 
// Output: { name: "John", age: 30 }</code></pre>

    <h2 style="color: #2980b9;">2. Shorthand in Function Return Values</h2>
    <p>Object property shorthand is particularly useful when returning objects from functions. It reduces redundancy and improves readability.</p>
    <pre><code class="language-javascript" codeHighlight>function createUser(name, age) {
    return { name, age }; // Shorthand syntax
}

let user = createUser("Alice", 25);
console.log(user); 
// Output: { name: "Alice", age: 25 }</code></pre>

    <h2 style="color: #2980b9;">3. Shorthand with Methods</h2>
    <p>You can also use shorthand syntax when defining methods in an object. This makes the code more concise and easier to understand.</p>
    <pre><code class="language-javascript" codeHighlight>let name = "John";
let greet = function() {
    console.log(\`Hello, \${this.name}!\`);
};

// Without shorthand
let person = {
    name: name,
    greet: greet
};

// With shorthand
let personShorthand = { name, greet };

personShorthand.greet(); 
// Output: Hello, John!</code></pre>

    <h2 style="color: #2980b9;">4. Combining Shorthand with Computed Properties</h2>
    <p>Object property shorthand can be combined with computed properties to create dynamic and concise object definitions.</p>
    <pre><code class="language-javascript" codeHighlight>let key = "status";
let isActive = true;

let user = {
    name: "Alice",
    [key]: isActive ? "Active" : "Inactive" // Computed property with shorthand
};

console.log(user); 
// Output: { name: "Alice", status: "Active" }</code></pre>

    <h2 style="color: #2980b9;">5. Shorthand in Destructuring</h2>
    <p>Object property shorthand is often used in conjunction with destructuring to extract properties from objects concisely.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John", age: 30 };

// Destructuring with shorthand
let { name, age } = person;

console.log(name, age); 
// Output: John 30</code></pre>

    <h2 style="color: #2980b9;">6. Shorthand in ES6 Classes</h2>
    <p>Object property shorthand can also be used in ES6 classes to define properties more concisely.</p>
    <pre><code class="language-javascript" codeHighlight>class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(\`Hello, \${this.name}!\`);
    }
}

let person = new Person("Jane", 28);
person.greet(); 
// Output: Hello, Jane!</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Object property shorthand is a powerful and concise feature in JavaScript that simplifies object creation. It is particularly useful when the property name and variable name are the same, reducing redundancy and improving code readability. Whether you're defining simple objects, returning values from functions, or working with ES6 classes, object property shorthand is an essential tool for writing clean and efficient JavaScript code.</p>
</div>`
},
{
  articleTitle: `Object Property Accessors`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Property Accessors in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, object property accessors provide a way to define special methods, called <strong>getters</strong> and <strong>setters</strong>, for accessing and modifying object properties. These allow more control over how values are retrieved and assigned.
    </p>

    <h2 style="color: #2980b9;">1. Getters and Setters</h2>
    <p>Getters allow reading property values, and setters allow modifying them. They are defined using the <code>get</code> and <code>set</code> keywords.</p>
    
    <h3 style="color: #16a085;">1.1 Defining Getters</h3>
    <p>A getter method retrieves a property value.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName);
// Output: John Doe</code></pre>

    <h3 style="color: #16a085;">1.2 Defining Setters</h3>
    <p>A setter method allows modifying a property.</p>
    <pre><code class="language-javascript" codeHighlight>let user = {
    firstName: "Alice",
    lastName: "Smith",
    set fullName(name) {
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

user.fullName = "Emma Brown";
console.log(user.firstName); // Output: Emma
console.log(user.lastName);  // Output: Brown</code></pre>

    <h2 style="color: #2980b9;">2. Getters and Setters with Object.defineProperty()</h2>
    <p>Another way to define accessors is using <code>Object.defineProperty()</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let car = { brand: "Toyota", model: "Camry" };

Object.defineProperty(car, "fullDetails", {
    get: function() {
        return this.brand + " " + this.model;
    },
    set: function(value) {
        let parts = value.split(" ");
        this.brand = parts[0];
        this.model = parts[1];
    }
});

console.log(car.fullDetails); // Output: Toyota Camry
car.fullDetails = "Honda Civic";
console.log(car.brand);  // Output: Honda
console.log(car.model);  // Output: Civic</code></pre>
    
    <h2 style="color: #2980b9;">3. Advantages of Property Accessors</h2>
    <ul style="color: #333; font-size: 16px;">
        <li>Encapsulation: Allows controlled access to object properties.</li>
        <li>Validation: Enables validation before setting property values.</li>
        <li>Computed Properties: Helps generate dynamic values.</li>
    </ul>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Object property accessors provide an efficient way to manage object properties dynamically. By using getters and setters, you can enhance encapsulation and control data access within objects.</p>
</div>
`
},
{
  articleTitle: `Object Property Getters`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Property Getters in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Getters in JavaScript are special methods that allow you to define how a property's value is retrieved. They are defined using the <code>get</code> keyword and are particularly useful when you want to compute or dynamically generate a value for a property each time it is accessed. Getters provide a way to encapsulate logic while maintaining the simplicity of accessing a property.
    </p>

    <h2 style="color: #2980b9;">1. Basic Getter</h2>
    <p>A getter is defined using the <code>get</code> keyword followed by the property name. When the property is accessed, the getter function is automatically called, and its return value is used as the property's value.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return \`\${this.firstName} \${this.lastName}\`;
    }
};

console.log(person.fullName); 
// Output: John Doe</code></pre>

    <h2 style="color: #2980b9;">2. Getters with Computed Values</h2>
    <p>Getters are often used to compute or derive values dynamically based on other properties of the object. This allows you to keep your data consistent and avoid redundancy.</p>
    <pre><code class="language-javascript" codeHighlight>let rectangle = {
    width: 10,
    height: 5,
    get area() {
        return this.width * this.height;
    }
};

console.log(rectangle.area); 
// Output: 50</code></pre>

    <h2 style="color: #2980b9;">3. Getters in Classes</h2>
    <p>Getters can also be used in ES6 classes to define computed properties. This is useful for encapsulating logic within the class and providing a clean interface for accessing derived values.</p>
    <pre><code class="language-javascript" codeHighlight>class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}

let circle = new Circle(5);
console.log(circle.area); 
// Output: 78.53981633974483</code></pre>

    <h2 style="color: #2980b9;">4. Getters with Private Properties</h2>
    <p>Getters are often used to expose private or internal properties of an object. This allows you to control access to the data and add validation or computation logic if needed.</p>
    <pre><code class="language-javascript" codeHighlight>let user = {
    _password: "secret123", // Private property (conventionally marked with an underscore)
    get password() {
        return "****"; // Hide the actual password
    }
};

console.log(user.password); 
// Output: ****</code></pre>

    <h2 style="color: #2980b9;">5. Combining Getters and Setters</h2>
    <p>Getters are often paired with setters to create fully controlled properties. While the getter retrieves the value, the setter allows you to define how the value is assigned.</p>
    <pre><code class="language-javascript" codeHighlight>let temperature = {
    _celsius: 0,
    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    },
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
};

temperature.fahrenheit = 77; // Setter is called
console.log(temperature.fahrenheit); // Getter is called
// Output: 77
console.log(temperature._celsius); 
// Output: 25</code></pre>

    <h2 style="color: #2980b9;">6. Getters in Object Literals vs. Classes</h2>
    <p>Getters can be defined in both object literals and classes. The choice depends on your use case. Object literals are great for one-off objects, while classes are better for reusable and structured code.</p>
    <pre><code class="language-javascript" codeHighlight>// Object Literal
let car = {
    brand: "Toyota",
    get description() {
        return \`This car is a \${this.brand}\`;
    }
};

console.log(car.description); 
// Output: This car is a Toyota

// Class
class Car {
    constructor(brand) {
        this.brand = brand;
    }

    get description() {
        return \`This car is a \${this.brand}\`;
    }
}

let myCar = new Car("Honda");
console.log(myCar.description); 
// Output: This car is a Honda</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Getters in JavaScript are a powerful feature that allows you to define how a property's value is retrieved. They are particularly useful for computing or deriving values dynamically, encapsulating logic, and controlling access to properties. Whether you're working with object literals or classes, getters provide a clean and efficient way to manage object properties. By combining getters with setters, you can create fully controlled and responsive properties that enhance the flexibility and maintainability of your code.</p>
</div>`
},
{
  articleTitle: `Object Property Setters`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Property Setters in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, setters allow you to define a function to execute when a property value is set. They provide a way to control how properties are modified and enforce validation rules.
    </p>
    
    <h2 style="color: #2980b9;">1. Defining Setters with <code>set</code> Keyword</h2>
    <p>Setters are defined using the <code>set</code> keyword inside an object.</p>
    <pre><code class="language-javascript">let user = {
    firstName: "John",
    lastName: "Doe",
    
    set fullName(name) {
        let parts = name.split(" ");
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

user.fullName = "Alice Johnson";
console.log(user.firstName); // Output: Alice
console.log(user.lastName);  // Output: Johnson</code></pre>
    
    <h2 style="color: #2980b9;">2. Using Setters with <code>Object.defineProperty()</code></h2>
    <p>Another way to define setters is by using <code>Object.defineProperty()</code>.</p>
    <pre><code class="language-javascript">let person = { age: 30 };

Object.defineProperty(person, "setAge", {
    set: function(value) {
        if (value < 0) {
            console.log("Age cannot be negative.");
        } else {
            this.age = value;
        }
    }
});

person.setAge = -5; // Output: Age cannot be negative.
person.setAge = 25;
console.log(person.age); // Output: 25</code></pre>
    
    <h2 style="color: #2980b9;">3. Benefits of Using Setters</h2>
    <ul>
        <li>Encapsulation: Helps in controlling how properties are modified.</li>
        <li>Validation: Prevents invalid values from being assigned.</li>
        <li>Data Transformation: Automatically modifies values before setting.</li>
    </ul>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Setters in JavaScript provide an efficient way to manage property assignments while ensuring data integrity. They are useful for validation, transformation, and encapsulation of object properties.</p>
</div>`
},
{
  articleTitle: `Object Property Descriptors`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Property Descriptors in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Object property descriptors in JavaScript provide a way to define and manage the behavior of object properties. Each property in an object has a descriptor that contains information about its value, writability, enumerability, and configurability. By using property descriptors, you can control how properties behave, such as making them read-only, non-enumerable, or non-configurable.
    </p>

    <h2 style="color: #2980b9;">1. Understanding Property Descriptors</h2>
    <p>Every property in an object has a descriptor that can be accessed using the <code>Object.getOwnPropertyDescriptor</code> method. The descriptor contains the following attributes:</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>value</strong>: The value of the property.</li>
        <li><strong>writable</strong>: Whether the property's value can be changed.</li>
        <li><strong>enumerable</strong>: Whether the property shows up during enumeration (e.g., in <code>for...in</code> loops).</li>
        <li><strong>configurable</strong>: Whether the property can be deleted or its attributes modified.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John" };
let descriptor = Object.getOwnPropertyDescriptor(person, "name");

console.log(descriptor);
// Output: { value: "John", writable: true, enumerable: true, configurable: true }</code></pre>

    <h2 style="color: #2980b9;">2. Defining Property Descriptors</h2>
    <p>You can define or modify property descriptors using the <code>Object.defineProperty</code> method. This allows you to specify the behavior of the property explicitly.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {};

Object.defineProperty(person, "name", {
    value: "John",
    writable: false, // Cannot change the value
    enumerable: true, // Shows up in enumeration
    configurable: false // Cannot delete or modify attributes
});

console.log(person.name); // Output: John
person.name = "Jane"; // Throws an error in strict mode (writable is false)
console.log(person.name); // Output: John</code></pre>

    <h2 style="color: #2980b9;">3. Non-Enumerable Properties</h2>
    <p>By setting <code>enumerable</code> to <code>false</code>, you can hide a property from enumeration methods like <code>for...in</code> loops or <code>Object.keys</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John", age: 30 };

Object.defineProperty(person, "age", {
    enumerable: false
});

for (let key in person) {
    console.log(key); // Output: name (age is not enumerated)
}

console.log(Object.keys(person)); // Output: ["name"]</code></pre>

    <h2 style="color: #2980b9;">4. Non-Configurable Properties</h2>
    <p>When a property is marked as non-configurable, its attributes cannot be changed, and the property cannot be deleted.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John" };

Object.defineProperty(person, "name", {
    configurable: false
});

delete person.name; // Fails silently in non-strict mode
console.log(person.name); // Output: John

Object.defineProperty(person, "name", { writable: false }); // Throws an error</code></pre>

    <h2 style="color: #2980b9;">5. Getters and Setters in Descriptors</h2>
    <p>Property descriptors can also define getters and setters, allowing you to control how a property is accessed or modified.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    _age: 25
};

Object.defineProperty(person, "age", {
    get() {
        return this._age;
    },
    set(value) {
        if (value > 0) {
            this._age = value;
        }
    },
    enumerable: true,
    configurable: true
});

console.log(person.age); // Output: 25
person.age = 30;
console.log(person.age); // Output: 30
person.age = -5; // Setter ignores invalid value
console.log(person.age); // Output: 30</code></pre>

    <h2 style="color: #2980b9;">6. Using <code>Object.defineProperties</code></h2>
    <p>The <code>Object.defineProperties</code> method allows you to define multiple properties and their descriptors at once.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {};

Object.defineProperties(person, {
    name: {
        value: "John",
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 30,
        writable: false,
        enumerable: false,
        configurable: false
    }
});

console.log(person.name); // Output: John
console.log(person.age); // Output: 30</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Object property descriptors in JavaScript provide fine-grained control over the behavior of object properties. By using descriptors, you can define properties as read-only, non-enumerable, or non-configurable, and even implement custom getters and setters. This feature is particularly useful for creating robust and secure objects, ensuring that properties behave exactly as intended. Whether you're working with simple objects or complex data structures, property descriptors are an essential tool for advanced JavaScript development.</p>
</div>`
},
{
  articleTitle: `Object Property Symbols`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Property Symbols in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, <strong>Symbols</strong> are a unique and immutable primitive data type introduced in ES6. They are primarily used as object property keys to avoid naming conflicts and ensure uniqueness.
    </p>
    
    <h2 style="color: #2980b9;">1. Creating a Symbol</h2>
    <p>You can create a Symbol using the <code>Symbol()</code> function.</p>
    <pre><code class="language-javascript" codeHighlight>let sym1 = Symbol();
let sym2 = Symbol("description");
console.log(sym1, sym2);
// Output: Symbol() Symbol(description)</code></pre>
    
    <h2 style="color: #2980b9;">2. Using Symbols as Object Keys</h2>
    <p>Symbols can be used as unique property keys in objects.</p>
    <pre><code class="language-javascript" codeHighlight>let id = Symbol("id");
let user = {
    name: "Alice",
    [id]: 123
};
console.log(user[id]); // Output: 123</code></pre>
    
    <h2 style="color: #2980b9;">3. Symbols are Unique</h2>
    <p>Each Symbol is guaranteed to be unique, even if they have the same description.</p>
    <pre><code class="language-javascript" codeHighlight>let symA = Symbol("test");
let symB = Symbol("test");
console.log(symA === symB); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">4. Global Symbol Registry</h2>
    <p>Symbols can be shared globally using <code>Symbol.for()</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let globalSym1 = Symbol.for("shared");
let globalSym2 = Symbol.for("shared");
console.log(globalSym1 === globalSym2); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">5. Retrieving Symbol Properties</h2>
    <p>Symbol properties are not accessible through <code>Object.keys()</code> or <code>Object.values()</code>.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(Object.keys(user)); // Output: ["name"]
console.log(Object.getOwnPropertySymbols(user)); // Output: [Symbol(id)]</code></pre>
    
    <h2 style="color: #2980b9;">6. Using Well-Known Symbols</h2>
    <p>JavaScript has built-in symbols like <code>Symbol.iterator</code> and <code>Symbol.toStringTag</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // Output: function values() { [native code] }</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Symbols are a powerful feature in JavaScript for creating unique, non-enumerable object properties. They help prevent naming conflicts and enable advanced object behavior.</p>
</div>
`
},
{
  articleTitle: `Object Prototype`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Prototype in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <strong>prototype</strong> is a fundamental concept in JavaScript that enables inheritance and shared behavior among objects. Every object in JavaScript has a prototype, which is either another object or <code>null</code>. The prototype forms the basis of JavaScript's prototype-based inheritance, allowing objects to inherit properties and methods from their prototype.
    </p>

    <h2 style="color: #2980b9;">1. What is a Prototype?</h2>
    <p>In JavaScript, every object has an internal property called <code>[[Prototype]]</code>, which refers to another object. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks up the prototype chain until it finds the property or reaches the end of the chain (where the prototype is <code>null</code>).</p>
    <pre><code class="language-javascript" codeHighlight>let animal = {
    sound: "Unknown",
    makeSound() {
        console.log(this.sound);
    }
};

let dog = Object.create(animal); // dog inherits from animal
dog.sound = "Woof";

dog.makeSound(); // Output: Woof</code></pre>

    <h2 style="color: #2980b9;">2. The Prototype Chain</h2>
    <p>The prototype chain is a series of linked prototypes that JavaScript traverses to find properties or methods. If a property is not found on an object, JavaScript looks at its prototype, then the prototype's prototype, and so on, until it finds the property or reaches the end of the chain.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = {
    sound: "Unknown"
};

let dog = Object.create(animal);
dog.sound = "Woof";

let puppy = Object.create(dog);

console.log(puppy.sound); // Output: Woof (inherited from dog)
console.log(puppy.hasOwnProperty("sound")); // Output: false</code></pre>

    <h2 style="color: #2980b9;">3. The <code>__proto__</code> Property</h2>
    <p>The <code>__proto__</code> property is a legacy way to access an object's prototype. While it is widely supported, it is recommended to use <code>Object.getPrototypeOf</code> and <code>Object.setPrototypeOf</code> instead.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = { sound: "Unknown" };
let dog = { sound: "Woof" };

dog.__proto__ = animal; // Set prototype (not recommended)
console.log(dog.sound); // Output: Woof (own property)
console.log(dog.hasOwnProperty("sound")); // Output: true</code></pre>

    <h2 style="color: #2980b9;">4. Constructor Functions and Prototypes</h2>
    <p>Constructor functions in JavaScript have a <code>prototype</code> property, which is used to define shared properties and methods for all instances created by the constructor. When you create an object using a constructor, its prototype is set to the constructor's <code>prototype</code> property.</p>
    <pre><code class="language-javascript" codeHighlight>function Animal(sound) {
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

let dog = new Animal("Woof");
dog.makeSound(); // Output: Woof</code></pre>

    <h2 style="color: #2980b9;">5. Modifying Prototypes</h2>
    <p>You can modify an object's prototype dynamically, and all objects that inherit from it will immediately reflect the changes. This is a powerful feature but should be used with caution to avoid unintended side effects.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = { sound: "Unknown" };
let dog = Object.create(animal);

animal.makeSound = function() {
    console.log(this.sound);
};

dog.makeSound(); // Output: Unknown</code></pre>

    <h2 style="color: #2980b9;">6. Prototype vs. <code>__proto__</code></h2>
    <p>The <code>prototype</code> property is used on constructor functions to define shared behavior for instances, while <code>__proto__</code> is a property of an object that points to its prototype. The two are related but serve different purposes.</p>
    <pre><code class="language-javascript" codeHighlight>function Animal() {}
Animal.prototype.sound = "Unknown";

let dog = new Animal();
console.log(dog.sound); // Output: Unknown
console.log(dog.__proto__ === Animal.prototype); // Output: true</code></pre>

    <h2 style="color: #2980b9;">7. Prototypal Inheritance in ES6 Classes</h2>
    <p>ES6 classes provide a syntactic sugar over JavaScript's prototype-based inheritance. Under the hood, classes still use prototypes to share methods and properties.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    constructor(sound) {
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor() {
        super("Woof");
    }
}

let dog = new Dog();
dog.makeSound(); // Output: Woof</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The prototype is a core concept in JavaScript that enables inheritance and shared behavior among objects. By understanding prototypes, you can leverage JavaScript's prototype-based inheritance to create efficient and reusable code. Whether you're working with constructor functions, ES6 classes, or plain objects, prototypes provide a powerful mechanism for defining and sharing behavior across your application.</p>
</div>`
},
{
  articleTitle: `Object Constructor`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Constructor in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, an <strong>Object Constructor</strong> is a special function used to create multiple objects with similar properties and methods. It provides a template for creating objects dynamically.
    </p>
    
    <h2 style="color: #2980b9;">1. Defining an Object Constructor</h2>
    <p>An object constructor function is defined like a regular function but starts with a capital letter by convention.</p>
    <pre><code class="language-javascript" codeHighlight>function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}

let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

person1.greet(); // Output: Hello, my name is Alice
person2.greet(); // Output: Hello, my name is Bob</code></pre>
    
    <h2 style="color: #2980b9;">2. Adding Methods to the Constructor's Prototype</h2>
    <p>To improve memory efficiency, methods can be added to the prototype instead of being inside the constructor function.</p>
    <pre><code class="language-javascript" codeHighlight>Person.prototype.sayAge = function() {
    console.log("I am " + this.age + " years old.");
};

person1.sayAge(); // Output: I am 25 years old
person2.sayAge(); // Output: I am 30 years old</code></pre>
    
    <h2 style="color: #2980b9;">3. Using the <code>new</code> Keyword</h2>
    <p>The <code>new</code> keyword creates a new instance of an object, binding <code>this</code> to the new instance.</p>
    <ul>
        <li>Creates a blank object.</li>
        <li>Sets <code>this</code> to the new object.</li>
        <li>Returns the object automatically.</li>
    </ul>
    
    <h2 style="color: #2980b9;">4. Checking Object Type</h2>
    <p>To check if an object is created from a constructor, use the <code>instanceof</code> operator.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(person1 instanceof Person); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">5. Constructor with Default Values</h2>
    <p>You can set default values by checking if arguments are provided.</p>
    <pre><code class="language-javascript" codeHighlight>function Car(brand = "Toyota", model = "Camry") {
    this.brand = brand;
    this.model = model;
}

let car1 = new Car();
let car2 = new Car("Honda", "Civic");

console.log(car1.brand); // Output: Toyota
console.log(car2.brand); // Output: Honda</code></pre>
    
    <h2 style="color: #2980b9;">6. Using ES6 Classes as Constructors</h2>
    <p>ES6 introduced <code>class</code> syntax, which provides a more structured way to define constructors.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}

let dog = new Animal("Dog", "Woof");
dog.makeSound(); // Output: Woof</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Object constructors are a powerful way to create reusable object structures in JavaScript. Understanding how to use constructors and prototypes helps in writing cleaner and more efficient code.</p>
</div>
`
},
{
  articleTitle: `Object Prototype Inheritance`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Prototype Inheritance in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Prototype inheritance is a key feature of JavaScript that allows objects to inherit properties and methods from other objects. Unlike classical inheritance found in many other programming languages, JavaScript uses a prototype-based model. This means that objects can directly inherit from other objects, creating a dynamic and flexible inheritance mechanism.
    </p>

    <h2 style="color: #2980b9;">1. Understanding Prototype Inheritance</h2>
    <p>In JavaScript, every object has a prototype, which is another object that it inherits properties and methods from. When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it, it looks up the prototype chain until it finds the property or reaches the end of the chain (where the prototype is <code>null</code>).</p>
    <pre><code class="language-javascript" codeHighlight>let animal = {
    sound: "Unknown",
    makeSound() {
        console.log(this.sound);
    }
};

let dog = Object.create(animal); // dog inherits from animal
dog.sound = "Woof";

dog.makeSound(); // Output: Woof</code></pre>

    <h2 style="color: #2980b9;">2. The Prototype Chain</h2>
    <p>The prototype chain is a series of linked prototypes that JavaScript traverses to find properties or methods. If a property is not found on an object, JavaScript looks at its prototype, then the prototype's prototype, and so on, until it finds the property or reaches the end of the chain.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = {
    sound: "Unknown"
};

let dog = Object.create(animal);
dog.sound = "Woof";

let puppy = Object.create(dog);

console.log(puppy.sound); // Output: Woof (inherited from dog)
console.log(puppy.hasOwnProperty("sound")); // Output: false</code></pre>

    <h2 style="color: #2980b9;">3. Constructor Functions and Prototype Inheritance</h2>
    <p>Constructor functions in JavaScript have a <code>prototype</code> property, which is used to define shared properties and methods for all instances created by the constructor. When you create an object using a constructor, its prototype is set to the constructor's <code>prototype</code> property.</p>
    <pre><code class="language-javascript" codeHighlight>function Animal(sound) {
    this.sound = sound;
}

Animal.prototype.makeSound = function() {
    console.log(this.sound);
};

let dog = new Animal("Woof");
dog.makeSound(); // Output: Woof</code></pre>

    <h2 style="color: #2980b9;">4. Modifying Prototypes Dynamically</h2>
    <p>You can modify an object's prototype dynamically, and all objects that inherit from it will immediately reflect the changes. This is a powerful feature but should be used with caution to avoid unintended side effects.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = { sound: "Unknown" };
let dog = Object.create(animal);

animal.makeSound = function() {
    console.log(this.sound);
};

dog.makeSound(); // Output: Unknown</code></pre>

    <h2 style="color: #2980b9;">5. Inheriting from Multiple Prototypes</h2>
    <p>JavaScript does not support multiple inheritance directly, but you can achieve similar behavior by combining properties from multiple prototypes. This can be done using utility functions or libraries.</p>
    <pre><code class="language-javascript" codeHighlight>let canEat = {
    eat() {
        console.log(\`\${this.name} is eating.\`);
    }
};

let canSleep = {
    sleep() {
        console.log(\`\${this.name} is sleeping.\`);
    }
};

function Animal(name) {
    this.name = name;
}

Object.assign(Animal.prototype, canEat, canSleep);

let dog = new Animal("Dog");
dog.eat(); // Output: Dog is eating.
dog.sleep(); // Output: Dog is sleeping.</code></pre>

    <h2 style="color: #2980b9;">6. ES6 Classes and Prototype Inheritance</h2>
    <p>ES6 classes provide a syntactic sugar over JavaScript's prototype-based inheritance. Under the hood, classes still use prototypes to share methods and properties.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    constructor(sound) {
        this.sound = sound;
    }

    makeSound() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor() {
        super("Woof");
    }
}

let dog = new Dog();
dog.makeSound(); // Output: Woof</code></pre>

    <h2 style="color: #2980b9;">7. The <code>super</code> Keyword</h2>
    <p>The <code>super</code> keyword is used in ES6 classes to call the constructor or methods of the parent class. This is essential for setting up inheritance in class-based syntax.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`\${this.name} makes a sound.\`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // Call the parent class constructor
    }

    speak() {
        super.speak(); // Call the parent class method
        console.log(\`\${this.name} barks.\`);
    }
}

let dog = new Dog("Rex");
dog.speak();
// Output:
// Rex makes a sound.
// Rex barks.</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Prototype inheritance is a powerful and flexible feature in JavaScript that allows objects to inherit properties and methods from other objects. By understanding how the prototype chain works, you can create efficient and reusable code. Whether you're using constructor functions, ES6 classes, or plain objects, prototype inheritance provides a robust mechanism for building complex and dynamic applications.</p>
</div>`
},
{
  articleTitle: `Object Class`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Class in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>Object</code> class in JavaScript is the foundation of all objects in the language. Every object in JavaScript is an instance of the <code>Object</code> class, either directly or indirectly. The <code>Object</code> class provides a set of built-in methods and properties that are inherited by all objects, making it a cornerstone of JavaScript's object-oriented programming model.
    </p>

    <h2 style="color: #2980b9;">1. The <code>Object</code> Constructor</h2>
    <p>The <code>Object</code> constructor is used to create new objects. When called with the <code>new</code> keyword, it creates an empty object. When called without <code>new</code>, it performs type conversion.</p>
    <pre><code class="language-javascript" codeHighlight>let obj1 = new Object(); // Creates an empty object
let obj2 = Object(); // Also creates an empty object (without new)

console.log(obj1); // Output: {}
console.log(obj2); // Output: {}</code></pre>

    <h2 style="color: #2980b9;">2. Built-in Methods of the <code>Object</code> Class</h2>
    <p>The <code>Object</code> class provides several built-in methods that are available to all objects. These methods are used to manipulate and inspect objects.</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong><code>Object.keys()</code></strong>: Returns an array of an object's own enumerable property names.</li>
        <li><strong><code>Object.values()</code></strong>: Returns an array of an object's own enumerable property values.</li>
        <li><strong><code>Object.entries()</code></strong>: Returns an array of an object's own enumerable key-value pairs.</li>
        <li><strong><code>Object.assign()</code></strong>: Copies properties from one or more source objects to a target object.</li>
        <li><strong><code>Object.freeze()</code></strong>: Prevents modifications to an object (makes it immutable).</li>
        <li><strong><code>Object.seal()</code></strong>: Prevents new properties from being added to an object but allows modification of existing properties.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John", age: 30 };

console.log(Object.keys(person)); // Output: ["name", "age"]
console.log(Object.values(person)); // Output: ["John", 30]
console.log(Object.entries(person)); // Output: [["name", "John"], ["age", 30]]

let clone = Object.assign({}, person); // Clones the object
console.log(clone); // Output: { name: "John", age: 30 }</code></pre>

    <h2 style="color: #2980b9;">3. Prototype Methods of the <code>Object</code> Class</h2>
    <p>The <code>Object</code> class also provides methods that are available on all objects through the prototype chain. These include:</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong><code>hasOwnProperty()</code></strong>: Checks if an object has a specific property as its own (not inherited).</li>
        <li><strong><code>toString()</code></strong>: Returns a string representation of the object.</li>
        <li><strong><code>valueOf()</code></strong>: Returns the primitive value of the object.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John", age: 30 };

console.log(person.hasOwnProperty("name")); // Output: true
console.log(person.toString()); // Output: [object Object]
console.log(person.valueOf()); // Output: { name: "John", age: 30 }</code></pre>

    <h2 style="color: #2980b9;">4. Creating Objects with <code>Object.create()</code></h2>
    <p>The <code>Object.create()</code> method allows you to create a new object with a specified prototype. This is useful for implementing prototype-based inheritance.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = {
    sound: "Unknown",
    makeSound() {
        console.log(this.sound);
    }
};

let dog = Object.create(animal); // dog inherits from animal
dog.sound = "Woof";

dog.makeSound(); // Output: Woof</code></pre>

    <h2 style="color: #2980b9;">5. Object Property Descriptors</h2>
    <p>The <code>Object</code> class provides methods to define and inspect property descriptors, which control the behavior of object properties (e.g., writability, enumerability, configurability).</p>
    <pre><code class="language-javascript" codeHighlight>let person = {};

Object.defineProperty(person, "name", {
    value: "John",
    writable: false, // Cannot change the value
    enumerable: true, // Shows up in enumeration
    configurable: false // Cannot delete or modify attributes
});

console.log(person.name); // Output: John
person.name = "Jane"; // Throws an error in strict mode
console.log(person.name); // Output: John</code></pre>

    <h2 style="color: #2980b9;">6. Object Immutability</h2>
    <p>The <code>Object</code> class provides methods to make objects immutable, preventing modifications to their properties.</p>
    <pre><code class="language-javascript" codeHighlight>let person = { name: "John", age: 30 };

Object.freeze(person); // Makes the object immutable
person.age = 40; // Fails silently in non-strict mode
console.log(person.age); // Output: 30

Object.seal(person); // Prevents adding new properties
person.city = "New York"; // Fails silently in non-strict mode
console.log(person.city); // Output: undefined</code></pre>

    <h2 style="color: #2980b9;">7. The <code>Object</code> Class in ES6</h2>
    <p>In ES6, the <code>Object</code> class was extended with additional methods, such as <code>Object.setPrototypeOf</code> and <code>Object.getPrototypeOf</code>, which allow you to dynamically set and retrieve an object's prototype.</p>
    <pre><code class="language-javascript" codeHighlight>let animal = { sound: "Unknown" };
let dog = { sound: "Woof" };

Object.setPrototypeOf(dog, animal); // Set prototype
console.log(Object.getPrototypeOf(dog) === animal); // Output: true</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>Object</code> class is the foundation of all objects in JavaScript, providing a rich set of methods and properties for creating, manipulating, and inspecting objects. By leveraging the features of the <code>Object</code> class, you can build robust and flexible applications. Whether you're working with simple objects, prototype-based inheritance, or advanced object manipulation, the <code>Object</code> class is an essential tool in JavaScript development.</p>
</div>`
},
{
  articleTitle: `Object Static`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Static Methods in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, <strong>static methods</strong> are functions defined on a class itself rather than its instances. They are useful for utility functions that do not need access to instance-specific data.
    </p>
    
    <h2 style="color: #2980b9;">1. Defining Static Methods</h2>
    <p>Static methods are defined using the <code>static</code> keyword inside a class.</p>
    <pre><code class="language-javascript" codeHighlight>
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(5, 3)); // Output: 8
    </code></pre>
    
    <h2 style="color: #2980b9;">2. Accessing Static Methods</h2>
    <p>Static methods are called on the class itself, not on instances.</p>
    <pre><code class="language-javascript" codeHighlight>
let mathObj = new MathUtils();
// mathObj.add(5, 3); // Error: add is not a function
console.log(MathUtils.add(10, 20)); // Output: 30
    </code></pre>
    
    <h2 style="color: #2980b9;">3. Common Use Cases of Static Methods</h2>
    <ul>
        <li>Utility functions (e.g., mathematical operations)</li>
        <li>Helper methods</li>
        <li>Factory methods</li>
    </ul>
    
    <h3 style="color: #16a085;">Example: Utility Function</h3>
    <pre><code class="language-javascript" codeHighlight>
class Helper {
    static greet(name) {
        return \`Hello, \${name}!\`;
    }
}
console.log(Helper.greet("Alice")); // Output: Hello, Alice!
    </code></pre>
    
    <h3 style="color: #16a085;">Example: Factory Method</h3>
    <p>A factory method creates and returns an object.</p>
    <pre><code class="language-javascript" codeHighlight>
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    static createToyota() {
        return new Car("Toyota");
    }
}
let myCar = Car.createToyota();
console.log(myCar.brand); // Output: Toyota
    </code></pre>
    
    <h2 style="color: #2980b9;">4. Inheriting Static Methods</h2>
    <p>Static methods can be inherited by subclasses.</p>
    <pre><code class="language-javascript" codeHighlight>
class Parent {
    static sayHello() {
        return "Hello from Parent";
    }
}
class Child extends Parent {}
console.log(Child.sayHello()); // Output: Hello from Parent
    </code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Static methods are useful for defining functions that do not require access to instance-specific properties. They improve code organization and reusability in JavaScript classes.</p>
</div>
`
},
{
  articleTitle: `Object Super`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Super in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>super</code> keyword in JavaScript is used to call methods from a parent class within a subclass. It allows a child class to access properties and methods of its parent class efficiently.
    </p>
    
    <h2 style="color: #2980b9;">1. Using <code>super</code> in Class Methods</h2>
    <p>When a subclass needs to invoke a method from its parent class, <code>super</code> can be used.</p>
    <pre><code class="language-javascript" codeHighlight>class Parent {
    greet() {
        console.log("Hello from Parent class");
    }
}

class Child extends Parent {
    greet() {
        super.greet(); // Calls the method from Parent class
        console.log("Hello from Child class");
    }
}

let obj = new Child();
obj.greet();
// Output:
// Hello from Parent class
// Hello from Child class</code></pre>
    
    <h2 style="color: #2980b9;">2. Using <code>super</code> in Constructors</h2>
    <p>In a derived class, the <code>super</code> keyword must be called before accessing <code>this</code> to inherit properties from the parent class.</p>
    <pre><code class="language-javascript" codeHighlight>class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, role) {
        super(name); // Calls the constructor of Person
        this.role = role;
    }
}

let emp = new Employee("Alice", "Developer");
console.log(emp.name); // Output: Alice
console.log(emp.role); // Output: Developer</code></pre>
    
    <h2 style="color: #2980b9;">3. Calling Parent Getters and Setters</h2>
    <p><code>super</code> can also be used to call getter and setter methods from a parent class.</p>
    <pre><code class="language-javascript" codeHighlight>class Parent {
    get info() {
        return "Data from Parent";
    }
}

class Child extends Parent {
    get info() {
        return super.info + " and Child";
    }
}

let obj = new Child();
console.log(obj.info); // Output: Data from Parent and Child</code></pre>
    
    <h2 style="color: #2980b9;">4. Using <code>super</code> in Method Overriding</h2>
    <p>When a child class overrides a method, <code>super</code> allows it to call the parent method while still adding new behavior.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log("Dog barks");
    }
}

let pet = new Dog();
pet.speak();
// Output:
// Animal makes a sound
// Dog barks</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>super</code> keyword is a powerful tool in JavaScript, enabling subclasses to efficiently access and extend parent class methods and properties. Proper usage of <code>super</code> enhances code reusability and maintainability.</p>
</div>
`
},
{
  articleTitle: `Object Static Properties`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Static Properties in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Static properties in JavaScript are properties that belong to the class or constructor function itself, rather than to instances of the class. These properties are shared across all instances and are accessed directly on the class or constructor function. Static properties are useful for defining utility methods, constants, or shared data that does not depend on instance-specific state.
    </p>

    <h2 style="color: #2980b9;">1. What are Static Properties?</h2>
    <p>Static properties are defined directly on the class or constructor function and are accessed using the class name, not an instance of the class. They are typically used for functionality that is relevant to the class as a whole, rather than to individual instances.</p>
    <pre><code class="language-javascript" codeHighlight>class MathUtils {
    static PI = 3.14159; // Static property

    static square(x) { // Static method
        return x * x;
    }
}

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.square(5)); // Output: 25</code></pre>

    <h2 style="color: #2980b9;">2. Static Properties in Constructor Functions</h2>
    <p>In constructor functions, static properties are defined directly on the function object. These properties are shared across all instances created by the constructor.</p>
    <pre><code class="language-javascript" codeHighlight>function MathUtils() {}

MathUtils.PI = 3.14159; // Static property

MathUtils.square = function(x) { // Static method
    return x * x;
};

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.square(5)); // Output: 25</code></pre>

    <h2 style="color: #2980b9;">3. Static Properties in ES6 Classes</h2>
    <p>ES6 classes provide a cleaner syntax for defining static properties and methods using the <code>static</code> keyword. Static properties are accessed directly on the class, not on instances.</p>
    <pre><code class="language-javascript" codeHighlight>class Counter {
    static count = 0; // Static property

    static increment() { // Static method
        Counter.count++;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.count); // Output: 2</code></pre>

    <h2 style="color: #2980b9;">4. Use Cases for Static Properties</h2>
    <p>Static properties are commonly used for:</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Utility Methods</strong>: Functions that perform generic tasks and do not depend on instance-specific data.</li>
        <li><strong>Constants</strong>: Values that remain the same across all instances of the class.</li>
        <li><strong>Shared Data</strong>: Data that needs to be shared or tracked across all instances.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>class Config {
    static API_URL = "https://api.example.com"; // Static constant

    static getEndpoint(endpoint) { // Static utility method
        return \`\${Config.API_URL}/\${endpoint}\`;
    }
}

console.log(Config.getEndpoint("users")); // Output: https://api.example.com/users</code></pre>

    <h2 style="color: #2980b9;">5. Static Properties and Inheritance</h2>
    <p>Static properties are inherited by subclasses. However, they are still accessed directly on the subclass, not on instances of the subclass.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    static type = "Animal"; // Static property
}

class Dog extends Animal {}

console.log(Dog.type); // Output: Animal (inherited from Animal)</code></pre>

    <h2 style="color: #2980b9;">6. Static Properties in Modules</h2>
    <p>Static properties are often used in modules to define constants or utility functions that are shared across the application.</p>
    <pre><code class="language-javascript" codeHighlight>// mathUtils.js
export class MathUtils {
    static PI = 3.14159;

    static square(x) {
        return x * x;
    }
}

// main.js
import { MathUtils } from "./mathUtils.js";

console.log(MathUtils.PI); // Output: 3.14159
console.log(MathUtils.square(5)); // Output: 25</code></pre>

    <h2 style="color: #2980b9;">7. Limitations of Static Properties</h2>
    <p>Static properties are not accessible on instances of the class. Attempting to access them on an instance will result in <code>undefined</code>.</p>
    <pre><code class="language-javascript" codeHighlight>class MathUtils {
    static PI = 3.14159;
}

let utils = new MathUtils();
console.log(utils.PI); // Output: undefined</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Static properties in JavaScript are a powerful feature for defining properties and methods that belong to the class or constructor function itself, rather than to instances. They are useful for defining utility methods, constants, and shared data that are relevant to the class as a whole. By leveraging static properties, you can write cleaner and more organized code, especially when working with utility classes, constants, or shared functionality.</p>
</div>`
},
{
  articleTitle: `Object Static Methods`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Static Methods in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, <strong>static methods</strong> are functions that belong to a class but are not accessible through instances of the class. These methods are defined using the <code>static</code> keyword and are called directly on the class itself.
    </p>

    <h2 style="color: #2980b9;">1. Defining Static Methods</h2>
    <p>Static methods are declared inside a class using the <code>static</code> keyword.</p>
    <pre><code class="language-javascript">class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

console.log(MathUtils.add(5, 3));
// Output: 8</code></pre>

    <h2 style="color: #2980b9;">2. Calling Static Methods</h2>
    <p>Static methods are called on the class itself, not on instances.</p>
    <pre><code class="language-javascript">let math = new MathUtils();
// math.add(5, 3); // This will throw an error because static methods are not accessible via instances</code></pre>

    <h2 style="color: #2980b9;">3. Use Cases of Static Methods</h2>
    <ul>
        <li>Utility functions (e.g., mathematical operations)</li>
        <li>Helper functions (e.g., formatting data)</li>
        <li>Factory methods (e.g., creating objects in a standardized way)</li>
    </ul>

    <h2 style="color: #2980b9;">4. Example: Utility Functions</h2>
    <p>Static methods can be used to perform operations without creating class instances.</p>
    <pre><code class="language-javascript">class Formatter {
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

console.log(Formatter.capitalize("hello"));
// Output: Hello</code></pre>

    <h2 style="color: #2980b9;">5. Example: Factory Method</h2>
    <p>Static methods can be used to create instances with predefined properties.</p>
    <pre><code class="language-javascript">class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    static createTesla(model) {
        return new Car("Tesla", model);
    }
}

let myCar = Car.createTesla("Model S");
console.log(myCar);
// Output: Car { brand: 'Tesla', model: 'Model S' }</code></pre>

    <h2 style="color: #2980b9;">6. Static Methods and Inheritance</h2>
    <p>Static methods are inherited by subclasses and can be overridden.</p>
    <pre><code class="language-javascript">class Parent {
    static greet() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {}

Child.greet();
// Output: Hello from Parent</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Static methods provide a way to create utility functions that operate at the class level, making them useful for mathematical operations, helper functions, and factory methods.</p>
</div>
`
},
{
  articleTitle: `Object Private Properties`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Private Properties in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, **private properties** are used to encapsulate object data, restricting direct access from outside the object. This is useful for maintaining data integrity and enforcing controlled access.
    </p>
    
    <h2 style="color: #2980b9;">1. Using the <code>#</code> Symbol for Private Properties</h2>
    <p>ES6 introduced the \`#\` symbol to define private properties inside a class.</p>
    <pre><code class="language-javascript" codeHighlight>
class Person {
    #name;
    constructor(name) {
        this.#name = name;
    }
    getName() {
        return this.#name;
    }
}

let person = new Person("Alice");
console.log(person.getName()); // Output: Alice
console.log(person.#name); // Error: Private field '#name' must be declared in an enclosing class
    </code></pre>
    
    <h2 style="color: #2980b9;">2. Benefits of Private Properties</h2>
    <p>Private properties provide better encapsulation and security for object data.</p>
    <ul>
        <li>Prevents accidental modification of sensitive data.</li>
        <li>Encourages controlled access through getter and setter methods.</li>
        <li>Avoids naming conflicts in large codebases.</li>
    </ul>
    
    <h2 style="color: #2980b9;">3. Private Methods in JavaScript</h2>
    <p>Similar to properties, private methods can be defined using \`#\`.</p>
    <pre><code class="language-javascript" codeHighlight>
class BankAccount {
    #balance = 0;
    
    #calculateInterest() {
        return this.#balance * 0.05;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance + this.#calculateInterest();
    }
}

let account = new BankAccount();
account.deposit(1000);
console.log(account.getBalance()); // Output: 1050
console.log(account.#calculateInterest()); // Error: Private method '#calculateInterest' is not accessible
    </code></pre>
    
    <h2 style="color: #2980b9;">4. Workarounds for Private Properties Before ES6</h2>
    <p>Before private properties were introduced, developers used closures or WeakMaps.</p>
    
    <h3 style="color: #16a085;">4.1 Using Closures</h3>
    <pre><code class="language-javascript" codeHighlight>
function Person(name) {
    let _name = name; // Private variable
    
    this.getName = function() {
        return _name;
    };
}

let user = new Person("Bob");
console.log(user.getName()); // Output: Bob
console.log(user._name); // Undefined (not accessible directly)
    </code></pre>
    
    <h3 style="color: #16a085;">4.2 Using WeakMaps</h3>
    <pre><code class="language-javascript" codeHighlight>
const privateData = new WeakMap();

class Employee {
    constructor(name) {
        privateData.set(this, { name });
    }
    getName() {
        return privateData.get(this).name;
    }
}

let emp = new Employee("John");
console.log(emp.getName()); // Output: John
console.log(privateData.get(emp)); // Accessible only inside the class
    </code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Private properties help in writing secure and maintainable JavaScript code. The modern approach using the \`#\` symbol is preferred, but older techniques like closures and WeakMaps can still be useful in certain cases.</p>
</div>
`
},
{
  articleTitle: `Object Private Methods`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Private Methods in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Private methods in JavaScript are methods that are only accessible within the class or object where they are defined. They are not accessible from outside the class, making them useful for encapsulating implementation details and ensuring that certain functionality is not exposed or modified externally. Private methods help improve code maintainability and reduce the risk of unintended side effects.
    </p>

    <h2 style="color: #2980b9;">1. What are Private Methods?</h2>
    <p>Private methods are methods that can only be called from within the class or object where they are defined. They are not accessible from outside the class, making them ideal for encapsulating internal logic or helper functions that should not be exposed to the outside world.</p>
    <pre><code class="language-javascript" codeHighlight>class Counter {
    #count = 0; // Private field

    #increment() { // Private method
        this.#count++;
    }

    incrementBy(value) {
        for (let i = 0; i < value; i++) {
            this.#increment(); // Calling private method
        }
    }

    getCount() {
        return this.#count;
    }
}

let counter = new Counter();
counter.incrementBy(3);
console.log(counter.getCount()); // Output: 3
console.log(counter.#increment); // Error: Private method is not accessible</code></pre>

    <h2 style="color: #2980b9;">2. Private Methods in ES6 Classes</h2>
    <p>In ES6 classes, private methods are defined using the <code>#</code> prefix. This syntax ensures that the method is only accessible within the class and cannot be called or modified from outside.</p>
    <pre><code class="language-javascript" codeHighlight>class BankAccount {
    #balance = 0; // Private field

    #validateAmount(amount) { // Private method
        if (amount <= 0) {
            throw new Error("Amount must be positive");
        }
    }

    deposit(amount) {
        this.#validateAmount(amount); // Calling private method
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // Output: 100
console.log(account.#validateAmount); // Error: Private method is not accessible</code></pre>

    <h2 style="color: #2980b9;">3. Private Methods in Constructor Functions</h2>
    <p>In constructor functions, private methods can be implemented using closures. By defining a function inside the constructor, you can create a private scope that is inaccessible from outside the function.</p>
    <pre><code class="language-javascript" codeHighlight>function Counter() {
    let count = 0; // Private variable

    function increment() { // Private method
        count++;
    }

    this.incrementBy = function(value) {
        for (let i = 0; i < value; i++) {
            increment(); // Calling private method
        }
    };

    this.getCount = function() {
        return count;
    };
}

let counter = new Counter();
counter.incrementBy(3);
console.log(counter.getCount()); // Output: 3
console.log(counter.increment); // Output: undefined (private method is not accessible)</code></pre>

    <h2 style="color: #2980b9;">4. Use Cases for Private Methods</h2>
    <p>Private methods are commonly used for:</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Encapsulation</strong>: Hiding internal implementation details from external code.</li>
        <li><strong>Validation</strong>: Performing internal validation or checks before modifying state.</li>
        <li><strong>Helper Functions</strong>: Defining utility functions that are only relevant within the class.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>class User {
    #password; // Private field

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    #validatePassword(password) { // Private method
        return password.length >= 8;
    }

    setPassword(newPassword) {
        if (this.#validatePassword(newPassword)) {
            this.#password = newPassword;
        } else {
            throw new Error("Password must be at least 8 characters long");
        }
    }
}

let user = new User("john_doe", "oldPassword");
user.setPassword("newPassword");
console.log(user.#validatePassword); // Error: Private method is not accessible</code></pre>

    <h2 style="color: #2980b9;">5. Private Methods and Inheritance</h2>
    <p>Private methods are not inherited by subclasses. They are only accessible within the class where they are defined. This ensures that the encapsulation of private methods is maintained even in inheritance hierarchies.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    #sound = "Unknown"; // Private field

    #makeSound() { // Private method
        console.log(this.#sound);
    }

    speak() {
        this.#makeSound(); // Calling private method
    }
}

class Dog extends Animal {
    constructor() {
        super();
        this.#sound = "Woof"; // Error: Private field is not accessible
    }
}

let dog = new Dog();
dog.speak(); // Output: Unknown (private method is not overridden)</code></pre>

    <h2 style="color: #2980b9;">6. Limitations of Private Methods</h2>
    <p>Private methods are not accessible outside the class, which can make testing or debugging more challenging. Additionally, they are not supported in older JavaScript environments, so you may need to use alternative approaches (e.g., closures) for compatibility.</p>
    <pre><code class="language-javascript" codeHighlight>class Example {
    #privateMethod() {
        console.log("This is private");
    }

    callPrivateMethod() {
        this.#privateMethod(); // Accessible within the class
    }
}

let example = new Example();
example.callPrivateMethod(); // Output: This is private
console.log(example.#privateMethod); // Error: Private method is not accessible</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Private methods in JavaScript are a powerful tool for encapsulating internal logic and ensuring that certain functionality is not exposed or modified externally. By using private methods, you can improve the maintainability and robustness of your code. Whether you're working with ES6 classes or constructor functions, private methods provide a way to hide implementation details and enforce encapsulation, making your code more secure and easier to manage.</p>
</div>`
},
{
  articleTitle: `Object Public Properties`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Public Properties in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, public properties are properties that can be accessed and modified from outside the object. 
        They are commonly used in object-oriented programming to store and retrieve data within an object.
    </p>
    
    <h2 style="color: #2980b9;">1. Defining Public Properties</h2>
    <p>Public properties are created by assigning values directly to an object.</p>
    <pre><code class="language-javascript" codeHighlight>class Person {
    constructor(name, age) {
        this.name = name; // Public property
        this.age = age;   // Public property
    }
}

let person = new Person("Alice", 25);
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25</code></pre>
    
    <h2 style="color: #2980b9;">2. Modifying Public Properties</h2>
    <p>Public properties can be easily modified after object creation.</p>
    <pre><code class="language-javascript" codeHighlight>person.name = "Bob";
console.log(person.name); // Output: Bob</code></pre>
    
    <h2 style="color: #2980b9;">3. Public Properties in Object Literals</h2>
    <p>Objects created using object literals can also have public properties.</p>
    <pre><code class="language-javascript" codeHighlight>let car = {
    brand: "Toyota",
    model: "Camry"
};
console.log(car.brand); // Output: Toyota
car.model = "Corolla";
console.log(car.model); // Output: Corolla</code></pre>
    
    <h2 style="color: #2980b9;">4. Public Properties in ES6 Classes</h2>
    <p>ES6 introduced a more concise way to define public properties directly in a class.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    species = "Dog"; // Public property
}
let pet = new Animal();
console.log(pet.species); // Output: Dog</code></pre>
    
    <h2 style="color: #2980b9;">5. Public vs. Private Properties</h2>
    <p>Public properties can be accessed and modified from outside the object, whereas private properties (using <code>#</code>) cannot.</p>
    <pre><code class="language-javascript" codeHighlight>class User {
    username = "guest"; // Public property
    #password = "secret"; // Private property
}
let user = new User();
console.log(user.username); // Output: guest
console.log(user.#password); // Error: Private field '#password' must be declared in an enclosing class</code></pre>
    
    <h2 style="color: #2980b9;">6. Using Getters and Setters with Public Properties</h2>
    <p>Public properties can be accessed using getters and modified using setters.</p>
    <pre><code class="language-javascript" codeHighlight>class Book {
    constructor(title) {
        this._title = title; // Public property with underscore convention
    }
    get title() {
        return this._title;
    }
    set title(newTitle) {
        this._title = newTitle;
    }
}
let book = new Book("JavaScript Basics");
console.log(book.title); // Output: JavaScript Basics
book.title = "Advanced JavaScript";
console.log(book.title); // Output: Advanced JavaScript</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Public properties are essential for storing and modifying object data. They provide flexibility but should be managed carefully to prevent unintended modifications.</p>
</div>
`
},
{
  articleTitle: `Object Public Methods`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Public Methods in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Public methods in JavaScript are methods that are accessible from outside the class or object where they are defined. They form the public interface of an object, allowing external code to interact with the object's functionality. Public methods are essential for defining the behavior of an object and enabling communication between different parts of a program.
    </p>

    <h2 style="color: #2980b9;">1. What are Public Methods?</h2>
    <p>Public methods are methods that can be called from outside the class or object. They are part of the object's public API and are used to expose functionality to other parts of the program. Public methods are defined without any special syntax and are accessible on instances of the class or object.</p>
    <pre><code class="language-javascript" codeHighlight>class Calculator {
    add(a, b) { // Public method
        return a + b;
    }

    subtract(a, b) { // Public method
        return a - b;
    }
}

let calc = new Calculator();
console.log(calc.add(5, 3)); // Output: 8
console.log(calc.subtract(5, 3)); // Output: 2</code></pre>

    <h2 style="color: #2980b9;">2. Public Methods in ES6 Classes</h2>
    <p>In ES6 classes, public methods are defined directly within the class body. They are accessible on instances of the class and can be called from external code.</p>
    <pre><code class="language-javascript" codeHighlight>class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() { // Public method
        console.log(\`Hello, my name is \${this.name}\`);
    }

    getBirthYear() { // Public method
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}

let user = new User("John", 30);
user.greet(); // Output: Hello, my name is John
console.log(user.getBirthYear()); // Output: 1993</code></pre>

    <h2 style="color: #2980b9;">3. Public Methods in Constructor Functions</h2>
    <p>In constructor functions, public methods are defined using the <code>this</code> keyword. These methods are added to the prototype of the constructor function and are shared across all instances.</p>
    <pre><code class="language-javascript" codeHighlight>function Calculator() {}

Calculator.prototype.add = function(a, b) { // Public method
    return a + b;
};

Calculator.prototype.subtract = function(a, b) { // Public method
    return a - b;
};

let calc = new Calculator();
console.log(calc.add(5, 3)); // Output: 8
console.log(calc.subtract(5, 3)); // Output: 2</code></pre>

    <h2 style="color: #2980b9;">4. Use Cases for Public Methods</h2>
    <p>Public methods are commonly used for:</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Exposing Functionality</strong>: Providing a way for external code to interact with an object.</li>
        <li><strong>Encapsulation</strong>: Hiding internal implementation details while exposing a clean interface.</li>
        <li><strong>Reusability</strong>: Defining methods that can be reused across multiple instances of a class.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) { // Public method
        this.balance += amount;
    }

    withdraw(amount) { // Public method
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            throw new Error("Insufficient funds");
        }
    }

    getBalance() { // Public method
        return this.balance;
    }
}

let account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance()); // Output: 120</code></pre>

    <h2 style="color: #2980b9;">5. Public Methods and Inheritance</h2>
    <p>Public methods are inherited by subclasses. This allows subclasses to reuse and extend the functionality of the parent class.</p>
    <pre><code class="language-javascript" codeHighlight>class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() { // Public method
        console.log(\`\${this.name} makes a sound.\`);
    }
}

class Dog extends Animal {
    speak() { // Overriding public method
        console.log(\`\${this.name} barks.\`);
    }
}

let dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.</code></pre>

    <h2 style="color: #2980b9;">6. Public Methods in Modules</h2>
    <p>Public methods are often used in modules to expose functionality to other parts of the application. This allows for modular and organized code.</p>
    <pre><code class="language-javascript" codeHighlight>// mathUtils.js
export class MathUtils {
    static add(a, b) { // Public static method
        return a + b;
    }

    static subtract(a, b) { // Public static method
        return a - b;
    }
}

// main.js
import { MathUtils } from "./mathUtils.js";

console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(5, 3)); // Output: 2</code></pre>

    <h2 style="color: #2980b9;">7. Limitations of Public Methods</h2>
    <p>Public methods are accessible to all parts of the program, which can lead to unintended modifications or misuse. To mitigate this, it's important to design a clear and well-documented public API.</p>
    <pre><code class="language-javascript" codeHighlight>class Counter {
    constructor() {
        this.count = 0;
    }

    increment() { // Public method
        this.count++;
    }
}

let counter = new Counter();
counter.increment();
console.log(counter.count); // Output: 1
counter.count = 100; // Direct modification of internal state (not recommended)
console.log(counter.count); // Output: 100</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Public methods in JavaScript are a fundamental part of object-oriented programming, providing a way to expose functionality and define the behavior of objects. By designing a clear and well-documented public API, you can create robust and reusable code that is easy to understand and maintain. Whether you're working with ES6 classes, constructor functions, or modules, public methods are essential for building interactive and dynamic applications.</p>
</div>`
},
{
  articleTitle: `Object Symbol`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Symbol in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, <strong>Symbols</strong> are a unique and immutable primitive data type introduced in ES6. They are primarily used to create object properties that are guaranteed to be unique, helping to prevent accidental property name conflicts.
    </p>
    
    <h2 style="color: #2980b9;">1. Creating a Symbol</h2>
    <p>You can create a Symbol using the <code>Symbol()</code> function.</p>
    <pre><code class="language-javascript">let sym1 = Symbol();
let sym2 = Symbol("description");
console.log(typeof sym1); // Output: "symbol"</code></pre>
    
    <h2 style="color: #2980b9;">2. Symbols as Object Properties</h2>
    <p>Since Symbols are unique, they can be used as object properties to avoid name conflicts.</p>
    <pre><code class="language-javascript">let id = Symbol("id");
let user = {
    name: "Alice",
    [id]: 12345
};
console.log(user[id]); // Output: 12345</code></pre>
    
    <h2 style="color: #2980b9;">3. Symbols are Unique</h2>
    <p>Each Symbol is unique, even if they have the same description.</p>
    <pre><code class="language-javascript">let symA = Symbol("test");
let symB = Symbol("test");
console.log(symA === symB); // Output: false</code></pre>
    
    <h2 style="color: #2980b9;">4. Using Symbols in Object Methods</h2>
    <p>Symbols can be used in object methods.</p>
    <pre><code class="language-javascript">let action = Symbol("action");
let obj = {
    [action]() {
        console.log("Performing an action...");
    }
};
obj[action](); // Output: Performing an action...</code></pre>
    
    <h2 style="color: #2980b9;">5. Symbol.for() and Symbol.keyFor()</h2>
    <p>The <code>Symbol.for()</code> method creates or retrieves a global Symbol, while <code>Symbol.keyFor()</code> retrieves its key.</p>
    <pre><code class="language-javascript">let globalSym = Symbol.for("shared");
console.log(Symbol.keyFor(globalSym)); // Output: "shared"</code></pre>
    
    <h2 style="color: #2980b9;">6. Retrieving Symbol Properties</h2>
    <p>Symbols are not included in <code>Object.keys()</code> or <code>Object.values()</code>, but can be accessed using <code>Object.getOwnPropertySymbols()</code>.</p>
    <pre><code class="language-javascript">console.log(Object.getOwnPropertySymbols(user)); // Output: [Symbol(id)]</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Symbols provide a powerful way to create unique properties in objects, making them useful for hiding implementation details and avoiding naming collisions.</p>
</div>
`
},
{
  articleTitle: `Object Object`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Object in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, the term <strong>"Object Object"</strong> often appears when you try to convert an object to a string without explicitly defining how it should be represented. This typically happens when you use the <code>toString()</code> method or implicitly convert an object to a string (e.g., by concatenating it with another string). Understanding this behavior is crucial for debugging and working with objects effectively.
    </p>

    <h2 style="color: #2980b9;">1. What is "Object Object"?</h2>
    <p>When you try to convert an object to a string in JavaScript, the default behavior is to call the <code>toString()</code> method on the object. The default implementation of <code>toString()</code> for objects returns <code>"[object Object]"</code>, which is why you often see this output.</p>
    <pre><code class="language-javascript" codeHighlight>let obj = { name: "John", age: 30 };
console.log(obj.toString()); // Output: [object Object]
console.log("User: " + obj); // Output: User: [object Object]</code></pre>

    <h2 style="color: #2980b9;">2. Why Does This Happen?</h2>
    <p>The <code>"[object Object]"</code> output is the result of the default <code>toString()</code> method inherited from the <code>Object.prototype</code>. This method is designed to provide a generic string representation of an object, which is not very useful for debugging or displaying object data.</p>
    <pre><code class="language-javascript" codeHighlight>let obj = { name: "John", age: 30 };
console.log(Object.prototype.toString.call(obj)); // Output: [object Object]</code></pre>

    <h2 style="color: #2980b9;">3. Customizing Object String Representation</h2>
    <p>To provide a more meaningful string representation of an object, you can override the <code>toString()</code> method. This allows you to define how the object should be converted to a string.</p>
    <pre><code class="language-javascript" codeHighlight>let person = {
    name: "John",
    age: 30,
    toString() {
        return \`Person: \${this.name}, \${this.age} years old\`;
    }
};

console.log(person.toString()); // Output: Person: John, 30 years old
console.log("User: " + person); // Output: User: Person: John, 30 years old</code></pre>

    <h2 style="color: #2980b9;">4. Using <code>JSON.stringify()</code></h2>
    <p>If you want to convert an object to a string for debugging or logging purposes, you can use <code>JSON.stringify()</code>. This method converts the object to a JSON string, which is more readable and informative than <code>"[object Object]"</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let obj = { name: "John", age: 30 };
console.log(JSON.stringify(obj)); // Output: {"name":"John","age":30}</code></pre>

    <h2 style="color: #2980b9;">5. Common Scenarios Where "Object Object" Appears</h2>
    <p>The <code>"[object Object]"</code> output often appears in the following scenarios:</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>String Concatenation</strong>: When an object is concatenated with a string.</li>
        <li><strong>Implicit Conversion</strong>: When an object is used in a context that expects a string (e.g., <code>alert(obj)</code>).</li>
        <li><strong>Debugging</strong>: When logging an object without using <code>JSON.stringify()</code> or a custom <code>toString()</code> method.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>let obj = { name: "John", age: 30 };
alert(obj); // Output: [object Object] (in an alert box)
console.log("Details: " + obj); // Output: Details: [object Object]</code></pre>

    <h2 style="color: #2980b9;">6. Avoiding "Object Object" in Output</h2>
    <p>To avoid the <code>"[object Object]"</code> output, you can:</p>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li>Override the <code>toString()</code> method for custom string representation.</li>
        <li>Use <code>JSON.stringify()</code> to convert the object to a JSON string.</li>
        <li>Explicitly access and display the object's properties.</li>
    </ul>
    <pre><code class="language-javascript" codeHighlight>let obj = { name: "John", age: 30 };

// Custom toString()
obj.toString = function() {
    return \`{ name: \${this.name}, age: \${this.age} }\`;
};
console.log("User: " + obj); // Output: User: { name: John, age: 30 }

// Using JSON.stringify()
console.log("User: " + JSON.stringify(obj)); // Output: User: {"name":"John","age":30}

// Explicitly accessing properties
console.log(\`User: \${obj.name}, \${obj.age}\`); // Output: User: John, 30</code></pre>

    <h2 style="color: #2980b9;">7. Debugging with "Object Object"</h2>
    <p>When debugging, seeing <code>"[object Object]"</code> can be frustrating. To get more meaningful information, use tools like <code>console.dir()</code> or <code>console.table()</code> to inspect the object's properties.</p>
    <pre><code class="language-javascript" codeHighlight>let obj = { name: "John", age: 30 };

console.dir(obj); // Output: Displays the object's properties in an interactive list
console.table(obj); // Output: Displays the object's properties in a table format</code></pre>

    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>"[object Object]"</code> output in JavaScript is a result of the default <code>toString()</code> method for objects. While it is not very informative, you can customize this behavior by overriding the <code>toString()</code> method or using <code>JSON.stringify()</code> for better debugging and logging. By understanding and addressing this behavior, you can make your code more readable and easier to debug.</p>
</div>`
},
{
  articleTitle: `Object Array`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Array in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In JavaScript, an <strong>Object Array</strong> is an array containing multiple objects. Each object can store key-value pairs, making object arrays useful for managing collections of data.
    </p>
    
    <h2 style="color: #2980b9;">1. Creating an Array of Objects</h2>
    <p>You can store multiple objects inside an array using square brackets <code>[]</code>.</p>
    <pre><code class="language-javascript" codeHighlight>let students = [
    { name: "Alice", age: 22, course: "Math" },
    { name: "Bob", age: 24, course: "Science" },
    { name: "Charlie", age: 23, course: "History" }
];
console.log(students);</code></pre>
    
    <h2 style="color: #2980b9;">2. Accessing Objects in an Array</h2>
    <p>Use index notation to access a specific object in the array.</p>
    <pre><code class="language-javascript" codeHighlight>console.log(students[0].name); // Output: Alice</code></pre>
    
    <h2 style="color: #2980b9;">3. Iterating Through an Object Array</h2>
    <p>You can use loops like <code>forEach()</code> or <code>map()</code> to iterate over an array of objects.</p>
    <pre><code class="language-javascript" codeHighlight>students.forEach(student => {
    console.log(\`\${student.name} is \${student.age} years old and studies \${student.course}.\`);
});</code></pre>
    
    <h2 style="color: #2980b9;">4. Adding a New Object to the Array</h2>
    <p>Use <code>push()</code> to add a new object.</p>
    <pre><code class="language-javascript" codeHighlight>students.push({ name: "David", age: 25, course: "Physics" });
console.log(students);</code></pre>
    
    <h2 style="color: #2980b9;">5. Removing an Object from the Array</h2>
    <p>Use <code>splice()</code> to remove an object at a specific index.</p>
    <pre><code class="language-javascript" codeHighlight>students.splice(1, 1); // Removes the second object (Bob)
console.log(students);</code></pre>
    
    <h2 style="color: #2980b9;">6. Filtering Objects in an Array</h2>
    <p>Use <code>filter()</code> to find objects that meet certain conditions.</p>
    <pre><code class="language-javascript" codeHighlight>let youngStudents = students.filter(student => student.age < 24);
console.log(youngStudents);</code></pre>
    
    <h2 style="color: #2980b9;">7. Sorting an Object Array</h2>
    <p>Use <code>sort()</code> to order objects based on a property.</p>
    <pre><code class="language-javascript" codeHighlight>students.sort((a, b) => a.age - b.age);
console.log(students);</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Object arrays in JavaScript are powerful for handling multiple objects efficiently. Understanding how to manipulate and iterate over them is essential for effective JavaScript programming.</p>
</div>`
},
{
  articleTitle: `Object Date`, content:`<div style="font-family: Arial, sans-serif; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Object Date in JavaScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        The <code>Date</code> object in JavaScript is used to work with dates and times. It provides various methods to get, set, and manipulate date and time values.
    </p>

    <h2 style="color: #2980b9;">1. Creating a Date Object</h2>
    <p>You can create a new date object using the <code>new Date()</code> constructor.</p>
    <pre><code class="language-javascript" codeHighlight>let currentDate = new Date();
console.log(currentDate);
// Output: Current date and time</code></pre>
    
    <h2 style="color: #2980b9;">2. Creating a Specific Date</h2>
    <p>You can pass specific values to create a custom date.</p>
    <pre><code class="language-javascript" codeHighlight>let specificDate = new Date(2025, 2, 17);
console.log(specificDate);
// Output: Mon Mar 17 2025</code></pre>
    
    <h2 style="color: #2980b9;">3. Getting Date Components</h2>
    <p>Several methods are available to get specific parts of a date.</p>
    <pre><code class="language-javascript" codeHighlight>let date = new Date();
console.log(date.getFullYear());  // Output: 2025 (current year)
console.log(date.getMonth());     // Output: 2 (March, since months are 0-based)
console.log(date.getDate());      // Output: 17 (day of the month)</code></pre>
    
    <h2 style="color: #2980b9;">4. Setting Date Components</h2>
    <p>You can modify date components using setter methods.</p>
    <pre><code class="language-javascript" codeHighlight>let newDate = new Date();
newDate.setFullYear(2030);
console.log(newDate);
// Output: Updated date with year 2030</code></pre>
    
    <h2 style="color: #2980b9;">5. Formatting Dates</h2>
    <p>Use <code>toLocaleDateString()</code> to format dates.</p>
    <pre><code class="language-javascript" codeHighlight>let formattedDate = new Date().toLocaleDateString("en-US");
console.log(formattedDate);
// Output: MM/DD/YYYY format</code></pre>
    
    <h2 style="color: #2980b9;">6. Comparing Dates</h2>
    <p>You can compare two dates using comparison operators.</p>
    <pre><code class="language-javascript" codeHighlight>let date1 = new Date("2025-03-17");
let date2 = new Date("2025-04-01");
console.log(date1 < date2); // Output: true</code></pre>
    
    <h2 style="color: #2980b9;">7. Getting Timestamps</h2>
    <p>The timestamp represents milliseconds since January 1, 1970.</p>
    <pre><code class="language-javascript" codeHighlight>let timestamp = Date.now();
console.log(timestamp);
// Output: Current timestamp in milliseconds</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>The <code>Date</code> object is essential for handling date and time operations in JavaScript. Understanding its methods helps in working with dates efficiently.</p>
</div>
`
}

]
}
