import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPatenteComponent } from './busqueda-patente.component';

describe('BusquedaPatenteComponent', () => {
  let component: BusquedaPatenteComponent;
  let fixture: ComponentFixture<BusquedaPatenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPatenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusquedaPatenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
