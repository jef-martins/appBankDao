import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcoesHeaderComponent } from './acoes-header.component';

describe('AcoesHeaderComponent', () => {
  let component: AcoesHeaderComponent;
  let fixture: ComponentFixture<AcoesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcoesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcoesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
