import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaJSONComponent } from './grafica-json.component';

describe('GraficaJSONComponent', () => {
  let component: GraficaJSONComponent;
  let fixture: ComponentFixture<GraficaJSONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaJSONComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaJSONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
