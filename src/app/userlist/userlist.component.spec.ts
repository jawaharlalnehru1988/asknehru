import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserlistComponent } from './userlist.component';
import { of, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';


describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let activatedRouteStub: any;
  let userService:ApiService;

  beforeEach(async () => {
    
    activatedRouteStub = {
      queryParams: of({ shouldExecuteFunction: 'true' }) // Default query params
    };

    await TestBed.configureTestingModule({
      declarations: [UserlistComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ ApiService, { provide: ActivatedRoute, useValue: activatedRouteStub }]
    }).compileComponents();

    userService = TestBed.inject(ApiService);
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy(); // Add a meaningful test here
  });


  it('should call receiveUserData and routerData on ngOnInit', () => {
    spyOn(component, 'receiveUserData');
    spyOn(component, 'routerData');

    component.ngOnInit();

    expect(component.receiveUserData).toHaveBeenCalled();
    expect(component.routerData).toHaveBeenCalled();
  });

  it('should set shouldExecuteFunction to true and call receiveUserData if queryParam is true', () => {
    spyOn(component, 'receiveUserData');
    
    component.routerData();

    expect(component.shouldExecuteFunction).toBe(true);
    expect(component.receiveUserData).toHaveBeenCalled();
  });

  it('should set shouldExecuteFunction to false and not call receiveUserData if queryParam is false', () => {
    activatedRouteStub.queryParams = of({ shouldExecuteFunction: 'false' });
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    spyOn(component, 'receiveUserData');
    
    component.routerData();

    expect(component.shouldExecuteFunction).toBe(false);
    expect(component.receiveUserData).not.toHaveBeenCalled();
  });

  it('should set shouldExecuteFunction to false and not call receiveUserData if queryParam is missing', () => {
    activatedRouteStub.queryParams = of({});
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    spyOn(component, 'receiveUserData');
    
    component.routerData();

    expect(component.shouldExecuteFunction).toBe(false);
    expect(component.receiveUserData).not.toHaveBeenCalled();
  });

  it("should call receiveUserData", ()=>{
    spyOn(component, 'receiveUserData');
    component.refresh();
    expect(component.receiveUserData).toHaveBeenCalled();
  });

});
