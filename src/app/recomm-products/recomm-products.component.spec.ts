import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommProductsComponent } from './recomm-products.component';

describe('RecommProductsComponent', () => {
  let component: RecommProductsComponent;
  let fixture: ComponentFixture<RecommProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
