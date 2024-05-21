import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserlistComponent } from './userlist.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('UserlistComponent', () => {
  let component: UserlistComponent;
  let fixture: ComponentFixture<UserlistComponent>;
  
  let userServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const userServiceStub = jasmine.createSpyObj('ApiService', ['deleteRecordById']);

    await TestBed.configureTestingModule({
      declarations: [UserlistComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: ApiService, useValue: userServiceStub }]
    }).compileComponents();

    userServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture = TestBed.createComponent(UserlistComponent);
    component = fixture.componentInstance;
  });

  it('should delete a record and show success message', () => {
    const idToDelete = 1;
    const mockResponse = { success: true };
    userServiceSpy.deleteRecordById.and.returnValue(of(mockResponse));

    spyOn(window, 'alert'); // Spy on alert function
    component.deleteRow(idToDelete);
    expect(userServiceSpy.deleteRecordById).toHaveBeenCalledWith(idToDelete);
    expect(window.alert).toHaveBeenCalledWith(`Record with id number "${idToDelete}" deleted successfully`);
  });

  it('should handle server error and show error message', () => {
    const idToDelete = 1;
    const mockError = new Error('Server error');
    userServiceSpy.deleteRecordById.and.returnValue(throwError(mockError));

    spyOn(window, 'alert'); // Spy on alert function

    component.deleteRow(idToDelete);

    expect(userServiceSpy.deleteRecordById).toHaveBeenCalledWith(idToDelete);
    expect(window.alert).toHaveBeenCalledWith('Some server error is there while deleting your data');
  });

});
