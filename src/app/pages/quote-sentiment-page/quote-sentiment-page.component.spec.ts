import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSentimentPageComponent } from './quote-sentiment-page.component';

describe('QuoteSentimentPageComponent', () => {
  let component: QuoteSentimentPageComponent;
  let fixture: ComponentFixture<QuoteSentimentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteSentimentPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSentimentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
