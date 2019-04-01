import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextePage } from './texte.page';

describe('TextePage', () => {
  let component: TextePage;
  let fixture: ComponentFixture<TextePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
