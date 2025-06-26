import { TestBed } from '@angular/core/testing';
import { JobService } from './job.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobService]
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(JobService);
    expect(service).toBeTruthy();
  });
});
