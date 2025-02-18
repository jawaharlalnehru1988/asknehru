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
  title: `PathVariable`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding @PathVariable in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    The <code>@PathVariable</code> annotation in Spring Boot is used to extract values from URI paths. It helps map dynamic values in the URL to method parameters in a controller, making RESTful APIs more flexible and intuitive.
  </p>

  <h3 style="color: #16a085;">Key Features of @PathVariable:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Extracts dynamic values from URI paths.</li>
    <li>Supports multiple path variables in a single endpoint.</li>
    <li>Can be made optional using default values.</li>
    <li>Works seamlessly with RESTful APIs.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using @PathVariable</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/api/users")
      public class UserController {

          @GetMapping("/{id}")
          public ResponseEntity<String> getUserById(@PathVariable("id") Long userId) {
              return ResponseEntity.ok("User ID: " + userId);
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Handling Multiple @PathVariable</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/api/orders")
      public class OrderController {

          @GetMapping("/{userId}/orders/{orderId}")
          public ResponseEntity<String> getOrderDetails(
              @PathVariable Long userId, @PathVariable Long orderId) {
              return ResponseEntity.ok("User " + userId + " ordered item " + orderId);
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Optional @PathVariable with Default Values</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/api/products")
      public class ProductController {

          @GetMapping({"", "/{id}"})
          public ResponseEntity<String> getProduct(@PathVariable(name = "id", required = false) Long productId) {
              if (productId == null) {
                  return ResponseEntity.ok("Fetching all products");
              }
              return ResponseEntity.ok("Product ID: " + productId);
          }
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Best Practices for Using @PathVariable</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use descriptive names for path variables to improve readability.</li>
    <li>Ensure paths are structured consistently for better API design.</li>
    <li>Use <code>@PathVariable</code> only when the variable is a required part of the path; otherwise, prefer <code>@RequestParam</code>.</li>
    <li>Handle exceptions for invalid path variables using <code>@ControllerAdvice</code>.</li>
  </ul>

  <p style="color: #2c3e50;">
    The <code>@PathVariable</code> annotation enhances RESTful APIs by allowing dynamic values in URLs, making applications more interactive and scalable.
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
  title:`Controller Security`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
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
</div>
`
},
{
  title:`DTO in Controllers`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding DTO in Controllers</h2>
  <p style="font-size: 16px; color: #34495e;">
    A Data Transfer Object (DTO) is a simple Java object used to transfer data between layers in a Spring Boot application. DTOs help improve security, reduce unnecessary data exposure, and ensure cleaner code in controllers by separating domain models from API responses.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prevents overexposure of domain models.</li>
    <li>Encapsulates only required data for API responses.</li>
    <li>Improves maintainability and separation of concerns.</li>
    <li>Ensures flexibility by transforming data before sending it to the client.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using DTO in a Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserDTO {
          private Long id;
          private String name;
          private String email;

          // Getters and Setters
      }

      @RestController
      @RequestMapping("/api/users")
      public class UserController {

          @PostMapping
          public ResponseEntity<String> createUser(@RequestBody UserDTO userDTO) {
              return ResponseEntity.ok("User created: " + userDTO.getName());
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Mapping Entity to DTO</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserMapper {
          public static UserDTO toDTO(User user) {
              UserDTO dto = new UserDTO();
              dto.setId(user.getId());
              dto.setName(user.getName());
              dto.setEmail(user.getEmail());
              return dto;
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Best Practices for Using DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use DTOs only for external API communication.</li>
    <li>Keep DTOs lightweight and include only necessary fields.</li>
    <li>Use mapping libraries like MapStruct for automatic conversion.</li>
    <li>Separate DTOs for request and response to maintain flexibility.</li>
  </ul>

  <p style="color: #2c3e50;">
    Using DTOs in controllers enhances maintainability, security, and performance by structuring data transfer efficiently while keeping domain models separate from API layers.
  </p>
</div>
`
},
{
  title:`Cross-Origin (CORS)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Cross-Origin Resource Sharing (CORS) in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to prevent unauthorized
    access to resources from a different domain. By default, web browsers block cross-origin requests for security reasons.
    Spring Boot provides flexible ways to configure CORS policies to allow or restrict access from different domains.
  </p>

  <h3 style="color: #16a085;">Key Features of CORS in Spring Boot:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Configurable CORS policies using <code>@CrossOrigin</code> annotation.</li>
    <li>Global CORS configuration using <code>WebMvcConfigurer</code>.</li>
    <li>Fine-grained control over allowed origins, methods, headers, and credentials.</li>
    <li>Support for preflight requests using HTTP OPTIONS method.</li>
    <li>Integration with security frameworks for enhanced protection.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use CORS?</h3>
  <p style="color: #2c3e50;">
    CORS is essential for enabling communication between different domains, such as allowing frontend applications
    hosted on one domain to interact with APIs hosted on another. Properly configuring CORS helps prevent security
    risks while maintaining cross-origin accessibility.
  </p>

  <h3 style="color: #2980b9;">Example: Enabling CORS with @CrossOrigin</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;
      import java.util.*;

      @RestController
      @RequestMapping("/api")
      @CrossOrigin(origins = "http://example.com")
      public class ApiController {

          @GetMapping("/data")
          public List<String> getData() {
              return Arrays.asList("Item 1", "Item 2", "Item 3");
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    In this example, the <code>@CrossOrigin</code> annotation allows requests from <code>http://example.com</code>.
    You can specify multiple origins, HTTP methods, and headers.
  </p>

  <h3 style="color: #9b59b6;">Example: Global CORS Configuration</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.annotation.*;
      import org.springframework.web.servlet.config.annotation.*;

      @Configuration
      public class CorsConfig implements WebMvcConfigurer {
          @Override
          public void addCorsMappings(CorsRegistry registry) {
              registry.addMapping("/**")
                      .allowedOrigins("http://example.com")
                      .allowedMethods("GET", "POST", "PUT", "DELETE")
                      .allowedHeaders("Content-Type");
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This approach applies CORS settings globally, allowing requests from <code>http://example.com</code>
    with specified methods and headers.
  </p>
</div>
`
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
  title:`Controller Testing`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Controller Testing in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Controller testing in Spring Boot is essential for verifying the behavior of RESTful APIs.
    It ensures that endpoints return the expected responses based on different request inputs.
    Spring Boot provides several ways to test controllers, including unit tests using <code>MockMvc</code>
    and integration tests with a real application context.
  </p>

  <h3 style="color: #16a085;">Key Features of Controller Testing:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Unit testing with <code>MockMvc</code> for isolating controllers.</li>
    <li>Integration testing with the actual application context.</li>
    <li>Verifying response status, headers, and body.</li>
    <li>Mocking dependencies with <code>@MockBean</code>.</li>
    <li>Using <code>@WebMvcTest</code> for focused controller testing.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Test Controllers?</h3>
  <p style="color: #2c3e50;">
    Testing controllers ensures that API endpoints work correctly before deployment.
    It helps catch issues early, improves code reliability, and ensures correct request handling.
  </p>

  <h3 style="color: #2980b9;">Example: Unit Test with MockMvc</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
      import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
      import org.junit.jupiter.api.Test;
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
      import org.springframework.test.web.servlet.MockMvc;

      @WebMvcTest(controllers = ApiController.class)
      public class ApiControllerTest {
          @Autowired
          private MockMvc mockMvc;

          @Test
          public void testGetData() throws Exception {
              mockMvc.perform(get("/api/data"))
                     .andExpect(status().isOk())
                     .andExpect(content().json("[\"Item 1\", \"Item 2\", \"Item 3\"]"));
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example tests a controller method using <code>MockMvc</code>. It verifies the status and expected JSON response.
  </p>

  <h3 style="color: #9b59b6;">Example: Integration Test</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.junit.jupiter.api.Test;
      import org.springframework.boot.test.context.SpringBootTest;
      import org.springframework.boot.test.web.client.TestRestTemplate;
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.http.ResponseEntity;
      import static org.assertj.core.api.Assertions.assertThat;

      @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
      public class ApiControllerIT {
          @Autowired
          private TestRestTemplate restTemplate;

          @Test
          public void testGetData() {
              ResponseEntity<String> response = restTemplate.getForEntity("/api/data", String.class);
              assertThat(response.getStatusCodeValue()).isEqualTo(200);
              assertThat(response.getBody()).contains("Item 1", "Item 2", "Item 3");
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example uses <code>TestRestTemplate</code> for integration testing with a running Spring Boot application.
  </p>
</div>
`
},
{
  title:`MockMvc Testing`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">MockMvc Testing in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    MockMvc is a powerful testing tool in Spring Boot that allows developers to test controllers without
    starting a full HTTP server. It provides a way to simulate HTTP requests and validate responses,
    ensuring that controllers function correctly.
  </p>

  <h3 style="color: #16a085;">Key Features of MockMvc:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Allows testing controllers without a running server.</li>
    <li>Provides fluent API for making requests and asserting responses.</li>
    <li>Supports request validation and content verification.</li>
    <li>Integrates well with JUnit and Spring Boot testing frameworks.</li>
    <li>Facilitates unit testing and behavior-driven development.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use MockMvc?</h3>
  <p style="color: #2c3e50;">
    MockMvc simplifies testing by eliminating the need for an actual HTTP server. It enables developers
    to test endpoints in isolation, reducing complexity and execution time.
  </p>

  <h3 style="color: #2980b9;">Example: Basic MockMvc Test</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
      import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
      import org.junit.jupiter.api.Test;
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
      import org.springframework.test.web.servlet.MockMvc;

      @WebMvcTest(controllers = MyController.class)
      public class MyControllerTest {
          @Autowired
          private MockMvc mockMvc;

          @Test
          public void testHelloEndpoint() throws Exception {
              mockMvc.perform(get("/hello"))
                     .andExpect(status().isOk())
                     .andExpect(content().string("Hello, World!"));
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example tests a simple endpoint using <code>MockMvc</code>. It verifies the response status and body content.
  </p>

  <h3 style="color: #9b59b6;">Example: Mocking Service Layer</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import static org.mockito.Mockito.*;
      import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
      import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
      import org.junit.jupiter.api.Test;
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
      import org.springframework.boot.test.mock.mockito.MockBean;
      import org.springframework.test.web.servlet.MockMvc;

      @WebMvcTest(controllers = MyController.class)
      public class MyControllerMockServiceTest {
          @Autowired
          private MockMvc mockMvc;

          @MockBean
          private MyService myService;

          @Test
          public void testServiceMocking() throws Exception {
              when(myService.getMessage()).thenReturn("Mocked Response");

              mockMvc.perform(get("/message"))
                     .andExpect(status().isOk())
                     .andExpect(content().string("Mocked Response"));
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    This example mocks a service layer dependency using <code>@MockBean</code> to isolate controller behavior.
  </p>
</div>
`
},
{
  title:`Controller Best Practices`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Controller Best Practices in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, controllers handle HTTP requests and define application endpoints. Following best practices
    ensures maintainability, scalability, and efficient performance.
  </p>

  <h3 style="color: #16a085;">Key Best Practices:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <code>@RestController</code> instead of <code>@Controller</code> when working with REST APIs.</li>
    <li>Keep controller methods small and focused on request handling.</li>
    <li>Use <code>@RequestMapping</code> at the class level for consistency.</li>
    <li>Leverage <code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, <code>@DeleteMapping</code>, and <code>@PatchMapping</code> for clarity.</li>
    <li>Use DTOs (Data Transfer Objects) to encapsulate request and response data.</li>
    <li>Implement proper validation using <code>@Valid</code> and <code>@RequestBody</code>.</li>
    <li>Handle exceptions globally using <code>@ControllerAdvice</code>.</li>
    <li>Avoid business logic inside controllers; delegate it to services.</li>
    <li>Use meaningful endpoint naming for clarity (e.g., <code>/api/users</code> instead of <code>/getUsers</code>).</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Well-Structured Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.*;
      import javax.validation.Valid;
      import java.util.List;

      @RestController
      @RequestMapping("/api/users")
      public class UserController {

          private final UserService userService;

          public UserController(UserService userService) {
              this.userService = userService;
          }

          @GetMapping
          public ResponseEntity<List<UserDTO>> getAllUsers() {
              return ResponseEntity.ok(userService.getAllUsers());
          }

          @PostMapping
          public ResponseEntity<UserDTO> createUser(@Valid @RequestBody UserDTO userDTO) {
              return ResponseEntity.ok(userService.createUser(userDTO));
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Example: Global Exception Handling</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpStatus;
      import org.springframework.http.ResponseEntity;
      import org.springframework.web.bind.annotation.*;
      import org.springframework.web.bind.MethodArgumentNotValidException;
      import java.util.HashMap;
      import java.util.Map;

      @ControllerAdvice
      public class GlobalExceptionHandler {

          @ExceptionHandler(MethodArgumentNotValidException.class)
          public ResponseEntity<Map<String, String>> handleValidationExceptions(MethodArgumentNotValidException ex) {
              Map<String, String> errors = new HashMap<>();
              ex.getBindingResult().getFieldErrors().forEach(error ->
                  errors.put(error.getField(), error.getDefaultMessage()));
              return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    By following these best practices, you can create maintainable, scalable, and efficient Spring Boot controllers.
  </p>
</div>
`
},
{
title:`Controller Anti-Patterns`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Controller Anti-Patterns in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    While building Spring Boot applications, avoiding common controller anti-patterns is crucial to maintain clean, efficient, and scalable code. Controllers should be well-structured and free from unnecessary complexity.
  </p>

  <h3 style="color: #16a085;">Common Controller Anti-Patterns</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Fat Controllers:</strong> Placing too much business logic inside controllers instead of delegating it to service layers.</li>
    <li><strong>Improper Exception Handling:</strong> Handling exceptions within controller methods instead of using <code>@ControllerAdvice</code>.</li>
    <li><strong>Using Entity Objects as DTOs:</strong> Exposing database entities directly in APIs instead of using separate DTOs.</li>
    <li><strong>Lack of Validation:</strong> Not validating request data properly, leading to security and data integrity issues.</li>
    <li><strong>Poor Naming Conventions:</strong> Using vague or inconsistent endpoint names that do not follow RESTful conventions.</li>
    <li><strong>Hardcoding Values:</strong> Hardcoding URLs, configurations, or response values instead of externalizing them.</li>
    <li><strong>Ignoring Response Status Codes:</strong> Always returning HTTP 200 status, even for errors, making debugging difficult.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Avoiding a Fat Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/api/users")
      public class UserController {

          private final UserService userService;

          public UserController(UserService userService) {
              this.userService = userService;
          }

          @PostMapping
          public ResponseEntity<UserDTO> createUser(@Valid @RequestBody UserDTO userDTO) {
              UserDTO savedUser = userService.createUser(userDTO);
              return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
          }

          @GetMapping("/{id}")
          public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
              return ResponseEntity.ok(userService.getUserById(id));
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Best Practices to Avoid Anti-Patterns</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keep controllers thin by moving business logic to service layers.</li>
    <li>Use DTOs for request and response objects to separate concerns.</li>
    <li>Implement proper validation using <code>@Valid</code> and <code>@Validated</code>.</li>
    <li>Handle exceptions using <code>@ControllerAdvice</code> and return meaningful error responses.</li>
    <li>Follow RESTful conventions for endpoint naming and response status codes.</li>
  </ul>

  <p style="color: #2c3e50;">
    Avoiding these anti-patterns will ensure better maintainability, performance, and security in your Spring Boot application.
  </p>
</div>
`
},
{
title:`DTO Basics`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO Basics in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) are simple objects used to encapsulate data and transfer it between layers in an application. They help in separating domain models from API contracts, ensuring better maintainability and security.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prevents direct exposure of entity objects.</li>
    <li>Improves API security by limiting exposed data fields.</li>
    <li>Allows transformation and validation of data before processing.</li>
    <li>Facilitates API versioning and backward compatibility.</li>
    <li>Enhances separation of concerns between persistence and presentation layers.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Implementing a DTO</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserDTO {
          private Long id;
          private String name;
          private String email;

          public UserDTO() {}

          public UserDTO(Long id, String name, String email) {
              this.id = id;
              this.name = name;
              this.email = email;
          }

          public Long getId() {
              return id;
          }

          public void setId(Long id) {
              this.id = id;
          }

          public String getName() {
              return name;
          }

          public void setName(String name) {
              this.name = name;
          }

          public String getEmail() {
              return email;
          }

          public void setEmail(String email) {
              this.email = email;
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Mapping DTOs with Entity Objects</h3>
  <p style="color: #2c3e50;">
    DTOs are typically mapped to entity objects using tools like <code>ModelMapper</code> or manual conversion methods. Example using ModelMapper:
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      ModelMapper modelMapper = new ModelMapper();
      UserDTO userDTO = modelMapper.map(userEntity, UserDTO.class);
    </code>
  </pre>

  <h3 style="color: #3498db;">Best Practices for Using DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use DTOs only for API requests and responses.</li>
    <li>Keep DTOs lightweight by including only necessary fields.</li>
    <li>Validate DTOs using annotations like <code>@Valid</code> and <code>@NotNull</code>.</li>
    <li>Convert between DTOs and entities in the service layer, not in controllers.</li>
  </ul>

  <p style="color: #2c3e50;">
    Implementing DTOs correctly enhances application security, maintainability, and scalability.
  </p>
</div>
`
},
{
  title:`DTO vs Entity`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO vs Entity in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot applications, Data Transfer Objects (DTOs) and Entities serve different purposes. While entities represent database objects and are managed by JPA, DTOs act as data carriers between layers, improving performance and security.
  </p>

  <h3 style="color: #16a085;">Key Differences Between DTO and Entity</h3>
  <table style="width: 100%; border-collapse: collapse;">
    <tr style="background: #16a085; color: white;">
      <th style="padding: 10px; border: 1px solid #ddd;">Aspect</th>
      <th style="padding: 10px; border: 1px solid #ddd;">DTO</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Entity</th>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Purpose</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Transfers data between layers</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Represents database table</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Persistence</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Not managed by JPA</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Managed by JPA and Hibernate</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Fields</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Contains only necessary fields</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Maps to all table columns</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Usage</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Used in API responses and requests</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Used for database operations</td>
    </tr>
  </table>

  <h3 style="color: #e67e22;">Example: Entity vs DTO</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
          // Getters and Setters
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The entity is mapped directly to a database table and is managed by JPA.</p>

  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserDTO {
          private String name;
          private String email;
          // Getters and Setters
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The DTO contains only relevant fields for API responses.</p>

  <h3 style="color: #3498db;">Best Practices for Using DTOs and Entities</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keep entities only in the persistence layer.</li>
    <li>Use DTOs to expose minimal necessary data in API responses.</li>
    <li>Convert between DTOs and entities in the service layer, not in controllers.</li>
    <li>Leverage tools like <code>ModelMapper</code> or <code>MapStruct</code> for conversion.</li>
  </ul>

  <p style="color: #2c3e50;">
    Understanding the distinction between DTOs and Entities ensures a clean architecture and enhances security by preventing direct entity exposure.
  </p>
</div>
`
},
{
  title:`DTO in MVC`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in MVC Architecture</h2>
  <p style="font-size: 16px; color: #34495e;">
    In a Spring Boot MVC (Model-View-Controller) architecture, a Data Transfer Object (DTO) plays a crucial role in handling data flow between different layers. DTOs help decouple the domain model from the API layer, enhancing security, performance, and maintainability.
  </p>

  <h3 style="color: #16a085;">Why Use DTO in MVC?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prevents direct exposure of entity classes in API responses.</li>
    <li>Improves performance by reducing unnecessary data transfer.</li>
    <li>Enhances security by hiding sensitive database fields.</li>
    <li>Keeps domain models focused on database operations.</li>
    <li>Facilitates API versioning and transformation of data.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using DTO in a Spring MVC Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserDTO {
          private String name;
          private String email;
          // Getters and Setters
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The DTO is a simple Java class that contains only the necessary fields.</p>

  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/users")
      public class UserController {
          private final UserService userService;

          public UserController(UserService userService) {
              this.userService = userService;
          }

          @GetMapping("/{id}")
          public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
              UserDTO userDTO = userService.getUserById(id);
              return ResponseEntity.ok(userDTO);
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The controller only interacts with the DTO instead of directly using entity objects.</p>

  <h3 style="color: #3498db;">Best Practices for DTO in MVC</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keep DTOs lightweight with only necessary fields.</li>
    <li>Use a service layer for converting entities to DTOs and vice versa.</li>
    <li>Leverage tools like <code>ModelMapper</code> or <code>MapStruct</code> for automated mapping.</li>
    <li>Ensure DTOs are immutable where possible.</li>
    <li>Follow REST API best practices when designing DTOs.</li>
  </ul>

  <p style="color: #2c3e50;">
    Using DTOs in MVC helps in structuring a clean, scalable, and maintainable application by ensuring a clear separation of concerns between the controller, service, and persistence layers.
  </p>
</div>
`
},
{
  title:`DTO in Spring Boot`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In a Spring Boot application, a Data Transfer Object (DTO) is used to transfer data between different layers of the application. DTOs help in structuring APIs, improving performance, and maintaining a clean separation of concerns.
  </p>

  <h3 style="color: #16a085;">Why Use DTO in Spring Boot?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Encapsulates only required data, avoiding unnecessary exposure of entities.</li>
    <li>Improves security by restricting sensitive data in API responses.</li>
    <li>Enhances performance by reducing the size of data transferred.</li>
    <li>Facilitates API versioning by modifying DTOs without changing entity models.</li>
    <li>Maintains separation of concerns between persistence and API layers.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Implementing DTO in Spring Boot</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserDTO {
          private String name;
          private String email;
          // Constructors, Getters, and Setters
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The DTO class contains only necessary fields without exposing the full entity.</p>

  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/users")
      public class UserController {
          private final UserService userService;

          public UserController(UserService userService) {
              this.userService = userService;
          }

          @GetMapping("/{id}")
          public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
              UserDTO userDTO = userService.getUserById(id);
              return ResponseEntity.ok(userDTO);
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The controller uses the DTO to send only necessary data to the client.</p>

  <h3 style="color: #3498db;">Best Practices for Using DTO in Spring Boot</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use DTOs only for API communication, not for persistence.</li>
    <li>Keep DTOs lightweight and focus on necessary fields.</li>
    <li>Use a service layer to handle conversions between DTOs and entities.</li>
    <li>Automate DTO mapping using <code>ModelMapper</code> or <code>MapStruct</code>.</li>
    <li>Ensure immutability of DTOs where possible.</li>
  </ul>

  <p style="color: #2c3e50;">
    Using DTOs in Spring Boot ensures a well-structured, secure, and maintainable application, enhancing both API efficiency and data protection.
  </p>
</div>
`
},
{
title:`Lombok with DTO`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Lombok with DTO</h2>
  <p style="font-size: 16px; color: #34495e;">
    Lombok is a Java library that helps reduce boilerplate code by automatically generating getter, setter, constructor, and other methods. When used with Data Transfer Objects (DTOs) in Spring Boot, Lombok simplifies the development process and improves code readability.
  </p>

  <h3 style="color: #16a085;">Why Use Lombok with DTO?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Reduces boilerplate code by eliminating manual getters, setters, and constructors.</li>
    <li>Enhances code readability and maintainability.</li>
    <li>Improves development efficiency by reducing repetitive tasks.</li>
    <li>Works seamlessly with Spring Boot applications.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using Lombok in a DTO</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import lombok.AllArgsConstructor;
      import lombok.Data;
      import lombok.NoArgsConstructor;

      @Data
      @NoArgsConstructor
      @AllArgsConstructor
      public class UserDTO {
          private String name;
          private String email;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">With Lombok annotations, getters, setters, and constructors are automatically generated.</p>

  <h3 style="color: #3498db;">Integrating DTO with a Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/users")
      public class UserController {
          private final UserService userService;

          public UserController(UserService userService) {
              this.userService = userService;
          }

          @GetMapping("/{id}")
          public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
              UserDTO userDTO = userService.getUserById(id);
              return ResponseEntity.ok(userDTO);
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The controller efficiently returns DTOs, ensuring only necessary data is exposed.</p>

  <h3 style="color: #e74c3c;">Best Practices for Using Lombok with DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <code>@Data</code> for automatic generation of getters, setters, and toString.</li>
    <li>Use <code>@NoArgsConstructor</code> and <code>@AllArgsConstructor</code> for constructor generation.</li>
    <li>Ensure DTOs remain lightweight and only contain necessary fields.</li>
    <li>Keep DTOs separate from entity classes to maintain clean architecture.</li>
    <li>Consider using <code>@Builder</code> for better object creation flexibility.</li>
  </ul>

  <p style="color: #2c3e50;">
    By integrating Lombok with DTOs, Spring Boot applications become more efficient, reducing boilerplate code and improving maintainability.
  </p>
</div>
`
},
{
  title:`Mapping DTOs`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Mapping DTOs</h2>
  <p style="font-size: 16px; color: #34495e;">
    Mapping Data Transfer Objects (DTOs) is essential for separating business logic from data representation. In Spring Boot, DTOs help ensure that only relevant data is exposed in APIs, improving security and maintainability.
  </p>

  <h3 style="color: #16a085;">Why Map DTOs?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Decouples domain models from API responses.</li>
    <li>Improves security by exposing only required fields.</li>
    <li>Enhances maintainability and reusability.</li>
    <li>Facilitates easier data transformation and validation.</li>
  </ul>

  <h3 style="color: #e67e22;">Methods for Mapping DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Manual Mapping (explicit setters/getters).</li>
    <li>Using ModelMapper library.</li>
    <li>Using MapStruct for compile-time mapping.</li>
  </ul>

  <h3 style="color: #3498db;">Example: Manual DTO Mapping</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserMapper {
          public static UserDTO toDTO(User user) {
              UserDTO dto = new UserDTO();
              dto.setName(user.getName());
              dto.setEmail(user.getEmail());
              return dto;
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Example: Mapping DTOs with ModelMapper</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      ModelMapper modelMapper = new ModelMapper();
      UserDTO userDTO = modelMapper.map(user, UserDTO.class);
    </code>
  </pre>
  <p style="color: #2c3e50;">ModelMapper automates the conversion process with minimal configuration.</p>

  <h3 style="color: #e74c3c;">Example: Using MapStruct</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Mapper
      public interface UserMapper {
          UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);
          UserDTO userToUserDTO(User user);
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">MapStruct provides a powerful and efficient compile-time mapping mechanism.</p>

  <h3 style="color: #e74c3c;">Best Practices for Mapping DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keep DTOs lightweight and focused on specific use cases.</li>
    <li>Use libraries like ModelMapper or MapStruct for consistency.</li>
    <li>Ensure mappings are properly tested.</li>
    <li>Avoid overuse of DTOs that duplicate entity structures.</li>
  </ul>

  <p style="color: #2c3e50;">
    Mapping DTOs properly improves the structure and security of Spring Boot applications. Choosing the right approach depends on project needs and complexity.
  </p>
</div>
`
},
{
  title:`ModelMapper`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">ModelMapper in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    ModelMapper is a powerful Java library used for object mapping, simplifying the conversion between DTOs and entities. It provides an intuitive API to eliminate manual mapping code and improves code maintainability.
  </p>

  <h3 style="color: #16a085;">Why Use ModelMapper?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Reduces boilerplate mapping code.</li>
    <li>Improves code readability and maintainability.</li>
    <li>Automatically maps object properties based on matching names.</li>
    <li>Supports complex object mapping and custom configurations.</li>
  </ul>

  <h3 style="color: #e67e22;">Adding ModelMapper to a Spring Boot Project</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.modelmapper&lt;/groupId&gt;
          &lt;artifactId&gt;modelmapper&lt;/artifactId&gt;
          &lt;version&gt;2.4.4&lt;/version&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h3 style="color: #3498db;">Configuring ModelMapper in Spring Boot</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Configuration
      public class ModelMapperConfig {
          @Bean
          public ModelMapper modelMapper() {
              return new ModelMapper();
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">This configuration registers ModelMapper as a Spring bean, making it available for dependency injection.</p>

  <h3 style="color: #e74c3c;">Example: Mapping DTOs with ModelMapper</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      public class UserController {
          @Autowired
          private ModelMapper modelMapper;

          @GetMapping("/user")
          public UserDTO getUser() {
              User user = new User("John Doe", "john@example.com");
              return modelMapper.map(user, UserDTO.class);
          }
      }
    </code>
  </pre>

  <h3 style="color: #e74c3c;">Best Practices for Using ModelMapper</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use ModelMapper for simple and automated mapping.</li>
    <li>Customize mappings when needed using property mappings.</li>
    <li>Optimize performance by configuring lazy loading for deep object graphs.</li>
    <li>Test mappings to ensure data integrity.</li>
  </ul>

  <p style="color: #2c3e50;">
    ModelMapper simplifies the conversion between DTOs and entities, making data transformation more efficient in Spring Boot applications.
  </p>
</div>
`
},
{
  title:`MapStruct`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">MapStruct in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    MapStruct is a Java annotation-based code generator that simplifies the mapping between Java objects, particularly DTOs and entities. It provides a type-safe and efficient way to perform object transformations without requiring reflection.
  </p>

  <h3 style="color: #16a085;">Why Use MapStruct?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Generates mapping code at compile time, ensuring high performance.</li>
    <li>Eliminates manual mapping code, reducing boilerplate.</li>
    <li>Provides strong type safety, catching errors at compile time.</li>
    <li>Supports complex object mappings with minimal configuration.</li>
  </ul>

  <h3 style="color: #e67e22;">Adding MapStruct to a Spring Boot Project</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.mapstruct&lt;/groupId&gt;
          &lt;artifactId&gt;mapstruct&lt;/artifactId&gt;
          &lt;version&gt;1.5.5.Final&lt;/version&gt;
      &lt;/dependency&gt;
      &lt;dependency&gt;
          &lt;groupId&gt;org.mapstruct&lt;/groupId&gt;
          &lt;artifactId&gt;mapstruct-processor&lt;/artifactId&gt;
          &lt;version&gt;1.5.5.Final&lt;/version&gt;
          &lt;scope&gt;provided&lt;/scope&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h3 style="color: #3498db;">Creating a MapStruct Mapper</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.mapstruct.Mapper;
      import org.mapstruct.Mapping;
      import org.mapstruct.factory.Mappers;

      @Mapper
      public interface UserMapper {
          UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

          @Mapping(source = "email", target = "contactEmail")
          UserDTO userToUserDTO(User user);
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The above code defines a MapStruct mapper that converts a User entity to a UserDTO.</p>

  <h3 style="color: #e74c3c;">Using MapStruct in a Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      public class UserController {
          @GetMapping("/user")
          public UserDTO getUser() {
              User user = new User("John Doe", "john@example.com");
              return UserMapper.INSTANCE.userToUserDTO(user);
          }
      }
    </code>
  </pre>

  <h3 style="color: #e74c3c;">Best Practices for Using MapStruct</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use MapStruct for high-performance, compile-time object mapping.</li>
    <li>Define mapping rules explicitly using annotations for clarity.</li>
    <li>Ensure that the processor dependency is added to generate mapping code.</li>
    <li>Test mappings thoroughly to verify correct data transformation.</li>
  </ul>

  <p style="color: #2c3e50;">
    MapStruct provides an efficient and type-safe approach to object mapping in Spring Boot applications, significantly improving development speed and code maintainability.
  </p>
</div>
`
},
{
  title:`Jackson and DTO`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Jackson and DTO in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Jackson is a widely used Java library for handling JSON data. In Spring Boot applications, it is commonly used to serialize and deserialize Data Transfer Objects (DTOs) when exchanging data between the client and the server.
  </p>

  <h3 style="color: #16a085;">Why Use Jackson with DTOs?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Simplifies JSON serialization and deserialization.</li>
    <li>Reduces boilerplate code using annotations.</li>
    <li>Supports custom configurations for handling JSON properties.</li>
    <li>Ensures structured and readable JSON responses.</li>
  </ul>

  <h3 style="color: #e67e22;">Adding Jackson to a Spring Boot Project</h3>
  <p style="color: #2c3e50;">Spring Boot includes Jackson by default, but you can explicitly add it to your project using the following dependency:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;com.fasterxml.jackson.core&lt;/groupId&gt;
          &lt;artifactId&gt;jackson-databind&lt;/artifactId&gt;
          &lt;version&gt;2.15.0&lt;/version&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h3 style="color: #3498db;">Defining a DTO with Jackson Annotations</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import com.fasterxml.jackson.annotation.JsonProperty;

      public class UserDTO {
          @JsonProperty("user_name")
          private String name;

          @JsonProperty("user_email")
          private String email;

          // Constructors, Getters, and Setters
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">Here, the <code>@JsonProperty</code> annotation customizes the JSON field names.</p>

  <h3 style="color: #e74c3c;">Using Jackson in a Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      public class UserController {
          @PostMapping("/user")
          public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
              return ResponseEntity.ok(userDTO);
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">This example demonstrates how Jackson automatically converts JSON to a Java object using <code>@RequestBody</code>.</p>

  <h3 style="color: #e74c3c;">Best Practices for Using Jackson with DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <code>@JsonProperty</code> to customize JSON field names.</li>
    <li>Apply <code>@JsonIgnore</code> to exclude sensitive fields.</li>
    <li>Use <code>@JsonFormat</code> for date/time formatting.</li>
    <li>Ensure DTOs have proper getters and setters for serialization.</li>
  </ul>

  <p style="color: #2c3e50;">
    Jackson simplifies data exchange in Spring Boot applications by automating JSON serialization and deserialization of DTOs. Using its annotations, developers can control JSON structure efficiently.
  </p>
</div>
`
},
{
  title:`Serialization`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Serialization in Java</h2>
  <p style="font-size: 16px; color: #34495e;">
    Serialization is the process of converting a Java object into a byte stream so that it can be easily stored or transmitted. It is used to persist data, send objects over a network, and perform deep copies of objects.
  </p>

  <h3 style="color: #16a085;">Why Use Serialization?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Allows object persistence by saving objects to files or databases.</li>
    <li>Facilitates communication by sending objects over a network.</li>
    <li>Supports deep cloning of objects.</li>
    <li>Helps in caching complex objects.</li>
  </ul>

  <h3 style="color: #e67e22;">How to Implement Serialization in Java</h3>
  <p style="color: #2c3e50;">To make a class serializable, it must implement the <code>Serializable</code> interface:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import java.io.Serializable;

      public class Person implements Serializable {
          private static final long serialVersionUID = 1L;
          private String name;
          private int age;
          
          // Constructors, Getters, and Setters
      }
    </code>
  </pre>

  <h3 style="color: #3498db;">Saving and Retrieving Serialized Objects</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import java.io.*;

      public class SerializationDemo {
          public static void main(String[] args) throws IOException, ClassNotFoundException {
              Person person = new Person("John Doe", 30);
              
              // Serialize object
              FileOutputStream fileOut = new FileOutputStream("person.ser");
              ObjectOutputStream out = new ObjectOutputStream(fileOut);
              out.writeObject(person);
              out.close();
              fileOut.close();
              
              // Deserialize object
              FileInputStream fileIn = new FileInputStream("person.ser");
              ObjectInputStream in = new ObjectInputStream(fileIn);
              Person deserializedPerson = (Person) in.readObject();
              in.close();
              fileIn.close();
              
              System.out.println("Deserialized Person: " + deserializedPerson.getName());
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">The above code demonstrates how to serialize and deserialize an object in Java.</p>

  <h3 style="color: #e74c3c;">Best Practices for Serialization</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Always define <code>serialVersionUID</code> to maintain version control.</li>
    <li>Use <code>transient</code> keyword for sensitive data that should not be serialized.</li>
    <li>Consider using <code>Externalizable</code> for custom serialization logic.</li>
    <li>Avoid serializing large objects to improve performance.</li>
  </ul>

  <p style="color: #2c3e50;">
    Serialization is a powerful feature in Java that enables object persistence and data exchange. By following best practices, developers can ensure efficient and secure serialization in their applications.
  </p>
</div>
`
},
{
  title:`Deserialization`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Deserialization in Java</h2>
  <p style="font-size: 16px; color: #34495e;">
    Deserialization is the process of converting a byte stream back into a Java object. It allows restoring previously serialized objects, making it useful for data storage, network communication, and caching mechanisms.
  </p>

  <h3 style="color: #16a085;">Why Use Deserialization?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Restores object states from a file or database.</li>
    <li>Facilitates data transfer between applications.</li>
    <li>Supports distributed computing by enabling object sharing.</li>
    <li>Enhances performance in caching mechanisms.</li>
  </ul>

  <h3 style="color: #e67e22;">How to Implement Deserialization in Java</h3>
  <p style="color: #2c3e50;">To deserialize an object, read it from a file using <code>ObjectInputStream</code>:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import java.io.*;

      public class DeserializationDemo {
          public static void main(String[] args) throws IOException, ClassNotFoundException {
              FileInputStream fileIn = new FileInputStream("person.ser");
              ObjectInputStream in = new ObjectInputStream(fileIn);
              Person deserializedPerson = (Person) in.readObject();
              in.close();
              fileIn.close();
              
              System.out.println("Deserialized Person: " + deserializedPerson.getName());
          }
      }
    </code>
  </pre>

  <h3 style="color: #3498db;">Handling Deserialization Issues</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>ClassNotFoundException:</strong> Ensure the class definition is available during deserialization.</li>
    <li><strong>InvalidClassException:</strong> Maintain a consistent <code>serialVersionUID</code> to prevent incompatibility issues.</li>
    <li><strong>EOFException:</strong> Verify that the file or stream contains valid serialized data.</li>
    <li><strong>Security Concerns:</strong> Avoid deserializing untrusted data to prevent exploits.</li>
  </ul>

  <h3 style="color: #e74c3c;">Best Practices for Deserialization</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Always define a <code>serialVersionUID</code> to handle version changes.</li>
    <li>Use <code>transient</code> for sensitive data that should not be deserialized.</li>
    <li>Implement <code>readObject</code> method for custom validation and security.</li>
    <li>Prefer JSON or XML serialization for safer data handling in distributed applications.</li>
  </ul>

  <p style="color: #2c3e50;">
    Deserialization is a crucial aspect of Java programming, enabling object restoration and data exchange. However, careful implementation is necessary to ensure security and maintain application integrity.
  </p>
</div>
`
},
{
  title:`Nested DTOs`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Nested DTOs in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Nested Data Transfer Objects (DTOs) are a design pattern used to represent complex data structures in a hierarchical manner. In Spring Boot, nested DTOs are particularly useful when dealing with APIs that require sending or receiving data with multiple levels of relationships, such as a user with an address, an order with items, or a department with employees. By using nested DTOs, you can encapsulate related data into a single object, making your API contracts cleaner and more intuitive.
  </p>

  <h3 style="color: #16a085;">Why Use Nested DTOs?</h3>
  <p style="color: #2c3e50;">
    Nested DTOs offer several benefits:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Structured Data</strong>: Represent complex data relationships in a clear and organized way.</li>
    <li><strong>Improved Readability</strong>: Make API contracts easier to understand by grouping related fields.</li>
    <li><strong>Reusability</strong>: Reuse nested DTOs across multiple endpoints or services.</li>
    <li><strong>Validation</strong>: Apply validation rules to nested objects for better data integrity.</li>
    <li><strong>Separation of Concerns</strong>: Keep the API layer decoupled from the internal data model.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Nested DTOs</h3>
  <p style="color: #2c3e50;">
    When working with nested DTOs in Spring Boot, it is important to understand the following concepts:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Composition</strong>: Nesting one DTO inside another to represent relationships (e.g., a user with an address).</li>
    <li><strong>Validation</strong>: Applying validation annotations to nested objects to ensure data integrity.</li>
    <li><strong>Serialization</strong>: Converting nested DTOs to and from JSON or other formats using libraries like Jackson.</li>
    <li><strong>Mapping</strong>: Mapping nested DTOs to entities and vice versa using tools like <code>ModelMapper</code> or manual mapping.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Implementing Nested DTOs in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to implement nested DTOs in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Define Nested DTOs</h4>
  <p style="color: #2c3e50;">
    Create a parent DTO and a nested DTO to represent a user with an address.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.validation.constraints.NotBlank;
      import jakarta.validation.constraints.NotNull;

      public class UserDTO {
          private Long id;

          @NotBlank(message = "Name is required")
          private String name;

          @NotBlank(message = "Email is required")
          private String email;

          @NotNull(message = "Address is required")
          private AddressDTO address;

          // Getters and Setters
      }

      public class AddressDTO {
          @NotBlank(message = "Street is required")
          private String street;

          @NotBlank(message = "City is required")
          private String city;

          @NotBlank(message = "State is required")
          private String state;

          @NotBlank(message = "Zip code is required")
          private String zipCode;

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Use Nested DTOs in a Controller</h4>
  <p style="color: #2c3e50;">
    Use the nested DTOs in a controller to handle incoming and outgoing data.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/api")
      public class UserController {

          @PostMapping("/user")
          public String createUser(@RequestBody UserDTO userDTO) {
              System.out.println("User created: " + userDTO.getName());
              System.out.println("Address: " + userDTO.getAddress().getCity());
              return "User created successfully";
          }

          @GetMapping("/user")
          public UserDTO getUser() {
              AddressDTO address = new AddressDTO("123 Main St", "Springfield", "IL", "62701");
              return new UserDTO(1L, "John Doe", "john.doe@example.com", address);
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Map Nested DTOs to Entities</h4>
  <p style="color: #2c3e50;">
    Use a mapping library like <code>ModelMapper</code> to convert between nested DTOs and entities.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.modelmapper.ModelMapper;
      import org.springframework.stereotype.Service;

      @Service
      public class UserService {

          private final ModelMapper modelMapper = new ModelMapper();

          public UserDTO createUser(UserDTO userDTO) {
              // Map DTO to entity
              User user = modelMapper.map(userDTO, User.class);
              // Save entity to database
              User savedUser = userRepository.save(user);
              // Map entity back to DTO
              return modelMapper.map(savedUser, UserDTO.class);
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Nested DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keep nested DTOs focused and avoid excessive nesting to prevent complexity.</li>
    <li>Use validation annotations to ensure data integrity at all levels.</li>
    <li>Leverage mapping libraries to simplify conversions between DTOs and entities.</li>
    <li>Document your API contracts clearly to help consumers understand the structure of nested DTOs.</li>
    <li>Avoid exposing sensitive information in nested DTOs.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Nested DTOs are a powerful tool for representing complex data structures in Spring Boot applications. By encapsulating related data into a single object, you can create cleaner, more intuitive APIs that are easier to maintain and extend. Whether you're building RESTful APIs or integrating with external systems, nested DTOs provide a flexible and efficient way to manage hierarchical data.
  </p>
</div>`
},
{
  title:`DTO Validation`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to DTO Validation in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) are commonly used in Spring Boot applications to encapsulate data sent between the client and server. Validating DTOs ensures that the data received by your application meets specific criteria, such as required fields, correct formats, and business rules. Spring Boot provides robust support for DTO validation through the <strong>Bean Validation API (JSR 380)</strong>, which allows you to define validation rules using annotations and handle validation errors gracefully.
  </p>

  <h3 style="color: #16a085;">Why is DTO Validation Important?</h3>
  <p style="color: #2c3e50;">
    DTO validation is essential for several reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Data Integrity</strong>: Ensures that the data conforms to expected formats and constraints.</li>
    <li><strong>Security</strong>: Prevents injection attacks and other malicious inputs.</li>
    <li><strong>User Experience</strong>: Provides meaningful error messages to users when input is invalid.</li>
    <li><strong>Business Logic</strong>: Ensures that only valid data is processed by the application, reducing the risk of runtime errors.</li>
    <li><strong>API Consistency</strong>: Maintains consistent data standards across your application.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of DTO Validation</h3>
  <p style="color: #2c3e50;">
    Spring Boot leverages the Bean Validation API (JSR 380) to perform DTO validation. Key concepts include:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Validation Annotations</strong>: Annotations like <code>@NotNull</code>, <code>@Size</code>, <code>@Email</code>, and <code>@Pattern</code> are used to define validation rules.</li>
    <li><strong>Validation Groups</strong>: Allows you to apply different validation rules for different scenarios (e.g., create vs. update).</li>
    <li><strong>Custom Validators</strong>: Enables you to create custom validation logic for complex use cases.</li>
    <li><strong>Error Handling</strong>: Spring Boot provides mechanisms to handle validation errors and return meaningful responses to clients.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Implementing DTO Validation in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to implement DTO validation in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Define a DTO with Validation Annotations</h4>
  <p style="color: #2c3e50;">
    Create a DTO with validation annotations to enforce constraints on the data.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.validation.constraints.*;

      public class UserDTO {

          @NotNull(message = "ID is required")
          private Long id;

          @NotBlank(message = "Name is required")
          @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
          private String name;

          @Email(message = "Invalid email format")
          @NotBlank(message = "Email is required")
          private String email;

          @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$", 
                   message = "Password must be at least 8 characters and contain at least one letter and one number")
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
    DTO validation is a fundamental aspect of building secure and reliable Spring Boot applications. By leveraging the Bean Validation API and Spring's validation support, you can ensure that your application processes only valid and safe data. Whether you're using built-in annotations or custom validators, proper validation practices will enhance the quality and security of your application.
  </p>
</div>`
},
{
  title:`Custom Validators`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Custom Validators in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Custom validators in Spring Boot allow developers to implement their own validation logic beyond the standard constraints like <code>@NotNull</code> and <code>@Size</code>. These validators help ensure data integrity and enforce business rules in applications.
  </p>

  <h3 style="color: #16a085;">Why Use Custom Validators?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Handles complex validation scenarios.</li>
    <li>Encapsulates business logic within reusable components.</li>
    <li>Improves code readability and maintainability.</li>
    <li>Ensures consistency in data validation across the application.</li>
  </ul>

  <h3 style="color: #e67e22;">Creating a Custom Validator in Spring Boot</h3>
  <p style="color: #2c3e50;">A custom validator requires two main components: an annotation and a validation class.</p>

  <h4 style="color: #2980b9;">Step 1: Define a Custom Annotation</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.validation.Constraint;
      import javax.validation.Payload;
      import java.lang.annotation.ElementType;
      import java.lang.annotation.Retention;
      import java.lang.annotation.RetentionPolicy;
      import java.lang.annotation.Target;

      @Target({ElementType.FIELD})
      @Retention(RetentionPolicy.RUNTIME)
      @Constraint(validatedBy = AgeValidator.class)
      public @interface ValidAge {
          String message() default "Age must be between 18 and 60";
          Class<?>[] groups() default {};
          Class<? extends Payload>[] payload() default {};
      }
    </code>
  </pre>

  <h4 style="color: #2980b9;">Step 2: Implement the Validator</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.validation.ConstraintValidator;
      import javax.validation.ConstraintValidatorContext;

      public class AgeValidator implements ConstraintValidator<ValidAge, Integer> {
          @Override
          public void initialize(ValidAge constraintAnnotation) {}
          
          @Override
          public boolean isValid(Integer age, ConstraintValidatorContext context) {
              return age != null && age >= 18 && age <= 60;
          }
      }
    </code>
  </pre>

  <h4 style="color: #2980b9;">Step 3: Apply the Validator</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.validation.Valid;
      import javax.validation.constraints.NotNull;

      public class User {
          @NotNull
          private String name;
          
          @ValidAge
          private Integer age;
          
          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #3498db;">Validating Custom Constraints in a Controller</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.validation.annotation.Validated;
      import org.springframework.web.bind.annotation.*;
      import javax.validation.Valid;

      @RestController
      @RequestMapping("/users")
      @Validated
      public class UserController {
          @PostMapping("/create")
          public String createUser(@Valid @RequestBody User user) {
              return "User created successfully!";
          }
      }
    </code>
  </pre>

  <h3 style="color: #e74c3c;">Best Practices for Custom Validators</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keep validation logic simple and reusable.</li>
    <li>Use meaningful error messages for better debugging.</li>
    <li>Combine multiple validators for complex scenarios.</li>
    <li>Test validators thoroughly to ensure correctness.</li>
  </ul>

  <p style="color: #2c3e50;">
    Custom validators in Spring Boot provide a robust way to enforce business rules and ensure data consistency. By implementing custom annotations and validation logic, developers can create more reliable and maintainable applications.
  </p>
</div>
`
},
{
  title:`DTO in REST APIs`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in REST APIs</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) play a crucial role in REST APIs by ensuring a structured and efficient way to exchange data 
    between clients and servers. They help decouple the internal domain models from the API's response/request structure, 
    improving maintainability and security.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs in REST APIs?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Encapsulation of data to prevent exposing internal domain models.</li>
    <li>Flexibility in modifying API responses without affecting internal logic.</li>
    <li>Better control over serialization and deserialization.</li>
    <li>Improved security by preventing over-posting vulnerabilities.</li>
    <li>Facilitates API versioning by structuring data independently.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using DTO in a Spring Boot REST API</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class UserDTO {
          private String name;
          private String email;
          
          public UserDTO(String name, String email) {
              this.name = name;
              this.email = email;
          }

          public String getName() { return name; }
          public void setName(String name) { this.name = name; }

          public String getEmail() { return email; }
          public void setEmail(String email) { this.email = email; }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Mapping Entity to DTO</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/users")
      public class UserController {
          private final UserService userService;

          public UserController(UserService userService) {
              this.userService = userService;
          }

          @GetMapping("/{id}")
          public ResponseEntity<UserDTO> getUser(@PathVariable Long id) {
              User user = userService.findUserById(id);
              UserDTO userDTO = new UserDTO(user.getName(), user.getEmail());
              return ResponseEntity.ok(userDTO);
          }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Best Practices for Using DTOs in REST APIs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use DTOs for both request and response payloads.</li>
    <li>Leverage libraries like ModelMapper or MapStruct for automatic mapping.</li>
    <li>Keep DTOs lightweight and avoid adding business logic.</li>
    <li>Use separate DTOs for different use cases (e.g., UserResponseDTO, UserRequestDTO).</li>
    <li>Ensure proper validation on DTO fields using annotations like <code>@Valid</code>.</li>
  </ul>
</div>
`
},
{
title:`DTO in Microservices`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in Microservices</h2>
  <p style="font-size: 16px; color: #34495e;">
    In a microservices architecture, Data Transfer Objects (DTOs) help streamline communication between services
    by structuring data efficiently and reducing unnecessary exposure of internal domain models.
    DTOs enhance security, maintainability, and consistency across different microservices.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs in Microservices?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prevents direct exposure of database entities.</li>
    <li>Ensures a consistent data format across microservices.</li>
    <li>Reduces coupling between services by defining a clear contract.</li>
    <li>Improves security by preventing over-fetching and under-fetching of data.</li>
    <li>Enables easy versioning of APIs.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using DTOs in a Microservice</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class OrderDTO {
          private Long id;
          private String productName;
          private int quantity;
          
          public OrderDTO(Long id, String productName, int quantity) {
              this.id = id;
              this.productName = productName;
              this.quantity = quantity;
          }

          public Long getId() { return id; }
          public void setId(Long id) { this.id = id; }

          public String getProductName() { return productName; }
          public void setProductName(String productName) { this.productName = productName; }

          public int getQuantity() { return quantity; }
          public void setQuantity(int quantity) { this.quantity = quantity; }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Mapping DTOs Between Microservices</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @RestController
      @RequestMapping("/orders")
      public class OrderController {
          private final OrderService orderService;

          public OrderController(OrderService orderService) {
              this.orderService = orderService;
          }

          @GetMapping("/{id}")
          public ResponseEntity<OrderDTO> getOrder(@PathVariable Long id) {
              Order order = orderService.findOrderById(id);
              OrderDTO orderDTO = new OrderDTO(order.getId(), order.getProductName(), order.getQuantity());
              return ResponseEntity.ok(orderDTO);
          }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Best Practices for DTOs in Microservices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use DTOs for both request and response payloads.</li>
    <li>Leverage libraries like ModelMapper or MapStruct for automatic mapping.</li>
    <li>Ensure DTOs are versioned properly to avoid breaking changes.</li>
    <li>Keep DTOs minimal and avoid adding unnecessary data fields.</li>
    <li>Utilize DTOs to maintain API contracts between microservices.</li>
  </ul>
</div>
`
},
{
  title:`DTO in GraphQL`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in GraphQL</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) play a crucial role in GraphQL by structuring the data exchanged between
    clients and the server. Unlike REST, GraphQL enables clients to request specific fields, making DTOs
    essential for optimizing data transfer and maintaining a clear schema.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs in GraphQL?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prevents over-fetching and under-fetching of data.</li>
    <li>Improves API response performance by limiting returned fields.</li>
    <li>Encapsulates business logic and ensures API consistency.</li>
    <li>Provides a structured contract for GraphQL queries and mutations.</li>
    <li>Enhances security by restricting exposed fields.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using DTOs in GraphQL</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Data
      public class UserDTO {
          private Long id;
          private String username;
          private String email;
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Implementing DTOs in a GraphQL Query</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Component
      public class UserGraphQLResolver implements GraphQLQueryResolver {
          private final UserService userService;

          public UserGraphQLResolver(UserService userService) {
              this.userService = userService;
          }

          public UserDTO getUser(Long id) {
              User user = userService.findById(id);
              return new UserDTO(user.getId(), user.getUsername(), user.getEmail());
          }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Best Practices for DTOs in GraphQL</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use DTOs to structure responses and avoid exposing internal entities.</li>
    <li>Define GraphQL schema clearly with mapped DTOs.</li>
    <li>Use libraries like MapStruct to automate DTO conversion.</li>
    <li>Ensure DTOs contain only necessary fields for a specific GraphQL query.</li>
    <li>Keep DTOs versioned to support backward compatibility.</li>
  </ul>
</div>
`
},
{
  title:`DTO in Kafka/RabbitMQ`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in Kafka/RabbitMQ</h2>
  <p style="font-size: 16px; color: #34495e;">
    In event-driven architectures, Data Transfer Objects (DTOs) facilitate seamless communication between
    microservices using messaging systems like Apache Kafka and RabbitMQ. They help structure and standardize
    message payloads, ensuring consistency and reducing dependencies on internal entity structures.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs in Kafka/RabbitMQ?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Ensures message payloads are well-structured and version-controlled.</li>
    <li>Decouples internal domain models from external consumers.</li>
    <li>Enhances compatibility between different microservices.</li>
    <li>Improves serialization and deserialization of messages.</li>
    <li>Facilitates schema evolution with minimal impact on services.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using DTOs in Kafka</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Data
      @AllArgsConstructor
      @NoArgsConstructor
      public class OrderDTO {
          private String orderId;
          private String product;
          private int quantity;
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Publishing DTO Messages to Kafka</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Service
      public class OrderProducer {
          private final KafkaTemplate<String, OrderDTO> kafkaTemplate;

          public OrderProducer(KafkaTemplate<String, OrderDTO> kafkaTemplate) {
              this.kafkaTemplate = kafkaTemplate;
          }

          public void sendOrder(OrderDTO order) {
              kafkaTemplate.send("order-topic", order);
          }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Consuming DTO Messages in RabbitMQ</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Service
      public class OrderConsumer {
          @RabbitListener(queues = "order-queue")
          public void receiveOrder(OrderDTO order) {
              System.out.println("Received order: " + order);
          }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Best Practices for DTOs in Kafka/RabbitMQ</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use versioning in DTOs to support backward compatibility.</li>
    <li>Keep DTOs lightweight and only include necessary fields.</li>
    <li>Utilize serialization formats like JSON or Avro for interoperability.</li>
    <li>Ensure DTOs are immutable to maintain data integrity.</li>
    <li>Validate DTOs before sending or processing messages.</li>
  </ul>
</div>
`
},
{
  title:`DTO in Security`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in Security</h2>
  <p style="font-size: 16px; color: #34495e;">
    In security implementations, Data Transfer Objects (DTOs) play a crucial role in handling authentication,
    authorization, and secure data exchange. By encapsulating user credentials, roles, and permissions, DTOs help
    prevent direct exposure of sensitive domain models.
  </p>

  <h3 style="color: #16a085;">Why Use DTOs in Security?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prevents exposure of internal domain entities.</li>
    <li>Enhances security by enforcing validation before processing.</li>
    <li>Separates authentication logic from business logic.</li>
    <li>Standardizes data exchange in secure APIs.</li>
    <li>Improves compliance with security best practices.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Authentication Request DTO</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Data
      @AllArgsConstructor
      @NoArgsConstructor
      public class AuthRequestDTO {
          private String username;
          private String password;
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Example: Authentication Response DTO</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Data
      @AllArgsConstructor
      @NoArgsConstructor
      public class AuthResponseDTO {
          private String token;
          private String role;
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Using DTOs in Security Service</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Service
      public class AuthService {
          public AuthResponseDTO authenticate(AuthRequestDTO authRequest) {
              // Simulated authentication logic
              String token = generateToken(authRequest.getUsername());
              return new AuthResponseDTO(token, "USER");
          }

          private String generateToken(String username) {
              return Base64.getEncoder().encodeToString((username + "-token").getBytes());
          }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Best Practices for Secure DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use validation annotations to prevent malicious inputs.</li>
    <li>Ensure passwords are never included in response DTOs.</li>
    <li>Utilize JWT for secure authentication responses.</li>
    <li>Implement role-based access control (RBAC) within DTOs.</li>
    <li>Keep DTOs lightweight and only include necessary fields.</li>
  </ul>
</div>
`
},
{
  title:`DTO Performance`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO Performance</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) play a crucial role in optimizing the performance of applications by reducing data
    redundancy and ensuring efficient communication between different layers of an application. Well-structured DTOs
    improve serialization, minimize unnecessary data transfer, and enhance overall application responsiveness.
  </p>

  <h3 style="color: #16a085;">Why DTOs Impact Performance?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Reduces data size by excluding unnecessary fields.</li>
    <li>Optimizes serialization and deserialization processes.</li>
    <li>Minimizes database queries by aggregating required data.</li>
    <li>Improves caching by structuring frequently used data.</li>
    <li>Enhances response time in microservices and REST APIs.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Optimized DTO for Performance</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Data
      @AllArgsConstructor
      @NoArgsConstructor
      public class UserDTO {
          private Long id;
          private String name;
          private String email;
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Best Practices for DTO Performance</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use selective field inclusion to reduce payload size.</li>
    <li>Utilize caching mechanisms for frequently used DTOs.</li>
    <li>Ensure proper indexing in the database to support DTO queries.</li>
    <li>Leverage lazy loading for DTO-related entity fetching.</li>
    <li>Use efficient mapping frameworks like MapStruct or ModelMapper.</li>
  </ul>

  <h3 style="color: #27ae60;">Benchmarking DTO Performance</h3>
  <p style="color: #2c3e50;">
    Performance benchmarking helps measure the efficiency of DTOs in data transfer. Tools such as JMH (Java
    Microbenchmark Harness) and profiling utilities like YourKit or VisualVM can be used to analyze serialization,
    deserialization, and network transmission times.
  </p>
</div>
`
},
{
  title:`DTO Best Practices`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO Best Practices</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) are essential for efficient communication between different layers of an application. 
    Following best practices in DTO design improves maintainability, performance, and scalability while preventing 
    unnecessary data exposure.
  </p>

  <h3 style="color: #16a085;">Key Best Practices for DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Ensure DTOs contain only necessary fields to minimize payload size.</li>
    <li>Keep DTOs immutable whenever possible to prevent unintended modifications.</li>
    <li>Use DTOs to decouple entity models from external exposure.</li>
    <li>Leverage mapping frameworks like MapStruct for efficient object transformation.</li>
    <li>Validate input data at the DTO level using annotations like <code>@Valid</code> and <code>@NotNull</code>.</li>
    <li>Implement versioning in DTOs to ensure backward compatibility.</li>
    <li>Group related DTOs in packages for better project structure.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Well-Structured DTO</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Data
      @AllArgsConstructor
      @NoArgsConstructor
      public class ProductDTO {
          private Long id;
          private String name;
          private BigDecimal price;
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Common Mistakes to Avoid</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Exposing entity models instead of using DTOs.</li>
    <li>Including unnecessary fields, leading to bloated DTOs.</li>
    <li>Using DTOs for database transactions instead of proper entity models.</li>
    <li>Ignoring proper serialization techniques, which can impact performance.</li>
  </ul>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Well-designed DTOs improve the efficiency and security of an application by optimizing data transfer and 
    maintaining separation between different layers. Following these best practices ensures scalable and maintainable 
    software architecture.
  </p>
</div>
`
},
{
  title:`Testing DTOs`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Testing DTOs</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) play a critical role in transferring data between layers of an application. 
    Proper testing of DTOs ensures data integrity, correctness, and compliance with business rules.
  </p>

  <h3 style="color: #16a085;">Why Test DTOs?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Ensures DTOs correctly serialize and deserialize data.</li>
    <li>Validates object mapping and transformations.</li>
    <li>Confirms that validation constraints function properly.</li>
    <li>Prevents unintended modifications by ensuring immutability.</li>
    <li>Enhances maintainability by catching issues early.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Testing a DTO with JUnit</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import static org.junit.jupiter.api.Assertions.*;
      import org.junit.jupiter.api.Test;
      import java.math.BigDecimal;

      class ProductDTOTest {
          @Test
          void testDTOCreation() {
              ProductDTO productDTO = new ProductDTO(1L, "Laptop", new BigDecimal("999.99"));
              assertEquals(1L, productDTO.getId());
              assertEquals("Laptop", productDTO.getName());
              assertEquals(new BigDecimal("999.99"), productDTO.getPrice());
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Testing DTO Serialization</h3>
  <p style="color: #2c3e50;">
    It is crucial to test if DTOs can correctly serialize and deserialize JSON data.
    Tools like Jackson's ObjectMapper can be used for this purpose.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import com.fasterxml.jackson.databind.ObjectMapper;
      import org.junit.jupiter.api.Test;
      import static org.junit.jupiter.api.Assertions.*;

      class ProductDTOSerializationTest {
          @Test
          void testSerialization() throws Exception {
              ObjectMapper objectMapper = new ObjectMapper();
              ProductDTO productDTO = new ProductDTO(1L, "Laptop", new BigDecimal("999.99"));
              String json = objectMapper.writeValueAsString(productDTO);
              ProductDTO deserializedDTO = objectMapper.readValue(json, ProductDTO.class);
              assertEquals(productDTO, deserializedDTO);
          }
      }
    </code>
  </pre>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Proper testing of DTOs ensures they function correctly in serialization, validation, and data transformation. 
    Using frameworks like JUnit and Jackson can help automate these tests and improve software quality.
  </p>
</div>
`
},
{
  title:`DTO Anti-Patterns`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to DTO Anti-Patterns</h2>
  <p style="font-size: 16px; color: #34495e;">
    Data Transfer Objects (DTOs) are widely used in Spring Boot applications to encapsulate data sent between the client and server. While DTOs provide many benefits, such as decoupling the API layer from the persistence layer and improving security, they can also be misused. DTO anti-patterns are common mistakes or poor practices that can lead to bloated, inefficient, or hard-to-maintain code. Recognizing and avoiding these anti-patterns is crucial for building clean, scalable, and maintainable applications.
  </p>

  <h3 style="color: #16a085;">Why Avoid DTO Anti-Patterns?</h3>
  <p style="color: #2c3e50;">
    Avoiding DTO anti-patterns is important for several reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Code Maintainability</strong>: Poorly designed DTOs can make the codebase harder to understand and maintain.</li>
    <li><strong>Performance</strong>: Inefficient DTOs can lead to unnecessary data transfer and processing overhead.</li>
    <li><strong>Security</strong>: Exposing sensitive data through DTOs can lead to security vulnerabilities.</li>
    <li><strong>Scalability</strong>: Bloated or overly complex DTOs can hinder the scalability of your application.</li>
    <li><strong>Consistency</strong>: Inconsistent use of DTOs can lead to confusion and errors in the application.</li>
  </ul>

  <h3 style="color: #e67e22;">Common DTO Anti-Patterns</h3>
  <p style="color: #2c3e50;">
    Below are some common DTO anti-patterns and how to avoid them:
  </p>

  <h4 style="color: #2980b9;">1. Exposing Sensitive Data</h4>
  <p style="color: #2c3e50;">
    <strong>Anti-Pattern</strong>: Including sensitive information like passwords, credit card numbers, or personal identification numbers (PINs) in DTOs.
  </p>
  <p style="color: #2c3e50;">
    <strong>Solution</strong>: Exclude sensitive fields from DTOs or use masking techniques to hide sensitive data.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      // Bad: Exposing sensitive data
      public class UserDTO {
          private String username;
          private String password; // Sensitive data
      }

      // Good: Exclude sensitive data
      public class UserDTO {
          private String username;
          // Password is excluded
      }
    </code>
  </pre>

  <h4 style="color: #2980b9;">2. Overloading DTOs with Unnecessary Data</h4>
  <p style="color: #2c3e50;">
    <strong>Anti-Pattern</strong>: Including fields in DTOs that are not required by the client, leading to bloated payloads.
  </p>
  <p style="color: #2c3e50;">
    <strong>Solution</strong>: Design DTOs to include only the fields needed for a specific use case.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      // Bad: Overloaded DTO
      public class UserDTO {
          private Long id;
          private String name;
          private String email;
          private String address;
          private String phoneNumber;
          private String socialSecurityNumber; // Unnecessary field
      }

      // Good: Minimal DTO
      public class UserDTO {
          private Long id;
          private String name;
          private String email;
      }
    </code>
  </pre>

  <h4 style="color: #2980b9;">3. Ignoring Validation</h4>
  <p style="color: #2c3e50;">
    <strong>Anti-Pattern</strong>: Failing to validate data in DTOs, leading to potential security vulnerabilities or data integrity issues.
  </p>
  <p style="color: #2c3e50;">
    <strong>Solution</strong>: Use validation annotations like <code>@NotNull</code>, <code>@Size</code>, and <code>@Email</code> to enforce data integrity.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      // Bad: No validation
      public class UserDTO {
          private String name;
          private String email;
      }

      // Good: With validation
      public class UserDTO {
          @NotBlank(message = "Name is required")
          private String name;

          @Email(message = "Invalid email format")
          @NotBlank(message = "Email is required")
          private String email;
      }
    </code>
  </pre>

  <h4 style="color: #2980b9;">4. Using Entities as DTOs</h4>
  <p style="color: #2c3e50;">
    <strong>Anti-Pattern</strong>: Using entity classes directly as DTOs, which tightly couples the API layer to the persistence layer.
  </p>
  <p style="color: #2c3e50;">
    <strong>Solution</strong>: Create separate DTO classes to decouple the API layer from the persistence layer.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      // Bad: Using entity as DTO
      @Entity
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
      }

      // Good: Separate DTO
      public class UserDTO {
          private Long id;
          private String name;
          private String email;
      }
    </code>
  </pre>

  <h4 style="color: #2980b9;">5. Overusing Nested DTOs</h4>
  <p style="color: #2c3e50;">
    <strong>Anti-Pattern</strong>: Creating deeply nested DTOs that are difficult to understand and maintain.
  </p>
  <p style="color: #2c3e50;">
    <strong>Solution</strong>: Limit the depth of nested DTOs and ensure they are logically structured.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      // Bad: Deeply nested DTOs
      public class UserDTO {
          private Long id;
          private String name;
          private AddressDTO address;
          private List<OrderDTO> orders;
      }

      public class OrderDTO {
          private Long id;
          private List<ItemDTO> items;
      }

      // Good: Flattened structure
      public class UserDTO {
          private Long id;
          private String name;
          private String address;
          private List<String> orders; // Simplified
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Using DTOs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keep DTOs focused and minimal, including only the necessary fields.</li>
    <li>Use validation annotations to enforce data integrity.</li>
    <li>Separate DTOs from entities to decouple the API layer from the persistence layer.</li>
    <li>Avoid exposing sensitive data in DTOs.</li>
    <li>Limit the depth of nested DTOs to maintain simplicity.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    DTOs are a powerful tool for managing data transfer in Spring Boot applications, but they must be used correctly to avoid common anti-patterns. By following best practices and avoiding pitfalls like exposing sensitive data, overloading DTOs, and ignoring validation, you can ensure that your application remains clean, secure, and maintainable. Proper use of DTOs will enhance the scalability and reliability of your application while providing a clear and consistent API contract.
  </p>
</div>`
},
{
  title:`Service Layer Basics`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Service Layer Basics</h2>
  <p style="font-size: 16px; color: #34495e;">
    The service layer is a crucial component in a layered application architecture. It acts as an intermediary between the controller and repository layers, ensuring business logic is centralized and reusable. 
  </p>

  <h3 style="color: #16a085;">Key Responsibilities of the Service Layer</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Encapsulating business logic and preventing it from being scattered across controllers.</li>
    <li>Coordinating between the controller and data access layers.</li>
    <li>Handling transactions and enforcing security constraints.</li>
    <li>Supporting service reusability and maintainability.</li>
    <li>Facilitating unit testing and separation of concerns.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Implementing a Service Layer in Spring Boot</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class ProductService {
          private final ProductRepository productRepository;

          public ProductService(ProductRepository productRepository) {
              this.productRepository = productRepository;
          }

          public List<Product> getAllProducts() {
              return productRepository.findAll();
          }

          public Product getProductById(Long id) {
              return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
          }

          public Product saveProduct(Product product) {
              return productRepository.save(product);
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Advantages of Using a Service Layer</h3>
  <p style="color: #2c3e50;">
    Implementing a service layer provides several advantages, such as:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Better organization and separation of concerns.</li>
    <li>Easier unit testing by isolating business logic.</li>
    <li>Enhanced maintainability and scalability of applications.</li>
    <li>Centralized error handling and transaction management.</li>
  </ul>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    The service layer in a Spring Boot application acts as a bridge between controllers and data layers, ensuring business logic is well-structured and reusable. 
    By adopting a service layer, developers can build scalable, maintainable, and testable applications.
  </p>
</div>
`
},
{
  title:`MVC & Service Layer`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">MVC & Service Layer</h2>
  <p style="font-size: 16px; color: #34495e;">
    The Model-View-Controller (MVC) pattern is a widely used architectural pattern for designing web applications. The service layer plays a critical role in this architecture by separating business logic from the controller and data access layers. This enhances modularity, maintainability, and testability.
  </p>

  <h3 style="color: #16a085;">Role of Service Layer in MVC</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Acts as an intermediary between controllers and repositories.</li>
    <li>Encapsulates business logic to keep controllers lightweight.</li>
    <li>Manages transactions and security aspects.</li>
    <li>Improves reusability and maintainability of code.</li>
    <li>Facilitates unit testing by isolating business logic from controllers.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Implementing Service Layer in MVC</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List<User> getAllUsers() {
              return userRepository.findAll();
          }

          public User getUserById(Long id) {
              return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Advantages of MVC with a Service Layer</h3>
  <p style="color: #2c3e50;">
    Using a service layer within the MVC pattern provides multiple benefits:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Improves application structure by enforcing separation of concerns.</li>
    <li>Enhances code maintainability and modularity.</li>
    <li>Makes business logic reusable across different parts of the application.</li>
    <li>Simplifies debugging and unit testing.</li>
    <li>Provides a centralized point for handling business rules.</li>
  </ul>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    The combination of MVC and a well-structured service layer helps in designing scalable and maintainable applications. By keeping controllers clean and delegating business logic to the service layer, developers can achieve better code organization and reusability.
  </p>
</div>
`
},
{
  title:`Service Layer in Spring Boot`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Service Layer in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In a Spring Boot application, the service layer plays a crucial role in separating business logic from controllers and repositories. This enhances modularity, maintainability, and testability, making it a core part of a well-structured application.
  </p>

  <h3 style="color: #16a085;">Purpose of Service Layer in Spring Boot</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Encapsulates business logic and computations.</li>
    <li>Decouples controllers from direct database access.</li>
    <li>Facilitates unit testing by isolating business logic.</li>
    <li>Improves code organization and maintainability.</li>
    <li>Handles transactions, security, and validation.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Implementing a Service Layer in Spring Boot</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List<User> getAllUsers() {
              return userRepository.findAll();
          }

          public User getUserById(Long id) {
              return userRepository.findById(id)
                  .orElseThrow(() -> new RuntimeException("User not found"));
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Advantages of Using a Service Layer</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Keeps controllers clean and focused on handling requests.</li>
    <li>Improves separation of concerns, making code more modular.</li>
    <li>Facilitates unit testing and debugging.</li>
    <li>Enhances scalability and maintainability.</li>
    <li>Provides a central place for managing business logic.</li>
  </ul>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    The service layer in Spring Boot applications is essential for maintaining clean architecture and ensuring scalability. By separating business logic from controllers, developers can create robust, maintainable, and testable applications.
  </p>
</div>
`
},
{
  title:`@Service Annotation`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">@Service Annotation in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    The <code>@Service</code> annotation in Spring Boot is a specialization of the <code>@Component</code> annotation that marks a class as a service component. It is typically used to define service-layer beans that contain business logic and interact with repositories.
  </p>

  <h3 style="color: #16a085;">Purpose of @Service Annotation</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Indicates that a class is a service component in the application.</li>
    <li>Helps in automatic component scanning and dependency injection.</li>
    <li>Enhances code readability and modularity.</li>
    <li>Encapsulates business logic separate from the controller and repository layers.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using @Service Annotation</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List<User> getAllUsers() {
              return userRepository.findAll();
          }

          public User getUserById(Long id) {
              return userRepository.findById(id)
                  .orElseThrow(() -> new RuntimeException("User not found"));
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Advantages of Using @Service Annotation</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Makes service classes easily identifiable and manageable.</li>
    <li>Ensures separation of concerns by keeping business logic isolated.</li>
    <li>Supports Spring's dependency injection mechanism.</li>
    <li>Improves application modularity and maintainability.</li>
  </ul>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    The <code>@Service</code> annotation in Spring Boot is a key component in defining the service layer of an application. It helps structure code effectively, improves testability, and simplifies dependency management through Spring's built-in capabilities.
  </p>
</div>
`
},
{
  title:`Dependency Injection`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Dependency Injection in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Dependency Injection (DI) is a fundamental design pattern in Spring Boot that promotes loose coupling and enhances modularity. It allows dependencies to be injected into components, rather than being manually instantiated within them, making the application more flexible and testable.
  </p>

  <h3 style="color: #16a085;">Types of Dependency Injection</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Constructor Injection:</strong> Dependencies are passed via a constructor.</li>
    <li><strong>Setter Injection:</strong> Dependencies are assigned through setter methods.</li>
    <li><strong>Field Injection:</strong> Dependencies are injected directly into fields using <code>@Autowired</code>.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Constructor-Based Dependency Injection</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import org.springframework.beans.factory.annotation.Autowired;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          @Autowired
          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List<User> getAllUsers() {
              return userRepository.findAll();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Benefits of Dependency Injection</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Reduces tight coupling between components.</li>
    <li>Enhances code reusability and maintainability.</li>
    <li>Improves testability by allowing dependencies to be mocked easily.</li>
    <li>Promotes better separation of concerns in the application architecture.</li>
  </ul>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Dependency Injection in Spring Boot simplifies application development by managing component dependencies automatically. By using DI, developers can build more scalable, maintainable, and testable applications efficiently.
  </p>
</div>
`
},

{
  title:`Service vs Repository`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Service vs Repository in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot, the <strong>Service</strong> and <strong>Repository</strong> layers play distinct roles in structuring an application. Understanding their responsibilities and differences is crucial for designing scalable and maintainable applications.
  </p>

  <h3 style="color: #16a085;">What is a Service?</h3>
  <p style="color: #2c3e50;">
    The <strong>Service Layer</strong> contains business logic and acts as a bridge between the Controller and Repository layers. It is annotated with <code>@Service</code> to indicate that it holds core business functionalities.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List<User> getAllUsers() {
              return userRepository.findAll();
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">What is a Repository?</h3>
  <p style="color: #2c3e50;">
    The <strong>Repository Layer</strong> is responsible for database operations and is typically annotated with <code>@Repository</code>. It interacts with the database to perform CRUD operations using Spring Data JPA.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.stereotype.Repository;

      @Repository
      public interface UserRepository extends JpaRepository<User, Long> {
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Key Differences</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Service Layer:</strong> Handles business logic and acts as a middle layer between controllers and repositories.</li>
    <li><strong>Repository Layer:</strong> Directly interacts with the database to fetch and store data.</li>
    <li><strong>Separation of Concerns:</strong> Keeping business logic separate from database operations improves maintainability.</li>
  </ul>

  <h3 style="color: #27ae60;">Conclusion</h3>
  <p style="color: #2c3e50;">
    In a well-structured Spring Boot application, the <strong>Service Layer</strong> should contain business rules, while the <strong>Repository Layer</strong> should handle data persistence. This separation improves modularity, scalability, and maintainability of the application.
  </p>
</div>
`
},
{
  title:`Database Interaction`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Database Interaction in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Database interaction is a crucial part of any application, enabling data persistence and retrieval. 
    Spring Boot simplifies database interactions by providing built-in support for JPA, JDBC, and NoSQL databases.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Database Interaction:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Spring Data JPA for ORM-based interaction.</li>
    <li>Spring JDBC for direct SQL execution.</li>
    <li>Transaction management for data consistency.</li>
    <li>Connection pooling for efficient database connections.</li>
    <li>Support for NoSQL databases like MongoDB and Redis.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use Spring Boot for Database Interaction?</h3>
  <p style="color: #2c3e50;">
    Spring Boot abstracts database complexities and provides easy-to-use configurations 
    for integrating relational and NoSQL databases. It also supports declarative transaction management 
    and simplifies repository creation through Spring Data JPA.
  </p>

  <h3 style="color: #2980b9;">Example: Spring Boot with JPA</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.stereotype.Repository;

      @Repository
      public interface UserRepository extends JpaRepository<User, Long> {
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    The above code defines a repository interface for database interaction, 
    allowing CRUD operations without writing SQL queries.
  </p>
</div>
`
},
{
  title:`DTO in Service Layer`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">DTO in Service Layer</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot applications, the service layer acts as a bridge between the controller and the repository layers. 
    Using Data Transfer Objects (DTOs) in the service layer helps in structuring data efficiently, improving security, 
    and ensuring loose coupling between different layers.
  </p>

  <h3 style="color: #16a085;">Key Benefits of Using DTOs in the Service Layer:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Encapsulates business logic and prevents exposing domain models directly.</li>
    <li>Enhances security by controlling exposed data fields.</li>
    <li>Reduces dependency on database structures in the controller layer.</li>
    <li>Improves performance by transferring only required data fields.</li>
  </ul>

  <h3 style="color: #e67e22;">Why Use DTOs in the Service Layer?</h3>
  <p style="color: #2c3e50;">
    DTOs allow developers to separate business logic from the database entities. This ensures that 
    changes in the database model do not directly affect the API responses. DTOs also help with 
    mapping complex objects and filtering unnecessary fields.
  </p>

  <h3 style="color: #2980b9;">Example: Using DTO in Service Layer</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;
      import java.util.stream.Collectors;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List<UserDTO> getAllUsers() {
              return userRepository.findAll()
                                   .stream()
                                   .map(user -> new UserDTO(user.getId(), user.getName(), user.getEmail()))
                                   .collect(Collectors.toList());
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    The above code demonstrates how a service layer retrieves user data and converts it into a DTO 
    before passing it to the controller. This approach improves maintainability and scalability.
  </p>
</div>
`
},
{
  title:`Exception Handling`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Exception Handling in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Exception handling is a crucial aspect of building robust and user-friendly applications. 
    Spring Boot provides various mechanisms to handle exceptions gracefully, ensuring proper error 
    responses and logging.
  </p>

  <h3 style="color: #16a085;">Why is Exception Handling Important?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Prevents application crashes and improves stability.</li>
    <li>Provides meaningful error messages to clients.</li>
    <li>Helps in debugging by logging detailed error information.</li>
    <li>Enhances user experience by handling errors gracefully.</li>
  </ul>

  <h3 style="color: #e67e22;">How to Handle Exceptions in Spring Boot?</h3>
  <p style="color: #2c3e50;">
    Spring Boot provides multiple ways to handle exceptions, including using 
    <code>@ExceptionHandler</code>, <code>@ControllerAdvice</code>, and 
    <code>ResponseStatusException</code>. Below is an example of handling a custom exception.
  </p>

  <h3 style="color: #2980b9;">Example: Custom Exception Handling</h3>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.http.HttpStatus;
      import org.springframework.web.bind.annotation.ExceptionHandler;
      import org.springframework.web.bind.annotation.ResponseStatus;
      import org.springframework.web.bind.annotation.RestControllerAdvice;

      @RestControllerAdvice
      public class GlobalExceptionHandler {
          
          @ExceptionHandler(ResourceNotFoundException.class)
          @ResponseStatus(HttpStatus.NOT_FOUND)
          public ErrorResponse handleResourceNotFoundException(ResourceNotFoundException ex) {
              return new ErrorResponse("NOT_FOUND", ex.getMessage());
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    The above code demonstrates a global exception handler using <code>@RestControllerAdvice</code>. 
    It catches <code>ResourceNotFoundException</code> and returns a meaningful error response with an HTTP status.
  </p>
</div>
`
},
{
  title:`Transaction Management`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Transaction Management in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Transaction management is a critical aspect of building reliable and consistent applications, especially when dealing with databases. In Spring Boot, transaction management ensures that a series of database operations either complete successfully as a single unit of work or are rolled back entirely in case of an error. This guarantees data integrity and consistency, even in the face of failures or concurrent access.
  </p>

  <h3 style="color: #16a085;">Why is Transaction Management Important?</h3>
  <p style="color: #2c3e50;">
    Transaction management is essential for several reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Data Integrity</strong>: Ensures that database operations are atomic, consistent, isolated, and durable (ACID properties).</li>
    <li><strong>Error Handling</strong>: Automatically rolls back changes if an error occurs, preventing partial updates.</li>
    <li><strong>Concurrency Control</strong>: Manages concurrent access to data, preventing issues like dirty reads or lost updates.</li>
    <li><strong>Simplified Code</strong>: Reduces boilerplate code by handling transaction boundaries declaratively.</li>
    <li><strong>Scalability</strong>: Supports distributed transactions in microservices architectures.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Transaction Management</h3>
  <p style="color: #2c3e50;">
    Spring Boot provides robust support for transaction management through the <strong>Spring Framework's transaction abstraction</strong>. Key concepts include:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Programmatic vs. Declarative Transactions</strong>: Programmatic transactions are managed manually in code, while declarative transactions are managed using annotations or configuration.</li>
    <li><strong>Transaction Propagation</strong>: Defines how transactions behave when multiple methods are called (e.g., REQUIRED, REQUIRES_NEW).</li>
    <li><strong>Isolation Levels</strong>: Controls the visibility of changes made by one transaction to other transactions (e.g., READ_COMMITTED, SERIALIZABLE).</li>
    <li><strong>Rollback Rules</strong>: Specifies which exceptions trigger a rollback.</li>
    <li><strong>Distributed Transactions</strong>: Manages transactions across multiple data sources or services.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Implementing Transaction Management in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to implement transaction management in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Enable Transaction Management</h4>
  <p style="color: #2c3e50;">
    Spring Boot automatically configures transaction management if you include a data source and Spring Data JPA. You can enable it explicitly using the <code>@EnableTransactionManagement</code> annotation.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.annotation.Configuration;
      import org.springframework.transaction.annotation.EnableTransactionManagement;

      @Configuration
      @EnableTransactionManagement
      public class TransactionConfig {
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Use Declarative Transactions</h4>
  <p style="color: #2c3e50;">
    Use the <code>@Transactional</code> annotation to manage transactions declaratively.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Service;
      import org.springframework.transaction.annotation.Transactional;

      @Service
      public class UserService {

          @Autowired
          private UserRepository userRepository;

          @Transactional
          public void createUser(User user) {
              userRepository.save(user);
              // Simulate an error
              if (user.getName() == null) {
                  throw new RuntimeException("User name cannot be null");
              }
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Configure Transaction Propagation</h4>
  <p style="color: #2c3e50;">
    Use the <code>propagation</code> attribute to define how transactions propagate.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Transactional(propagation = Propagation.REQUIRED)
      public void updateUser(User user) {
          userRepository.save(user);
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Configure Isolation Levels</h4>
  <p style="color: #2c3e50;">
    Use the <code>isolation</code> attribute to control transaction isolation levels.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Transactional(isolation = Isolation.READ_COMMITTED)
      public User getUserById(Long id) {
          return userRepository.findById(id).orElse(null);
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">5. Handle Rollbacks</h4>
  <p style="color: #2c3e50;">
    Use the <code>rollbackFor</code> and <code>noRollbackFor</code> attributes to customize rollback behavior.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Transactional(rollbackFor = RuntimeException.class, noRollbackFor = IllegalArgumentException.class)
      public void deleteUser(Long id) {
          userRepository.deleteById(id);
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Transaction Management</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use declarative transactions (<code>@Transactional</code>) for simplicity and readability.</li>
    <li>Keep transactions short and focused to minimize locking and improve performance.</li>
    <li>Choose appropriate propagation and isolation levels based on your application's requirements.</li>
    <li>Handle exceptions properly to ensure transactions are rolled back when necessary.</li>
    <li>Avoid long-running transactions, as they can lead to deadlocks and performance issues.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Transaction management is a fundamental aspect of building reliable and consistent Spring Boot applications. By leveraging Spring's transaction abstraction, you can ensure that your database operations are atomic, consistent, isolated, and durable. Whether you're working with a single database or distributed systems, proper transaction management practices will enhance the integrity, performance, and scalability of your application.
  </p>
</div>`
},
{
  title:`Best Practices`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Best Practices in Spring Boot Development</h2>
  <p style="font-size: 16px; color: #34495e;">
    Developing robust and scalable Spring Boot applications requires following best practices. These guidelines ensure maintainability, performance, and security while simplifying development. Let's explore the key best practices for Spring Boot development.
  </p>

  <h3 style="color: #16a085;">1. Project Structure and Organization</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Follow Layered Architecture</strong>: Organize code into Controller, Service, Repository, and Model layers for better maintainability.</li>
    <li><strong>Use a Proper Package Structure</strong>: Follow a standard package structure like <code>com.example.project</code> to ensure clarity.</li>
    <li><strong>Modularize Code</strong>: Divide large applications into smaller modules or microservices for scalability.</li>
  </ul>

  <h3 style="color: #e67e22;">2. Configuration Management</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Externalize Configuration</strong>: Use <code>application.properties</code> or <code>application.yml</code> to keep configurations separate from code.</li>
    <li><strong>Use Profiles</strong>: Define separate profiles (e.g., <code>dev</code>, <code>prod</code>, <code>test</code>) for different environments.</li>
    <li><strong>Secure Sensitive Data</strong>: Avoid hardcoding passwords or API keys; use environment variables or encrypted secrets.</li>
  </ul>

  <h3 style="color: #2980b9;">3. REST API Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Follow RESTful Principles</strong>: Use proper HTTP methods (GET, POST, PUT, DELETE) for API operations.</li>
    <li><strong>Return Proper HTTP Status Codes</strong>: Ensure APIs return appropriate status codes (e.g., 200 OK, 400 Bad Request, 404 Not Found).</li>
    <li><strong>Handle Errors Gracefully</strong>: Implement global exception handling using <code>@ControllerAdvice</code>.</li>
    <li><strong>Use Pagination</strong>: Implement pagination for large datasets using Spring Data JPA.</li>
  </ul>

  <h3 style="color: #8e44ad;">4. Database and Transaction Management</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use JPA and Hibernate Effectively</strong>: Follow proper entity mapping and avoid unnecessary queries.</li>
    <li><strong>Enable Connection Pooling</strong>: Use HikariCP for better database connection management.</li>
    <li><strong>Use Transactions</strong>: Apply <code>@Transactional</code> to ensure atomicity and consistency.</li>
  </ul>

  <h3 style="color: #d35400;">5. Security Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Enable Authentication and Authorization</strong>: Use Spring Security for role-based access control.</li>
    <li><strong>Protect APIs</strong>: Use OAuth2, JWT, or API keys for securing REST APIs.</li>
    <li><strong>Prevent SQL Injection</strong>: Use parameterized queries and avoid dynamic queries.</li>
    <li><strong>Validate Input</strong>: Implement data validation to prevent XSS and CSRF attacks.</li>
  </ul>

  <h3 style="color: #2c3e50;">6. Performance Optimization</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use Caching</strong>: Implement caching with Redis or Ehcache to improve response times.</li>
    <li><strong>Optimize Queries</strong>: Use indexing, fetch joins, and batch processing to optimize database performance.</li>
    <li><strong>Reduce Startup Time</strong>: Use lazy initialization and exclude unnecessary dependencies.</li>
  </ul>

  <h3 style="color: #16a085;">7. Logging and Monitoring</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use SLF4J and Logback</strong>: Follow structured logging practices for better debugging.</li>
    <li><strong>Enable Actuator</strong>: Monitor application health and performance with Spring Boot Actuator.</li>
    <li><strong>Integrate with Monitoring Tools</strong>: Use Prometheus, Grafana, or ELK Stack for observability.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Following best practices in Spring Boot development helps build scalable, secure, and high-performance applications. By structuring projects well, managing configurations efficiently, optimizing performance, and ensuring security, developers can create maintainable and robust applications that meet modern software requirements.
  </p>
</div>
  `
},
{
  title:`Business Logic`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Business Logic in Software Development</h2>
  <p style="font-size: 16px; color: #34495e;">
    Business logic is the core of any software application. It represents the rules and operations that define how data is processed and decisions are made within a system. Effective business logic ensures that an application functions correctly and delivers the expected outcomes to users.
  </p>

  <h3 style="color: #16a085;">What is Business Logic?</h3>
  <p style="color: #2c3e50;">
    Business logic refers to the part of a software application that encodes real-world business rules and operations. It governs how data flows through the application and dictates the interactions between various system components.
  </p>

  <h3 style="color: #e67e22;">Why is Business Logic Important?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Ensures Accuracy:</strong> Enforces correct processing of data based on business rules.</li>
    <li><strong>Maintains Consistency:</strong> Provides a single source of truth for decision-making processes.</li>
    <li><strong>Enhances Maintainability:</strong> Separates business rules from UI and database logic, making the code easier to manage.</li>
    <li><strong>Supports Scalability:</strong> Allows for modifications and extensions without impacting other components.</li>
    <li><strong>Improves Security:</strong> Controls access to data and prevents unauthorized actions.</li>
  </ul>

  <h3 style="color: #2980b9;">Best Practices for Implementing Business Logic</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use a Layered Architecture:</strong> Separate business logic from UI and data layers.</li>
    <li><strong>Leverage Design Patterns:</strong> Apply patterns like MVC, Service Layer, or Repository to structure your logic effectively.</li>
    <li><strong>Keep Logic Modular:</strong> Break down complex logic into smaller, reusable components.</li>
    <li><strong>Write Unit Tests:</strong> Ensure the reliability of business rules by testing edge cases and expected behaviors.</li>
    <li><strong>Use Domain-Driven Design (DDD):</strong> Model business entities and processes based on real-world scenarios.</li>
    <li><strong>Minimize Duplication:</strong> Avoid redundant logic by centralizing common business rules.</li>
  </ul>

  <h3 style="color: #d35400;">Example: Implementing Business Logic in a Spring Boot Service</h3>
  <p style="color: #2c3e50;">
    Below is an example of a well-structured business logic implementation in a Spring Boot service class.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.Optional;

      @Service
      public class OrderService {
          private final OrderRepository orderRepository;
          
          public OrderService(OrderRepository orderRepository) {
              this.orderRepository = orderRepository;
          }
          
          public String processOrder(Long orderId) {
              Optional<Order> order = orderRepository.findById(orderId);
              
              if (order.isEmpty()) {
                  throw new RuntimeException("Order not found");
              }
              
              if (!order.get().isPaymentComplete()) {
                  return "Payment pending. Order cannot be processed.";
              }
              
              order.get().setStatus("Processed");
              orderRepository.save(order.get());
              return "Order processed successfully";
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Business logic is the backbone of any software application, ensuring that processes follow predefined rules and deliver the expected outcomes. By applying best practices such as separation of concerns, modular design, and thorough testing, developers can create maintainable, scalable, and robust applications. A well-structured business logic layer enhances the overall quality of software and ensures smooth functionality across different components.
  </p>
</div>
`
},
{
  title:`Unit Testing`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Unit Testing</h2>
  <p style="font-size: 16px; color: #34495e;">
    Unit testing is a fundamental aspect of software development that ensures individual components of an application work as expected. By testing each unit of code independently, developers can catch bugs early, maintain code quality, and simplify debugging. Unit testing is widely used in agile development, continuous integration, and test-driven development (TDD) methodologies.
  </p>

  <h3 style="color: #16a085;">Why is Unit Testing Important?</h3>
  <p style="color: #2c3e50;">
    Unit testing plays a crucial role in software development for several reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Early Bug Detection</strong>: Catches errors at the initial stages, reducing debugging efforts later.</li>
    <li><strong>Code Maintainability</strong>: Makes it easier to refactor and update code without breaking existing functionality.</li>
    <li><strong>Improved Code Quality</strong>: Encourages writing modular and testable code.</li>
    <li><strong>Faster Development</strong>: Reduces time spent on fixing production issues.</li>
    <li><strong>Supports Continuous Integration</strong>: Helps automate testing in CI/CD pipelines.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Unit Testing</h3>
  <p style="color: #2c3e50;">
    Unit testing revolves around the following principles:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Isolation</strong>: Tests should focus on a single unit (method or function) and not depend on external systems.</li>
    <li><strong>Assertions</strong>: Validates the expected output of a unit against actual results.</li>
    <li><strong>Mocks & Stubs</strong>: Simulates dependencies to isolate the test scope.</li>
    <li><strong>Code Coverage</strong>: Measures how much of the code is tested.</li>
    <li><strong>Automated Execution</strong>: Enables running tests frequently without manual intervention.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Writing Unit Tests in Java with JUnit</h3>
  <p style="color: #2c3e50;">
    JUnit is a popular testing framework for Java applications. Below is an example of a simple unit test using JUnit.
  </p>

  <h4 style="color: #8e44ad;">1. Add JUnit Dependency</h4>
  <p style="color: #2c3e50;">
    If you're using Maven, include the following dependency in your <code>pom.xml</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;junit&lt;/groupId&gt;
          &lt;artifactId&gt;junit&lt;/artifactId&gt;
          &lt;version&gt;4.13.2&lt;/version&gt;
          &lt;scope&gt;test&lt;/scope&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Create a Simple Java Class</h4>
  <p style="color: #2c3e50;">
    Here’s a simple calculator class that we will test.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class Calculator {
          public int add(int a, int b) {
              return a + b;
          }

          public int subtract(int a, int b) {
              return a - b;
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Write a JUnit Test</h4>
  <p style="color: #2c3e50;">
    Now, let’s write a JUnit test for the <code>Calculator</code> class.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.junit.Test;
      import static org.junit.Assert.*;

      public class CalculatorTest {

          @Test
          public void testAddition() {
              Calculator calculator = new Calculator();
              assertEquals(10, calculator.add(5, 5));
          }

          @Test
          public void testSubtraction() {
              Calculator calculator = new Calculator();
              assertEquals(3, calculator.subtract(8, 5));
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Run the Test</h4>
  <p style="color: #2c3e50;">
    You can run the test using the following command in the terminal:
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-bash">
      mvn test
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Unit Testing</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Write tests for every function with meaningful test cases.</li>
    <li>Ensure tests run independently without dependencies.</li>
    <li>Use mocks to isolate units and avoid external dependencies.</li>
    <li>Follow naming conventions like <code>testMethodName_shouldExpectedBehavior</code>.</li>
    <li>Keep tests simple, clear, and well-documented.</li>
    <li>Run tests frequently in CI/CD pipelines.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Unit testing is a crucial practice for developing robust, error-free software. By writing effective unit tests, developers can improve code quality, enhance maintainability, and accelerate the development process. Whether you’re using JUnit, Mockito, or other testing frameworks, adopting a test-first approach will lead to better and more reliable applications.
  </p>
</div>
`
},
{
title:`Logging`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Logging</h2>
  <p style="font-size: 16px; color: #34495e;">
    Logging is an essential aspect of software development that helps track application behavior, debug issues, and monitor performance. It provides a structured way to record events, errors, and informational messages during application execution. Effective logging improves system reliability, security, and troubleshooting efficiency.
  </p>

  <h3 style="color: #16a085;">Why is Logging Important?</h3>
  <p style="color: #2c3e50;">
    Logging plays a crucial role in software development for various reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Debugging</strong>: Helps identify and resolve issues in code by analyzing log entries.</li>
    <li><strong>Performance Monitoring</strong>: Tracks system performance and detects bottlenecks.</li>
    <li><strong>Error Tracking</strong>: Logs errors and exceptions for quick diagnosis.</li>
    <li><strong>Security Auditing</strong>: Records user actions and security-related events.</li>
    <li><strong>Compliance</strong>: Provides logs required for regulatory and security compliance.</li>
  </ul>

  <h3 style="color: #e67e22;">Types of Logging</h3>
  <p style="color: #2c3e50;">
    Different types of logs serve various purposes in software applications:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Error Logs</strong>: Captures errors and exceptions for troubleshooting.</li>
    <li><strong>Debug Logs</strong>: Provides detailed information for developers during debugging.</li>
    <li><strong>Audit Logs</strong>: Records security and access-related events.</li>
    <li><strong>Transaction Logs</strong>: Logs database transactions for consistency tracking.</li>
    <li><strong>Performance Logs</strong>: Tracks system metrics and resource utilization.</li>
  </ul>

  <h3 style="color: #2980b9;">Logging Levels</h3>
  <p style="color: #2c3e50;">
    Logging levels determine the severity of log messages. Common logging levels include:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>DEBUG</strong>: Detailed information for debugging.</li>
    <li><strong>INFO</strong>: General operational messages.</li>
    <li><strong>WARN</strong>: Potential issues that require attention.</li>
    <li><strong>ERROR</strong>: Errors that need immediate investigation.</li>
    <li><strong>FATAL</strong>: Critical errors causing system failure.</li>
  </ul>

  <h3 style="color: #8e44ad;">Example: Logging in Java with Log4j</h3>
  <p style="color: #2c3e50;">
    Log4j is a popular logging framework for Java applications. Below is an example of how to set up and use Log4j.
  </p>

  <h4 style="color: #8e44ad;">1. Add Log4j Dependency</h4>
  <p style="color: #2c3e50;">
    If you're using Maven, include the following dependency in your <code>pom.xml</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.apache.logging.log4j&lt;/groupId&gt;
          &lt;artifactId&gt;log4j-core&lt;/artifactId&gt;
          &lt;version&gt;2.17.1&lt;/version&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Configure Log4j</h4>
  <p style="color: #2c3e50;">
    Create a Log4j configuration file named <code>log4j2.xml</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;Configuration status="WARN"&gt;
          &lt;Appenders&gt;
              &lt;Console name="Console" target="SYSTEM_OUT"&gt;
                  &lt;PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %c{1} - %msg%n"/&gt;
              &lt;/Console&gt;
          &lt;/Appenders&gt;
          &lt;Loggers&gt;
              &lt;Root level="info"&gt;
                  &lt;AppenderRef ref="Console"/&gt;
              &lt;/Root&gt;
          &lt;/Loggers&gt;
      &lt;/Configuration&gt;
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Implement Logging in Java</h4>
  <p style="color: #2c3e50;">
    Use Log4j in a Java application.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.apache.logging.log4j.LogManager;
      import org.apache.logging.log4j.Logger;

      public class LoggingExample {
          private static final Logger logger = LogManager.getLogger(LoggingExample.class);

          public static void main(String[] args) {
              logger.debug("This is a DEBUG message.");
              logger.info("This is an INFO message.");
              logger.warn("This is a WARNING message.");
              logger.error("This is an ERROR message.");
              logger.fatal("This is a FATAL message.");
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Run the Application</h4>
  <p style="color: #2c3e50;">
    When executed, the program outputs log messages based on the configured log level.
  </p>

  <h3 style="color: #d35400;">Best Practices for Logging</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use appropriate log levels to filter relevant information.</li>
    <li>Avoid logging sensitive data such as passwords and user credentials.</li>
    <li>Implement structured logging to make logs more readable and searchable.</li>
    <li>Use log rotation to manage log file size.</li>
    <li>Integrate logging with monitoring tools like ELK Stack or Splunk.</li>
    <li>Ensure logs are stored securely and accessible only to authorized users.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Logging is a critical component of software development that provides visibility into an application’s behavior. By using structured logging frameworks like Log4j, developers can track system performance, diagnose issues, and enhance security. Implementing effective logging strategies ensures robust, maintainable, and secure applications.
  </p>
</div>
`
},
{
  title:`Integration Testing`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Integration Testing</h2>
  <p style="font-size: 16px; color: #34495e;">
    Integration Testing is a crucial phase of software testing where individual units or components are combined and tested as a group. The goal is to verify the interaction between different modules and ensure they work together as expected. It helps identify issues related to data flow, communication, and functionality across integrated components.
  </p>

  <h3 style="color: #16a085;">Why is Integration Testing Important?</h3>
  <p style="color: #2c3e50;">
    Integration Testing plays a vital role in ensuring software reliability and smooth functionality across modules. Its key benefits include:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Detects Interface Issues</strong>: Ensures seamless communication between different components.</li>
    <li><strong>Improves System Reliability</strong>: Helps in early detection of data flow errors.</li>
    <li><strong>Enhances Functional Accuracy</strong>: Validates whether integrated modules function as expected.</li>
    <li><strong>Reduces Debugging Complexity</strong>: Identifies issues at an early stage, reducing cost and effort in debugging.</li>
    <li><strong>Ensures Data Consistency</strong>: Tests data exchange between modules for correctness.</li>
  </ul>

  <h3 style="color: #e67e22;">Types of Integration Testing</h3>
  <p style="color: #2c3e50;">
    There are several approaches to performing Integration Testing:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Big Bang Integration Testing</strong>: All modules are integrated and tested together at once.</li>
    <li><strong>Incremental Integration Testing</strong>: Modules are tested step by step as they are integrated.</li>
    <li><strong>Top-Down Integration Testing</strong>: Testing starts from the top-level modules and progresses downward.</li>
    <li><strong>Bottom-Up Integration Testing</strong>: Testing begins with lower-level modules and moves upward.</li>
    <li><strong>Hybrid (Sandwich) Integration Testing</strong>: A combination of top-down and bottom-up approaches.</li>
  </ul>

  <h3 style="color: #2980b9;">Integration Testing Techniques</h3>
  <p style="color: #2c3e50;">
    Different techniques are used to perform integration testing efficiently:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Interface Testing</strong>: Ensures data exchange between modules is correct.</li>
    <li><strong>Data Flow Testing</strong>: Verifies data input and output between integrated units.</li>
    <li><strong>API Testing</strong>: Tests communication between services using APIs.</li>
    <li><strong>Middleware Testing</strong>: Examines the interaction between databases and applications.</li>
  </ul>

  <h3 style="color: #8e44ad;">Example: Integration Testing in Java with JUnit</h3>
  <p style="color: #2c3e50;">
    JUnit is a popular framework for writing integration tests in Java applications. Below is an example demonstrating an integration test for a user authentication service.
  </p>

  <h4 style="color: #8e44ad;">1. Add JUnit and Spring Boot Dependencies</h4>
  <p style="color: #2c3e50;">
    If you're using Maven, include the following dependencies in your <code>pom.xml</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
          &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
          &lt;scope&gt;test&lt;/scope&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Create a Sample Authentication Service</h4>
  <p style="color: #2c3e50;">
    Below is a simple authentication service that checks if a user exists.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.Arrays;
      import java.util.List;

      @Service
      public class AuthService {
          private List&lt;String&gt; users = Arrays.asList("admin", "user", "test");

          public boolean authenticate(String username) {
              return users.contains(username);
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Write an Integration Test</h4>
  <p style="color: #2c3e50;">
    The integration test checks if the authentication service works correctly.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import static org.junit.jupiter.api.Assertions.*;
      import org.junit.jupiter.api.Test;
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.boot.test.context.SpringBootTest;

      @SpringBootTest
      public class AuthServiceTest {

          @Autowired
          private AuthService authService;

          @Test
          public void testAuthentication() {
              assertTrue(authService.authenticate("admin"));
              assertFalse(authService.authenticate("unknownUser"));
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Run the Test</h4>
  <p style="color: #2c3e50;">
    Execute the test using JUnit, and it will validate the authentication service.
  </p>

  <h3 style="color: #d35400;">Best Practices for Integration Testing</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use mock data to simulate real-world scenarios.</li>
    <li>Ensure database integrity by cleaning up test data after execution.</li>
    <li>Automate integration tests to catch issues early.</li>
    <li>Use logging to track test execution and failures.</li>
    <li>Test error handling and exception scenarios.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Integration Testing ensures that different modules of an application work together seamlessly. By using techniques like top-down, bottom-up, and API testing, developers can identify interface issues early. With tools like JUnit and Spring Boot Test, integration tests can be automated for efficient debugging and reliable application performance.
  </p>
</div>
`
},
{
  title:`Security`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Security</h2>
  <p style="font-size: 16px; color: #34495e;">
    Security is the practice of protecting systems, networks, and data from cyber threats, unauthorized access, and attacks. In the digital world, security plays a critical role in ensuring confidentiality, integrity, and availability of information. Organizations and individuals must implement strong security measures to safeguard their sensitive data from hackers, malware, and other cyber threats.
  </p>

  <h3 style="color: #16a085;">Why is Security Important?</h3>
  <p style="color: #2c3e50;">
    Security is essential in preventing data breaches, cyber attacks, and financial losses. Here are key reasons why security is crucial:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Protects Sensitive Data</strong>: Prevents unauthorized access to personal and business information.</li>
    <li><strong>Ensures Business Continuity</strong>: Helps prevent downtime and data loss due to cyber threats.</li>
    <li><strong>Maintains Customer Trust</strong>: Secure systems build customer confidence in businesses.</li>
    <li><strong>Prevents Financial Loss</strong>: Reduces risks of cyber fraud and ransomware attacks.</li>
    <li><strong>Complies with Regulations</strong>: Organizations must follow security laws like GDPR and HIPAA.</li>
  </ul>

  <h3 style="color: #e67e22;">Types of Security</h3>
  <p style="color: #2c3e50;">
    Security is categorized into different types based on protection areas:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Network Security</strong>: Protects networks from cyber threats using firewalls, intrusion detection, and encryption.</li>
    <li><strong>Application Security</strong>: Secures software applications from vulnerabilities like SQL injection and XSS attacks.</li>
    <li><strong>Information Security</strong>: Protects sensitive data from unauthorized access and leaks.</li>
    <li><strong>Endpoint Security</strong>: Safeguards devices like computers, mobile phones, and IoT devices.</li>
    <li><strong>Cloud Security</strong>: Ensures the safety of data and services stored in cloud environments.</li>
    <li><strong>Physical Security</strong>: Protects hardware and infrastructure from theft or damage.</li>
  </ul>

  <h3 style="color: #2980b9;">Common Cyber Threats</h3>
  <p style="color: #2c3e50;">
    Organizations and individuals face various cyber threats, including:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Malware</strong>: Malicious software like viruses, ransomware, and spyware that disrupt systems.</li>
    <li><strong>Phishing</strong>: Deceptive emails or messages trick users into revealing personal information.</li>
    <li><strong>Denial-of-Service (DoS) Attacks</strong>: Overloads systems to make them unavailable.</li>
    <li><strong>SQL Injection</strong>: Attackers manipulate databases by injecting malicious SQL queries.</li>
    <li><strong>Man-in-the-Middle (MitM) Attacks</strong>: Intercepts communication between two parties.</li>
    <li><strong>Password Attacks</strong>: Hackers attempt to crack passwords using brute force or dictionary attacks.</li>
  </ul>

  <h3 style="color: #8e44ad;">Security Best Practices</h3>
  <p style="color: #2c3e50;">
    To ensure robust security, organizations and individuals should follow best practices:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use Strong Passwords</strong>: Implement complex passwords and enable multi-factor authentication (MFA).</li>
    <li><strong>Regular Software Updates</strong>: Keep software and systems updated to patch vulnerabilities.</li>
    <li><strong>Implement Firewalls</strong>: Use firewalls to monitor and filter network traffic.</li>
    <li><strong>Encrypt Sensitive Data</strong>: Protect data using encryption to prevent unauthorized access.</li>
    <li><strong>Backup Data Regularly</strong>: Maintain backups to restore data in case of cyber attacks.</li>
    <li><strong>Employee Training</strong>: Educate employees on security threats and safe online practices.</li>
  </ul>

  <h3 style="color: #8e44ad;">Example: Secure Login System in Java</h3>
  <p style="color: #2c3e50;">
    Below is an example of a secure user authentication system using Java and BCrypt password hashing.
  </p>

  <h4 style="color: #8e44ad;">1. Add Dependencies</h4>
  <p style="color: #2c3e50;">
    Include the following dependency in <code>pom.xml</code> for password hashing.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
          &lt;artifactId&gt;spring-security-crypto&lt;/artifactId&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Hash Passwords Using BCrypt</h4>
  <p style="color: #2c3e50;">
    BCrypt is a secure way to hash passwords before storing them.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

      public class SecurityDemo {
          public static void main(String[] args) {
              BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
              String rawPassword = "securePassword123";
              String hashedPassword = encoder.encode(rawPassword);
              System.out.println("Hashed Password: " + hashedPassword);
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Verify Passwords</h4>
  <p style="color: #2c3e50;">
    The hashed password can be verified using the <code>matches()</code> method.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String rawPassword = "securePassword123";
      boolean isMatch = encoder.matches(rawPassword, hashedPassword);
      System.out.println("Password Match: " + isMatch);
    </code>
  </pre>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Security is an essential aspect of modern technology, protecting data, systems, and users from cyber threats. By following best practices like strong authentication, encryption, and regular updates, individuals and organizations can enhance their security posture. Implementing secure coding techniques, such as hashing passwords with BCrypt, helps in reducing vulnerabilities and improving overall system security.
  </p>
</div>
`
},
{
  title:`Caching`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Caching</h2>
  <p style="font-size: 16px; color: #34495e;">
    Caching is a technique used to store frequently accessed data temporarily to reduce response time and improve performance. By keeping a copy of data in a faster-access storage layer, caching minimizes redundant computations, network requests, and database queries, enhancing the overall efficiency of applications.
  </p>

  <h3 style="color: #16a085;">Why is Caching Important?</h3>
  <p style="color: #2c3e50;">
    Caching improves system performance and scalability by:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Reducing Latency</strong>: Speeds up data retrieval by storing frequently used data in memory.</li>
    <li><strong>Minimizing Database Load</strong>: Reduces the number of database queries, preventing performance bottlenecks.</li>
    <li><strong>Improving Scalability</strong>: Helps applications handle increased user loads efficiently.</li>
    <li><strong>Enhancing User Experience</strong>: Faster responses lead to a smoother experience for end users.</li>
    <li><strong>Optimizing Bandwidth Usage</strong>: Reduces redundant network requests by caching API responses.</li>
  </ul>

  <h3 style="color: #e67e22;">Types of Caching</h3>
  <p style="color: #2c3e50;">
    Caching can be implemented at different levels, including:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Client-Side Caching</strong>: Stores data on the client, such as browser cache and local storage.</li>
    <li><strong>Server-Side Caching</strong>: Caches data at the server level to optimize backend performance.</li>
    <li><strong>Database Caching</strong>: Stores frequently queried results in memory to reduce database load.</li>
    <li><strong>Application Caching</strong>: Temporarily stores processed data in memory (e.g., using in-memory stores like Redis or Memcached).</li>
    <li><strong>CDN (Content Delivery Network) Caching</strong>: Distributes cached content across multiple servers worldwide for faster access.</li>
  </ul>

  <h3 style="color: #2980b9;">Common Caching Strategies</h3>
  <p style="color: #2c3e50;">
    Different caching strategies help balance performance and data accuracy:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Write-Through Cache</strong>: Data is written to both the cache and the database simultaneously.</li>
    <li><strong>Write-Back Cache</strong>: Data is written to the cache first and later updated in the database.</li>
    <li><strong>Cache-aside (Lazy Loading)</strong>: Data is loaded into the cache only when requested.</li>
    <li><strong>Time-to-Live (TTL)</strong>: Cached data expires after a predefined time to ensure freshness.</li>
    <li><strong>Least Recently Used (LRU)</strong>: The oldest unused data is removed when the cache reaches its limit.</li>
  </ul>

  <h3 style="color: #8e44ad;">Example: Caching in Java Using Redis</h3>
  <p style="color: #2c3e50;">
    Redis is a popular in-memory data store used for caching. Below is an example of how to integrate Redis caching in a Java application using Spring Boot.
  </p>

  <h4 style="color: #8e44ad;">1. Add Dependencies</h4>
  <p style="color: #2c3e50;">
    Include the following dependencies in <code>pom.xml</code> for Redis integration.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
          &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Enable Caching</h4>
  <p style="color: #2c3e50;">
    Enable caching in the Spring Boot application by adding the <code>@EnableCaching</code> annotation.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.cache.annotation.EnableCaching;
      import org.springframework.context.annotation.Configuration;

      @Configuration
      @EnableCaching
      public class CacheConfig {
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Implement Redis Caching</h4>
  <p style="color: #2c3e50;">
    Use the <code>@Cacheable</code> annotation to cache method results.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.cache.annotation.Cacheable;
      import org.springframework.stereotype.Service;

      @Service
      public class ProductService {
          
          @Cacheable(value = "products", key = "#id")
          public Product getProductById(String id) {
              // Simulating a database call
              return new Product(id, "Sample Product", 100.0);
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Caching is a powerful technique for optimizing application performance and scalability. By using caching strategies like write-through, lazy loading, and TTL, applications can improve response times and reduce server load. Tools like Redis and Memcached provide efficient caching mechanisms, helping developers build high-performance applications.
  </p>
</div>
`
},
{
  title:`External API Calls`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding External API Calls</h2>
  <p style="font-size: 16px; color: #34495e;">
    External API calls refer to requests made from an application to third-party services or external servers to retrieve or send data. These APIs (Application Programming Interfaces) enable seamless integration with external systems, allowing applications to access functionalities like weather updates, payment processing, authentication, and more.
  </p>

  <h3 style="color: #16a085;">Why Are External API Calls Important?</h3>
  <p style="color: #2c3e50;">
    External API calls play a crucial role in modern software development by:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Enhancing Functionality</strong>: Applications can integrate features like maps, payments, or social logins without building them from scratch.</li>
    <li><strong>Data Exchange</strong>: Enables communication between different applications and services.</li>
    <li><strong>Scalability</strong>: Reduces development effort by leveraging third-party services.</li>
    <li><strong>Real-Time Data</strong>: Provides access to up-to-date information from external sources.</li>
  </ul>

  <h3 style="color: #e67e22;">Types of External API Calls</h3>
  <p style="color: #2c3e50;">
    APIs can be categorized based on their architecture and communication methods:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>REST API (Representational State Transfer)</strong>: Uses HTTP methods like GET, POST, PUT, DELETE.</li>
    <li><strong>SOAP API (Simple Object Access Protocol)</strong>: Uses XML-based communication.</li>
    <li><strong>GraphQL API</strong>: Allows clients to request specific data fields, reducing over-fetching.</li>
    <li><strong>Webhooks</strong>: Event-driven API calls that send data when a specific action occurs.</li>
  </ul>

  <h3 style="color: #2980b9;">Common Challenges in External API Calls</h3>
  <p style="color: #2c3e50;">
    While API calls improve functionality, they also come with challenges:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Network Latency</strong>: API response time depends on internet speed and server performance.</li>
    <li><strong>Rate Limits</strong>: Many APIs impose limits on the number of requests per second/minute.</li>
    <li><strong>Authentication</strong>: APIs often require authentication using API keys, OAuth, or tokens.</li>
    <li><strong>Error Handling</strong>: APIs may return errors like 404 (Not Found) or 500 (Server Error).</li>
  </ul>

  <h3 style="color: #8e44ad;">Example: Making an External API Call in Java Using RestTemplate</h3>
  <p style="color: #2c3e50;">
    Below is an example of calling an external API in a Java Spring Boot application using <code>RestTemplate</code>.
  </p>

  <h4 style="color: #8e44ad;">1. Add Dependencies</h4>
  <p style="color: #2c3e50;">
    Add the required Spring Boot dependencies in <code>pom.xml</code>:
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
          &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Create a Service for API Calls</h4>
  <p style="color: #2c3e50;">
    Implement a service to fetch data from an external API.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import org.springframework.web.client.RestTemplate;

      @Service
      public class ApiService {
          private final RestTemplate restTemplate = new RestTemplate();

          public String getWeatherData() {
              String apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key";
              return restTemplate.getForObject(apiUrl, String.class);
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Create a Controller to Call the API</h4>
  <p style="color: #2c3e50;">
    Define an endpoint that fetches and returns data from the external API.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestMapping;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      @RequestMapping("/api")
      public class ApiController {
          private final ApiService apiService;

          public ApiController(ApiService apiService) {
              this.apiService = apiService;
          }

          @GetMapping("/weather")
          public String getWeather() {
              return apiService.getWeatherData();
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for External API Calls</h3>
  <p style="color: #2c3e50;">
    To ensure reliability and efficiency, follow these best practices:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use Caching</strong>: Reduce unnecessary API calls by storing responses temporarily.</li>
    <li><strong>Implement Rate Limiting</strong>: Avoid exceeding API request limits to prevent being blocked.</li>
    <li><strong>Use Circuit Breakers</strong>: Handle failures gracefully using tools like <code>Resilience4j</code>.</li>
    <li><strong>Secure API Keys</strong>: Never expose API keys in the frontend; store them in environment variables.</li>
    <li><strong>Handle Errors Properly</strong>: Implement robust error handling for API failures.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    External API calls allow applications to integrate with third-party services efficiently. By understanding different types of APIs, handling potential challenges, and following best practices, developers can ensure seamless API communication in their applications. Whether fetching weather data, processing payments, or integrating authentication, external APIs are a crucial part of modern software development.
  </p>
</div>
`
},
{
  title:`Feign Client`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Feign Client in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Feign Client is a declarative web service client in Spring Boot that simplifies calling REST APIs by reducing boilerplate code. Instead of manually creating HTTP requests, Feign provides a way to define an interface and automatically map it to an external service.
  </p>

  <h3 style="color: #16a085;">Why Use Feign Client?</h3>
  <p style="color: #2c3e50;">
    Feign Client is widely used in microservices architecture due to its benefits:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Declarative Syntax</strong>: API calls are defined as interfaces, making the code more readable.</li>
    <li><strong>Integration with Spring Boot</strong>: Works seamlessly with <code>Spring Cloud</code> and <code>Load Balancer</code>.</li>
    <li><strong>Built-in Error Handling</strong>: Reduces the need for manual exception handling.</li>
    <li><strong>Support for Load Balancing</strong>: Works with Ribbon and Eureka for service discovery.</li>
    <li><strong>Interceptors and Logging</strong>: Allows customization of request headers and response handling.</li>
  </ul>

  <h3 style="color: #e67e22;">How to Use Feign Client in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Follow these steps to integrate Feign Client into a Spring Boot application.
  </p>

  <h4 style="color: #e67e22;">1. Add Dependencies</h4>
  <p style="color: #2c3e50;">
    Include the required dependencies in <code>pom.xml</code>:
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
          &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #e67e22;">2. Enable Feign Client</h4>
  <p style="color: #2c3e50;">
    In your main application class, enable Feign Client using the <code>@EnableFeignClients</code> annotation.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.boot.SpringApplication;
      import org.springframework.boot.autoconfigure.SpringBootApplication;
      import org.springframework.cloud.openfeign.EnableFeignClients;

      @SpringBootApplication
      @EnableFeignClients
      public class FeignClientApplication {
          public static void main(String[] args) {
              SpringApplication.run(FeignClientApplication.class, args);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">3. Create a Feign Client Interface</h4>
  <p style="color: #2c3e50;">
    Define an interface with <code>@FeignClient</code> annotation to specify the external API.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.cloud.openfeign.FeignClient;
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.PathVariable;

      @FeignClient(name = "weather-service", url = "https://api.openweathermap.org/data/2.5")
      public interface WeatherClient {
          @GetMapping("/weather?q={city}&appid={apiKey}")
          String getWeather(@PathVariable("city") String city, @PathVariable("apiKey") String apiKey);
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">4. Use the Feign Client in a Service</h4>
  <p style="color: #2c3e50;">
    Inject the Feign Client into a service and use it to make API calls.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;

      @Service
      public class WeatherService {
          private final WeatherClient weatherClient;

          public WeatherService(WeatherClient weatherClient) {
              this.weatherClient = weatherClient;
          }

          public String getWeather(String city) {
              String apiKey = "your_api_key";
              return weatherClient.getWeather(city, apiKey);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">5. Create a Controller</h4>
  <p style="color: #2c3e50;">
    Define a REST controller that calls the Feign Client.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.PathVariable;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      public class WeatherController {
          private final WeatherService weatherService;

          public WeatherController(WeatherService weatherService) {
              this.weatherService = weatherService;
          }

          @GetMapping("/weather/{city}")
          public String getWeather(@PathVariable String city) {
              return weatherService.getWeather(city);
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Best Practices for Using Feign Client</h3>
  <p style="color: #2c3e50;">
    To ensure efficiency and security, follow these best practices:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use Load Balancing</strong>: Enable Ribbon or Spring Cloud LoadBalancer for better performance.</li>
    <li><strong>Handle Timeouts</strong>: Configure timeouts using <code>feign.client.config.default.connectTimeout</code>.</li>
    <li><strong>Implement Circuit Breakers</strong>: Use <code>Resilience4j</code> or <code>Hystrix</code> to handle failures.</li>
    <li><strong>Secure API Calls</strong>: Store API keys in environment variables or configuration files.</li>
    <li><strong>Enable Logging</strong>: Use <code>logging.level.feign=DEBUG</code> for debugging API requests.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Feign Client simplifies external API calls in Spring Boot applications by providing a declarative approach. It reduces boilerplate code, improves readability, and integrates well with microservices. By following best practices like load balancing, circuit breaking, and logging, developers can enhance API performance and reliability.
  </p>
</div>
`
},
{
  title:`Asynchronous Processing`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Asynchronous Processing in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Asynchronous processing allows applications to execute tasks in the background without blocking the main thread. In Spring Boot, this is achieved using the <code>@Async</code> annotation, which helps improve performance, scalability, and responsiveness in web applications.
  </p>

  <h3 style="color: #16a085;">Why Use Asynchronous Processing?</h3>
  <p style="color: #2c3e50;">
    Asynchronous processing is beneficial in many scenarios, including:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Improved Performance</strong>: Tasks are executed in parallel, reducing response time.</li>
    <li><strong>Non-Blocking Operations</strong>: The main thread is free to handle other requests.</li>
    <li><strong>Better User Experience</strong>: Ensures that long-running tasks do not slow down the application.</li>
    <li><strong>Efficient Resource Utilization</strong>: Reduces CPU and memory bottlenecks.</li>
  </ul>

  <h3 style="color: #e67e22;">How to Implement Asynchronous Processing in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Follow these steps to enable and use asynchronous processing in a Spring Boot application.
  </p>

  <h4 style="color: #e67e22;">1. Enable Async Support</h4>
  <p style="color: #2c3e50;">
    First, enable async support by adding the <code>@EnableAsync</code> annotation in the main application class.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.boot.SpringApplication;
      import org.springframework.boot.autoconfigure.SpringBootApplication;
      import org.springframework.scheduling.annotation.EnableAsync;

      @SpringBootApplication
      @EnableAsync
      public class AsyncApplication {
          public static void main(String[] args) {
              SpringApplication.run(AsyncApplication.class, args);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">2. Create an Asynchronous Method</h4>
  <p style="color: #2c3e50;">
    Mark methods with the <code>@Async</code> annotation to make them run asynchronously.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.scheduling.annotation.Async;
      import org.springframework.stereotype.Service;

      @Service
      public class EmailService {
          @Async
          public void sendEmail(String recipient) {
              System.out.println("Sending email to " + recipient + " - " + Thread.currentThread().getName());
              try {
                  Thread.sleep(3000); // Simulate email sending delay
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
              System.out.println("Email sent to " + recipient);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">3. Call the Asynchronous Method</h4>
  <p style="color: #2c3e50;">
    Inject the async-enabled service into a controller and call the method.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestParam;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      public class EmailController {
          private final EmailService emailService;

          public EmailController(EmailService emailService) {
              this.emailService = emailService;
          }

          @GetMapping("/send-email")
          public String sendEmail(@RequestParam String recipient) {
              emailService.sendEmail(recipient);
              return "Email is being sent asynchronously to " + recipient;
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">4. Using CompletableFuture for Async Processing</h4>
  <p style="color: #2c3e50;">
    The <code>CompletableFuture</code> class allows handling async results.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.scheduling.annotation.Async;
      import org.springframework.stereotype.Service;
      import java.util.concurrent.CompletableFuture;

      @Service
      public class DataService {
          @Async
          public CompletableFuture<String> fetchData() {
              try {
                  Thread.sleep(2000); // Simulate delay
              } catch (InterruptedException e) {
                  e.printStackTrace();
              }
              return CompletableFuture.completedFuture("Data processed");
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">5. Calling an Async Method with CompletableFuture</h4>
  <p style="color: #2c3e50;">
    Fetching async data in a controller:
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RestController;
      import java.util.concurrent.CompletableFuture;

      @RestController
      public class DataController {
          private final DataService dataService;

          public DataController(DataService dataService) {
              this.dataService = dataService;
          }

          @GetMapping("/fetch-data")
          public CompletableFuture<String> fetchData() {
              return dataService.fetchData();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Best Practices for Asynchronous Processing</h3>
  <p style="color: #2c3e50;">
    To ensure efficient async execution, follow these best practices:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Define Thread Pool</strong>: Use <code>TaskExecutor</code> to manage concurrent threads.</li>
    <li><strong>Handle Exceptions</strong>: Use <code>CompletableFuture.exceptionally()</code> to catch errors.</li>
    <li><strong>Avoid Overloading Threads</strong>: Use proper thread pool configurations.</li>
    <li><strong>Use Asynchronous Logging</strong>: Ensure logging does not block the main thread.</li>
    <li><strong>Monitor Async Tasks</strong>: Use monitoring tools to track async task performance.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Asynchronous processing in Spring Boot allows better performance, responsiveness, and resource utilization. By using the <code>@Async</code> annotation and <code>CompletableFuture</code>, developers can efficiently handle background tasks without blocking the main thread.
  </p>
</div>
`
},
{
title:`Event-Driven Communication`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Event-Driven Communication in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Event-driven communication is an architectural pattern where components communicate by producing and consuming events. Instead of direct method calls, services react to changes asynchronously, making the system more scalable and loosely coupled.
  </p>

  <h3 style="color: #16a085;">Why Use Event-Driven Communication?</h3>
  <p style="color: #2c3e50;">
    Event-driven communication offers several benefits, including:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Loose Coupling</strong>: Services interact without being tightly dependent on each other.</li>
    <li><strong>Scalability</strong>: Events allow horizontal scaling as multiple services handle different concerns.</li>
    <li><strong>Asynchronous Processing</strong>: Events can be processed in the background, improving system performance.</li>
    <li><strong>Resilience</strong>: If an event listener fails, it can retry processing later without affecting other services.</li>
  </ul>

  <h3 style="color: #e67e22;">How to Implement Event-Driven Communication in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Spring Boot provides a built-in event publishing mechanism using <code>ApplicationEvent</code> and <code>ApplicationListener</code>.
  </p>

  <h4 style="color: #e67e22;">1. Create a Custom Event</h4>
  <p style="color: #2c3e50;">
    Define a custom event class that extends <code>ApplicationEvent</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.ApplicationEvent;

      public class OrderCreatedEvent extends ApplicationEvent {
          private final String orderId;

          public OrderCreatedEvent(Object source, String orderId) {
              super(source);
              this.orderId = orderId;
          }

          public String getOrderId() {
              return orderId;
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">2. Publish an Event</h4>
  <p style="color: #2c3e50;">
    Use <code>ApplicationEventPublisher</code> to publish the event.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.ApplicationEventPublisher;
      import org.springframework.stereotype.Service;

      @Service
      public class OrderService {
          private final ApplicationEventPublisher eventPublisher;

          public OrderService(ApplicationEventPublisher eventPublisher) {
              this.eventPublisher = eventPublisher;
          }

          public void createOrder(String orderId) {
              System.out.println("Order Created: " + orderId);
              eventPublisher.publishEvent(new OrderCreatedEvent(this, orderId));
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">3. Listen for Events</h4>
  <p style="color: #2c3e50;">
    Create an event listener using <code>@EventListener</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.event.EventListener;
      import org.springframework.stereotype.Component;

      @Component
      public class OrderEventListener {
          @EventListener
          public void handleOrderCreatedEvent(OrderCreatedEvent event) {
              System.out.println("Processing order: " + event.getOrderId());
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">4. Trigger the Event from a Controller</h4>
  <p style="color: #2c3e50;">
    Expose an endpoint to create orders and trigger the event.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.web.bind.annotation.GetMapping;
      import org.springframework.web.bind.annotation.RequestParam;
      import org.springframework.web.bind.annotation.RestController;

      @RestController
      public class OrderController {
          private final OrderService orderService;

          public OrderController(OrderService orderService) {
              this.orderService = orderService;
          }

          @GetMapping("/create-order")
          public String createOrder(@RequestParam String orderId) {
              orderService.createOrder(orderId);
              return "Order creation event published!";
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Event-Driven Communication with Message Brokers</h3>
  <p style="color: #2c3e50;">
    In microservices architectures, events are often handled using message brokers like Kafka or RabbitMQ instead of in-memory events.
  </p>

  <h4 style="color: #e67e22;">1. Kafka Event Publishing</h4>
  <p style="color: #2c3e50;">
    You can publish events to Apache Kafka using the <code>KafkaTemplate</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.kafka.core.KafkaTemplate;
      import org.springframework.stereotype.Service;

      @Service
      public class OrderEventProducer {
          private final KafkaTemplate&lt;String, String&gt; kafkaTemplate;

          public OrderEventProducer(KafkaTemplate&lt;String, String&gt; kafkaTemplate) {
              this.kafkaTemplate = kafkaTemplate;
          }

          public void sendEvent(String orderId) {
              kafkaTemplate.send("order-events", orderId);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">2. Kafka Event Consumption</h4>
  <p style="color: #2c3e50;">
    Consumers listen for events on a Kafka topic.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.apache.kafka.clients.consumer.ConsumerRecord;
      import org.springframework.kafka.annotation.KafkaListener;
      import org.springframework.stereotype.Component;

      @Component
      public class OrderEventConsumer {
          @KafkaListener(topics = "order-events", groupId = "order-group")
          public void listen(ConsumerRecord&lt;String, String&gt; record) {
              System.out.println("Received Order Event: " + record.value());
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Event-driven communication makes applications more scalable and responsive by enabling asynchronous processing. Whether using Spring's built-in event system or integrating with Kafka/RabbitMQ, implementing event-driven architecture enhances the flexibility and resilience of modern applications.
  </p>
</div>
`
},
{
  title:`Microservices Communication`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding Microservices Communication in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Microservices architecture involves breaking down a monolithic application into smaller, independent services that communicate with each other. These services must exchange data effectively while maintaining loose coupling and scalability.
  </p>

  <h3 style="color: #16a085;">Types of Microservices Communication</h3>
  <p style="color: #2c3e50;">
    Microservices communicate using either synchronous or asynchronous methods:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Synchronous Communication</strong>: The caller waits for a response (e.g., REST, gRPC).</li>
    <li><strong>Asynchronous Communication</strong>: The caller does not wait for an immediate response (e.g., Messaging, Event-Driven Architecture).</li>
  </ul>

  <h3 style="color: #e67e22;">1. Synchronous Communication (REST APIs)</h3>
  <p style="color: #2c3e50;">
    The most common way microservices communicate is through RESTful APIs using HTTP.
  </p>

  <h4 style="color: #e67e22;">Using RestTemplate (Deprecated in Spring Boot 3)</h4>
  <p style="color: #2c3e50;">
    <code>RestTemplate</code> was used for synchronous communication but is now replaced by <code>WebClient</code>.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import org.springframework.web.client.RestTemplate;

      @Service
      public class OrderService {
          private final RestTemplate restTemplate = new RestTemplate();

          public String getCustomerDetails(String customerId) {
              return restTemplate.getForObject("http://customer-service/customers/" + customerId, String.class);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">Using WebClient (Recommended)</h4>
  <p style="color: #2c3e50;">
    Spring WebFlux <code>WebClient</code> is a non-blocking alternative to RestTemplate.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import org.springframework.web.reactive.function.client.WebClient;

      @Service
      public class OrderService {
          private final WebClient webClient = WebClient.create("http://customer-service");

          public String getCustomerDetails(String customerId) {
              return webClient.get()
                      .uri("/customers/{id}", customerId)
                      .retrieve()
                      .bodyToMono(String.class)
                      .block();
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">2. Asynchronous Communication (Message Queues)</h3>
  <p style="color: #2c3e50;">
    Asynchronous messaging allows microservices to communicate without waiting for a direct response.
  </p>

  <h4 style="color: #e67e22;">Using RabbitMQ</h4>
  <p style="color: #2c3e50;">
    RabbitMQ is a message broker used for asynchronous communication.
  </p>

  <h5 style="color: #e67e22;">Producer</h5>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.amqp.rabbit.core.RabbitTemplate;
      import org.springframework.stereotype.Service;

      @Service
      public class OrderEventPublisher {
          private final RabbitTemplate rabbitTemplate;

          public OrderEventPublisher(RabbitTemplate rabbitTemplate) {
              this.rabbitTemplate = rabbitTemplate;
          }

          public void sendOrderCreatedEvent(String orderId) {
              rabbitTemplate.convertAndSend("order-exchange", "order.created", orderId);
          }
      }
    </code>
  </pre>

  <h5 style="color: #e67e22;">Consumer</h5>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.amqp.rabbit.annotation.RabbitListener;
      import org.springframework.stereotype.Component;

      @Component
      public class OrderEventListener {
          @RabbitListener(queues = "order-queue")
          public void handleOrderCreatedEvent(String orderId) {
              System.out.println("Processing order: " + orderId);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">Using Apache Kafka</h4>
  <p style="color: #2c3e50;">
    Kafka is a distributed streaming platform used for event-driven communication.
  </p>

  <h5 style="color: #e67e22;">Kafka Producer</h5>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.kafka.core.KafkaTemplate;
      import org.springframework.stereotype.Service;

      @Service
      public class OrderEventProducer {
          private final KafkaTemplate&lt;String, String&gt; kafkaTemplate;

          public OrderEventProducer(KafkaTemplate&lt;String, String&gt; kafkaTemplate) {
              this.kafkaTemplate = kafkaTemplate;
          }

          public void sendOrderEvent(String orderId) {
              kafkaTemplate.send("order-events", orderId);
          }
      }
    </code>
  </pre>

  <h5 style="color: #e67e22;">Kafka Consumer</h5>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.apache.kafka.clients.consumer.ConsumerRecord;
      import org.springframework.kafka.annotation.KafkaListener;
      import org.springframework.stereotype.Component;

      @Component
      public class OrderEventConsumer {
          @KafkaListener(topics = "order-events", groupId = "order-group")
          public void listen(ConsumerRecord&lt;String, String&gt; record) {
              System.out.println("Received Order Event: " + record.value());
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Choosing the Right Communication Strategy</h3>
  <p style="color: #2c3e50;">
    - Use **REST APIs** for synchronous interactions when real-time responses are needed.<br>
    - Use **RabbitMQ/Kafka** for asynchronous event-driven communication to improve scalability.<br>
    - Use **gRPC** for high-performance, low-latency calls between microservices.
  </p>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Effective microservices communication is crucial for building scalable applications. By using REST APIs for synchronous calls and message brokers like Kafka or RabbitMQ for asynchronous events, developers can design resilient and efficient systems.
  </p>
</div>
`
},
{
  title:`Large Data Handling`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Efficient Large Data Handling in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Handling large datasets efficiently is crucial for building high-performance applications. In Spring Boot, proper data management techniques help prevent memory overload, improve response times, and ensure scalability.
  </p>

  <h3 style="color: #16a085;">Challenges in Large Data Handling</h3>
  <p style="color: #2c3e50;">
    When dealing with large datasets, applications may face the following issues:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>High memory consumption due to loading large datasets at once.</li>
    <li>Slow response times due to inefficient database queries.</li>
    <li>Network congestion when transferring large payloads.</li>
    <li>Scalability issues in monolithic architectures.</li>
  </ul>

  <h3 style="color: #e67e22;">1. Pagination for Large Data Queries</h3>
  <p style="color: #2c3e50;">
    Instead of fetching all records at once, use pagination to retrieve data in smaller chunks.
  </p>

  <h4 style="color: #e67e22;">Using Spring Data JPA Pagination</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.domain.Page;
      import org.springframework.data.domain.Pageable;
      import org.springframework.data.jpa.repository.JpaRepository;

      public interface ProductRepository extends JpaRepository<Product, Long> {
          Page<Product> findAll(Pageable pageable);
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">Service Method for Pagination</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.domain.Page;
      import org.springframework.data.domain.PageRequest;
      import org.springframework.stereotype.Service;

      @Service
      public class ProductService {
          private final ProductRepository productRepository;

          public ProductService(ProductRepository productRepository) {
              this.productRepository = productRepository;
          }

          public Page<Product> getProducts(int page, int size) {
              return productRepository.findAll(PageRequest.of(page, size));
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">2. Streaming Large Data Using Spring Data JPA</h3>
  <p style="color: #2c3e50;">
    Streaming is useful when dealing with millions of records to avoid memory overload.
  </p>

  <h4 style="color: #e67e22;">Using Java Streams for Efficient Query Execution</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.Query;
      import org.springframework.data.repository.CrudRepository;
      import java.util.stream.Stream;

      public interface ProductRepository extends CrudRepository<Product, Long> {
          @Query("SELECT p FROM Product p")
          Stream<Product> streamAllProducts();
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">3. Batch Processing for Large Data</h3>
  <p style="color: #2c3e50;">
    Instead of inserting or updating records one by one, use batch processing to optimize performance.
  </p>

  <h4 style="color: #e67e22;">Using JDBC Batch Update</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.jdbc.core.JdbcTemplate;
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class ProductService {
          private final JdbcTemplate jdbcTemplate;

          public ProductService(JdbcTemplate jdbcTemplate) {
              this.jdbcTemplate = jdbcTemplate;
          }

          public void batchInsert(List<Product> products) {
              String sql = "INSERT INTO products (name, price) VALUES (?, ?)";
              jdbcTemplate.batchUpdate(sql, products, 1000, (ps, product) -> {
                  ps.setString(1, product.getName());
                  ps.setBigDecimal(2, product.getPrice());
              });
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">4. Asynchronous Data Processing</h3>
  <p style="color: #2c3e50;">
    When dealing with heavy computations, using asynchronous processing improves efficiency.
  </p>

  <h4 style="color: #e67e22;">Using @Async in Spring Boot</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.scheduling.annotation.Async;
      import org.springframework.stereotype.Service;

      @Service
      public class DataProcessingService {
          @Async
          public void processLargeData() {
              // Perform heavy computations here
              System.out.println("Processing data asynchronously...");
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">5. Using Caching to Improve Performance</h3>
  <p style="color: #2c3e50;">
    Caching helps reduce repeated queries by storing frequently accessed data in memory.
  </p>

  <h4 style="color: #e67e22;">Using Spring Boot Cache</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.cache.annotation.Cacheable;
      import org.springframework.stereotype.Service;

      @Service
      public class ProductService {
          @Cacheable("products")
          public List<Product> getAllProducts() {
              return productRepository.findAll();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Choosing the Right Strategy</h3>
  <p style="color: #2c3e50;">
    - Use **pagination** to limit query results.<br>
    - Use **streaming** for processing large datasets efficiently.<br>
    - Use **batch processing** for bulk inserts and updates.<br>
    - Use **asynchronous processing** for long-running tasks.<br>
    - Use **caching** to store frequently accessed data.
  </p>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Efficient handling of large data is essential for high-performance applications. By leveraging pagination, batch processing, asynchronous execution, and caching, developers can ensure scalability and responsiveness in Spring Boot applications.
  </p>
</div>
`
},
{
  title:`Performance Optimization`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Performance Optimization in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Performance optimization in Spring Boot applications is essential for ensuring scalability, responsiveness, and efficient resource utilization. By applying various techniques, developers can enhance speed and reduce latency.
  </p>

  <h3 style="color: #16a085;">Key Performance Challenges</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Slow database queries leading to high response times.</li>
    <li>Excessive memory consumption due to inefficient data handling.</li>
    <li>Poor concurrency handling affecting scalability.</li>
    <li>Blocking I/O operations causing delays.</li>
  </ul>

  <h3 style="color: #e67e22;">1. Optimizing Database Queries</h3>
  <p style="color: #2c3e50;">
    Efficient database interactions play a critical role in improving application speed.
  </p>

  <h4 style="color: #e67e22;">Using Indexes for Faster Queries</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-sql">
      CREATE INDEX idx_product_name ON products(name);
    </code>
  </pre>

  <h4 style="color: #e67e22;">Using Lazy Loading</h4>
  <p style="color: #2c3e50;">
    Instead of fetching all related data, use lazy loading for better performance.
  </p>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Order {
          @OneToMany(fetch = FetchType.LAZY)
          private List<Item> items;
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">2. Caching Frequently Accessed Data</h3>
  <p style="color: #2c3e50;">
    Reduce database load by caching commonly requested data.
  </p>

  <h4 style="color: #e67e22;">Using Spring Boot Cache</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.cache.annotation.Cacheable;
      import org.springframework.stereotype.Service;

      @Service
      public class ProductService {
          @Cacheable("products")
          public List<Product> getAllProducts() {
              return productRepository.findAll();
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">3. Asynchronous Processing</h3>
  <p style="color: #2c3e50;">
    Prevent blocking operations by using asynchronous execution.
  </p>

  <h4 style="color: #e67e22;">Using @Async for Background Tasks</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.scheduling.annotation.Async;
      import org.springframework.stereotype.Service;

      @Service
      public class NotificationService {
          @Async
          public void sendEmail(String email) {
              // Simulate email sending
              System.out.println("Sending email to " + email);
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">4. Connection Pooling</h3>
  <p style="color: #2c3e50;">
    Reduce the overhead of creating database connections by using connection pooling.
  </p>

  <h4 style="color: #e67e22;">Configuring HikariCP in application.properties</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-properties">
      spring.datasource.hikari.maximum-pool-size=10
      spring.datasource.hikari.minimum-idle=5
    </code>
  </pre>

  <h3 style="color: #e67e22;">5. Reducing Memory Footprint</h3>
  <p style="color: #2c3e50;">
    Optimize memory usage to prevent application crashes.
  </p>

  <h4 style="color: #e67e22;">Using Java 17 Compact Strings</h4>
  <p style="color: #2c3e50;">
    Java 17's Compact Strings feature helps reduce memory consumption.
  </p>

  <h3 style="color: #e67e22;">6. Profiling and Monitoring</h3>
  <p style="color: #2c3e50;">
    Regularly monitor application performance to detect bottlenecks.
  </p>

  <h4 style="color: #e67e22;">Using Actuator for Health Checks</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-properties">
      management.endpoints.web.exposure.include=health,metrics
    </code>
  </pre>

  <h3 style="color: #2980b9;">Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Optimize database queries and use indexing.</li>
    <li>Use caching for frequently accessed data.</li>
    <li>Leverage asynchronous processing for non-blocking operations.</li>
    <li>Use connection pooling for efficient database interactions.</li>
    <li>Regularly profile and monitor the application.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Performance optimization is essential for maintaining a fast and scalable Spring Boot application. By applying caching, database optimizations, asynchronous execution, and monitoring, developers can ensure efficient resource utilization and better user experience.
  </p>
</div>
`
},
{
  title:`Anti-Patterns`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Anti-Patterns in Software Development</h2>
  <p style="font-size: 16px; color: #34495e;">
    In software development, an anti-pattern is a common but ineffective or counterproductive way of solving a problem. Unlike best practices, anti-patterns often introduce technical debt, inefficiencies, and maintenance difficulties.
  </p>

  <h3 style="color: #16a085;">Common Software Anti-Patterns</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Spaghetti Code</li>
    <li>God Object</li>
    <li>Hardcoding</li>
    <li>Magic Numbers</li>
    <li>Golden Hammer</li>
    <li>Copy-Paste Programming</li>
    <li>Dead Code</li>
    <li>Premature Optimization</li>
  </ul>

  <h3 style="color: #e67e22;">1. Spaghetti Code</h3>
  <p style="color: #2c3e50;">
    Spaghetti code is unstructured, hard-to-read code with no clear separation of concerns, making it difficult to maintain and debug.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class Order {
          public void processOrder() {
              if (user.isLoggedIn()) {
                  if (cart.isNotEmpty()) {
                      if (payment.isValid()) {
                          // Order processing logic
                      }
                  }
              }
          }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Follow modular design principles such as SOLID and use well-structured functions.</p>

  <h3 style="color: #e67e22;">2. God Object</h3>
  <p style="color: #2c3e50;">
    A "God Object" is a class that does too much and holds excessive responsibilities, leading to poor maintainability.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class OrderManager {
          public void createOrder() { /* ... */ }
          public void validatePayment() { /* ... */ }
          public void generateInvoice() { /* ... */ }
          public void sendEmailNotification() { /* ... */ }
      }
    </code>
  </pre>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Follow the Single Responsibility Principle (SRP) and break down large classes into smaller, focused components.</p>

  <h3 style="color: #e67e22;">3. Hardcoding</h3>
  <p style="color: #2c3e50;">
    Hardcoding values directly into code reduces flexibility and makes future updates difficult.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class Config {
          public static final String DATABASE_URL = "jdbc:mysql://localhost:3306/mydb";
      }
    </code>
  </pre>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Use configuration files or environment variables for better maintainability.</p>

  <h3 style="color: #e67e22;">4. Magic Numbers</h3>
  <p style="color: #2c3e50;">
    Magic numbers are hardcoded numeric values that lack meaning, making the code difficult to understand.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      if (userAge > 18) {
          // Allow access
      }
    </code>
  </pre>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Use named constants to improve readability.</p>

  <h3 style="color: #e67e22;">5. Golden Hammer</h3>
  <p style="color: #2c3e50;">
    The "Golden Hammer" anti-pattern occurs when a developer uses the same tool or technology for every problem, even when it's not the best fit.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <p style="color: #2c3e50;">
    Always using relational databases even when a NoSQL database might be a better choice.
  </p>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Choose technologies based on the problem at hand rather than familiarity.</p>

  <h3 style="color: #e67e22;">6. Copy-Paste Programming</h3>
  <p style="color: #2c3e50;">
    Repeating the same code in multiple places instead of reusing functions leads to redundant and hard-to-maintain code.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public void processPayment() { /* Same logic */ }
      public void validateTransaction() { /* Same logic */ }
    </code>
  </pre>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Follow the DRY (Don't Repeat Yourself) principle and use reusable functions or classes.</p>

  <h3 style="color: #e67e22;">7. Dead Code</h3>
  <p style="color: #2c3e50;">
    Dead code is code that is never executed but still exists in the codebase, leading to unnecessary complexity.
  </p>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Regularly refactor and remove unused code.</p>

  <h3 style="color: #e67e22;">8. Premature Optimization</h3>
  <p style="color: #2c3e50;">
    Optimizing code too early can make it more complex than necessary, without real performance benefits.
  </p>
  <p style="color: #2c3e50;"><strong>Solution:</strong> Follow the "optimize later" approach and prioritize maintainability.</p>

  <h3 style="color: #2980b9;">Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Follow SOLID principles for maintainable code.</li>
    <li>Avoid excessive class responsibilities (God Object).</li>
    <li>Use proper configuration management instead of hardcoding.</li>
    <li>Refactor code regularly to remove dead or redundant logic.</li>
    <li>Choose the right tool for the job instead of a "one-size-fits-all" approach.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Identifying and avoiding anti-patterns helps maintain cleaner, more efficient, and scalable software. By following best practices, developers can reduce technical debt and improve code quality.
  </p>
</div>
`
},
{
  title:`JPA Basics`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">JPA Basics</h2>
  <p style="font-size: 16px; color: #34495e;">
    Java Persistence API (JPA) is a standard specification for object-relational mapping (ORM) in Java applications. It simplifies database interactions by allowing developers to work with Java objects instead of SQL queries.
  </p>

  <h3 style="color: #16a085;">Key Concepts in JPA</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Entities</li>
    <li>EntityManager</li>
    <li>Persistence Context</li>
    <li>Persistence Unit</li>
    <li>JPQL (Java Persistence Query Language)</li>
    <li>Annotations in JPA</li>
  </ul>

  <h3 style="color: #e67e22;">1. Entity in JPA</h3>
  <p style="color: #2c3e50;">
    An entity represents a table in a database, and each instance of the entity represents a row in the table.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;

      @Entity
      @Table(name = "users")
      public class User {
          
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          
          @Column(name = "username", nullable = false)
          private String username;
          
          @Column(name = "email", nullable = false)
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">2. EntityManager</h3>
  <p style="color: #2c3e50;">
    The <strong>EntityManager</strong> is the primary interface for interacting with the database in JPA.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;

      public class UserService {
          private EntityManagerFactory emf = Persistence.createEntityManagerFactory("my-persistence-unit");
          private EntityManager em = emf.createEntityManager();

          public void saveUser(User user) {
              em.getTransaction().begin();
              em.persist(user);
              em.getTransaction().commit();
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">3. Persistence Context</h3>
  <p style="color: #2c3e50;">
    The Persistence Context is the set of managed entity instances in JPA. It ensures that changes to entities are automatically synchronized with the database.
  </p>

  <h3 style="color: #e67e22;">4. JPQL (Java Persistence Query Language)</h3>
  <p style="color: #2c3e50;">
    JPQL is used to query entities using object-oriented syntax instead of raw SQL.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public List<User> getUsers() {
          return em.createQuery("SELECT u FROM User u", User.class).getResultList();
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">5. Common JPA Annotations</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>@Entity</code> - Marks a class as an entity.</li>
    <li><code>@Table(name = "table_name")</code> - Maps the entity to a specific table.</li>
    <li><code>@Id</code> - Specifies the primary key.</li>
    <li><code>@GeneratedValue(strategy = GenerationType.IDENTITY)</code> - Auto-generates primary key values.</li>
    <li><code>@Column(name = "column_name")</code> - Maps a field to a specific column.</li>
    <li><code>@OneToOne, @OneToMany, @ManyToOne, @ManyToMany</code> - Defines relationships between entities.</li>
  </ul>

  <h3 style="color: #2980b9;">Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <code>@Entity</code> and define proper primary keys.</li>
    <li>Use <code>@Transactional</code> for atomic operations.</li>
    <li>Avoid unnecessary queries by using fetch strategies.</li>
    <li>Use batch processing for bulk operations.</li>
    <li>Enable caching for performance optimization.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    JPA simplifies database operations in Java applications, reducing the need for complex SQL queries. By using JPA effectively, developers can create scalable and maintainable applications.
  </p>
</div>
`
},
{
  title:`Entity Mapping`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Entity Mapping in JPA</h2>
  <p style="font-size: 16px; color: #34495e;">
    Entity mapping in JPA (Java Persistence API) is the process of defining how Java objects (entities) relate to database tables. It uses annotations or XML configuration to specify table relationships, column mappings, and constraints.
  </p>

  <h3 style="color: #16a085;">Types of Entity Mapping</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Basic Mapping</li>
    <li>One-to-One Mapping</li>
    <li>One-to-Many Mapping</li>
    <li>Many-to-One Mapping</li>
    <li>Many-to-Many Mapping</li>
    <li>Embedded Mapping</li>
  </ul>

  <h3 style="color: #e67e22;">1. Basic Entity Mapping</h3>
  <p style="color: #2c3e50;">
    The simplest mapping is between an entity class and a database table using the <code>@Entity</code> and <code>@Table</code> annotations.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;

      @Entity
      @Table(name = "employees")
      public class Employee {

          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(name = "name", nullable = false)
          private String name;

          @Column(name = "salary")
          private Double salary;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">2. One-to-One Mapping</h3>
  <p style="color: #2c3e50;">
    A one-to-one relationship means that one entity is associated with exactly one other entity.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          
          @OneToOne
          @JoinColumn(name = "address_id")
          private Address address;
      }

      @Entity
      public class Address {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(name = "city")
          private String city;
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">3. One-to-Many Mapping</h3>
  <p style="color: #2c3e50;">
    A one-to-many relationship means that one entity is related to multiple instances of another entity.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Department {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
          private List<Employee> employees = new ArrayList<>();
      }

      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @ManyToOne
          @JoinColumn(name = "department_id")
          private Department department;
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">4. Many-to-One Mapping</h3>
  <p style="color: #2c3e50;">
    This is the inverse of one-to-many, where multiple entities are related to a single entity.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @ManyToOne
          @JoinColumn(name = "department_id")
          private Department department;
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">5. Many-to-Many Mapping</h3>
  <p style="color: #2c3e50;">
    In a many-to-many relationship, multiple entities are associated with multiple other entities.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Student {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @ManyToMany
          @JoinTable(
              name = "student_course",
              joinColumns = @JoinColumn(name = "student_id"),
              inverseJoinColumns = @JoinColumn(name = "course_id")
          )
          private List<Course> courses = new ArrayList<>();
      }

      @Entity
      public class Course {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">6. Embedded Mapping</h3>
  <p style="color: #2c3e50;">
    Embedded mapping allows an entity to contain another class as an embedded object.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Embeddable
      public class Address {
          private String city;
          private String street;
      }

      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Embedded
          private Address address;
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use appropriate mapping annotations to reflect real-world relationships.</li>
    <li>Always define <code>mappedBy</code> in bidirectional relationships to avoid extra tables.</li>
    <li>Use <code>cascade</code> options carefully to avoid unintended deletes or updates.</li>
    <li>Use <code>fetch</code> types properly to optimize performance.</li>
    <li>Normalize relationships to avoid redundancy and improve maintainability.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Entity mapping in JPA enables efficient database operations by defining relationships between objects. Proper mapping techniques improve application performance and maintainability.
  </p>
</div>
`
},
{
  title:`Entity Lifecycle`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Entity Lifecycle in JPA</h2>
  <p style="font-size: 16px; color: #34495e;">
    In JPA (Java Persistence API), an entity goes through different lifecycle states during its interaction with the persistence context. Understanding these lifecycle states is crucial for managing database operations efficiently.
  </p>

  <h3 style="color: #16a085;">JPA Entity Lifecycle States</h3>
  <p style="color: #2c3e50;">
    The JPA entity lifecycle consists of four main states:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Transient</strong></li>
    <li><strong>Persistent</strong></li>
    <li><strong>Detached</strong></li>
    <li><strong>Removed</strong></li>
  </ul>

  <h3 style="color: #e67e22;">1. Transient State</h3>
  <p style="color: #2c3e50;">
    When an entity object is created but not yet associated with any persistence context, it is in the <strong>Transient</strong> state. At this stage:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>It does not exist in the database.</li>
    <li>JPA does not manage it.</li>
    <li>Changes to it will not be persisted.</li>
  </ul>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Employee emp = new Employee(); // Transient state
      emp.setName("John Doe");
      emp.setSalary(50000.0);
    </code>
  </pre>

  <h3 style="color: #e67e22;">2. Persistent State</h3>
  <p style="color: #2c3e50;">
    When an entity is managed by the persistence context, it enters the <strong>Persistent</strong> state. This happens when:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>It is saved using <code>EntityManager.persist()</code>.</li>
    <li>It is retrieved from the database using <code>EntityManager.find()</code> or <code>EntityManager.merge()</code>.</li>
  </ul>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      EntityManager em = emf.createEntityManager();
      em.getTransaction().begin();

      Employee emp = new Employee();
      emp.setName("John Doe");
      emp.setSalary(50000.0);
      em.persist(emp); // Now in Persistent state

      em.getTransaction().commit();
    </code>
  </pre>

  <h3 style="color: #e67e22;">3. Detached State</h3>
  <p style="color: #2c3e50;">
    An entity becomes <strong>Detached</strong> when it is no longer managed by the persistence context. This happens when:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>The persistence context is closed.</li>
    <li>The entity is manually detached using <code>EntityManager.detach()</code>.</li>
    <li>The transaction is committed.</li>
  </ul>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      EntityManager em = emf.createEntityManager();
      Employee emp = em.find(Employee.class, 1L); // Persistent state

      em.detach(emp); // Now in Detached state
      emp.setSalary(60000.0); // Change won't be persisted

      em.merge(emp); // Merges back to Persistent state
    </code>
  </pre>

  <h3 style="color: #e67e22;">4. Removed State</h3>
  <p style="color: #2c3e50;">
    An entity enters the <strong>Removed</strong> state when it is scheduled for deletion using <code>EntityManager.remove()</code>.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      EntityManager em = emf.createEntityManager();
      em.getTransaction().begin();

      Employee emp = em.find(Employee.class, 1L);
      em.remove(emp); // Now in Removed state

      em.getTransaction().commit();
    </code>
  </pre>

  <h3 style="color: #2980b9;">Entity Lifecycle Events</h3>
  <p style="color: #2c3e50;">
    JPA provides lifecycle callback annotations to execute logic at different lifecycle stages:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>@PrePersist</code> - Before entity is inserted.</li>
    <li><code>@PostPersist</code> - After entity is inserted.</li>
    <li><code>@PreUpdate</code> - Before entity is updated.</li>
    <li><code>@PostUpdate</code> - After entity is updated.</li>
    <li><code>@PreRemove</code> - Before entity is removed.</li>
    <li><code>@PostRemove</code> - After entity is removed.</li>
    <li><code>@PostLoad</code> - After entity is loaded.</li>
  </ul>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="backg
`
},
{
  title:`Primary Keys & Generation Strategies`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Primary Keys & Generation Strategies in JPA</h2>
  <p style="font-size: 16px; color: #34495e;">
    In JPA (Java Persistence API), the primary key uniquely identifies each entity in the database. It is essential for database operations such as retrieval, updates, and deletions. JPA provides different strategies to generate primary keys automatically.
  </p>

  <h3 style="color: #16a085;">Defining Primary Keys in JPA</h3>
  <p style="color: #2c3e50;">
    In JPA, we use the <code>@Id</code> annotation to mark a field as the primary key. A primary key can be a simple field (single column) or a composite key (multiple columns).
  </p>

  <h4 style="color: #e67e22;">Example of a Simple Primary Key:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">Primary Key Generation Strategies</h3>
  <p style="color: #2c3e50;">
    JPA provides different ways to generate primary keys automatically using the <code>@GeneratedValue</code> annotation. The available strategies are:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>IDENTITY</strong> - Uses database auto-increment columns.</li>
    <li><strong>SEQUENCE</strong> - Uses a database sequence.</li>
    <li><strong>TABLE</strong> - Uses a separate table to maintain primary key values.</li>
    <li><strong>AUTO</strong> - Automatically selects a strategy based on the database.</li>
  </ul>

  <h3 style="color: #2980b9;">1. IDENTITY Strategy</h3>
  <p style="color: #2c3e50;">
    The <strong>IDENTITY</strong> strategy relies on the database’s auto-increment feature to generate unique primary key values.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Works well with MySQL, PostgreSQL, and SQL Server.<br>
    - Does not require extra queries to fetch the next ID.<br>
    - Not recommended for batch inserts.
  </p>

  <h3 style="color: #2980b9;">2. SEQUENCE Strategy</h3>
  <p style="color: #2c3e50;">
    The <strong>SEQUENCE</strong> strategy uses a database sequence to generate primary keys. It is commonly used in databases like Oracle and PostgreSQL.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @SequenceGenerator(name = "employee_seq", sequenceName = "EMPLOYEE_SEQUENCE", allocationSize = 1)
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employee_seq")
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Better performance for batch inserts.<br>
    - Requires defining a sequence in the database.
  </p>

  <h3 style="color: #2980b9;">3. TABLE Strategy</h3>
  <p style="color: #2c3e50;">
    The <strong>TABLE</strong> strategy stores primary key values in a separate table. It is useful when sequences or auto-increment are not available.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @TableGenerator(name = "employee_table", table = "ID_GENERATOR", pkColumnName = "GEN_NAME",
                      valueColumnName = "GEN_VALUE", pkColumnValue = "EMP_ID", allocationSize = 1)
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.TABLE, generator = "employee_table")
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Works with all databases.<br>
    - Slower than IDENTITY and SEQUENCE.<br>
    - Requires a dedicated key-generation table.
  </p>

  <h3 style="color: #2980b9;">4. AUTO Strategy</h3>
  <p style="color: #2c3e50;">
    The <strong>AUTO</strong> strategy allows JPA to choose the best strategy based on the database being used.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.AUTO)
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Default strategy in JPA.<br>
    - Uses IDENTITY, SEQUENCE, or TABLE depending on the database.
  </p>

  <h3 style="color: #d35400;">Choosing the Right Strategy</h3>
  <p style="color: #2c3e50;">
    The choice of primary key strategy depends on database type, performance needs, and scalability requirements.
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use IDENTITY</strong> if the database supports auto-increment.</li>
    <li><strong>Use SEQUENCE</strong> for better batch insert performance.</li>
    <li><strong>Use TABLE</strong> when sequences or auto-increment are not available.</li>
    <li><strong>Use AUTO</strong> for database-independent applications.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Primary keys are essential for uniquely identifying entities in JPA. Understanding different generation strategies helps in optimizing performance and ensuring compatibility across databases.
  </p>
</div>
`
},
{
  title:`JPA Annotations (@Entity, @Table, @Id, @Column)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">JPA Annotations: @Entity, @Table, @Id, @Column</h2>
  <p style="font-size: 16px; color: #34495e;">
    JPA (Java Persistence API) provides several annotations to map Java objects to database tables. The most commonly used annotations include <strong>@Entity</strong>, <strong>@Table</strong>, <strong>@Id</strong>, and <strong>@Column</strong>. These annotations help define how an entity class interacts with the database.
  </p>

  <h3 style="color: #16a085;">1. @Entity Annotation</h3>
  <p style="color: #2c3e50;">
    The <strong>@Entity</strong> annotation marks a Java class as a JPA entity, meaning it is mapped to a table in the database.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.Entity;

      @Entity
      public class Employee {
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Every entity class must have a primary key.<br>
    - The class must have a no-argument constructor.<br>
    - Entities should not be final or contain final fields.
  </p>

  <h3 style="color: #2980b9;">2. @Table Annotation</h3>
  <p style="color: #2c3e50;">
    The <strong>@Table</strong> annotation specifies the database table name for the entity. If omitted, the default table name is the class name.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.Entity;
      import jakarta.persistence.Table;

      @Entity
      @Table(name = "EMPLOYEES")
      public class Employee {
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Allows specifying a custom table name.<br>
    - Can define unique constraints using <code>uniqueConstraints</code>.<br>
    - Can set schema using <code>schema</code> attribute.
  </p>

  <h3 style="color: #2980b9;">3. @Id Annotation</h3>
  <p style="color: #2c3e50;">
    The <strong>@Id</strong> annotation marks a field as the primary key of the entity.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.Entity;
      import jakarta.persistence.Id;

      @Entity
      public class Employee {
          @Id
          private Long id;
          private String name;
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Every entity must have a primary key.<br>
    - Can be used with <code>@GeneratedValue</code> for auto-generated IDs.<br>
    - Supports composite keys when used with <code>@EmbeddedId</code> or <code>@IdClass</code>.
  </p>

  <h3 style="color: #2980b9;">4. @Column Annotation</h3>
  <p style="color: #2c3e50;">
    The <strong>@Column</strong> annotation customizes the mapping of a field to a database column.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.Entity;
      import jakarta.persistence.Id;
      import jakarta.persistence.Column;

      @Entity
      public class Employee {
          @Id
          private Long id;

          @Column(name = "EMPLOYEE_NAME", length = 50, nullable = false)
          private String name;

          @Column(name = "EMPLOYEE_SALARY", precision = 10, scale = 2)
          private Double salary;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - <code>name</code>: Specifies the column name in the table.<br>
    - <code>length</code>: Defines the maximum length (for String fields).<br>
    - <code>nullable</code>: Determines whether the column allows null values.<br>
    - <code>precision</code> and <code>scale</code>: Define decimal precision for numeric fields.
  </p>

  <h3 style="color: #d35400;">Key Takeaways</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>@Entity</strong>: Marks a class as a JPA entity.</li>
    <li><strong>@Table</strong>: Specifies the database table name.</li>
    <li><strong>@Id</strong>: Defines the primary key field.</li>
    <li><strong>@Column</strong>: Customizes column properties in the table.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    JPA annotations help define how Java objects are mapped to database tables. Using <strong>@Entity</strong>, <strong>@Table</strong>, <strong>@Id</strong>, and <strong>@Column</strong>, developers can effectively control database interactions and structure their entities efficiently.
  </p>
</div>
`
},
{
  title:`Relationships (OneToOne, OneToMany, ManyToOne, ManyToMany)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">JPA Relationships: OneToOne, OneToMany, ManyToOne, ManyToMany</h2>
  <p style="font-size: 16px; color: #34495e;">
    In JPA (Java Persistence API), relationships define how entities are connected in a database. JPA provides four types of relationships: <strong>OneToOne</strong>, <strong>OneToMany</strong>, <strong>ManyToOne</strong>, and <strong>ManyToMany</strong>. These relationships help establish meaningful connections between entities while ensuring efficient data management.
  </p>

  <h3 style="color: #16a085;">1. OneToOne Relationship</h3>
  <p style="color: #2c3e50;">
    A <strong>OneToOne</strong> relationship means one entity is associated with only one other entity.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;

      @Entity
      public class Employee {
          @Id @GeneratedValue
          private Long id;
          private String name;

          @OneToOne
          @JoinColumn(name = "address_id")
          private Address address;
      }

      @Entity
      public class Address {
          @Id @GeneratedValue
          private Long id;
          private String street;
          private String city;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Each employee has exactly one address.<br>
    - <code>@JoinColumn</code> creates a foreign key <strong>address_id</strong> in the <strong>Employee</strong> table.
  </p>

  <h3 style="color: #2980b9;">2. OneToMany Relationship</h3>
  <p style="color: #2c3e50;">
    A <strong>OneToMany</strong> relationship means one entity is related to multiple entities.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;
      import java.util.List;

      @Entity
      public class Department {
          @Id @GeneratedValue
          private Long id;
          private String name;

          @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
          private List<Employee> employees;
      }

      @Entity
      public class Employee {
          @Id @GeneratedValue
          private Long id;
          private String name;

          @ManyToOne
          @JoinColumn(name = "department_id")
          private Department department;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - A <strong>Department</strong> can have multiple employees.<br>
    - The <code>mappedBy</code> attribute in <strong>OneToMany</strong> tells JPA that the relationship is managed by the <code>department</code> field in <strong>Employee</strong>.
  </p>

  <h3 style="color: #2980b9;">3. ManyToOne Relationship</h3>
  <p style="color: #2c3e50;">
    A <strong>ManyToOne</strong> relationship means multiple entities are linked to a single entity.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id @GeneratedValue
          private Long id;
          private String name;

          @ManyToOne
          @JoinColumn(name = "department_id")
          private Department department;
      }

      @Entity
      public class Department {
          @Id @GeneratedValue
          private Long id;
          private String name;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - Multiple employees belong to the same department.<br>
    - The <code>@ManyToOne</code> annotation is placed in the entity that holds the foreign key.
  </p>

  <h3 style="color: #2980b9;">4. ManyToMany Relationship</h3>
  <p style="color: #2c3e50;">
    A <strong>ManyToMany</strong> relationship means multiple entities can be related to multiple entities.
  </p>

  <h4 style="color: #e67e22;">Example:</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;
      import java.util.List;

      @Entity
      public class Student {
          @Id @GeneratedValue
          private Long id;
          private String name;

          @ManyToMany
          @JoinTable(
              name = "student_course",
              joinColumns = @JoinColumn(name = "student_id"),
              inverseJoinColumns = @JoinColumn(name = "course_id")
          )
          private List<Course> courses;
      }

      @Entity
      public class Course {
          @Id @GeneratedValue
          private Long id;
          private String name;

          @ManyToMany(mappedBy = "courses")
          private List<Student> students;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    - A <strong>Student</strong> can enroll in multiple courses, and a <strong>Course</strong> can have multiple students.<br>
    - A join table <strong>student_course</strong> is created with <code>student_id</code> and <code>course_id</code> as foreign keys.
  </p>

  <h3 style="color: #d35400;">Key Takeaways</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>OneToOne</strong>: One entity is linked to exactly one other entity.</li>
    <li><strong>OneToMany</strong>: One entity is linked to multiple entities.</li>
    <li><strong>ManyToOne</strong>: Multiple entities are linked to a single entity.</li>
    <li><strong>ManyToMany</strong>: Multiple entities are linked to multiple entities.</li>
  </ul>

  <h3 style="color: #d35400;">Conclusion</h3>
  <p style="color: #2c3e50;">
    JPA relationships help in structuring database interactions efficiently. By using <strong>@OneToOne</strong>, <strong>@OneToMany</strong>, <strong>@ManyToOne</strong>, and <strong>@ManyToMany</strong>, developers can ensure clear and optimized entity connections in their applications.
  </p>
</div>
`
},
{
  title:`JPQL (Java Persistence Query Language)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to JPQL (Java Persistence Query Language)</h2>
  <p style="font-size: 16px; color: #34495e;">
    Java Persistence Query Language (JPQL) is a platform-independent object-oriented query language defined as part of the Java Persistence API (JPA) specification. It is used to perform database operations on entities and their persistent state, rather than directly on database tables. JPQL is similar to SQL but operates on entity objects instead of tables, making it a powerful tool for working with JPA in Spring Boot applications.
  </p>

  <h3 style="color: #16a085;">Why Use JPQL?</h3>
  <p style="color: #2c3e50;">
    JPQL offers several advantages for working with JPA entities:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Database Independence</strong>: JPQL queries are database-agnostic, allowing you to write queries that work across different databases.</li>
    <li><strong>Object-Oriented</strong>: JPQL operates on entities and their relationships, making it easier to work with object-oriented data models.</li>
    <li><strong>Type Safety</strong>: JPQL queries are type-safe, reducing the risk of runtime errors.</li>
    <li><strong>Integration with JPA</strong>: JPQL integrates seamlessly with JPA, enabling features like lazy loading, caching, and pagination.</li>
    <li><strong>Flexibility</strong>: JPQL supports complex queries, including joins, aggregations, and subqueries.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of JPQL</h3>
  <p style="color: #2c3e50;">
    When working with JPQL, it is important to understand the following concepts:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Entities</strong>: JPQL queries operate on JPA entities, which represent database tables.</li>
    <li><strong>Query Structure</strong>: JPQL queries are similar to SQL but use entity and field names instead of table and column names.</li>
    <li><strong>Named Queries</strong>: JPQL queries can be predefined and reused using named queries.</li>
    <li><strong>Parameters</strong>: JPQL supports both positional and named parameters for dynamic queries.</li>
    <li><strong>Pagination</strong>: JPQL queries can be paginated using the <code>setFirstResult</code> and <code>setMaxResults</code> methods.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Using JPQL in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to use JPQL in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Define an Entity</h4>
  <p style="color: #2c3e50;">
    Create a JPA entity to represent a database table.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
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

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Create a Repository with JPQL Queries</h4>
  <p style="color: #2c3e50;">
    Use the <code>@Query</code> annotation to define JPQL queries in a repository.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.data.jpa.repository.Query;
      import org.springframework.data.repository.query.Param;

      import java.util.List;

      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {

          // Simple JPQL query
          @Query("SELECT u FROM User u WHERE u.email = :email")
          User findByEmail(@Param("email") String email);

          // JPQL query with join
          @Query("SELECT u FROM User u JOIN u.orders o WHERE o.status = :status")
          List&lt;User&gt; findUsersByOrderStatus(@Param("status") String status);

          // JPQL query with pagination
          @Query("SELECT u FROM User u ORDER BY u.name")
          List&lt;User&gt; findAllUsersWithPagination(Pageable pageable);
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Use the Repository in a Service</h4>
  <p style="color: #2c3e50;">
    Use the repository methods in a service to perform database operations.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Service;

      import java.util.List;

      @Service
      public class UserService {

          @Autowired
          private UserRepository userRepository;

          public User getUserByEmail(String email) {
              return userRepository.findByEmail(email);
          }

          public List&lt;User&gt; getUsersByOrderStatus(String status) {
              return userRepository.findUsersByOrderStatus(status);
          }

          public List&lt;User&gt; getAllUsers(int page, int size) {
              return userRepository.findAllUsersWithPagination(PageRequest.of(page, size));
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Using JPQL</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use named queries for frequently used queries to improve readability and maintainability.</li>
    <li>Leverage pagination for large datasets to improve performance.</li>
    <li>Use parameters to make queries dynamic and reusable.</li>
    <li>Test JPQL queries thoroughly to ensure they work as expected.</li>
    <li>Optimize queries to minimize database load and improve performance.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    JPQL is a powerful tool for working with JPA entities in Spring Boot applications. By leveraging JPQL, you can write database-agnostic, object-oriented queries that integrate seamlessly with JPA. Whether you're performing simple queries or complex joins, JPQL provides the flexibility and functionality needed to work with your data effectively. By following best practices, you can ensure that your JPQL queries are efficient, maintainable, and scalable.
  </p>
</div>
`
},
{
  title:`Criteria API`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Criteria API in JPA</h2>
  <p style="font-size: 16px; color: #34495e;">
    The Criteria API is a type-safe and programmatic way to construct database queries using the Java Persistence API (JPA). Unlike JPQL, which is a string-based query language, the Criteria API allows developers to build queries dynamically using Java objects, providing flexibility and reducing the risk of syntax errors.
  </p>

  <h3 style="color: #16a085;">Why Use Criteria API?</h3>
  <p style="color: #2c3e50;">
    The Criteria API provides several advantages:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Type Safety</strong>: Prevents runtime errors by ensuring type correctness at compile time.</li>
    <li><strong>Dynamic Querying</strong>: Allows dynamic query creation based on runtime conditions.</li>
    <li><strong>Readable and Maintainable</strong>: Queries are constructed using Java methods, making them easier to read and modify.</li>
    <li><strong>Integration with JPA</strong>: Works seamlessly with JPA entity management and persistence context.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Components of the Criteria API</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>CriteriaBuilder</strong>: Used to create query objects and define query conditions.</li>
    <li><strong>CriteriaQuery</strong>: Represents the actual query that will be executed.</li>
    <li><strong>Root</strong>: Defines the entity being queried.</li>
    <li><strong>Predicate</strong>: Represents filter conditions applied to queries.</li>
    <li><strong>TypedQuery</strong>: Executes the query and retrieves results.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Using Criteria API in Spring Boot</h3>

  <h4 style="color: #8e44ad;">1. Define an Entity</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
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
          
          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Implement a Repository with Criteria API</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import jakarta.persistence.EntityManager;
      import jakarta.persistence.criteria.CriteriaBuilder;
      import jakarta.persistence.criteria.CriteriaQuery;
      import jakarta.persistence.criteria.Predicate;
      import jakarta.persistence.criteria.Root;
      import org.springframework.stereotype.Repository;
      import java.util.List;

      @Repository
      public class UserRepository {
          private final EntityManager entityManager;

          public UserRepository(EntityManager entityManager) {
              this.entityManager = entityManager;
          }

          public List<User> findUsersByEmail(String email) {
              CriteriaBuilder cb = entityManager.getCriteriaBuilder();
              CriteriaQuery<User> cq = cb.createQuery(User.class);
              Root<User> user = cq.from(User.class);
              Predicate emailPredicate = cb.equal(user.get("email"), email);
              cq.where(emailPredicate);

              return entityManager.createQuery(cq).getResultList();
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Use the Repository in a Service</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          
          @Autowired
          private UserRepository userRepository;

          public List<User> getUsersByEmail(String email) {
              return userRepository.findUsersByEmail(email);
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Using Criteria API</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use Criteria API for dynamic queries instead of string-based JPQL.</li>
    <li>Combine multiple predicates using CriteriaBuilder for complex conditions.</li>
    <li>Use pagination to limit large query results and improve performance.</li>
    <li>Ensure queries are optimized to avoid performance bottlenecks.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    The Criteria API is a powerful tool in JPA that allows developers to construct type-safe and dynamic queries. By leveraging the Criteria API, you can build queries programmatically while ensuring flexibility, maintainability, and performance optimization in Spring Boot applications.
  </p>
</div>
`
},
{
  title:`Native SQL Queries`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Native SQL Queries in JPA</h2>
  <p style="font-size: 16px; color: #34495e;">
    Native SQL queries allow developers to execute raw SQL statements directly in Java Persistence API (JPA). Unlike JPQL or Criteria API, native queries give complete control over SQL execution, making them useful for complex queries, database-specific operations, or when performance tuning is necessary.
  </p>

  <h3 style="color: #16a085;">Why Use Native SQL Queries?</h3>
  <p style="color: #2c3e50;">
    Native SQL queries offer several advantages:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Direct SQL Execution</strong>: Enables the execution of complex SQL queries, including joins and stored procedures.</li>
    <li><strong>Database-Specific Features</strong>: Allows the use of vendor-specific SQL functions and optimizations.</li>
    <li><strong>Performance Optimization</strong>: Can be used for performance tuning when JPQL or Criteria API falls short.</li>
    <li><strong>Flexibility</strong>: Ideal for queries that cannot be easily represented in JPQL.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Components of Native SQL Queries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>@Query Annotation</strong>: Used in Spring Data JPA to execute native SQL queries.</li>
    <li><strong>EntityManager.createNativeQuery</strong>: Manually executes native SQL queries.</li>
    <li><strong>Result Mapping</strong>: Maps SQL query results to entity objects.</li>
    <li><strong>Parameter Binding</strong>: Allows safe injection of parameters to prevent SQL injection.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Using Native SQL Queries in Spring Boot</h3>

  <h4 style="color: #8e44ad;">1. Define an Entity</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import jakarta.persistence.Entity;
      import jakarta.persistence.GeneratedValue;
      import jakarta.persistence.GenerationType;
      import jakarta.persistence.Id;

      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String department;
          private double salary;
          
          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Using @Query Annotation in a Repository</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.data.jpa.repository.Query;
      import org.springframework.data.repository.query.Param;
      import java.util.List;

      public interface EmployeeRepository extends JpaRepository<Employee, Long> {

          @Query(value = "SELECT * FROM Employee WHERE department = :department", nativeQuery = true)
          List<Employee> findByDepartment(@Param("department") String department);
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Using EntityManager for Native Queries</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import jakarta.persistence.EntityManager;
      import jakarta.persistence.PersistenceContext;
      import jakarta.persistence.Query;
      import org.springframework.stereotype.Repository;
      import java.util.List;

      @Repository
      public class EmployeeNativeRepository {
          
          @PersistenceContext
          private EntityManager entityManager;

          public List<Object[]> getEmployeesWithHighSalary(double salary) {
              String sql = "SELECT id, name, salary FROM Employee WHERE salary > :salary";
              Query query = entityManager.createNativeQuery(sql);
              query.setParameter("salary", salary);
              return query.getResultList();
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Calling the Repository in a Service</h4>
  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class EmployeeService {
          
          @Autowired
          private EmployeeRepository employeeRepository;
          
          @Autowired
          private EmployeeNativeRepository employeeNativeRepository;

          public List<Employee> getEmployeesByDepartment(String department) {
              return employeeRepository.findByDepartment(department);
          }

          public List<Object[]> getHighSalaryEmployees(double salary) {
              return employeeNativeRepository.getEmployeesWithHighSalary(salary);
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Using Native SQL Queries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use native queries only when necessary; prefer JPQL or Criteria API for portability.</li>
    <li>Always use parameterized queries to prevent SQL injection.</li>
    <li>Ensure result mappings are correct to avoid data integrity issues.</li>
    <li>Optimize queries with proper indexing and performance tuning techniques.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Native SQL queries in JPA provide developers with the flexibility to execute complex database operations while leveraging the power of SQL. When used wisely, they can enhance performance and handle advanced query scenarios efficiently in Spring Boot applications.
  </p>
</div>
 `

},
{
  title:`Named Queries`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Named Queries in JPA</h2>
  <p style="font-size: 16px; color: #34495e;">
    Named Queries in JPA allow developers to define queries statically using annotations or XML configurations. These pre-defined queries improve performance and maintainability by enabling the reuse of queries throughout the application.
  </p>

  <h3 style="color: #16a085;">Why Use Named Queries?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Encapsulates query logic within entity classes, improving modularity.</li>
    <li>Optimized by the persistence provider at startup, leading to better performance.</li>
    <li>Enhances code readability and reduces duplication.</li>
    <li>Easy to maintain and modify in large-scale applications.</li>
  </ul>

  <h3 style="color: #e67e22;">Defining Named Queries</h3>
  <p style="color: #2c3e50;">Named Queries can be defined using the <code>@NamedQuery</code> annotation or XML configuration.</p>

  <h4 style="color: #8e44ad;">1. Using @NamedQuery Annotation</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import jakarta.persistence.*;

      @Entity
      @NamedQuery(name = "User.findByEmail", query = "SELECT u FROM User u WHERE u.email = :email")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
          
          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Executing Named Query</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      import jakarta.persistence.*;
      import java.util.List;

      public class UserRepository {
          private final EntityManager entityManager;

          public UserRepository(EntityManager entityManager) {
              this.entityManager = entityManager;
          }

          public List<User> findUsersByEmail(String email) {
              return entityManager.createNamedQuery("User.findByEmail", User.class)
                  .setParameter("email", email)
                  .getResultList();
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Defining Named Queries in XML (Optional)</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code>
      &lt;named-query name="User.findByEmail"&gt;
          &lt;query&gt;SELECT u FROM User u WHERE u.email = :email&lt;/query&gt;
      &lt;/named-query&gt;
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Best Practices for Named Queries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use meaningful query names for clarity and maintainability.</li>
    <li>Leverage indexed parameters (<code>?1, ?2</code>) for simplicity in complex queries.</li>
    <li>Use <code>@NamedNativeQuery</code> for raw SQL queries when needed.</li>
    <li>Ensure queries are optimized to avoid performance bottlenecks.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Named Queries in JPA provide a structured way to define and reuse database queries efficiently. By implementing them correctly, developers can achieve cleaner, more maintainable, and performant code in their Spring Boot applications.
  </p>
</div>

 `
},
{
  title:`Transaction Management`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Transaction Management in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Transaction management ensures data consistency and integrity in Spring Boot applications, especially when multiple database operations need to be executed as a single unit of work.
  </p>

  <h3 style="color: #16a085;">Key Concepts of Transaction Management:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>A transaction groups multiple database operations into a single unit.</li>
    <li>Spring provides declarative transaction management using <code>@Transactional</code>.</li>
    <li>Transactions follow ACID properties: Atomicity, Consistency, Isolation, and Durability.</li>
    <li>Propagation behavior controls how transactions interact with each other.</li>
    <li>Rollback policies determine when to revert changes due to errors.</li>
    <li>Spring supports programmatic and declarative transaction management.</li>
  </ul>

  <h3 style="color: #e67e22;">Declarative Transaction Management Example</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import org.springframework.transaction.annotation.Transactional;

      @Service
      public class BankService {

          private final AccountRepository accountRepository;

          public BankService(AccountRepository accountRepository) {
              this.accountRepository = accountRepository;
          }

          @Transactional
          public void transferMoney(Long fromAccountId, Long toAccountId, double amount) {
              Account fromAccount = accountRepository.findById(fromAccountId).orElseThrow();
              Account toAccount = accountRepository.findById(toAccountId).orElseThrow();
              
              fromAccount.debit(amount);
              toAccount.credit(amount);
              
              accountRepository.save(fromAccount);
              accountRepository.save(toAccount);
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Propagation and Isolation Levels</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Propagation:</b> Defines how a transaction should behave when a method is called within an existing transaction.</li>
    <ul>
      <li><code>REQUIRED</code>: Uses the existing transaction or creates a new one.</li>
      <li><code>REQUIRES_NEW</code>: Always creates a new transaction.</li>
      <li><code>SUPPORTS</code>: Runs within a transaction if available.</li>
    </ul>
    <li><b>Isolation Levels:</b> Determines how transaction operations are isolated from each other.</li>
    <ul>
      <li><code>READ_COMMITTED</code>: Prevents dirty reads.</li>
      <li><code>REPEATABLE_READ</code>: Prevents non-repeatable reads.</li>
      <li><code>SERIALIZABLE</code>: Ensures full isolation but reduces concurrency.</li>
    </ul>
  </ul>

  <h3 style="color: #e74c3c;">Handling Rollbacks</h3>
  <p style="color: #2c3e50;">
    Transactions can be rolled back automatically when an exception occurs. By default, Spring rolls back for unchecked exceptions (<code>RuntimeException</code>), but you can customize rollback behavior:
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Transactional(rollbackFor = Exception.class)
      public void processTransaction() throws Exception {
          // Transactional operations
          if (someCondition) {
              throw new Exception("Force rollback");
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Effective transaction management in Spring Boot enhances data integrity and consistency. By understanding propagation, isolation, and rollback strategies, developers can build robust applications with efficient database operations.
  </p>
</div>
`
},
{
  title:`Lazy vs Eager Loading`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Lazy Loading vs Eager Loading in JPA/Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    In JPA and Hibernate, lazy and eager loading determine how related entities are fetched from the database.
    Choosing the right strategy can impact performance and resource utilization.
  </p>

  <h3 style="color: #16a085;">Lazy Loading</h3>
  <p style="color: #2c3e50;">
    Lazy loading means that related entities are not fetched immediately from the database but only when they are explicitly accessed.
    This improves performance by reducing unnecessary data retrieval but can lead to the "LazyInitializationException" if not handled properly.
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Default behavior in JPA relationships (<code>@OneToMany</code>, <code>@ManyToOne</code>, <code>@ManyToMany</code>).</li>
    <li>Loads associated entities only when accessed.</li>
    <li>Reduces initial query load but can cause multiple queries later.</li>
    <li>Risk of <code>LazyInitializationException</code> outside of a transaction.</li>
  </ul>

  <h3 style="color: #e67e22;">Eager Loading</h3>
  <p style="color: #2c3e50;">
    Eager loading retrieves all related entities immediately, avoiding additional queries later but potentially fetching unnecessary data.
    This strategy is useful when related entities are always required together.
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Explicitly defined using <code>fetch = FetchType.EAGER</code>.</li>
    <li>All related entities are retrieved in a single query.</li>
    <li>May lead to performance issues due to excessive data retrieval.</li>
    <li>Increased memory usage if fetching large datasets.</li>
  </ul>

  <h3 style="color: #9b59b6;">Example: Lazy vs Eager Loading</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;
      import java.util.List;

      @Entity
      public class Department {

          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          private String name;

          @OneToMany(mappedBy = "department", fetch = FetchType.LAZY) // Lazy Loading
          private List<Employee> employees;
      }

      @Entity
      public class Employee {

          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;

          @ManyToOne(fetch = FetchType.EAGER) // Eager Loading
          private Department department;
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use **Lazy Loading** for collections to optimize performance.</li>
    <li>Use **Eager Loading** when related data is always required.</li>
    <li>Leverage <code>JOIN FETCH</code> in JPQL to avoid multiple queries.</li>
    <li>Use DTOs (Data Transfer Objects) to fetch only required fields.</li>
  </ul>

  <p style="color: #2c3e50;">
    Choosing between lazy and eager loading depends on the use case. A well-balanced approach ensures optimized performance and efficient data retrieval.
  </p>
</div>

`
},
{
title:`Caching (First-Level & Second-Level)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Caching in Hibernate: First-Level & Second-Level</h2>
  <p style="font-size: 16px; color: #34495e;">
    Caching in Hibernate improves performance by reducing database access. Hibernate provides two levels of caching:
    <strong>First-Level Cache</strong> and <strong>Second-Level Cache</strong>. Understanding their differences and how they work is crucial for efficient data retrieval.
  </p>

  <h3 style="color: #16a085;">1. First-Level Cache (Session Cache)</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Enabled by default and tied to the Hibernate <code>Session</code>.</li>
    <li>Stores entities within the same session, avoiding redundant database queries.</li>
    <li>Cache is cleared when the session is closed.</li>
    <li>No special configuration is required.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: First-Level Caching</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Session session = sessionFactory.openSession();
      Transaction tx = session.beginTransaction();
      
      User user1 = session.get(User.class, 1); // Fetches from DB
      User user2 = session.get(User.class, 1); // Fetches from Cache
      
      tx.commit();
      session.close();
    </code>
  </pre>

  <h3 style="color: #16a085;">2. Second-Level Cache</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Not enabled by default; needs explicit configuration.</li>
    <li>Stores entities beyond a single session, making them accessible across multiple sessions.</li>
    <li>Requires a caching provider such as EhCache, Hazelcast, or Infinispan.</li>
    <li>Configured using annotations like <code>@Cacheable</code> and <code>@Cache</code>.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Second-Level Caching Configuration</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @Cacheable
      @Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Enabling Second-Level Cache in Hibernate</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-properties">
      hibernate.cache.use_second_level_cache=true
      hibernate.cache.region.factory_class=org.hibernate.cache.ehcache.EhCacheRegionFactory
    </code>
  </pre>

  <p style="color: #2c3e50;">
    By implementing both caching levels efficiently, you can significantly reduce database load and enhance application performance.
  </p>
</div>
`
},
{
  title:`JPA with Spring Data`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to JPA with Spring Data</h2>
  <p style="font-size: 16px; color: #34495e;">
    Java Persistence API (JPA) is a standard specification for object-relational mapping (ORM) in Java, enabling developers to manage relational data in applications using object-oriented principles. Spring Data JPA, a part of the larger Spring Data family, simplifies the implementation of JPA-based repositories by reducing boilerplate code and providing powerful features like query methods, pagination, and auditing. Together, JPA and Spring Data JPA make it easier to build data access layers in Spring Boot applications.
  </p>

  <h3 style="color: #16a085;">Why Use JPA with Spring Data?</h3>
  <p style="color: #2c3e50;">
    Using JPA with Spring Data offers several advantages:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Reduced Boilerplate Code</strong>: Spring Data JPA eliminates the need for manual implementation of common CRUD operations.</li>
    <li><strong>Query Methods</strong>: Automatically generates queries based on method names, reducing the need for writing JPQL or SQL.</li>
    <li><strong>Pagination and Sorting</strong>: Provides built-in support for pagination and sorting, making it easier to handle large datasets.</li>
    <li><strong>Auditing</strong>: Automatically tracks entity creation and modification timestamps.</li>
    <li><strong>Integration with Spring Ecosystem</strong>: Seamlessly integrates with other Spring components like Spring Boot, Spring Security, and Spring MVC.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of JPA with Spring Data</h3>
  <p style="color: #2c3e50;">
    When working with JPA and Spring Data, it is important to understand the following concepts:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Entities</strong>: Represent database tables as Java objects using JPA annotations like <code>@Entity</code>, <code>@Id</code>, and <code>@GeneratedValue</code>.</li>
    <li><strong>Repositories</strong>: Interfaces that extend <code>JpaRepository</code> to provide CRUD operations and custom query methods.</li>
    <li><strong>Query Methods</strong>: Methods in repositories that automatically generate queries based on their names.</li>
    <li><strong>Pagination</strong>: Supports paginated queries using the <code>Pageable</code> interface.</li>
    <li><strong>Auditing</strong>: Automatically tracks entity creation and modification using annotations like <code>@CreatedDate</code> and <code>@LastModifiedDate</code>.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Using JPA with Spring Data in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to use JPA with Spring Data in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Define an Entity</h4>
  <p style="color: #2c3e50;">
    Create a JPA entity to represent a database table.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
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

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Create a Repository</h4>
  <p style="color: #2c3e50;">
    Extend <code>JpaRepository</code> to create a repository for the entity.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;

      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
          // Custom query method
          User findByEmail(String email);
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Use the Repository in a Service</h4>
  <p style="color: #2c3e50;">
    Use the repository methods in a service to perform database operations.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Service;

      @Service
      public class UserService {

          @Autowired
          private UserRepository userRepository;

          public User getUserByEmail(String email) {
              return userRepository.findByEmail(email);
          }

          public User createUser(User user) {
              return userRepository.save(user);
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Enable JPA Auditing</h4>
  <p style="color: #2c3e50;">
    Enable JPA auditing to automatically track entity creation and modification timestamps.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.context.annotation.Configuration;
      import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

      @Configuration
      @EnableJpaAuditing
      public class JpaConfig {
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">5. Add Auditing Fields to the Entity</h4>
  <p style="color: #2c3e50;">
    Add fields to the entity to track creation and modification timestamps.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.Entity;
      import jakarta.persistence.GeneratedValue;
      import jakarta.persistence.GenerationType;
      import jakarta.persistence.Id;
      import org.springframework.data.annotation.CreatedDate;
      import org.springframework.data.annotation.LastModifiedDate;

      import java.time.LocalDateTime;

      @Entity
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;

          @CreatedDate
          private LocalDateTime createdAt;

          @LastModifiedDate
          private LocalDateTime updatedAt;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Using JPA with Spring Data</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use query methods for simple queries to reduce boilerplate code.</li>
    <li>Leverage pagination and sorting for large datasets to improve performance.</li>
    <li>Enable JPA auditing to automatically track entity changes.</li>
    <li>Use <code>@Query</code> for complex queries that cannot be expressed using query methods.</li>
    <li>Optimize entity relationships (e.g., lazy loading) to avoid performance issues.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    JPA with Spring Data is a powerful combination for building data access layers in Spring Boot applications. By leveraging Spring Data JPA, you can reduce boilerplate code, simplify query creation, and enhance the functionality of your repositories. Whether you're performing basic CRUD operations or complex queries, JPA and Spring Data provide the tools and features needed to work with your data efficiently and effectively. By following best practices, you can ensure that your application is scalable, maintainable, and performant.
  </p>
</div>`
},
{
  title:`Repository Pattern`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Understanding the Repository Pattern in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    The Repository Pattern is a design pattern that helps abstract data access logic, promoting separation of concerns.
    In Spring Boot, it is commonly implemented using Spring Data JPA, making data operations easier and more structured.
  </p>

  <h3 style="color: #16a085;">Key Benefits of Repository Pattern:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Encapsulates database logic for better maintainability.</li>
    <li>Reduces boilerplate code when using Spring Data JPA.</li>
    <li>Improves testability by allowing mocking of repositories.</li>
    <li>Enhances scalability by abstracting persistence logic.</li>
  </ul>

  <h3 style="color: #e67e22;">Implementing Repository Pattern in Spring Boot</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.stereotype.Repository;

      @Repository
      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
          User findByEmail(String email);
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Service Layer Using Repository</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List&lt;User&gt; getAllUsers() {
              return userRepository.findAll();
          }

          public User getUserByEmail(String email) {
              return userRepository.findByEmail(email);
          }
      }
    </code>
  </pre>

  <h3 style="color: #c0392b;">Best Practices</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use meaningful method names in repositories.</li>
    <li>Leverage Spring Data JPA’s built-in query methods.</li>
    <li>Avoid placing business logic inside repository classes.</li>
    <li>Use pagination and sorting to optimize performance.</li>
  </ul>

  <p style="color: #2c3e50;">
    The Repository Pattern simplifies database interactions, making applications more modular, testable, and maintainable.
  </p>
</div>

 `
},
{
  title:`Spring Data JPA Repositories`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Spring Data JPA Repositories</h2>
  <p style="font-size: 16px; color: #34495e;">
    Spring Data JPA simplifies database access by providing a standard way to define repositories.
    It abstracts the persistence layer, reducing boilerplate code and enhancing maintainability.
  </p>

  <h3 style="color: #16a085;">Key Features of Spring Data JPA Repositories:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Eliminates boilerplate DAO code.</li>
    <li>Provides built-in CRUD operations.</li>
    <li>Supports derived query methods.</li>
    <li>Allows the use of custom JPQL and native queries.</li>
    <li>Integrates seamlessly with Spring Boot and Hibernate.</li>
    <li>Offers pagination and sorting functionalities.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Defining a JPA Repository</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.stereotype.Repository;

      @Repository
      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
          User findByUsername(String username);
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Example: Using the Repository in a Service</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          public List&lt;User&gt; getAllUsers() {
              return userRepository.findAll();
          }

          public User getUserByUsername(String username) {
              return userRepository.findByUsername(username);
          }
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Example: Custom Query with @Query Annotation</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.Query;
      import org.springframework.data.repository.query.Param;

      @Repository
      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
          @Query("SELECT u FROM User u WHERE u.email = :email")
          User findUserByEmail(@Param("email") String email);
      }
    </code>
  </pre>

  <h3 style="color: #8e44ad;">Example: Pagination and Sorting</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.domain.Page;
      import org.springframework.data.domain.Pageable;

      @Repository
      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
          Page&lt;User&gt; findByRole(String role, Pageable pageable);
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    By leveraging Spring Data JPA repositories, developers can streamline database interactions
    while maintaining clean, modular, and efficient code.
  </p>
</div>
`
},
{ 
  title:`Paging & Sorting`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Paging and Sorting in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Paging and sorting are essential features for handling large datasets in Spring Boot applications. Paging allows you to retrieve data in smaller, manageable chunks (pages), while sorting enables you to order the data based on specific criteria. Together, these features improve performance, reduce memory usage, and enhance the user experience by providing structured and organized data. Spring Data JPA provides built-in support for paging and sorting, making it easy to implement these features in your application.
  </p>

  <h3 style="color: #16a085;">Why Use Paging and Sorting?</h3>
  <p style="color: #2c3e50;">
    Paging and sorting offer several benefits:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Improved Performance</strong>: Retrieving smaller subsets of data reduces the load on the database and improves response times.</li>
    <li><strong>Reduced Memory Usage</strong>: Processing smaller datasets minimizes memory consumption on the server and client sides.</li>
    <li><strong>Enhanced User Experience</strong>: Users can navigate through data more efficiently with paginated and sorted results.</li>
    <li><strong>Scalability</strong>: Paging and sorting make it easier to handle large datasets as your application grows.</li>
    <li><strong>Flexibility</strong>: Allows users to customize how data is displayed based on their preferences.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Paging and Sorting</h3>
  <p style="color: #2c3e50;">
    When working with paging and sorting in Spring Boot, it is important to understand the following concepts:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Pageable</strong>: An interface in Spring Data that represents a request for a specific page of data, including page number, page size, and sorting criteria.</li>
    <li><strong>Page</strong>: A Spring Data class that represents a single page of data, including the content, total number of pages, and total number of elements.</li>
    <li><strong>Sort</strong>: A class that defines the sorting criteria, such as the field to sort by and the direction (ascending or descending).</li>
    <li><strong>Repository Methods</strong>: Methods in Spring Data repositories that accept <code>Pageable</code> or <code>Sort</code> parameters to return paginated or sorted results.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Implementing Paging and Sorting in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to implement paging and sorting in a Spring Boot application using Spring Data JPA.
  </p>

  <h4 style="color: #8e44ad;">1. Define an Entity</h4>
  <p style="color: #2c3e50;">
    Create a JPA entity to represent a database table.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
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

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Create a Repository</h4>
  <p style="color: #2c3e50;">
    Extend <code>JpaRepository</code> to create a repository for the entity.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.domain.Page;
      import org.springframework.data.domain.Pageable;
      import org.springframework.data.jpa.repository.JpaRepository;

      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
          // Paginated query
          Page&lt;User&gt; findAll(Pageable pageable);

          // Paginated and sorted query
          Page&lt;User&gt; findByNameContaining(String name, Pageable pageable);
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Use the Repository in a Service</h4>
  <p style="color: #2c3e50;">
    Use the repository methods in a service to perform paginated and sorted queries.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.data.domain.Page;
      import org.springframework.data.domain.PageRequest;
      import org.springframework.data.domain.Sort;
      import org.springframework.stereotype.Service;

      @Service
      public class UserService {

          @Autowired
          private UserRepository userRepository;

          public Page&lt;User&gt; getAllUsers(int page, int size, String sortBy, String sortDir) {
              Sort sort = Sort.by(Sort.Direction.fromString(sortDir), sortBy);
              PageRequest pageRequest = PageRequest.of(page, size, sort);
              return userRepository.findAll(pageRequest);
          }

          public Page&lt;User&gt; searchUsersByName(String name, int page, int size, String sortBy, String sortDir) {
              Sort sort = Sort.by(Sort.Direction.fromString(sortDir), sortBy);
              PageRequest pageRequest = PageRequest.of(page, size, sort);
              return userRepository.findByNameContaining(name, pageRequest);
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Create a Controller</h4>
  <p style="color: #2c3e50;">
    Expose the paginated and sorted data through a REST controller.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.data.domain.Page;
      import org.springframework.web.bind.annotation.*;

      @RestController
      @RequestMapping("/users")
      public class UserController {

          @Autowired
          private UserService userService;

          @GetMapping
          public Page&lt;User&gt; getAllUsers(
                  @RequestParam(defaultValue = "0") int page,
                  @RequestParam(defaultValue = "10") int size,
                  @RequestParam(defaultValue = "name") String sortBy,
                  @RequestParam(defaultValue = "asc") String sortDir) {
              return userService.getAllUsers(page, size, sortBy, sortDir);
          }

          @GetMapping("/search")
          public Page&lt;User&gt; searchUsersByName(
                  @RequestParam String name,
                  @RequestParam(defaultValue = "0") int page,
                  @RequestParam(defaultValue = "10") int size,
                  @RequestParam(defaultValue = "name") String sortBy,
                  @RequestParam(defaultValue = "asc") String sortDir) {
              return userService.searchUsersByName(name, page, size, sortBy, sortDir);
          }
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Paging and Sorting</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use sensible default values for page size and sorting criteria to improve usability.</li>
    <li>Limit the maximum page size to prevent performance issues.</li>
    <li>Cache frequently accessed pages to reduce database load.</li>
    <li>Use indexes on sorted fields to improve query performance.</li>
    <li>Provide clear documentation for paginated and sorted endpoints.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Paging and sorting are essential features for handling large datasets in Spring Boot applications. By leveraging Spring Data JPA's built-in support for paging and sorting, you can improve performance, reduce memory usage, and enhance the user experience. Whether you're building RESTful APIs or complex web applications, paging and sorting provide the tools and flexibility needed to work with your data efficiently and effectively. By following best practices, you can ensure that your application is scalable, maintainable, and performant.
  </p>
</div>`

},
{
  title:`JPA Performance Optimization`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">JPA Performance Optimization</h2>
  <p style="font-size: 16px; color: #34495e;">
    Optimizing JPA performance is crucial for efficient database interactions and scalable applications.
    Following best practices ensures reduced query execution time, lower memory consumption, and better responsiveness.
  </p>

  <h3 style="color: #16a085;">Key Performance Optimization Techniques:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <code>FetchType.LAZY</code> for collections to avoid unnecessary data loading.</li>
    <li>Leverage <code>@BatchSize</code> for optimized lazy loading.</li>
    <li>Optimize queries using <code>@Query</code> and native queries.</li>
    <li>Use indexing on frequently searched columns.</li>
    <li>Avoid N+1 query problems with <code>JOIN FETCH</code>.</li>
    <li>Use the second-level cache (<code>@Cacheable</code>) for frequently accessed entities.</li>
    <li>Use projections (<code>DTO Projections</code>) for fetching only required fields.</li>
    <li>Limit query results with <code>setMaxResults()</code> or <code>Pageable</code>.</li>
    <li>Optimize bulk inserts and updates using batch processing.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using FetchType.LAZY to Avoid Overloading</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import javax.persistence.*;
      import java.util.List;

      @Entity
      public class User {
          @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;

          @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
          private List<Order> orders;
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Example: Solving N+1 Problem with JOIN FETCH</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.springframework.data.jpa.repository.Query;
      import org.springframework.data.repository.CrudRepository;
      import java.util.List;

      public interface UserRepository extends CrudRepository<User, Long> {
          @Query("SELECT u FROM User u JOIN FETCH u.orders WHERE u.id = :userId")
          User findUserWithOrders(Long userId);
      }
    </code>
  </pre>

  <h3 style="color: #e74c3c;">Example: Using DTO Projections for Performance</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      public interface UserDTO {
          String getName();
          int getOrderCount();
      }

      @Query("SELECT new com.example.dto.UserDTO(u.name, COUNT(o)) FROM User u LEFT JOIN u.orders o GROUP BY u.id")
      List<UserDTO> findUserSummary();
    </code>
  </pre>

  <p style="color: #2c3e50;">
    Implementing these optimizations ensures high performance and scalability in JPA-based applications.
  </p>
</div>
`
},
{
  title:`Auditing in JPA (Envers)`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Auditing in JPA (Envers)</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate Envers is a powerful auditing framework for JPA that allows tracking entity changes over time.
    It enables versioning of entity data and provides a way to retrieve historical records efficiently.
  </p>

  <h3 style="color: #16a085;">Why Use JPA Envers?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Tracks changes to entity records automatically.</li>
    <li>Stores historical data in audit tables.</li>
    <li>Provides a simple way to retrieve previous versions of entities.</li>
    <li>Works seamlessly with Spring Data JPA.</li>
  </ul>

  <h3 style="color: #e67e22;">Adding Envers to a Spring Boot Application</h3>
  <p style="color: #2c3e50;">To enable Envers, add the following dependency in your <code>pom.xml</code>:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.hibernate&lt;/groupId&gt;
          &lt;artifactId&gt;hibernate-envers&lt;/artifactId&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Configuring an Auditable Entity</h3>
  <p style="color: #2c3e50;">Use the <code>@Audited</code> annotation to enable auditing on an entity:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.hibernate.envers.Audited;
      import javax.persistence.*;

      @Entity
      @Audited
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String department;
          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #e74c3c;">Retrieving Historical Data</h3>
  <p style="color: #2c3e50;">Use the <code>AuditReader</code> to fetch historical entity versions:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code class="language-java">
      import org.hibernate.envers.AuditReader;
      import org.hibernate.envers.AuditReaderFactory;
      import org.hibernate.Session;
      import javax.persistence.EntityManager;
      import javax.persistence.PersistenceContext;
      import java.util.List;

      public class AuditService {

          @PersistenceContext
          private EntityManager entityManager;

          public List<Employee> getEmployeeRevisions(Long id) {
              AuditReader auditReader = AuditReaderFactory.get(entityManager.unwrap(Session.class));
              return auditReader.createQuery()
                      .forRevisionsOfEntity(Employee.class, false, true)
                      .add(org.hibernate.envers.query.criteria.Restrictions.idEq(id))
                      .getResultList();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Hibernate Envers simplifies auditing in JPA, making it easy to track and retrieve historical data.
    By integrating Envers into your Spring Boot application, you can maintain an audit trail effortlessly.
  </p>
</div>
`
},
{
  title:`JPA Query Optimization`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">JPA Query Optimization</h2>
  <p style="font-size: 16px; color: #34495e;">
    Optimizing JPA queries is crucial for enhancing application performance and reducing database load. 
    Poorly optimized queries can lead to performance bottlenecks, excessive memory usage, and slow response times.
  </p>

  <h3 style="color: #16a085;">Key Techniques for JPA Query Optimization:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use **pagination** with <code>setMaxResults()</code> and <code>setFirstResult()</code> for large datasets.</li>
    <li>Prefer **JPQL or Criteria API** over native queries for better maintainability.</li>
    <li>Optimize **SELECT queries** by fetching only required columns using **projections**.</li>
    <li>Leverage **@NamedQuery** and **@NamedNativeQuery** for precompiled queries.</li>
    <li>Use **batch fetching** and **JOIN FETCH** to prevent the N+1 problem.</li>
    <li>Enable **second-level cache** using Hibernate caching strategies.</li>
    <li>Index frequently queried columns in the database.</li>
    <li>Use **query hints** for fine-tuning execution plans.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Using JOIN FETCH to Prevent N+1 Problem</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Query("SELECT u FROM User u JOIN FETCH u.roles WHERE u.id = :id")
      User findUserWithRoles(@Param("id") Long id);
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Example: Pagination in JPA</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Pageable pageable = PageRequest.of(0, 10, Sort.by("name"));
      Page<User> users = userRepository.findAll(pageable);
    </code>
  </pre>

  <h3 style="color: #2980b9;">Example: Using Query Hints</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @QueryHints({ @QueryHint(name = "org.hibernate.readOnly", value = "true") })
      @Query("SELECT u FROM User u WHERE u.email = :email")
      User findByEmail(@Param("email") String email);
    </code>
  </pre>

  <p style="color: #2c3e50;">
    By implementing these optimization techniques, you can significantly improve JPA query performance, 
    reduce database load, and ensure a smoother user experience.
  </p>
</div>
`
},
{
  title:`JPA Best Practices`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">JPA Best Practices</h2>
  <p style="font-size: 16px; color: #34495e;">
    Java Persistence API (JPA) is a powerful framework for managing relational data in Java applications.
    Following best practices ensures efficiency, maintainability, and optimal performance.
  </p>

  <h3 style="color: #16a085;">Key JPA Best Practices:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <code>@Entity</code> annotations correctly to map classes to database tables.</li>
    <li>Define a proper <code>@Id</code> with <code>@GeneratedValue</code> for primary keys.</li>
    <li>Use **DTOs (Data Transfer Objects)** to avoid exposing entity classes directly.</li>
    <li>Leverage **lazy loading** for associations to prevent unnecessary data fetching.</li>
    <li>Optimize queries using **JPQL, Criteria API, or native SQL** where needed.</li>
    <li>Use **batch processing** for bulk inserts and updates.</li>
    <li>Apply caching mechanisms like **Hibernate's second-level cache** for better performance.</li>
    <li>Manage transactions effectively with **@Transactional** annotation.</li>
    <li>Use **connection pooling** to optimize database connections.</li>
  </ul>

  <h3 style="color: #e67e22;">Example: Proper Entity Mapping</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;

      @Entity
      @Table(name = "users")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(nullable = false)
          private String name;

          @Column(unique = true, nullable = false)
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Example: Optimized Querying</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.data.jpa.repository.Query;
      import org.springframework.stereotype.Repository;

      @Repository
      public interface UserRepository extends JpaRepository<User, Long> {
          @Query("SELECT u FROM User u WHERE u.email = :email")
          User findByEmail(String email);
      }
    </code>
  </pre>

  <h3 style="color: #2980b9;">Example: Using Transactions</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.stereotype.Service;
      import org.springframework.transaction.annotation.Transactional;

      @Service
      public class UserService {

          private final UserRepository userRepository;

          public UserService(UserRepository userRepository) {
              this.userRepository = userRepository;
          }

          @Transactional
          public void registerUser(User user) {
              userRepository.save(user);
              // Additional logic can be added here
          }
      }
    </code>
  </pre>

  <p style="color: #2c3e50;">
    By following these best practices, you can ensure that your JPA-based applications are efficient, scalable, and maintainable.
  </p>
</div>
`
},
{
title:`Testing JPA with Spring`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Testing JPA with Spring</h2>
  <p style="font-size: 16px; color: #34495e;">
    Testing is a critical part of developing robust and reliable Spring Boot applications. When working with JPA (Java Persistence API), it is essential to test your data access layer to ensure that your entities, repositories, and queries behave as expected. Spring Boot provides excellent support for testing JPA components, including in-memory databases, test annotations, and utilities to simplify the testing process. This article explores how to effectively test JPA components in a Spring Boot application.
  </p>

  <h3 style="color: #16a085;">Why Test JPA Components?</h3>
  <p style="color: #2c3e50;">
    Testing JPA components is important for several reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Ensure Data Integrity</strong>: Verify that your entities and repositories correctly persist and retrieve data.</li>
    <li><strong>Validate Queries</strong>: Ensure that your JPQL or native queries return the expected results.</li>
    <li><strong>Catch Bugs Early</strong>: Identify and fix issues in the data access layer before they reach production.</li>
    <li><strong>Improve Code Quality</strong>: Writing tests encourages better design and maintainability of your code.</li>
    <li><strong>Support Refactoring</strong>: Tests provide a safety net when making changes to your data access logic.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Testing JPA with Spring</h3>
  <p style="color: #2c3e50;">
    When testing JPA components in Spring Boot, it is important to understand the following concepts:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>In-Memory Databases</strong>: Use databases like H2 for fast and isolated testing.</li>
    <li><strong>Test Annotations</strong>: Annotations like <code>@DataJpaTest</code>, <code>@SpringBootTest</code>, and <code>@Transactional</code> simplify testing.</li>
    <li><strong>Test Data Setup</strong>: Use tools like <code>TestEntityManager</code> or SQL scripts to populate test data.</li>
    <li><strong>Assertions</strong>: Use assertions to verify the expected behavior of your JPA components.</li>
    <li><strong>Integration vs. Unit Testing</strong>: Decide whether to test individual components in isolation or as part of a larger system.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Testing JPA Components in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to test JPA components in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Define an Entity and Repository</h4>
  <p style="color: #2c3e50;">
    Create a JPA entity and a repository to test.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
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

          // Getters and Setters
      }

      import org.springframework.data.jpa.repository.JpaRepository;

      public interface UserRepository extends JpaRepository&lt;User, Long&gt; {
          User findByEmail(String email);
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Write a Test Class</h4>
  <p style="color: #2c3e50;">
    Use the <code>@DataJpaTest</code> annotation to test the repository with an in-memory database.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.junit.jupiter.api.Test;
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
      import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;

      import static org.assertj.core.api.Assertions.assertThat;

      @DataJpaTest
      public class UserRepositoryTest {

          @Autowired
          private TestEntityManager entityManager;

          @Autowired
          private UserRepository userRepository;

          @Test
          public void testFindByEmail() {
              // Arrange
              User user = new User();
              user.setName("John Doe");
              user.setEmail("john.doe@example.com");
              entityManager.persist(user);
              entityManager.flush();

              // Act
              User found = userRepository.findByEmail(user.getEmail());

              // Assert
              assertThat(found.getEmail()).isEqualTo(user.getEmail());
          }
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Test Query Methods</h4>
  <p style="color: #2c3e50;">
    Test custom query methods in the repository.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Test
      public void testFindByName() {
          // Arrange
          User user = new User();
          user.setName("Jane Doe");
          user.setEmail("jane.doe@example.com");
          entityManager.persist(user);
          entityManager.flush();

          // Act
          User found = userRepository.findByName(user.getName());

          // Assert
          assertThat(found.getName()).isEqualTo(user.getName());
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Test Transactions</h4>
  <p style="color: #2c3e50;">
    Use the <code>@Transactional</code> annotation to test transactional behavior.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.transaction.annotation.Transactional;

      @Test
      @Transactional
      public void testTransactionalBehavior() {
          // Arrange
          User user = new User();
          user.setName("Alice");
          user.setEmail("alice@example.com");
          entityManager.persist(user);
          entityManager.flush();

          // Act
          User found = userRepository.findByEmail(user.getEmail());

          // Assert
          assertThat(found).isNotNull();
          assertThat(found.getEmail()).isEqualTo(user.getEmail());
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Testing JPA with Spring</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use in-memory databases like H2 for fast and isolated testing.</li>
    <li>Leverage <code>@DataJpaTest</code> for repository testing and <code>@SpringBootTest</code> for integration testing.</li>
    <li>Use <code>TestEntityManager</code> to set up test data and verify persistence behavior.</li>
    <li>Test both positive and negative scenarios to ensure robustness.</li>
    <li>Keep tests independent and avoid relying on the state of other tests.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Testing JPA components is a crucial part of building reliable Spring Boot applications. By leveraging Spring Boot's testing support, you can ensure that your entities, repositories, and queries behave as expected. Whether you're writing unit tests for individual components or integration tests for the entire data access layer, following best practices will help you build a robust and maintainable application. Proper testing ensures data integrity, catches bugs early, and provides confidence when refactoring or extending your code.
  </p>
</div>
`},

  {
    title:`Testing JPA with Spring`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Hibernate Basics</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate is an Object-Relational Mapping (ORM) framework for Java applications, simplifying database interactions
    by mapping Java objects to database tables. It provides a powerful abstraction layer over JDBC and allows developers
    to work with databases using Java objects rather than SQL queries.
  </p>

  <h3 style="color: #16a085;">Key Features of Hibernate:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Eliminates boilerplate JDBC code and manages database connections.</li>
    <li>Supports automatic table generation and schema validation.</li>
    <li>Provides a powerful query language known as HQL (Hibernate Query Language).</li>
    <li>Ensures database portability with minimal changes.</li>
    <li>Supports caching mechanisms to improve performance.</li>
    <li>Manages transactions efficiently with ACID compliance.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Hibernate Architecture</h3>
  <p style="color: #34495e;">Hibernate consists of several core components:</p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>SessionFactory:</b> Provides factory methods to create Hibernate sessions.</li>
    <li><b>Session:</b> Represents a unit of work and handles database interactions.</li>
    <li><b>Transaction:</b> Manages atomic operations in Hibernate.</li>
    <li><b>Query:</b> Helps execute HQL or SQL queries.</li>
    <li><b>Configuration:</b> Defines database connection properties.</li>
  </ul>

  <h3 style="color: #9b59b6;">Example: Hibernate Entity and Configuration</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;

      @Entity
      @Table(name = "users")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Basic Hibernate Configuration (hibernate.cfg.xml)</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;hibernate-configuration&gt;
          &lt;session-factory&gt;
              &lt;property name="hibernate.connection.driver_class"&gt;com.mysql.cj.jdbc.Driver&lt;/property&gt;
              &lt;property name="hibernate.connection.url"&gt;jdbc:mysql://localhost:3306/mydb&lt;/property&gt;
              &lt;property name="hibernate.connection.username"&gt;root&lt;/property&gt;
              &lt;property name="hibernate.connection.password"&gt;password&lt;/property&gt;
              &lt;property name="hibernate.dialect"&gt;org.hibernate.dialect.MySQLDialect&lt;/property&gt;
              &lt;property name="hibernate.hbm2ddl.auto"&gt;update&lt;/property&gt;
          &lt;/session-factory&gt;
      &lt;/hibernate-configuration&gt;
    </code>
  </pre>

  <h3 style="color: #e67e22;">Basic CRUD Operations in Hibernate</h3>
  <p style="color: #34495e;">Below is an example of performing basic CRUD operations using Hibernate:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.Session;
      import org.hibernate.SessionFactory;
      import org.hibernate.Transaction;
      import org.hibernate.cfg.Configuration;

      public class HibernateExample {
          public static void main(String[] args) {
              SessionFactory factory = new Configuration().configure().buildSessionFactory();
              Session session = factory.openSession();
              Transaction tx = session.beginTransaction();

              User user = new User();
              user.setName("John Doe");
              user.setEmail("john@example.com");

              session.save(user);
              tx.commit();
              session.close();
              factory.close();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Hibernate simplifies database interactions by providing an ORM framework that eliminates the need for complex SQL queries.
    By leveraging Hibernate, developers can efficiently manage database operations, ensuring maintainability and performance
    in Java applications.
  </p>
</div>
`
},
{
title:`Hibernate Basics`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Hibernate Basics</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate is an Object-Relational Mapping (ORM) framework for Java applications, simplifying database interactions
    by mapping Java objects to database tables. It provides a powerful abstraction layer over JDBC and allows developers
    to work with databases using Java objects rather than SQL queries.
  </p>

  <h3 style="color: #16a085;">Key Features of Hibernate:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Eliminates boilerplate JDBC code and manages database connections.</li>
    <li>Supports automatic table generation and schema validation.</li>
    <li>Provides a powerful query language known as HQL (Hibernate Query Language).</li>
    <li>Ensures database portability with minimal changes.</li>
    <li>Supports caching mechanisms to improve performance.</li>
    <li>Manages transactions efficiently with ACID compliance.</li>
  </ul>

  <h3 style="color: #e67e22;">Basic Hibernate Architecture</h3>
  <p style="color: #34495e;">Hibernate consists of several core components:</p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>SessionFactory:</b> Provides factory methods to create Hibernate sessions.</li>
    <li><b>Session:</b> Represents a unit of work and handles database interactions.</li>
    <li><b>Transaction:</b> Manages atomic operations in Hibernate.</li>
    <li><b>Query:</b> Helps execute HQL or SQL queries.</li>
    <li><b>Configuration:</b> Defines database connection properties.</li>
  </ul>

  <h3 style="color: #9b59b6;">Example: Hibernate Entity and Configuration</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;

      @Entity
      @Table(name = "users")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Basic Hibernate Configuration (hibernate.cfg.xml)</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;hibernate-configuration&gt;
          &lt;session-factory&gt;
              &lt;property name="hibernate.connection.driver_class"&gt;com.mysql.cj.jdbc.Driver&lt;/property&gt;
              &lt;property name="hibernate.connection.url"&gt;jdbc:mysql://localhost:3306/mydb&lt;/property&gt;
              &lt;property name="hibernate.connection.username"&gt;root&lt;/property&gt;
              &lt;property name="hibernate.connection.password"&gt;password&lt;/property&gt;
              &lt;property name="hibernate.dialect"&gt;org.hibernate.dialect.MySQLDialect&lt;/property&gt;
              &lt;property name="hibernate.hbm2ddl.auto"&gt;update&lt;/property&gt;
          &lt;/session-factory&gt;
      &lt;/hibernate-configuration&gt;
    </code>
  </pre>

  <h3 style="color: #e67e22;">Basic CRUD Operations in Hibernate</h3>
  <p style="color: #34495e;">Below is an example of performing basic CRUD operations using Hibernate:</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.Session;
      import org.hibernate.SessionFactory;
      import org.hibernate.Transaction;
      import org.hibernate.cfg.Configuration;

      public class HibernateExample {
          public static void main(String[] args) {
              SessionFactory factory = new Configuration().configure().buildSessionFactory();
              Session session = factory.openSession();
              Transaction tx = session.beginTransaction();

              User user = new User();
              user.setName("John Doe");
              user.setEmail("john@example.com");

              session.save(user);
              tx.commit();
              session.close();
              factory.close();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Hibernate simplifies database interactions by providing an ORM framework that eliminates the need for complex SQL queries.
    By leveraging Hibernate, developers can efficiently manage database operations, ensuring maintainability and performance
    in Java applications.
  </p>
</div>
`
},
{
  title:`Hibernate vs JDBC`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Hibernate vs JDBC</h2>
  <p style="font-size: 16px; color: #34495e;">
    When building Java applications that require interaction with databases, developers often choose between two primary approaches: Hibernate and JDBC. While both methods enable database operations, they differ significantly in terms of ease of use, flexibility, and functionality. This article explores the key differences between Hibernate and JDBC, helping developers understand which option suits their project needs.
  </p>

  <h3 style="color: #16a085;">JDBC (Java Database Connectivity) Overview</h3>
  <p style="font-size: 16px; color: #34495e;">
    JDBC is a low-level API for connecting and interacting with relational databases in Java. It allows developers to execute SQL queries directly against a database using Java code. The JDBC API provides a set of interfaces and classes for working with relational databases, including establishing connections, executing queries, and processing result sets.
  </p>
  
  <h3 style="color: #16a085;">Hibernate Overview</h3>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate, on the other hand, is an Object-Relational Mapping (ORM) framework that abstracts away the complexities of interacting with relational databases. Hibernate maps Java objects to database tables and provides a high-level interface for database operations. It offers an abstraction layer over JDBC, enabling developers to work with objects instead of writing complex SQL queries.
  </p>

  <h3 style="color: #e67e22;">Key Differences Between Hibernate and JDBC</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Level of Abstraction:</b> JDBC is a low-level API that requires developers to write raw SQL queries and handle result sets manually. Hibernate, however, provides a higher level of abstraction by mapping Java objects to database tables, allowing developers to focus on business logic instead of SQL.</li>
    <li><b>SQL Management:</b> With JDBC, developers must write and maintain SQL queries explicitly for CRUD operations. In Hibernate, queries are automatically generated based on object mapping, and developers can use Hibernate Query Language (HQL) or Criteria API to perform database operations.</li>
    <li><b>Code Complexity:</b> JDBC often involves writing repetitive code for establishing connections, executing queries, and processing results. Hibernate reduces this complexity by managing connections, transactions, and SQL generation internally.</li>
    <li><b>Transaction Management:</b> In JDBC, developers need to manually manage transactions, ensuring that operations are executed within a transaction context. Hibernate automatically manages transactions and provides support for declarative transaction handling.</li>
    <li><b>Database Portability:</b> JDBC queries are database-dependent, meaning the same SQL might not work across different database systems. Hibernate abstracts database-specific details and allows applications to be more database-agnostic, making it easier to switch between different databases.</li>
    <li><b>Performance Optimization:</b> Hibernate provides built-in caching mechanisms to optimize performance by reducing database queries. JDBC requires manual optimization techniques such as connection pooling and result set caching.</li>
  </ul>

  <h3 style="color: #9b59b6;">Hibernate vs JDBC - Pros and Cons</h3>
  <h4 style="color: #e67e22;">JDBC Pros:</h4>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Offers complete control over database operations, allowing fine-grained optimization.</li>
    <li>Direct access to SQL, making it suitable for complex queries where fine-tuned SQL is necessary.</li>
    <li>Does not require any additional frameworks or libraries, making it a lightweight option.</li>
  </ul>

  <h4 style="color: #e67e22;">JDBC Cons:</h4>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Requires writing boilerplate code for database connections, transactions, and SQL management.</li>
    <li>Harder to maintain as the application grows, especially with complex SQL statements.</li>
    <li>Does not provide built-in mechanisms for caching, object-relational mapping, or transaction management.</li>
  </ul>

  <h4 style="color: #e67e22;">Hibernate Pros:</h4>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Reduces the need for writing SQL and handling database connections, transactions, and object-relational mapping.</li>
    <li>Provides automatic CRUD operations and advanced features like caching, lazy loading, and batch processing.</li>
    <li>Ensures database portability and supports multiple database systems with minimal changes to the code.</li>
  </ul>

  <h4 style="color: #e67e22;">Hibernate Cons:</h4>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Can introduce performance overhead due to additional abstraction layers and automatic operations.</li>
    <li>Requires learning the framework and its conventions, especially for advanced features like HQL and caching.</li>
    <li>In some scenarios, Hibernate’s automatic behavior might not be as efficient as a well-written, hand-crafted SQL query.</li>
  </ul>

  <h3 style="color: #2c3e50;">When to Use JDBC?</h3>
  <p style="color: #34495e;">
    JDBC is suitable for applications that require fine-grained control over SQL queries and database interactions. It is ideal for performance-critical applications or scenarios where the developer needs to execute complex, custom SQL queries. JDBC is also a good choice for simple applications with limited database operations.
  </p>

  <h3 style="color: #2c3e50;">When to Use Hibernate?</h3>
  <p style="color: #34495e;">
    Hibernate is best for applications that require a high level of abstraction, simplified CRUD operations, and database portability. If your application has complex object models or requires automatic persistence management, Hibernate is a more efficient solution. It is also recommended when working with large-scale applications where transaction management, caching, and performance optimization are important.
  </p>

  <h3 style="color: #16a085;">Conclusion</h3>
  <p style="color: #34495e;">
    Both JDBC and Hibernate have their place in Java development, and the decision between them depends on the specific needs of the project. JDBC provides greater control and efficiency for low-level database interactions, while Hibernate simplifies the development process by handling object-relational mapping and providing powerful abstraction features. Understanding the strengths and limitations of each will help developers choose the right tool for their application.
  </p>
</div>
`
},
{
  title:`Architecture & Workflow`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Hibernate Architecture & Workflow</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate is a powerful Object-Relational Mapping (ORM) framework that abstracts database interactions, allowing developers to work with Java objects instead of raw SQL queries. To better understand how Hibernate operates, it’s crucial to grasp its architecture and the overall workflow involved in managing database operations.
  </p>

  <h3 style="color: #16a085;">Hibernate Architecture Overview</h3>
  <p style="font-size: 16px; color: #34495e;">
    The architecture of Hibernate consists of several core components that collaborate to handle tasks such as object-relational mapping, transaction management, and query execution. Each of these components plays a vital role in simplifying database interactions within Java applications.
  </p>

  <h3 style="color: #e67e22;">Core Components of Hibernate Architecture</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>SessionFactory:</b> The SessionFactory is a central component in Hibernate. It is responsible for creating Session objects and managing the lifecycle of these objects. A SessionFactory is typically configured once per application, as it can be costly to create multiple instances.</li>
    <li><b>Session:</b> A Session represents a single unit of work, and it is used to interact with the database. It is responsible for CRUD operations (Create, Read, Update, Delete) and the query execution. The Session is short-lived and typically tied to a single transaction.</li>
    <li><b>Transaction:</b> Transactions ensure that database operations are atomic and consistent. Hibernate handles transaction management automatically, ensuring ACID (Atomicity, Consistency, Isolation, Durability) compliance for database operations.</li>
    <li><b>Query:</b> Hibernate provides powerful query options, such as Hibernate Query Language (HQL) and the Criteria API, which abstract away the need for complex SQL queries. These queries are executed using the Session object.</li>
    <li><b>Configuration:</b> The Configuration class in Hibernate is responsible for setting up Hibernate’s runtime environment, including database connection properties and mapping of Java classes to database tables.</li>
    <li><b>Mapping:</b> Mapping is the process of associating Java objects with database tables. Hibernate uses annotations or XML files to map class properties to database columns.</li>
  </ul>

  <h3 style="color: #9b59b6;">Hibernate Workflow</h3>
  <p style="color: #34495e;">
    The Hibernate workflow revolves around several key steps, from the initialization of a session to performing CRUD operations and managing transactions. Below is an outline of the basic steps involved in the Hibernate workflow.
  </p>

  <h4 style="color: #e67e22;">Step 1: Configuration</h4>
  <p style="color: #34495e;">
    Before interacting with the database, Hibernate requires configuration to specify how it will connect to the database and manage sessions. This is typically done using the <code>hibernate.cfg.xml</code> configuration file, which contains properties such as database URL, username, password, and Hibernate dialect.
  </p>

  <h4 style="color: #e67e22;">Step 2: SessionFactory Creation</h4>
  <p style="color: #34495e;">
    Once the configuration is set up, the <b>SessionFactory</b> is created. This object is responsible for providing <b>Session</b> instances and is typically created once per application. The SessionFactory is thread-safe and can be shared across the application.
  </p>

  <h4 style="color: #e67e22;">Step 3: Open Session</h4>
  <p style="color: #34495e;">
    To perform database operations, a <b>Session</b> is opened. The Session object is the interface for interacting with the database. Each session represents a single unit of work and is tied to a transaction.
  </p>

  <h4 style="color: #e67e22;">Step 4: Begin Transaction</h4>
  <p style="color: #34495e;">
    Transactions ensure that a group of database operations are executed atomically. In Hibernate, you begin a transaction using the <code>beginTransaction()</code> method on the Session object. If the transaction is committed, all operations are saved to the database; otherwise, the operations are rolled back to maintain data consistency.
  </p>

  <h4 style="color: #e67e22;">Step 5: Perform CRUD Operations</h4>
  <p style="color: #34495e;">
    With the session and transaction in place, you can now perform CRUD operations on your Java objects. Hibernate automatically persists, retrieves, updates, and deletes objects from the database based on the mappings between the Java objects and database tables. These operations are carried out using the <code>save()</code>, <code>load()</code>, <code>update()</code>, and <code>delete()</code> methods on the session.
  </p>

  <h4 style="color: #e67e22;">Step 6: Commit or Rollback</h4>
  <p style="color: #34495e;">
    After performing the required database operations, you must commit the transaction to make the changes permanent. If an error occurs, you can roll back the transaction to undo any changes. This step ensures data consistency and integrity.
  </p>

  <h4 style="color: #
`
},
{
  title:`Configuration`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Hibernate Configuration</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate configuration is a crucial step when setting up Hibernate for Java applications. It defines the environment, the connection to the database, and the mapping between Java classes and database tables. Proper configuration is essential for the smooth operation of Hibernate, ensuring the ORM layer works efficiently and effectively with the database.
  </p>

  <h3 style="color: #16a085;">Types of Hibernate Configuration</h3>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate offers different ways to configure the framework, including XML-based configuration and annotation-based configuration. Both approaches are used to set up the Hibernate environment, but the XML-based configuration is the most common.
  </p>

  <h3 style="color: #e67e22;">1. XML-Based Configuration</h3>
  <p style="color: #34495e;">
    The <b>hibernate.cfg.xml</b> file is the most commonly used configuration file in Hibernate. It contains important configuration details, such as the database connection properties, Hibernate-specific settings, and the mapping of Java classes to database tables.
  </p>

  <h4 style="color: #e67e22;">hibernate.cfg.xml Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;hibernate-configuration&gt;
          &lt;session-factory&gt;
              &lt;property name="hibernate.connection.driver_class"&gt;com.mysql.cj.jdbc.Driver&lt;/property&gt;
              &lt;property name="hibernate.connection.url"&gt;jdbc:mysql://localhost:3306/mydb&lt;/property&gt;
              &lt;property name="hibernate.connection.username"&gt;root&lt;/property&gt;
              &lt;property name="hibernate.connection.password"&gt;password&lt;/property&gt;
              &lt;property name="hibernate.dialect"&gt;org.hibernate.dialect.MySQLDialect&lt;/property&gt;
              &lt;property name="hibernate.hbm2ddl.auto"&gt;update&lt;/property&gt;
              &lt;property name="hibernate.show_sql"&gt;true&lt;/property&gt;
              &lt;property name="hibernate.format_sql"&gt;true&lt;/property&gt;
          &lt;/session-factory&gt;
      &lt;/hibernate-configuration&gt;
    </code>
  </pre>

  <h4 style="color: #34495e;">Explanation of Key Properties:</h4>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>hibernate.connection.driver_class:</b> Specifies the JDBC driver class for the database (e.g., MySQL, PostgreSQL).</li>
    <li><b>hibernate.connection.url:</b> The URL to connect to the database.</li>
    <li><b>hibernate.connection.username:</b> The database username.</li>
    <li><b>hibernate.connection.password:</b> The password to access the database.</li>
    <li><b>hibernate.dialect:</b> Defines the database dialect Hibernate should use (e.g., MySQL, PostgreSQL, Oracle).</li>
    <li><b>hibernate.hbm2ddl.auto:</b> Specifies the schema generation strategy. Common values include <code>update</code>, <code>create</code>, or <code>validate</code>.</li>
    <li><b>hibernate.show_sql:</b> If set to <code>true</code>, Hibernate will log SQL statements to the console.</li>
    <li><b>hibernate.format_sql:</b> If set to <code>true</code>, SQL queries will be formatted for better readability.</li>
  </ul>

  <h3 style="color: #9b59b6;">2. Annotation-Based Configuration</h3>
  <p style="color: #34495e;">
    In addition to the XML-based configuration, Hibernate also supports annotation-based configuration, which allows developers to configure the database mappings directly in the Java code using annotations. This eliminates the need for an external configuration file.
  </p>

  <h4 style="color: #e67e22;">Annotation-Based Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;

      @Entity
      @Table(name = "users")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(name = "user_name")
          private String name;

          @Column(name = "user_email")
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #34495e;">Explanation of Annotations:</h4>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>@Entity:</b> Marks the class as a persistent entity that Hibernate will map to a database table.</li>
    <li><b>@Table:</b> Specifies the database table name associated with the entity.</li>
    <li><b>@Id:</b> Denotes the primary key of the entity.</li>
    <li><b>@GeneratedValue:</b> Defines how the primary key value is generated (e.g., auto-increment).</li>
    <li><b>@Column:</b> Maps the class attributes to the respective database columns.</li>
  </ul>

  <h3 style="color: #e67e22;">3. Programmatic Configuration</h3>
  <p style="color: #34495e;">
    Hibernate can also be configured programmatically, which allows developers to set configuration properties and build the <b>SessionFactory</b> object through Java code. This approach is typically used for more complex configurations or when you need more control over the configuration process.
  </p>

  <h4 style="color: #e67e22;">Programmatic Configuration Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.SessionFactory;
      import org.hibernate.cfg.Configuration;

      public class HibernateUtil {
          private static SessionFactory factory;

          static {
              try {
                  // Create the SessionFactory from hibernate.cfg.xml
                  factory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
              } catch (Exception e) {
                  e.printStackTrace();
              }
          }

          public static SessionFactory getSessionFactory() {
              return factory;
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Understanding Configuration Options</h3>
  <p style="color: #34495e;">
    In addition to specifying connection properties and mappings, Hibernate provides several other configuration options that allow fine-tuning of behavior. These options include enabling caching, configuring transaction management, setting batch sizes for SQL operations, and more.
  </p>

  <h4 style="color: #e67e22;">Some Important Hibernate Configuration Properties:</h4>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>hibernate.cache.use_second_level_cache:</b> Enables/disables the second-level cache.</li>
    <li><b>hibernate.cache.region.factory_class:</b> Specifies the cache provider to use (e.g., Ehcache, Infinispan).</li>
    <li><b>hibernate.jdbc.batch_size:</b> Defines the batch size for JDBC operations, improving performance during bulk inserts/updates.</li>
    <li><b>hibernate.current_session_context_class:</b> Defines how sessions are managed in a multi-threaded environment (e.g., <code>thread</code>, <code>jta</code>).</li>
    <li><b>hibernate.hbm2ddl.auto:</b> Controls how Hibernate handles schema generation (e.g., <code>update</code>, <code>create</code>, <code>validate</code>).</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Proper Hibernate configuration is crucial for efficient and optimal database interaction in Java applications. By choosing the appropriate configuration method—XML-based, annotation-based, or programmatic—you can tailor Hibernate to fit your project's needs. Understanding configuration properties and how they affect Hibernate’s behavior is key to leveraging its full potential, ensuring that your database interactions are seamless, scalable, and performant.
  </p>
</div>
`
},
{
  title:`SessionFactory & Session`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">SessionFactory & Session</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Hibernate, <b>SessionFactory</b> and <b>Session</b> are two key components used to interact with the database. The <b>SessionFactory</b> is a factory object that creates <b>Session</b> instances, while the <b>Session</b> represents a single unit of work with the database. These components form the backbone of Hibernate’s database interaction process.
  </p>

  <h3 style="color: #16a085;">SessionFactory</h3>
  <p style="font-size: 16px; color: #34495e;">
    The <b>SessionFactory</b> is a thread-safe object that is responsible for creating <b>Session</b> instances. It is an expensive object to create, and therefore, it should be instantiated once per application. It is usually created during the application startup and used throughout the application’s lifecycle to obtain <b>Session</b> objects.
  </p>

  <h4 style="color: #e67e22;">SessionFactory Initialization</h4>
  <p style="color: #34495e;">
    The <b>SessionFactory</b> is typically created using the <code>Configuration</code> object, which loads configuration properties (e.g., hibernate.cfg.xml) and creates the <b>SessionFactory</b> instance. Once the <b>SessionFactory</b> is created, it can be used to open multiple <b>Session</b> objects.
  </p>

  <h4 style="color: #e67e22;">SessionFactory Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.SessionFactory;
      import org.hibernate.cfg.Configuration;

      public class HibernateUtil {
          private static SessionFactory factory;

          static {
              try {
                  // Create the SessionFactory from hibernate.cfg.xml
                  factory = new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
              } catch (Exception e) {
                  e.printStackTrace();
              }
          }

          public static SessionFactory getSessionFactory() {
              return factory;
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Session</h3>
  <p style="font-size: 16px; color: #34495e;">
    A <b>Session</b> is a single-threaded unit of work in Hibernate that is used to interact with the database. It is the main interface for database operations like saving, updating, deleting, and querying entities. It acts as a bridge between the application and the Hibernate ORM framework.
  </p>

  <h4 style="color: #e67e22;">Creating a Session</h4>
  <p style="color: #34495e;">
    A <b>Session</b> is created from the <b>SessionFactory</b> using the <code>openSession()</code> method. It is essential to open a session before performing any database operations and close it once the operations are complete.
  </p>

  <h4 style="color: #e67e22;">Session Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.Session;
      import org.hibernate.SessionFactory;
      import org.hibernate.Transaction;

      public class HibernateExample {
          public static void main(String[] args) {
              SessionFactory factory = HibernateUtil.getSessionFactory();
              Session session = factory.openSession();
              Transaction tx = session.beginTransaction();

              User user = new User();
              user.setName("John Doe");
              user.setEmail("john@example.com");

              session.save(user);
              tx.commit();
              session.close();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Session Methods</h3>
  <p style="font-size: 16px; color: #34495e;">
    The <b>Session</b> interface provides several methods for CRUD operations, transaction management, and querying. Some commonly used methods include:
  </p>

  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>save():</b> Persists an object in the database (insert operation).</li>
    <li><b>update():</b> Updates an existing object in the database.</li>
    <li><b>delete():</b> Deletes an object from the database.</li>
    <li><b>get():</b> Retrieves an object from the database by its identifier.</li>
    <li><b>load():</b> Loads an object from the database based on its identifier (lazy loading).</li>
    <li><b>beginTransaction():</b> Starts a new transaction.</li>
    <li><b>commit():</b> Commits the current transaction.</li>
    <li><b>rollback():</b> Rolls back the current transaction in case of an error.</li>
    <li><b>createQuery():</b> Creates a query to retrieve data from the database using HQL (Hibernate Query Language).</li>
  </ul>

  <h3 style="color: #e67e22;">Session Lifecycle</h3>
  <p style="color: #34495e;">
    A <b>Session</b> follows a specific lifecycle during its usage:
  </p>

  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Open:</b> A session is created by calling <code>openSession()</code> on the <b>SessionFactory</b>.</li>
    <li><b>Transactional:</b> After the session is opened, the developer can start a transaction using <code>beginTransaction()</code> to manage CRUD operations.</li>
    <li><b>Dirty Checking:</b> During the session, Hibernate automatically tracks changes made to the entities (dirty checking) and applies the changes to the database when the transaction is committed.</li>
    <li><b>Closed:</b> After performing the database operations, the session should be closed using <code>session.close()</code>.</li>
  </ul>

  <h3 style="color: #2c3e50;">Session vs SessionFactory</h3>
  <p style="font-size: 16px; color: #34495e;">
    While both the <b>SessionFactory</b> and <b>Session</b> are critical for Hibernate’s database interaction, they serve different purposes:
  </p>

  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>SessionFactory:</b> A <b>SessionFactory</b> is a factory for creating <b>Session</b> instances. It is created once and used throughout the application.</li>
    <li><b>Session:</b> A <b>Session</b> is used to perform CRUD operations on a single object at a time. It is created and destroyed for each unit of work (transaction).</li>
  </ul>

  <h3 style="color: #9b59b6;">Session & SessionFactory in a Real-World Example</h3>
  <p style="color: #34495e;">
    In a real-world scenario, the <b>SessionFactory</b> is initialized when the application starts up and is reused throughout the application’s lifecycle. On the other hand, a <b>Session</b> is created for each transaction or set of related operations, and it is closed when the operations are complete.
  </p>

  <h4 style="color: #e67e22;">Example of Using Session and SessionFactory:</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.Session;
      import org.hibernate.SessionFactory;
      import org.hibernate.Transaction;

      public class HibernateExample {
          public static void main(String[] args) {
              SessionFactory factory = HibernateUtil.getSessionFactory();
              Session session = factory.openSession();
              Transaction tx = session.beginTransaction();

              // Example CRUD operation
              User user = new User();
              user.setName("John Doe");
              user.setEmail("john@example.com");

              session.save(user); // Save the user to the database

              tx.commit(); // Commit the transaction
              session.close(); // Close the session
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    The <b>SessionFactory</b> and <b>Session</b> are central to Hibernate’s ORM functionality. The <b>SessionFactory</b> is responsible for creating <b>Session</b> instances and is typically initialized once per application, while the <b>Session</b> is used to perform individual CRUD operations within a transaction. Understanding how these components interact is key to effectively using Hibernate in Java applications.
  </p>
</div>
`
},
{
  title:`Entity Lifecycle`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Entity Lifecycle in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Spring Boot applications using JPA, entities go through a specific lifecycle. Understanding the entity lifecycle helps in managing data efficiently, improving performance, and avoiding common pitfalls.
  </p>

  <h3 style="color: #16a085;">Phases of Entity Lifecycle:</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>New (Transient) State:</strong> The entity is created but not yet associated with the persistence context.</li>
    <li><strong>Managed (Persistent) State:</strong> The entity is associated with the persistence context and synchronized with the database.</li>
    <li><strong>Detached State:</strong> The entity is no longer associated with the persistence context but still exists in memory.</li>
    <li><strong>Removed State:</strong> The entity is marked for deletion and will be removed from the database.</li>
  </ul>

  <h3 style="color: #e67e22;">Key JPA Annotations Affecting Lifecycle</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>@PostLoad</code> - Invoked after an entity is loaded from the database.</li>
    <li><code>@PrePersist</code> - Called before an entity is inserted into the database.</li>
    <li><code>@PostPersist</code> - Called after an entity has been inserted.</li>
    <li><code>@PreUpdate</code> - Called before an entity is updated.</li>
    <li><code>@PostUpdate</code> - Called after an entity is updated.</li>
    <li><code>@PreRemove</code> - Called before an entity is removed.</li>
    <li><code>@PostRemove</code> - Called after an entity has been removed.</li>
  </ul>

  <h3 style="color: #9b59b6;">Example: Entity Lifecycle Callbacks</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private LocalDateTime createdAt;
    
    @PrePersist
    public void prePersist() {
        this.createdAt = LocalDateTime.now();
        System.out.println("PrePersist: Setting createdAt timestamp.");
    }
    
    @PostLoad
    public void postLoad() {
        System.out.println("PostLoad: Entity has been loaded.");
    }
    
    @PreUpdate
    public void preUpdate() {
        System.out.println("PreUpdate: Entity is about to be updated.");
    }
    
    @PreRemove
    public void preRemove() {
        System.out.println("PreRemove: Entity is about to be removed.");
    }
}
    </code>
  </pre>

  <h3 style="color: #c0392b;">Best Practices for Managing Entity Lifecycle</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Avoid business logic inside entity lifecycle methods.</li>
    <li>Use <code>@Transactional</code> annotations correctly to manage entity state transitions.</li>
    <li>Detach entities when working with DTOs to prevent unwanted updates.</li>
    <li>Be mindful of performance impacts when using lifecycle callbacks.</li>
  </ul>

  <p style="color: #2c3e50;">
    Understanding and managing the entity lifecycle in Spring Boot improves data integrity and enhances application performance. Proper use of JPA lifecycle events ensures efficient database operations.
  </p>
</div>

`
},

{
  title:`Annotations`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Annotations in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Annotations in Spring Boot play a crucial role in simplifying configuration and enabling various features. They help developers write clean and maintainable code by reducing boilerplate and providing metadata for the Spring framework to process.
  </p>

  <h3 style="color: #16a085;">Common Spring Boot Annotations</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>@SpringBootApplication</code> - Marks the main class of a Spring Boot application.</li>
    <li><code>@Component</code> - Denotes a generic Spring-managed component.</li>
    <li><code>@Service</code> - Specialization of <code>@Component</code> for business logic services.</li>
    <li><code>@Repository</code> - Specialization of <code>@Component</code> for data access layers.</li>
    <li><code>@Controller</code> - Marks a class as a web controller in Spring MVC.</li>
    <li><code>@RestController</code> - Combines <code>@Controller</code> and <code>@ResponseBody</code> to return JSON responses.</li>
  </ul>

  <h3 style="color: #e67e22;">Dependency Injection Annotations</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>@Autowired</code> - Automatically injects dependencies.</li>
    <li><code>@Qualifier</code> - Specifies the exact bean to inject when multiple beans exist.</li>
    <li><code>@Primary</code> - Indicates the primary bean to use when multiple candidates exist.</li>
  </ul>

  <h3 style="color: #9b59b6;">Spring Boot Configuration Annotations</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>@Configuration</code> - Indicates a class with bean definitions.</li>
    <li><code>@Bean</code> - Declares a bean explicitly in a configuration class.</li>
    <li><code>@Value</code> - Injects values from application properties.</li>
    <li><code>@PropertySource</code> - Loads properties from an external file.</li>
  </ul>

  <h3 style="color: #c0392b;">Spring Boot MVC and Request Handling Annotations</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>@RequestMapping</code> - Maps HTTP requests to handler methods.</li>
    <li><code>@GetMapping</code> - Maps HTTP GET requests.</li>
    <li><code>@PostMapping</code> - Maps HTTP POST requests.</li>
    <li><code>@PutMapping</code> - Maps HTTP PUT requests.</li>
    <li><code>@DeleteMapping</code> - Maps HTTP DELETE requests.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Using Annotations in a Spring Boot Application</h3>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;

@RestController
@RequestMapping("/api")
public class ExampleController {
    private final ExampleService exampleService;
    
    @Autowired
    public ExampleController(ExampleService exampleService) {
        this.exampleService = exampleService;
    }
    
    @GetMapping("/message")
    public String getMessage() {
        return exampleService.getMessage();
    }
}

@Service
class ExampleService {
    public String getMessage() {
        return "Hello from Spring Boot!";
    }
}
    </code>
  </pre>

  <p style="color: #2c3e50;">
    Understanding and using annotations effectively can streamline development in Spring Boot, making applications more manageable and reducing configuration overhead.
  </p>
</div>


`
},
{
  title:`Primary Key Strategies`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Primary Key Strategies in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    A primary key uniquely identifies each record in a database table. In JPA and Hibernate, different strategies are available to generate primary keys efficiently.
    Choosing the right strategy ensures optimal database performance and scalability.
  </p>

  <h3 style="color: #16a085;">Available Primary Key Strategies</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><code>GenerationType.IDENTITY</code> – Uses auto-increment columns.</li>
    <li><code>GenerationType.SEQUENCE</code> – Uses database sequences for key generation.</li>
    <li><code>GenerationType.TABLE</code> – Uses a table-based key generation strategy.</li>
    <li><code>GenerationType.AUTO</code> – Uses a default strategy based on the database dialect.</li>
  </ul>

  <h3 style="color: #e67e22;">1. Using <code>GenerationType.IDENTITY</code></h3>
  <p style="color: #34495e;">
    This strategy relies on the database's auto-increment feature. The database automatically generates the ID when a new record is inserted.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    Pros: Simple and database-driven.  
    Cons: Not suitable for batch inserts due to potential performance issues.
  </p>

  <h3 style="color: #e67e22;">2. Using <code>GenerationType.SEQUENCE</code></h3>
  <p style="color: #34495e;">
    This strategy uses a database sequence to generate primary keys, improving performance over IDENTITY.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @SequenceGenerator(name = "user_seq", sequenceName = "user_sequence", allocationSize = 1)
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_seq")
          private Long id;
          private String name;
      }
    </code>
  </pre>
  <p style="color: #2c3e50;">
    Pros: Better performance than IDENTITY, supports batch inserts.  
    Cons: Requires database sequence support.
  </p>

  <h3 style="color: #e67e22;">3. Using <code>GenerationType.TABLE</code></h3>
  <p style="color: #34495e;">
    This strategy stores primary keys in a separate table. It is less common due to performance concerns.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @TableGenerator(name = "user_table_gen", table = "id_generator", pkColumnName = "gen_name",
                      valueColum
`
},
{
  title:`Entity Mapping`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Introduction to Entity Mapping in Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Entity mapping is a fundamental concept in JPA (Java Persistence API) that defines how Java objects (entities) are mapped to database tables and how relationships between entities are represented. In Spring Boot, entity mapping is achieved using JPA annotations, which simplify the process of defining the structure of your database schema and the relationships between entities. Proper entity mapping ensures that your application can efficiently store, retrieve, and manage data in a relational database.
  </p>

  <h3 style="color: #16a085;">Why is Entity Mapping Important?</h3>
  <p style="color: #2c3e50;">
    Entity mapping is crucial for several reasons:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Database Schema Definition</strong>: Maps Java classes to database tables and fields to columns.</li>
    <li><strong>Object-Relational Mapping (ORM)</strong>: Bridges the gap between object-oriented programming and relational databases.</li>
    <li><strong>Relationship Management</strong>: Defines relationships like one-to-one, one-to-many, and many-to-many between entities.</li>
    <li><strong>Data Integrity</strong>: Ensures that data is stored and retrieved consistently and accurately.</li>
    <li><strong>Simplified Development</strong>: Reduces the need for manual SQL queries and boilerplate code.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Concepts of Entity Mapping</h3>
  <p style="color: #2c3e50;">
    When working with entity mapping in Spring Boot, it is important to understand the following concepts:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Entities</strong>: Java classes annotated with <code>@Entity</code> that represent database tables.</li>
    <li><strong>Primary Keys</strong>: Fields annotated with <code>@Id</code> that uniquely identify an entity.</li>
    <li><strong>Column Mapping</strong>: Annotations like <code>@Column</code> to map fields to database columns.</li>
    <li><strong>Relationships</strong>: Annotations like <code>@OneToOne</code>, <code>@OneToMany</code>, and <code>@ManyToMany</code> to define relationships between entities.</li>
    <li><strong>Inheritance</strong>: Strategies like <code>SINGLE_TABLE</code>, <code>JOINED</code>, and <code>TABLE_PER_CLASS</code> to map inheritance hierarchies.</li>
  </ul>

  <h3 style="color: #2980b9;">Example: Entity Mapping in Spring Boot</h3>
  <p style="color: #2c3e50;">
    Below is an example of how to define and map entities in a Spring Boot application.
  </p>

  <h4 style="color: #8e44ad;">1. Define a Simple Entity</h4>
  <p style="color: #2c3e50;">
    Create a basic entity with a primary key and fields mapped to database columns.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.Entity;
      import jakarta.persistence.GeneratedValue;
      import jakarta.persistence.GenerationType;
      import jakarta.persistence.Id;
      import jakarta.persistence.Column;

      @Entity
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(nullable = false)
          private String name;

          @Column(unique = true, nullable = false)
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">2. Define Relationships Between Entities</h4>
  <p style="color: #2c3e50;">
    Create entities with relationships like one-to-many and many-to-many.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;
      import java.util.List;

      @Entity
      public class Department {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(nullable = false)
          private String name;

          @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
          private List&lt;Employee&gt; employees;

          // Getters and Setters
      }

      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(nullable = false)
          private String name;

          @ManyToOne
          @JoinColumn(name = "department_id", nullable = false)
          private Department department;

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">3. Define a Many-to-Many Relationship</h4>
  <p style="color: #2c3e50;">
    Create entities with a many-to-many relationship.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;
      import java.util.Set;

      @Entity
      public class Student {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(nullable = false)
          private String name;

          @ManyToMany
          @JoinTable(
              name = "student_course",
              joinColumns = @JoinColumn(name = "student_id"),
              inverseJoinColumns = @JoinColumn(name = "course_id"))
          private Set&lt;Course&gt; courses;

          // Getters and Setters
      }

      @Entity
      public class Course {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(nullable = false)
          private String title;

          @ManyToMany(mappedBy = "courses")
          private Set&lt;Student&gt; students;

          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #8e44ad;">4. Inheritance Mapping</h4>
  <p style="color: #2c3e50;">
    Use inheritance mapping strategies to represent class hierarchies in the database.
  </p>

  <pre style="background:rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;

      @Entity
      @Inheritance(strategy = InheritanceType.SINGLE_TABLE)
      @DiscriminatorColumn(name = "type", discriminatorType = DiscriminatorType.STRING)
      public abstract class Vehicle {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          @Column(nullable = false)
          private String manufacturer;

          // Getters and Setters
      }

      @Entity
      @DiscriminatorValue("CAR")
      public class Car extends Vehicle {
          private int numberOfDoors;

          // Getters and Setters
      }

      @Entity
      @DiscriminatorValue("BIKE")
      public class Bike extends Vehicle {
          private int numberOfGears;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #d35400;">Best Practices for Entity Mapping</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use meaningful names for entities, fields, and database columns.</li>
    <li>Leverage lazy loading (<code>FetchType.LAZY</code>) for relationships to improve performance.</li>
    <li>Use cascade operations (<code>CascadeType</code>) to manage entity lifecycles.</li>
    <li>Validate entity mappings using tools like Hibernate's schema validation.</li>
    <li>Keep relationships bidirectional when necessary to simplify navigation.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Entity mapping is a core aspect of building data-driven Spring Boot applications. By leveraging JPA annotations, you can define how your Java objects map to database tables and how relationships between entities are represented. Whether you're working with simple entities, complex relationships, or inheritance hierarchies, proper entity mapping ensures that your application can efficiently store, retrieve, and manage data. By following best practices, you can create a clean, maintainable, and performant data access layer.
  </p>
</div>`
},
{
  title:`HQL & Criteria API`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">HQL & Criteria API in Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate provides two powerful ways to query databases: 
    <strong>Hibernate Query Language (HQL)</strong> and the <strong>Criteria API</strong>. 
    These approaches allow developers to retrieve data efficiently while keeping the application database-independent.
  </p>

  <h3 style="color: #16a085;">What is HQL (Hibernate Query Language)?</h3>
  <p style="color: #34495e;">
    HQL is an object-oriented query language similar to SQL but designed for Hibernate. 
    Unlike SQL, HQL works with entity objects instead of database tables.
  </p>

  <h4 style="color: #e67e22;">Basic HQL Query</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String hql = "FROM User WHERE name = :name";
      Query query = session.createQuery(hql);
      query.setParameter("name", "John");
      List<User> users = query.list();
    </code>
  </pre>

  <h4 style="color: #e67e22;">HQL Query with Sorting</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String hql = "FROM User ORDER BY name ASC";
      List<User> users = session.createQuery(hql).list();
    </code>
  </pre>

  <h4 style="color: #e67e22;">HQL Query with Joins</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String hql = "SELECT u FROM User u INNER JOIN u.orders o WHERE o.total > :amount";
      Query query = session.createQuery(hql);
      query.setParameter("amount", 1000);
      List<User> users = query.list();
    </code>
  </pre>

  <h3 style="color: #16a085;">What is the Criteria API?</h3>
  <p style="color: #34495e;">
    The Criteria API provides a type-safe, programmatic way to create queries in Hibernate.
    It is useful when dealing with dynamic queries or complex filtering conditions.
  </p>

  <h4 style="color: #e67e22;">Basic Criteria Query</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<User> cq = cb.createQuery(User.class);
      Root<User> root = cq.from(User.class);
      cq.select(root);

      Query<User> query = session.createQuery(cq);
      List<User> users = query.getResultList();
    </code>
  </pre>

  <h4 style="color: #e67e22;">Criteria Query with Filters</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<User> cq = cb.createQuery(User.class);
      Root<User> root = cq.from(User.class);
      cq.select(root).where(cb.equal(root.get("name"), "John"));

      Query<User> query = session.createQuery(cq);
      List<User> users = query.getResultList();
    </code>
  </pre>

  <h4 style="color: #e67e22;">Criteria Query with Sorting</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      CriteriaBuilder cb = session.getCriteriaBuilder();
      CriteriaQuery<User> cq = cb.createQuery(User.class);
      Root<User> root = cq.from(User.class);
      cq.orderBy(cb.asc(root.get("name")));

      Query<User> query = session.createQuery(cq);
      List<User> users = query.getResultList();
    </code>
  </pre>

  <h3 style="color: #9b59b6;">When to Use HQL vs. Criteria API?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Use HQL</strong> when writing static queries, especially with joins and aggregations.</li>
    <li><strong>Use Criteria API</strong> when queries are dynamic and require filtering, sorting, or pagination.</li>
  </ul>

  <p style="color: #2c3e50;">
    Both HQL and Criteria API provide powerful ways to query data in Hibernate, each suited for different use cases.
    Understanding these approaches helps in writing efficient and maintainable code.
  </p>
</div>
`
},
{
  title:`Native SQL Queries`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Native SQL Queries in Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate provides different ways to query the database, including HQL and the Criteria API. 
    However, sometimes we need to use raw SQL queries directly. 
    This is where <strong>Native SQL Queries</strong> come in. 
    They allow us to execute plain SQL queries while still leveraging Hibernate’s powerful features.
  </p>

  <h3 style="color: #16a085;">What are Native SQL Queries?</h3>
  <p style="color: #34495e;">
    Native SQL queries allow developers to execute raw SQL statements directly on the database. 
    Unlike HQL, which operates on entity objects, native queries work at the table level.
  </p>

  <h3 style="color: #16a085;">Executing a Simple Native Query</h3>
  <p style="color: #34495e;">
    The <code>createNativeQuery()</code> method in Hibernate can be used to execute SQL queries.
  </p>
  
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String sql = "SELECT * FROM users";
      Query query = session.createNativeQuery(sql, User.class);
      List<User> users = query.getResultList();
    </code>
  </pre>

  <h3 style="color: #16a085;">Using Parameters in Native Queries</h3>
  <p style="color: #34495e;">
    To avoid SQL injection and improve performance, parameters can be used in native queries.
  </p>

  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String sql = "SELECT * FROM users WHERE name = :name";
      Query query = session.createNativeQuery(sql, User.class);
      query.setParameter("name", "John");
      List<User> users = query.getResultList();
    </code>
  </pre>

  <h3 style="color: #16a085;">Executing Insert, Update, and Delete Queries</h3>
  <p style="color: #34495e;">
    Native queries can also be used for modifying data.
  </p>

  <h4 style="color: #e67e22;">Insert Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String sql = "INSERT INTO users (id, name, email) VALUES (:id, :name, :email)";
      Query query = session.createNativeQuery(sql);
      query.setParameter("id", 101);
      query.setParameter("name", "Alice");
      query.setParameter("email", "alice@example.com");
      query.executeUpdate();
    </code>
  </pre>

  <h4 style="color: #e67e22;">Update Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String sql = "UPDATE users SET email = :email WHERE id = :id";
      Query query = session.createNativeQuery(sql);
      query.setParameter("email", "newemail@example.com");
      query.setParameter("id", 101);
      query.executeUpdate();
    </code>
  </pre>

  <h4 style="color: #e67e22;">Delete Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String sql = "DELETE FROM users WHERE id = :id";
      Query query = session.createNativeQuery(sql);
      query.setParameter("id", 101);
      query.executeUpdate();
    </code>
  </pre>

  <h3 style="color: #16a085;">Mapping Native Queries to Entities</h3>
  <p style="color: #34495e;">
    When executing native queries, we can map the result to an entity class using <code>addEntity()</code>.
  </p>

  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String sql = "SELECT * FROM users";
      Query query = session.createNativeQuery(sql).addEntity(User.class);
      List<User> users = query.getResultList();
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Advantages of Native SQL Queries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Performance:</strong> Can leverage database-specific optimizations.</li>
    <li><strong>Flexibility:</strong> Allows execution of complex queries that may not be possible with HQL or Criteria API.</li>
    <li><strong>Direct Database Access:</strong> Enables operations like stored procedure calls.</li>
  </ul>

  <h3 style="color: #9b59b6;">Disadvantages of Native SQL Queries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Database Dependency:</strong> Queries may not be portable across different databases.</li>
    <li><strong>Harder to Maintain:</strong> Changing the database structure may require rewriting queries.</li>
    <li><strong>Manual Result Mapping:</strong> If not mapped properly, retrieving results can be tedious.</li>
  </ul>

  <p style="color: #2c3e50;">
    While native queries provide great flexibility and performance benefits, they should be used only when necessary. 
    For most use cases, HQL or Criteria API is preferred for better portability and maintainability.
  </p>
</div>
`
},
{
  title:`Named Queries`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Named Queries in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Named Queries are predefined, reusable queries that are defined at the entity level using annotations or XML configuration. 
    They provide better readability, performance, and maintainability in JPA and Hibernate.
  </p>

  <h3 style="color: #16a085;">What are Named Queries?</h3>
  <p style="color: #34495e;">
    Named Queries allow developers to define queries once and reuse them multiple times. 
    They are compiled and validated at application startup, reducing runtime query parsing overhead.
  </p>

  <h3 style="color: #16a085;">Defining a Named Query</h3>
  <p style="color: #34495e;">
    Named Queries can be defined using the <code>@NamedQuery</code> annotation in JPA or via XML configuration.
  </p>

  <h4 style="color: #e67e22;">Using @NamedQuery Annotation</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @NamedQuery(
          name = "User.findByEmail",
          query = "SELECT u FROM User u WHERE u.email = :email"
      )
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
          
          // Getters and Setters
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">Using @NamedQueries for Multiple Queries</h4>
  <p style="color: #34495e;">
    When defining multiple named queries, use the <code>@NamedQueries</code> annotation.
  </p>

  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @NamedQueries({
          @NamedQuery(name = "User.findByEmail", query = "SELECT u FROM User u WHERE u.email = :email"),
          @NamedQuery(name = "User.findAll", query = "SELECT u FROM User u")
      })
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
          
          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Executing Named Queries</h3>
  <p style="color: #34495e;">
    Once a Named Query is defined, it can be executed using the <code>EntityManager</code> or <code>Session</code> in Hibernate.
  </p>

  <h4 style="color: #e67e22;">Executing a Named Query in JPA</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      EntityManager em = entityManagerFactory.createEntityManager();
      Query query = em.createNamedQuery("User.findByEmail");
      query.setParameter("email", "john@example.com");
      User user = (User) query.getSingleResult();
    </code>
  </pre>

  <h4 style="color: #e67e22;">Executing a Named Query in Hibernate</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Session session = sessionFactory.openSession();
      Query query = session.getNamedQuery("User.findByEmail");
      query.setParameter("email", "john@example.com");
      User user = (User) query.uniqueResult();
    </code>
  </pre>

  <h3 style="color: #16a085;">Defining Named Native Queries</h3>
  <p style="color: #34495e;">
    Named Queries can also be defined using native SQL by using the <code>@NamedNativeQuery</code> annotation.
  </p>

  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @NamedNativeQuery(
          name = "User.findByEmailNative",
          query = "SELECT * FROM users WHERE email = :email",
          resultClass = User.class
      )
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
          
          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Advantages of Named Queries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Reusability:</strong> Queries can be defined once and used multiple times.</li>
    <li><strong>Performance:</strong> Queries are parsed and validated at application startup, reducing runtime overhead.</li>
    <li><strong>Readability:</strong> Code is cleaner and easier to maintain.</li>
    <li><strong>Security:</strong> Helps prevent SQL injection when used with parameters.</li>
  </ul>

  <h3 style="color: #9b59b6;">Disadvantages of Named Queries</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Less Dynamic:</strong> Named Queries cannot be modified at runtime.</li>
    <li><strong>Potentially Unused Queries:</strong> If defined but never used, they can add unnecessary overhead.</li>
    <li><strong>Harder Debugging:</strong> Debugging errors in Named Queries can be more challenging than inline queries.</li>
  </ul>

  <p style="color: #2c3e50;">
    Named Queries are a powerful feature in JPA and Hibernate that improve performance and maintainability. 
    While they may not be as flexible as dynamic queries, they provide significant advantages in structured query management.
  </p>
</div>
`
},
{
  title:`Pagination`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Pagination in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Pagination is an essential feature when dealing with large datasets in applications. Instead of retrieving all records at once, 
    pagination allows fetching data in smaller chunks, improving performance and user experience.
  </p>

  <h3 style="color: #16a085;">Why Use Pagination?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Performance Optimization:</strong> Reduces the amount of data fetched at a time, improving response time.</li>
    <li><strong>Efficient Database Queries:</strong> Limits the number of rows retrieved from the database.</li>
    <li><strong>Better User Experience:</strong> Allows users to navigate through large datasets smoothly.</li>
  </ul>

  <h3 style="color: #16a085;">Pagination with JPA Query</h3>
  <p style="color: #34495e;">
    JPA provides the <code>setFirstResult()</code> and <code>setMaxResults()</code> methods to implement pagination.
  </p>

  <h4 style="color: #e67e22;">Example: Paginating with JPA Query</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public List<User> getUsersWithPagination(EntityManager entityManager, int pageNumber, int pageSize) {
          Query query = entityManager.createQuery("SELECT u FROM User u");
          query.setFirstResult((pageNumber - 1) * pageSize);
          query.setMaxResults(pageSize);
          return query.getResultList();
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Pagination with Hibernate Query</h3>
  <p style="color: #34495e;">
    In Hibernate, pagination can be done using <code>setFirstResult()</code> and <code>setMaxResults()</code> on a <code>Query</code> object.
  </p>

  <h4 style="color: #e67e22;">Example: Paginating with Hibernate Query</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public List<User> getUsersWithPagination(Session session, int pageNumber, int pageSize) {
          Query query = session.createQuery("FROM User");
          query.setFirstResult((pageNumber - 1) * pageSize);
          query.setMaxResults(pageSize);
          return query.list();
      }
    </code>
  </pre>

  <h3 style="color: #16a085;">Pagination with Spring Data JPA</h3>
  <p style="color: #34495e;">
    Spring Data JPA provides a built-in <code>Pageable</code> interface to handle pagination efficiently.
  </p>

  <h4 style="color: #e67e22;">Example: Paginating with Spring Data JPA</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Repository
      public interface UserRepository extends JpaRepository<User, Long> {
          Page<User> findAll(Pageable pageable);
      }

      public Page<User> getUsersWithPagination(UserRepository userRepository, int pageNumber, int pageSize) {
          Pageable pageable = PageRequest.of(pageNumber, pageSize);
          return userRepository.findAll(pageable);
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Advantages of Pagination</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Optimized Performance:</strong> Reduces the number of records fetched at a time.</li>
    <li><strong>Reduced Memory Usage:</strong> Loads only the required data, preventing memory overflow.</li>
    <li><strong>Scalability:</strong> Allows handling large datasets efficiently.</li>
  </ul>

  <h3 style="color: #9b59b6;">Best Practices for Pagination</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <strong>indexed columns</strong> for better query performance.</li>
    <li>Avoid using <strong>OFFSET with large values</strong> as it can slow down query execution.</li>
    <li>Prefer <strong>Spring Data JPA</strong> for built-in pagination support.</li>
    <li>Use <strong>Keyset Pagination</strong> for improved efficiency with large datasets.</li>
  </ul>

  <p style="color: #2c3e50;">
    Pagination is a crucial technique for managing large datasets in applications. 
    Whether using JPA, Hibernate, or Spring Data JPA, implementing efficient pagination improves performance and user experience.
  </p>
</div>
`
},
{
  title:`Caching`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Caching in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Caching is a performance optimization technique that helps reduce database access by storing frequently used data in memory. 
    JPA and Hibernate provide different caching levels to speed up data retrieval.
  </p>

  <h3 style="color: #16a085;">Why Use Caching?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Reduces Database Load:</strong> Minimizes database queries for frequently accessed data.</li>
    <li><strong>Improves Performance:</strong> Speeds up application response time.</li>
    <li><strong>Optimizes Resource Usage:</strong> Reduces network and database overhead.</li>
  </ul>

  <h3 style="color: #16a085;">Types of Caching in Hibernate</h3>
  <p style="color: #34495e;">
    Hibernate supports different levels of caching to store and reuse data efficiently.
  </p>

  <h4 style="color: #e67e22;">1. First-Level Cache (L1 Cache)</h4>
  <p style="color: #34495e;">
    The first-level cache is associated with the Hibernate <code>Session</code>. It is enabled by default and stores entities in memory 
    for the duration of a session.
  </p>

  <h4 style="color: #e67e22;">Example: First-Level Cache</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Session session = sessionFactory.openSession();
      
      // First query - fetched from the database
      User user1 = session.get(User.class, 1);
      
      // Second query - fetched from the cache (no DB hit)
      User user2 = session.get(User.class, 1);

      session.close();
    </code>
  </pre>

  <h4 style="color: #e67e22;">2. Second-Level Cache (L2 Cache)</h4>
  <p style="color: #34495e;">
    The second-level cache is shared across multiple sessions and requires explicit configuration. 
    Hibernate supports various providers like EhCache, Hazelcast, and Infinispan.
  </p>

  <h4 style="color: #e67e22;">Example: Enabling Second-Level Cache with EhCache</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @Cacheable
      @org.hibernate.annotations.Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">3. Query Cache</h4>
  <p style="color: #34495e;">
    The query cache stores the results of frequently executed queries. It works with the second-level cache.
  </p>

  <h4 style="color: #e67e22;">Example: Enabling Query Cache</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Query query = session.createQuery("FROM User");
      query.setCacheable(true);
      List<User> users = query.list();
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Advantages of Caching</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><strong>Reduces Database Calls:</strong> Improves efficiency by fetching data from cache instead of querying the database.</li>
    <li><strong>Speeds Up Application:</strong> Improves response time by storing frequently used data in memory.</li>
    <li><strong>Enhances Scalability:</strong> Reduces database load, allowing more users to access the system without performance issues.</li>
  </ul>

  <h3 style="color: #9b59b6;">Best Practices for Caching</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <strong>First-Level Cache</strong> whenever possible since it’s built-in and automatic.</li>
    <li>Enable <strong>Second-Level Cache</strong> for entities that are frequently accessed.</li>
    <li>Use <strong>Query Cache</strong> cautiously to avoid stale data issues.</li>
    <li>Choose the right cache provider (<strong>EhCache, Hazelcast, Infinispan</strong>) based on your needs.</li>
    <li>Set <strong>cache expiration policies</strong> to prevent outdated data from being served.</li>
  </ul>

  <p style="color: #2c3e50;">
    Caching is a powerful technique to enhance performance in JPA and Hibernate applications. 
    By using first-level cache, second-level cache, and query cache effectively, developers can significantly optimize database interactions.
  </p>
</div>
`
},
{
  title:`Lazy vs Eager Loading`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Lazy vs. Eager Loading in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    In JPA and Hibernate, loading strategies determine how related entities are fetched from the database. 
    The two main loading types are <strong>Lazy Loading</strong> and <strong>Eager Loading</strong>.
  </p>

  <h3 style="color: #16a085;">What is Lazy Loading?</h3>
  <p style="color: #34495e;">
    Lazy Loading means that related entities are not fetched from the database until they are explicitly accessed. 
    It improves performance by avoiding unnecessary data retrieval.
  </p>

  <h4 style="color: #e67e22;">Example: Lazy Loading</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Author {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;

          @OneToMany(mappedBy = "author", fetch = FetchType.LAZY)
          private List<Book> books;
      }
    </code>
  </pre>

  <p style="color: #34495e;">
    In this example, the <code>books</code> collection is fetched only when accessed, avoiding unnecessary queries.
  </p>

  <h3 style="color: #16a085;">What is Eager Loading?</h3>
  <p style="color: #34495e;">
    Eager Loading means that related entities are fetched immediately along with the main entity. 
    It ensures that all required data is available upfront but may lead to performance issues due to large data retrieval.
  </p>

  <h4 style="color: #e67e22;">Example: Eager Loading</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Author {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;

          @OneToMany(mappedBy = "author", fetch = FetchType.EAGER)
          private List<Book> books;
      }
    </code>
  </pre>

  <p style="color: #34495e;">
    Here, the <code>books</code> collection is loaded immediately when the <code>Author</code> entity is fetched.
  </p>

  <h3 style="color: #9b59b6;">Key Differences: Lazy vs. Eager Loading</h3>
  <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
    <tr style="background-color: #16a085; color: white;">
      <th style="padding: 10px; text-align: left;">Aspect</th>
      <th style="padding: 10px; text-align: left;">Lazy Loading</th>
      <th style="padding: 10px; text-align: left;">Eager Loading</th>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">When are related entities loaded?</td>
      <td style="padding: 10px;">When accessed</td>
      <td style="padding: 10px;">Immediately</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">Database Load</td>
      <td style="padding: 10px;">Lower (only loads when needed)</td>
      <td style="padding: 10px;">Higher (loads everything upfront)</td>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">Performance</td>
      <td style="padding: 10px;">Better for large datasets</td>
      <td style="padding: 10px;">Might slow down queries</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">Risk of Exception</td>
      <td style="padding: 10px;">Yes (LazyInitializationException if accessed outside session)</td>
      <td style="padding: 10px;">No</td>
    </tr>
  </table>

  <h3 style="color: #9b59b6;">Best Practices for Using Lazy and Eager Loading</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <strong>Lazy Loading</strong> when dealing with large datasets to improve performance.</li>
    <li>Use <strong>Eager Loading</strong> when related data is always required.</li>
    <li>Be cautious of <strong>LazyInitializationException</strong> when using Lazy Loading.</li>
    <li>Use <code>JOIN FETCH</code> in queries to optimize Lazy Loading when needed.</li>
  </ul>

  <h4 style="color: #e67e22;">Example: Using JOIN FETCH</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Query query = session.createQuery("SELECT a FROM Author a JOIN FETCH a.books WHERE a.id = :id");
      query.setParameter("id", 1);
      Author author = (Author) query.getSingleResult();
    </code>
  </pre>

  <p style="color: #2c3e50;">
    Choosing between Lazy and Eager Loading depends on your application's needs. 
    Use Lazy Loading for performance and Eager Loading when necessary to prevent extra queries.
  </p>
</div>
`
},
{
  title:`Transaction Management`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Transaction Management in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Transaction management is a crucial aspect of database operations to ensure data consistency and integrity. 
    JPA and Hibernate provide built-in mechanisms for handling transactions effectively.
  </p>

  <h3 style="color: #16a085;">What is a Transaction?</h3>
  <p style="color: #34495e;">
    A transaction is a sequence of operations performed as a single unit of work. 
    It follows the <strong>ACID (Atomicity, Consistency, Isolation, Durability)</strong> properties to maintain data integrity.
  </p>

  <h3 style="color: #9b59b6;">Managing Transactions in JPA</h3>
  <p style="color: #34495e;">
    JPA uses the <code>EntityTransaction</code> API or declarative transaction management with Spring for handling transactions.
  </p>

  <h4 style="color: #e67e22;">Example: Manual Transaction Management</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      EntityManagerFactory emf = Persistence.createEntityManagerFactory("example-unit");
      EntityManager em = emf.createEntityManager();
      
      em.getTransaction().begin();
      
      Employee emp = new Employee();
      emp.setName("John Doe");
      em.persist(emp);
      
      em.getTransaction().commit();
      em.close();
    </code>
  </pre>

  <p style="color: #34495e;">
    Here, we manually begin and commit the transaction using <code>EntityTransaction</code>.
  </p>

  <h3 style="color: #16a085;">Transaction Management in Spring with @Transactional</h3>
  <p style="color: #34495e;">
    Spring provides declarative transaction management using the <code>@Transactional</code> annotation, 
    which simplifies handling transactions.
  </p>

  <h4 style="color: #e67e22;">Example: Using @Transactional</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Service
      public class EmployeeService {
      
          @PersistenceContext
          private EntityManager entityManager;
      
          @Transactional
          public void addEmployee(Employee employee) {
              entityManager.persist(employee);
          }
      }
    </code>
  </pre>

  <p style="color: #34495e;">
    The <code>@Transactional</code> annotation automatically manages the transaction, 
    committing the changes if successful or rolling them back if an exception occurs.
  </p>

  <h3 style="color: #9b59b6;">Transaction Propagation Levels</h3>
  <p style="color: #34495e;">
    The <code>propagation</code> property of <code>@Transactional</code> determines how transactions interact.
  </p>

  <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
    <tr style="background-color: #16a085; color: white;">
      <th style="padding: 10px; text-align: left;">Propagation Type</th>
      <th style="padding: 10px; text-align: left;">Description</th>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">REQUIRED</td>
      <td style="padding: 10px;">Uses the existing transaction or creates a new one.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">REQUIRES_NEW</td>
      <td style="padding: 10px;">Always starts a new transaction.</td>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">MANDATORY</td>
      <td style="padding: 10px;">Requires an existing transaction; throws an exception if none exists.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">SUPPORTS</td>
      <td style="padding: 10px;">Uses the current transaction if available; otherwise, runs without one.</td>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">NOT_SUPPORTED</td>
      <td style="padding: 10px;">Runs without a transaction.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">NEVER</td>
      <td style="padding: 10px;">Throws an exception if a transaction exists.</td>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">NESTED</td>
      <td style="padding: 10px;">Creates a nested transaction within an existing one.</td>
    </tr>
  </table>

  <h3 style="color: #16a085;">Rollback Scenarios</h3>
  <p style="color: #34495e;">
    By default, Spring rolls back transactions only for unchecked exceptions (<code>RuntimeException</code>).
    To rollback for checked exceptions, you must specify <code>rollbackFor</code>.
  </p>

  <h4 style="color: #e67e22;">Example: Rollback on a Checked Exception</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Transactional(rollbackFor = SQLException.class)
      public void updateEmployee(Employee employee) throws SQLException {
          entityManager.merge(employee);
          throw new SQLException("Database error occurred");
      }
    </code>
  </pre>

  <p style="color: #34495e;">
    In this case, the transaction will be rolled back even though <code>SQLException</code> is a checked exception.
  </p>

  <h3 style="color: #9b59b6;">Best Practices for Transaction Management</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use <code>@Transactional</code> at the **service layer** to maintain a clean architecture.</li>
    <li>Prefer **Lazy Loading** for large datasets to avoid unnecessary transactions.</li>
    <li>Use **transaction propagation** carefully to manage nested transactions.</li>
    <li>Rollback transactions for specific exceptions when needed.</li>
    <li>Minimize the **transactional scope** to avoid locking resources for long durations.</li>
  </ul>

  <h3 style="color: #16a085;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Transaction management ensures data consistency in JPA and Hibernate. 
    Using <code>@Transactional</code> simplifies handling transactions, and understanding propagation and rollback behavior 
    helps in building robust applications. 
  </p>
</div>
`
},
{
  title:`Locking Strategies`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Locking Strategies in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Locking mechanisms in JPA and Hibernate help prevent data inconsistencies and concurrency issues in multi-user environments. 
    JPA supports both **optimistic** and **pessimistic** locking strategies to ensure safe database transactions.
  </p>

  <h3 style="color: #16a085;">Why Locking is Needed?</h3>
  <p style="color: #34495e;">
    When multiple users access the same data, conflicts may arise. Locking strategies help:
  </p>
  <ul style="color: #34495e; padding-left: 20px;">
    <li>Prevent **dirty reads, non-repeatable reads, and lost updates**.</li>
    <li>Ensure **data integrity** in concurrent transactions.</li>
    <li>Manage **transaction isolation levels** effectively.</li>
  </ul>

  <h3 style="color: #9b59b6;">Optimistic Locking</h3>
  <p style="color: #34495e;">
    Optimistic locking allows multiple transactions to proceed without immediate locks. It checks for conflicts only when committing the transaction.
    This is useful when conflicts are rare and performance is a priority.
  </p>

  <h4 style="color: #e67e22;">Example: Optimistic Locking with @Version</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          
          private String name;
          
          @Version
          private int version; // Version column for optimistic locking
      }
    </code>
  </pre>

  <p style="color: #34495e;">
    The <code>@Version</code> field ensures that if two transactions update the same row, 
    the one with an outdated version will fail, preventing inconsistent data.
  </p>

  <h3 style="color: #16a085;">Pessimistic Locking</h3>
  <p style="color: #34495e;">
    Pessimistic locking prevents concurrent modifications by locking the record until a transaction is completed.
    This ensures data integrity but can cause performance issues due to increased waiting time.
  </p>

  <h4 style="color: #e67e22;">Example: Pessimistic Locking in JPA</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Employee emp = entityManager.find(Employee.class, 1L, LockModeType.PESSIMISTIC_WRITE);
      emp.setName("Updated Name");
    </code>
  </pre>

  <p style="color: #34495e;">
    The **PESSIMISTIC_WRITE** lock prevents other transactions from updating or reading the record until the current transaction is committed.
  </p>

  <h3 style="color: #9b59b6;">Lock Modes in JPA</h3>
  <p style="color: #34495e;">
    JPA provides different lock modes to control concurrency.
  </p>

  <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
    <tr style="background-color: #16a085; color: white;">
      <th style="padding: 10px; text-align: left;">Lock Mode</th>
      <th style="padding: 10px; text-align: left;">Description</th>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">OPTIMISTIC</td>
      <td style="padding: 10px;">Uses versioning to detect conflicts without locking the row.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">OPTIMISTIC_FORCE_INCREMENT</td>
      <td style="padding: 10px;">Forces version increment even if no updates are made.</td>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">PESSIMISTIC_READ</td>
      <td style="padding: 10px;">Prevents updates but allows reads.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">PESSIMISTIC_WRITE</td>
      <td style="padding: 10px;">Locks the record for updates, preventing concurrent modifications.</td>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">PESSIMISTIC_FORCE_INCREMENT</td>
      <td style="padding: 10px;">Increments version number, forcing optimistic lock conflict.</td>
    </tr>
  </table>

  <h3 style="color: #16a085;">Choosing the Right Locking Strategy</h3>
  <p style="color: #34495e;">
    The choice between **optimistic** and **pessimistic** locking depends on the use case:
  </p>
  <ul style="color: #34495e; padding-left: 20px;">
    <li>Use **optimistic locking** when conflicts are **rare**, and performance is critical.</li>
    <li>Use **pessimistic locking** when data consistency is **highly important**, and conflicts are frequent.</li>
  </ul>

  <h3 style="color: #9b59b6;">Best Practices for Locking</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use **@Version** for optimistic locking to prevent unnecessary database locks.</li>
    <li>Apply **pessimistic locks only when necessary** to avoid performance bottlenecks.</li>
    <li>Choose the **appropriate lock mode** based on your application’s concurrency needs.</li>
    <li>Ensure transactions are **short-lived** to prevent long lock durations.</li>
  </ul>

  <h3 style="color: #16a085;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Locking strategies in JPA and Hibernate help maintain **data integrity** in concurrent environments. 
    **Optimistic locking** is preferred for performance, while **pessimistic locking** ensures strict data consistency. 
    Choosing the right strategy helps improve application efficiency and reliability.
  </p>
</div>
`
},
{
  title:`Fetching Strategies`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Fetching Strategies in JPA and Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Fetching strategies in JPA and Hibernate determine how related entities are loaded from the database.
    Choosing the right fetching strategy improves performance and prevents unnecessary database queries.
  </p>

  <h3 style="color: #16a085;">Types of Fetching Strategies</h3>
  <p style="color: #34495e;">
    JPA provides two primary fetching strategies:
  </p>
  <ul style="color: #34495e; padding-left: 20px;">
    <li><b>Lazy Loading</b> – Loads related entities only when accessed.</li>
    <li><b>Eager Loading</b> – Loads related entities immediately.</li>
  </ul>

  <h3 style="color: #9b59b6;">Lazy Loading</h3>
  <p style="color: #34495e;">
    Lazy loading defers the loading of related entities until they are needed, reducing the initial query overhead.
    It is the default strategy in JPA.
  </p>

  <h4 style="color: #e67e22;">Example: Lazy Loading</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          
          private String name;
          
          @OneToMany(mappedBy = "employee", fetch = FetchType.LAZY) // Lazy fetching
          private List<Task> tasks;
      }
    </code>
  </pre>

  <p style="color: #34495e;">
    Here, <code>tasks</code> will not be loaded when an <code>Employee</code> entity is retrieved. 
    They will be fetched only when accessed, avoiding unnecessary database queries.
  </p>

  <h3 style="color: #16a085;">Eager Loading</h3>
  <p style="color: #34495e;">
    Eager loading fetches related entities **immediately** along with the main entity.
    This prevents additional queries but may load unnecessary data.
  </p>

  <h4 style="color: #e67e22;">Example: Eager Loading</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      public class Employee {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          
          private String name;
          
          @OneToMany(mappedBy = "employee", fetch = FetchType.EAGER) // Eager fetching
          private List<Task> tasks;
      }
    </code>
  </pre>

  <p style="color: #34495e;">
    Here, when fetching an <code>Employee</code>, all related <code>Task</code> entities are loaded immediately.
  </p>

  <h3 style="color: #9b59b6;">When to Use Lazy vs. Eager Loading?</h3>
  <table style="width:100%; border-collapse: collapse; margin-top: 10px;">
    <tr style="background-color: #16a085; color: white;">
      <th style="padding: 10px; text-align: left;">Strategy</th>
      <th style="padding: 10px; text-align: left;">Best Used When</th>
    </tr>
    <tr style="background-color: #ecf0f1;">
      <td style="padding: 10px;">Lazy Loading</td>
      <td style="padding: 10px;">Related entities are **rarely used** and can be loaded **on demand**.</td>
    </tr>
    <tr style="background-color: #ffffff;">
      <td style="padding: 10px;">Eager Loading</td>
      <td style="padding: 10px;">Related entities are **always needed**, reducing extra queries.</td>
    </tr>
  </table>

  <h3 style="color: #16a085;">Fetching with JOIN FETCH</h3>
  <p style="color: #34495e;">
    To avoid the **N+1 problem** (multiple queries for related entities), we can use **JOIN FETCH** in JPQL.
  </p>

  <h4 style="color: #e67e22;">Example: Using JOIN FETCH</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      String query = "SELECT e FROM Employee e JOIN FETCH e.tasks WHERE e.id = :id";
      Employee emp = entityManager.createQuery(query, Employee.class)
                                  .setParameter("id", 1L)
                                  .getSingleResult();
    </code>
  </pre>

  <p style="color: #34495e;">
    This query fetches **Employee** along with **Task** in a single SQL query, improving performance.
  </p>

  <h3 style="color: #9b59b6;">Using Entity Graphs for Fetching</h3>
  <p style="color: #34495e;">
    Entity graphs allow fine-grained control over which associations to fetch dynamically.
  </p>

  <h4 style="color: #e67e22;">Example: Entity Graph</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @NamedEntityGraph(
          name = "Employee.tasks",
          attributeNodes = @NamedAttributeNode("tasks")
      )
      @Entity
      public class Employee { ... }
      
      EntityGraph<Employee> graph = entityManager.getEntityGraph("Employee.tasks");
      Map<String, Object> hints = new HashMap<>();
      hints.put("javax.persistence.fetchgraph", graph);
      
      Employee emp = entityManager.find(Employee.class, 1L, hints);
    </code>
  </pre>

  <p style="color: #34495e;">
    This method provides more flexibility than **FetchType.EAGER**.
  </p>

  <h3 style="color: #16a085;">Best Practices for Fetching Strategies</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Use **Lazy Loading** by default for better performance.</li>
    <li>Use **JOIN FETCH** or **Entity Graphs** instead of **Eager Fetching**.</li>
    <li>Avoid the **N+1 problem** by using optimized queries.</li>
    <li>Use **pagination** when fetching large datasets.</li>
  </ul>

  <h3 style="color: #16a085;">Conclusion</h3>
  <p style="color: #2c3e50;">
    Choosing the right fetching strategy in JPA and Hibernate can **significantly improve performance**. 
    Use **Lazy Loading** whenever possible and optimize queries using **JOIN FETCH** or **Entity Graphs** for efficient data retrieval.
  </p>
</div>
`
},
{
  title:`Interceptors & Listeners`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Interceptors & Listeners in Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Hibernate, <b>Interceptors</b> and <b>Listeners</b> provide a way to hook into the ORM lifecycle and perform operations before or after specific events occur. These mechanisms allow developers to customize Hibernate's behavior, enforce business rules, log changes, or audit database actions efficiently.
  </p>

  <h3 style="color: #16a085;">Interceptors</h3>
  <p style="font-size: 16px; color: #34495e;">
    <b>Interceptors</b> in Hibernate are used to intercept and modify Hibernate operations such as saving, updating, deleting, and loading entities. They provide a centralized way to manipulate or monitor database interactions.
  </p>

  <h4 style="color: #e67e22;">Implementing an Interceptor</h4>
  <p style="color: #34495e;">
    Hibernate provides the <code>Interceptor</code> interface, which developers can implement to override default behavior. Some of the commonly used methods in the <code>Interceptor</code> interface include:
  </p>
  
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>onSave():</b> Called before an entity is saved to the database.</li>
    <li><b>onFlushDirty():</b> Invoked before an entity is updated.</li>
    <li><b>onDelete():</b> Called before an entity is deleted.</li>
    <li><b>preFlush():</b> Executed before Hibernate flushes changes to the database.</li>
    <li><b>postFlush():</b> Executed after Hibernate flushes changes to the database.</li>
  </ul>

  <h4 style="color: #e67e22;">Interceptor Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.EmptyInterceptor;
      import org.hibernate.type.Type;
      import java.io.Serializable;
      
      public class MyInterceptor extends EmptyInterceptor {
          @Override
          public boolean onSave(Object entity, Serializable id, Object[] state, String[] propertyNames, Type[] types) {
              System.out.println("Saving entity: " + entity);
              return super.onSave(entity, id, state, propertyNames, types);
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">Registering an Interceptor</h4>
  <p style="color: #34495e;">
    Interceptors can be applied globally at the <b>SessionFactory</b> level or individually for each session.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      SessionFactory factory = new Configuration().configure().buildSessionFactory();
      Session session = factory.withOptions().interceptor(new MyInterceptor()).openSession();
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Listeners</h3>
  <p style="font-size: 16px; color: #34495e;">
    <b>Listeners</b> in Hibernate are event-driven mechanisms that allow developers to execute logic before or after specific Hibernate events occur. They are more structured than interceptors and follow a declarative approach.
  </p>

  <h4 style="color: #e67e22;">Types of Listeners</h4>
  <p style="color: #34495e;">
    Hibernate provides several event types to listen for, such as:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>PreInsertEventListener:</b> Triggers before an entity is inserted.</li>
    <li><b>PostInsertEventListener:</b> Triggers after an entity is inserted.</li>
    <li><b>PreUpdateEventListener:</b> Triggers before an entity is updated.</li>
    <li><b>PostUpdateEventListener:</b> Triggers after an entity is updated.</li>
    <li><b>PreDeleteEventListener:</b> Triggers before an entity is deleted.</li>
    <li><b>PostDeleteEventListener:</b> Triggers after an entity is deleted.</li>
  </ul>

  <h4 style="color: #e67e22;">Implementing a Listener</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.event.spi.PreInsertEvent;
      import org.hibernate.event.spi.PreInsertEventListener;
      
      public class MyInsertListener implements PreInsertEventListener {
          @Override
          public boolean onPreInsert(PreInsertEvent event) {
              System.out.println("Before inserting entity: " + event.getEntity());
              return false;
          }
      }
    </code>
  </pre>

  <h4 style="color: #e67e22;">Registering a Listener</h4>
  <p style="color: #34495e;">
    Listeners are typically registered via the Hibernate configuration.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      Configuration config = new Configuration().configure();
      config.getEventListenerRegistry().appendListeners(EventType.PRE_INSERT, new MyInsertListener());
      SessionFactory factory = config.buildSessionFactory();
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Interceptors vs Listeners</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Interceptors:</b> More flexible, can modify SQL operations, and are manually attached to sessions.</li>
    <li><b>Listeners:</b> Event-driven, automatically invoked, and are suitable for lifecycle events like insert/update/delete.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Hibernate provides <b>Interceptors</b> and <b>Listeners</b> to extend ORM behavior dynamically. While interceptors allow flexible manipulation of transactions, listeners provide structured event-driven hooks. Choosing between them depends on the specific needs of the application.
  </p>
</div>

`
},
{
  title:`Inheritance Mapping`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Inheritance Mapping in Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    In Hibernate, <b>Inheritance Mapping</b> is a technique used to map Java class hierarchies to database tables. Since object-oriented programming supports inheritance but relational databases do not, Hibernate provides different strategies to map inheritance structures effectively.
  </p>

  <h3 style="color: #16a085;">Types of Inheritance Mapping Strategies</h3>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate provides three main strategies for inheritance mapping:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Table Per Hierarchy</b> (Single Table Strategy)</li>
    <li><b>Table Per Concrete Class</b> (Concrete Table Strategy)</li>
    <li><b>Table Per Subclass</b> (Joined Table Strategy)</li>
  </ul>

  <h3 style="color: #e67e22;">1. Table Per Hierarchy (Single Table Strategy)</h3>
  <p style="color: #34495e;">
    In this approach, a single database table is used to store all classes in the inheritance hierarchy. A discriminator column is used to differentiate between different entity types.
  </p>

  <h4 style="color: #e67e22;">Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @Inheritance(strategy = InheritanceType.SINGLE_TABLE)
      @DiscriminatorColumn(name = "vehicle_type", discriminatorType = DiscriminatorType.STRING)
      public class Vehicle {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private int id;
          private String name;
      }

      @Entity
      @DiscriminatorValue("Car")
      public class Car extends Vehicle {
          private int numberOfDoors;
      }

      @Entity
      @DiscriminatorValue("Bike")
      public class Bike extends Vehicle {
          private boolean hasCarrier;
      }
    </code>
  </pre>
  <p style="color: #34495e;">
    This method is efficient but may result in a lot of unused columns for subclasses.
  </p>

  <h3 style="color: #e67e22;">2. Table Per Concrete Class (Concrete Table Strategy)</h3>
  <p style="color: #34495e;">
    In this approach, each concrete class in the hierarchy has its own separate table with all fields from the superclass copied into each subclass table.
  </p>

  <h4 style="color: #e67e22;">Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
      public class Vehicle {
          @Id
          @GeneratedValue(strategy = GenerationType.AUTO)
          private int id;
          private String name;
      }

      @Entity
      public class Car extends Vehicle {
          private int numberOfDoors;
      }

      @Entity
      public class Bike extends Vehicle {
          private boolean hasCarrier;
      }
    </code>
  </pre>
  <p style="color: #34495e;">
    This approach avoids empty columns but can cause data redundancy and difficulty in querying parent-child relationships.
  </p>

  <h3 style="color: #e67e22;">3. Table Per Subclass (Joined Table Strategy)</h3>
  <p style="color: #34495e;">
    This strategy creates separate tables for the parent and each subclass, linking them with foreign keys. It maintains normalization and avoids redundancy.
  </p>

  <h4 style="color: #e67e22;">Example</h4>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      @Entity
      @Inheritance(strategy = InheritanceType.JOINED)
      public class Vehicle {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private int id;
          private String name;
      }

      @Entity
      @PrimaryKeyJoinColumn(name = "vehicle_id")
      public class Car extends Vehicle {
          private int numberOfDoors;
      }

      @Entity
      @PrimaryKeyJoinColumn(name = "vehicle_id")
      public class Bike extends Vehicle {
          private boolean hasCarrier;
      }
    </code>
  </pre>
  <p style="color: #34495e;">
    This strategy ensures data consistency and normalization but can lead to complex queries.
  </p>

  <h3 style="color: #2c3e50;">Choosing the Right Strategy</h3>
  <p style="font-size: 16px; color: #34495e;">
    The choice of inheritance mapping strategy depends on several factors:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Table Per Hierarchy:</b> Best for simple hierarchies with minimal subclass differences.</li>
    <li><b>Table Per Concrete Class:</b> Suitable when subclasses have distinct data without shared parent attributes.</li>
    <li><b>Table Per Subclass:</b> Ideal when data normalization and structured relationships are priorities.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Hibernate provides flexible inheritance mapping strategies to accommodate different database designs. Choosing the appropriate strategy ensures optimal performance, maintainability, and consistency in database interactions.
  </p>
</div>

`
},
{
  title:`Hibernate with Spring Boot`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Hibernate with Spring Boot</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate is one of the most popular ORM (Object-Relational Mapping) frameworks in Java, and Spring Boot provides seamless integration with Hibernate to simplify database interactions. Spring Boot eliminates the need for complex configuration and allows developers to focus on business logic while leveraging Hibernate’s ORM capabilities efficiently.
  </p>

  <h3 style="color: #16a085;">Why Use Hibernate with Spring Boot?</h3>
  <p style="font-size: 16px; color: #34495e;">
    Using Hibernate with Spring Boot offers several advantages:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Automatic configuration of Hibernate as the JPA provider.</li>
    <li>Built-in support for database initialization and schema management.</li>
    <li>Seamless integration with Spring Data JPA for repository-based data access.</li>
    <li>Elimination of boilerplate code required for Hibernate setup.</li>
  </ul>

  <h3 style="color: #9b59b6;">Setting Up Hibernate in Spring Boot</h3>
  <h4 style="color: #e67e22;">Step 1: Add Dependencies</h4>
  <p style="color: #34495e;">
    Include the necessary dependencies in your <code>pom.xml</code> (for Maven) or <code>build.gradle</code> (for Gradle).
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
          &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
      &lt;/dependency&gt;
      &lt;dependency&gt;
          &lt;groupId&gt;com.h2database&lt;/groupId&gt;
          &lt;artifactId&gt;h2&lt;/artifactId&gt;
          &lt;scope&gt;runtime&lt;/scope&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #e67e22;">Step 2: Configure Application Properties</h4>
  <p style="color: #34495e;">
    Define database configurations in <code>application.properties</code> or <code>application.yml</code>.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-properties">
      spring.datasource.url=jdbc:h2:mem:testdb
      spring.datasource.driverClassName=org.h2.Driver
      spring.datasource.username=sa
      spring.datasource.password=
      spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
      spring.jpa.hibernate.ddl-auto=update
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Creating an Entity</h3>
  <p style="color: #34495e;">
    Define a simple entity class using JPA annotations.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import jakarta.persistence.*;

      @Entity
      @Table(name = "users")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          private String name;
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Creating a Repository</h3>
  <p style="color: #34495e;">
    Use Spring Data JPA’s <code>JpaRepository</code> to create a data repository without writing implementation code.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;
      import org.springframework.stereotype.Repository;

      @Repository
      public interface UserRepository extends JpaRepository<User, Long> {
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Service Layer</h3>
  <p style="color: #34495e;">
    Implement a service class to handle business logic.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.stereotype.Service;
      import java.util.List;

      @Service
      public class UserService {
          @Autowired
          private UserRepository repository;

          public List<User> getAllUsers() {
              return repository.findAll();
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">Controller Layer</h3>
  <p style="color: #34495e;">
    Expose REST APIs using Spring Boot’s controller mechanism.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.beans.factory.annotation.Autowired;
      import org.springframework.web.bind.annotation.*;
      import java.util.List;

      @RestController
      @RequestMapping("/users")
      public class UserController {
          @Autowired
          private UserService service;

          @GetMapping
          public List<User> getUsers() {
              return service.getAllUsers();
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Hibernate with Spring Boot simplifies database management by integrating ORM functionality seamlessly. With automatic configuration, repository-based data access, and minimal setup, developers can focus on building business logic efficiently. By leveraging Spring Data JPA, Hibernate’s power can be fully utilized within a Spring Boot application.
  </p>
</div>

`
},
{
  title:`Hibernate & JPA`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Hibernate & JPA</h2>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate and JPA (Java Persistence API) are both used for ORM (Object-Relational Mapping) in Java applications. While Hibernate is an implementation of JPA, JPA itself is a specification that defines how Java objects should be mapped to relational databases. Using Hibernate with JPA provides a standardized way to interact with databases while leveraging Hibernate’s powerful features.
  </p>

  <h3 style="color: #16a085;">Why Use Hibernate with JPA?</h3>
  <p style="font-size: 16px; color: #34495e;">
    Some key reasons to use Hibernate with JPA include:
  </p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>JPA provides a standardized API for persistence in Java.</li>
    <li>Hibernate, as a JPA provider, offers advanced ORM capabilities.</li>
    <li>Supports various database management systems with minimal changes.</li>
    <li>Improves code portability by allowing developers to switch JPA providers easily.</li>
  </ul>

  <h3 style="color: #9b59b6;">Setting Up Hibernate with JPA</h3>
  <h4 style="color: #e67e22;">Step 1: Add Dependencies</h4>
  <p style="color: #34495e;">
    Include the necessary dependencies in your <code>pom.xml</code> (for Maven) or <code>build.gradle</code> (for Gradle).
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;dependency&gt;
          &lt;groupId&gt;javax.persistence&lt;/groupId&gt;
          &lt;artifactId&gt;javax.persistence-api&lt;/artifactId&gt;
          &lt;version&gt;2.2&lt;/version&gt;
      &lt;/dependency&gt;
      &lt;dependency&gt;
          &lt;groupId&gt;org.hibernate&lt;/groupId&gt;
          &lt;artifactId&gt;hibernate-core&lt;/artifactId&gt;
          &lt;version&gt;5.6.0.Final&lt;/version&gt;
      &lt;/dependency&gt;
    </code>
  </pre>

  <h4 style="color: #e67e22;">Step 2: Configure Persistence</h4>
  <p style="color: #34495e;">
    Define the persistence configuration in <code>persistence.xml</code>.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-xml">
      &lt;persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence" version="2.1"&gt;
          &lt;persistence-unit name="example-unit"&gt;
              &lt;provider&gt;org.hibernate.jpa.HibernatePersistenceProvider&lt;/provider&gt;
              &lt;properties&gt;
                  &lt;property name="javax.persistence.jdbc.url" value="jdbc:h2:mem:testdb"/&gt;
                  &lt;property name="javax.persistence.jdbc.driver" value="org.h2.Driver"/&gt;
                  &lt;property name="hibernate.dialect" value="org.hibernate.dialect.H2Dialect"/&gt;
              &lt;/properties&gt;
          &lt;/persistence-unit&gt;
      &lt;/persistence&gt;
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Creating an Entity</h3>
  <p style="color: #34495e;">
    Define a JPA entity using annotations.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;

      @Entity
      @Table(name = "users")
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;

          private String name;
          private String email;

          // Getters and Setters
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Using EntityManager</h3>
  <p style="color: #34495e;">
    The <code>EntityManager</code> API is used to interact with the persistence context.
  </p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;

      public class UserService {
          @PersistenceContext
          private EntityManager entityManager;

          public void saveUser(User user) {
              entityManager.persist(user);
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Hibernate and JPA work together to provide a powerful ORM solution in Java applications. While JPA standardizes persistence, Hibernate enhances it with additional features. Understanding their integration ensures efficient and scalable database interactions.
  </p>
</div>

`
},
{
  title:`Spring Data JPA vs Hibernate`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Spring Data JPA vs Hibernate</h2>
  <p style="font-size: 16px; color: #34495e;">
    Spring Data JPA and Hibernate are both widely used frameworks in Java applications for ORM (Object-Relational Mapping). While Hibernate is a full-fledged ORM framework, Spring Data JPA is a part of the Spring ecosystem that simplifies JPA-based data access. Understanding their differences and use cases can help in choosing the right approach for your project.
  </p>

  <h3 style="color: #16a085;">What is Hibernate?</h3>
  <p style="font-size: 16px; color: #34495e;">
    Hibernate is a powerful ORM framework that enables Java applications to interact with databases using object-oriented principles. It provides various features such as lazy loading, caching, and transaction management.
  </p>

  <h3 style="color: #16a085;">What is Spring Data JPA?</h3>
  <p style="font-size: 16px; color: #34495e;">
    Spring Data JPA is a part of the Spring Data project that simplifies database access using JPA. It reduces the need for boilerplate code and provides built-in support for CRUD operations, query derivation, and pagination.
  </p>

  <h3 style="color: #e67e22;">Key Differences</h3>
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #ddd;">
    <tr style="background-color: #f4f4f4;">
      <th style="padding: 10px; border: 1px solid #ddd;">Aspect</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Spring Data JPA</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Hibernate</th>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Ease of Use</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Provides built-in repository support with less boilerplate code.</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Requires more configuration and coding for CRUD operations.</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Flexibility</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Less flexible as it abstracts much of Hibernate’s functionality.</td>
      <td style="padding: 10px; border: 1px solid #ddd;">More control over ORM features and configurations.</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Query Handling</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Supports query derivation, JPQL, and native queries.</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Uses HQL, Criteria API, and native queries.</td>
    </tr>
    <tr>
      <td style="padding: 10px; border: 1px solid #ddd;">Transaction Management</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Relies on Spring’s transaction management.</td>
      <td style="padding: 10px; border: 1px solid #ddd;">Manages transactions natively using Hibernate API.</td>
    </tr>
  </table>

  <h3 style="color: #9b59b6;">Example: Spring Data JPA</h3>
  <p style="color: #34495e;">Example of a Spring Data JPA repository.</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.springframework.data.jpa.repository.JpaRepository;

      public interface UserRepository extends JpaRepository<User, Long> {
          User findByEmail(String email);
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Example: Hibernate</h3>
  <p style="color: #34495e;">Example of using Hibernate with EntityManager.</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import javax.persistence.*;

      public class UserService {
          @PersistenceContext
          private EntityManager entityManager;

          public void saveUser(User user) {
              entityManager.persist(user);
          }
      }
    </code>
  </pre>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Both Spring Data JPA and Hibernate have their advantages and trade-offs. If you want an easy-to-use solution with minimal configuration, Spring Data JPA is a great choice. However, if you need more control over ORM features and performance tuning, Hibernate provides greater flexibility. The choice depends on the complexity and requirements of your project.
  </p>
</div>

`
},
{
  title:`Audit Logging`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Audit Logging</h2>
  <p style="font-size: 16px; color: #34495e;">
    Audit logging is the process of recording events, changes, or actions performed in an application. It helps in tracking user activities, debugging issues, and ensuring compliance with security and regulatory requirements.
  </p>

  <h3 style="color: #16a085;">Why is Audit Logging Important?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Ensures security and detects unauthorized access.</li>
    <li>Helps in compliance with legal and regulatory standards.</li>
    <li>Provides insights into system usage and potential issues.</li>
    <li>Facilitates debugging and troubleshooting.</li>
  </ul>

  <h3 style="color: #e67e22;">Types of Audit Logs</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Authentication Logs:</b> Tracks login and logout activities.</li>
    <li><b>Transaction Logs:</b> Records changes made to data.</li>
    <li><b>System Logs:</b> Captures application and server-level events.</li>
    <li><b>Access Logs:</b> Logs user interactions with resources.</li>
  </ul>

  <h3 style="color: #9b59b6;">Implementing Audit Logging in Spring Boot</h3>
  <p style="color: #34495e;">Example of using Spring Boot with Hibernate Envers for audit logging.</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.envers.Audited;
      import javax.persistence.*;

      @Entity
      @Audited
      public class User {
          @Id
          @GeneratedValue(strategy = GenerationType.IDENTITY)
          private Long id;
          private String name;
          private String email;
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">Logging Frameworks</h3>
  <p style="color: #34495e;">Popular frameworks for audit logging:</p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Log4j:</b> Highly configurable and widely used.</li>
    <li><b>SLF4J:</b> Simple facade for various logging frameworks.</li>
    <li><b>Spring Boot Actuator:</b> Provides built-in audit logging features.</li>
  </ul>

  <h3 style="color: #2c3e50;">Best Practices for Audit Logging</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Log only necessary information to avoid data overload.</li>
    <li>Ensure logs are tamper-proof by using secure storage.</li>
    <li>Regularly review and analyze audit logs.</li>
    <li>Use structured logging formats (e.g., JSON) for easy parsing.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Audit logging is crucial for security, compliance, and system monitoring. Implementing effective logging strategies ensures better traceability and helps prevent unauthorized access and system failures.
  </p>
</div>

`
},
{
  title:`Performance Optimization`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Performance Optimization</h2>
  <p style="font-size: 16px; color: #34495e;">
    Performance optimization refers to the practice of enhancing the efficiency of a system, application, or process to achieve faster execution times, reduced resource consumption, and improved user experience.
  </p>

  <h3 style="color: #16a085;">Why is Performance Optimization Important?</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Improves system responsiveness and scalability.</li>
    <li>Reduces costs by optimizing resource usage.</li>
    <li>Enhances user satisfaction by minimizing delays.</li>
    <li>Ensures smooth operation under high loads.</li>
  </ul>

  <h3 style="color: #e67e22;">Key Areas of Performance Optimization</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Code Optimization:</b> Improve algorithms, reduce redundant computations.</li>
    <li><b>Database Optimization:</b> Use indexing, caching, and optimized queries.</li>
    <li><b>Network Optimization:</b> Reduce latency through compression and efficient data transfer.</li>
    <li><b>Hardware Utilization:</b> Properly allocate CPU, memory, and storage resources.</li>
  </ul>

  <h3 style="color: #9b59b6;">Performance Optimization in Java Applications</h3>
  <p style="color: #34495e;">Example of optimizing Hibernate queries for better performance.</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import org.hibernate.Session;
      import org.hibernate.query.Query;

      public class HibernateOptimization {
          public static void main(String[] args) {
              Session session = HibernateUtil.getSessionFactory().openSession();
              Query<User> query = session.createQuery("FROM User WHERE active = :active", User.class);
              query.setParameter("active", true);
              query.setCacheable(true); // Enable caching
              List<User> users = query.list();
              session.close();
          }
      }
    </code>
  </pre>

  <h3 style="color: #e67e22;">Performance Monitoring Tools</h3>
  <p style="color: #34495e;">Popular tools for analyzing and optimizing performance:</p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>JProfiler:</b> Advanced Java profiling tool.</li>
    <li><b>VisualVM:</b> Monitors and analyzes Java applications.</li>
    <li><b>New Relic:</b> Performance monitoring for cloud and web applications.</li>
    <li><b>Apache JMeter:</b> Load testing tool for analyzing performance bottlenecks.</li>
  </ul>

  <h3 style="color: #2c3e50;">Best Practices for Performance Optimization</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Minimize database queries and avoid the N+1 problem.</li>
    <li>Use caching strategies (e.g., Redis, Ehcache).</li>
    <li>Profile and analyze code regularly to identify bottlenecks.</li>
    <li>Optimize frontend performance with lazy loading and efficient rendering.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Performance optimization is essential for building high-performance applications. By focusing on efficient code, database tuning, and leveraging monitoring tools, developers can ensure smooth and scalable application performance.
  </p>
</div>

`
},
{
  title:`Testing`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Testing</h2>
  <p style="font-size: 16px; color: #34495e;">
    Testing is a crucial phase in software development that ensures the application functions as expected, is free from defects, and meets business requirements. It involves verifying different aspects of software, such as functionality, security, performance, and usability.
  </p>

  <h3 style="color: #16a085;">Types of Software Testing</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Unit Testing:</b> Tests individual components or functions in isolation.</li>
    <li><b>Integration Testing:</b> Verifies that multiple components work together correctly.</li>
    <li><b>Functional Testing:</b> Ensures the application meets specified functional requirements.</li>
    <li><b>Performance Testing:</b> Assesses system performance under different loads.</li>
    <li><b>Security Testing:</b> Identifies vulnerabilities and security risks.</li>
    <li><b>Usability Testing:</b> Evaluates user-friendliness and ease of use.</li>
    <li><b>Regression Testing:</b> Checks that recent changes do not break existing functionality.</li>
  </ul>

  <h3 style="color: #e67e22;">Unit Testing in Java</h3>
  <p style="color: #34495e;">Example of a JUnit test case in Java.</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      import static org.junit.jupiter.api.Assertions.*;
      import org.junit.jupiter.api.Test;

      public class CalculatorTest {
          @Test
          void testAddition() {
              Calculator calc = new Calculator();
              assertEquals(5, calc.add(2, 3));
          }
      }
    </code>
  </pre>

  <h3 style="color: #9b59b6;">Testing Frameworks & Tools</h3>
  <p style="color: #34495e;">Popular tools for software testing:</p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>JUnit:</b> Unit testing framework for Java.</li>
    <li><b>Selenium:</b> Automated testing for web applications.</li>
    <li><b>TestNG:</b> Advanced testing framework for Java.</li>
    <li><b>Postman:</b> API testing tool.</li>
    <li><b>JMeter:</b> Performance and load testing tool.</li>
    <li><b>Mockito:</b> Mocking framework for unit tests.</li>
  </ul>

  <h3 style="color: #e67e22;">Best Practices for Effective Testing</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Write clear and concise test cases covering all scenarios.</li>
    <li>Use automated tests to speed up the testing process.</li>
    <li>Ensure tests are independent and do not rely on external dependencies.</li>
    <li>Regularly review and update test cases as application evolves.</li>
    <li>Incorporate testing early in the development cycle (Shift Left Testing).</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Testing is an essential process in software development that helps deliver high-quality, reliable, and secure applications. By leveraging different testing methodologies, frameworks, and best practices, developers can ensure their software meets the expected standards and performs efficiently in real-world scenarios.
  </p>
</div>

`
},
{
  title:`Common Issues & Debugging`, content:`<div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6;">
  <h2 style="color: #2c3e50;">Common Issues & Debugging</h2>
  <p style="font-size: 16px; color: #34495e;">
    Debugging is a crucial skill for software developers to identify and fix errors in their applications. Common issues arise due to syntax errors, logical mistakes, configuration problems, or unexpected runtime behaviors. Effective debugging techniques help resolve issues efficiently and improve code quality.
  </p>

  <h3 style="color: #16a085;">Common Issues in Software Development</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Null Pointer Exceptions:</b> Occur when accessing an object reference that is null.</li>
    <li><b>Syntax Errors:</b> Result from incorrect code structure or missing elements like semicolons or brackets.</li>
    <li><b>Logic Errors:</b> Happen when the program runs but produces incorrect results.</li>
    <li><b>Memory Leaks:</b> Arise from improper resource management, leading to excessive memory usage.</li>
    <li><b>Concurrency Issues:</b> Occur in multi-threaded applications due to improper synchronization.</li>
    <li><b>Configuration Errors:</b> Happen when application settings, such as database connections, are incorrect.</li>
  </ul>

  <h3 style="color: #e67e22;">Debugging Techniques</h3>
  <p style="color: #34495e;">Effective debugging strategies to identify and fix issues:</p>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li><b>Logging:</b> Use logging frameworks (e.g., Log4j, SLF4J) to track program execution.</li>
    <li><b>Breakpoints:</b> Utilize breakpoints in IDEs like IntelliJ IDEA or Eclipse to pause execution.</li>
    <li><b>Stack Traces:</b> Analyze stack traces to locate the source of an error.</li>
    <li><b>Code Reviews:</b> Peer review code to catch potential issues early.</li>
    <li><b>Unit Tests:</b> Write tests to validate code correctness and detect regressions.</li>
    <li><b>Static Code Analysis:</b> Use tools like SonarQube or Checkstyle to find coding violations.</li>
  </ul>

  <h3 style="color: #9b59b6;">Using a Debugger</h3>
  <p style="color: #34495e;">Example of using a debugger in Java with IntelliJ IDEA.</p>
  <pre style="background: rgb(1, 16, 20); color: #ecf0f1; padding: 10px; border-radius: 5px; font-size: 14px; overflow-x: auto;">
    <code codeHighlight class="language-java">
      public class DebugExample {
          public static void main(String[] args) {
              int a = 5;
              int b = 0;
              int result = divide(a, b);
              System.out.println("Result: " + result);
          }
          
          public static int divide(int x, int y) {
              return x / y; // This will cause an exception
          }
      }
    </code>
  </pre>
  <p style="color: #34495e;">Set a breakpoint at the division operation and use the debugger to step through the code.</p>

  <h3 style="color: #e67e22;">Best Practices for Debugging</h3>
  <ul style="color: #2c3e50; padding-left: 20px;">
    <li>Reproduce the issue consistently before attempting to fix it.</li>
    <li>Use version control (e.g., Git) to track changes and identify regressions.</li>
    <li>Break down complex problems into smaller, manageable parts.</li>
    <li>Write meaningful error messages and log entries to aid in troubleshooting.</li>
    <li>Keep dependencies and configurations up to date to avoid compatibility issues.</li>
  </ul>

  <h3 style="color: #2c3e50;">Conclusion</h3>
  <p style="color: #34495e;">
    Debugging is an essential skill for developers to ensure software reliability. By understanding common issues and applying effective debugging techniques, developers can efficiently identify and resolve errors, leading to robust and high-quality applications.
  </p>
</div>

`
}

    ]

}