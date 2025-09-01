import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberIdComponent } from './member-id.component';

describe('MemberIdComponent', () => {
  let component: MemberIdComponent;
  let fixture: ComponentFixture<MemberIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemberIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
