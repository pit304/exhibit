import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionDetailPage } from './competition-detail.page';

describe('CompetitionDetailPage', () => {
  let component: CompetitionDetailPage;
  let fixture: ComponentFixture<CompetitionDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
