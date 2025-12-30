import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitCommandsComponent } from './git-commands.component';

describe('GitCommandsComponent', () => {
  let component: GitCommandsComponent;
  let fixture: ComponentFixture<GitCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitCommandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
