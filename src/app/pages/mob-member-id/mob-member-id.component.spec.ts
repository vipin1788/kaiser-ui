import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobMemberIdComponent } from './mob-member-id.component';

describe('MobMemberIdComponent', () => {
  let component: MobMemberIdComponent;
  let fixture: ComponentFixture<MobMemberIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobMemberIdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobMemberIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
