import { signal } from '@angular/core';
import { Job } from '../shared/models/global.model';


//define state

export const jobList = signal<Job[]>([]);
export const selectedJob = signal<Job | null>(null);
export const loading = signal(false);

//define state