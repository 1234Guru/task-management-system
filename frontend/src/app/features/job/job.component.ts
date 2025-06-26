import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { JobFormComponent } from '../job-form/job-form.component';
import { JobListComponent } from '../job-list/job-list.component';
import { selectedJob } from '../../state/job.state';
import { StatsComponent } from "../stats/stats.component";
@Component({
  selector: 'app-job',
  imports: [JobListComponent, JobFormComponent, CommonModule, MatButtonModule, StatsComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  selected = selectedJob;

 

  clear() {
    selectedJob.set(null);
  }
}