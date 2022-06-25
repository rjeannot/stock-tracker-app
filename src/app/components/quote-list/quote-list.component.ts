import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, tap } from 'rxjs';
import { defaultIfEmpty, filter, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../shared/services/api.service';
import { StoredStockListService } from '../../shared/services/stored-stock-list.service';
import { Quote } from '../../shared/models/quote';

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
                ),
                defaultIfEmpty(null)
              ),
              this.apiService.getQuoteData(stock).pipe(defaultIfEmpty(null))
            ]).pipe(
              map(([quoteIntro, quoteData]) => {
                const quote: Quote = {
                  storedSymbol: stock,
                  quoteIntro: quoteIntro ?? undefined,
                  quoteData: quoteData ?? undefined,
                };
                return quote;
              })
            );
          })
        ).pipe(defaultIfEmpty([]))
      )
    );
  }

  removeStock(symbol: string) : void {
    this.localStorageStockListService.removeStock(symbol);
  }

}
