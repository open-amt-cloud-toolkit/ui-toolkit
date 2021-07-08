import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvmComponent } from './kvm.component';

describe('KvmComponent', () => {
  let component: KvmComponent;
  let fixture: ComponentFixture<KvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
