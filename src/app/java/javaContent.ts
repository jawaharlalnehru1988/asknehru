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
            
        }
    ]
}