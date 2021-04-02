import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadcomponentComponent } from './headcomponent.component';

describe('HeadcomponentComponent', () => {
  let component: HeadcomponentComponent;
  let fixture: ComponentFixture<HeadcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
