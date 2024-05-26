import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFounisseurComponent } from './page-founisseur.component';

describe('PageFounisseurComponent', () => {
  let component: PageFounisseurComponent;
  let fixture: ComponentFixture<PageFounisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageFounisseurComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
