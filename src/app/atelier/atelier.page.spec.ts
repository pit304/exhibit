import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierPage } from './atelier.page';

describe('AtelierPage', () => {
  let component: AtelierPage;
  let fixture: ComponentFixture<AtelierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtelierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
