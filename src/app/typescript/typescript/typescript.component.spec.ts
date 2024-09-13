import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TypescriptComponent } from './typescript.component';

fdescribe('TypescriptComponent', () => {
  let component: TypescriptComponent;
  let fixture: ComponentFixture<TypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(TypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add element at the end of fruits array', ()=>{
    const newFruit = "Orange";
    component.addElementAtEnd(newFruit);
    expect(component.fruits).toContain(newFruit);
  });

  it("should remove element from the end of the array", ()=>{
    component.removeElementAtEnd();
    expect(component.fruits).not.toContain('Jackfruit');
  });

  it('should remove element from the beginning of the array', ()=>{
    component.removeElementAtStart();
    expect(component.fruits).not.toContain('Banana');
  });

  it('should add element at the beginning of the fruit array', ()=>{
    component.addElementAtFirst("Pinapple");
    expect(component.fruits).toContain("Pinapple");
  } )



});
