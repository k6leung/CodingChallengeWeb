import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedPortalPageComponent } from './authenticated-portal-page.component';

describe('AuthenticatedPortalPageComponent', () => {
  let component: AuthenticatedPortalPageComponent;
  let fixture: ComponentFixture<AuthenticatedPortalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatedPortalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedPortalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
