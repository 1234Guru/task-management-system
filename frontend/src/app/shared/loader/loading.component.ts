import { Component } from '@angular/core';
import { loading } from '../../state/job.state';
import {MatProgressBarModule} from "@angular/material/progress-bar"
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loading',
  imports: [MatProgressBarModule, CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  loading = loading;
}
