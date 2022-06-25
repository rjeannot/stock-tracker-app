import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, Observable, of, tap } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { QuoteSentiment } from 'src/app/shared/models/quoteSentiment';
import { ApiService } from 'src/app/shared/services/api.service';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-quote-sentiment',
  templateUrl: './quote-sentiment.component.html',
  styleUrls: []
})
export class QuoteSentimentComponent implements OnInit {
  quoteSentiment$: Observable<QuoteSentiment> = new Observable<QuoteSentiment>;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.quoteSentiment$ = this.route.paramMap.pipe(
      map((paramMap) => paramMap.get('symbol') as string),
      switchMap((symbol) =>
        combineLatest([
          of(symbol),
          this.apiService.getQuoteList(symbol as string).pipe(
            filter((quoteListRes) => quoteListRes.result.length > 0),
            map((quoteListRes) =>
              quoteListRes.result.find((quoteIntro) => quoteIntro.symbol === symbol)
            )
          ),
          this.apiService.getSentimentList(
            symbol as string,
            Utils.substractMonths(3),
            new Date()
          )
        ])
      ),
      map(([symbol, quoteIntro, sentimentList]) => {
        const quoteSentiment: QuoteSentiment = {
          storedSymbol: symbol,
          quoteIntro,
          sentimentList,
        };
        return quoteSentiment;
      })
    );
  }

}
