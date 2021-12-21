import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopfiyComponent } from './shopfiy.component';

describe('ShopfiyComponent', () => {
  let component: ShopfiyComponent;
  let fixture: ComponentFixture<ShopfiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopfiyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopfiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
