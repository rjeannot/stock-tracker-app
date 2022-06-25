import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteSentimentComponent } from './components/quote-sentiment/quote-sentiment.component';
import { AppRoutingModule } from './app-routing.module';
import { StockListPageComponent } from './pages/stock-list-page/stock-list-page.component';
import { QuoteSentimentPageComponent } from './pages/quote-sentiment-page/quote-sentiment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    QuoteListComponent,
    QuoteComponent,
    QuoteSentimentComponent,
    StockListPageComponent,
    QuoteSentimentPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
