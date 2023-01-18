import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerAutomovilesComponent } from './ver-automoviles.component';

describe('VerAutomovilesComponent', () => {
  let component: VerAutomovilesComponent;
  let fixture: ComponentFixture<VerAutomovilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerAutomovilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerAutomovilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
