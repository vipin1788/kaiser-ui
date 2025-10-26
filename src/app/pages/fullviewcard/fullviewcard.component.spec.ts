import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullviewcardComponent } from './fullviewcard.component';

describe('FullviewcardComponent', () => {
  let component: FullviewcardComponent;
  let fixture: ComponentFixture<FullviewcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullviewcardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullviewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
