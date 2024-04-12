import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodycoreComponent } from './bodycore.component';

describe('BodycoreComponent', () => {
  let component: BodycoreComponent;
  let fixture: ComponentFixture<BodycoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodycoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BodycoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
