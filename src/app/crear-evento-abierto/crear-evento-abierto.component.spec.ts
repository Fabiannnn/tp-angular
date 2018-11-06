/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CrearEventoAbiertoComponent } from './crear-evento-abierto.component';

describe('CrearEventoAbiertoComponent', () => {
  let component: CrearEventoAbiertoComponent;
  let fixture: ComponentFixture<CrearEventoAbiertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEventoAbiertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEventoAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
