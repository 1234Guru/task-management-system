import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFormComponent } from './job-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobFormComponent', () => {
  let component: JobFormComponent;
  let fixture: ComponentFixture<JobFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobFormComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
