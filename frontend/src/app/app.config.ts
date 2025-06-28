import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
export const appConfig: ApplicationConfig = {
  providers: [
    // ✅ Zone optimization
    provideZoneChangeDetection({ eventCoalescing: true }),

    // ✅ Router
    provideRouter(routes),

    // ✅ Angular Material
    MatSnackBarModule,
    provideAnimations(),

    // ✅ Correct HttpClient setup WITH interceptor support
    provideHttpClient(withInterceptorsFromDi()),

    // ✅ Optional hydration (if using SSR)
    provideClientHydration(withEventReplay()),

    // ✅ Token Interceptor DI registration
    MatFormFieldModule,
    MatInputModule,
  ]
};
