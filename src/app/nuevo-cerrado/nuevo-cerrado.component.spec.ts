import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoCerradoComponent } from './nuevo-cerrado.component';

describe('NuevoCerradoComponent', () => {
  let component: NuevoCerradoComponent;
  let fixture: ComponentFixture<NuevoCerradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoCerradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoCerradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
