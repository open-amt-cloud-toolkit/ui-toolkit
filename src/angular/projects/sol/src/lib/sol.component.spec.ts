import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolComponent } from './sol.component';

describe('SolComponent', () => {
  let component: SolComponent;
  let fixture: ComponentFixture<SolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
