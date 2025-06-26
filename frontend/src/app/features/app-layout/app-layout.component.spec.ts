import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppLayoutComponent } from './app-layout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppLayoutComponent,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: {} },
            queryParams: of({}),
            params: of({}),
            data: of({})
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
