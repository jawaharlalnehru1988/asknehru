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
    {title: "Observables", subTopic: ["next", "error", "complete"]},
    {title: "Asynchronous", subTopic: ["setTimeout", "setInterval", "setImmediate", "clearTimeout", "clearInterval", "clearImmediate", "requestAnimationFrame", "cancelAnimationFrame"]},
    {title: "Pipes", subTopic: ["async", "date", "async", "date", "async", "date", "async", "date", "async", "date", "async", "date", "async", "date", "async", "date"]},
    {title: "Typescript", subTopic: ["as unknown as", "as", "any", "typeof", "instanceof"]},
    {title: "Route Gaurds", subTopic: ["canActivate", "canActivateChild", "canDeactivate", "canLoad"]},
    {title: "Interceptors", subTopic: ["intercept", "handle", "next", "error", "complete"]},
    {title: "Directives", subTopic: ["custom"]},
    {title: "Third party libraries", subTopic: ["chart", "message", "primeng", "material"]},
  ]
}