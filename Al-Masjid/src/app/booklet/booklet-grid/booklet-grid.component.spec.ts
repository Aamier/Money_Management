import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookletGridComponent } from './booklet-grid.component';

describe('BookletGridComponent', () => {
  let component: BookletGridComponent;
  let fixture: ComponentFixture<BookletGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookletGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookletGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
