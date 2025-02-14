import { JsContent } from "../javascript/javascript/jscontents";

export class JavaContent {
    javacontent: JsContent[] = [
        {
          articleTitle: "Intro",
          content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Introduction to Java</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        Java is a high-level, object-oriented programming language known for its platform independence, robustness, and wide usage in software development. It follows the "Write Once, Run Anywhere" (WORA) principle, making it one of the most popular programming languages.
    </p>
    
    <h2 style="color: #2980b9;">What is Java?</h2>
    <p>Java is a general-purpose programming language developed by Sun Microsystems (now owned by Oracle) in 1995. It is widely used for developing applications ranging from mobile to enterprise-level systems.</p>
    <pre>
    <code class="language-java" codeHighlight>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code>
    </pre>
    <h2 style="color: #2980b9;">Key Features of Java</h2>
    <ul>
        <li>Platform-independent (runs on any OS with JVM)</li>
        <li>Object-oriented programming support</li>
        <li>Automatic memory management (Garbage Collection)</li>
        <li>Secure, multithreaded, and high-performance</li>
        <li>Rich API and vast community support</li>
    </ul>
    
    <h2 style="color: #2980b9;">How Java Works</h2>
    <p>Java programs are compiled into bytecode, which is executed by the Java Virtual Machine (JVM), making it independent of the underlying system.</p>
    <pre>
    <code class="language-java" codeHighlight>
    class JavaIntro {
        public static void main(String[] args) {
            System.out.println("Java runs on JVM, making it platform-independent.");
        }
    }
    </code>
    </pre>
    
    <h2 style="color: #2980b9;">Why Learn Java?</h2>
    <p>Java is widely used in web applications, mobile apps (Android), enterprise software, and cloud computing. Learning Java opens doors to diverse career opportunities in software development.</p>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Java's versatility, reliability, and wide adoption make it a must-learn programming language for aspiring developers. Start coding in Java today!</p>
</div>
`
        },
        {
          articleTitle: `Class`,
          content: `<div style="font-family: Arial, sans-serif; max-width: 800px; margin: auto; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h1 style="color: #2c3e50; text-align: center;">Introduction to Java Class</h1>
    <p style="font-size: 16px; line-height: 1.6; color: #333;">
        In Java, a class is a fundamental building block that defines the structure and behavior of objects. It acts as a blueprint for creating instances (objects) with specific properties and methods.
    </p>
    
    <h2 style="color: #2980b9;">What is a Java Class?</h2>
    <p>A Java class is a user-defined template that encapsulates data (fields) and methods to operate on that data.</p>
    <code class="language-java" codeHighlight>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}</code>
    
    <h2 style="color: #2980b9;">Key Features of Java Classes</h2>
    <ul>
        <li>Encapsulation of data and methods</li>
        <li>Supports object-oriented principles (Inheritance, Polymorphism, Abstraction, Encapsulation)</li>
        <li>Reusable code structure</li>
        <li>Can contain constructors, fields, and methods</li>
    </ul>
    
    <h2 style="color: #2980b9;">How Java Classes Work</h2>
    <p>When a Java program runs, an object of the class can be created, and its methods can be invoked.</p>
    <pre>
    <code class="language-java" codeHighlight>
    class Person {
        String name;
        
        Person(String name) {
            this.name = name;
        }

        void greet() {
            System.out.println("Hello, my name is " + name);
        }
    }

    public class Main {
        public static void main(String[] args) {
            Person person = new Person("Nehru");
            person.greet();
        }
    }
    </code>
    </pre>
    
    <h2 style="color: #2980b9;">Why Learn Java Classes?</h2>
    <p>Java classes form the foundation of object-oriented programming in Java, making them essential for building scalable and maintainable applications.</p>
    
    <p style="margin-top: 20px; font-weight: bold;">Conclusion:</p>
    <p>Understanding Java classes is crucial for anyone looking to build robust Java applications. Start by creating simple classes and gradually explore more advanced concepts!</p>
</div>`
        }
                 
    ]
}