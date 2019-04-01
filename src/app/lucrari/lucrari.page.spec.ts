import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LucrariPage } from './lucrari.page';

describe('LucrariPage', () => {
  let component: LucrariPage;
  let fixture: ComponentFixture<LucrariPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LucrariPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LucrariPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
