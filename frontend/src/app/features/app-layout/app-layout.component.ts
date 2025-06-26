import { Component, signal, HostListener } from '@angular/core';
import { Route, RouterOutlet, Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../shared/Services/auth/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-app-layout',
  imports: [
    RouterModule,
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterOutlet,
],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {

  isHandset = signal(false);
  isSmallScreen = window.innerWidth < 720;
  sidenavOpened = true;

  constructor(
    private auth: AuthService,
    private router: Router,
    private observer: BreakpointObserver
  ) {
    this.observer
      .observe([Breakpoints.Handset])
      .subscribe((result) => this.isHandset.set(result.matches));
  }



  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isSmallScreen = window.innerWidth < 720;
  }

  closeOnMobile() {
    if (this.isSmallScreen) this.sidenavOpened = false;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
}
