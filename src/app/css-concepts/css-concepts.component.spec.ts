import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssConceptsComponent } from './css-concepts.component';

describe('CssConceptsComponent', () => {
  let component: CssConceptsComponent;
  let fixture: ComponentFixture<CssConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssConceptsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
