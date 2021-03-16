import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochedetalleComponent } from './cochedetalle.component';

describe('CochedetalleComponent', () => {
  let component: CochedetalleComponent;
  let fixture: ComponentFixture<CochedetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochedetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochedetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
