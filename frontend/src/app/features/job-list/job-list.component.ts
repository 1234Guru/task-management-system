import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { JobService } from '../../shared/Services/job/job.service';
import { jobList, selectedJob } from '../../state/job.state';
import { Job } from '../../shared/models/global.model';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCard,
  MatCardTitle,
  MatCardSubtitle,
  MatCardActions,
  MatCardHeader,
} from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FeedbackService } from '../../shared/feedback/feedback.service';
@Component({
  selector: 'app-job-list',
  imports: [
    MatButtonModule,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardActions,
    MatCard,
    CommonModule,
    MatCardHeader,
  ],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss',
})
export class JobListComponent implements OnInit {
  jobs = jobList;
  loading: WritableSignal<boolean> = signal(false);
  displayedColumns = [
    'company',
    'position',
    'status',
    'applied_date',
    'actions',
  ];


  constructor(private jobService: JobService, private router: Router, private feedback:FeedbackService) {}


  ngOnInit() {
    this.loading.set(true);
    this.jobService.fetchJobs().subscribe({
      next: (data) => jobList.set(data),
      error: (err) => {
         this.feedback.error(err?.error?.message || 'Failed to fetch jobs')
      },
      complete: () => this.loading.set(false),
    });
  }


  edit(job: Job) {
    selectedJob.set(job);
    this.router.navigate(['/edit-summary']);
  }


  remove(id: number) {
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobService.deleteJob(id).subscribe(() => {
        jobList.set(jobList().filter((j) => j.id !== id));
      });
    }
  }

  //prevent unncessary loads
  trackById(index: number, item: Job) {
    return item.id;
  }
}
