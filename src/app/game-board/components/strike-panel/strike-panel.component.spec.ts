import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikePanelComponent } from './strike-panel.component';

describe('StrikePanelComponent', () => {
  let component: StrikePanelComponent;
  let fixture: ComponentFixture<StrikePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrikePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
