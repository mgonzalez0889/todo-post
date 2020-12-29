import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwigComponent } from './wysiwig.component';

describe('WysiwigComponent', () => {
  let component: WysiwigComponent;
  let fixture: ComponentFixture<WysiwigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WysiwigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
