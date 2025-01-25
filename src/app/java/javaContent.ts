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
            javaClassExample: `<pre><code>    public class Car {
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
          }
          
          
          
        
    ]
}