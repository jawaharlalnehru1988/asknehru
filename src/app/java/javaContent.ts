export class JavaContent {
    javacontent = [
        {
            javaClassTitle: 'Class in Java',
            javaClassContent: `A <strong>class</strong> in Java is a blueprint for creating objects. It defines the properties (attributes) and behaviors (methods) that the objects created from the class can have.
                                 Classes are fundamental building blocks in object-oriented programming (OOP) and enable developers to model real-world entities effectively.  `,
            javaClassFeatures: [
                'Encapsulation of data and methods.',
                'Code reuse through inheritance.',
                'Implementation of abstraction.',
                'Support for polymorphism.'
            ],
            javaClassExample: `<pre><code class="language-java" codeHighlight>  public class Car {
        // Properties
        String brand;
        int speed;
        
        // Constructor
        public Car(String brand, int speed) {
            this.brand = brand;
            this.speed = speed;
        }
        
        // Method
        public void displayInfo() {
            System.out.println("Brand: " + brand);
            System.out.println("Speed: " + speed + " km/h");
        }
    }
    </code></pre>`,
            javaClassConclusion: `Classes in Java are essential for creating modular, reusable, and maintainable code. They help structure programs effectively and provide a strong foundation for object-oriented design.`
            
        },
        {
            javaObjectTitle: 'Object in Java',
            javaObjectContent: `An <strong>object</strong> in Java is an instance of a class. It represents a real-world entity with a state (attributes) and behavior (methods). 
                                Objects are created using classes, and they encapsulate data and functionality to interact with other objects in a program. 
                                Every object in Java is a unique entity that operates independently.`,
            javaObjectFeatures: [
              'Represents a real-world entity.',
              'Encapsulates state and behavior.',
              'Supports interaction through methods.',
              'Provides reusability and modularity.',
            ],
            javaObjectExample: `<pre><code>    public class Main {
                  public static void main(String[] args) {
                      // Creating an object
                      Car myCar = new Car("Toyota", 120);
                      
                      // Accessing object methods
                      myCar.displayInfo();
                  }
              }
              
              public class Car {
                  String brand;
                  int speed;
                  
                  public Car(String brand, int speed) {
                      this.brand = brand;
                      this.speed = speed;
                  }
                  
                  public void displayInfo() {
                      System.out.println("Brand: " + brand);
                      System.out.println("Speed: " + speed + " km/h");
                  }
              }
              </code></pre>`,
            javaObjectConclusion: `Objects are the building blocks of Java programs. They enable developers to model real-world entities effectively, 
                                   interact with other objects, and create scalable, reusable, and maintainable software solutions.`
          },
          {
            javaVariablesTitle: 'Variables in Java',
            javaVariablesContent: `Variables in Java are used to store data that can be used and manipulated throughout a program. A variable is essentially a name for a memory location where a specific type of data is stored. 
                                   Variables allow developers to write flexible and reusable code by providing a way to reference and operate on data.`,
            javaVariablesTypes: `
              Java provides three types of variables based on their scope and lifetime:
              <ol>
                <li><strong>Local Variables:</strong> Declared inside a method or a block and are accessible only within that scope. They are not initialized by default, so you must assign a value before using them.</li>
                <li><strong>Instance Variables:</strong> Declared inside a class but outside any method. Each object of the class has its own copy of instance variables. They are initialized with default values if not explicitly assigned.</li>
                <li><strong>Static Variables:</strong> Declared with the <code>static</code> keyword inside a class. They belong to the class rather than any specific object and are shared across all instances.</li>
              </ol>
            `,
            javaVariablesExample: `
              <pre><code>
              public class VariablesExample {
                  // Instance variable
                  int instanceVar = 10;
          
                  // Static variable
                  static String staticVar = "Shared across all instances";
          
                  public void demonstrateLocalVariable() {
                      // Local variable
                      int localVar = 5;
                      System.out.println("Local Variable: " + localVar);
                  }
          
                  public static void main(String[] args) {
                      VariablesExample obj1 = new VariablesExample();
                      VariablesExample obj2 = new VariablesExample();
          
                      // Accessing instance variable
                      System.out.println("Instance Variable (obj1): " + obj1.instanceVar);
                      obj1.instanceVar = 20; // Changing value for obj1
                      System.out.println("Instance Variable (obj1 after change): " + obj1.instanceVar);
          
                      // Accessing static variable
                      System.out.println("Static Variable: " + staticVar);
          
                      // Demonstrating local variable
                      obj1.demonstrateLocalVariable();
                  }
              }
              </code></pre>
            `,
            javaVariablesRules: `
              When working with variables in Java, keep in mind:
              <ul>
                <li>Variable names are case-sensitive and should follow camelCase convention.</li>
                <li>Variable names must begin with a letter, dollar sign ($), or underscore (_).</li>
                <li>Reserved keywords cannot be used as variable names.</li>
                <li>Variables must be declared before use.</li>
                <li>Java provides default values for instance and static variables but not for local variables.</li>
              </ul>
            `,
            defaultValueExamples: `
            <pre><code>
    public class DefaultValuesExample {
    // Instance variables
    int instanceInt;          // Default value: 0
    double instanceDouble;    // Default value: 0.0
    boolean instanceBoolean;  // Default value: false
    String instanceString;    // Default value: null

    // Static variables
    static int staticInt;         // Default value: 0
    static char staticChar;       // Default value: '\u0000' (null character)
    static float staticFloat;     // Default value: 0.0f
    static Object staticObject;   // Default value: null

    public void showDefaultValues() {
        // Printing instance variables
        System.out.println("Instance int: " + instanceInt);
        System.out.println("Instance double: " + instanceDouble);
        System.out.println("Instance boolean: " + instanceBoolean);
        System.out.println("Instance String: " + instanceString);

        // Printing static variables
        System.out.println("Static int: " + staticInt);
        System.out.println("Static char: " + staticChar);
        System.out.println("Static float: " + staticFloat);
        System.out.println("Static Object: " + staticObject);
    }

    public void demonstrateLocalVariables() {
        // Local variables
        int localInt;
        boolean localBoolean;
        String localString;

        // Uncommenting the lines below will result in a compile-time error.
        // System.out.println("Local int: " + localInt);        // ERROR
        // System.out.println("Local boolean: " + localBoolean); // ERROR
        // System.out.println("Local String: " + localString);  // ERROR

        // Local variables must be explicitly initialized before use.
        localInt = 5;
        localBoolean = true;
        localString = "Initialized!";
        System.out.println("Local int: " + localInt);
        System.out.println("Local boolean: " + localBoolean);
        System.out.println("Local String: " + localString);
    }

    public static void main(String[] args) {
        DefaultValuesExample example = new DefaultValuesExample();
        System.out.println("---- Default Values for Instance and Static Variables ----");
        example.showDefaultValues();

        System.out.println("\n---- Demonstrating Local Variables ----");
        example.demonstrateLocalVariables();
    }
}
       </code></pre>      `,
       output: `
       <pre><code>
       ---- Default Values for Instance and Static Variables ----
Instance int: 0
Instance double: 0.0
Instance boolean: false
Instance String: null
Static int: 0
Static char: 
Static float: 0.0
Static Object: null

---- Demonstrating Local Variables ----
Local int: 5
Local boolean: true
Local String: Initialized!

       </code></pre>
       `,
            javaVariablesConclusion: `Variables are fundamental to any Java program. By understanding their types, scope, and usage, developers can write efficient, readable, and maintainable code. Proper variable naming and scoping practices are key to avoiding errors and improving program clarity.`
          },
          {
            javaConstructorTitle: 'Constructors in Java',
            javaConstructorContent: `
              A <strong>constructor</strong> in Java is a special type of method used to initialize an object when it is created. Unlike regular methods, constructors do not have a return type, not even <code>void</code>. 
              They have the same name as the class and are automatically called when an object of the class is instantiated. Constructors are essential for setting up initial values and ensuring objects are properly initialized.`,
            javaConstructorTypes: `
              <p>There are primarily three types of constructors in Java:</p>
              <ul>
                <li><strong>Default Constructor:</strong> A constructor provided by the compiler when no other constructor is defined. It initializes object attributes with default values.</li>
                <li><strong>Parameterized Constructor:</strong> A constructor that accepts arguments, allowing you to initialize object attributes with specific values.</li>
                <li><strong>All-Argument Constructor:</strong> A constructor that accepts all possible attributes of the class, enabling full initialization of the object.</li>
              </ul>
            `,
            javaConstructorExample: `
              <pre><code>
              public class ConstructorExample {
                  // Instance variables
                  String name;
                  int age;
          
                  // Default Constructor
                  public ConstructorExample() {
                      this.name = "Default Name";
                      this.age = 0;
                      System.out.println("Default Constructor Called");
                  }
          
                  // Parameterized Constructor
                  public ConstructorExample(String name, int age) {
                      this.name = name;
                      this.age = age;
                      System.out.println("Parameterized Constructor Called");
                  }
          
                  // All-Argument Constructor
                  public ConstructorExample(String name, int age, String additionalInfo) {
                      this.name = name + " (" + additionalInfo + ")";
                      this.age = age;
                      System.out.println("All-Argument Constructor Called");
                  }
          
                  public void displayInfo() {
                      System.out.println("Name: " + name + ", Age: " + age);
                  }
          
                  public static void main(String[] args) {
                      // Using Default Constructor
                      ConstructorExample obj1 = new ConstructorExample();
                      obj1.displayInfo();
          
                      // Using Parameterized Constructor
                      ConstructorExample obj2 = new ConstructorExample("John", 25);
                      obj2.displayInfo();
          
                      // Using All-Argument Constructor
                      ConstructorExample obj3 = new ConstructorExample("Jane", 30, "Employee");
                      obj3.displayInfo();
                  }
              }
              </code></pre>
            `,
            javaConstructorFeatures: `
              <p>Key features of constructors:</p>
              <ul>
                <li>Constructors share the same name as the class.</li>
                <li>They do not have a return type.</li>
                <li>They are automatically called when an object is created.</li>
                <li>Constructors can be overloaded (multiple constructors with different parameter lists).</li>
                <li>If no constructor is defined, Java provides a default constructor automatically.</li>
              </ul>
            `,
            javaConstructorConclusion: `
              Constructors are an integral part of Java classes, allowing developers to initialize objects efficiently and consistently. By using default, parameterized, and all-argument constructors appropriately, 
              you can handle different initialization scenarios, ensuring flexibility and code readability in your programs.
            `
          },
          {
            javaMethodsTitle: 'Types of Methods in Java',
            javaMethodsContent: `
              Methods in Java are blocks of code that perform a specific task. They allow developers to define reusable logic, improving code modularity and reducing redundancy. 
              A method is invoked to perform an action, and it can take input parameters and return a value. Methods in a class can be categorized based on their functionality and use cases.`,
            javaMethodsTypes: `
              <p>There are various types of methods in a class:</p>
              <ul>
                <li><strong>Instance Methods:</strong> Belong to an object and require an instance of the class to be called. These methods can access instance variables and other instance methods.</li>
                <li><strong>Static Methods:</strong> Belong to the class rather than any specific object. Declared with the <code>static</code> keyword, they can be called without creating an object and can only access static variables and methods directly.</li>
                <li><strong>Abstract Methods:</strong> Declared without a body (using the <code>abstract</code> keyword) in an abstract class. They must be implemented by subclasses.</li>
                <li><strong>Final Methods:</strong> Declared with the <code>final</code> keyword, these methods cannot be overridden by subclasses.</li>
                <li><strong>Constructor Methods:</strong> Special methods used to initialize objects. While technically not a method (since they don't have a return type), they play a similar role in setting up the state of an object.</li>
                <li><strong>Getter and Setter Methods:</strong> Used to encapsulate and manage access to private instance variables, adhering to the principles of encapsulation.</li>
                <li><strong>Overloaded Methods:</strong> Methods with the same name but different parameter lists, enabling multiple implementations based on the inputs.</li>
                <li><strong>Overridden Methods:</strong> Methods that provide a new implementation of a method inherited from a superclass or interface.</li>
              </ul>
            `,
            javaMethodsExample: `
              <pre><code>
              public class MethodExamples {
                  // Instance variable
                  private String name;
         
                  // Instance Method
                  public void displayInstanceMethod() {
                      System.out.println("Instance Method called. Name: " + name);
                  }
          
                  // Static Method
                  public static void displayStaticMethod() {
                      System.out.println("Static Method called.");
                  }
          
                  // Abstract Method can be declared only in an abstract class
                //   public abstract void displayAbstractMethod();
          
                  // Final Method
                  public final void displayFinalMethod() {
                      System.out.println("Final Method called.");
                  }
                         
                  // Constructor Method
                  public MethodExamples(String name) {
                      this.name = name;
                  }
          
                  // Getter Method
                  public String getName() {
                      return name;
                  }
          
                  // Setter Method
                  public void setName(String name) {
                      this.name = name;
                  }
          
                  // Overloaded Method
                  public void displayOverloadedMethod() {
                      System.out.println("No arguments provided.");
                  }
          
                  public void displayOverloadedMethod(String message) {
                      System.out.println("Message: " + message);
                  }
          
                  // Overridden Method Example
                  @Override
                  public String toString() {
                      return "MethodExamples{name='" + name + "'}";
                  }
          
                  public static void main(String[] args) {
                    
                    MethodExamples obj = new MethodExamples("Java");
                      // Calling instance method
                      obj.displayInstanceMethod();
          
                      // Calling static method
                      MethodExamples.displayStaticMethod();

                      // Abstract method
                    //   obj.displayAbstractMethod();

                      // Final method
                      obj.displayFinalMethod();
          
                      // Calling Constructor method
                      
                      MethodExamples obj1 = new MethodExamples("Java");
                      System.out.println("Constructor called");
          
                      // Using getter and setter methods
                      System.out.println("Getter: " + obj.getName());
                      obj.setName("Updated Name");
                      System.out.println("Setter updated name: " + obj.getName());
          
                      // Calling overloaded methods
                      obj.displayOverloadedMethod();
                      obj.displayOverloadedMethod("Hello from Java!");
          
                      // Calling overridden method
                      System.out.println(obj.toString());
                  }
              }
              </code></pre>
            `,
            javaMethodsFeatures: `
              <p>Key features of methods in Java:</p>
              <ul>
                <li>They improve code reusability and modularity.</li>
                <li>They can take parameters and return values, enabling dynamic behavior.</li>
                <li>They support polymorphism through method overloading and overriding.</li>
                <li>They can be used to encapsulate logic, ensuring better readability and maintenance.</li>
              </ul>
            `,
            javaMethodsConclusion: `
              Methods are the backbone of Java programming, enabling developers to organize logic and functionality effectively. 
              By using different types of methods appropriately, you can write clean, modular, and maintainable code that adheres to object-oriented principles.
            `
          },
          {
            javaStaticTitle: 'The static Keyword in Java',
            javaStaticIntroduction: `
              The <code>static</code> keyword in Java is a non-access modifier used for memory management and to define members (fields, methods, blocks, or nested classes) that belong to the class rather than to any specific instance of the class.
              When a member is declared <code>static</code>, it is shared among all objects of the class. This makes it ideal for constants, utility methods, or properties that should be common across instances.
            `,
            javaStaticUses: `
              <p>Here are the main uses of the <code>static</code> keyword in Java:</p>
              <ul>
                <li><strong>Static Fields:</strong> A field shared among all instances of the class. It is also known as a class variable.</li>
                <li><strong>Static Methods:</strong> Methods that can be called without creating an instance of the class. These methods can only directly access other static members.</li>
                <li><strong>Static Blocks:</strong> Blocks of code executed when the class is loaded into memory. These are used for static initialization.</li>
                <li><strong>Static Nested Classes:</strong> Inner classes that do not require an instance of the outer class to be instantiated.</li>
              </ul>
            `,
            javaStaticExample: `
              <pre><code>
              public class StaticExample {
                  // Static field
                  public static String companyName = "TechCorp";
          
                  // Instance field
                  public String employeeName;
          
                  // Static block
                  static {
                      System.out.println("Static block executed. Company initialized.");
                  }
          
                  // Static method
                  public static void displayCompanyName() {
                      System.out.println("Company Name: " + companyName);
                  }
          
                  // Constructor
                  public StaticExample(String employeeName) {
                      this.employeeName = employeeName;
                  }
          
                  // Instance method
                  public void displayEmployeeInfo() {
                      System.out.println("Employee Name: " + employeeName);
                      System.out.println("Company Name: " + companyName);
                  }
          
                  // Main method
                  public static void main(String[] args) {
                      // Accessing static field and method without an object
                      StaticExample.displayCompanyName();
                      
                      // Creating objects
                      StaticExample emp1 = new StaticExample("Alice");
                      StaticExample emp2 = new StaticExample("Bob");
          
                      // Accessing instance method
                      emp1.displayEmployeeInfo();
                      emp2.displayEmployeeInfo();
          
                      // Modifying static field
                      StaticExample.companyName = "GlobalTech";
          
                      // Accessing updated static field
                      emp1.displayEmployeeInfo();
                      emp2.displayEmployeeInfo();
                  }
              }
              </code></pre>
            `,
            javaStaticFeatures: `
              <p><strong>Key features of the <code>static</code> keyword:</strong></p>
              <ul>
                <li>Static members belong to the class, not to any specific instance.</li>
                <li>Static methods cannot access non-static fields or methods directly, as they do not belong to any instance.</li>
                <li>Static blocks are executed only once when the class is loaded into memory.</li>
                <li>Static fields are commonly used for constants or shared properties among all instances.</li>
                <li>Static nested classes can be accessed without an instance of the outer class.</li>
              </ul>
            `,
            javaStaticConclusion: `
              The <code>static</code> keyword is a powerful feature in Java, especially for defining shared properties, utility methods, or initialization logic. 
              By understanding and using <code>static</code> effectively, developers can write more efficient and organized code.
            `
          },
          {
            javaAccessModifiersTitle: 'Access Modifiers in Java',
            javaAccessModifiersIntroduction: `
              Access modifiers in Java define the visibility and accessibility of classes, fields, methods, and constructors. 
              They control where and how the members of a class can be accessed. Java provides four types of access modifiers: 
              <strong>public</strong>, <strong>private</strong>, <strong>protected</strong>, and <strong>default</strong> (no modifier). 
              These modifiers play a vital role in encapsulation and security.
            `,
            javaAccessModifiersTypes: [
              {
                type: 'public',
                description: `
                  A member declared <code>public</code> is accessible from any other class in the program, 
                  whether it is in the same package or a different package.
                `,
                example: `
                  <pre><code>
                  public class PublicExample {
                      public String name = "Public Member";
          
                      public void display() {
                          System.out.println("This is a public method.");
                      }
                  }
          
                  // Accessible from any other class
                  PublicExample example = new PublicExample();
                  System.out.println(example.name);
                  example.display();
                  </code></pre>
                `
              },
              {
                type: 'private',
                description: `
                  A member declared <code>private</code> is accessible only within the same class. 
                  It cannot be accessed from other classes or subclasses.
                `,
                example: `
                  <pre><code>
                  public class PrivateExample {
                      private String secret = "Private Member";
          
                      private void displaySecret() {
                          System.out.println("This is a private method.");
                      }
                  }
          
                  // Accessing private members outside the class will result in a compile-time error
                  PrivateExample example = new PrivateExample();
                  // System.out.println(example.secret); // Error
                  // example.displaySecret(); // Error
                  </code></pre>
                `
              },
              {
                type: 'protected',
                description: `
                  A member declared <code>protected</code> is accessible within the same package and by subclasses in different packages.
                `,
                example: `
                  <pre><code>
                  public class ProtectedExample {
                      protected String info = "Protected Member";
          
                      protected void displayInfo() {
                          System.out.println("This is a protected method.");
                      }
                  }
          
                  // In a subclass
                  public class SubclassExample extends ProtectedExample {
                      public void showInfo() {
                          System.out.println(info); // Accessible
                          displayInfo(); // Accessible
                      }
                  }
                  </code></pre>
                `
              },
              {
                type: 'default',
                description: `
                  When no access modifier is specified, the member has <strong>default (package-private)</strong> access. 
                  This means it is accessible only within the same package but not from outside the package.
                `,
                example: `
                  <pre><code>
                  class DefaultExample {
                      String packageMember = "Default Access";
          
                      void displayPackageMember() {
                          System.out.println("This is a default access method.");
                      }
                  }
          
                  // Accessible only within the same package
                  DefaultExample example = new DefaultExample();
                  System.out.println(example.packageMember);
                  example.displayPackageMember();
                  </code></pre>
                `
              }
            ],
            javaAccessModifiersTable: `
              <p>Summary of Access Levels:</p>
              <table>
                  <thead>
                      <tr>
                          <th>Modifier</th>
                          <th>Class</th>
                          <th>Package</th>
                          <th>Subclass</th>
                          <th>World</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td><strong>public</strong></td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                      </tr>
                      <tr>
                          <td><strong>protected</strong></td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✘</td>
                      </tr>
                      <tr>
                          <td><strong>default</strong></td>
                          <td>✔</td>
                          <td>✔</td>
                          <td>✘</td>
                          <td>✘</td>
                      </tr>
                      <tr>
                          <td><strong>private</strong></td>
                          <td>✔</td>
                          <td>✘</td>
                          <td>✘</td>
                          <td>✘</td>
                      </tr>
                  </tbody>
              </table>
            `,
            javaAccessModifiersConclusion: `
              Access modifiers in Java are crucial for implementing encapsulation, managing access to class members, 
              and ensuring security in your application. By choosing the appropriate modifier, 
              developers can control data visibility and improve the maintainability of their code.
            `
          },
          {
            javaInnerClassesTitle: 'Inner Classes in Java',
            javaInnerClassesIntroduction: `
              In Java, an <strong>inner class</strong> is a class that is defined inside another class. Inner classes are used to logically group classes that are only used in one place, improving encapsulation and readability. 
              They also have access to the members (including private members) of the outer class, which makes them a powerful tool for simplifying code.
            `,
            javaInnerClassesTypes: [
              {
                type: 'Member Inner Class',
                description: `
                  A <strong>member inner class</strong> is a non-static class defined within another class. It has access to all members (including private ones) of the outer class and requires an instance of the outer class to be instantiated.
                `,
                example: `
                  <pre><code>
                  public class OuterClass {
                      private String message = "Hello from OuterClass";
          
                      // Member Inner Class
                      public class InnerClass {
                          public void displayMessage() {
                              System.out.println(message); // Accessing outer class private member
                          }
                      }
                  }
          
                  // Instantiating a member inner class
                  OuterClass outer = new OuterClass();
                  OuterClass.InnerClass inner = outer.new InnerClass();
                  inner.displayMessage();
                  </code></pre>
                `
              },
              {
                type: 'Static Nested Class',
                description: `
                  A <strong>static nested class</strong> is a static class defined inside another class. Unlike member inner classes, it does not require an instance of the outer class to be instantiated and can only access the static members of the outer class.
                `,
                example: `
                  <pre><code>
                  public class OuterClass {
                      private static String staticMessage = "Hello from Static OuterClass";
          
                      // Static Nested Class
                      public static class StaticInnerClass {
                          public void displayMessage() {
                              System.out.println(staticMessage); // Accessing outer class static member
                          }
                      }
                  }
          
                  // Instantiating a static nested class
                  OuterClass.StaticInnerClass inner = new OuterClass.StaticInnerClass();
                  inner.displayMessage();
                  </code></pre>
                `
              },
              {
                type: 'Local Inner Class',
                description: `
                  A <strong>local inner class</strong> is defined within a method or a block. Its scope is limited to the method or block in which it is defined. 
                  It can access the local variables of the method only if they are declared as <strong>final</strong> (or effectively final).
                `,
                example: `
                  <pre><code>
                  public class OuterClass {
                      public void display() {
                          final String localMessage = "Hello from Local Inner Class";
          
                          // Local Inner Class
                          class LocalInnerClass {
                              public void displayMessage() {
                                  System.out.println(localMessage); // Accessing method local variable
                              }
                          }
          
                          LocalInnerClass inner = new LocalInnerClass();
                          inner.displayMessage();
                      }
                  }
          
                  // Calling the method
                  OuterClass outer = new OuterClass();
                  outer.display();
                  </code></pre>
                `
              },
              {
                type: 'Anonymous Inner Class',
                description: `
                  An <strong>anonymous inner class</strong> is a class without a name and is used for implementing interfaces or extending classes on the fly. 
                  It is typically used when a class is needed for a one-time use.
                `,
                example: `
                  <pre><code>
                  public class OuterClass {
                      public void performAction() {
                          // Anonymous Inner Class implementing Runnable interface
                          Runnable runnable = new Runnable() {
                              @Override
                              public void run() {
                                  System.out.println("Running from Anonymous Inner Class");
                              }
                          };
          
                          new Thread(runnable).start();
                      }
                  }
          
                  // Calling the method
                  OuterClass outer = new OuterClass();
                  outer.performAction();
                  </code></pre>
                `
              }
            ],
            javaInnerClassesAdvantages: [
              'Improves encapsulation by logically grouping classes.',
              'Simplifies code by reducing the number of top-level classes.',
              'Access to outer class members, including private ones.',
              'Facilitates better organization of code.'
            ],
            javaInnerClassesConclusion: `
              Inner classes in Java are a versatile feature that allows for better code organization and encapsulation. 
              By choosing the appropriate type of inner class, developers can achieve cleaner, more readable, and more maintainable code. 
              Each type serves different purposes, providing flexibility in design and implementation.
            `
        },
        {
            javaSingletonTitle: 'Singleton Design Pattern in Java',
            javaSingletonIntroduction: `
              The <strong>Singleton Design Pattern</strong> is a creational design pattern that ensures a class has only one instance and provides a global point of access to it. 
              This pattern is widely used in scenarios where a single instance of a class is required to control shared resources, configuration settings, or logging.
            `,
            javaSingletonImplementation: [
              {
                type: 'Eager Initialization',
                description: `
                  In <strong>eager initialization</strong>, the instance is created at the time of class loading. 
                  This approach is simple but may lead to resource wastage if the instance is never used.
                `,
                example: `
                  <pre><code>
                  public class Singleton {
                      // Eagerly initialized instance
                      private static final Singleton instance = new Singleton();
          
                      // Private constructor to prevent instantiation
                      private Singleton() {}
          
                      // Public method to provide access to the instance
                      public static Singleton getInstance() {
                          return instance;
                      }
                  }
          
                  // Usage
                  Singleton singleton = Singleton.getInstance();
                  </code></pre>
                `
              },
              {
                type: 'Lazy Initialization',
                description: `
                  In <strong>lazy initialization</strong>, the instance is created only when it is needed. 
                  This approach saves resources but is not thread-safe unless explicitly handled.
                `,
                example: `
                  <pre><code>
                  public class Singleton {
                      private static Singleton instance;
          
                      // Private constructor
                      private Singleton() {}
          
                      // Public method to provide access to the instance
                      public static Singleton getInstance() {
                          if (instance == null) {
                              instance = new Singleton();
                          }
                          return instance;
                      }
                  }
          
                  // Usage
                  Singleton singleton = Singleton.getInstance();
                  </code></pre>
                `
              },
              {
                type: 'Thread-Safe Singleton (Double-Checked Locking)',
                description: `
                  The <strong>double-checked locking</strong> technique ensures that the Singleton instance is created in a thread-safe manner without incurring the overhead of synchronized every time the instance is accessed.
                `,
                example: `
                  <pre><code>
                  public class Singleton {
                      private static volatile Singleton instance;
          
                      // Private constructor
                      private Singleton() {}
          
                      // Public method to provide access to the instance
                      public static Singleton getInstance() {
                          if (instance == null) {
                              synchronized (Singleton.class) {
                                  if (instance == null) {
                                      instance = new Singleton();
                                  }
                              }
                          }
                          return instance;
                      }
                  }
          
                  // Usage
                  Singleton singleton = Singleton.getInstance();
                  </code></pre>
                `
              },
              {
                type: 'Bill Pugh Singleton',
                description: `
                  The <strong>Bill Pugh Singleton</strong> implementation uses an inner static helper class to achieve lazy initialization and thread safety. 
                  It is considered the most efficient and elegant approach.
                `,
                example: `
                  <pre><code>
                  public class Singleton {
                      // Private constructor
                      private Singleton() {}
          
                      // Static inner helper class
                      private static class SingletonHelper {
                          private static final Singleton INSTANCE = new Singleton();
                      }
          
                      // Public method to provide access to the instance
                      public static Singleton getInstance() {
                          return SingletonHelper.INSTANCE;
                      }
                  }
          
                  // Usage
                  Singleton singleton = Singleton.getInstance();
                  </code></pre>
                `
              }
            ],
            javaSingletonAdvantages: [
              'Ensures a single instance of the class, saving memory and resources.',
              'Provides a global point of access to the instance.',
              'Useful for shared resources such as logging, caching, or thread pools.',
              'Prevents multiple instances from causing inconsistent behavior.'
            ],
            javaSingletonDisadvantages: [
              'May introduce difficulties in unit testing due to global state.',
              'Increased complexity when implementing thread-safe solutions.',
              'Can lead to tight coupling, reducing flexibility in the code.'
            ],
            javaSingletonUseCases: [
              'Logging services.',
              'Configuration management.',
              'Connection pools.',
              'Thread pools.',
              'Caching mechanisms.'
            ],
            javaSingletonConclusion: `
              The Singleton Design Pattern is a powerful tool for managing shared resources and ensuring consistency in applications. 
              By choosing the right implementation strategy (eager, lazy, thread-safe, or Bill Pugh), developers can balance simplicity, performance, and thread safety based on their specific needs.
            `
          },
          {
            javaFinalTitle: 'Final Keyword in Java',
            javaFinalIntroduction: `
              The <strong>final</strong> keyword in Java is a non-access modifier used to apply restrictions on classes, methods, and variables. 
              It ensures immutability and prevents modifications. The behavior of the <strong>final</strong> keyword varies depending on where it is used.
            `,
            javaFinalApplications: [
              {
                usage: 'Final Variable',
                description: `
                  When a variable is declared as <strong>final</strong>, its value cannot be modified once it has been assigned. 
                  It is commonly used to define constants.
                `,
                example: `
                  <pre><code>
                  public class FinalVariableExample {
                      public static final double PI = 3.14159; // Final constant
          
                      public static void main(String[] args) {
                          // PI = 3.14; // Compilation error: cannot assign a value to a final variable
                          System.out.println("Value of PI: " + PI);
                      }
                  }
                  </code></pre>
                `
              },
              {
                usage: 'Final Method',
                description: `
                  A <strong>final</strong> method cannot be overridden by subclasses. 
                  It is used to enforce the specific behavior of a method and prevent it from being altered.
                `,
                example: `
                  <pre><code>
                  public class ParentClass {
                      public final void displayMessage() {
                          System.out.println("This is a final method.");
                      }
                  }
          
                  public class ChildClass extends ParentClass {
                      // Compilation error: Cannot override the final method
                      // public void displayMessage() {
                      //     System.out.println("Trying to override final method.");
                      // }
                  }
                  </code></pre>
                `
              },
              {
                usage: 'Final Class',
                description: `
                  A <strong>final</strong> class cannot be extended (inherited). 
                  This is useful when you want to create an immutable class or prevent further modifications to its functionality.
                `,
                example: `
                  <pre><code>
                  public final class FinalClass {
                      public void displayInfo() {
                          System.out.println("This is a final class.");
                      }
                  }
          
                  // Compilation error: Cannot inherit from final class
                  // public class SubClass extends FinalClass {
                  // }
                  </code></pre>
                `
              }
            ],
            javaFinalAdvantages: [
              'Ensures immutability of variables and objects.',
              'Prevents accidental method overriding in subclasses.',
              'Enhances security by restricting further modifications.',
              'Improves performance as the compiler can optimize final variables.'
            ],
            javaFinalLimitations: [
              'Once assigned, the value of a final variable cannot be changed.',
              'Final methods limit flexibility by prohibiting overrides.',
              'Final classes cannot be extended, reducing code reusability.'
            ],
            javaFinalUseCases: [
              'Defining constants using `final static` variables.',
              'Preventing inheritance of critical or utility classes like `java.lang.String`.',
              'Securing core business logic by making methods `final` to avoid alteration in subclasses.'
            ],
            javaFinalConclusion: `
              The <strong>final</strong> keyword is a powerful tool in Java that helps developers write secure, robust, and optimized code. 
              By applying it appropriately to variables, methods, and classes, you can enforce immutability and maintain strict control over your application design.
            `
          },
          {
            javaPrimitiveTitle: 'Primitive Data Types in Java',
            javaPrimitiveIntroduction: `
              Java provides <strong>primitive data types</strong> as the most basic data types for defining variables. 
              These are not objects but hold simple values and are predefined by the language. 
              Primitive types are stored in the stack memory and provide high-performance operations.
            `,
            javaPrimitiveOverview: `
              Java has a total of <strong>8 primitive data types</strong>, which are categorized into four groups based on the type of data they store: 
              integer, floating-point, character, and boolean. These data types help developers store and manipulate values effectively.
            `,
            javaPrimitiveTypes: [
              {
                type: 'byte',
                description: 'Stores very small integer values ranging from -128 to 127. Used to save memory in large arrays.',
                size: '1 byte (8 bits)',
                example: `
                  <pre><code>
                  byte smallNumber = 100;
                  System.out.println("Byte value: " + smallNumber);
                  </code></pre>
                `
              },
              {
                type: 'short',
                description: 'Stores small integer values ranging from -32,768 to 32,767.',
                size: '2 bytes (16 bits)',
                example: `
                  <pre><code>
                  short shortNumber = 32000;
                  System.out.println("Short value: " + shortNumber);
                  </code></pre>
                `
              },
              {
                type: 'int',
                description: 'Stores medium-sized integer values ranging from -2,147,483,648 to 2,147,483,647.',
                size: '4 bytes (32 bits)',
                example: `
                  <pre><code>
                  int number = 100000;
                  System.out.println("Integer value: " + number);
                  </code></pre>
                `
              },
              {
                type: 'long',
                description: 'Stores large integer values ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.',
                size: '8 bytes (64 bits)',
                example: `
                  <pre><code>
                  long largeNumber = 10000000000L;
                  System.out.println("Long value: " + largeNumber);
                  </code></pre>
                `
              },
              {
                type: 'float',
                description: 'Stores fractional numbers (single-precision) ranging from approximately 3.4e−038 to 3.4e+038.',
                size: '4 bytes (32 bits)',
                example: `
                  <pre><code>
                  float floatNumber = 5.75f;
                  System.out.println("Float value: " + floatNumber);
                  </code></pre>
                `
              },
              {
                type: 'double',
                description: 'Stores large fractional numbers (double-precision) ranging from approximately 1.7e−308 to 1.7e+308.',
                size: '8 bytes (64 bits)',
                example: `
                  <pre><code>
                  double doubleNumber = 19.99;
                  System.out.println("Double value: " + doubleNumber);
                  </code></pre>
                `
              },
              {
                type: 'char',
                description: 'Stores a single 16-bit Unicode character. Its value ranges from \\u0000 to \\uFFFF.',
                size: '2 bytes (16 bits)',
                example: `
                  <pre><code>
                  char letter = 'A';
                  System.out.println("Character value: " + letter);
                  </code></pre>
                `
              },
              {
                type: 'boolean',
                description: 'Stores only two values: true or false. Commonly used for decision-making and logical operations.',
                size: '1 bit',
                example: `
                  <pre><code>
                  boolean isJavaFun = true;
                  System.out.println("Boolean value: " + isJavaFun);
                  </code></pre>
                `
              }
            ],
            javaPrimitiveAdvantages: [
              'Efficient memory usage due to direct storage in stack memory.',
              'Simplifies working with basic data without the overhead of objects.',
              'Improves performance in calculations and operations.'
            ],
            javaPrimitiveLimitations: [
              'Cannot be null as they are not objects.',
              'Lack of additional functionality compared to objects like `Integer` or `Double`.',
              'Cannot be directly used in collections like ArrayList without boxing.'
            ],
            javaPrimitiveConclusion: `
              Primitive data types form the foundation of Java's type system, offering an efficient way to store and manipulate simple values. 
              Understanding their sizes, ranges, and use cases is essential for writing efficient Java applications.
            `
          },
          {
            javaWrapperTitle: 'Wrapper Classes in Java',
            javaWrapperIntroduction: `
              In Java, <strong>wrapper classes</strong> provide a way to use primitive data types as objects. 
              Each primitive type (e.g., int, double, char) has a corresponding wrapper class in the <strong>java.lang</strong> package.
              Wrapper classes are essential when working with collections or frameworks that require objects instead of primitives.
            `,
            javaWrapperPurpose: `
              The primary purpose of wrapper classes is to allow primitives to be treated as objects, which is crucial in scenarios where primitives are not directly usable, such as:
              <ul>
                <li>Storing data in collections like <code>ArrayList</code>.</li>
                <li>Providing additional methods for manipulating data.</li>
                <li>Facilitating features like <strong>autoboxing</strong> and <strong>unboxing</strong>.</li>
              </ul>
            `,
            javaWrapperClasses: [
              {
                type: 'Integer',
                primitive: 'int',
                example: `
                  <pre><code>
                  int num = 10;
                  Integer wrapperNum = Integer.valueOf(num); // Boxing
                  int unboxedNum = wrapperNum.intValue();   // Unboxing
                  System.out.println("Wrapped Integer: " + wrapperNum);
                  System.out.println("Unboxed Integer: " + unboxedNum);
                  </code></pre>
                `
              },
              {
                type: 'Double',
                primitive: 'double',
                example: `
                  <pre><code>
                  double decimal = 5.5;
                  Double wrapperDecimal = Double.valueOf(decimal); // Boxing
                  double unboxedDecimal = wrapperDecimal.doubleValue(); // Unboxing
                  System.out.println("Wrapped Double: " + wrapperDecimal);
                  System.out.println("Unboxed Double: " + unboxedDecimal);
                  </code></pre>
                `
              },
              {
                type: 'Character',
                primitive: 'char',
                example: `
                  <pre><code>
                  char letter = 'A';
                  Character wrapperLetter = Character.valueOf(letter); // Boxing
                  char unboxedLetter = wrapperLetter.charValue();      // Unboxing
                  System.out.println("Wrapped Character: " + wrapperLetter);
                  System.out.println("Unboxed Character: " + unboxedLetter);
                  </code></pre>
                `
              },
              {
                type: 'Boolean',
                primitive: 'boolean',
                example: `
                  <pre><code>
                  boolean isTrue = true;
                  Boolean wrapperBool = Boolean.valueOf(isTrue); // Boxing
                  boolean unboxedBool = wrapperBool.booleanValue(); // Unboxing
                  System.out.println("Wrapped Boolean: " + wrapperBool);
                  System.out.println("Unboxed Boolean: " + unboxedBool);
                  </code></pre>
                `
              }
            ],
            javaWrapperAutoboxingUnboxing: `
              Java introduced <strong>autoboxing</strong> and <strong>unboxing</strong> to automatically convert between primitives and their corresponding wrapper classes:
              <ul>
                <li><strong>Autoboxing:</strong> Automatic conversion of a primitive to its wrapper class.</li>
                <li><strong>Unboxing:</strong> Automatic conversion of a wrapper object to its primitive equivalent.</li>
              </ul>
              <pre><code>
              // Autoboxing
              Integer wrapper = 100;
              
              // Unboxing
              int primitive = wrapper;
              
              System.out.println("Autoboxed value: " + wrapper);
              System.out.println("Unboxed value: " + primitive);
              </code></pre>
            `,
            javaWrapperUseCases: [
              'Storing primitive values in collections like ArrayList and HashMap.',
              'Using utility methods like parsing strings into numbers (e.g., Integer.parseInt()).',
              'Handling null values, which primitives cannot do.',
              'Facilitating generic type usage in Java collections and frameworks.'
            ],
            javaWrapperLimitations: [
              'Wrapper objects consume more memory compared to primitives.',
              'Performance overhead due to object creation and manipulation.',
              'Risk of null pointer exceptions when dealing with null wrapper objects.'
            ],
            javaWrapperConclusion: `
              Wrapper classes bridge the gap between primitives and objects, providing essential functionality for Java's object-oriented programming paradigm. 
              While they add flexibility, they should be used judiciously to balance performance and memory consumption.
            `
          }                  
    ]
}