/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AprilSettingsCardComponent } from './april-settings-card.component';

describe('AprilSettingsCardComponent', () => {
  let component: AprilSettingsCardComponent;
  let fixture: ComponentFixture<AprilSettingsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprilSettingsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprilSettingsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
