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
}
    ]

}