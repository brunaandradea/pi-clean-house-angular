import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finalizacao } from './finalizacao';

describe('Finalizacao', () => {
  let component: Finalizacao;
  let fixture: ComponentFixture<Finalizacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Finalizacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Finalizacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
