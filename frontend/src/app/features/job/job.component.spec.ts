import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobComponent } from './job.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
