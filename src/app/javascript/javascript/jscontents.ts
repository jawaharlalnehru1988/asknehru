
export class JsContents {

    topicContents = [
        {
            articleId: 1,
            articleTitle: "Introduction to JavaScript",
            introduction: "JavaScript is a powerful, high-level programming language primarily used to create dynamic and interactive experiences on the web. It is an essential skill for every developer working on web technologies.",
            reasonsToLearn: [
                'JavaScript is versatile and can be used for frontend, backend, and even mobile app development.',
                'It is supported by all major browsers and powers the interactivity of web pages.',
                'JavaScript has a large community and rich ecosystem of libraries and frameworks, such as React, Angular, and Vue.',
                'It’s a fundamental skill for anyone pursuing a career in web development.'
            ],
            keyFeatures: [
                { name: 'Dynamic Typing', description: 'Variables can hold values of any data type without declaring their type explicitly.' },
                { name: 'Event-Driven Programming', description: 'JavaScript allows developers to handle events like user interactions with ease.' },
                { name: 'Object-Oriented Capabilities', description: 'Supports object-oriented programming concepts like objects, inheritance, and encapsulation.' },
                { name: 'Asynchronous Programming', description: 'With features like promises, async/await, and callbacks, JavaScript handles asynchronous operations effectively.' }
            ],
            exampleCode: `
        // Example of JavaScript Code
console.log("Welcome to JavaScript!");

// Declaring variables
let name = "John";
let age = 25;

// Creating a function
function greet(person) {
  return "Hello, " + person + "!";
}

console.log(greet(name));

// Asynchronous example
setTimeout(() => {
  console.log("This message is delayed.");
}, 2000);
`,
            conclusion: "JavaScript is the backbone of modern web development. It empowers developers to build feature-rich, responsive, and user-friendly applications. Whether you are a beginner or an experienced developer, mastering JavaScript opens up a world of opportunities."
        },
        {
            articleId: 2,
            articleTitle: "Understanding Primitive Data Types in JavaScript",
            introduction: "JavaScript is a versatile language, and understanding its primitive data types is fundamental to writing efficient and bug-free code. In this article, we will explore the six primitive data types in JavaScript.",
            primitiveTypes: [
                { name: 'String', description: 'Represents textual data. Example: "Hello, World!"' },
                { name: 'Number', description: 'Represents numeric values. Example: 42 or 3.14' },
                { name: 'Boolean', description: 'Represents true or false. Example: true or false' },
                { name: 'Null', description: 'Represents an intentional absence of value. Example: null' },
                { name: 'Undefined', description: 'Represents a variable that has not been assigned a value. Example: undefined' },
                { name: 'Symbol', description: 'Represents a unique identifier. Example: Symbol("id")' }
            ],
            keyPoints: [
                'Primitive data types are immutable.',
                'Each primitive data type has its own unique characteristics.',
                'Primitive values are compared by value rather than by reference.'
            ],
            exampleCode: `
        // Example of Primitive Data Types
        let name = "John"; // String
        let age = 30;      // Number
        let isActive = true; // Boolean
        let nothing = null;  // Null
        let notDefined;      // Undefined
        let uniqueId = Symbol("id"); // Symbol
        
        console.log(typeof name); // "string"
        console.log(typeof age); // "number"
        console.log(typeof isActive); // "boolean"
        console.log(typeof nothing); // "object" (special case)
        console.log(typeof notDefined); // "undefined"
        console.log(typeof uniqueId); // "symbol"
        `,
            conclusion: "Primitive data types are the building blocks of JavaScript programming. Understanding their behavior and characteristics is crucial for writing clean, effective, and maintainable code."
        },
        {
            articleId: 3,
            articleTitle: "Understanding Reference Data Types in JavaScript",
            introduction: "In JavaScript, reference data types are an essential concept that every developer must understand to handle complex data structures effectively. Unlike primitive types, reference types are stored and manipulated by reference rather than value. This article dives into reference data types and their key characteristics.",
            referenceTypes: [
                { name: 'Object', description: 'Used to store collections of key-value pairs. Example: {name: "John", age: 30}.' },
                { name: 'Array', description: 'A special type of object used to store ordered lists of items. Example: [1, 2, 3, 4].' },
                { name: 'Function', description: 'A first-class object in JavaScript that can be passed as a variable. Example: function greet() { console.log("Hello!"); }.' },
                { name: 'Date', description: 'Used to work with dates and times. Example: new Date().' },
                { name: 'RegExp', description: 'Used for pattern matching with regular expressions. Example: /abc/.test("abcdef").' }
            ],
            keyPoints: [
                'Reference types are not stored directly in the variable. Instead, the variable holds a reference (or memory address) pointing to the actual data in the heap.',
                'Equality for reference types is checked by reference, not by value. Two objects with identical data are not equal unless they reference the same memory location.',
                'When a reference type is passed to a function, the reference itself is passed, not a copy of the value. This means changes made inside the function affect the original data.'

            ],
            exampleCode: `
        // Example of Reference Data Types
let obj1 = { name: "Alice" };
let obj2 = obj1; // Both obj1 and obj2 point to the same object

obj2.name = "Bob";
console.log(obj1.name); // Output: "Bob"

// Array example
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

// Function as a reference
function updateName(person) {
  person.name = "Charlie";
}
updateName(obj1);
console.log(obj1.name); // Output: "Charlie"
        `,
            conclusion: "Understanding reference data types is vital for working with complex structures in JavaScript. Knowing how they are stored, accessed, and manipulated allows developers to write more efficient and bug-free code. Mastering this concept unlocks the full potential of JavaScript for both small and large-scale applications."
        }
    ]



}