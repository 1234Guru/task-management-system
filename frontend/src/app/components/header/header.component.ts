import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    // Angular Material
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter<string>();

  ctrl = new FormControl('', [Validators.minLength(3)]);

ngOnInit() {
  setTimeout(() => {
    this.ctrl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      const query = (value ?? '').trim();
      if (query.length === 0 || query.length >= 3) {
        this.search.emit(query);
      }
    });
  });
}


  onEnter() {
    if (this.ctrl.valid) {
      this.search.emit(this.ctrl.value!.trim());
    }
  }
}
