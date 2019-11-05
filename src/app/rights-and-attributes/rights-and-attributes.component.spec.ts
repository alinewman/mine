import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightsAndAttributesComponent } from './rights-and-attributes.component';

describe('RightsAndAttributesComponent', () => {
  let component: RightsAndAttributesComponent;
  let fixture: ComponentFixture<RightsAndAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightsAndAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightsAndAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
