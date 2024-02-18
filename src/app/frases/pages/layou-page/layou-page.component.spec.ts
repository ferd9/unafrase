import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouPageComponent } from './layou-page.component';

describe('LayouPageComponent', () => {
  let component: LayouPageComponent;
  let fixture: ComponentFixture<LayouPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayouPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
