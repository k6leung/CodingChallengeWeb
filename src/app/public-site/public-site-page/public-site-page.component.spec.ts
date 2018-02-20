import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicSitePageComponent } from './public-site-page.component';

describe('PublicSitePageComponent', () => {
  let component: PublicSitePageComponent;
  let fixture: ComponentFixture<PublicSitePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicSitePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicSitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
