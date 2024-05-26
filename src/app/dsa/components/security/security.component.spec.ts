import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityComponent } from './security.component';
import { MatMenuModule } from '@angular/material/menu';

describe('SecurityComponent', () => {
  let component: SecurityComponent;
  let fixture: ComponentFixture<SecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityComponent ],
      imports:[MatMenuModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should log the value', ()=>{
    spyOn(console, 'log');
    const valueId = 123;
    component.accessId(valueId);
    
    expect(console.log).toHaveBeenCalledWith('valueId :', valueId);
  });
  it('should console the session value', ()=>{
    spyOn(console, 'log');
    const value = "234";
    component.sessionManage(value);
    expect(console.log).toHaveBeenCalledWith('value :', value);
    expect(component.topic).toBe(value);
  })
});
