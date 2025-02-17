import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirProductosComponent } from './anadir-productos.component';

describe('AnadirProductosComponent', () => {
  let component: AnadirProductosComponent;
  let fixture: ComponentFixture<AnadirProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnadirProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnadirProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
