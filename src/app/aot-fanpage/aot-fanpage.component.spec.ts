import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AotFanpageComponent } from './aot-fanpage.component';

describe('AotFanpageComponent', () => {
  let component: AotFanpageComponent;
  let fixture: ComponentFixture<AotFanpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AotFanpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AotFanpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
