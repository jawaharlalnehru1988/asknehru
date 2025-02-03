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
    <code class="language-javascript" codeHighlight>let name = "Nehru";
console.log(\`Welcome, \${name}!\`);</code>
    
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
    <code class="language-javascript" codeHighlight>function greet() { console.log("Hello!"); }</code>
    
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
         }
    ]



}