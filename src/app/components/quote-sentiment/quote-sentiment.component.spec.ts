import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSentimentComponent } from './quote-sentiment.component';

describe('QuoteSentimentComponent', () => {
  let component: QuoteSentimentComponent;
  let fixture: ComponentFixture<QuoteSentimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteSentimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
