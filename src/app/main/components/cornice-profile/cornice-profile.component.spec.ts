import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorniceProfileComponent } from './cornice-profile.component';

describe('CorniceProfileComponent', () => {
  let component: CorniceProfileComponent;
  let fixture: ComponentFixture<CorniceProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorniceProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorniceProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
