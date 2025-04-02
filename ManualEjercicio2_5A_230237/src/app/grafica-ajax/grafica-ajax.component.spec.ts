import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaAjaxComponent } from './grafica-ajax.component';

describe('GraficaAjaxComponent', () => {
  let component: GraficaAjaxComponent;
  let fixture: ComponentFixture<GraficaAjaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaAjaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaAjaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
