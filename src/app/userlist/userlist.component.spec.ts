import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UserlistComponent } from './userlist.component';
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

  it("should return sum of all even numbers from the array", ()=>{
    const array = [1, 2, 3, 4, 5, 6, 7, 8];
    const result =  component.evenNumbers(array);
    expect(result).toBe(20);
  });

  it("should return 0 if there are no even numbers in the array", ()=>{
    const array = [1, 3, 5, 7];
    const result = component.evenNumbers(array);
    expect(result).toBe(0);
  });
  it('should return the correct sum when all numbers are even', () => {
    const result = component.evenNumbers([2, 4, 6, 8]);
    expect(result).toBe(20);
  });
});
