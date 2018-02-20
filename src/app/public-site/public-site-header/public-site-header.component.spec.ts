import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSiteHeaderComponent } from './public-site-header.component';

describe('PublicSiteHeaderComponent', () => {
  let component: PublicSiteHeaderComponent;
  let fixture: ComponentFixture<PublicSiteHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSiteHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSiteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
