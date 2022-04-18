import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGeralComponent } from './template-geral.component';

describe('TemplateGeralComponent', () => {
  let component: TemplateGeralComponent;
  let fixture: ComponentFixture<TemplateGeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateGeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
