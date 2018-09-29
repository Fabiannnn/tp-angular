import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoAbiertoComponent } from './nuevo-abierto.component';

describe('NuevoAbiertoComponent', () => {
  let component: NuevoAbiertoComponent;
  let fixture: ComponentFixture<NuevoAbiertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoAbiertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
