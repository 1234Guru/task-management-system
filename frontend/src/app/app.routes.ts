import { Routes } from '@angular/router';
import { AuthGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./app.component').then((m) => m.AppComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
    ],
  },
  {
    path: '',
    loadComponent: () =>
      import('./features/app-layout/app-layout.component').then(
        (m) => m.AppLayoutComponent
      ),
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/job/job.component').then((m) => m.JobComponent),
      },
      {
        path: 'new',
        loadComponent: () =>
          import('./features/job-form/job-form.component').then(
            (m) => m.JobFormComponent
          ),
      },
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./features/job-form/job-form.component').then(
            (m) => m.JobFormComponent
          ),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./features/stats/stats.component').then(
            (m) => m.StatsComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./features/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];
