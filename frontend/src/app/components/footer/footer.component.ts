import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({ selector: 'app-footer', templateUrl: './footer.component.html', imports:[DatePipe, MatToolbarModule] })
export class FooterComponent {
  today = new Date();
}