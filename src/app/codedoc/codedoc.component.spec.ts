import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { CodedocComponent } from './codedoc.component';

describe('CodedocComponent', () => {
  let component: CodedocComponent;
  let fixture: ComponentFixture<CodedocComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getCourses']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CodedocComponent],
      providers: [
        { provide: ApiService, useValue: apiServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CodedocComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call getCourse on ngOnInit', () => {
    spyOn(component, 'getCourse');

    // Act
    component.ngOnInit();

    // Assert
    expect(component.getCourse).toHaveBeenCalled();
  });
  it('should handle success case in getCourse', () => {
    // Arrange
    const mockCourses = { courses: [{ id: 1, name: 'Test Course' }] };
    apiService.getCourses.and.returnValue(of(mockCourses));

    // Act
    component.getCourse();

    // Assert
    expect(component.isContentLoading).toBeFalse();
    expect(component.courseDetails).toEqual(mockCourses.courses);
    expect(apiService.getCourses).toHaveBeenCalled();
  });

  it('should handle error case in getCourse', () => {
    // Arrange
    const consoleSpy = spyOn(window, 'alert'); // Spy on the alert method
    apiService.getCourses.and.returnValue(throwError(() => new Error('database source is not found')));

    // Act
    component.getCourse();

    // Assert
    expect(component.isContentLoading).toBeTrue();
    expect(apiService.getCourses).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith('database source is not found');
  });
  it('should return true for a palindrome string', () => {
    expect(component.isPalindrome('radar')).toBeTrue();
  });
});
