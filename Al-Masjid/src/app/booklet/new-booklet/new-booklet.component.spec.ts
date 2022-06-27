import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBookletComponent } from './new-booklet.component';

describe('NewBookletComponent', () => {
  let component: NewBookletComponent;
  let fixture: ComponentFixture<NewBookletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBookletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBookletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
