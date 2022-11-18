import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarFilmeComponent } from './deletar-filme.component';

describe('DeletarFilmeComponent', () => {
  let component: DeletarFilmeComponent;
  let fixture: ComponentFixture<DeletarFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
