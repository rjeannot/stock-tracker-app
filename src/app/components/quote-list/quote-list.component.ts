import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, tap } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api.service';
import { StoredStockListService } from 'src/app/shared/services/stored-stock-list.service';
import { Quote } from 'src/app/shared/models/quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: []
})
export class QuoteListComponent implements OnInit {

  quoteList$: Observable<Quote[]> = new Observable<Quote[]>;

  constructor(
    private localStorageStockListService: StoredStockListService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.quoteList$ = this.localStorageStockListService.localStorageStockList$.pipe(
      switchMap((savedStocks) =>
        combineLatest(
          savedStocks.map((stock) => {
            return combineLatest([
              this.apiService.getQuoteList(stock).pipe(
                filter((symbols) => symbols.result.length > 0),
                map((symbols) =>
                  symbols.result.find((v) => v.symbol === stock)
                )
              ),
              this.apiService.getQuoteData(stock)
            ]).pipe(
              map(([quoteIntro, quoteData]) => {
                const quote: Quote = {
                  storedSymbol: stock,
                  quoteIntro,
                  quoteData,
                };
                return quote;
              })
            );
          })
        )
      )
    );
  }

  removeStock(symbol: string) : void {
    this.localStorageStockListService.removeStock(symbol);
  }

}
