import { Component, inject } from "@angular/core";

export interface ISpringContent {
    title: string;
    content: string;
}

export class SpringContent {
    mainContent = [
        {title: "Intro", content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Spring Boot is an open-source Java framework designed to simplify the development of 
    stand-alone, production-ready Spring applications. It provides a convention-over-configuration 
    approach, reducing boilerplate code and enabling developers to focus on business logic.
  </p>

  <h3 style="color: #16a085;">Key Features of Spring Boot:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Auto-configuration to reduce manual setup.</li>
    <li>Embedded servers like Tomcat, Jetty, and Undertow.</li>
    <li>Microservices-friendly architecture.</li>
    <li>Spring Boot Starter dependencies for easy integration.</li>
    <li>Spring Boot Actuator for monitoring and management.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use Spring Boot?</h3>
  <p style="color: #2c3e50;">
    Spring Boot streamlines the development of Java applications by eliminating XML configuration 
    and simplifying dependency management. It is widely used for building RESTful APIs, microservices, 
    and cloud-native applications.
  </p>

  <h3 style="color: #2980b9;">Example: Basic Spring Boot Application</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.boot.SpringApplication;
      import org.springframework.boot.autoconfigure.SpringBootApplication;

      @SpringBootApplication
      public class MySpringBootApp {
          public static void main(String[] args) {
              SpringApplication.run(MySpringBootApp.class, args);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    The above code is a minimal Spring Boot application that starts an embedded server 
    and runs the application.
  </p>
</div>
`},
{title: "Controller Basics", content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Spring Boot Controller Basics</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, a Controller is responsible for handling HTTP requests and returning responses. 
    It is part of the Spring MVC framework and plays a key role in developing RESTful APIs.
  </p>

  <h3 style="color: #16a085;">Key Features of a Controller:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Handles HTTP requests (GET, POST, PUT, DELETE).</li>
    <li>Uses '@RestController' or '@Controller' annotations.</li>
    <li>Returns JSON, HTML, or other response types.</li>
    <li>Supports request parameters and path variables.</li>
    <li>Works seamlessly with service layers and repositories.</li>
  </ul>

  <h3 style="color: #e67e22;">Difference Between '@Controller' and '@RestController'</h3>
  <p style="color: #2c3e50;">
    - <strong>'@Controller'</strong>: Used for traditional MVC-based web applications that return HTML views.<br>
    - <strong>'@RestController'</strong>: A specialization of '@Controller' that automatically converts responses to JSON.
  </p>

  <h3 style="color: #2980b9;">Example: Basic Spring Boot Controller</h3>
  <pre style="background: #2c3e50; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto; color: white;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api")
      public class HelloController {
      
          @GetMapping("/hello")
          public String sayHello() {
              return "Hello, Spring Boot!";
          }
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Explanation of the Code:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong> '@RestController'</strong>: Marks the class as a REST API controller.</li>
    <li><strong> '@RequestMapping("/api")'</strong>: Defines the base URL for the controller.</li>
    <li><strong> \`@GetMapping("/hello")\`</strong>: Maps HTTP GET requests to the \`sayHello()\` method.</li>
    <li>The method returns a simple text response: "Hello, Spring Boot!".</li>
  </ul>

  <h3 style="color: #e67e22;">Running the Controller</h3>
  <p style="color: #2c3e50;">
    Start your Spring Boot application and open a browser or use Postman to access:<br>
    <code style="background: #ecf0f1; padding: 4px; border-radius: 3px; color: #2c3e50;">
      http://localhost:8080/api/hello
    </code>
  </p>

  <p style="color: #2c3e50;">
    You will see the response: <strong>"Hello, Spring Boot!"</strong>.
  </p>
</div>
`},
{
    title: "Spring @Controller", content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Spring <code>@Controller</code> Annotation</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, the <code>@Controller</code> annotation is used to define a class as a Spring MVC controller. 
    It is typically used for handling web requests and returning HTML views (as opposed to RESTful responses, 
    which use <code>@RestController</code>).
  </p>

  <h3 style="color: #16a085;">Key Features of <code>@Controller</code>:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Processes HTTP requests and returns views.</li>
    <li>Works with view templates like Thymeleaf, JSP, or FreeMarker.</li>
    <li>Uses <code>@RequestMapping</code> to map URLs to methods.</li>
    <li>Can pass data to the view using <code>Model</code> or <code>ModelAndView</code>.</li>
    <li>Supports form handling and validation.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using <code>@Controller</code> in a Spring Boot Application</h3>
  <pre style="background: #2c3e50; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto; color: white;">
    <code>
      import org.springframework.stereotype.Controller;
      import org.springframework.ui.Model;
      import org.springframework.web.bind.annotation.GetMapping;

      @Controller
      public class HomeController {

          @GetMapping("/home")
          public String homePage(Model model) {
              model.addAttribute("message", "Welcome to Spring Boot!");
              return "home"; // Returns the "home.html" or "home.jsp" view
          }
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Explanation of the Code:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong><code>@Controller</code></strong>: Marks the class as a Spring MVC controller.</li>
    <li><strong><code>@GetMapping("/home")</code></strong>: Maps HTTP GET requests to the <code>homePage()</code> method.</li>
    <li><strong><code>Model model</code></strong>: Used to pass data to the view.</li>
    <li><strong><code>return "home"</code></strong>: Returns the view named <code>home</code> (resolved by a template engine like Thymeleaf).</li>
  </ul>

  <h3 style="color: #2980b9;">Thymeleaf View (home.html)</h3>
  <pre style="background: #2c3e50; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto; color: white;">
    <code>
      &lt;html&gt;
      &lt;body&gt;
          &lt;h1&gt;Spring Boot Home Page&lt;/h1&gt;
          &lt;p&gt;Message: [[\${message}]]&lt;/p&gt;
      &lt;/body&gt;
      &lt;/html&gt;
    </code>
  </pre>

  <h3 style="color: #e67e22;">When to Use <code>@Controller</code>?</h3>
  <p style="color: #2c3e50;">
    - Use <code>@Controller</code> when developing traditional web applications with server-side rendering.<br>
    - Use <code>@RestController</code> when building RESTful APIs that return JSON responses.
  </p>

  <h3 style="color: #16a085;">Running the Application</h3>
  <p style="color: #2c3e50;">
    Start the Spring Boot application and open:<br>
    <code style="background: #ecf0f1; padding: 4px; border-radius: 3px; color: #2c3e50;">
      http://localhost:8080/home
    </code>
  </p>
  
  <p style="color: #2c3e50;">
    This will display the HTML view with the message from the controller.
  </p>
</div>
`
},
{
    title: "Spring @RestController", content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Spring <code>@RestController</code> Annotation</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, the <code>@RestController</code> annotation is used to create RESTful web services. 
    It simplifies the development of APIs by combining <code>@Controller</code> and <code>@ResponseBody</code>, 
    ensuring that data is returned as JSON or XML instead of rendering views.
  </p>

  <h3 style="color: #16a085;">Key Features of <code>@RestController</code>:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Used for building RESTful APIs.</li>
    <li>Returns data as JSON or XML instead of HTML views.</li>
    <li>Eliminates the need for <code>@ResponseBody</code> on each method.</li>
    <li>Supports request handling using <code>@GetMapping</code>, <code>@PostMapping</code>, etc.</li>
    <li>Can work with request parameters and path variables.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using <code>@RestController</code> in a Spring Boot Application</h3>
  <pre style="background: #2c3e50; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto; color: white;">
    <code>
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api")
      public class UserController {

          @GetMapping("/user")
          public String getUser() {
              return "Hello, User!";
          }
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Explanation of the Code:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong><code>@RestController</code></strong>: Marks the class as a REST API controller.</li>
    <li><strong><code>@RequestMapping("/api")</code></strong>: Defines the base URL for the controller.</li>
    <li><strong><code>@GetMapping("/user")</code></strong>: Maps HTTP GET requests to the <code>getUser()</code> method.</li>
    <li>The method returns a simple text response: <code>"Hello, User!"</code>.</li>
  </ul>

  <h3 style="color: #2980b9;">Returning JSON Data</h3>
  <p style="color: #2c3e50;">
    Instead of returning a string, we can return JSON using a model class:
  </p>
  <pre style="background: #2c3e50; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto; color: white;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api")
      public class UserController {

          @GetMapping("/user")
          public User getUser() {
              return new User(1, "John Doe", "john@example.com");
          }
      }

      class User {
          private int id;
          private String name;
          private String email;

          public User(int id, String name, String email) {
              this.id = id;
              this.name = name;
              this.email = email;
          }

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">When to Use <code>@RestController</code>?</h3>
  <p style="color: #2c3e50;">
    - Use <code>@RestController</code> when developing RESTful APIs.<br>
    - Use <code>@Controller</code> when returning HTML views using a template engine like Thymeleaf.
  </p>

  <h3 style="color: #e67e22;">Testing the API</h3>
  <p style="color: #2c3e50;">
    Start the Spring Boot application and access the API in a browser or Postman:
  </p>
  <p style="background: #ecf0f1; padding: 4px; border-radius: 3px; color: #2c3e50;">
    <strong>URL:</strong> <code>http://localhost:8080/api/user</code>
  </p>

  <p style="color: #2c3e50;">
    The response will be a JSON object:
  </p>
  <pre style="background: #2c3e50; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto; color: white;">
    <code>
      {
          "id": 1,
          "name": "John Doe",
          "email": "john@example.com"
      }
    </code>
  </pre>
</div>
`
},
{
  title: `Request Mapping`, content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Request Mapping in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Request Mapping in Spring Boot is used to map HTTP requests to specific handler methods 
    within a controller. It allows developers to define URL patterns and handle different 
    HTTP methods like GET, POST, PUT, DELETE, etc., efficiently.
  </p>

  <h3 style="color: #16a085;">Annotations for Request Mapping:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>@RequestMapping</strong> - Generic mapping for all HTTP methods.</li>
    <li><strong>@GetMapping</strong> - Handles HTTP GET requests.</li>
    <li><strong>@PostMapping</strong> - Handles HTTP POST requests.</li>
    <li><strong>@PutMapping</strong> - Handles HTTP PUT requests.</li>
    <li><strong>@DeleteMapping</strong> - Handles HTTP DELETE requests.</li>
    <li><strong>@PatchMapping</strong> - Handles HTTP PATCH requests.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using @RequestMapping</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;
      
      @RestController
      @RequestMapping("/api")
      public class RequestMappingController {
          
          @GetMapping("/hello")
          public String sayHello() {
              return "Hello, Spring Boot!";
          }
      }
    </code>
  </pre>
  
  <p style="color: #2c3e50;">
    In this example, the <code>@RequestMapping("/api")</code> annotation maps all requests under 
    <code>/api</code>, while <code>@GetMapping("/hello")</code> specifically handles GET requests 
    to <code>/api/hello</code>.
  </p>

  <h3 style="color: #2980b9;">Advanced Request Mapping Features</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Path Variables:</strong> Use <code>@PathVariable</code> to capture values from the URL.</li>
    <li><strong>Request Parameters:</strong> Use <code>@RequestParam</code> to handle query parameters.</li>
    <li><strong>Consumes and Produces:</strong> Define supported content types with <code>consumes</code> and <code>produces</code>.</li>
    <li><strong>Multiple URL Patterns:</strong> A method can handle multiple endpoints.</li>
  </ul>

  <h3 style="color: #c0392b;">Example: Using Path Variables</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.PathVariable;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;
      
      @RestController
      @RequestMapping("/user")
      public class UserController {
          
          @GetMapping("/{id}")
          public String getUserById(@PathVariable("id") int userId) {
              return "User ID: " + userId;
          }
      }
    </code>
  </pre>
  
  <p style="color: #2c3e50;">
    Here, the <code>@PathVariable</code> annotation captures the user ID from the URL, allowing dynamic mapping.
  </p>
</div>
`
},
{
  title: `GetMapping`, content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @GetMapping in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    The <code>@GetMapping</code> annotation in Spring Boot is a specialized version of <code>@RequestMapping</code> 
    used to handle HTTP GET requests. It simplifies the process of defining endpoints for retrieving data from the server.
  </p>

  <h3 style="color: #16a085;">Why Use @GetMapping?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Specifically designed for handling GET requests.</li>
    <li>More readable and concise than <code>@RequestMapping</code>.</li>
    <li>Can be combined with <code>@RequestParam</code> and <code>@PathVariable</code> for dynamic request handling.</li>
    <li>Supports response customization using <code>produces</code> attribute.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Basic @GetMapping Usage</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;
      
      @RestController
      @RequestMapping("/api")
      public class GetMappingController {
          
          @GetMapping("/message")
          public String getMessage() {
              return "Welcome to Spring Boot!";
          }
      }
    </code>
  </pre>
  
  <p style="color: #2c3e50;">
    In this example, the <code>@GetMapping("/message")</code> annotation maps HTTP GET requests to the <code>/api/message</code> endpoint.
  </p>

  <h3 style="color: #2980b9;">Using @GetMapping with @PathVariable</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.PathVariable;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;
      
      @RestController
      @RequestMapping("/users")
      public class UserController {
          
          @GetMapping("/{id}")
          public String getUserById(@PathVariable("id") int userId) {
              return "User ID: " + userId;
          }
      }
    </code>
  </pre>
  
  <p style="color: #2c3e50;">
    Here, <code>@PathVariable</code> is used to capture a dynamic value from the URL and return user details based on the provided ID.
  </p>

  <h3 style="color: #c0392b;">Using @GetMapping with @RequestParam</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RequestParam;
      import org.springframework.web.bind.annotation.RestController;
      
      @RestController
      @RequestMapping("/search")
      public class SearchController {
          
          @GetMapping("/product")
          public String searchProduct(@RequestParam("name") String productName) {
              return "Searching for product: " + productName;
          }
      }
    </code>
  </pre>
  
  <p style="color: #2c3e50;">
    In this case, <code>@RequestParam</code> is used to extract query parameters from the URL, making it useful for search functionalities.
  </p>
</div>
`
},
{
  title:`PostMapping`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @PostMapping in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@PostMapping</code> is an annotation used to map HTTP POST requests to specific controller methods.
    It simplifies the creation of RESTful APIs by handling data submission from clients. This annotation is commonly used for 
    creating resources, such as adding new records in a database.
  </p>

  <h3 style="color: #16a085;">Key Features of @PostMapping:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Handles HTTP POST requests easily.</li>
    <li>Supports automatic JSON and form data binding.</li>
    <li>Works with request body data using <code>@RequestBody</code>.</li>
    <li>Integrates with validation mechanisms like <code>@Valid</code> or <code>@Validated</code>.</li>
    <li>Enhances API development by mapping URLs directly to handler methods.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @PostMapping?</h3>
  <p style="color: #2c3e50;">
    The <code>@PostMapping</code> annotation is preferred over <code>@RequestMapping(method = RequestMethod.POST)</code>
    because it provides a more concise and readable way to handle POST requests. It is primarily used in RESTful web services
    where data needs to be sent from the client to the server.
  </p>

  <h3 style="color: #2980b9;">Example: Using @PostMapping in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import org.springframework.http.ResponseEntity;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @PostMapping("/create")
          public ResponseEntity<String> createUser(@RequestBody User user) {
              return ResponseEntity.ok("User " + user.getName() + " created successfully");
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In the example above, the <code>createUser</code> method is mapped to the <code>/users/create</code> endpoint,
    handling POST requests. The request body is automatically converted into a <code>User</code> object.
  </p>

  <h3 style="color: #9b59b6;">Handling Form Data with @PostMapping</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @PostMapping("/submit")
      public ResponseEntity<String> handleFormSubmission(@RequestParam String name, @RequestParam int age) {
          return ResponseEntity.ok("Received form data: Name=" + name + ", Age=" + age);
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example shows how <code>@PostMapping</code> can handle form submissions using <code>@RequestParam</code> to extract individual values.
  </p>
</div>
`
},
{
   title: `PutMapping`, content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @PutMapping in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@PutMapping</code> is an annotation used to map HTTP PUT requests to specific controller methods.
    It is commonly used for updating existing resources in RESTful APIs, ensuring modifications are performed efficiently.
  </p>

  <h3 style="color: #16a085;">Key Features of @PutMapping:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Handles HTTP PUT requests.</li>
    <li>Used for updating existing resources.</li>
    <li>Works with request body data using <code>@RequestBody</code>.</li>
    <li>Supports validation with <code>@Valid</code> or <code>@Validated</code>.</li>
    <li>Enhances API development by providing clear request handling.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @PutMapping?</h3>
  <p style="color: #2c3e50;">
    The <code>@PutMapping</code> annotation simplifies handling PUT requests compared to using <code>@RequestMapping(method = RequestMethod.PUT)</code>.
    It is primarily used for updating resources, ensuring that the API follows RESTful principles effectively.
  </p>

  <h3 style="color: #2980b9;">Example: Using @PutMapping in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import org.springframework.http.ResponseEntity;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @PutMapping("/update")
          public ResponseEntity<String> updateUser(@RequestBody User user) {
              return ResponseEntity.ok("User " + user.getName() + " updated successfully");
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In the example above, the <code>updateUser</code> method is mapped to the <code>/users/update</code> endpoint,
    handling PUT requests. The request body is automatically converted into a <code>User</code> object.
  </p>

  <h3 style="color: #9b59b6;">Handling Path Variables with @PutMapping</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @PutMapping("/update/{id}")
      public ResponseEntity<String> updateUserById(@PathVariable Long id, @RequestBody User user) {
          return ResponseEntity.ok("User with ID " + id + " updated successfully");
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example demonstrates how <code>@PutMapping</code> can handle updates with a specified user ID using <code>@PathVariable</code>.
  </p>
</div>
`
},
{
  title: `DeleteMapping`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @DeleteMapping in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@DeleteMapping</code> is an annotation used to map HTTP DELETE requests to specific controller methods.
    It is commonly used for deleting resources in RESTful APIs, ensuring proper handling of data removal operations.
  </p>

  <h3 style="color: #16a085;">Key Features of @DeleteMapping:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Handles HTTP DELETE requests.</li>
    <li>Used for deleting existing resources.</li>
    <li>Works with path variables to specify which resource to delete.</li>
    <li>Supports response handling with <code>ResponseEntity</code>.</li>
    <li>Ensures proper API design by enforcing resource removal principles.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @DeleteMapping?</h3>
  <p style="color: #2c3e50;">
    The <code>@DeleteMapping</code> annotation simplifies handling DELETE requests compared to using <code>@RequestMapping(method = RequestMethod.DELETE)</code>.
    It is an essential part of RESTful API design, ensuring that resources can be removed efficiently.
  </p>

  <h3 style="color: #2980b9;">Example: Using @DeleteMapping in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import org.springframework.http.ResponseEntity;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @DeleteMapping("/delete/{id}")
          public ResponseEntity<String> deleteUser(@PathVariable Long id) {
              return ResponseEntity.ok("User with ID " + id + " deleted successfully");
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In the example above, the <code>deleteUser</code> method is mapped to the <code>/users/delete/{id}</code> endpoint,
    handling DELETE requests. The <code>@PathVariable</code> annotation extracts the user ID from the request URL.
  </p>

  <h3 style="color: #9b59b6;">Handling Request Body with @DeleteMapping</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @DeleteMapping("/remove")
      public ResponseEntity<String> deleteUser(@RequestBody User user) {
          return ResponseEntity.ok("User " + user.getName() + " removed successfully");
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example demonstrates how <code>@DeleteMapping</code> can handle DELETE requests with a request body using <code>@RequestBody</code>.
  </p>
</div>
`
},
{
  title: `PatchMapping`, content: `<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @PatchMapping in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@PatchMapping</code> is an annotation used to map HTTP PATCH requests to specific controller methods.
    It is primarily used for partial updates of a resource in RESTful APIs, allowing modifications to only specific fields rather than replacing the entire resource.
  </p>

  <h3 style="color: #16a085;">Key Features of @PatchMapping:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Handles HTTP PATCH requests.</li>
    <li>Used for partial updates of a resource.</li>
    <li>Works with request bodies to modify specific fields.</li>
    <li>Supports response handling with <code>ResponseEntity</code>.</li>
    <li>Enhances API efficiency by updating only required data.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @PatchMapping?</h3>
  <p style="color: #2c3e50;">
    The <code>@PatchMapping</code> annotation simplifies handling PATCH requests compared to using <code>@RequestMapping(method = RequestMethod.PATCH)</code>.
    It follows the RESTful API best practices by allowing partial updates rather than full replacements.
  </p>

  <h3 style="color: #2980b9;">Example: Using @PatchMapping in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import org.springframework.http.ResponseEntity;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @PatchMapping("/update/{id}")
          public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody Map<String, Object> updates) {
              return ResponseEntity.ok("User with ID " + id + " updated successfully with changes: " + updates);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In the example above, the <code>updateUser</code> method is mapped to the <code>/users/update/{id}</code> endpoint,
    handling PATCH requests. The <code>@RequestBody</code> annotation allows partial updates by accepting a JSON object with specific fields to modify.
  </p>

  <h3 style="color: #9b59b6;">Handling Complex Partial Updates with @PatchMapping</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @PatchMapping("/modify")
      public ResponseEntity<String> modifyUser(@RequestBody User user) {
          return ResponseEntity.ok("User " + user.getName() + " modified successfully");
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example demonstrates how <code>@PatchMapping</code> can handle complex objects for partial updates using <code>@RequestBody</code>.
  </p>
</div>
`
},
{
  title: `PatchMapping`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @PathVariable in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@PathVariable</code> is an annotation used to extract values from URL placeholders.
    It helps in mapping dynamic parts of the URL to method parameters in RESTful web services.
  </p>

  <h3 style="color: #16a085;">Key Features of @PathVariable:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Extracts values from URL segments.</li>
    <li>Allows dynamic URL handling in RESTful APIs.</li>
    <li>Supports optional and default values.</li>
    <li>Works seamlessly with <code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, and <code>@DeleteMapping</code>.</li>
    <li>Can be used with multiple path variables.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @PathVariable?</h3>
  <p style="color: #2c3e50;">
    The <code>@PathVariable</code> annotation makes it easy to extract dynamic values from the URL,
    simplifying the implementation of RESTful web services by providing clear and readable API endpoints.
  </p>

  <h3 style="color: #2980b9;">Example: Using @PathVariable in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import org.springframework.http.ResponseEntity;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @GetMapping("/{id}")
          public ResponseEntity<String> getUserById(@PathVariable Long id) {
              return ResponseEntity.ok("User with ID: " + id);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>getUserById</code> method extracts the <code>id</code> from the URL path
    and returns a response containing the user ID.
  </p>

  <h3 style="color: #9b59b6;">Using Multiple @PathVariable Parameters</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @GetMapping("/{userId}/posts/{postId}")
      public ResponseEntity<String> getUserPost(@PathVariable Long userId, @PathVariable Long postId) {
          return ResponseEntity.ok("User ID: " + userId + ", Post ID: " + postId);
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example shows how multiple <code>@PathVariable</code> annotations can be used
    to extract multiple values from the URL.
  </p>
</div>
`
},
{
  title:`RequestParam`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @RequestParam in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@RequestParam</code> is an annotation used to extract query parameters from the request URL.
    It allows passing parameters in the URL and mapping them directly to method parameters in RESTful web services.
  </p>

  <h3 style="color: #16a085;">Key Features of @RequestParam:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Extracts query parameters from the request URL.</li>
    <li>Supports optional and required parameters.</li>
    <li>Can provide default values.</li>
    <li>Works with different HTTP methods such as GET and POST.</li>
    <li>Improves readability and flexibility of REST API endpoints.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @RequestParam?</h3>
  <p style="color: #2c3e50;">
    The <code>@RequestParam</code> annotation simplifies handling of query parameters in Spring Boot applications,
    allowing easy extraction and validation of user input directly from the URL.
  </p>

  <h3 style="color: #2980b9;">Example: Using @RequestParam in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import org.springframework.http.ResponseEntity;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @GetMapping("/search")
          public ResponseEntity<String> searchUser(@RequestParam String name) {
              return ResponseEntity.ok("Searched for user: " + name);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>searchUser</code> method extracts the <code>name</code> query parameter from the request URL
    and returns a response containing the search result.
  </p>

  <h3 style="color: #9b59b6;">Using Optional @RequestParam with Default Values</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @GetMapping("/filter")
      public ResponseEntity<String> filterUsers(@RequestParam(defaultValue = "10") int limit) {
          return ResponseEntity.ok("Fetching " + limit + " users");
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example demonstrates how a default value is provided for <code>limit</code>
    when the parameter is not explicitly passed in the request.
  </p>
</div>
`
},
{
  title:`RequestBody`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @RequestBody in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@RequestBody</code> is an annotation used to bind HTTP request body content
    to a Java object. It is commonly used in RESTful web services to handle JSON or XML input from clients.
  </p>

  <h3 style="color: #16a085;">Key Features of @RequestBody:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Binds JSON/XML request body to a Java object.</li>
    <li>Works with HTTP methods like POST, PUT, and PATCH.</li>
    <li>Automatically deserializes JSON/XML using Jackson or other configured libraries.</li>
    <li>Reduces manual parsing of request payloads.</li>
    <li>Supports validation using <code>@Valid</code> and <code>@Validated</code> annotations.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @RequestBody?</h3>
  <p style="color: #2c3e50;">
    The <code>@RequestBody</code> annotation simplifies data handling in Spring Boot applications,
    making it easier to receive and process structured data from HTTP requests.
  </p>

  <h3 style="color: #2980b9;">Example: Using @RequestBody in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import org.springframework.http.ResponseEntity;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @PostMapping("/create")
          public ResponseEntity<String> createUser(@RequestBody User user) {
              return ResponseEntity.ok("User created: " + user.getName());
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>createUser</code> method accepts a JSON object representing a user,
    automatically mapping it to a <code>User</code> Java object.
  </p>

  <h3 style="color: #9b59b6;">Using @RequestBody with Validation</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.validation.Valid;

      @PostMapping("/register")
      public ResponseEntity<String> registerUser(@Valid @RequestBody User user) {
          return ResponseEntity.ok("User registered successfully!");
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example demonstrates how to apply validation on the request body to ensure required fields are provided.
  </p>
</div>
`
},
{
  title:`ResponseBody`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @ResponseBody in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>@ResponseBody</code> is an annotation used to indicate that the return value of a method
    should be written directly to the HTTP response body instead of being processed as a view.
    It is commonly used in RESTful web services to return data in JSON or XML format.
  </p>

  <h3 style="color: #16a085;">Key Features of @ResponseBody:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Automatically converts Java objects into JSON or XML.</li>
    <li>Eliminates the need for explicit <code>ResponseEntity</code> objects.</li>
    <li>Works with REST controllers for API responses.</li>
    <li>Supports serialization via Jackson or other libraries.</li>
    <li>Can be applied at method or class level.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use @ResponseBody?</h3>
  <p style="color: #2c3e50;">
    The <code>@ResponseBody</code> annotation simplifies API development by automatically converting
    return values into structured response formats, reducing the need for manual serialization.
  </p>

  <h3 style="color: #2980b9;">Example: Using @ResponseBody in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @GetMapping("/info")
          @ResponseBody
          public User getUser() {
              return new User("John Doe", 30);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>getUser</code> method returns a Java object, which is automatically
    converted to JSON format in the HTTP response.
  </p>

  <h3 style="color: #9b59b6;">Using @ResponseBody at Class Level</h3>
  <p style="color: #2c3e50;">
    Instead of annotating each method with <code>@ResponseBody</code>, you can use <code>@RestController</code>
    at the class level, which is a combination of <code>@Controller</code> and <code>@ResponseBody</code>.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/products")
      public class ProductController {

          @GetMapping("/list")
          public List<Product> getProducts() {
              return Arrays.asList(new Product("Laptop", 1200), new Product("Phone", 800));
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    Here, all methods within <code>ProductController</code> will automatically return JSON responses.
  </p>
</div>
`
},
{
  title:`ResponseEntity`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding ResponseEntity in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, <code>ResponseEntity</code> is a powerful class that represents the full HTTP response,
    including the status code, headers, and body. It provides better control over the response
    structure and is commonly used in RESTful web services.
  </p>

  <h3 style="color: #16a085;">Key Features of ResponseEntity:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Allows setting HTTP status codes explicitly.</li>
    <li>Supports adding custom headers in the response.</li>
    <li>Handles different response types, including JSON and XML.</li>
    <li>Can be used to return error messages or structured responses.</li>
    <li>Improves flexibility compared to <code>@ResponseBody</code>.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use ResponseEntity?</h3>
  <p style="color: #2c3e50;">
    The <code>ResponseEntity</code> class enables developers to customize API responses by setting
    status codes, headers, and message bodies, making it a useful tool for handling errors and
    success responses effectively.
  </p>

  <h3 style="color: #2980b9;">Example: Using ResponseEntity in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @GetMapping("/{id}")
          public ResponseEntity<User> getUser(@PathVariable int id) {
              User user = new User("John Doe", 30);
              return ResponseEntity.ok(user);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, <code>ResponseEntity.ok()</code> is used to return a successful HTTP response
    with a <code>User</code> object in JSON format.
  </p>

  <h3 style="color: #9b59b6;">Setting Custom Headers with ResponseEntity</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpHeaders;
      import org.springframework.http.HttpStatus;
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/products")
      public class ProductController {

          @GetMapping("/info")
          public ResponseEntity<String> getProductInfo() {
              HttpHeaders headers = new HttpHeaders();
              headers.add("Custom-Header", "CustomValue");
              return new ResponseEntity<>("Product details", headers, HttpStatus.OK);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example demonstrates how to set custom headers in the response using <code>HttpHeaders</code>.
  </p>
</div>
`
},
{
  title:`Exception Handling`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Exception Handling in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Exception handling in Spring Boot is a crucial feature that allows developers to gracefully handle errors
    and provide meaningful responses to users. Spring Boot provides multiple ways to handle exceptions,
    including <code>@ExceptionHandler</code>, <code>@ControllerAdvice</code>, and <code>ResponseEntityExceptionHandler</code>.
  </p>

  <h3 style="color: #16a085;">Key Features of Exception Handling in Spring Boot:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Centralized exception handling with <code>@ControllerAdvice</code>.</li>
    <li>Custom exception handling using <code>@ExceptionHandler</code>.</li>
    <li>Global exception handling using <code>ResponseEntityExceptionHandler</code>.</li>
    <li>Custom error response structures.</li>
    <li>Automatic handling of common exceptions like <code>NullPointerException</code>, <code>MethodArgumentNotValidException</code>.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use Exception Handling?</h3>
  <p style="color: #2c3e50;">
    Exception handling improves application stability and user experience by ensuring errors
    are handled properly instead of exposing raw stack traces. It also helps maintain
    a consistent response structure across the API.
  </p>

  <h3 style="color: #2980b9;">Example: Handling Exceptions with @ExceptionHandler</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpStatus;
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @GetMapping("/{id}")
          public User getUser(@PathVariable int id) {
              if (id <= 0) {
                  throw new IllegalArgumentException("Invalid user ID");
              }
              return new User("John Doe", 30);
          }

          @ExceptionHandler(IllegalArgumentException.class)
          public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
              return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, <code>@ExceptionHandler</code> catches the <code>IllegalArgumentException</code>
    and returns a custom error message with a <code>400 BAD REQUEST</code> status.
  </p>

  <h3 style="color: #9b59b6;">Global Exception Handling with @ControllerAdvice</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpStatus;
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.*;
      import org.springframework.web.bind.annotation.ControllerAdvice;

      @ControllerAdvice
      public class GlobalExceptionHandler {

          @ExceptionHandler(Exception.class)
          public ResponseEntity<String> handleGlobalException(Exception ex) {
              return new ResponseEntity<>("An error occurred: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    The <code>@ControllerAdvice</code> annotation enables centralized exception handling
    across all controllers, ensuring consistent error responses.
  </p>
</div>
`
},
{
  title:`Controller Advice`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Controller Advice in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Controller Advice is a powerful feature in Spring Boot that allows developers to handle exceptions, 
    apply global configurations, and manage cross-cutting concerns across multiple controllers. 
    It provides a centralized way to manage exceptions and customize the response for specific 
    scenarios, ensuring cleaner and more maintainable code.
  </p>

  <h3 style="color: #16a085;">Key Features of Controller Advice:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Global exception handling for all controllers.</li>
    <li>Custom error responses for specific exceptions.</li>
    <li>Support for applying global <code>@ModelAttribute</code> and <code>@InitBinder</code> configurations.</li>
    <li>Centralized logic for cross-cutting concerns like logging and validation.</li>
    <li>Integration with Spring's dependency injection and AOP (Aspect-Oriented Programming).</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use Controller Advice?</h3>
  <p style="color: #2c3e50;">
    Controller Advice eliminates the need for repetitive exception handling code in individual 
    controllers. It promotes the DRY (Don't Repeat Yourself) principle by providing a single 
    place to manage exceptions and global configurations. This makes the application more robust, 
    scalable, and easier to debug.
  </p>

  <h3 style="color: #2980b9;">Example: Implementing Controller Advice</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpStatus;
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.ControllerAdvice;
      import org.springframework.web.bind.annotation.ExceptionHandler;

      @ControllerAdvice
      public class GlobalExceptionHandler {

          @ExceptionHandler(ResourceNotFoundException.class)
          public ResponseEntity&lt;String&gt; handleResourceNotFoundException(ResourceNotFoundException ex) {
              return new ResponseEntity&lt;&gt;(ex.getMessage(), HttpStatus.NOT_FOUND);
          }

          @ExceptionHandler(Exception.class)
          public ResponseEntity&lt;String&gt; handleGlobalException(Exception ex) {
              return new ResponseEntity&lt;&gt;("An error occurred: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In the above example, the <code>@ControllerAdvice</code> annotation is used to create a global 
    exception handler. The <code>@ExceptionHandler</code> methods are defined to handle specific 
    exceptions like <code>ResourceNotFoundException</code> and a generic <code>Exception</code>. 
    This ensures that all controllers in the application can leverage this centralized exception 
    handling mechanism.
  </p>

  <h3 style="color: #8e44ad;">Advanced Usage: Custom Error Responses</h3>
  <p style="color: #2c3e50;">
    You can also customize the error response by returning a structured JSON object instead of a plain 
    string. This is particularly useful for RESTful APIs where clients expect consistent error formats.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpStatus;
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.ControllerAdvice;
      import org.springframework.web.bind.annotation.ExceptionHandler;

      @ControllerAdvice
      public class GlobalExceptionHandler {

          @ExceptionHandler(ResourceNotFoundException.class)
          public ResponseEntity&lt;ErrorResponse&gt; handleResourceNotFoundException(ResourceNotFoundException ex) {
              ErrorResponse errorResponse = new ErrorResponse(HttpStatus.NOT_FOUND.value(), ex.getMessage());
              return new ResponseEntity&lt;&gt;(errorResponse, HttpStatus.NOT_FOUND);
          }

          @ExceptionHandler(Exception.class)
          public ResponseEntity&lt;ErrorResponse&gt; handleGlobalException(Exception ex) {
              ErrorResponse errorResponse = new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), "An unexpected error occurred");
              return new ResponseEntity&lt;&gt;(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
          }
      }

      class ErrorResponse {
          private int statusCode;
          private String message;

          public ErrorResponse(int statusCode, String message) {
              this.statusCode = statusCode;
              this.message = message;
          }

          // Getters and Setters
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this advanced example, the <code>ErrorResponse</code> class is used to create a structured 
    JSON response. This provides more detailed information to the client, such as the HTTP status 
    code and a descriptive error message.
  </p>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Controller Advice is an essential tool in Spring Boot for managing exceptions and global 
    configurations. By centralizing these concerns, it helps developers build cleaner, more 
    maintainable, and scalable applications. Whether you're building RESTful APIs or complex 
    web applications, Controller Advice ensures that your error handling is consistent and 
    efficient.
  </p>
</div>
`
},
{
  title:`Cross-Origin (CORS)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Cross-Origin Resource Sharing (CORS)</h2>
  <p style="font-size: 16px; color: #34495e;">
    Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to allow or restrict web pages from making requests to a different domain than the one that served the web page. It is a mechanism that enables servers to specify who can access their resources and how, ensuring secure communication between clients and servers.
  </p>

  <h3 style="color: #16a085;">Why is CORS Important?</h3>
  <p style="color: #2c3e50;">
    CORS is essential for modern web applications that rely on APIs hosted on different domains. Without CORS, browsers enforce the <strong>Same-Origin Policy</strong>, which prevents web pages from making requests to a different domain for security reasons. CORS allows developers to bypass this restriction in a controlled manner, enabling secure cross-domain communication.
  </p>

  <h3 style="color: #e67e22;">How CORS Works</h3>
  <p style="color: #2c3e50;">
    When a web page makes a cross-origin request, the browser sends an <strong>OPTIONS</strong> preflight request to the server to check if the actual request is allowed. The server responds with CORS headers that specify which origins, methods, and headers are permitted. If the request is allowed, the browser proceeds with the actual request.
  </p>

  <h3 style="color: #2980b9;">Key CORS Headers</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Access-Control-Allow-Origin</strong>: Specifies which origins are allowed to access the resource.</li>
    <li><strong>Access-Control-Allow-Methods</strong>: Lists the HTTP methods (e.g., GET, POST) allowed for cross-origin requests.</li>
    <li><strong>Access-Control-Allow-Headers</strong>: Indicates which headers can be used in the actual request.</li>
    <li><strong>Access-Control-Allow-Credentials</strong>: Determines whether credentials (e.g., cookies) can be included in the request.</li>
    <li><strong>Access-Control-Max-Age</strong>: Specifies how long the results of a preflight request can be cached.</li>
  </ul>

  <h3 style="color: #8e44ad;">Implementing CORS in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Spring Boot provides built-in support for configuring CORS at both the global and controller levels. Below are examples of how to enable CORS in a Spring Boot application.
  </p>

  <h4 style="color: #27ae60;">Global CORS Configuration</h4>
  <p style="color: #2c3e50;">
    You can configure CORS globally by overriding the <code>addCorsMappings</code> method in a <code>WebMvcConfigurer</code> bean.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.annotation.Configuration;
      import org.springframework.web.servlet.config.annotation.CorsRegistry;
      import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

      @Configuration
      public class CorsConfig implements WebMvcConfigurer {

          @Override
          public void addCorsMappings(CorsRegistry registry) {
              registry.addMapping("/api/**")
                      .allowedOrigins("https://example.com")
                      .allowedMethods("GET", "POST", "PUT", "DELETE")
                      .allowedHeaders("*")
                      .allowCredentials(true)
                      .maxAge(3600);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, CORS is enabled for all endpoints under <code>/api/**</code>. Requests from <code>https://example.com</code> are allowed, and specific HTTP methods and headers are permitted.
  </p>

  <h4 style="color: #27ae60;">Controller-Level CORS Configuration</h4>
  <p style="color: #2c3e50;">
    You can also enable CORS for specific controllers or methods using the <code>@CrossOrigin</code> annotation.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.CrossOrigin;
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api")
      @CrossOrigin(origins = "https://example.com", methods = {RequestMethod.GET, RequestMethod.POST})
      public class MyController {

          @GetMapping("/data")
          public String getData() {
              return "CORS-enabled response";
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>@CrossOrigin</code> annotation is used to enable CORS for the <code>/api/data</code> endpoint. Only requests from <code>https://example.com</code> using the GET or POST methods are allowed.
  </p>

  <h3 style="color: #d35400;">Handling CORS in RESTful APIs</h3>
  <p style="color: #2c3e50;">
    For RESTful APIs, it is crucial to configure CORS properly to ensure that only trusted clients can access the resources. You can also use Spring Security to enforce stricter CORS policies and protect your APIs from unauthorized access.
  </p>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    CORS is a vital mechanism for enabling secure cross-origin communication in web applications. By configuring CORS in Spring Boot, developers can control which clients can access their APIs and ensure that their applications remain secure and scalable. Whether you use global or controller-level configurations, CORS provides the flexibility needed to build modern, interoperable web applications.
  </p>
</div>
`
},
{
  title:`Cross-Origin (CORS)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Controller Security in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Controller Security is a critical aspect of building secure web applications in Spring Boot. It involves protecting your application's endpoints from unauthorized access, ensuring that only authenticated and authorized users can perform specific actions. Spring Boot, combined with Spring Security, provides robust tools to implement security at the controller level.
  </p>

  <h3 style="color: #16a085;">Why is Controller Security Important?</h3>
  <p style="color: #2c3e50;">
    In modern web applications, controllers handle sensitive data and business logic. Without proper security measures, attackers can exploit vulnerabilities to gain unauthorized access, manipulate data, or disrupt services. Controller Security ensures that:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Only authenticated users can access protected endpoints.</li>
    <li>Users have the necessary permissions (roles) to perform specific actions.</li>
    <li>Sensitive data is protected from unauthorized access.</li>
    <li>Common security vulnerabilities (e.g., CSRF, XSS) are mitigated.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts in Controller Security</h3>
  <p style="color: #2c3e50;">
    Spring Security provides several features to secure controllers effectively:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Authentication</strong>: Verifying the identity of a user (e.g., via username/password, OAuth2, or JWT).</li>
    <li><strong>Authorization</strong>: Granting or denying access to resources based on user roles or permissions.</li>
    <li><strong>CSRF Protection</strong>: Preventing Cross-Site Request Forgery attacks.</li>
    <li><strong>Method-Level Security</strong>: Applying security rules directly to controller methods.</li>
    <li><strong>Endpoint Filtering</strong>: Restricting access to specific endpoints based on security rules.</li>
  </ul>

  <h3 style="color: #2980b9;">Implementing Controller Security in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below are examples of how to implement Controller Security in a Spring Boot application using Spring Security.
  </p>

  <h4 style="color: #8e44ad;">1. Securing Endpoints with <code>HttpSecurity</code></h4>
  <p style="color: #2c3e50;">
    You can configure security rules for your controllers using the <code>HttpSecurity</code> class in a <code>SecurityConfig</code> class.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.annotation.Bean;
      import org.springframework.security.config.annotation.web.builders.HttpSecurity;
      import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
      import org.springframework.security.web.SecurityFilterChain;

      @EnableWebSecurity
      public class SecurityConfig {

          @Bean
          public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
              http
                  .authorizeHttpRequests(auth -> auth
                      .requestMatchers("/public/**").permitAll() // Allow public access
                      .requestMatchers("/admin/**").hasRole("ADMIN") // Restrict to ADMIN role
                      .requestMatchers("/user/**").hasAnyRole("USER", "ADMIN") // Allow USER and ADMIN roles
                      .anyRequest().authenticated() // Require authentication for all other requests
                  )
                  .formLogin(form -> form
                      .loginPage("/login") // Custom login page
                      .permitAll()
                  )
                  .logout(logout -> logout
                      .logoutSuccessUrl("/login?logout") // Redirect after logout
                      .permitAll()
                  )
                  .csrf(csrf -> csrf.disable()); // Disable CSRF for simplicity (not recommended for production)
              return http.build();
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>HttpSecurity</code> configuration ensures that:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Public endpoints under <code>/public/**</code> are accessible to everyone.</li>
    <li>Endpoints under <code>/admin/**</code> are restricted to users with the <code>ADMIN</code> role.</li>
    <li>Endpoints under <code>/user/**</code> are accessible to users with either the <code>USER</code> or <code>ADMIN</code> role.</li>
    <li>All other endpoints require authentication.</li>
  </ul>

  <h4 style="color: #8e44ad;">2. Method-Level Security with <code>@PreAuthorize</code></h4>
  <p style="color: #2c3e50;">
    You can also secure individual controller methods using annotations like <code>@PreAuthorize</code>, <code>@PostAuthorize</code>, and <code>@Secured</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.security.access.prepost.PreAuthorize;
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api")
      public class SecureController {

          @GetMapping("/admin")
          @PreAuthorize("hasRole('ADMIN')") // Only ADMIN role can access
          public String adminEndpoint() {
              return "Welcome, Admin!";
          }

          @GetMapping("/user")
          @PreAuthorize("hasAnyRole('USER', 'ADMIN')") // USER or ADMIN roles can access
          public String userEndpoint() {
              return "Welcome, User!";
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>@PreAuthorize</code> annotation is used to enforce role-based access control at the method level.
  </p>

  <h4 style="color: #8e44ad;">3. Enabling CSRF Protection</h4>
  <p style="color: #2c3e50;">
    CSRF (Cross-Site Request Forgery) protection is enabled by default in Spring Security. You can customize it as follows:
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      http
          .csrf(csrf -> csrf
              .csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse()) // Store CSRF token in a cookie
          );
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Controller Security</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use HTTPS to encrypt communication between the client and server.</li>
    <li>Always validate and sanitize user inputs to prevent injection attacks.</li>
    <li>Use strong password hashing algorithms (e.g., bcrypt) for storing credentials.</li>
    <li>Regularly update dependencies to patch known vulnerabilities.</li>
    <li>Implement logging and monitoring to detect suspicious activities.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Controller Security is a fundamental aspect of building secure Spring Boot applications. By leveraging Spring Security's features, such as endpoint filtering, method-level security, and CSRF protection, developers can ensure that their applications are protected from unauthorized access and common vulnerabilities. Implementing these best practices will help you build robust and secure web applications.
  </p>
</div>` 
},
{
  title:`DTO in Controllers`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to DTOs in Controllers</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) are a design pattern used to encapsulate and transfer data between different layers of an application, particularly between controllers and services. In Spring Boot, DTOs are commonly used to decouple the internal data model (entities) from the data exposed by the API, ensuring better security, flexibility, and maintainability.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs in Controllers?</h3>
  <p style="color: #2c3e50;">
    Using DTOs in controllers offers several advantages:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Separation of Concerns</strong>: DTOs decouple the API layer from the persistence layer, ensuring that changes in the database schema do not directly affect the API.</li>
    <li><strong>Security</strong>: By exposing only the necessary data, DTOs prevent sensitive information from being leaked through the API.</li>
    <li><strong>Performance Optimization</strong>: DTOs allow you to fetch only the required data, reducing unnecessary data transfer and improving performance.</li>
    <li><strong>Validation</strong>: DTOs can include validation annotations to ensure that incoming data meets specific criteria before processing.</li>
    <li><strong>Versioning</strong>: DTOs make it easier to manage API versioning by providing a clear separation between the API contract and the internal data model.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of DTOs</h3>
  <p style="color: #2c3e50;">
    When working with DTOs in Spring Boot, it is essential to understand the following concepts:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Entity-DTO Mapping</strong>: Converting between entities (database models) and DTOs (API models) using tools like <code>ModelMapper</code> or manual mapping.</li>
    <li><strong>Validation</strong>: Using annotations like <code>@NotNull</code>, <code>@Size</code>, and <code>@Email</code> to validate incoming data.</li>
    <li><strong>Layered Architecture</strong>: Ensuring that DTOs are used only in the controller and service layers, while entities are used in the persistence layer.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Using DTOs in a Spring Boot Controller</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to use DTOs in a Spring Boot controller to handle user data.
  </p>

  <h4 style="color: #8e44ad;">1. Define the Entity and DTO</h4>
  <p style="color: #2c3e50;">
    First, define the entity (database model) and the DTO (API model).
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      // Entity (Database Model)
      import jakarta.persistence.Entity;
      import jakarta.persistence.GeneratedValue;
      import jakarta.persistence.GenerationType;
      import jakarta.persistence.Id;

      @Entity
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
          private String password;

          // Getters and Setters
      }

      // DTO (API Model)
      import jakarta.validation.constraints.Email;
      import jakarta.validation.constraints.NotBlank;
      import jakarta.validation.constraints.Size;

      public class UserDTO {
          private Long id;

          @NotBlank(message = "Name is required")
          private String name;

          @NotBlank(message = "Email is required")
          @Email(message = "Invalid email format")
          private String email;

          @NotBlank(message = "Password is required")
          @Size(min = 6, message = "Password must be at least 6 characters")
          private String password;

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Create a Controller with DTOs</h4>
  <p style="color: #2c3e50;">
    Next, create a controller that uses the DTO to handle incoming requests and responses.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.http.ResponseEntity;
      import org.springframework.validation.annotation.Validated;
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @Autowired
          private UserService userService;

          @PostMapping
          public ResponseEntity&lt;UserDTO&gt; createUser(@Validated @RequestBody UserDTO userDTO) {
              UserDTO savedUser = userService.createUser(userDTO);
              return ResponseEntity.ok(savedUser);
          }

          @GetMapping("/{id}")
          public ResponseEntity&lt;UserDTO&gt; getUserById(@PathVariable Long id) {
              UserDTO userDTO = userService.getUserById(id);
              return ResponseEntity.ok(userDTO);
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Implement the Service Layer</h4>
  <p style="color: #2c3e50;">
    The service layer handles the conversion between entities and DTOs and performs business logic.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Service;
      import org.modelmapper.ModelMapper;

      @Service
      public class UserService {

          @Autowired
          private UserRepository userRepository;

          @Autowired
          private ModelMapper modelMapper;

          public UserDTO createUser(UserDTO userDTO) {
              User user = modelMapper.map(userDTO, User.class);
              User savedUser = userRepository.save(user);
              return modelMapper.map(savedUser, UserDTO.class);
          }

          public UserDTO getUserById(Long id) {
              User user = userRepository.findById(id)
                  .orElseThrow(() -> new ResourceNotFoundException("User not found"));
              return modelMapper.map(user, UserDTO.class);
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Using DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use DTOs to expose only the necessary data to the API clients.</li>
    <li>Leverage validation annotations to ensure data integrity.</li>
    <li>Use tools like <code>ModelMapper</code> or <code>MapStruct</code> to simplify entity-DTO mapping.</li>
    <li>Avoid exposing sensitive information (e.g., passwords) in DTOs.</li>
    <li>Keep DTOs lightweight and focused on their purpose.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    DTOs play a crucial role in building secure, maintainable, and scalable Spring Boot applications. By decoupling the API layer from the persistence layer, DTOs ensure that your application remains flexible and adheres to best practices. Whether you're building RESTful APIs or complex web applications, using DTOs in controllers is a proven approach to managing data transfer effectively.
  </p>
</div>`
},
{
  title:`Validation in Controllers`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Validation in Controllers</h2>
  <p style="font-size: 16px; color: #34495e;">
    Validation in controllers is a critical aspect of building robust and secure Spring Boot applications. It ensures that the data received by your application meets specific criteria before being processed, preventing invalid or malicious data from causing errors or security vulnerabilities. Spring Boot provides powerful validation mechanisms, primarily through the <strong>Bean Validation API (JSR 380)</strong> and Spring's validation support.
  </p>

  <h3 style="color: #16a085;">Why is Validation Important?</h3>
  <p style="color: #2c3e50;">
    Validation is essential for several reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Data Integrity</strong>: Ensures that the data conforms to expected formats and constraints.</li>
    <li><strong>Security</strong>: Prevents injection attacks and other malicious inputs.</li>
    <li><strong>User Experience</strong>: Provides meaningful error messages to users when input is invalid.</li>
    <li><strong>Business Logic</strong>: Ensures that only valid data is processed by the application, reducing the risk of runtime errors.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Validation in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Spring Boot leverages the Bean Validation API (JSR 380) to perform validation. Key concepts include:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Validation Annotations</strong>: Annotations like <code>@NotNull</code>, <code>@Size</code>, <code>@Email</code>, and <code>@Pattern</code> are used to define validation rules.</li>
    <li><strong>Validation Groups</strong>: Allows you to apply different validation rules for different scenarios (e.g., create vs. update).</li>
    <li><strong>Custom Validators</strong>: Enables you to create custom validation logic for complex use cases.</li>
    <li><strong>Error Handling</strong>: Spring Boot provides mechanisms to handle validation errors and return meaningful responses to clients.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Implementing Validation in a Spring Boot Controller</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to implement validation in a Spring Boot controller using the Bean Validation API.
  </p>

  <h4 style="color: #8e44ad;">1. Define a DTO with Validation Annotations</h4>
  <p style="color: #2c3e50;">
    First, define a DTO (Data Transfer Object) with validation annotations.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.validation.constraints.*;

      public class UserDTO {

          @NotNull(message = "Name is required")
          private String name;

          @Email(message = "Invalid email format")
          @NotBlank(message = "Email is required")
          private String email;

          @Size(min = 6, message = "Password must be at least 6 characters")
          @NotBlank(message = "Password is required")
          private String password;

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Enable Validation in the Controller</h4>
  <p style="color: #2c3e50;">
    Use the <code>@Valid</code> annotation to enable validation for the incoming request body.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.ResponseEntity;
      import org.springframework.validation.annotation.Validated;
      import org.springframework.web.bind.annotation.*;

      import jakarta.validation.Valid;

      @RestController
      @RequestMapping("/users")
      @Validated
      public class UserController {

          @PostMapping
          public ResponseEntity&lt;String&gt; createUser(@Valid @RequestBody UserDTO userDTO) {
              // Process the validated userDTO
              return ResponseEntity.ok("User created successfully");
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Handle Validation Errors</h4>
  <p style="color: #2c3e50;">
    Use <code>@ExceptionHandler</code> to handle validation errors and return meaningful error messages.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpStatus;
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.MethodArgumentNotValidException;
      import org.springframework.web.bind.annotation.ExceptionHandler;
      import org.springframework.web.bind.annotation.RestControllerAdvice;

      import java.util.HashMap;
      import java.util.Map;

      @RestControllerAdvice
      public class GlobalExceptionHandler {

          @ExceptionHandler(MethodArgumentNotValidException.class)
          public ResponseEntity&lt;Map&lt;String, String&gt;&gt; handleValidationExceptions(MethodArgumentNotValidException ex) {
              Map&lt;String, String&gt; errors = new HashMap&lt;&gt;();
              ex.getBindingResult().getFieldErrors().forEach(error -&gt;
                  errors.put(error.getField(), error.getDefaultMessage())
              );
              return new ResponseEntity&lt;&gt;(errors, HttpStatus.BAD_REQUEST);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>GlobalExceptionHandler</code> captures validation errors and returns a map of field names and error messages with a <code>400 Bad Request</code> status.
  </p>

  <h3 style="color: #d35400;">Custom Validators</h3>
  <p style="color: #2c3e50;">
    For complex validation logic, you can create custom validators by implementing the <code>ConstraintValidator</code> interface.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.validation.Constraint;
      import jakarta.validation.ConstraintValidator;
      import jakarta.validation.ConstraintValidatorContext;
      import jakarta.validation.Payload;
      import java.lang.annotation.*;

      @Target({ ElementType.FIELD })
      @Retention(RetentionPolicy.RUNTIME)
      @Constraint(validatedBy = CustomEmailValidator.class)
      public @interface CustomEmail {
          String message() default "Invalid email format";
          Class&lt;?&gt;[] groups() default {};
          Class&lt;? extends Payload&gt;[] payload() default {};
      }

      public class CustomEmailValidator implements ConstraintValidator&lt;CustomEmail, String&gt; {
          @Override
          public boolean isValid(String email, ConstraintValidatorContext context) {
              return email != null && email.endsWith("@example.com");
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    You can then use the custom annotation in your DTO:
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserDTO {
          @CustomEmail(message = "Email must end with @example.com")
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Validation in controllers is a fundamental aspect of building secure and reliable Spring Boot applications. By leveraging the Bean Validation API and Spring's validation support, you can ensure that your application processes only valid and safe data. Whether you're using built-in annotations or custom validators, proper validation practices will enhance the quality and security of your application.
  </p>
</div>
`
},
{
  title:`Logging in Controllers`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Logging in Controllers</h2>
  <p style="font-size: 16px; color: #34495e;">
    Logging is an essential practice in software development that helps developers monitor, debug, and analyze the behavior of their applications. In Spring Boot, logging in controllers is particularly important for tracking incoming requests, outgoing responses, and any errors or exceptions that occur during request processing. Proper logging ensures that you have visibility into your application's runtime behavior and can quickly identify and resolve issues.
  </p>

  <h3 style="color: #16a085;">Why is Logging Important in Controllers?</h3>
  <p style="color: #2c3e50;">
    Logging in controllers provides several benefits:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Debugging</strong>: Helps identify and resolve issues by providing detailed information about the flow of requests and responses.</li>
    <li><strong>Monitoring</strong>: Tracks the performance and behavior of your application in real-time.</li>
    <li><strong>Auditing</strong>: Provides a record of user actions and system events for compliance and security purposes.</li>
    <li><strong>Error Tracking</strong>: Captures exceptions and errors, making it easier to diagnose and fix problems.</li>
    <li><strong>Performance Analysis</strong>: Logs request processing times to identify performance bottlenecks.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Logging in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Spring Boot uses the <strong>SLF4J (Simple Logging Facade for Java)</strong> API with <strong>Logback</strong> as the default logging framework. Key concepts include:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Log Levels</strong>: Different levels of logging, such as <code>TRACE</code>, <code>DEBUG</code>, <code>INFO</code>, <code>WARN</code>, and <code>ERROR</code>, allow you to control the verbosity of logs.</li>
    <li><strong>Logging Configuration</strong>: Customize logging behavior using configuration files like <code>application.properties</code> or <code>logback-spring.xml</code>.</li>
    <li><strong>Structured Logging</strong>: Logs in a structured format (e.g., JSON) for easier parsing and analysis.</li>
    <li><strong>Contextual Logging</strong>: Add contextual information (e.g., request IDs, user IDs) to logs for better traceability.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Implementing Logging in a Spring Boot Controller</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to implement logging in a Spring Boot controller.
  </p>

  <h4 style="color: #8e44ad;">1. Add Logging to a Controller</h4>
  <p style="color: #2c3e50;">
    Use the <code>Logger</code> class from SLF4J to add logging statements to your controller.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.slf4j.Logger;
      import org.slf4j.LoggerFactory;
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/api")
      public class UserController {

          private static final Logger logger = LoggerFactory.getLogger(UserController.class);

          @GetMapping("/users/{id}")
          public String getUserById(@PathVariable Long id) {
              logger.info("Fetching user with ID: {}", id);
              // Simulate fetching user
              String user = "User" + id;
              logger.debug("Fetched user: {}", user);
              return user;
          }

          @PostMapping("/users")
          public String createUser(@RequestBody String user) {
              logger.info("Creating user: {}", user);
              // Simulate user creation
              logger.debug("User created successfully");
              return "User created";
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>Logger</code> is used to log messages at different levels (<code>INFO</code> and <code>DEBUG</code>) to track the flow of requests and responses.
  </p>

  <h4 style="color: #8e44ad;">2. Configure Logging in <code>application.properties</code></h4>
  <p style="color: #2c3e50;">
    Customize logging behavior using the <code>application.properties</code> file.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-properties">
      # Set log level for the application
      logging.level.root=INFO
      logging.level.com.example.demo=DEBUG

      # Log to a file
      logging.file.name=app.log
      logging.file.path=/var/logs

      # Log in JSON format
      logging.pattern.console={"timestamp":"%d{yyyy-MM-dd HH:mm:ss}","level":"%level","message":"%msg"}%n
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Add Contextual Information to Logs</h4>
  <p style="color: #2c3e50;">
    Use <code>MDC (Mapped Diagnostic Context)</code> to add contextual information, such as request IDs or user IDs, to your logs.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.slf4j.Logger;
      import org.slf4j.LoggerFactory;
      import org.slf4j.MDC;
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/api")
      public class UserController {

          private static final Logger logger = LoggerFactory.getLogger(UserController.class);

          @GetMapping("/users/{id}")
          public String getUserById(@PathVariable Long id) {
              MDC.put("requestId", "12345"); // Add request ID to logs
              logger.info("Fetching user with ID: {}", id);
              // Simulate fetching user
              String user = "User" + id;
              logger.debug("Fetched user: {}", user);
              MDC.clear(); // Clear MDC after request
              return user;
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Logging in Controllers</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use appropriate log levels (<code>INFO</code> for general information, <code>DEBUG</code> for detailed debugging, <code>ERROR</code> for errors).</li>
    <li>Avoid logging sensitive information (e.g., passwords, credit card numbers).</li>
    <li>Use structured logging (e.g., JSON) for easier parsing and analysis.</li>
    <li>Add contextual information (e.g., request IDs, user IDs) to logs for better traceability.</li>
    <li>Regularly review and rotate log files to prevent them from consuming too much disk space.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Logging in controllers is a vital practice for building maintainable, debuggable, and secure Spring Boot applications. By leveraging SLF4J and Logback, you can implement effective logging strategies that provide visibility into your application's behavior and help you quickly identify and resolve issues. Whether you're logging request details, errors, or performance metrics, proper logging practices will enhance the reliability and observability of your application.
  </p>
</div>
`
},
{
  title:`Interceptor in Controllers`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Interceptors in Controllers</h2>
  <p style="font-size: 16px; color: #34495e;">
    Interceptors in Spring Boot are powerful components that allow you to intercept and modify HTTP requests and responses before they reach the controller or after they leave the controller. They are commonly used for cross-cutting concerns such as logging, authentication, authorization, request validation, and performance monitoring. Interceptors provide a clean and reusable way to implement such functionality without cluttering your controller logic.
  </p>

  <h3 style="color: #16a085;">Why Use Interceptors in Controllers?</h3>
  <p style="color: #2c3e50;">
    Interceptors offer several advantages:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Separation of Concerns</strong>: Keeps cross-cutting concerns like logging and security separate from business logic.</li>
    <li><strong>Reusability</strong>: Interceptors can be applied to multiple controllers, reducing code duplication.</li>
    <li><strong>Flexibility</strong>: Allows you to modify requests and responses dynamically.</li>
    <li><strong>Centralized Logic</strong>: Provides a single place to handle common tasks like authentication and logging.</li>
    <li><strong>Improved Maintainability</strong>: Makes the codebase cleaner and easier to maintain.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Interceptors</h3>
  <p style="color: #2c3e50;">
    Spring Boot interceptors are based on the <code>HandlerInterceptor</code> interface, which provides three key methods:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>preHandle</strong>: Executes before the request reaches the controller. Useful for authentication, logging, or request modification.</li>
    <li><strong>postHandle</strong>: Executes after the controller processes the request but before the response is sent. Useful for modifying the response or adding additional data.</li>
    <li><strong>afterCompletion</strong>: Executes after the response is sent to the client. Useful for cleanup tasks or logging.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Implementing an Interceptor in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to create and configure an interceptor in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Create a Custom Interceptor</h4>
  <p style="color: #2c3e50;">
    Implement the <code>HandlerInterceptor</code> interface to create a custom interceptor.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Component;
      import org.springframework.web.servlet.HandlerInterceptor;
      import org.springframework.web.servlet.ModelAndView;

      import jakarta.servlet.http.HttpServletRequest;
      import jakarta.servlet.http.HttpServletResponse;

      @Component
      public class CustomInterceptor implements HandlerInterceptor {

          @Override
          public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
              System.out.println("Pre Handle method: Checking request before reaching the controller");
              // Example: Check authentication
              String authToken = request.getHeader("Authorization");
              if (authToken == null || !authToken.startsWith("Bearer ")) {
                  response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                  return false; // Stop further processing
              }
              return true; // Continue processing
          }

          @Override
          public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
              System.out.println("Post Handle method: Modifying response before sending to client");
              // Example: Add custom headers
              response.setHeader("X-Custom-Header", "Interceptor-Added");
          }

          @Override
          public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
              System.out.println("After Completion method: Cleaning up after response is sent");
              // Example: Logging request completion
              if (ex != null) {
                  System.err.println("Request failed with exception: " + ex.getMessage());
              }
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Register the Interceptor</h4>
  <p style="color: #2c3e50;">
    Register the interceptor in a configuration class by extending <code>WebMvcConfigurer</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.context.annotation.Configuration;
      import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
      import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

      @Configuration
      public class WebConfig implements WebMvcConfigurer {

          @Autowired
          private CustomInterceptor customInterceptor;

          @Override
          public void addInterceptors(InterceptorRegistry registry) {
              registry.addInterceptor(customInterceptor)
                      .addPathPatterns("/api/**") // Apply to all endpoints under /api
                      .excludePathPatterns("/api/public/**"); // Exclude public endpoints
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Use the Interceptor in a Controller</h4>
  <p style="color: #2c3e50;">
    The interceptor will automatically apply to the specified endpoints. Here's an example controller:
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api")
      public class UserController {

          @GetMapping("/users")
          public String getUsers() {
              return "List of users";
          }

          @GetMapping("/public/info")
          public String getPublicInfo() {
              return "Public information";
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Common Use Cases for Interceptors</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Authentication and Authorization</strong>: Validate tokens or check user roles before allowing access to endpoints.</li>
    <li><strong>Logging</strong>: Log incoming requests, outgoing responses, and execution times.</li>
    <li><strong>Request/Response Modification</strong>: Add or modify headers, sanitize inputs, or transform responses.</li>
    <li><strong>Performance Monitoring</strong>: Measure and log the time taken to process requests.</li>
    <li><strong>Error Handling</strong>: Capture and log exceptions globally.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Interceptors in Spring Boot provide a powerful and flexible way to handle cross-cutting concerns in your application. By intercepting requests and responses, you can implement reusable logic for authentication, logging, performance monitoring, and more. Whether you're building RESTful APIs or complex web applications, interceptors help you keep your code clean, modular, and maintainable.
  </p>
</div>
`
},
{
  title:`Controller Testing`, content:``
}

    ]

}