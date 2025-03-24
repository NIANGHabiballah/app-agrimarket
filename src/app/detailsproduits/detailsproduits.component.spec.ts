import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsproduitsComponent } from './detailsproduits.component';

describe('DetailsproduitsComponent', () => {
  let component: DetailsproduitsComponent;
  let fixture: ComponentFixture<DetailsproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsproduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
