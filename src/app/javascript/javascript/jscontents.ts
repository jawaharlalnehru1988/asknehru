export interface JsContent{
    articleTitle: string;
    content: string;
}
export class JsContents {

    topicContents: JsContent[] = [
        {
         
            articleTitle: "Introduction to JavaScript",
            content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
            <div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
            content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
            content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
            content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
            content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
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
}

    ]



}