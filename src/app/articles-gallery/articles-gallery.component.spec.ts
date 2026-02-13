import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesGalleryComponent } from './articles-gallery.component';

describe('ArticlesGalleryComponent', () => {
  let component: ArticlesGalleryComponent;
  let fixture: ComponentFixture<ArticlesGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticlesGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
