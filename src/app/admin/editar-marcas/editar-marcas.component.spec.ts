import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMarcasComponent } from './editar-marcas.component';

describe('EditarMarcasComponent', () => {
  let component: EditarMarcasComponent;
  let fixture: ComponentFixture<EditarMarcasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMarcasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMarcasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
