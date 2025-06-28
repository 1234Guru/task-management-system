import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../../services/posts.service';
import { MatSort } from '@angular/material/sort';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  imports:[MatFormField,MatLabel, MatTableModule,ReactiveFormsModule,  MatFormFieldModule,
    MatInputModule, MatIcon, FormsModule, CommonModule],
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  displayedColumns = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<Post>([]);
 
  localFilter = new FormControl('');

@ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.localFilter.valueChanges.subscribe(val => {
      this.dataSource.filter = (val || '').trim().toLowerCase();
    });
  }
ngAfterViewInit() {
  this.dataSource.sort = this.sort;
}
  /** Called imperatively by AppComponent */
  updateData(data: Post[]) {
    this.dataSource.data = data;
  }
}