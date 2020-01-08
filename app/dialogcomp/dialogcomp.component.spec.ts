import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcompComponent } from './dialogcomp.component';

describe('DialogcompComponent', () => {
  let component: DialogcompComponent;
  let fixture: ComponentFixture<DialogcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
