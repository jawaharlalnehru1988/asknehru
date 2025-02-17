export interface TestTopic{
    title: string;
    subTopic: string[]
}
export class Jasmine {
    
  testingTopic:TestTopic[] = [
    {title: "Intro", subTopic: ["describe", "it", "beforeEach", "beforeAll", "afterEach", "afterAll", "TestBed", "mocking", "spyOn"]},
    {title: "TestBed", subTopic: ["CompileComponent", "ConfigureCompiler", "configure Testing Module", "create Component", "Execute", "flesh Effects"]},
    {title: "Spy", subTopic: ["SpyOn", "SpyOnProperty", "throwUnless", "throwUnlessAsync", "spyOnAllFunctions", "clock", "any"]},
    {title: "Matcher", subTopic: ["toBe", "not", "toBeCloseTo", "toBeFalse", "toBeDefined", "toBeFalsy", "toBeGreaterThan", "toBeGreaterThanOrEqual", "toBeInstanceOf", "toBeLessThan", "toBeLessThanOrEqual", "toBeNaN", "toBeNegativeInfinity", "toBeNull", "toBeTrue", "toBeTruthy", "toBeUndefined", "toContain", "toEqual", "toHaveBeenCalled", "toHaveBeenCalledBefore", "toHaveBeenCalledOncewith", "ToHaveBeenCalledTimes", "toHaveSize", "toMatch", "toThrow", "toThrowError", "withContext", "toBeResolve", "toBeReject"]},
    {title: "Services", subTopic:["get", "put", "post", "delete"]},
    {title: "functions", subTopic: ["named", "anonymous", "arrow", "IIFE", "Higher order", "parametrised", "returning", "function returns function", "callback", "hoisting", "generator", "Async", "constructor", "Recursive", "Rest Paremeter", "Impure", "Fist class", "method", "class methods", "prototype", "call", "bind", "apply"]},
    {title: "Array methods", subTopic:["map", "forEach", "reduce", "reduceRight", "find", "findIndex", "filter", "every", "some", "sort", "reverse", "copyWithin", "fill", "includes", "indexOf", "lastIndexOf", "slice", "join", "concat", "pop", "push", "shift", "unshift", "splice", "toString"] },
    {title: "Object methods", subTopic: ["hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]},
    {title: "Promises", subTopic: ["resolve", "reject", "pending", "then", "catch", "finally"]},
    {title: "Observables", subTopic: ["next", "error", "complete", ]},
    {title: "Asynchronous", subTopic: ["setTimeout", "setInterval", "setImmediate", "clearTimeout", "clearInterval", "clearImmediate", "requestAnimationFrame", "cancelAnimationFrame"]},
    {title: "Pipes", subTopic: ["async", "date", "async", "date", "async", "date", "async", "date", "async", "date", "async", "date", "async", "date", "async", "date"]},
    {title: "Typescript", subTopic: ["as unknown as", "as", "any", "typeof", "instanceof"]},
    {title: "Route Gaurds", subTopic: ["canActivate", "canActivateChild", "canDeactivate", "canLoad"]},
    {title: "Interceptors", subTopic: ["intercept", "handle", "next", "error", "complete"]},
    {title: "Directives", subTopic: ["custom"]},
    {title: "Third party libraries", subTopic: ["chart", "message", "primeng", "material"]},
  ]

  topicsExplained = [
    {
      topic: "Intro",
      content: `<div style="font-family: 'Arial', sans-serif; padding: 8px; background: linear-gradient(135deg, #ffffff, #f7f7f7); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        ✅ Introduction to Unit Testing in Angular
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        Unit testing in Angular ensures **each individual component, service, or function** works as expected. It is an essential part of **test-driven development (TDD)** to maintain high-quality code.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is Unit Testing?</h2>
    <p>Unit testing involves testing **small, isolated pieces of code** to ensure correctness. In Angular, we use **Jasmine** as the testing framework and **Karma** as the test runner.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Testing Setup in Angular</h2>
    <p>Angular applications come with a built-in testing setup using Jasmine and Karma. To verify your test setup, run:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-bash" codeHighlight>
    ng test
    </code>
    </pre>
    <p>🔹 This command launches Karma and runs all the test cases.</p>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Writing a Simple Test</h2>
    <p>Let's write a simple **unit test for a service** in Angular.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    import { TestBed } from '@angular/core/testing';
    import { MyService } from './my-service.service';

    describe('MyService', () => {
      let service: MyService;

      beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MyService);
      });

      it('should be created', () => {
        expect(service).toBeTruthy();
      });

      it('should return the correct value', () => {
        expect(service.getData()).toBe('Hello World');
      });
    });
    </code>
    </pre>
    <p>🔹 **describe**: Defines a test suite.  
       🔹 **it**: Defines an individual test case.  
       🔹 **expect**: Used for assertions.</p>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Testing Components</h2>
    <p>Unit testing components in Angular requires setting up a **TestBed** environment:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    import { ComponentFixture, TestBed } from '@angular/core/testing';
    import { MyComponent } from './my-component.component';

    describe('MyComponent', () => {
      let component: MyComponent;
      let fixture: ComponentFixture<MyComponent>;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [MyComponent]
        });

        fixture = TestBed.createComponent(MyComponent);
        component = fixture.componentInstance;
      });

      it('should create the component', () => {
        expect(component).toBeTruthy();
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Running and Debugging Tests</h2>
    <ul>
        <li>🔹 Run all tests: <code>ng test</code></li>
        <li>🔹 Run a specific test file: <code>ng test --include=src/app/my-service.service.spec.ts</code></li>
        <li>🔹 Run tests in headless mode: <code>ng test --watch=false --browsers=ChromeHeadless</code></li>
    </ul>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ Best Practices</h2>
    <ul>
        <li>✅ Keep unit tests **small and focused**.</li>
        <li>✅ Use **mocks and spies** to avoid dependencies.</li>
        <li>✅ Ensure each test **runs independently**.</li>
        <li>✅ Run tests frequently to catch bugs early.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Mastering unit testing in Angular ensures **robust and error-free** applications. Start writing tests today! ✅
    </p>
</div>
`
    },
    {
      topic: `describe`,
      content: `<div style="font-family: 'Arial', sans-serif; padding: 8px; background: linear-gradient(135deg, #ffffff, #f7f7f7); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        📝 Understanding <code>describe</code> in Unit Testing (Jasmine)
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **Jasmine**, the \`describe\` function is used to **group test cases** logically. It helps in structuring unit tests for better readability and maintainability.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>describe</code>?</h2>
    <p>The \`describe\` function defines a **test suite**. It groups related test cases under a single unit.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Syntax</h2>
    <p>Here’s how a simple \`describe\` block looks:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('MyService Tests', () => {
      it('should return true', () => {
        expect(true).toBe(true);
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Grouping Related Tests</h2>
    <p>We can use \`describe\` to logically group multiple tests related to a particular feature or function.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('Calculator Service', () => {
      let calculator: CalculatorService;

      beforeEach(() => {
        calculator = new CalculatorService();
      });

      it('should add two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
      });

      it('should subtract two numbers correctly', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
      });
    });
    </code>
    </pre>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Nesting <code>describe</code> Blocks</h2>
    <p>We can **nest** \`describe\` blocks for better test organization.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('User Service', () => {
      describe('getUser() method', () => {
        it('should return user data', () => {
          expect(service.getUser()).toEqual({ name: 'John' });
        });
      });

      describe('updateUser() method', () => {
        it('should update user name', () => {
          expect(service.updateUser('Alice')).toBe('User updated');
        });
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Using <code>beforeEach</code> Inside <code>describe</code></h2>
    <p>The \`beforeEach\` function inside \`describe\` runs **before each test** inside that block.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('String Manipulation Service', () => {
      let service: StringService;

      beforeEach(() => {
        service = new StringService();
      });

      it('should convert text to uppercase', () => {
        expect(service.toUpperCase('hello')).toBe('HELLO');
      });
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ Best Practices</h2>
    <ul>
        <li>✅ Use \`describe\` to group **related test cases**.</li>
        <li>✅ Use **nested \`describe\`** for better organization.</li>
        <li>✅ Keep each test **small and focused**.</li>
        <li>✅ Use **meaningful descriptions** in \`describe\`.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Using \`describe\` correctly makes unit tests well-structured, easy to read, and maintainable. Start organizing your tests today! ✅
    </p>
</div>
`
    }
  ]
}