import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { jobList } from '../../state/job.state';
import {JobStatus} from '../../shared/models/global.model'
import {StatusKey} from "../../shared/models/global.model"
@Component({
  selector: 'app-job-stats',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {
  jobs = jobList;

  readonly cards: { label: string; key: StatusKey }[] = [
    { label: 'Total',     key: 'total' },
    { label: 'Interview', key: 'interview' },
    { label: 'Offered',   key: 'offered' },
    { label: 'Rejected',  key: 'rejected' },
    { label: 'On Hold',   key: 'onHold' }
  ];
  

  get stats(): Record<StatusKey, number> {
    const counts: Record<StatusKey, number> = {
      total: 0,
      interview: 0,
      offered: 0,
      rejected: 0,
      onHold: 0
    };

    for (const job of this.jobs()) {
      counts.total++;
      switch (job.status) {
        case 'Interview':
          counts.interview++;
          break;
        case 'Offered':
          counts.offered++;
          break;
        case 'Rejected':
          counts.rejected++;
          break;
        case 'On Hold':
          counts.onHold++;
          break;
      }
    }

    return counts;
  }

trackByKey(index: number, item: { label: string; key: StatusKey }): StatusKey {
  return item.key;
}


}
