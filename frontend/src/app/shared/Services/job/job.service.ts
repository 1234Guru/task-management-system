import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../models/global.model';
import { environment } from '../../environments/environment'; // Import environment
import { environmentManipulation } from '../../../state/job.state';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private baseUrl = environmentManipulation();
  private API = this.baseUrl + '/jobs';

  constructor(private http: HttpClient) {

  }

  fetchJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.API);
  }

  createJob(job: Job) {
    return this.http.post(this.API, job);
  }

  updateJob(id: number, job: Job) {
    return this.http.put(`${this.API}/${id}`, job);
  }

  deleteJob(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
  getJobById(id: number): Observable<Job> {
  return this.http.get<Job>(`${this.API}/${id}`);
}

}