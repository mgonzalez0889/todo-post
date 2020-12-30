import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuevoPostComponent } from './nuevo-post.component';

describe('NuevoPostComponent', () => {
  let component: NuevoPostComponent;
  let fixture: ComponentFixture<NuevoPostComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
