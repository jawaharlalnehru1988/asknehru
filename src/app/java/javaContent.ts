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
          }
          
          
        
    ]
}