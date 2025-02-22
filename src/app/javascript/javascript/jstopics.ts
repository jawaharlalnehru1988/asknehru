
export interface JsModel {
    title: string
    topics: Topic[]
  }
  
  export interface Topic {
    id: number
    subTopic: string
  }

export class Jstopics{

    dsaTopics: JsModel[] = [
        { title: "Data Structures", topics: [
            {id: 1, subTopic: "Arrays"},
            {id: 2, subTopic: "Objects"},
            {id: 3, subTopic: "Linked Lists"},
            {id: 4, subTopic: "Stacks"},
            {id: 5, subTopic: "Queues"},
            {id: 6, subTopic: "Trees"},
            {id: 7, subTopic: "Graphs"},
            {id: 8, subTopic: "Heaps"},
            {id: 9, subTopic: "Hash Tables"},
            {id: 10, subTopic: "Tries"},
            {id: 11, subTopic: "Bit Arrays"},
            {id: 12, subTopic: "Disjoint Sets"},
            {id: 13, subTopic: "Segment Trees"},
            {id: 14, subTopic: "Trie"}
        ]
        },
        { title: "Algorithms", topics: [
            {id: 1, subTopic: "Sorting"},
            {id: 2, subTopic: "Searching"},
            {id: 3, subTopic: "Graph"},
            {id: 4, subTopic: "Dynamic Programming"},
            {id: 5, subTopic: "Greedy"},
            {id: 6, subTopic: "Backtracking"},
            {id: 7, subTopic: "Divide and Conquer"},
            {id: 8, subTopic: "Recursion"},
            {id: 9, subTopic: "Hashing"},
            {id: 10, subTopic: "Bit Manipulation"},
            {id: 11, subTopic: "Mathematical"},
        ]}
    ]

 
      categorisedTopics: JsModel[] = [
        { title: "Data types", topics: [
            {id: 1, subTopic: "Primitive Data Types"},
            {id: 2, subTopic: "Non-Primitive Data Types"},
        ]
        },
        {
            title: "Variables", topics: [
            {id: 1, subTopic: "Variable Declaration"},
            {id: 2, subTopic: "Variable Initialization"},
            {id: 3, subTopic: "Variable Scope"},
            {id: 4, subTopic: "Variable Re-Assignment"},
        ]
        },
        {
            title: "Operators", topics: [
            {id: 1, subTopic: "Arithmetic Operators"},
            {id: 2, subTopic: "Comparison Operators"},
            {id: 3, subTopic: "Logical Operators"},
            {id: 4, subTopic: "Bitwise Operators"},
            {id: 5, subTopic: "Assignment Operators"},
            {id: 6, subTopic: "Unary Operators"},
            {id: 7, subTopic: "Ternary Operator"},
            {id: 8, subTopic: "Type Conversion"},
            {id: 9, subTopic: "Type Coercion"},
            {id: 10, subTopic: "Nullish Coalescing Operator"},
            {id: 11, subTopic: "Operator Chaining"},
            {id: 12, subTopic: "Spread Operator"},
            {id: 13, subTopic: "Rest Operator"},
        ]},
        {
            title: "Control Flow", topics: [
                { id: 1, subTopic: "If-Else Statements" },
                { id: 2, subTopic: "Switch Statements" },
            ]
        },
        {
            title: "Loops", topics: [
                { id: 3, subTopic: "While Loops" },
                { id: 4, subTopic: "For Loops" },
                { id: 5, subTopic: "For-In Loop" },
                { id: 6, subTopic: "For-Of Loop" },
                { id: 7, subTopic: "Break Statement" },
                { id: 8, subTopic: "Continue Statement" },
                { id: 9, subTopic: "Return Statement" },
                { id: 10, subTopic: "Labelled Statement" },
            ]
        },
        {title: "Functions", topics: [
            {id: 1, subTopic: "Function Declaration"},
            {id: 2, subTopic: "Function Expression"},
            {id: 3, subTopic: "Arrow Functions"},
            {id: 4, subTopic: "Default Parameters"},
            {id: 5, subTopic: "Function Overloading"},
            {id: 6, subTopic: "Function Binding"},
            {id: 7, subTopic: "Function Closures"},
            {id: 8, subTopic: "Function Currying"},
            {id: 9, subTopic: "Function Partial Application"},
            {id: 10, subTopic: "Function Memoization"},
            {id: 11, subTopic: "Function Composition"},
            {id: 12, subTopic: "Function Throttling"},
            {id: 13, subTopic: "Function Debouncing"},
            {id: 14, subTopic: "Function Pipeline"},
            {id: 15, subTopic: "Function Recursion"},
            {id: 16, subTopic: "Function Generators"},
            {id: 17, subTopic: "Function Async"},
        ]},
        {
            title: "Arrays", topics: [
                { id: 1, subTopic: "Types of Arrays" },
                { id: 2, subTopic: "Manipulating Arrays" },
                { id: 3, subTopic: "Iterating Arrays" },
                { id: 4, subTopic: "forEach" },
                { id: 5, subTopic: "map" },
                { id: 6, subTopic: "filter" },
                { id: 7, subTopic: "reduce" },
                { id: 8, subTopic: "find" },
                { id: 9, subTopic: "findIndex" },
                { id: 10, subTopic: "some" },
                { id: 11, subTopic: "every" },
                { id: 12, subTopic: "includes" },
                { id: 13, subTopic: "indexOf" },
                { id: 14, subTopic: "lastIndexOf" },
                { id: 15, subTopic: "slice" },
                { id: 16, subTopic: "splice" },
                { id: 17, subTopic: "sort" },
                { id: 18, subTopic: "reverse" },
                { id: 19, subTopic: "join" },
                { id: 20, subTopic: "toString" },
                { id: 21, subTopic: "concat" },
                { id: 22, subTopic: "shift" },
                { id: 23, subTopic: "unshift" },
                { id: 24, subTopic: "pop" },
                { id: 25, subTopic: "push" },
                { id: 27, subTopic: "at" },
                { id: 28, subTopic: "keys" },
                { id: 29, subTopic: "values" },
                { id: 30, subTopic: "entries" },
                { id: 31, subTopic: "fill" },
                { id: 32, subTopic: "copyWithin" },
                { id: 33, subTopic: "flat" },
                { id: 34, subTopic: "flatMap" },
                { id: 37, subTopic: "isArray" },
                { id: 42, subTopic: "iterator" },
                { id: 43, subTopic: "findLastIndex" },
                { id: 47, subTopic: "toSorted" },
                { id: 48, subTopic: "toSpliced" },
                { id: 49, subTopic: "toReversed" },

            ]
        },
        {
            title: "Objects", topics: [
                { id: 1, subTopic: "Creating Objects" },
                { id: 2, subTopic: "Accessing Properties" },
                { id: 3, subTopic: "Modifying Properties" },
                { id: 4, subTopic: "Deleting Properties" },
                { id: 5, subTopic: "Object Methods" },
                { id: 6, subTopic: "Object Destructuring" },
                { id: 7, subTopic: "Object Spread Operator" },
                { id: 8, subTopic: "Object Rest Operator" },
                { id: 9, subTopic: "Object Computed Properties" },
                { id: 10, subTopic: "Object Property Shorthand" },
                { id: 11, subTopic: "Object Method Shorthand" },
                { id: 12, subTopic: "Object Property Accessors" },
                { id: 13, subTopic: "Object Property Getters" },
                { id: 14, subTopic: "Object Property Setters" },
                { id: 15, subTopic: "Object Property Descriptors" },
                { id: 16, subTopic: "Object Property Symbols" },
                { id: 17, subTopic: "Object Prototype" },
                { id: 18, subTopic: "Object Constructor" },
                { id: 19, subTopic: "Object Prototype Inheritance" },
                { id: 20, subTopic: "Object Class" },
                { id: 21, subTopic: "Object Static" },
                { id: 22, subTopic: "Object Super" },
                { id: 23, subTopic: "Object Static Properties" },
                { id: 24, subTopic: "Object Static Methods" },
                { id: 25, subTopic: "Object Private Properties" },
                { id: 26, subTopic: "Object Private Methods" },
                { id: 27, subTopic: "Object Public Properties" },
                { id: 28, subTopic: "Object Public Methods" },
                { id: 29, subTopic: "Object Symbol" },
                { id: 30, subTopic: "Object Object" },
                { id: 31, subTopic: "Object Array" },
                { id: 32, subTopic: "Object Date" },
                { id: 33, subTopic: "Object Error" },
                { id: 34, subTopic: "Object Function" },
                { id: 35, subTopic: "Object Math" },
                { id: 36, subTopic: "Object Number" },
                { id: 37, subTopic: "Object String" },
                { id: 38, subTopic: "Object RegExp" },
                { id: 39, subTopic: "Object JSON" },
                { id: 40, subTopic: "Object TypedArray" },
                { id: 41, subTopic: "Object ArrayBuffer" },
                { id: 42, subTopic: "Object SharedArrayBuffer" },
                { id: 43, subTopic: "Object DataView" },
                { id: 44, subTopic: "Object Uint8Array" },
                { id: 45, subTopic: "Object Uint8ClampedArray" },
                { id: 46, subTopic: "Object Uint16Array" },
                { id: 47, subTopic: "Object Uint32Array" },
                { id: 48, subTopic: "Object Int8Array" },
                { id: 49, subTopic: "Object Int16Array" },
                { id: 50, subTopic: "Object Int32Array" },
                { id: 51, subTopic: "Object Float32Array" },
                { id: 52, subTopic: "Object Float64Array" },
                { id: 53, subTopic: "Object BigInt64Array" },
                { id: 54, subTopic: "Object BigUint64Array" },
                { id: 55, subTopic: "Object Proxy" },
                { id: 56, subTopic: "Object Reflect" },
                { id: 57, subTopic: "Object WeakMap" },
                { id: 58, subTopic: "Object WeakSet" },
                { id: 59, subTopic: "Object WeakRef" },
                { id: 60, subTopic: "Object FinalizationRegistry" },
                { id: 61, subTopic: "Object Symbol" },
                { id: 62, subTopic: "Object Object" },
                { id: 63, subTopic: "Object Array" },
                { id: 64, subTopic: "Object Date" },
                { id: 65, subTopic: "Object Error" },
                { id: 66, subTopic: "Object Function" },
                { id: 67, subTopic: "Object Math" },
                { id: 68, subTopic: "Object Number" },
                { id: 69, subTopic: "Object String" },
                { id: 70, subTopic: "Object RegExp" },
                { id: 71, subTopic: "Object JSON" },
            ]
        },
        {
            title: "Error Handling", topics: [
                { id: 1, subTopic: "try...catch" },
                { id: 2, subTopic: "throw" },
                { id: 3, subTopic: "finally" },
                { id: 4, subTopic: "Error" },
                { id: 5, subTopic: "EvalError" },
                { id: 6, subTopic: "RangeError" },
                { id: 7, subTopic: "ReferenceError" },
                { id: 8, subTopic: "SyntaxError" },
                { id: 9, subTopic: "TypeError" },
                { id: 10, subTopic: "URIError" },
            ]
        },
        {
            title: "Regular Expressions", topics: [
                { id: 1, subTopic: "meta characters" },
                { id: 2, subTopic: "regular expressions" },
                { id: 3, subTopic: "regular expression literals" },
                { id: 4, subTopic: "character classes" },
                { id: 5, subTopic: "anchors" },
                { id: 6, subTopic: "quantifiers" },
                { id: 7, subTopic: "grouping" },
                { id: 8, subTopic: "capturing groups" },
                { id: 9, subTopic: "backreferences" },
                { id: 10, subTopic: "non-capturing groups" },
                { id: 11, subTopic: "lookahead assertions" },
                { id: 12, subTopic: "lookbehind assertions" },
                { id: 13, subTopic: "character classes" },
                { id: 14, subTopic: "Unicode" },
            ]
        },
        {
            title: "JSON", topics: [
                { id: 1, subTopic: "JSON" },
                { id: 2, subTopic: "JSON.stringify" },
                { id: 3, subTopic: "JSON.parse" }
            ]
        },
        {
            title: "DOM Manipulation", topics: [
                { id: 1, subTopic: "Document Object Model (DOM)" },
                { id: 2, subTopic: "DOM manipulation" },
                { id: 3, subTopic: "DOM events" },
                { id: 4, subTopic: "DOM selectors" },
                { id: 5, subTopic: "DOM traversal" },
            ]
        },
        {
            title: "Web Storage", topics: [
                { id: 1, subTopic: "Web Storage" },
                { id: 2, subTopic: "Local Storage" },
                { id: 3, subTopic: "Session Storage" },
                { id: 4, subTopic: "IndexedDB" },
                { id: 5, subTopic: "WebSQL" },
                { id: 6, subTopic: "DOM Storage" },
                { id: 7, subTopic: "Web Workers" },
                { id: 8, subTopic: "Service Workers" },
                { id: 9, subTopic: "Shared Workers" },
                { id: 10, subTopic: "Web Messaging" }
            ]
        },
        {
            title: "Web APIs", topics: [
                { id: 1, subTopic: "Web APIs Overview" },
                { id: 2, subTopic: "setInterval" },
                { id: 3, subTopic: "setTimeout" },
                { id: 4, subTopic: "setImmediate" },
                { id: 5, subTopic: "clearInterval" },
                { id: 6, subTopic: "clearTimeout" },
                { id: 7, subTopic: "clearImmediate" },
                { id: 8, subTopic: "requestAnimationFrame" },
                { id: 9, subTopic: "cancelAnimationFrame" },
                { id: 10, subTopic: "fetch" },
                { id: 11, subTopic: "XMLHttpRequest" },
                { id: 12, subTopic: "WebSocket" },
                { id: 13, subTopic: "WebRTC" },
            ]
        },
        {
            title: "Asynchronous Programming", topics: [
                { id: 1, subTopic: "Asynchronous Intro" },
                { id: 2, subTopic: "Callback" },
                { id: 3, subTopic: "Promises" },
                { id: 4, subTopic: "Async/await" },
                { id: 5, subTopic: "Event Loop" }
            ]
        }

      ];
}