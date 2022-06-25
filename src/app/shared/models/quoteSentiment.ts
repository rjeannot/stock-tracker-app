import { QuoteIntro } from "./quote";
import { SentimentListResponse } from "./sentimentList";

export interface QuoteSentiment {
  storedSymbol: string;
  quoteIntro?: QuoteIntro;
  sentimentList: SentimentListResponse;
}