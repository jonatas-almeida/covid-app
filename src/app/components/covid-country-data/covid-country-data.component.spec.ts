import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidCountryDataComponent } from './covid-country-data.component';

describe('CovidCountryDataComponent', () => {
  let component: CovidCountryDataComponent;
  let fixture: ComponentFixture<CovidCountryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidCountryDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCountryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
