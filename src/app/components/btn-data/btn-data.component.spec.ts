import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnDataComponent } from './btn-data.component';

describe('BtnDataComponent', () => {
  let component: BtnDataComponent;
  let fixture: ComponentFixture<BtnDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
