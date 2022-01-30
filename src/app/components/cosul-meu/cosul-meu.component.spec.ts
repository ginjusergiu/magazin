import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosulMeuComponent } from './cosul-meu.component';

describe('CosulMeuComponent', () => {
  let component: CosulMeuComponent;
  let fixture: ComponentFixture<CosulMeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosulMeuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosulMeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
