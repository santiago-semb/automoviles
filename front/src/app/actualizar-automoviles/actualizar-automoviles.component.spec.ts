import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAutomovilesComponent } from './actualizar-automoviles.component';

describe('ActualizarAutomovilesComponent', () => {
  let component: ActualizarAutomovilesComponent;
  let fixture: ComponentFixture<ActualizarAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarAutomovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
