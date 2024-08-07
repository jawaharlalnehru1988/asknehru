import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptComponent } from './typescript.component';

describe('TypescriptComponent', () => {
  let component: TypescriptComponent;
  let fixture: ComponentFixture<TypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default fruits', () => {
    expect(component.fruits).toEqual(["Banana", "Mango", "Jackfruit"]);
  });

  it('should add a fruit to the end of the array', () => {
    component.push('Apple');
    expect(component.fruits).toEqual(["Banana", "Mango", "Jackfruit", "Apple"]);
  });

  it('should remove the last fruit from the array', () => {
    const lastFruit = component.fruits.pop();
    expect(lastFruit).toBe("Jackfruit");
    expect(component.fruits).toEqual(["Banana", "Mango"]);
  });

  it('should remove the first fruit from the array', () => {
    const firstFruit = component.fruits.shift();
    expect(firstFruit).toBe("Banana");
    expect(component.fruits).toEqual(["Mango", "Jackfruit"]);
  });

  it('should add a fruit to the start of the array', () => {
    component.unshift();
    expect(component.fruits).toEqual(["first fruit", "Banana", "Mango", "Jackfruit"]);
  });
});
