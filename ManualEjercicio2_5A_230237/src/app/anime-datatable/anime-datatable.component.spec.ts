import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeDatatableComponent } from './anime-datatable.component';

describe('AnimeDatatableComponent', () => {
  let component: AnimeDatatableComponent;
  let fixture: ComponentFixture<AnimeDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeDatatableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
