// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserlistComponent } from './userlist.component';
// import { HttpClientModule } from '@angular/common/http';

// fdescribe('UserlistComponent', () => {
//   let component: UserlistComponent;
//   let fixture: ComponentFixture<UserlistComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UserlistComponent ],
//       imports: [HttpClientModule]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(UserlistComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { ComponentFixture, TestBed, inject, waitForAsync } from '@angular/core/testing';
import { UserlistComponent } from './userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { of } from 'rxjs';

class MockActivatedRoute {
  queryParams = of({ shouldExecuteFunction: 'true' });
}

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  let mockRouter: MockRouter;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserlistComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        { provide: Router, useClass: MockRouter },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as unknown as MockRouter;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute receiveUserData when shouldExecuteFunction is true', () => {
    component.shouldExecuteFunction = true;
    spyOn(component, 'receiveUserData');
    component.routerData();
    expect(component.receiveUserData).toHaveBeenCalled();
  });

  it('should not execute receiveUserData when shouldExecuteFunction is false', () => {
    component.shouldExecuteFunction = false;
    spyOn(component, 'receiveUserData');
    component.routerData();
    expect(component.receiveUserData).toHaveBeenCalled();
  });

  it('should call receiveUserData on refresh', () => {
    spyOn(component, 'receiveUserData');
    component.refresh();
    expect(component.receiveUserData).toHaveBeenCalled();
  });

  it('should navigate to /register with query params on updateData', () => {
    const mockRowDataForUpdate = { /* your mock data here */ };
    component.updateData(mockRowDataForUpdate);
    const navigationExtras: NavigationExtras = {
      queryParams: { data: JSON.stringify(mockRowDataForUpdate) },
    };
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/register'], navigationExtras);
  });

  // Add more test cases as needed for other methods and behaviors

});
