export interface Topic {
    title: string;
    content: string;
}
export class TypescriptSub {

    storedContent:Topic[] = [
        {
            title: 'key features',
            content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Introduction to TypeScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        TypeScript is a strongly typed, object-oriented, compiled language developed by Microsoft. It is a superset of JavaScript that adds static typing, interfaces, and other advanced features to help developers write robust and maintainable code.
    </p>
    
    <h2 style="color: #2980b9;">1. Why Use TypeScript?</h2>
    <ul>
        <li>Static typing helps catch errors at compile time.</li>
        <li>Better code structuring with interfaces and classes.</li>
        <li>Improved IDE support with autocompletion and refactoring.</li>
        <li>Compiles down to clean, readable JavaScript.</li>
    </ul>
    
    <h2 style="color: #2980b9;">2. Installing TypeScript</h2>
    <p>You can install TypeScript globally using npm:</p>
    <pre><code class="language-javascript" codeHighlight>npm install -g typescript</code></pre>
    
    <h2 style="color: #2980b9;">3. Writing and Compiling TypeScript Code</h2>
    <p>TypeScript files use the <code>.ts</code> extension. Below is a simple TypeScript example:</p>
    <pre><code class="language-javascript" codeHighlight>// TypeScript Code
function greet(name: string): string {
    return \`Hello, \${name}!\`;
}
console.log(greet("John"));</code></pre>
    <p>To compile the TypeScript file into JavaScript, use the following command:</p>
    <pre><code class="language-javascript" codeHighlight>tsc filename.ts</code></pre>
    
    <h2 style="color: #2980b9;">4. Type Annotations</h2>
    <p>TypeScript allows you to explicitly define types for variables and function parameters.</p>
    <pre><code class="language-javascript" codeHighlight>let age: number = 25;
let isStudent: boolean = true;
let message: string = "Welcome to TypeScript!";</code></pre>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>TypeScript enhances JavaScript by adding static typing and powerful tooling support, making it an excellent choice for large-scale applications.</p>
</div>
` },
{
    title: 'Benefits',
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Benefits of TypeScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        TypeScript offers several advantages over plain JavaScript, making it a popular choice for large-scale applications. Here are some key benefits of using TypeScript:
    </p>
    
    <h2 style="color: #2980b9;">1. Static Typing</h2>
    <p>Static typing helps catch errors at compile time, reducing bugs and improving code quality.</p>
    
    <h2 style="color: #2980b9;">2. Improved Code Quality</h2>
    <p>Interfaces, classes, and type annotations help developers write more maintainable and readable code.</p>
    
    <h2 style="color: #2980b9;">3. Enhanced IDE Support</h2>
    <p>TypeScript provides better autocompletion, refactoring, and error checking in modern IDEs like Visual Studio Code.</p>
    
    <h2 style="color: #2980b9;">4. Compatibility with JavaScript</h2>
    <p>TypeScript is a superset of JavaScript, meaning existing JavaScript code can be gradually migrated to TypeScript.</p>
    
    <h2 style="color: #2980b9;">5. Strong Community Support</h2>
    <p>With a large and active community, TypeScript has extensive documentation, tutorials, and support resources available online.</p>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>TypeScript offers a range of benefits that make it an excellent choice for developers looking to build scalable and maintainable applications.</p> 
</div>` },     
{
    title: 'Drawbacks',
    content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Drawbacks of TypeScript</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        While TypeScript offers many advantages, it also has some drawbacks that developers should be aware of. Here are a few limitations of using TypeScript:
    </p>
    
    <h2 style="color: #2980b9;">1. Learning Curve</h2>
    <p>Developers familiar with JavaScript may find TypeScript's static typing and advanced features challenging to learn initially.</p>
    
    <h2 style="color: #2980b9;">2. Build Time</h2>
    <p>Compiling TypeScript code to JavaScript adds an extra build step, which can slow down development workflows.</p>
    
    <h2 style="color: #2980b9;">3. Tooling Support</h2>
    <p>While modern IDEs like Visual Studio Code offer excellent TypeScript support, some older tools may not fully support TypeScript features.</p>
    
    <h2 style="color: #2980b9;">4. Compatibility</h2>
    <p>TypeScript may not be fully compatible with all JavaScript libraries and frameworks, requiring additional configuration and workarounds.</p>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Despite its drawbacks, TypeScript remains a powerful and popular choice for developers looking to build scalable and maintainable applications.</p>
</div>`
}, 
                        
    ]
}