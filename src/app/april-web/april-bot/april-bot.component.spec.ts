/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AprilBotComponent } from './april-bot.component';

describe('AprilBotComponent', () => {
  let component: AprilBotComponent;
  let fixture: ComponentFixture<AprilBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprilBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprilBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
