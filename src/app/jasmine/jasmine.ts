export interface TestTopic{
    title: string;
    subTopic: string[]
}

export interface TopicsExplained{
  topic: string;
  content: string;
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

  topicsExplained: TopicsExplained[] = [
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
    },
    {
      topic: "it",
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #ffffff, #f7f7f7); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        ✅ Understanding <code>it</code> in Unit Testing (Jasmine)
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **Jasmine**, the \`it\` function is used to define **individual test cases** inside a \`describe\` block. It is essential for structuring and executing unit tests.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>it</code> in Jasmine?</h2>
    <p>The \`it\` function is used to **write a single test case**. It consists of a description and a function that contains the actual test logic.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Syntax</h2>
    <p>Here’s how a simple \`it\` block looks:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('Math Operations', () => {
      it('should add two numbers correctly', () => {
        expect(2 + 3).toBe(5);
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Writing Multiple Test Cases</h2>
    <p>Each \`it\` function should test **only one specific behavior**.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('String Operations', () => {
      it('should convert text to uppercase', () => {
        expect('hello'.toUpperCase()).toBe('HELLO');
      });

      it('should check string length', () => {
        expect('hello'.length).toBe(5);
      });
    });
    </code>
    </pre>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Using <code>it</code> with a Service</h2>
    <p>We can use \`it\` to test Angular services:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('CalculatorService', () => {
      let calculator: CalculatorService;

      beforeEach(() => {
        calculator = new CalculatorService();
      });

      it('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });

      it('should divide two numbers correctly', () => {
        expect(calculator.divide(10, 2)).toBe(5);
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Asynchronous Testing with <code>it</code></h2>
    <p>Jasmine allows testing **async operations** using \`done\`:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    it('should fetch user data asynchronously', (done) => {
      service.getUser().then(data => {
        expect(data.name).toBe('John');
        done();
      });
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ Best Practices</h2>
    <ul>
        <li>✅ Keep each \`it\` block **focused on one behavior**.</li>
        <li>✅ Use **meaningful descriptions** in \`it\`.</li>
        <li>✅ Avoid dependencies between test cases.</li>
        <li>✅ Use **async handling** properly for API calls.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 The \`it\` function is the core of unit testing in Jasmine. Use it wisely to write effective and reliable test cases! ✅
    </p>
</div>
`
    },
    {
      topic: 'beforeEach',
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f7f7f7, #ffffff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Understanding <code>beforeEach</code> in Unit Testing (Jasmine)
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **Jasmine**, the \`beforeEach\` function is used to **set up common logic** that runs **before every test case** inside a \`describe\` block.
        This is particularly useful for initializing variables, creating service instances, and performing repetitive setup operations.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>beforeEach</code> in Jasmine?</h2>
    <p>The \`beforeEach\` function helps avoid code duplication by executing a block of code before each test case in a \`describe\` block.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Syntax</h2>
    <p>Here’s how a simple \`beforeEach\` block works:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('Math Operations', () => {
      let value: number;

      beforeEach(() => {
        value = 10;  // This runs before each test
      });

      it('should add numbers correctly', () => {
        expect(value + 5).toBe(15);
      });

      it('should subtract numbers correctly', () => {
        expect(value - 5).toBe(5);
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Why Use <code>beforeEach</code>?</h2>
    <ul>
        <li>✅ Ensures a **consistent initial state** for each test.</li>
        <li>✅ Eliminates **duplicate setup code** inside test cases.</li>
        <li>✅ Helps **prevent side effects** between tests.</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Using <code>beforeEach</code> with a Service</h2>
    <p>In Angular unit testing, \`beforeEach\` is commonly used to set up services:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('CalculatorService', () => {
      let calculator: CalculatorService;

      beforeEach(() => {
        calculator = new CalculatorService();
      });

      it('should multiply two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
      });

      it('should divide two numbers correctly', () => {
        expect(calculator.divide(10, 2)).toBe(5);
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Using <code>beforeEach</code> in Angular Component Testing</h2>
    <p>When testing Angular components, we use \`beforeEach\` to set up the **TestBed**:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [MyComponent],
        providers: [MyService]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(MyComponent);
      component = fixture.componentInstance;
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ Common Mistakes</h2>
    <ul>
        <li>❌ Modifying variables **without resetting them** inside \`beforeEach\`.</li>
        <li>❌ Forgetting to call **\`compileComponents()\`** in Angular tests.</li>
        <li>❌ Placing logic inside \`beforeEach\` that **should be inside individual tests** instead.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 The \`beforeEach\` function ensures a clean and consistent test environment. Use it wisely for **efficient and maintainable** test cases! ✅
    </p>
</div>
`
    },
    {
      topic: 'beforeAll',
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f7f7f7, #ffffff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Understanding <code>beforeAll</code> in Unit Testing (Jasmine)
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **Jasmine**, the \`beforeAll\` function is used to **execute setup logic once** before all test cases (\`it\` blocks) inside a \`describe\` block.
        This is useful for expensive operations like **database connections, API calls, or resource-heavy initializations**.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>beforeAll</code> in Jasmine?</h2>
    <p>The \`beforeAll\` function ensures a block of code runs **only once** before all test cases execute in a \`describe\` block.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Syntax</h2>
    <p>Here's how \`beforeAll\` is used:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('Database Connection', () => {
      let dbConnection: any;

      beforeAll(() => {
        console.log('Setting up database connection...');
        dbConnection = { connected: true };
      });

      it('should have a valid connection', () => {
        expect(dbConnection.connected).toBeTrue();
      });

      it('should fetch data successfully', () => {
        expect(dbConnection.connected).toBeTruthy();
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Why Use <code>beforeAll</code>?</h2>
    <ul>
        <li>✅ **Runs setup logic once** instead of before every test (like \`beforeEach\`).</li>
        <li>✅ **Improves performance** for expensive operations.</li>
        <li>✅ Ensures **initialization consistency** across tests.</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Using <code>beforeAll</code> with a Service</h2>
    <p>In Angular unit testing, \`beforeAll\` can be used to initialize services:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('UserService', () => {
      let service: UserService;

      beforeAll(() => {
        service = new UserService();
        service.loadInitialData(); // Runs only once
      });

      it('should return user data', () => {
        expect(service.getUser()).toBeDefined();
      });

      it('should update user profile', () => {
        service.updateUser({ name: 'John Doe' });
        expect(service.getUser().name).toBe('John Doe');
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Using <code>beforeAll</code> in Angular Component Testing</h2>
    <p>For Angular components, \`beforeAll\` can be used for one-time TestBed configurations:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    beforeAll(async () => {
      await TestBed.configureTestingModule({
        declarations: [MyComponent],
        providers: [MyService]
      }).compileComponents();
    });

    beforeAll(() => {
      fixture = TestBed.createComponent(MyComponent);
      component = fixture.componentInstance;
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ When NOT to Use <code>beforeAll</code></h2>
    <ul>
        <li>❌ When **each test needs a fresh setup**, use <code>beforeEach</code> instead.</li>
        <li>❌ When **state must be reset between tests** (e.g., modifying global variables).</li>
        <li>❌ If **tests modify shared data**, it can cause unintended side effects.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 The \`beforeAll\` function is perfect for one-time setup logic in tests. Use it **wisely** for better performance and maintainability! ✅
    </p>
</div>
`
    },
    {
      topic: "afterEach",
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f7f7f7, #ffffff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Understanding <code>afterEach</code> in Unit Testing (Jasmine)
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **Jasmine**, the \`afterEach\` function is used to **execute cleanup logic** after each test case (\`it\` block) inside a \`describe\` block.
        This ensures that **tests do not affect each other** and resources are properly cleaned up.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>afterEach</code> in Jasmine?</h2>
    <p>The \`afterEach\` function ensures a block of code runs **after every test case** inside a \`describe\` block.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Syntax</h2>
    <p>Here's how \`afterEach\` is used:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('User Session', () => {
      let session: any;

      beforeEach(() => {
        session = { active: true };
      });

      afterEach(() => {
        session = null;
      });

      it('should start a new session', () => {
        expect(session.active).toBeTrue();
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Why Use <code>afterEach</code>?</h2>
    <ul>
        <li>✅ **Ensures test isolation** by cleaning up resources after each test.</li>
        <li>✅ **Prevents shared state issues** between test cases.</li>
        <li>✅ **Useful for database cleanup, spies reset, or DOM manipulations.**</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Using <code>afterEach</code> with Spies</h2>
    <p>In Jasmine, \`afterEach\` is commonly used to reset spies:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('UserService', () => {
      let service: UserService;

      beforeEach(() => {
        service = new UserService();
        spyOn(service, 'getUser');
      });

      afterEach(() => {
        service.getUser.calls.reset();
      });

      it('should call getUser once', () => {
        service.getUser();
        expect(service.getUser).toHaveBeenCalledTimes(1);
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Using <code>afterEach</code> in Angular Component Testing</h2>
    <p>For Angular components, \`afterEach\` is helpful for destroying components and avoiding memory leaks:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    afterEach(() => {
      fixture.destroy();
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ When NOT to Use <code>afterEach</code></h2>
    <ul>
        <li>❌ If **no cleanup is required**, avoid unnecessary \`afterEach\` blocks.</li>
        <li>❌ Do **not modify global state** inside \`afterEach\`.</li>
        <li>❌ If using \`beforeAll\`, cleanup should be done in \`afterAll\` instead.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 The \`afterEach\` function is perfect for keeping tests **isolated and clean**. Use it **wisely** to avoid side effects! ✅
    </p>
</div>
`
    },
    {
      topic: `afterAll`,
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f7f7f7, #ffffff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔄 Understanding <code>afterAll</code> in Unit Testing (Jasmine)
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **Jasmine**, the \`afterAll\` function is used to **execute cleanup logic once** after all test cases (\`it\` blocks) inside a \`describe\` block.
        This is useful for releasing resources like **database connections, API calls, or clearing temporary data**.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>afterAll</code> in Jasmine?</h2>
    <p>The \`afterAll\` function ensures a block of code runs **only once** after all test cases execute in a \`describe\` block.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Syntax</h2>
    <p>Here's how \`afterAll\` is used:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('Database Connection', () => {
      let dbConnection: any;

      beforeAll(() => {
        console.log('Setting up database connection...');
        dbConnection = { connected: true };
      });

      afterAll(() => {
        console.log('Closing database connection...');
        dbConnection = null;
      });

      it('should have a valid connection', () => {
        expect(dbConnection.connected).toBeTrue();
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Why Use <code>afterAll</code>?</h2>
    <ul>
        <li>✅ **Runs cleanup logic once** instead of after every test (like \`afterEach\`).</li>
        <li>✅ **Frees up memory and resources** after tests finish.</li>
        <li>✅ Ensures **proper cleanup** for isolated test environments.</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Using <code>afterAll</code> with a Service</h2>
    <p>In Angular unit testing, \`afterAll\` can be used to destroy services or clean up data:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('UserService', () => {
      let service: UserService;

      beforeAll(() => {
        service = new UserService();
        service.loadInitialData();
      });

      afterAll(() => {
        service.clearUserData();
      });

      it('should return user data', () => {
        expect(service.getUser()).toBeDefined();
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Using <code>afterAll</code> in Angular Component Testing</h2>
    <p>For Angular components, \`afterAll\` can be used for cleanup actions:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    afterAll(() => {
      fixture.destroy();
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ When NOT to Use <code>afterAll</code></h2>
    <ul>
        <li>❌ When **each test needs individual cleanup**, use <code>afterEach</code> instead.</li>
        <li>❌ If **resources must be reset between tests**, avoid <code>afterAll</code>.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 The \`afterAll\` function is perfect for one-time cleanup logic in tests. Use it **wisely** for better resource management! ✅
    </p>
</div>
`
    },
    {
      topic: "TestBed",
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f7f7f7, #ffffff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f7f7f7, #ffffff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🏗️ Understanding <code>TestBed</code> in Angular Unit Testing
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **Angular**, <code>TestBed</code> is the **primary API** for configuring and initializing unit tests. It helps simulate Angular's runtime environment, allowing you to create, compile, and test components, services, and directives in an isolated manner.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>TestBed</code>?</h2>
    <p><code>TestBed</code> is a testing utility provided by Angular's **@angular/core/testing** package that helps in setting up testing modules dynamically.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Syntax</h2>
    <p>Here's how to use <code>TestBed</code> for an Angular component test:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    import { TestBed } from '@angular/core/testing';
    import { MyComponent } from './my-component.component';

    describe('MyComponent', () => {
      let component: MyComponent;
      let fixture;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [MyComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(MyComponent);
        component = fixture.componentInstance;
      });

      it('should create the component', () => {
        expect(component).toBeTruthy();
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Key Functions of <code>TestBed</code></h2>
    <ul>
        <li>✅ **configureTestingModule()** - Sets up the testing module with components, services, and dependencies.</li>
        <li>✅ **compileComponents()** - Asynchronously compiles the declared components.</li>
        <li>✅ **createComponent()** - Creates a component instance for testing.</li>
        <li>✅ **inject()** - Retrieves an instance of a service or dependency.</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Using <code>TestBed</code> with Services</h2>
    <p>When testing services, <code>TestBed.inject()</code> is used to get an instance:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    import { TestBed } from '@angular/core/testing';
    import { MyService } from './my-service.service';

    describe('MyService', () => {
      let service: MyService;

      beforeEach(() => {
        TestBed.configureTestingModule({
          providers: [MyService]
        });
        service = TestBed.inject(MyService);
      });

      it('should be created', () => {
        expect(service).toBeTruthy();
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Using <code>TestBed</code> for Dependency Injection</h2>
    <p>For Angular services that depend on other services, use dependency injection:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    TestBed.configureTestingModule({
      providers: [MyService, { provide: ApiService, useClass: MockApiService }]
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ Best Practices</h2>
    <ul>
        <li>✅ Always call **compileComponents()** before creating components.</li>
        <li>✅ Use **inject()** for services instead of creating them manually.</li>
        <li>✅ Mock services using **useClass** or **useValue** when needed.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 <code>TestBed</code> is a powerful tool for Angular unit testing. Use it to create robust and reliable tests for your components and services! ✅
    </p>
</div>


      </div>
      `
    },
    {
      topic: `mocking`,
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #f7f7f7, #ffffff); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #2c3e50; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🎭 Understanding <code>Mocking</code> in Unit Testing
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #2c3e50; border-radius: 6px;">
        In **unit testing**, **mocking** is a technique used to replace real dependencies with **fake implementations** to isolate the unit being tested. This ensures **reliable, fast, and controlled** tests without relying on actual services or APIs.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is Mocking?</h2>
    <p>Mocking allows us to simulate dependencies like services, APIs, or database calls, preventing unwanted side effects in unit tests.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Mocking with Jasmine Spies</h2>
    <p>Jasmine provides **spies** to mock methods of services or objects.</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('UserService Mocking', () => {
      let userService: UserService;

      beforeEach(() => {
        userService = new UserService();
        spyOn(userService, 'getUser').and.returnValue({ name: 'Mock User', age: 30 });
      });

      it('should return mocked user data', () => {
        const user = userService.getUser();
        expect(user.name).toBe('Mock User');
        expect(user.age).toBe(30);
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Why Use Mocking?</h2>
    <ul>
        <li>✅ **Avoids dependencies** like HTTP requests or databases.</li>
        <li>✅ **Speeds up tests** by bypassing actual service calls.</li>
        <li>✅ **Ensures test reliability** by eliminating external failures.</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Mocking Services in Angular Tests</h2>
    <p>Mocking services in Angular **TestBed** setup:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    class MockUserService {
      getUser() {
        return { name: 'Mocked John', role: 'Admin' };
      }
    }

    describe('UserComponent', () => {
      let component: UserComponent;
      let fixture: ComponentFixture<UserComponent>;

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [UserComponent],
          providers: [{ provide: UserService, useClass: MockUserService }]
        }).compileComponents();
      });

      beforeEach(() => {
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
      });

      it('should use mocked service', () => {
        expect(component.user.name).toBe('Mocked John');
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Mocking HTTP Calls in Angular</h2>
    <p>Using **HttpTestingController** to mock API responses:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('UserService with HTTP Mocking', () => {
      let service: UserService;
      let httpMock: HttpTestingController;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [UserService]
        });

        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
      });

      it('should mock an HTTP GET request', () => {
        service.getUser().subscribe(user => {
          expect(user.name).toBe('Mock User');
        });

        const req = httpMock.expectOne('https://api.example.com/user');
        req.flush({ name: 'Mock User' });

        httpMock.verify();
      });
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ Common Mistakes in Mocking</h2>
    <ul>
        <li>❌ Forgetting to call <code>httpMock.verify()</code> when mocking HTTP calls.</li>
        <li>❌ Over-mocking, which may hide real implementation issues.</li>
        <li>❌ Using spies incorrectly, leading to flaky tests.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 Mocking is essential for **efficient and reliable** unit tests. Mastering it helps isolate components and create **robust Angular applications**! ✅
    </p>
</div>
`
    },
    {
      topic: `spyOn`,
      content: `<div style="font-family: 'Arial', sans-serif; padding: 20px; background: linear-gradient(135deg, #fdfbfb, #e2e2e2); border-radius: 12px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #ffffff; text-align: center; background: #34495e; padding: 15px; border-radius: 8px; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);">
        🔍 Understanding <code>spyOn</code> in Jasmine Unit Testing
    </h1>

    <p style="font-size: 17px; line-height: 1.8; color: #333; padding: 10px; background: #ffffff; border-left: 5px solid #34495e; border-radius: 6px;">
        In **Jasmine**, <code>spyOn</code> is used to **track, intercept, and control function calls** during unit testing. It helps test functions without executing their actual implementations.
    </p>

    <h2 style="color: #3498db; background: #d4edfa; padding: 10px; border-radius: 6px;">🎯 What is <code>spyOn</code>?</h2>
    <p>It allows us to **spy on an object's method**, track calls, and return custom values without executing the actual method.</p>

    <h2 style="color: #2ecc71; background: #d4edda; padding: 10px; border-radius: 6px;">📦 Basic Usage of <code>spyOn</code></h2>
    <p>Consider a **UserService** that fetches user data:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    class UserService {
      getUser() {
        return { name: 'John Doe', age: 25 };
      }
    }

    describe('UserService Test', () => {
      let userService: UserService;

      beforeEach(() => {
        userService = new UserService();
        spyOn(userService, 'getUser').and.returnValue({ name: 'Mock User', age: 30 });
      });

      it('should return mocked user data', () => {
        const user = userService.getUser();
        expect(user.name).toBe('Mock User');
        expect(user.age).toBe(30);
      });
    });
    </code>
    </pre>

    <h2 style="color: #f39c12; background: #fce8d3; padding: 10px; border-radius: 6px;">🛠️ Different Ways to Use <code>spyOn</code></h2>
    <ul>
        <li>✅ **<code>and.returnValue(value)</code>** → Always returns the specified value.</li>
        <li>✅ **<code>and.callThrough()</code>** → Calls the original function.</li>
        <li>✅ **<code>and.callFake(fn)</code>** → Replaces the function with a fake implementation.</li>
        <li>✅ **<code>and.stub()</code>** → Creates a dummy method without behavior.</li>
    </ul>

    <h2 style="color: #9b59b6; background: #f5e6ff; padding: 10px; border-radius: 6px;">📌 Using <code>spyOn</code> with HTTP Calls</h2>
    <p>Mocking an **HTTP request** in an Angular service:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    describe('HttpClient Mocking', () => {
      let service: UserService;
      let httpMock: HttpTestingController;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [UserService]
        });

        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
        spyOn(service, 'getUser').and.returnValue(of({ name: 'Mock User', age: 30 }));
      });

      it('should return mocked user from spyOn', () => {
        service.getUser().subscribe(user => {
          expect(user.name).toBe('Mock User');
          expect(user.age).toBe(30);
        });
      });
    });
    </code>
    </pre>

    <h2 style="color: #e67e22; background: #fce8d3; padding: 10px; border-radius: 6px;">🔥 Using <code>spyOn</code> to Count Calls</h2>
    <p>We can track how many times a function is called:</p>
    <pre style="background: #272822; color: #f8f8f2; padding: 10px; border-radius: 6px;">
    <code class="language-javascript" codeHighlight>
    it('should track function calls', () => {
      const spy = spyOn(userService, 'getUser').and.returnValue({ name: 'Mock User' });

      userService.getUser();
      userService.getUser();

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
    });
    </code>
    </pre>

    <h2 style="color: #e74c3c; background: #f8d7da; padding: 10px; border-radius: 6px;">⚠️ Common Mistakes with <code>spyOn</code></h2>
    <ul>
        <li>❌ Forgetting to spy before calling the function.</li>
        <li>❌ Using <code>spyOn</code> on properties instead of methods.</li>
        <li>❌ Not cleaning up spies between tests.</li>
    </ul>

    <p style="margin-top: 20px; font-weight: bold; color: #2c3e50; background: #f1f1f1; padding: 15px; border-radius: 6px;">
        🚀 <code>spyOn</code> is a powerful tool for **mocking dependencies and tracking calls** in unit tests. Master it to create reliable and isolated Angular tests! ✅
    </p>
</div>
`
    }
  ]
}