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
    content: ``
},
{
    articleTitle: `splice`,
    content: ``
},
{
    articleTitle: `sort`,
    content: ``
},
{
    articleTitle: `reverse`,
    content: ``
},
{
    articleTitle: `join`,
    content: ``
},
{
    articleTitle: `toString`,
    content: ``
},
{
    articleTitle: `concat`,
    content: ``
},
{
    articleTitle: `shift`,
    content: ``
},
{
    articleTitle: `unshift`,
    content: ``
},
{
    articleTitle: `pop`,
    content: ``
},
{
    articleTitle: `push`,
    content: ``
}
];
}