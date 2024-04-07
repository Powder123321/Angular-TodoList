import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcoreComponent } from './sidebarcore.component';

describe('SidebarcoreComponent', () => {
  let component: SidebarcoreComponent;
  let fixture: ComponentFixture<SidebarcoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarcoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarcoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
