import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarProductosComponent } from './editar-productos.component';

describe('EditarProductosComponent', () => {
  let component: EditarProductosComponent;
  let fixture: ComponentFixture<EditarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
