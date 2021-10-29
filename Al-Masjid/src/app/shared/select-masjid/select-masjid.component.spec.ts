import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMasjidComponent } from './select-masjid.component';

describe('SelectMasjidComponent', () => {
  let component: SelectMasjidComponent;
  let fixture: ComponentFixture<SelectMasjidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectMasjidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMasjidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
