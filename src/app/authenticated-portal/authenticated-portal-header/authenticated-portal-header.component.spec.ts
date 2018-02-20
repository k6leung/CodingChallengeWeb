import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedPortalHeaderComponent } from './authenticated-portal-header.component';

describe('AuthenticatedPortalHeaderComponent', () => {
  let component: AuthenticatedPortalHeaderComponent;
  let fixture: ComponentFixture<AuthenticatedPortalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatedPortalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedPortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
