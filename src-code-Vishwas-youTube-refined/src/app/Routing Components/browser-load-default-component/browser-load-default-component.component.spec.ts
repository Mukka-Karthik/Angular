import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserLoadDefaultComponentComponent } from './browser-load-default-component.component';

describe('BrowserLoadDefaultComponentComponent', () => {
  let component: BrowserLoadDefaultComponentComponent;
  let fixture: ComponentFixture<BrowserLoadDefaultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserLoadDefaultComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserLoadDefaultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
