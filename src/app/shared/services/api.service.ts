import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuoteListResponse } from '../models/quoteList';
import { map, Observable } from 'rxjs';
import { QuoteData } from '../models/quote';
import { Utils } from '../utils';
import { SentimentListResponse } from '../models/sentimentList';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_URL = 'https://finnhub.io/api/v1/';
  TOKEN = 'car39viad3ib8nbu1ekg';

  constructor(private http: HttpClient) {}

  getQuoteList(searchQuery: string): Observable<QuoteListResponse> {
    return this.http.get<QuoteListResponse>(
      this.API_URL +
      'search?q=' +
      searchQuery +
      '&token=' +
      this.TOKEN
    );
  }

  getQuoteData(symbol: string): Observable<QuoteData> {
    return this.http.get<QuoteData>(
      this.API_URL +
      'quote?symbol=' +
      symbol +
      '&token=' +
      this.TOKEN
    );
  }

  getSentimentList(
    symbol: string,
    from: Date,
    to: Date
  ): Observable<SentimentListResponse> {
    return this.http
      .get<SentimentListResponse>(
        this.API_URL +
        'stock/insider-sentiment?symbol=' +
        symbol +
        '&from=' +
        Utils.convertDateToISOFormat(from) +
        '&to=' +
        Utils.convertDateToISOFormat(to) +
        '&token=' +
        this.TOKEN
      )
      .pipe(
        map((sentimentListRes) => {
          const filteredSentimentListRes: SentimentListResponse = {
            symbol: sentimentListRes.symbol,
            data: sentimentListRes.data.slice(-3),
          };
          return filteredSentimentListRes;
        })
      );
  }
}
