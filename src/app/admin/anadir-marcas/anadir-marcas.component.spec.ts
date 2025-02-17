import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirMarcasComponent } from './anadir-marcas.component';

describe('AnadirMarcasComponent', () => {
  let component: AnadirMarcasComponent;
  let fixture: ComponentFixture<AnadirMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirMarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
