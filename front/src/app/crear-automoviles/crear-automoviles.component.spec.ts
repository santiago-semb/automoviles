import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAutomovilesComponent } from './crear-automoviles.component';

describe('CrearAutomovilesComponent', () => {
  let component: CrearAutomovilesComponent;
  let fixture: ComponentFixture<CrearAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAutomovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
