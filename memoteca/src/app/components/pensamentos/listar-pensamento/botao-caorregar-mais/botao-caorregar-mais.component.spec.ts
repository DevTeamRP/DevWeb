import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCaorregarMaisComponent } from './botao-caorregar-mais.component';

describe('BotaoCaorregarMaisComponent', () => {
  let component: BotaoCaorregarMaisComponent;
  let fixture: ComponentFixture<BotaoCaorregarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCaorregarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCaorregarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
