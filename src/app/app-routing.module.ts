import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockListPageComponent } from './pages/stock-list-page/stock-list-page.component';
import { QuoteSentimentPageComponent } from './pages/quote-sentiment-page/quote-sentiment-page.component';

const routes: Routes = [
  { path: '', component: StockListPageComponent },
  { path: 'sentiment/:symbol', component: QuoteSentimentPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
