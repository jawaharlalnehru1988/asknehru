import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularAudioComponent } from './angular-audio.component';


describe('AngularAudioComponent', () => {
  let component: AngularAudioComponent;
  let fixture: ComponentFixture<AngularAudioComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularAudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
