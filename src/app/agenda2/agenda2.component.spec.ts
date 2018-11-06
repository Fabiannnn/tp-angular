/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Agenda2Component } from './agenda2.component';

describe('Agenda2Component', () => {
  let component: Agenda2Component;
  let fixture: ComponentFixture<Agenda2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Agenda2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Agenda2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
