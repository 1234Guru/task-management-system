import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { JobService } from '../../shared/Services/job/job.service';
import { Job } from '../../shared/models/global.model';
import { jobList } from '../../state/job.state';
import { FeedbackService } from '../../shared/feedback/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss'],
})
export class JobFormComponent implements OnInit, OnChanges {
  @Input() job: Job | null = null;
  @Output() close = new EventEmitter<void>();
  form: ReturnType<FormBuilder['group']>;

  constructor(
    private fb: FormBuilder,
    private jobService: JobService,
    private feedback: FeedbackService,
    private router: Router
  ) {
    this.form = this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      status: ['Applied'],
      notes: [''],
      applied_date: [null],
    });
  }

  ngOnInit() {
    if (this.job) this.form.patchValue(this.job);
  }

  ngOnChanges() {
    if (this.job) this.form.patchValue(this.job);
    else this.form.reset({ status: 'Applied' });
  }

  submit() {
    if (this.form.invalid) return;

    const raw = this.form.value;
    // Ensure required fields are strings, not null/undefined
    const formData: Job = {
      company: raw.company ?? '',
      position: raw.position ?? '',
      status: (raw.status as Job['status']) ?? 'Applied',
      notes: raw.notes ?? '',
      applied_date: raw.applied_date ?? undefined,
      ...(this.job?.id ? { id: this.job.id } : {}),
    };

    const request = this.job?.id
      ? this.jobService.updateJob(this.job.id!, formData)
      : this.jobService.createJob(formData);

    request.subscribe({
      next: () => {
        this.close.emit(); // Notify parent
        this.form.reset({ status: 'Applied' });
        this.feedback.success(this.job ? 'Updated!' : 'Job Added!');

        // Refresh jobs
        this.jobService.fetchJobs().subscribe((data) => jobList.set(data));
      },
      error: (err) =>
        this.feedback.error(err?.error?.message || 'Failed to save'),
    });
  }
  
  goToSummary() {
    this.router.navigate(['/edit-summary'], {
      state: this.form.value,
    });
  }

  trackByStatus(index: number, status: string): string {
    return status;
  }
}
