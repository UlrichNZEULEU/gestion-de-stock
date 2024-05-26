import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMvtStkArticleComponent } from './details-mvt-stk-article.component';

describe('DetailsMvtStkArticleComponent', () => {
  let component: DetailsMvtStkArticleComponent;
  let fixture: ComponentFixture<DetailsMvtStkArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsMvtStkArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsMvtStkArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
